<template>
    <div
        v-if="notFormfield"
        :class="itemClasses"
        :style="itemWidth | itemStyle(field)"
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
        v-else
        :label="field.label"
        :prop="field.model"
        :required="field.required"
        :rules="getRules(field)"
        :class="itemClasses"
        :style="itemWidth | itemStyle(field)"
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
            @submit="handleSubmit"
        />
    </FormItem>
</template>
<script>
import fieldComponents from './utils/fieldsLoader.js';
import {classPrifix} from './utils/const';
import {getValidType} from './utils/getValidType';
const notFormfields = ['Divider'];
export default {
    inject: ['form'],
    name: 'FieldGenerator',
    components: {
        ...fieldComponents
    },
    filters: {
        itemStyle(itemWidth, field) {
            return {
                width: (field.width || itemWidth) + 'px'
            };
        }
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
            default: '100%'
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
    },
    methods: {
        handleFieldChange(model, value) {
            this.$emit('on-field-change', model, value);
        },
        handleSubmitClick() {
            this.$emit('on-submit');
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
                    type: getValidType(field),
                    message: field.label || field.model + '不可为空',
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
