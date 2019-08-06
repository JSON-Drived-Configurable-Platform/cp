<template>
    <component
        :is="getFieldCom(field.type)"
        :class="classes"
        :field="field"
        :form-model="formModel"
        :api-base="apiBase"
        :size="size"
        :request-interceptor="requestInterceptor"
        @on-change="onFieldChange"
        @submit="handleSubmit"
    />
</template>
<script>
import fieldComponents from './utils/fieldsLoader.js';
import {classPrifix} from './utils/const';
export default {
    name: 'ControlGenerator',
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
