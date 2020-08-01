<script>
import {Modal} from 'view-design';
import FormGenerator from 'form-generator-iview/src/formGenerator';
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
    open() {
      this.openStatus = true;
      this.$emit("on-open-status-change", true);
    },
    close() {
      this.openStatus = false;
      this.$emit("on-open-status-change", false);
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
  },
  render: function(h) {
    const {value, styles, formTitle, formFields, model, formOptions, handleSave, handelReset} = this;
    console.log(Modal);
    console.log(FormGenerator);
    return (
      <Modal
        ref="modal"
        class="cp-block-multiple-form-modal"
        value={value}
        styles={styles}
        title={formTitle}
        footer-hide
        draggable
      >
        <FormGenerator
          ref={FormGenerator}
          fields={formFields}
          model={model}
          options={formOptions}
          onSubmit={handleSave}
          onReset={handelReset}
        />
      </Modal>
    )
  }
};
</script>

<style lang="less">
  .cp-block-form-modal {
      .ivu-modal-body {
        padding: 16px 32px;
      }
  }

</style>
