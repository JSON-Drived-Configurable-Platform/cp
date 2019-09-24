<template>
  <div class="page-form-popover">
    <Table :loading="tableLoading" :columns="columns" :data="data">
      <template slot-scope="{ row }" slot="action">
        <Poptip placement="left-start">
          <Button type="primary" size="small">编辑</Button>
          <div slot="title"><i>Custom title</i></div>
          <div slot="content">
            <FormGenerator
              ref="FormGenerator"
              :fields="editFormFields"
              :model="row"
              @on-submit="handleSubmit"
            />
          </div>
        </Poptip>
      </template>
    </Table>
    <div class="page-form-popover-pagenation">
      <Page :total="total" show-total />
    </div>
  </div>
</template>

<script>
import services from "@/service";
const { getPageConfig, getList } = services["form"];
export default {
  data() {
    return {
      loading: true,
      tableLoading: true,
      data: [],
      editModel: {},
      pageConfig: {},
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
    const { pageId } = this.$route.params;
    getPageConfig({
      pageId
    }).then(res => {
      this.pageConfig = res.data;
      this.loading = false;
      this.getTableData();
    });
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
    handleSubmit() {
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
.page-form-popover {
  .ivu-table,
  .ivu-table-wrapper,
  .ivu-table-cell {
    overflow: visible;
  }
  .ivu-poptip-body-content {
    text-align: left;
    width: 300px;
  }
  &-pagenation {
    margin-top: 20px;
    text-align: right;
  }
}
</style>
