<template>
    <span class="one-line">{{form.model[field.model]}}</span>
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
    },
    computed: {
        classes() {
            return `${classPrefix}-${this.field.type.toLowerCase()}`;
        },
        computedField() {
            const options = this.field.options || [];
            if (options.length > 0) {
                let value = this.form.model[this.field.model];
                return options.find(item => item.value === value);
            }
            return {};
        },
        name() {
            return this.computedField.name || this.field.name;
        },
        color() {
            return this.computedField.color || this.field.color;
        }
    }
};
</script>

<style>
.one-line {
    white-space: nowrap;
}
</style>
