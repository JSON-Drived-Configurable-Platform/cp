<template>
    <RadioGroup
        v-if="field.subtype"
        :value="formModel[field.model]"
        :type="field.subtype"
        :size="size"
        @on-change="handleChange"
    >
        <Radio
            v-for="item in field.options"
            :key="item.value"
            :label="item.value"
            :disabled="item.disabled"
        >
            {{ item.label }}
        </Radio>
    </RadioGroup>
</template>
<script>
export default {
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
