<template>
  <div v-if="loading" class="page-curd-loading">
    <Spin class="page-curd-loading-spin" size="large" />
  </div>
  <div v-else class="page-curd">
    <h2 v-if="pageTitle" class="page-curd-page-title">{{ pageTitle }}</h2>
    <!-- <Divider dashed /> -->
    <!-- search conditions area -->
    <FormGenerator
      v-if="searchFormConfig.formFields.length > 0"
      ref="searchConditionsFormGenerator"
      class="page-curd-conditions"
      :fields="searchFormConfig.formFields || []"
      :model="searchFormModel"
      :options="searchFormConfig.options || {}"
    />
    <!-- header actions area -->
    <Divider dashed />
    <h3 class="page-curd-header">
      <FormGenerator
        v-if="headerActionsConfig.length > 0"
        ref="headerActionsFormGenerator"
        class="page-curd-header-actions"
        :fields="headerActionsConfig"
        :model="{}"
        :options="headerActionsOptions"
        @on-button-event="handleButtonEvent"
      />
    </h3>
    <!-- data table area -->
    <Table
      class="page-curd-table"
      :loading="tableLoading"
      :columns="tableColumnsConfig"
      :data="tableData"
    >
      <template
        v-for="column in tableColumnsConfig"
        :slot="column.slot"
        slot-scope="{ row, index }"
      >
        <Form :key="column.slot" :model="row">
          <Poptip
            v-if="column.poptip"
            :key="column.slot"
            placement="left-start"
          >
            <span>{{ row[column.slot] }}</span>
            <Icon type="ios-create-outline" size="20" />
            <div slot="content">
              <FieldGenerator
                v-for="(field, i) in column.poptip.formFields"
                :key="i"
                :field="field"
              />
            </div>
          </Poptip>
          <div v-if="column.formFields">
            <FieldGenerator
              v-for="(field, i) in column.formFields"
              :key="i"
              :field="field"
              @on-button-event="handleButtonEvent($event, row, index)"
            />
          </div>
        </Form>
      </template>
    </Table>
    <!-- data table pagenation area -->
    <div class="page-curd-pagenation">
      <Page
        :total="total"
        :showTotal="tablePagenationConfig.showTotal"
        :showElevator="tablePagenationConfig.showElevator"
        :showSizer="tablePagenationConfig.showSizer"
        @on-change="handlePageNumberChange($event)"
        @on-page-size-change="handlePageSizeChange($event)"
      />
    </div>
    <!-- dialogs area -->
    <Modal
      v-for="dialog in dialogsConfig"
      :key="dialog.name"
      v-model="dilogsOpen[dialog.name]"
      :title="dialog.title"
      footer-hide
    >
      <FormGenerator
        :fields="dialog.formFields"
        :model="dilogsModel[dialog.name]"
        @on-button-event="handleButtonEvent($event)"
      />
    </Modal>
  </div>
</template>
<script>
import axios from "../../libs/api.request";
import { mapState } from "vuex";
export default {
  watch: {
    searchFormModel: {
      deep: true,
      handler() {
        this.getTableData();
      }
    },
    pagePath() {
      this.getPageConfig();
    }
  },
  data() {
    return {
      pageConfig: {},
      // page init loading
      loading: true,
      // search form model
      searchFormModel: {},
      tableLoading: true,
      tableData: [],
      dilogsOpen: {},
      dilogsModel: {},
      // current page number
      pageNumber: 1,
      // total number for table data
      total: 0,
      headerActionsOptions: {}
    };
  },
  computed: {
    ...mapState({
      pagePath: state => state.page.pagePath
    }),
    pageTitle() {
      return this.pageConfig.title || "";
    },
    // search conditions form config
    searchFormConfig() {
      return this.pageConfig.search || {};
    },
    // header actions buttons config
    headerActionsConfig() {
      return this.pageConfig.actions || [];
    },
    tableRequestConfig() {
      return (this.pageConfig.table && this.pageConfig.table.request) || {};
    },
    tableColumnsConfig() {
      return (this.pageConfig.table && this.pageConfig.table.columns) || [];
    },
    tablePagenationConfig() {
      return (this.pageConfig.table && this.pageConfig.table.pagenation) || [];
    },
    dialogsConfig() {
      return this.pageConfig.dialogs || [];
    }
  },
  mounted() {
    this.getPageConfig();
  },
  methods: {
    getPageConfig() {
      this.loading = true;
      axios
        .request({
          url: `/api${this.pagePath}/page-config`,
          method: "get",
          params: {
            pagePath: this.pagePath
          }
        })
        .then(res => {
          this.pageConfig = res.data;
          this.loading = false;
          this.getTableData();
        });
    },
    getTableData() {
      this.tableLoading = true;
      const { api, method } = this.tableRequestConfig;
      const { pageId } = this.$route.params;
      const params = {
        pageSize: this.pageSize,
        pageNumber: this.pageNumber,
        pageId,
        ...this.searchFormModel
      };
      axios
        .request({
          method,
          url: api,
          params
        })
        .then(res => {
          const { list, pageSize, pageNumber, total } = res.data;
          this.tableData = list || [];
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

    handleButtonEvent($event, row = {}, index) {
      let { name } = $event;
      if (/dialog-/.test(name)) {
        let dialogName = name.replace(/dialog-/, "");
        this.$set(this.dilogsOpen, dialogName, true);
        this.$set(this.dilogsModel, dialogName, row);
      } else {
        this[$event.name](row, index);
      }
    },

    ajaxSuccess() {
      Object.keys(this.dilogsOpen).forEach(dialog => {
        this.$set(this.dilogsOpen, dialog, false);
        this.$set(this.dilogsModel, dialog, {});
      });
    },
    pageReset() {
      this.searchFormModel = {};
      this.tableData = [];
      this.dilogsOpen = {};
      this.dilogsModel = {};
      this.pageNumber = 0;
      this.total = 0;
    }
  },
  beforeRouteLeave(to, from, next) {
    this.pageReset();
    next();
  }
};
</script>
<style lang="less">
.page-curd {
  .ivu-divider-horizontal {
    margin: 10px auto;
  }
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
