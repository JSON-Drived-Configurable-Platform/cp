<template>
    <div
        v-if="notFormfield && show"
        :class="itemClasses"
        :style="itemStyle"
    >
        <component
            :is="getFieldCom(computedField.type)"
            :class="classes"
            :field="computedField"
            :inline="inline"
            :size="computedField.size || size"
        />
    </div>
    <FormItem
        v-else-if="show"
        :label="computedField.label"
        :prop="computedField.model"
        :required="computedField.required"
        :rules="getRules"
        :label-width="computedField.labelWidth"
        :class="itemClasses"
        :style="itemStyle"
    >
        <div
            :class="[labelTipClasses, labelTip.class]"
            @mouseenter="handleIconMouseEnter"
            @mouseleave="handleIconMouseLeave"
        >
            <Icon
                v-if="labelTip.icon"
                :type="labelTip.icon.name"
                :size="labelTip.icon.size"
                :color="labelTip.icon.color"
                @click="handleIconClick"
            />
            <div
                v-if="contentShow"
                :class="labelTipContentClasses"
                v-html="labelTip.content.body"
            />
        </div>
        <component
            :is="getFieldCom(computedField.type)"
            :class="classes"
            :field="computedField"
            :inline="inline"
            :api-base="apiBase"
            :size="computedField.size || size"
            :dynamic-config-data="requestInterceptor"
            :params-container="paramsContainer"
            @on-change="handleFieldChange"
            @on-preview="handleFieldPreview"
            @on-submit-click="handleSubmitClick($event)"
            @on-http-request="handleHttpRequest($event)"
            @on-reset-click="handleResetClick"
            @on-button-event="handleButtonClick"
            @on-button-cancel="handleButtonCancel"
            @on-checkboxCard-click="handelCheckboxCardClick"
            @on-list-item-click="handelListItemClick"
        />
    </FormItem>
