<template>
  <Modal
    class="cp-block-form-modal"
    v-model="openStatus"
    :title="formTitle"
    footer-hide
  >
    <div slot="title"><strong>{{formTitle}}</strong></div>
    <FormGenerator
      ref="FormGenerator"
      :fields="formFields"
      :model="model"
      :options="formOptions"
      @on-submit="handleSubmit"
    />
  </Modal>
</template>

<script>
export default {
  data() {
    return {
      openStatus: false,
      model: {}
    };
  },
  // computed: {
  //   computedFormModel() {
  //     return Object.assign({}, this.formModel);
  //   }
  // },
  props: {
    defaultOpenStatus: {
      type: Boolean,
      default: false
    },
    // btnText: {
    //   type: String,
    //   default: ""
    // },
    formTitle: {
      type: String,
      default: ""
    },
    formFields: {
      type: Array,
      default() {
        return {};
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
    if (this.defaultOpenStatus) {
      this.open();
    }
  },
  methods: {
    handleSubmit() {
      this.$refs.FormGenerator.submit()
        .then(data => {
          // eslint-disable-next-line no-console
          this.$emit("on-submit", data);
          this.close();
        })
        .catch(valid => {
          // eslint-disable-next-line no-console
          // TODO
          // this.$emit("on-valid-error", data);
        });
    },
    open() {
      this.openStatus = true;
      this.$emit("on-open-status-change", true);
    },
    close() {
      this.openStatus = false;
      this.$emit("on-open-status-change", false);
    }
  }
}
</script>

<style lang="less">
.cp-block-form-modal {
    .ivu-modal-body {
      padding: 16px 32px;
    }
}

</style>
