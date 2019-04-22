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
            :value="item.value"
            :key="item.value"
            :disabled="item.disabled"
        >{{ item.label }}
        </Option>
    </Select>
</template>
<script>
import {Select, Option} from 'iview';
export default {
    components: {
        Select,
        Option
    },
    props: {
        model: {
            type: [Object, Array, String, Boolean],
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
    computed: {
        remote() {
            return !!this.field.api
        },
        filterable() {
            return !!this.field.api || this.field.filterable
        }
    },
    methods: {
        remoteMethod(field) {
            if (!this.field.api) {
                return;
            }
            this.loading = true;
            console.log(field.type, field);
        },
        handleChange(value) {
            this.onChange(this.field.model, value, null, this.field);
        }
    },
    data() {
        return {
            loading: false
        };
    }
}
</script>
