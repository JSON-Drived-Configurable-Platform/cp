<template>
    <CheckboxGroup
        :value="model"
        @on-change="handleChange"
    >
        <Checkbox
            v-for="item in field.options"
            :label="item.value"
            :disabled="item.disabled"
            :key="item.value"
        >{{item.label}}</Checkbox>
    </CheckboxGroup>
</template>
<script>
import {CheckboxGroup, Checkbox} from 'iview';
export default {
    components: {
        CheckboxGroup,
        Checkbox
    },
    props: {
        model: {
            type: Array,
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
