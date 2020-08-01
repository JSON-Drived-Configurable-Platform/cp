<template>
  <Poptip class="cp-block-form-popover" placement="left-start">
    <Button type="primary" size="small">{{btnText}}</Button>
    <div slot="title"><strong>{{formTitle}}</strong></div>
    <div slot="content">
      <FormGenerator
        ref="FormGenerator"
        :fields="formFields"
        :options="formOptions"
        :model="formModel"
        @on-submit="handleSubmit"
      />
    </div>
  </Poptip>
</template>

<script>
export default {
  data() {
    return {
      model: {}
    };
  },
  props: {
    btnText: {
      type: String,
      default: ""
    },
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
  methods: {
    handleSubmit() {
      this.$refs.FormGenerator.submit()
        .then(data => {
          // eslint-disable-next-line no-console
          this.$emit("on-submit", data);
        })
        .catch(valid => {
          // eslint-disable-next-line no-console
          // TODO
          // this.$emit("on-valid-error", data);
        });
    }
  }
}
</script>

<style lang="less">
.cp-block-form-popover {
  .ivu-poptip-body-content {
    text-align: left;
    width: 300px;
  }
  &-pagenation {
    margin-top: 20px;
    text-align: right;
  }
}
</style>
