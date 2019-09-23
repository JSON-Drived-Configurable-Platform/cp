<template>
  <Modal :value="value" :styles="styles" :title="title" footer-hide draggable>
    <FormGenerator
      ref="FormGenerator"
      :fields="fields"
      :model="model"
      @on-submit="handleSave"
      @on-reset="handelReset"
    />
  </Modal>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    fields: {
      type: Array,
      default() {
        return [];
      },
      required: true
    },
    value: {
      type: Boolean,
      default: true
    },
    model: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      styles: {}
    };
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
