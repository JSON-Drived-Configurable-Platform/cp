<template>
    <Divider
        v-if="field.label"
        :orientation="field.orientation"
        :size="field.size"
        :dashed="field.dashed"
        :class="classes"
    >{{ field.label }}</Divider>
    <Divider
        v-else
        :orientation="field.orientation"
        :size="field.size"
        :dashed="field.dashed"
        :class="classes"
    />
</template>

<script>
import {classPrefix} from '../utils/const';
export default {
    props: {
        field: {
            type: Object,
            required: true
        },
    },
    computed: {
        classes() {
            return `${classPrefix}-${this.field.type.toLowerCase()}`;
        },
    }
};
</script>

<style>

</style>
