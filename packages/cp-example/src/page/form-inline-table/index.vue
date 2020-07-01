<template>
  <Table :loading="tableLoading" :columns="columns" :data="data"/>
</template>
<script>
import pageConfig from "./page-config.js";
import tableExpand from "./tableExpand.vue";

import services from "@/service";
const { getList } = services["form"];
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    tableExpand
  },
  data() {
    return {
      tableLoading: true,
      data: [],
      pageConfig,
      pageSize: 10,
      pageNumber: 1,
      total: 0,
      model: {},
      columns: []
    }
  },
  computed: {
    options() {
      return this.pageConfig.form.options;
    },
    editFormFields() {
      return this.pageConfig.editFormFields;
    }
  },
  mounted() {
    this.getTableData();
    let columns = Object.assign([], this.pageConfig.columns);
    columns.unshift({
      type: "expand",
      width: 50,
      render: (h, params) => {
        console.log('params', params);
        return h(tableExpand, {
          props: {
            fields: this.editFormFields,
            editFormModel: params.row,
            index: params.index
          },
          on: {
            "on-save-event": this.handleSaveEvent,
            "on-cancel-event": this.handleCancelEvent
          }
        });
      }
    });
    this.columns = columns;
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
    handleSaveEvent($event, index, row) {
      this.$Message.info(`update success!${JSON.stringify(row)}`);
      this.data.splice(
        index,
        1,
        Object.assign({}, this.data[index], row, { _expanded: false })
      );
    },
    handleCancelEvent($event, index){
      this.data[index]._expanded = false;
      this.data.push();
    }
  }
};
</script>
