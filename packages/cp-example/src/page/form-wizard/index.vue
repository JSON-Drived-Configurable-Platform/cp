<template>
  <div class="wizard">
    <Steps :current="current" direction="vertical">
      <div
        v-for="(item, index) in formsConfig"
        :key="index"
        class="wizard-name"
        @click="handelTabChange(index)">
        <Step :title="item.title" />
      </div>
    </Steps>
    <template v-for="(formConfig, index) in formsConfig">
      <div
        v-if="current === index"
        :key="index"
        class="page-form-takeover-form"
      >
        <FormGenerator
          :ref="'FormGenerator-' + index"
          :fields="formConfig.fields"
          :model="model"
          @on-submit="handleSave(index)"
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

    handelTabChange(index) {
      this.current = index;
    }
  }
};
</script>
<style lang="less">
.wizard {
  &-name {
    cursor: pointer;
  }
  .ivu-steps {
    width: 200px;
    float: left !important;
  }
  .page-form-takeover-form {
    margin: 30px auto;
    width: 500px;
  }
  .page-form-simple-form {
    float: left;
  }
}
</style>
