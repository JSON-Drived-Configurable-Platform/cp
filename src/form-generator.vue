<template>
    <Form
        :model="model"
        :label-width="options.labelWidth"
    >
        <FormItem
            v-for="field in fields"
            :key="field.model"
            :label="field.label"
        >
            <ControlGenerator
                :field="field"
                :model="formModel[field.model]"
                :onFieldChange="handleFieldChange"
            />
        </FormItem>
    </Form>
</template>
<script>
    import {Form, FormItem, Input} from 'iview';
    import ControlGenerator from './control-generator';
    export default {
        name: 'FormGenerator',
        components: {
            Form,
            FormItem,
            ControlGenerator
        },
        props: {
            fields: {
                type: Array,
                required: true,
                default() {
                    return [];
                }
            },
            model: {
                type: Object,
                required: true,
                default() {
                    return {};
                }
            },
            options: {
                type: Object,
                required: true,
                default() {
                    return {};
                }
            },
            handleFieldChange: {
                default() {
                    return (e) => {
                        console.log(e);
                    }
                }
            }
        },
        data () {
            return {
                formModel: this.model
            };
        },
        created() {
            console.log(this.model);
        }
    }
</script>
