<template>
  <div class="editable-table-demo">
    <Form ref="form" :model="editModel">
      <Table :columns="columns" :data="data">
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
            <Button @click="handleEdit(row, index)">编辑</Button>
            <Poptip
              confirm
              placement="left"
              title="确认删除"
              @on-ok="handleDelete"
            >
              <Button>删除</Button>
            </Poptip>
          </div>
        </template>
      </Table>
    </Form>
  </div>
</template>
<script>
import { columns, data } from "./config";
export default {
  data() {
    return {
      columns,
      data,
      editModel: {}
    };
  },
  methods: {
    handleEdit(item, index) {
      this.editModel = item;
      this.editModel.index = index;
    },
    handleDelete(item, index) {
      this.data.splice(index, 1);
    },
    handleSave(index) {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.data.splice(index, 1, this.editModel);
          this.editModel.index = -1;
        }
      });
    }
  }
};
</script>
<style lang="less">
.editable-table-demo {
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
