<template>
    <div>
        <Select
            v-if="remote"
            :value="form.model[field.model]"
            :multiple="field.multiple || false"
            :disabled="field.disabled || false"
            :clearable="clearable"
            :size="size"
            :placeholder="field.placeholder"
            :remote="remote"
            :filterable="filterable || false"
            :loading="loading"
            :remote-method="remoteMethod"
            :prefix="field.prefix"
            @on-change="handleChange"
        >
            <template v-for="item in computedOptions">
                <OptionGroup
                    v-if="item.groupOptions"
                    :key="item.groupLabel"
                    :label="item.groupLabel"
                >
                    <Option
                        v-for="groupItem in item.groupOptions"
                        :key="groupItem.value"
                        :value="groupItem.value"
                    >{{ groupItem.label }}</Option>
                </OptionGroup>
                <Option
                    v-else
                    :key="item.value"
                    :value="item.value"
                    :disabled="item.disabled"
                >{{ item.label }}</Option>
            </template>
        </Select>
        <Select
            v-else
            :value="form.model[field.model]"
            :multiple="field.multiple || false"
            :disabled="field.disabled || false"
            :clearable="clearable"
            :size="size"
            :placeholder="field.placeholder"
            :filterable="filterable || false"
            :loading="loading"
            :prefix="field.prefix"
            @on-change="handleChange"
        >
            <template v-for="item in computedOptions">
                <OptionGroup
                    v-if="item.groupOptions"
                    :key="item.groupLabel"
                    :label="item.groupLabel"
                >
                    <Option
                        v-for="groupItem in item.groupOptions"
                        :key="groupItem.value"
                        :value="groupItem.value"
                    >{{ groupItem.label }}</Option>
                </OptionGroup>
                <Option
                    v-else
                    :key="item.value"
                    :value="item.value"
                    :disabled="item.disabled"
                >{{ item.label }}</Option>
            </template>
        </Select>
    </div>
</template>
<script>
import getOptions from '../mixins/getOptions';
export default {
    inject: ['form'],
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
            return this.field.remote && !!this.optionsApi;
        },
        filterable() {
            return this.field.filterable || this.remote;
        },
        clearable() {
            return !this.field.multiple ? this.field.clearable: false;
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
            this.$set(this.form.model, this.field.model, value);
            this.$emit('on-change', this.field.model, value, null, this.field);
        },
        remoteMethod(query) {
            if (!this.remote) {
                return;
            }
            this.getRemoteOptions(
                {
                    [this.field.model]: query
                }
            );
        }
    }
};
</script>
