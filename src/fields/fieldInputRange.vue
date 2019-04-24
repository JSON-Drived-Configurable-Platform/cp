<template>
    <div
        :style="{
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'flex-start',
            flexDirection: 'row',
        }"
    >
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
            :style="{width: '100px', marginRight: '20px'}"
            @on-change="handleStartChange"
        />
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
            :style="{width: '100px'}"
            @on-change="handleEndChange"
        />
    </div>
</template>
<script>
export default {
    props: {
        model: {
            type: [String],
            required: true
        },
        field: {
            type: Object,
            required: true
        }
    },
    methods: {
        handleStartChange(e) {
            this.$emit('on-change', this.field.model, e.target.value, e, this.field);
        },
        handleEndChange(e) {
            this.$emit('on-change', this.field.model, e.target.value, e, this.field);
        }
    }
};
</script>
