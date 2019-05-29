<template>
    <Cascader
        :value="formModel[field.model]"
        :data="computedOptions"
        :disabled="field.disabled"
        :clearable="field.clearable"
        :placeholder="field.placeholder"
        :filterable="true"
        :change-on-select="changeOnSelect"
        @on-change="handleChange"
    />
</template>
<script>
import getOptions from '../mixins/getOptions';
export default {
    mixins: [getOptions],
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
            return this.options.length > 0 ? this.options : this.field.options;
        },
        changeOnSelect() {
            if (this.field.changeType === undefined) {
                return false;
            }
            return this.field.changeType !== 'all';
        }
    },

    methods: {
        handleChange(value) {
            this.$emit('on-change', this.field.model, value, null, this.field);
        }
    }
};
</script>
