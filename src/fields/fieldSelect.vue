<template>
    <Select
        :value="model"
        :multiple="field.multiple"
        :disabled="field.disabled"
        :clearable="field.clearable"
        :filterable="filterable"
        :size="field.size"
        :placeholder="field.placeholder"
        :remote="remote"
        :remote-method="remoteMethod"
        :loading="loading"
        @on-change="handleChange"
    >
        <Option
            v-for="item in computedOptions"
            :key="item.value"
            :value="item.value"
            :disabled="item.disabled"
        >{{ item.label }}</Option>
    </Select>
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
            type: [String, Number, Array],
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
            return this.field.api ? this.options : this.field.options;
        }
    },
    methods: {
        handleChange(value) {
            this.$emit('on-change', this.field.model, value, null, this.field);
        },
        remoteMethod() {
            if (!this.field.api) {
                return;
            }
            this.getRemoteOptions();
        }
    }
};
</script>
