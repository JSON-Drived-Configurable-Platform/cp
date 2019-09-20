<template>
    <div>
        <field-button
            v-for="(item, index) in field.items"
            :key="index"
            :field="item"
            :api-base="apiBase"
        />
    </div>
</template>

<script>
import fieldButton from './fieldButton';
import {classPrefix} from '../utils/const';
export default {
    components: {
        fieldButton
    },
    props: {
        field: {
            type: Object,
            required: true
        },
        apiBase: {
            type: String,
            default: ''
        }
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
