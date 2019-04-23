<template>
  <Input
    :value="model"
    :type="field.subType"
    :size="field.size || 'default'"
    :placeholder="field.placeholder"
    :clearable="field.clearable"
    :disabled="field.disabled"
    :readonly="field.readonly"
    :icon="field.icon"
    :prefix="field.prefix"
    :suffix="field.suffix"
    :autofocus="field.autofocus"
    @on-change="handleChange"
  />
</template>
<script>
import {Input} from 'iview';
export default {
    components: {
        Input
    },
    props: {
        model: {
            type: [String],
            required: true
        },
        field: {
            type: Object,
            required: true
        },
        onChange: {
            type: Function,
            required: true
        }
    },
    methods: {
        handleChange(e) {
            this.onChange(this.field.model, e.target.value, e, this.field);
        }
    }
};
</script>
