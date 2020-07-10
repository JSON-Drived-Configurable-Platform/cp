<template>
    <div v-if="multiple" :class="classes">
        <Tag
            v-for="item in computedFields"
            :key="item.name"
            border
            :color="item.color"
            :type="item.subtype || 'border'"
            :fade="item.fade"
        >{{ item.name }}</Tag>
    </div>
    <Tag
        v-else
        :color="color"
        :type="field.subtype || 'border'"
        :fade="field.fade"
        :class="classes"
    >{{ name }}</Tag>
</template>

<script>
import {classPrefix} from '../utils/const';
import {getValue} from '../utils/processValue';

export default {
    inject: ['FormInstance'],
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
        multiple() {
            let value = getValue({
                originModel: this.FormInstance.model,
                model: this.field.model
            });
            return Array.isArray(value);
        },
        computedField() {
            if (this.multiple) {
                return {};
            }
            const options = this.field.options || [];
            if (options.length > 0) {
                let value = getValue({
                    originModel: this.FormInstance.model,
                    model: this.field.model
                });
                return options.find(item => item.value === value);
            }
            return {};
        },
        computedFields() {
            if (!this.multiple) {
                return [];
            }
            const options = this.field.options || [];
            let value = getValue({
                originModel: this.FormInstance.model,
                model: this.field.model
            });
            return options.filter(item => value.includes(item.value));
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
