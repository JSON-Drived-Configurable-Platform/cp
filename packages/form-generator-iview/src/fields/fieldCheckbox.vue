<template>
    <CheckboxGroup
        :value="model"
        @on-change="handleChange"
    >
        <Checkbox
            v-for="item in field.options"
            :key="item.value"
            :label="item.value"
            :disabled="item.disabled"
        >
            {{ item.label }}
        </Checkbox>
    </CheckboxGroup>
</template>
<script>
export default {
    props: {
        model: {
            type: Array,
            required: true
        },
        field: {
            type: Object,
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
            this.loading = true;
        },
        handleChange(value) {
            this.$emit('on-change', this.field.model, value, null, this.field);
        }
    }
};
</script>
