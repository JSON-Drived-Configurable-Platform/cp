<template>
  <div v-if="loading" class="page-rbac-role-loading">
    <Spin class="page-rbac-role-loading-spin" size="large" />
  </div>
  <div v-else class="page-rbac-role">
    <h2 v-if="pageTitle" class="page-rbac-role-page-title">{{ pageTitle }}</h2>
    <h3 class="page-rbac-role-header">
      <Button type="primary" @click="handleCreateButtonClick">创建角色</Button>
    </h3>
    <Table
      class="page-rbac-role-table"
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
    <div class="page-rbac-role-pagenation">
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
        v-if="editDialogOpeon"
        ref="FormGenerator"
        :fields="editFormFields"
        :model="editModel"
        @on-submit="handleSave"
      />
    </Modal>
    <Modal v-model="editPermissionDialogOpeon" title="角色权限" footer-hide>
      <FormGenerator
        v-if="editPermissionDialogOpeon"
        ref="FormPermissionGenerator"
        :fields="editPermissionFormFields"
        :model="editModel"
        @on-submit="handlePermissionSave"
      />
    </Modal>
  </div>
</template>
<script>
import services from "@/service";
const {
  getRolePageConfig,
  getRoleList,
  roleAdd,
  roleEdit,
  roleDel,
  getRolePermission,
  updateRolePermission
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
      editPermissionDialogOpeon: false,
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
    editPermissionFormFields() {
      return this.pageConfig.editPermissionFormFields;
    }
  },
  mounted() {
    const { pageId } = this.$route.params;
    getRolePageConfig({
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
      getRoleList(params).then(res => {
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
      // eslint-disable-next-line no-console
      this.editModel = row;
      this.editModel.index = index;
      this.editDialogOpeon = true;
    },

    deleteButtonClick(row) {
      this.deleteRequest(row);
    },

    permissionButtonClick(row, index) {
      getRolePermission({
        role_id: row.id
      })
        .then(res => {
          const { data, errno } = res;
          if (+errno === 0) {
            const permissions = data.permissions;
            this.editModel = row;
            this.$set(this.editModel, "permissions", permissions.map(item => item.id));
            this.editModel.index = index;
            this.editPermissionDialogOpeon = true;
          }
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.log(err);
        });
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
      roleAdd(params).then(res => {
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
      roleEdit(params).then(res => {
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
      roleDel(params).then(res => {
        if (+res.errno === 0) {
          this.$Message.info("Delete Success!");
          this.getTableData();
        } else {
          this.$Message.error("Delete Failed!");
        }
      });
    },

    handlePermissionSave() {
      this.$refs.FormPermissionGenerator.submit()
        .then(() => {
          updateRolePermission({
            role_id: this.editModel.id,
            permission_ids: this.editModel.permissions.join(",")
          })
            .then(res => {
              if (+res.errno === 0) {
                this.$Message.info("Update Success!");
                this.editPermissionDialogOpeon = false;
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
.page-rbac-role {

  &-loading {
    text-align: center;
    padding: 140px;
    &-spin {
      display: inline-block;
    }
  }

  &-page-title {
    font-size: 20px;
    margin: 10px auto 20px;
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
