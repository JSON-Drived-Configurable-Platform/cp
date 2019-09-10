<template>
    <div
        v-if="notFormfield && show"
        :class="itemClasses"
        :style="itemStyle"
    >
        <component
            :is="getFieldCom(field.type)"
            :class="classes"
            :field="field"
            :inline="inline"
            :size="field.size || size"
        />
    </div>
    <FormItem
        v-else-if="show"
        :label="field.label"
        :prop="field.model"
        :required="field.required"
        :rules="getRules(field)"
        :label-width="field.labelWidth"
        :class="itemClasses"
        :style="itemStyle"
    >
        <component
            :is="getFieldCom(field.type)"
            :class="classes"
            :field="field"
            :inline="inline"
            :api-base="apiBase"
            :size="field.size || size"
            :request-interceptor="requestInterceptor"
            @on-change="handleFieldChange"
            @on-submit-click="handleSubmitClick"
            @on-reset-click="handleResetClick"
            @on-button-click="handleButtonClick"
            @submit="handleSubmit"
        />
    </FormItem>
</template>
<script>
import fieldComponents from './utils/fieldsLoader.js';
import {classPrifix} from './utils/const';
import {getValidType} from './utils/getValidType';
import schema from 'async-validator';
const notFormfields = ['Divider'];
export default {
    inject: ['form'],
    name: 'FieldGenerator',
    components: {
        ...fieldComponents
    },
    props: {
        requestInterceptor: {
            type: [Function, null],
            default: null
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
        },
        itemWidth: {
            type: [String, Number],
            default: ''
        }
    },
    computed: {
        classes() {
            return `${classPrifix}-${this.field.type.toLowerCase()}`;
        },
        itemClasses() {
            return `${classPrifix}-form-item`;
        },
        notFormfield() {
            return notFormfields.includes(this.field.type);
        },
        itemStyle() {
            const inline = this.field.inline || this.inline;
            const itemWidth = inline ? this.itemWidth : (this.itemWidth || '100%');
            let width = this.field.width || itemWidth;
            // 兼容老版本的字符串数值，如果是数值字符串，则转为int
            if (typeof width === 'string' && /^\d+$/.test(width)) {
                width = parseInt(width);
            }
            return {
                width: typeof width === 'string' ? width : width + 'px',
                display: inline ? 'inline-block' : 'block'
                // width: typeof width !== 'number' ? width + 'px' : width
            };
        },
        show() {
            const field = this.field;
            const model = this.form.model;
            let show = true;
            if (field.hiddenOn) {
                let descriptor = field.hiddenOn;
                let validator = new schema(descriptor);
                validator.validate(model, (errors) => {
                    if(!errors) {
                        show = false;
                    }
                });
            }
            if (field.showOn) {
                let descriptor = field.showOn;
                let validator = new schema(descriptor);
                validator.validate(model, (errors) => {
                    if(errors) {
                        show = false;
                    }
                });
            }
            // console.log(field.model, valid, model);
            return show;
        }
    },
    created() {
        let field = this.field;
        // 老版本兼容
        if (field.subType) {
            field.subtype = field.subType;
        }
        return field;
    },
    methods: {
        handleFieldChange(model, value) {
            this.$emit('on-field-change', model, value);
        },
        handleSubmitClick() {
            this.$emit('on-submit');
        },
        handleResetClick() {
            this.$emit('on-reset');
        },
        handleButtonClick($event) {
            this.$emit('on-button-event', $event);
        },
        getFieldCom(comType = '') {
            return `field${comType}`;
        },
        handleSubmit() {
            this.$emit('on-submit');
        },
        getRules(field) {
            const type = field.type.toLowerCase();
            const subtype = field.subtype;
            let rules = [];
            if (field.required) {
                if (type === 'datepicker' && ['daterange', 'datetimerange'].includes(subtype)) {
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
                if (['logicinput', 'logicselect'].includes(type)) {
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
                    type: getValidType(field),
                    message: (field.label || field.model) + '不可为空',
                    trigger: 'change'
                });
            }
            if (field.rules) {
                rules = rules.concat(field.rules);
            }
            return rules;
        },
    }
};
</script>
