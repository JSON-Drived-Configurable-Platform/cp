<template>
    <TimePicker
        :type="field.subtype || 'time'"
        :placeholder="field.placeholder"
        :value="form.model[field.model]"
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
            return `${classPrefix}-${this.field.type.toLowerCase()}`;
        }
    },
    methods: {
        handleChange(value) {
            this.$set(this.form.model, this.field.model, value);
            this.$emit('on-change', this.field.model, value, null, this.field);
        }
    }
};
</script>

<style>

</style>
