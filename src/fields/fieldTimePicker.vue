<template>
    <TimePicker
        :type="field.subtype || 'time'"
        :placeholder="field.placeholder"
        :value="formModel[field.model]"
        :disabled="field.disabled"
        :editable="field.editable"
        :clearable="field.clearable"
        :class="classes"
        :size="size"
        @on-change="handleChange"
    />
</template>

<script>
import {classPrifix} from '../utils/const';
export default {
    props: {
        field: {
            type: Object,
            required: true
        },
        formModel: {
            type: Object,
            required: true,
            default() {
                return {};
            }
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
        }
    },
    methods: {
        handleChange(value) {
            this.$set(this.formModel, this.field.model, value);
            this.$emit('on-change', this.field.model, value, null, this.field);
        }
    }
};
</script>

<style>

</style>
