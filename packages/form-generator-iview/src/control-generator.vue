<template>
    <component
        :is=getFieldCom(field.type)
        :field="field"
        :model="model"
        :onChange="onFieldChange"
    ></component>
</template>
<script>
    import {Form, FormItem, Input} from 'iview';
    import fieldComponents from "./utils/fieldsLoader.js";
    export default {
        name: 'FormGenerator',
        components: {
            ...fieldComponents
        },
        props: {
            model: {
                type: [Object, Array, String, Boolean],
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
            return {}
        },
        methods: {
            getFieldCom(comType = '') {
                return `field${comType}`;
            }
        }
    }
</script>
