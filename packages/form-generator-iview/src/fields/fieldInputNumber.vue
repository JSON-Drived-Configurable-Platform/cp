<template>
    <InputNumber
        :value="formModel[field.model]"
        :type="field.subType"
        :step="field.step"
        :precision="field.precision"
        :size="size"
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
