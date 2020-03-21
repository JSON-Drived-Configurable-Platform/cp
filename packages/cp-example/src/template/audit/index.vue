<template>
  <div class="audit-detail-example-demo">
    <div
      v-for="config in pageConfig.tableList"
      :key="config.title"
      class="audit-detail-example-demo-section"
    >
      <h3 class="audit-detail-example-demo-header">
        {{ config.title }}
      </h3>
      <div class="audit-detail-example-demo-tool-bar">
        <a :href="downLoadUrl" v-if="downLoadUrl && config.needShowDownLoadButton">下载全部</a>
      </div>
      <Table
        :class="[config.changeFormStyle ? 'audit-detail-example-demo-table audit-detail-example-demo-form'
          : 'audit-detail-example-demo-table']"
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
          <div v-if="column.htmlKey" :key="column.slot">
            <div v-if="row.key===config.htmlKey">
              <a class="download-wrapper"
                 :key="key"
                 :href="item.url"
                 v-for="(item, key) in row.value"
              >
                {{item.name}}</a>
            </div>
            <div v-else>{{row.value}}</div>
          </div>
          <Form
            v-if="!row.hideForm && column.formFields
              ? (config.hideFormKey ? config.hideFormKey === row.key : true) : false"
            :key="column.slot"
            :ref="column.slot + row.key"
            :model="row"
          >
            <!-- column.slot + row.key. eg: 'imgList' + 'action' or 'action' + 'name' -->
            <FieldGenerator
              v-for="(field, i) in column.formFields"
              :key="i"
              :field="field"
              @on-field-change="handleFieldChange($event, row, column.slot + row.key)"
              @on-button-event="handleButtonEvent($event, row, index)"
              @on-list-item-click="handleListItemClick"
            />
          </Form>
        </template>
      </Table>
    </div>
    <div class="audit-detail-example-footer-actions" v-if="pageConfig.showButton && pageData.isCheck">
      <Button type="primary" @click="handleSave(pageConfig.formVaildAction)">提交保存</Button>
    </div>
    <Modal v-model="modalOpen" :width="800">
      <img
        class="audit-detail-example-demo-modal-img"
        :src="modalImgUrl"
        alt=""
      >
    </Modal>
    <Modal
      v-model="dialogShow"
      :title="dialogsConfig.title"
    >
      <div>{{dialogsConfig.content}}</div>
      <div slot="footer">
        <Button type="text" size="large" @click="cancel">取消</Button>
        <Button type="primary" size="large" @click="confirm(submitApi)">确定</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
/* eslint-disable no-console */
import {keyToLabelMap} from './keyToLabelMap';
import {keyListMap} from './keyListMap';
import {mapState} from 'vuex';
import axios from '@/libs/api.request';

export default {
  data() {
    return {
      formModel: {},
      modalOpen: false,
      modalImgUrl: '',
      model: {
        step: 2
      },
      dialogShow: false,
      dialogTitle: '',
      dialogContent: '',
      dialogContentType: '',
      formData: {},
      dialogFooterHide: false,
      isChange: false,
      dilogsOpen: {},
      dilogsModel: {},
      pageData: {
        isCheck: true
      },
      downLoadUrl: '',
      pageConfig: {
        request: {},
        dialogs: {},
        needDealUploadData: false,
        submitApi: {}
      }
    };
  },
  computed: {
    pageRequestInfo() {
      return this.pageConfig && this.pageConfig.request;
    },

    ...mapState({
      pagePath: state => state.page.pagePath
    }),

    keyList() {
      return keyListMap[this.pagePath];
    },

    keyToLabel() {
      return keyToLabelMap[this.pagePath];
    },

    submitApi() {
      return this.pageConfig.submitApi && this.pageConfig.submitApi;
    },

    dialogsConfig() {
      return this.pageConfig.dialogs || {};
    },

    needDealUploadData() {
      return this.pageConfig.needDealUploadData || false;
    }
  },

  watch: {
    pagePath() {
      this.getPageConfig();
    }
  },

  mounted() {
    this.getPageConfig();
  },

  methods: {
    getPageConfig() {
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
          this.getPageDetail();
        });
    },
    handleButtonEvent($event, row, index) {
      const {name} = $event;
      if (/dialog-/.test(name)) {
        const dialogName = name.replace(/dialog-/, '');
        this.$set(this.dilogsOpen, dialogName, true);
      } else {
        this[$event.name](row, index);
      }
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
        this.$refs[form][0].validate().then(valid => {
          if (valid) {
            validCount++;
          }
          // All validate success
          if (validCount === refKeys.length) {
            this.dialogTitle = this.pageConfig.dialogs.title;
            this.dialogContent = this.pageConfig.dialogs.content;
            this.dialogShow = true;
          }
        }).catch(err => {
          console.log(err);
        });
      });
    },
    handleImgClick(imgUrl) {
      this.modalOpen = true;
      this.modalImgUrl = imgUrl;
    },
    handleListItemClick({url}) {
      this.modalOpen = true;
      this.modalImgUrl = url;
    },
    getPageDetail() {
      // 先清数据避免上一个页面的数据在当前页面展示
      this.resetPageData();
      const {api, method} = this.pageRequestInfo;
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
            this.downLoadUrl = res.data.downLoadUrl;
            this.mergePageInfoFromApi(this.pageConfig, this.keyToLabel, res.data.info);
          }
        }).catch(err => {
        });
    },
    mergePageInfoFromApi(pageConfig, keyToLabel, pageData) {
      pageConfig.tableList = pageConfig.tableList.map(sectionConfig => {
        const {sectionKey} = sectionConfig;
        const sectionLabel = keyToLabel[sectionKey];
        const sectionData = pageData[sectionKey];
        const isTableArray = sectionConfig.isTableArray;
        if (!isTableArray) {
          if (sectionLabel && sectionData) {
            sectionConfig.table.data = Object.keys(sectionData).map(key => {
              let obj = '';
              if (sectionLabel[key]) {
                obj = {
                  key,
                  label: sectionLabel[key],
                  value: sectionData[key]
                };
              }
              return obj;
            });
            sectionConfig.table.data = sectionConfig.table.data.filter(item => item);
          }
        } else {
          sectionConfig.table.data = sectionData;
        }
        return sectionConfig;
      });
    },
    cancel() {
      this.dialogShow = false;
    },
    confirm(requestApi) {
      const {api, method} = requestApi;
      const data = {...this.formModel, ...{applyNo: this.$route.query.applyNo}};
      axios
        .request({
          method,
          url: api,
          data
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
      this.dialogShow = false;
    },
    resetPageData() {
      this.pageConfig.tableList = this.pageConfig.tableList.map(item => {
        if (item.needClearData) {
          item.table.data = [];
        }
        return item;
      });
    }
  }
};
</script>
<style lang="less">
    .audit-detail-example-demo {
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
        // .download-wrapper {
        //     padding: 0 20px;
        // }

        // &-form {
        //    .ivu-form-item {
        //         margin-top: 0px;
        //         margin-bottom: 0px
        //     }
        // }
    }

</style>
