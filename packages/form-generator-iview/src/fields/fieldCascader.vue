<template>
    <Cascader
        :value="model"
        :data="computedOptions"
        :disabled="field.disabled"
        :clearable="field.clearable"
        :placeholder="field.placeholder"
        :filterable="true"
        @on-change="handleChange"
    />
</template>
<script>
import getOptions from '../mixins/getOptions';
export default {
    mixins: [getOptions],
    props: {
        formModel: {
            type: Object,
            required: true,
            default() {
                return {};
            }
        },
        model: {
            type: [Object, Array, String, Boolean],
            required: true
        },
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
        }
    },

    methods: {
        handleChange(value) {
            this.$emit('on-change', this.field.model, value, null, this.field);
        }
    }
};
</script>