</template>
<script>
import fieldComponents from './utils/fieldsLoader.js';
import {classPrefix} from './utils/const';
import {getValidType} from './utils/getValidType';
import schema from 'async-validator';
import axios from './utils/http';
import {isFunction} from './utils/func';
import {setValue} from './utils/processValue';

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
        paramsContainer: {
            type: Object,
            default() {
                return {};
            }
        },
        field: {
            type: [Object, Array, Function],
            required: true,
            default() {
                return {};
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
            return `${classPrefix}-${this.computedField.type.toLowerCase()}`;
        },
        itemClasses() {
            return `${classPrefix}-form-item`;
        },
        labelTipClasses() {
            return `${classPrefix}-labelTip-wp`;
        },
        labelTipContentClasses() {
            return `${classPrefix}-labelTip-content`;
        },
        notFormfield() {
            return notFormfields.includes(this.computedField.type);
        },
        itemStyle() {
            const inline = this.computedField.inline || this.inline;
            const itemWidth = inline ? this.itemWidth : (this.itemWidth || '100%');
            let width = this.computedField.width || itemWidth;
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
        computedField() {
            const field = this.field;
            if (field && isFunction(field)) {
                const params = Object.assign({}, this.form.model, this.paramsContainer);
                const newField = Object.assign({}, field(params));
                return newField;
            }
            return field;
        },
        show() {
            const field = this.computedField;
            const model = this.form.model;
            const validateValue = Object.assign({}, model || {}, this.paramsContainer || {});
            let show = true;
            if (field.hiddenOn) {
                let descriptor = field.hiddenOn;
                let validator = new schema(descriptor);
                validator.validate(validateValue, errors => {
                    if (!errors) {
                        show = false;
                    }
                });
            }
            if (field.showOn) {
                let descriptor = field.showOn;
                let validator = new schema(descriptor);
                validator.validate(validateValue, errors => {
                    if (errors) {
                        show = false;
                    }
                });
            }
            return show;
        },
        labelTip() {
            let labelTip = this.computedField.labelTip || {};
            return labelTip;
        },
        contentShow() {
            let content = this.computedField.labelTip && this.computedField.labelTip.content || {};
            return content.ifShow;
        },
        getRules() {
            const field = this.computedField;
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
                if (type === 'timepicker' && ['timerange'].includes(subtype)) {
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
                const model = this.form.model;
                const validateValue = Object.assign({}, model || {}, this.paramsContainer || {});
                if (Object.prototype.toString.call(field.rules) === '[object Array]') {
                    rules = rules.concat(field.rules);
                } else {
                    Object.keys(field.rules).map(model => {
                        field.rules[model].map(field => {
                            if (validateValue[model] === field.value) {
                                rules = rules.concat(field.rules);

                            }
                        });
                    });
                }
            }
            return rules;
        }
    },
    created() {
        let field = this.computedField;
        // 老版本兼容
        if (field.subType) {
            field.subtype = field.subType;
        }
        return field;
    },
    methods: {
        /**
         * 子组件value变更时触发
         */
        handleFieldChange(model, value) {
            setValue.call(this, {
                originModel: this.form.model,
                model: model,
                value
            });
            this.$emit('on-field-change', {
                model,
                value,
                field: this.computedField
            });
        },
        /**
         * Upload组件预览时触发
         */
        handleFieldPreview(model, file) {
            this.$emit('on-field-preview', {
                model,
                file,
                field: this.computedField
            });
        },

        handleResetClick() {
            this.$emit('on-reset');
        },
        handleButtonClick($event) {
            this.$emit('on-button-event', $event);
        },
        handleButtonCancel($event) {
            this.$emit('on-button-cancel', $event);
        },
        handleIconClick() {
            this.$emit('on-label-tip-click',{
                field: this.computedField
            });
        },
        handleIconMouseEnter() {
            this.$emit('on-label-tip-mouseIn', {
                field: this.computedField
            });
        },
        handleIconMouseLeave() {
            this.$emit('on-label-tip-mouseOut', {
                field: this.computedField
            });
        },
        getFieldCom(comType = '') {
            return `field${comType}`;
        },
        handelCheckboxCardClick(value) {
            this.$emit('on-checkboxCard-click', value);
        },
        handelListItemClick(value) {
            this.$emit('on-list-item-click', value);
        },

        /**
         * 处理子组件的提交行为，涉及到的子组件包含 Submit
         * 提交行为最终会emit到父组件
         *
         * @param {Object} component 触发提交事件的组件
         */
        handleSubmitClick(component) {
            component.loading = true;
            let field = component.field;
            this.submit(field).then(({valid, model, res}) => {
                this.$emit('on-submit', {valid, model, field, res});
                component.loading = false;
            }).catch(({valid, model, error}) => {
                component.loading = false;
                this.$emit('on-submit', {valid, model, field, error});
            });
        },

        /**
         * 处理子组件触发请求的行为，涉及到的子组件包含 Button
         * 请求行为最终会emit到父组件
         *
         * @param {Object} component 触发提交事件的组件
         */
        handleHttpRequest(component) {
            component.loading = true;
            const field = component.field;
            const name = (field.action && field.action.name) || null;
            this.doAjaxAction(field).then(res => {
                component.loading = false;
                this.$emit('on-button-event', {name, field, res});
            }).catch(res => {
                component.loading = false;
                this.$emit('on-button-event', {name, field, res});
            });
        },

        /**
         * 提交处理，需要对表单进行校验，如果有请求行为，则触发请求，返回Promise
         *
         * @param {Object} field 触发提交事件的组件field配置
         * @return {Promise} 承诺提交的结果
         */
        submit(field) {
            return new Promise((resolve, reject) => {
                this.form.validate().then(valid => {
                    const model = this.form.model;
                    if (valid) {
                        // 如果提交配置了请求行为
                        if (field.action && field.action.api) {
                            this.doAjaxAction(field).then(res => {
                                resolve({valid, model, res});
                            }).catch(e => {
                                reject({valid, model, res: e});
                            });
                            return;
                        }
                        resolve({valid, model, res: null});
                    }
                    else {
                        reject({valid, model: null, res: null});
                    }
                });
            });
        },


        doAjaxAction(field) {
            return new Promise((resolve, reject) => {
                let apiBase = this.apiBase || '';
                let finalApi = apiBase + field.action.api;
                const method = field.action.method || 'get';
                const params = this.getParams(field.apiParams || 'all');
                this.requestMethod(method.toLowerCase(), finalApi, params).then(res => {
                    if (this.requestResolve(res)) {
                        resolve(res);
                    }
                    else {
                        reject(res);
                    }
                }).catch(e => {
                    reject(e);
                });
            });
        },

        getParams(apiParams) {
            let formModel = this.form.model || {};
            // put current formModel and outside param into paramsContainer
            let paramsContainer = Object.assign({}, formModel, this.paramsContainer || {});
            let params = {};
            // If set apiParams with 'all', then the params contain all the properties in paramsContainer
            if (apiParams === 'all') {
                params = paramsContainer;
            }
            else {
                if (Array.isArray(apiParams)) {
                    apiParams.forEach(param => {
                        params[param] = paramsContainer[param];
                    });
                }
            }
            return Object.assign({}, params);
        },

        requestResolve(res) {
            if (+res.status === 0 || +res.errno === 0 || +res.status === 200) {
                return true;
            }
            return false;
        },
        requestMethod(method = 'get', url, finalParams) {
            if (this.requestInterceptor) {
                return this.requestInterceptor(method, url, finalParams);
            }
            else if (this.FormGeneratorInstallOptions && this.FormGeneratorInstallOptions.requestInterceptor) {
                return this.FormGeneratorInstallOptions.requestInterceptor(method, url, finalParams);
            }
            return axios.request({
                url,
                method,
                params: finalParams
            });
        },
    }
};
</script>
