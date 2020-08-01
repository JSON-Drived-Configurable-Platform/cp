<template>
  <div class="page-audit">
    <div v-if="loading" class="page-audit-loading">
      <Spin class="page-audit-loading-spin" size="large" />
    </div>
    <template v-else>
      <div
        v-for="config in pageConfig.tableList"
        :key="config.title"
        class="page-audit-section"
      >
        <h3 class="page-audit-header">
          {{ config.title }}
        </h3>
        <div class="page-audit-tool-bar">
          <a :href="downLoadUrl" v-if="downLoadUrl && config.needShowDownLoadButton">下载全部</a>
        </div>
        <Table
          :class="[config.changeFormStyle ? 'page-audit-table page-audit-form'
            : 'page-audit-table']"
          :columns="config.table.columns"
          :data="config.table.data"
          :show-header="config.showTableHeader"
          v-if="config.type==='table'"
        >
          <template
            v-for="column in config.table.columns"
            :slot="column.slot"
            :ref="column.slot"
            slot-scope="{ row, index }"
          >
            <Form
              v-if="column.formFields"
              :key="column.slot"
              :ref="column.slot + row.key"
              :model="row"
            >
              <!-- column.slot + row.key. eg: 'imgList' + 'action' or 'action' + 'name' -->
              <FieldGenerator
                v-for="(field, i) in column.formFields"
                :key="i"
                :field="field"
                :params-container="paramsContainer"
                @on-field-change="handleFieldChange($event, row, column.slot + row.key)"
                @on-button-event="handleButtonEvent($event, row, index)"
                @on-list-item-click="handleListItemClick"
              />
            </Form>
            <div v-else :key="column.key">{{row.value}}</div>
          </template>
        </Table>
      </div>
      <div class="page-audit-footer-actions" v-if="pageConfig.showButton">
        <Button type="primary" @click="handleSave(pageConfig.formVaildAction)">提交保存</Button>
      </div>
    </template>
    <Modal v-model="imgPreviewModalOpen" :width="800">
      <img
        class="page-audit-modal-img"
        :src="imgPreviewUrl"
        alt=""
      >
    </Modal>
    <Modal
      v-model="asureDialogShow"
      :title="asureDialogConfig.title"
    >
      <div>{{asureDialogConfig.content}}</div>
      <div slot="footer">
        <Button type="text" size="large" @click="cancel">取消</Button>
        <Button type="primary" size="large" @click="confirm">确定</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
/* eslint-disable no-console */
import {mapState} from 'vuex';
import axios from '@/libs/api.request';
import config from './config/index';
import {getSectionTableData} from './helper'

