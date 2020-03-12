<template>
  <div v-if="loading" class="page-rbac-user-loading">
    <Spin class="page-rbac-user-loading-spin" size="large" />
  </div>
  <div v-else class="page-rbac-user">
    <h2 v-if="pageTitle" class="page-rbac-user-page-title">{{ pageTitle }}</h2>
    <h3 class="page-rbac-user-header">
      <Button type="primary" @click="handleCreateButtonClick">创建用户</Button>
    </h3>
    <Table
      class="page-rbac-user-table"
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
    <div class="page-rbac-user-pagenation">
      <Page
        :total="total"
        show-total
        show-elevator
        show-sizer
        @on-change="handlePageNumberChange($event)"
        @on-page-size-change="handlePageSizeChange($event)"
      />
    </div>
    <Modal v-model="editDialogOpeon" title="用户" footer-hide>
      <FormGenerator
        v-if="editDialogOpeon"
        ref="FormGenerator"
        :fields="editFormFields"
        :model="editModel"
        @on-submit="handleSave"
      />
    </Modal>
    <Modal v-model="editRoleDialogOpeon" title="用户角色" footer-hide>
      <FormGenerator
        v-if="editRoleDialogOpeon"
        ref="FormRoleGenerator"
        :fields="editRoleFormFields"
        :model="editModel"
        @on-submit="handleRoleSave"
      />
    </Modal>
  </div>
</template>
<script>
import services from "@/service";
const {
  getUserPageConfig,
  getUserList,
  userAdd,
  userEdit,
  userDel,
  getUserRolePermission,
  updateUserRole
} = services.rbac;
export default {
  data() {
    return {
      loading: true,
      tableLoading: true,
      data: [],
      editModel: {},
      pageConfig: {},
      editDialogOpeon: false,
      editRoleDialogOpeon: false,
      pageSize: 10,
      pageNumber: 1,
      total: 0
    };
  },
  computed: {
    pageTitle() {
      return this.pageConfig.title || "";
    },
    columns() {
      return this.pageConfig.columns;
    },
    editFormFields() {
      return this.pageConfig.editFormFields;
    },
    editRoleFormFields() {
      return this.pageConfig.editRoleFormFields;
    }
  },
  mounted() {
    const { pageId } = this.$route.params;
    getUserPageConfig({
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
      getUserList(params).then(res => {
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
      this[$event.name](row, index);
    },

    editButtonClick(row, index) {
      this.editModel = row;
      this.editModel.index = index;
      this.editDialogOpeon = true;
    },

    roleButtonClick(row, index) {
      // 获取用户的角色信息
      const username = row.username;
      getUserRolePermission({
        username
      })
        .then(res => {
          const { data, errno } = res;
          if (+errno === 0) {
            this.editModel = row;
            this.$set(
              this.editModel,
              "roles",
              data.roles.map(item => parseInt(item.id, 10))
            );
            this.editModel.index = index;
            this.editRoleDialogOpeon = true;
          }
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.log(err);
        });
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
          // 新增用户
          if (this.editModel.type === "add") {
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
      userAdd(params).then(res => {
        if (+res.errno === 0) {
          this.$Message.info("Add Success!");
          this.editDialogOpeon = false;
          this.getTableData();
        } else {
          this.$Message.error("Add Failed!");
        }
      });
    },

    editRequest(params) {
      userEdit(params).then(res => {
        if (+res.errno === 0) {
          this.$Message.info("Edit Success!");
          this.editDialogOpeon = false;
          this.getTableData();
        } else {
          this.$Message.error("Edit Failed!");
        }
      });
    },

    deleteRequest(params) {
      userDel(params).then(res => {
        if (+res.errno === 0) {
          this.$Message.info("Delete Success!");
          this.getTableData();
        } else {
          this.$Message.error("Delete Failed!");
        }
      });
    },

    // 角色保存
    handleRoleSave() {
      this.$refs.FormRoleGenerator.submit()
        .then(() => {
          const roles = this.editModel.roles;
          updateUserRole({
            username: this.editModel.username,
            role_id: roles.map(item => item.id).join(",")
          })
            .then(res => {
              if (+res.errno === 0) {
                this.$Message.info("Update Success!");
                this.editRoleDialogOpeon = false;

              } else {
                this.$Message.error("Update Failed!");
              }
            })
            .catch(err => {
              this.$Message.error(`Update Failed!${err.toString()}`);
            });
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.log(err);
        });
    }
  }
};
</script>
<style lang="less">
.page-rbac-user {
  &-page-title {
    font-size: 20px;
    margin: 10px auto 20px;
  }
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
  }
  .ivu-table,
  .ivu-table-wrapper,
  .ivu-table-cell {
    overflow: visible;
  }
  .ivu-poptip-confirm {
    text-align: left;
  }

  &-pagenation {
    margin-top: 20px;
    text-align: right;
  }
}
</style>
