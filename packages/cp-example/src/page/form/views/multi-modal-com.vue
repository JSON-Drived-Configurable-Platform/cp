<template>
  <Modal
    ref="modal"
    :value="value"
    :styles="styles"
    :title="title"
    footer-hide
    draggable
  >
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
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
}
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
    model: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      styles: {},
      value: true
    };
  },
  mounted() {
    this.$refs.modal.dragData = {
      x: getRandomInt(0, 700),
      y: getRandomInt(100, 200),
      dragX: 0,
      dragY: 0,
      dragging: false
    };
  },
  methods: {
    handleEditClick() {
      this.value = true;
    },
    handleSave() {
      this.$refs.FormGenerator.submit()
        .then(data => {
          // eslint-disable-next-line no-console
          console.log("update model", data);
          this.value = false;
          this.$Message.info("update success!");
        })
        .catch(valid => {
          // eslint-disable-next-line no-console
          console.log("valid", valid);
        });
    },
    handelReset() {}
  }
};
</script>

<style></style>
