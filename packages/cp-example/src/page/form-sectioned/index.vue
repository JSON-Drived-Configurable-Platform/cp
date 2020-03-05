<template>
  <div class="page-form-simple">
    <div class="page-form-simple-header">
      <h3>{{pageConfig.title}}</h3>
      <p>
        {{pageConfig.desc}}
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
import pageConfig from "./page-config.js";
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
      margin-top: 10px;
      font-size: 14px;
      line-height: 22px;
    }
  }
  &-form {
    margin: 30px 10px;
    width: 760px;
  }
}
</style>
