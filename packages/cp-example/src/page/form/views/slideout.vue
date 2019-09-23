<template>
  <div>
    <Button @click="open = true" type="primary">Create</Button>
    <Drawer title="Create" v-model="open" width="420" :mask-closable="false">
      <FormGenerator
        ref="FormGenerator"
        :fields="fields"
        :options="options"
        :model="model"
        @submit="handleSubmit"
        @reset="handelReset"
      />
    </Drawer>
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
