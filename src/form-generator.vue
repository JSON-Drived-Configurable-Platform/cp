<template>
    <Form
        ref="form"
        :model="formModel"
        :label-width="options.labelWidth"
    >
        <FormItem
            v-for="field in fields"
            :key="field.model"
            :label="field.label"
            :prop="field.model"
            :required="field.required"
            :rules="getRules(field)"
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
                    return (model, value, event, field) => {
                        console.log(model, value, event, field);
                        this.formModel[model] = value;
                        this.$refs.form.validateField(model);
                    }
                }
            }
        },
        data () {
            return {
                formModel: this.model
            };
        },
        methods: {
            getRules(field) {
                const type = field.type.toLowerCase();
                const subType = field.subType;
                const multiple = field.multiple;
                let rules = [];
                if (field.required) {
                    if (type === 'datepicker' && ['daterange', 'datetimerange'].includes(subType)) {
                        rules.push({
                            validator(rule, value, callback) {
                                let errors = [];
                                if (value.length === 2 && value[0] && value[1]) {
                                    callback();
                                }
                                else {
                                    callback(new Error(field.label + '不可为空'));
                                }
                            },
                            trigger: 'change'
                        });
                    }
                    if (type === 'logicinput') {
                        rules.push({
                            validator(rule, value, callback) {
                                let errors = [];
                                if (value.logic && value.value) {
                                    callback();
                                }
                                else {
                                    callback(new Error(field.label + '不可为空'));
                                }
                            },
                            trigger: 'change'
                        });
                    }
                    rules.push({
                        required: true,
                        type: this.getValidType(field),
                        message: field.label + '不可为空',
                        trigger: 'change'
                    });
                }
                return rules;
            },
            getValidType(field) {
                const type = field.type.toLowerCase();
                const subType = field.subType;
                const multiple = field.multiple;
                if (type === 'input') {
                    return 'string';
                }
                if (type === 'inputnumber') {
                    return 'number';
                }
                if (type === 'select') {
                    if (multiple) {
                        return 'array';
                    }
                    else {
                        return 'string';
                    }
                }
                if (type === 'radio') {
                    return 'string';
                }
                if (type === 'checkbox') {
                    return 'array';
                }
                if (type === 'datepicker') {
                    if (['daterange', 'datetimerange'].includes(subType)){
                        return 'array';
                    }
                    else {
                        return 'string';
                    }
                }
                if (type === 'cascader') {
                    return 'array';
                }
                if (['logicinput', 'logicselect'].includes(type)) {
                    return 'object';
                }
            },
            getFormModel() {
                return this.formModel;
            },
            submit() {
                debugger;
                this.$refs.form.validate(valid => {
                    console.log('valid', valid);
                });
            }
        }
    }
</script>
