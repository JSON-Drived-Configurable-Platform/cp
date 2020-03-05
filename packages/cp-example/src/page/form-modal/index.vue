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
    <div class="page-form-modal-pagenation">
      <Page :total="total" show-total />
    </div>
    <Modal v-model="editDialogOpeon" title="编辑" footer-hide>
      <FormGenerator
        ref="FormGenerator"
        :fields="editFormFields"
        :model="editModel"
        @on-submit="handleSave"
      />
    </Modal>
  </div>
</template>

<script>
import pageConfig from "./page-config.js";
import services from "@/service";
const { getList } = services["form"];
export default {
  data() {
    return {
      loading: true,
      tableLoading: true,
      data: [],
      editModel: {},
      pageConfig,
      editDialogOpeon: false,
      pageSize: 10,
      pageNumber: 1,
      total: 0,
      model: {},
      open: false
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
    handleEditButtonClick(row, index) {
      // eslint-disable-next-line no-console
      this.editModel = row;
      this.editModel.index = index;
      this.editDialogOpeon = true;
    },
    handleSave() {
      this.$refs.FormGenerator.submit()
        .then(data => {
          // eslint-disable-next-line no-console
          console.log("update model", data);
          this.open = false;
          this.$Message.info("update success!");
        })
        .catch(valid => {
          // eslint-disable-next-line no-console
          console.log("valid", valid);
        });
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
  &-form {
    margin: 30px 10px;
    width: 760px;
  }
  &-pagenation {
    margin-top: 20px;
    text-align: right;
  }
}
</style>
