<template>
  <div v-if="loading" class="page-curd-loading">
    <Spin class="page-curd-loading-spin" size="large" />
  </div>
  <div v-else class="page-curd">
    <h3 class="page-curd-header">
      <Button type="primary" @click="handleCreateButtonClick">创建用户</Button>
    </h3>
    <Table
      class="page-curd-table"
      :loading="tableLoading"
      :columns="columns"
      :data="data"
    >
      <template
        v-for="column in columns"
        :slot="column.slot"
        slot-scope="{ row, index }"
      >
        <Form :key="column.slot" :model="row">
          <FieldGenerator
            v-for="(field, i) in column.formFields"
            :key="i"
            :field="field"
            @on-button-event="handleButtonEvent($event, row, index)"
          />
        </Form>
      </template>
    </Table>
    <div class="page-curd-pagenation">
      <Page
        :total="total"
        show-total
        show-elevator
        show-sizer
        @on-change="handlePageNumberChange($event)"
        @on-page-size-change="handlePageSizeChange($event)"
      />
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
import services from "@/service";
const { getPageConfig, getList, add, edit, del, toBlack, toWhite } = services[
  "curd"
];
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
      total: 0
    };
  },
  computed: {
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

    handlePageNumberChange(pageNumber) {
      this.pageNumber = pageNumber;
      this.getTableData();
    },

    handlePageSizeChange(pageSize) {
      this.pageSize = pageSize;
      console.log(pageSize);
      this.getTableData();
    },

    handleCreateButtonClick() {
      this.editModel = {
        type: "add",
        // 初始化用户状态，通常这个值是后端初始化
        status: "1"
      };
      this.editDialogOpeon = true;
    },

    handleButtonEvent($event, row, index) {
      console.log($event.name);
      this[$event.name](row, index);
    },

    editButtonClick(row, index) {
      // eslint-disable-next-line no-console
      this.editModel = row;
      this.editModel.index = index;
      this.editDialogOpeon = true;
    },

    deleteButtonClick(row) {
      this.deleteRequest(row);
    },

    toBlackButtonClick(row) {
      this.toBlackRequest(row);
    },

    toWhiteButtonClick(row) {
      this.toWhiteRequest(row);
    },

    handleSave() {
      this.$refs.FormGenerator.submit()
        .then(() => {
          // 新增
          if (this.editModel.type === "add") {
            this.editModel.type = "";
            this.addRequest(this.editModel);
            this.getTableData();
            return;
          }
          // 编辑
          this.editRequest(this.editModel);
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.log(err);
        });
    },

    addRequest(params) {
      add(params).then(res => {
        if (+res.status === 0) {
          this.$Message.info("Add Success!");
          this.editDialogOpeon = false;
          this.getTableData();
        } else {
          this.$Message.error("Add Failed!");
        }
      });
    },

    editRequest(params) {
      edit(params).then(res => {
        if (+res.status === 0) {
          this.$Message.info("Edit Success!");
          this.editDialogOpeon = false;
          this.getTableData();
        } else {
          this.$Message.error("Edit Failed!");
        }
      });
    },

    deleteRequest(params) {
      del(params).then(res => {
        if (+res.status === 0) {
          this.$Message.info("Delete Success!");
          this.getTableData();
        } else {
          this.$Message.error("Delete Failed!");
        }
      });
    },

    toBlackRequest(params) {
      toBlack(params).then(res => {
        if (+res.status === 0) {
          this.$Message.info("ToBlack Success!");
          this.getTableData();
        } else {
          this.$Message.error("ToBlack Failed!");
        }
      });
    },

    toWhiteRequest(params) {
      toWhite(params).then(res => {
        if (+res.status === 0) {
          this.$Message.info("toWhite Success!");
          this.getTableData();
        } else {
          this.$Message.error("toWhite Failed!");
        }
      });
    }
  }
};
</script>
<style lang="less">
.page-curd {
  &-loading {
    text-align: center;
    padding: 140px;
    &-spin {
      display: inline-block;
    }
  }
  &-header {
    margin-bottom: 10px;
    text-align: right;
  }
  &-table {
    .ivu-form-item {
      margin-bottom: 0;
    }

    .ivu-poptip-content {
      text-align: left;
    }
  }
  .ivu-table,
  .ivu-table-wrapper,
  .ivu-table-cell {
    overflow: visible;
  }

  &-pagenation {
    margin-top: 20px;
    text-align: right;
  }
}
</style>
