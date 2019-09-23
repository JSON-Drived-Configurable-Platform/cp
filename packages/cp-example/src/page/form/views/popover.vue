<template>
  <div>
    <Poptip v-model="visible" placement="top-start">
      <a>Click</a>
      <div slot="title"><i>Custom title</i></div>
      <div slot="content">
        <FormGenerator
          ref="FormGenerator"
          :fields="fields"
          :options="options"
          :model="model"
          @submit="handleSubmit"
          @reset="handelReset"
        />
      </div>
    </Poptip>
  </div>
</template>
<script>
import pageConfig from "./form-config.js";
export default {
  data() {
    return {
      open: false,
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
