<template>
    <Button
        type="primary"
        @click="handleClick"
    >提交</Button>
</template>
<script>
export default {
    methods: {
        handleClick() {
            this.$emit('submit');
        }
    }
};
</script>
