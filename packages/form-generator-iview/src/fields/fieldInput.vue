<template>
    <Input
        :value="formModel[field.model]"
        :type="field.subType"
        :placeholder="field.placeholder"
        :clearable="field.clearable"
        :disabled="field.disabled"
        :readonly="field.readonly"
        :icon="field.icon"
        :prefix="field.prefix"
        :suffix="field.suffix"
        :autofocus="field.autofocus"
        :size="size"
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
        handleChange(e) {
            this.$emit('on-change', this.field.model, e.target.value, e, this.field);
        }
    }
};
</script>
