<template>
    <TimePicker
        :type="field.subtype || 'time'"
        :placeholder="field.placeholder"
        :value="value"
        :disabled="field.disabled"
        :editable="field.editable"
        :clearable="field.clearable"
        :class="classes"
        :size="size"
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
        value() {
            return getValue({
                originModel: this.FormInstance.model,
                model: this.field.model
            }) || '';
        }
    },
    methods: {
        handleChange(value) {
            this.$emit('on-change', this.field.model, value, null, this.field);
        }
    }
};
</script>

<style>

</style>
