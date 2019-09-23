<template>
  <div>
    <Button type="primary" @click="handleEditClick">展示Modal Form</Button>
    <Modal v-model="open" title="编辑" footer-hide>
      <FormGenerator
        ref="FormGenerator"
        :fields="fields"
        :model="model"
        @on-submit="handleSave"
      />
    </Modal>
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
      },
      open: false
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
    handleEditClick() {
      this.open = true;
    },
    handleSave() {
      this.$refs.FormGenerator.submit()
        .then(data => {
          console.log("update model", data);
          this.open = false;
          this.$Message.info("update success!");
        })
        .catch(valid => {
          console.log("valid", valid);
        });
    },
    handelReset() {}
  }
};
</script>

<style></style>
