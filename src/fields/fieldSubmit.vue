<template>
    <Button
        :type="field.subtype || 'default'"
        :size="field.size || 'default'"
        :loading="loading"
        @click="handleClick"
    >{{ field.text || '提交' }}</Button>
</template>
<script>
export default {
    props: {
        field: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            loading: false
        };
    },
    methods: {
        handleClick() {
            this.$emit('on-submit-click', this);
        }
    }
};
</script>
