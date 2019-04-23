<template>
    <Cascader
        :value="model"
        :data="field.options"
        :disabled="field.disabled"
        :clearable="field.clearable"
        :placeholder="field.placeholder"
        :change-on-select="true"
        :filterable="true"
        @on-change="handleChange"
    >
    </Cascader>
</template>
<script>
import {Cascader} from 'iview';
export default {
    components: {
        Cascader
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