export default {
  data() {
    return {
      // page loading
      loading: true,
      // audit input data
      formModel: {},
      // img preview modal
      imgPreviewModalOpen: false,
      imgPreviewUrl: '',
      // asure dialog
      asureDialogShow: false,
      pageData: {
        isCheck: true
      },
      downLoadUrl: '',
    };
  },

  computed: {
    ...mapState({
      pagePath: state => state.page.pagePath
    }),

    // 通过本地维护的页面配置，字典映射信息，以及从后端拉取的数据来计算当前页面最终的渲染配置
    pageConfig() {
      if (config[this.pagePath]) {
        const pageConfig = config[this.pagePath].pageConfig;
        const tableList = pageConfig.tableList.map(sectionConfig => {
          const keyToLabel = config[this.pagePath].keyToLabelMap;
          sectionConfig.table.data = getSectionTableData(sectionConfig, this.pageData, keyToLabel)
          return sectionConfig;
        });
        pageConfig.tableList = tableList;
        return pageConfig;
      }
      return {
        request: {},
        dialogs: {},
        needDealUploadData: false,
        submitRequestInfo: {}
      }
    },

    pageDataRequestInfo() {
      return this.pageConfig && this.pageConfig.pageDataRequestInfo;
    },

    submitRequestInfo() {
      return this.pageConfig.submitRequestInfo && this.pageConfig.submitRequestInfo;
    },

    asureDialogConfig() {
      return this.pageConfig.dialogs || {};
    },

    needDealUploadData() {
      return this.pageConfig.needDealUploadData || false;
    },
    // 案件审核结论的选项状态，需要依赖其它审核项的结果。
    isPass() {
      let excludePassKeys = config[this.pagePath].excludePassKeys || [];
      return Object.keys(this.formModel)
        .filter(key => !excludePassKeys.includes(key))
        .every(key => {
          return this.formModel[key].auditStatus === '1';
        });
    },
    paramsContainer() {
      return {
        isPass: this.isPass
      };
    }
  },

  watch: {
    pagePath() {
      this.getPageDetail();
    }
  },

  mounted() {
    this.getPageDetail();
  },

  methods: {
    getPageDetail() {
      this.loading = true;
      // 先清数据避免上一个页面的数据在当前页面展示
      this.resetPageData();
      const {api, method} = this.pageDataRequestInfo;
      axios
        .request({
          method,
          url: api,
          params: {
            applyNo: this.$route.query.applyNo || 0
          }
        })
        .then(res => {
          if (res && res.data) {
            this.pageData = res.data;
            this.loading = false;
          }
        }).catch(err => {
          this.loading = false;
        });
    },
    /**
         * When the field value changed, sync the value to this.formModel
         * Notice there may be more than form in the per line in the table.
         *
         * @param {Object} $event event data
         * @param {String} $event.model the changed field's model, eg: auditStatus
         * @param {String} $event.value the change field's value, eg: 1 (one value of auditStatus's options)
         * @param {String} row.key the changed field' identifier, eg: name
         * @param {String} refKey the ref of the changed field's form, eg: actionname.
         */
    handleFieldChange({model, value}, row, refKey) {
      const key = row.key;
      console.log(key, model, value, row, refKey)
      // eslint-disable-next-line no-console
      this.$refs[refKey][0].validate();
      if (!this.formModel[key]) {
        this.$set(this.formModel, key, {});
      }
      this.$set(this.formModel[key], model, value);
    },

    handleSave(action) {
      let validCount = 0;
      const refKeys = Object.keys(this.$refs);
      refKeys.forEach(form => {
        this.$refs[form][0] && this.$refs[form][0].validate().then(valid => {
          if (valid) {
            validCount++;
          }
          // All validate success
          console.log('validCount', validCount, refKeys.length);
          if (validCount === refKeys.length) {
            this.asureDialogShow = true;
          }
        }).catch(err => {
          console.log(err);
        });
      });
    },

    handleListItemClick({url}) {
      this.imgPreviewModalOpen = true;
      this.imgPreviewUrl = url;
    },

    cancel() {
      this.asureDialogShow = false;
    },

    confirm() {
      const {api, method} = this.pageConfig.submitRequestInfo;
      const params = {
        ...this.formModel,
        applyNo: this.$route.query.applyNo || 0
      };
      axios
        .request({
          method,
          url: api,
          params
        })
        .then(res => {
          if (+res.errno === 0) {
            this.$Message.success({
              background: true,
              content: '提交成功'
            });
          } else {
            this.$Message.error({
              background: true,
              content: '系统异常'
            });
          }
        });
      this.asureDialogShow = false;
    },

    resetPageData() {
      this.pageConfig.tableList = this.pageConfig.tableList.map(item => {
        if (item.needClearData) {
          item.table.data = [];
        }
        return item;
      });
    },
  }
};
</script>

<style lang="less">
    .page-audit {
        &-loading {
          text-align: center;
          padding: 140px;
          &-spin {
            display: inline-block;
          }
        }
        &-table {
            &-td-img {
                width: 100%;
            }
        }
        &-modal-img {
            width: 100%;
        }
        &-section {
            margin: 30px auto;
        }
        &-header {
            margin-bottom: 10px;
            font-size: 16px;
        }
        &-tool-bar {
            text-align: right;
            padding: 10px
        }
        .ivu-form-item {
            margin-top: 20px
        }
        .ivu-table, .ivu-table-wrapper, .ivu-table-cell {
            overflow: visible;
        }
        .download-wrapper {
            padding: 0 20px;
        }

        &-form {
           .ivu-form-item {
                margin-top: 0px;
                margin-bottom: 0px
            }
        }
    }

</style>
