<template>
    <InputNumber
        :value="form.model[field.model]"
        :type="field.subtype"
        :step="field.step"
        :precision="field.precision"
        :size="size"
        :class="itemClasses"
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
import {classPrifix} from '../utils/const';
export default {
    inject: ['form'],
    props: {
        field: {
            type: Object,
            required: true
        },
        size: {
            type: String,
            default() {
                return 'default';
            }
        },
        inline: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        classes() {
            return `${classPrifix}-${this.field.type.toLowerCase()}`;
        },
        itemClasses() {
            const inlineClasses = this.inline ? '' : 'full-width';
            return `${this.classes}-${inlineClasses}`;
        }
    },
    methods: {
        handleChange(value) {
            if (value === null) {
                value = 0;
            }
            this.$set(this.form.model, this.field.model, value);
            this.$emit('on-change', this.field.model, value, null, this.field);
        }
    }
};
</script>
