<template>
    <Tag
        :color="color"
        :type="field.subtype"
        :fade="field.fade"
    >{{ name }}</Tag>
</template>

<script>
import {classPrifix} from '../utils/const';
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
            return `${classPrifix}-${this.field.type.toLowerCase()}`;
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

</style>
