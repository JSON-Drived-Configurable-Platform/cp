<template>
    <Divider
        :orientation="field.orientation"
        :size="field.size"
        :dashed="field.dashed"
        :class="classes"
    >{{ field.label }}</Divider>
</template>

<script>
import {classPrifix} from '../utils/const';
export default {
    props: {
        field: {
            type: Object,
            required: true
        },
    },
    computed: {
        classes() {
            return `${classPrifix}-${this.field.type.toLowerCase()}`;
        },
    }
};
</script>

<style>

</style>
