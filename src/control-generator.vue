<template>
  <component
    :is="getFieldCom(field.type)"
    :field="field"
    :model="model"
    :on-change="onFieldChange"
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
        },
        onFieldChange: {
            type: Function,
            required: true
        }
    },
    data () {
        return {};
    },
    methods: {
        getFieldCom(comType = '') {
            return `field${comType}`;
        }
    }
};
</script>
