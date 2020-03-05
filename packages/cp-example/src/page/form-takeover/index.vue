<template>
  <div>
    <Steps :current="current" style="margin-left: 13%;">
      <Step
        v-for="(item, index) in formsConfig"
        :title="item.title"
        :key="index"
      />
    </Steps>
    <template v-for="(formConfig, index) in formsConfig">
      <div
        v-if="current === index"
        :key="index"
        class="page-form-takeover-form"
        style="margin:30px auto; width:760px;"
      >
        <FormGenerator
          :ref="'FormGenerator-' + index"
          :fields="formConfig.fields"
          :model="model"
          @on-submit="handleSave(index)"
          @on-button-event="handleButtonEvent"
        />
      </div>
    </template>
  </div>
</template>

<script>
import pageConfig from "./page-config.js";
export default {
  data() {
    return {
      current: 0,
      model: {},
      pageConfig
    };
  },
  computed: {
    formsConfig() {
      return pageConfig.forms;
    }
  },
  methods: {
    handleSave(index) {
      this.$refs[`FormGenerator-${index}`][0].submit()
        .then(data => {
          console.log(`FormGenerator-${index}`, data);
          this.current < 2 && this.current++;
        });
    },

    handleButtonEvent(event) {
      this[event.name]();
    },

    // 上一步
    prev() {
      this.current--;
    }
  }
};
</script>
<style lang="less">
.page-form-takeover-form {
  .ivu-form .ivu-form-item-label {
    width: 100px;
  }
}
</style>
