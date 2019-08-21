<template>
    <div>
        <Select
            v-if="remote"
            :value="formModel[field.model]"
            :multiple="field.multiple || false"
            :disabled="field.disabled || false"
            :clearable="clearable"
            :size="size"
            :placeholder="field.placeholder"
            :remote="remote"
            :filterable="filterable || false"
            :loading="loading"
            :remote-method="remoteMethod"
            @on-change="handleChange"
        >
            <Option
                v-for="item in computedOptions"
                :key="item.value"
                :value="item.value"
                :disabled="item.disabled"
            >{{ item.label }}</Option>
        </Select>
        <Select
            v-else
            :value="formModel[field.model]"
            :multiple="field.multiple || false"
            :disabled="field.disabled || false"
            :clearable="clearable"
            :size="size"
            :placeholder="field.placeholder"
            :filterable="filterable || false"
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
    </div>
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
        formModel: {
            type: Object,
            required: true,
            default() {
                return {};
            }
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
            return this.field.remote;
        },
        filterable() {
            return this.field.filterable;
        },
        clearable() {
            return this.field.clearable === undefined
                ? this.field.required ? false : true
                : this.field.clearable;
        },
        computedOptions() {
            return this.options.length > 0 ? this.options : (Array.isArray(this.field.options) ? this.field.options : []);
        },
        optionsApi() {
            return this.field.api || !Array.isArray(this.field.options) ? this.field.options : '';
        }
    },
    methods: {
        handleChange(value) {
            if (value === undefined || value === null) {
                value = '';
            }
            this.$set(this.formModel, this.field.model, value);
            this.$emit('on-change', this.field.model, value, null, this.field);
        },
        remoteMethod() {
            if (!this.remote) {
                return;
            }
            this.getRemoteOptions();
        }
    }
};
</script>
