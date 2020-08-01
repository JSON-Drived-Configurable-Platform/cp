<template>
  <div class="page-form-popover">
    <Table
      :loading="tableLoading"
      :columns="columns"
      :data="data"
    >
      <template
        slot-scope="{ row }"
        slot="action"
      >
        <PopoverForm
          btn-text="编辑"
          :form-title="row.name"
          :form-model="row"
          :form-fields="editFormFields"
          :form-options="editFormOptions"
          @on-submit="handleSubmit($event)"
        />
      </template>
    </Table>
  </div>
</template>

<script>
import PopoverForm from "@/components/block/form-popover";
import pageConfig from "./page-config.js";
import services from "@/service";
const { getList } = services["form"];
export default {
  components: {
    PopoverForm
  },
  data() {
    return {
      loading: true,
      tableLoading: true,
      data: [],
      pageConfig,
      total: 0,
    };
  },
  computed: {
    options() {
      return this.pageConfig.form.options;
    },
    columns() {
      return this.pageConfig.columns;
    },
    editFormFields() {
      return this.pageConfig.editFormFields;
    },
    editFormOptions() {
      return this.pageConfig.editFormOptions;
    }
  },
  mounted() {
    this.getTableData();
  },
  methods: {
    getTableData() {
      this.tableLoading = true;
      getList().then(res => {
        const { list, pageSize, pageNumber, total } = res.data;
        this.data = list || [];
        this.total = total || this.total;
        this.tableLoading = false;
      });
    },

    handleSubmit(row) {
      this.$Message.info(`update success!${JSON.stringify(row)}`);
    }

  }
};
</script>

<style lang="less">
.page-form-popover {
  .ivu-table,
  .ivu-table-wrapper,
  .ivu-table-cell {
    overflow: visible;
  }
}
</style>
