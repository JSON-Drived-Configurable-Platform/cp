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
        :rules="getRules"
        :label-width="field.labelWidth"
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
            :is="getFieldCom(field.type)"
            :class="classes"
            :field="field"
            :inline="inline"
            :api-base="apiBase"
            :size="field.size || size"
            :request-interceptor="requestInterceptor"
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
            type: [Object, Array],
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
            return `${classPrefix}-${this.field.type.toLowerCase()}`;
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
            // console.log(field.model, valid, model);
            return show;
        },
        labelTip() {
            let labelTip = this.field.labelTip || {};
            return labelTip;
        },
        contentShow() {
            let content = this.field.labelTip && this.field.labelTip.content || {};
            return content.ifShow;
        },
        getRules() {
            const field = this.field;
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
        let field = this.field;
        // 老版本兼容
        if (field.subType) {
            field.subtype = field.subType;
        }
        return field;
    },
    methods: {
        handleFieldChange(model, value) {
            setValue.call(this, {
                originModel: this.form.model,
                model: model,
                value
            });
            this.$emit('on-field-change', {
                model,
                value,
                field: this.field
            });
        },
        handleFieldPreview(model, value) {
            this.$emit('on-field-preview', {
                model,
                value,
                field: this.field
            });
        },
        handleSubmitClick(component) {
            this.submit(component).then(() => {

            }).catch(() => {

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
                field: this.field
            });
        },
        handleIconMouseEnter() {
            this.$emit('on-label-tip-mouseIn', {
                field: this.field
            });
        },
        handleIconMouseLeave() {
            this.$emit('on-label-tip-mouseOut', {
                field: this.field
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


        submit(component) {
            let field = component.field;
            return new Promise((resolve, reject) => {
                try {
                    this.form.validate(
                        valid => {
                            if (valid) {
                                this.$emit('on-submit', {
                                    status: 'start',
                                    model: this.form.model,
                                    field
                                });
                                // 如果有api则需要在此处理请求
                                if (field.action && field.action.api) {
                                    component.loading = true;
                                    this.doAjaxAction(field).then(res => {
                                        resolve(this.form.model);
                                        component.loading = false;
                                        if (field.action.onSuccess) {
                                            this.$emit('on-submit', {
                                                status: 'success',
                                                model: this.form.model,
                                                field,
                                                info: res
                                            });
                                        } else {
                                            this.$Message.info(`${field.text}成功!`);

                                        }
                                    }).catch(e => {
                                        component.loading = false;
                                        if (field.action.onFail) {
                                            this.$emit('on-submit', {
                                                status: 'fail',
                                                model: this.form.model,
                                                field,
                                                info: e
                                            });
                                        } else {
                                            this.$Message.info(`${field.text}失败!`);

                                        }
                                        reject();
                                    });
                                }
                            }
                            else {
                                reject(valid);
                            }
                        }
                    );
                }
                catch(err) {
                    // eslint-disable-next-line no-console
                    console.log(err);
                    reject(err);
                }
            });
        },
        handleHttpRequest(component) {
            component.loading = true;
            let field = component.field;
            this.doAjaxAction(component.field).then(() => {
                component.loading = false;
                this.$Message.info(`${field.text}成功!`);
            }).catch(() => {
                component.loading = false;
                this.$Message.info(`${field.text}失败!`);
            });
        },

        doAjaxAction(field) {
            return new Promise((resolve, reject) => {
                try {
                    let apiBase = this.apiBase || '';
                    let finalApi = apiBase + field.action.api;
                    const method = field.action.method || 'get';

                    this.requestMethod(method.toLowerCase(), finalApi, this.getParams(field)).then(res => {
                        if (this.requestResolve(res)) {
                            resolve(res);
                            this.$emit('on-button-event', {
                                name: 'ajaxSuccess',
                                field,
                                res
                            });
                        }
                        else {
                            reject(res);
                        }
                    }).catch(e => {
                        reject(e);
                    });
                }
                catch(err) {
                    // eslint-disable-next-line no-console
                    console.log(err);
                    reject(err);
                }
            });
        },

        getParams({apiParams}) {
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
