<template>
    <div>
        <h3
            :style="{height: '30px',fontSize: '18px', fontWeight: 700}"
        >
            {{ options.title }}


            <Poptip
                v-if="tip.title"
                :style="{float: 'right', marginRight: '30px'}"
                :title="tip.title"
                :content="tip.content"
                placement="left-start"
            >
                <Icon
                    type="md-help-circle"
                />
            </Poptip>
        </h3>
        <Divider
            v-if="options.title || tip.title"
            dashed
            size="small"
        />
        <Form
            ref="form"
            :model="formModel"
            :label-width="options.labelWidth"
            :inline="options.inline"
            :label-position="options.labelPosition"
        >
            <FormItem
                v-for="field in fields"
                :key="field.model"
                :label="field.label"
                :prop="field.model"
                :required="field.required"
                :rules="getRules(field)"
                :style="itemStyle"
            >
                <ControlGenerator
                    :field="field"
                    :model="formModel[field.model]"
                    :form-model="formModel"
                    @on-field-change="handleFieldChange"
                />
            </FormItem>
        </Form>
    </div>
</template>
<script>
import ControlGenerator from './control-generator';
export default {
    name: 'FormGenerator',
    components: {
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
        }
    },
    data () {
        return {
            formModel: this.model || {}
        };
    },

    computed: {
        itemStyle() {
            return {
                width: this.options.itemWidth + 'px',
                marginRight: '30px'
            };
        },
        tip() {
            return {
                title: this.options.tip && this.options.tip.title,
                content: this.options.tip && this.options.tip.content,
            };
        }
    },

    created() {
        this.$watch('model', model => {
            this.formModel = model;
        });
    },
    methods: {
        handleFieldChange(model, value){
            this.formModel[model] = value;
            this.$refs.form.validateField(model);
        },
        getRules(field) {
            const type = field.type.toLowerCase();
            const subType = field.subType;
            let rules = [];
            if (field.required) {
                if (type === 'datepicker' && ['daterange', 'datetimerange'].includes(subType)) {
                    rules.push({
                        validator(rule, value, callback) {
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
            return new Promise((resolve, reject) => {
                this.$refs.form.validate().then(valid => {
                    if (valid) {
                        resolve(this.formModel);
                    }
                    else {
                        reject();
                    }
                });
            });
        }
    }
};
</script>
