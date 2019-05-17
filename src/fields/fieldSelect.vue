<template>
    <div>
        <Select
            v-if="remote"
            :value="model"
            :multiple="field.multiple || false"
            :disabled="field.disabled || false"
            :clearable="field.clearable || false"
            :size="field.size || 'default'"
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
            :value="model"
            :multiple="field.multiple || false"
            :disabled="field.disabled || false"
            :clearable="field.clearable || false"
            :size="field.size || 'default'"
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
            return this.options.length > 0 ? this.options : this.field.options;
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
