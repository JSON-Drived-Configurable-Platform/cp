<template>
    <InputNumber
        :value="model"
        :type="field.subType"
        :step="field.step"
        :precision="field.precision"
        :size="field.size || 'default'"
        :max="field.max"
        :min="field.min"
        :placeholder="field.placeholder"
        :clearable="field.clearable"
        :disabled="field.disabled"
        :readonly="field.readonly"
        @on-change="handleChange"
    />
</template>
<script>
import {InputNumber} from 'iview';
export default {
    components: {
        InputNumber
    },
    props: {
        model: {
            type: [Number, null, String]
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
        handleChange(value) {
            if (value === null) {
                value = 0;
            }
            this.onChange(this.field.model, value, null, this.field);
        }
    }
}
</script>
