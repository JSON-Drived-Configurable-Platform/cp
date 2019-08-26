<template>
    <Button
        :type="field.subtype || 'default'"
        @click="handleClick"
    >{{ field.text }}</Button>
</template>
<script>
export default {
    props: {
        field: {
            type: Object,
            required: true
        },
    },
    methods: {
        handleClick() {
            this.$emit('on-reset-click');
        }
    }
};
</script>
