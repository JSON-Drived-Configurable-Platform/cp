<template>
  <div>
    <Table :loading="tableLoading" :columns="columns" :data="data">
      <template slot-scope="{ row }" slot="action">
        <Button
          type="primary"
          size="small"
          style="margin-right: 5px"
          @click="handleEditButtonClick(row)"
        >编辑</Button
        >
      </template>
    </Table>
    <MultipleModalForm
      ref="MultipleModalForm"
      :form-fields="editFormFields"
      @on-submit="handleSubmit($event)"
    />
  </div>
</template>

<script>
import MultipleModalForm from "@/components/block/form-multiple-modal";
import services from "@/service";
import pageConfig from "./page-config.js";
const { getList } = services["form"];

export default {
  components: {
    MultipleModalForm
  },
  data() {
    return {
      loading: true,
      tableLoading: true,
      data: [],
      pageConfig,
      model: {}
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
    }
  },
  mounted() {
    this.getTableData();
  },
  methods: {
    getTableData() {
      this.tableLoading = true;
      const { pageId } = this.$route.params;
      const params = {
        pageSize: this.pageSize,
        pageNumber: this.pageNumber,
        pageId
      };
      getList(params).then(res => {
        const { list, pageSize, pageNumber, total } = res.data;
        this.data = list || [];
        this.pageSize = pageSize || this.pageSize;
        this.pageNumber = pageNumber || this.pageNumber;
        this.total = total || this.total;
        this.tableLoading = false;
      });
    },
    handleEditButtonClick(row) {
      this.$refs.MultipleModalForm.open(row, '编辑');
    },
    handleSubmit(row) {
      this.$Message.info(`update success!${JSON.stringify(row)}`);
    }
  }
};
</script>

<style lang="less">
.page-form-modal {
  &-pagenation {
    margin-top: 20px;
    text-align: right;
  }
}
</style>
