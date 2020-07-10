<template>
    <InputNumber
        :value="value"
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
import {classPrefix} from '../utils/const';
import {getValue} from '../utils/processValue';

export default {
    inject: ['FormInstance'],
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
            return `${classPrefix}-${this.field.type.toLowerCase()}`;
        },
        itemClasses() {
            const inlineClasses = this.inline ? '' : 'full-width';
            return `${this.classes}-${inlineClasses}`;
        },
        value() {
            return getValue({
                originModel: this.FormInstance.model,
                model: this.field.model
            });
        }
    },
    methods: {
        handleChange(value) {
            if (value === null) {
                value = 0;
            }
            this.$emit('on-change', this.field.model, value, null, this.field);
        }
    }
};
</script>
