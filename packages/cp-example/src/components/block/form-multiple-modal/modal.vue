<template>
  <Modal
    class="cp-block-multiple-form-modal"
    ref="modal"
    :value="value"
    :styles="styles"
    :title="formTitle"
    footer-hide
    draggable
  >
    <FormGenerator
      ref="FormGenerator"
      :fields="formFields"
      :model="model"
      :options="formOptions"
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
    formTitle: {
      type: String,
      default: ""
    },
    formFields: {
      type: Array,
      default() {
        return [];
      }
    },
    formModel: {
      type: Object,
      default() {
        return {};
      }
    },
    formOptions: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      styles: {},
      value: true,
      model: {}
    };
  },
  watch: {
    formModel: {
      immediate: true,
      deep: true,
      handler(model) {
        this.model = JSON.parse(JSON.stringify(model));
      }
    }
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
          this.$emit("on-submit", data);
          this.value = false;
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

<style lang="less">
.cp-block-multiple-form-modal {
    .ivu-modal-body {
      padding: 16px 32px;
    }
}

</style>
