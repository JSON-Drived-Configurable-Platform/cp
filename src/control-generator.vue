<template>
    <component
        :is="getFieldCom(field.type)"
        :field="field"
        :model="model"
        :form-model="formModel"
        @on-change="onFieldChange"
    />
</template>
<script>
import fieldComponents from './utils/fieldsLoader.js';
export default {
    name: 'ControlGenerator',
    components: {
        ...fieldComponents
    },
    props: {
        formModel: {
            type: Object,
            required: true,
            default() {
                return {};
            }
        },
        model: {
            type: [Object, Array, String, Boolean, Number, null],
            required: true
        },
        field: {
            type: Object,
            required: true,
            default() {
                return [];
            }
        }
    },
    methods: {
        onFieldChange(model, value) {
            this.$emit('on-field-change', model, value);
        },
        getFieldCom(comType = '') {
            return `field${comType}`;
        }
    }
};
</script>
