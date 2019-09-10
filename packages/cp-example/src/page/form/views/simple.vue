<template>
  <div class="page-form-simple">
    <div class="page-form-simple-header">
      <h3>基础表单</h3>
      <p>
        表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。
      </p>
    </div>
    <div class="page-form-simple-form">
      <FormGenerator
        ref="FormGenerator"
        :fields="fields"
        :options="options"
        :model="model"
        @submit="handleSubmit"
        @reset="handelReset"
      />
    </div>
  </div>
</template>
<script>
import pageConfig from "./simple.js";
export default {
  data() {
    return {
      model: {},
      pageConfig: {
        form: {}
      }
    };
  },
  computed: {
    fields() {
      return this.pageConfig.form.fields;
    },
    options() {
      return this.pageConfig.form.options;
    }
  },
  mounted() {
    this.pageConfig = pageConfig;
  },
  methods: {
    handleSubmit() {},
    handelReset() {}
  }
};
</script>
<style lang="less">
.page-form-simple {
  &-header {
    h3 {
      font-size: 20px;
      line-height: 28px;
      font-weight: 600;
    }
    p {
      font-size: 14px;
      line-height: 22px;
    }
  }
  &-form {
    margin: 40px auto;
    width: 800px;
  }
}
</style>
