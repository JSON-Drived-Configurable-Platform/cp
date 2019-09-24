<template>
  <div class="page-form-editable-table">
    <Form ref="form" :model="editModel">
      <Table :loading="tableLoading" :columns="columns" :data="data">
        <!-- Detail about slot-scope, see: -->
        <!-- iView Doc: https://iviewui.com/components/table#slot-scope_XF -->
        <!-- vue Doc: https://cn.vuejs.org/v2/guide/components-slots.html -->
        <template
          v-for="column in columns"
          :slot="column.slot"
          slot-scope="{ row, index }"
        >
          <FieldGenerator
            v-if="editModel.index === index"
            :key="column.slot"
            :field="column.formField"
            @on-submit="handleSave(index)"
          />
          <span v-else-if="column.slot !== 'action'" :key="column.slot">
            {{ row[column.slot] }}
          </span>
          <div v-else :key="column.slot">
            <Button @click="handleEditButtonClick(row, index)">编辑</Button>
          </div>
        </template>
      </Table>
    </Form>
    <div class="page-form-editable-table-pagenation">
      <Page :total="total" show-total />
    </div>
  </div>
</template>
<script>
import services from "@/service";
const { getEditableTablePageConfig, getList } = services["form"];
export default {
  data() {
    return {
      tableLoading: true,
      data: [],
      editModel: {},
      pageConfig: {},
      pageSize: 10,
      pageNumber: 1,
      total: 0
    };
  },
  computed: {
    options() {
      return this.pageConfig.form.options;
    },
    columns() {
      return this.pageConfig.columns;
    }
  },
  mounted() {
    const { pageId } = this.$route.params;
    getEditableTablePageConfig({
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
      this.editModel = row;
      this.editModel.index = index;
    },
    handleSave(index) {
      this.$refs.form.validate(valid => {
        if (valid) {
          console.log("update model", this.editModel);
          this.data.splice(index, 1, this.editModel);
          this.editModel.index = -1;
          this.$Message.info("update success!");
        } else {
          console.log("valid", valid);
        }
      });
    }
  }
};
</script>
<style lang="less">
.page-form-editable-table {
  &-pagenation {
    margin-top: 20px;
    text-align: right;
  }
  .ivu-form-item {
    margin-top: 20px;
  }
  .ivu-table,
  .ivu-table-wrapper,
  .ivu-table-cell {
    overflow: visible;
  }
}
</style>
