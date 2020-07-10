<template>
    <Cascader
        :value="value"
        :data="computedOptions"
        :disabled="field.disabled"
        :clearable="field.clearable"
        :placeholder="field.placeholder"
        :filterable="true"
        :change-on-select="changeOnSelect"
        :size="size"
        @on-change="handleChange"
    />
</template>
<script>
import getOptions from '../mixins/getOptions';
import {getValue} from '../utils/processValue';

export default {
    inject: ['FormInstance'],
    mixins: [getOptions],
    props: {
        field: {
            type: Object,
            required: true
        },
        size: {
            type: String,
            default() {
                return 'default';
            }
        },
    },
    data() {
        return {
            loading: false,
            options: []
        };
    },
    computed: {
        remote() {
            return !!this.field.api;
        },
        filterable() {
            return !!this.field.api || this.field.filterable;
        },
        computedOptions() {
            return this.options.length > 0 ? this.options : (this.field.options || this.field.data);
        },
        changeOnSelect() {
            if (this.field.changeType === undefined) {
                return false;
            }
            return this.field.changeType !== 'all';
        },
        value() {
            return getValue({
                originModel: this.FormInstance.model,
                model: this.field.model
            }) || [];
        }
    },

    methods: {
        handleChange(value) {
            this.$emit('on-change', this.field.model, value, null, this.field);
        }
    }
};
</script>
