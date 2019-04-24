<template>
    <Select
        :value="model"
        :multiple="field.multiple"
        :disabled="field.disabled"
        :clearable="field.clearable"
        :filterable="field.filterable"
        :size="field.size"
        :placeholder="field.placeholder"
        :remote="remote"
        :remote-method="remoteMethod(field)"
        :loading="loading"
        @on-change="handleChange"
    >
        <Option
            v-for="item in field.options"
            :key="item.value"
            :value="item.value"
            :disabled="item.disabled"
        >
            {{ item.label }}
        </Option>
    </Select>
</template>
<script>
export default {
    props: {
        model: {
            type: [String, Number, Array],
            required: true
        },
        field: {
            type: Object,
            required: true
        },
        onChange: {
            type: Function,
            required: true
        }
    },
    data() {
        return {
            loading: false
        };
    },
    computed: {
        remote() {
            return !!this.field.api;
        },
        filterable() {
            return !!this.field.api || this.field.filterable;
        }
    },
    methods: {
        remoteMethod() {
            // TODO
            if (!this.field.api) {
                return;
            }
            this.loading = true;
        },
        handleChange(value) {
            this.onChange(this.field.model, value, null, this.field);
        }
    }
};
</script>
