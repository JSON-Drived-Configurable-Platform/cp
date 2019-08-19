<template>
    <component
        :is="getFieldCom(field.type)"
        :class="classes"
        :field="field"
        :inline="inline"
        :form-model="formModel"
        :api-base="apiBase"
        :size="field.size || size"
        :request-interceptor="requestInterceptor"
        @on-change="onFieldChange"
        @submit="handleSubmit"
    />
</template>
<script>
import fieldComponents from './utils/fieldsLoader.js';
import {classPrifix} from './utils/const';
export default {
    name: 'FieldGenerator',
    components: {
        ...fieldComponents
    },
    props: {
        requestInterceptor: {
            type: [Function, null],
            default: null
        },
        formModel: {
            type: Object,
            required: true,
            default() {
                return {};
            }
        },
        field: {
            type: Object,
            required: true,
            default() {
                return [];
            }
        },
        size: {
            type: String,
            default() {
                return 'default';
            }
        },
        inline: {
            type: Boolean,
            default: false
        },
        apiBase: {
            type: String,
            default: ''
        }
    },
    computed: {
        classes() {
            return `${classPrifix}-${this.field.type.toLowerCase()}`;
        },
    },
    methods: {
        onFieldChange(model, value) {
            this.$emit('on-field-change', model, value);
        },
        getFieldCom(comType = '') {
            return `field${comType}`;
        },
        handleSubmit() {
            this.$emit('on-submit');
        }
    }
};
</script>
