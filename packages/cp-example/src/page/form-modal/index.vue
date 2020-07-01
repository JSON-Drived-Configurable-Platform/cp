<template>
  <div class="page-form-modal">
    <div class="page-form-modal-header">
      <h3>{{pageConfig.title}}</h3>
      <p>
        {{pageConfig.desc}}
      </p>
    </div>
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
    <ModalForm
      ref="ModalForm"
      formTitle="编辑"
      :default-open-status="false"
      :form-fields="editFormFields"
      :form-model="editModel"
      :form-options="editFormOptions"
      @on-submit="handleSubmit"
    />
  </div>
</template>

<script>
import ModalForm from "@/components/block/form-modal";
import pageConfig from "./page-config.js";
import services from "@/service";
const { getList } = services["form"];
export default {
  components: {
    ModalForm
  },
  data() {
    return {
      loading: true,
      tableLoading: true,
      data: [],
      editModel: {},
      pageConfig
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
        this.tableLoading = false;
      });
    },
    handleEditButtonClick(row, index) {
      // eslint-disable-next-line no-console
      this.editModel = row;
      this.editModel.index = index;
      this.$refs.ModalForm.open();
    },
    handleSubmit(row) {
      this.$Message.info(`update success!${JSON.stringify(row)}`);
    }
  }
};
</script>

<style lang="less">
.page-form-modal {
  &-header {
    h3 {
      font-size: 20px;
      line-height: 28px;
      font-weight: 600;
    }
    p {
      margin: 30px 10px;
      font-size: 14px;
      line-height: 22px;
    }
  }
}
</style>
