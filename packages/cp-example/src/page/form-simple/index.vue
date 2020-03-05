<template>
  <div class="container">
    <FormGenerator
      ref="FormGenerator"
      :fields="fields"
      :model="model"
      @on-submit="handleSubmit"
    />
  </div>
</template>
<script>
import pageConfig from "./page-config.js";
export default {
  data() {
    return {
      pageConfig,
      model: {}
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
  methods: {
    handleSubmit() {},
    handelReset() {}
  }
};
</script>
<style lang="less">
.container {
  width: 70%;
  margin: 10px 50px;
}
</style>
