<template>
  <div>
    <FormGenerator
      ref="FormGenerator"
      :fields="fields"
      :model="model"
      @on-button-event="handleButtonEvent"
    />
  </div>
</template>
<script>
export default {
  props: {
    fields: {
      type: Array,
      required: true
    },
    options: {
      type: Object,
      default(){
        return {};
      }
    },
    editFormModel: {
      type: Object,
      default() {
        return {};
      }
    },
    index: Number
  },
  data() {
    return {
      model: {}
    };
  },
  created() {
    this.model = Object.assign({}, this.editFormModel);
  },
  methods: {
    handleButtonEvent($event) {
      switch ($event.name) {
        case 'save':
          this.$refs.FormGenerator.submit().then(data => {
            console.log('data', data);
            this.$emit('on-save-event', $event, this.index, this.model);
          }).catch(err => {
            console.log('提交失败', err);
          });
          break;
        case 'cancel':
          this.$emit('on-cancel-event', $event, this.index);
          break;
        default:
          this.$emit('on-button-event', $event, this.index, this.model);
          break;
      }
    },
  }
};
</script>
