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
        :prop="computedField.model"
        :required="computedField.required"
        :rules="getRules"
        :label-width="computedField.labelWidth"
        :class="itemClasses"
        :style="itemStyle"
    >
        <span v-if="computedField.label" slot="label">
            <span>{{ computedField.label }}</span>
            <Tooltip
                v-if="labelTip.content"
                :placement="labelTip.placement"
                :disabled="labelTip.disabled"
                :delay="labelTip.delay"
                :always="labelTip.always"
                :theme="labelTip.theme"
                :max-width="labelTip.maxWidth"
                :offset="labelTip.offset"
                :transfer="labelTip.transfer"
                :options="labelTip.options"
            >
                <Icon type="md-help-circle" />
                <div slot="content">
                    <p v-html="labelTip.content" />
                </div>
            </Tooltip>
        </span>

        <component
            :is="getFieldCom(computedField.type)"
            :class="classes"
            :field="computedField"
            :inline="inline"
            :api-base="apiBase"
            :size="computedField.size || size"
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
import {getRequiredRules} from './utils/getRequiredRules';
import schema from 'async-validator';
import axios from './utils/http';
import {isFunction} from './utils/func';
import {setValue} from './utils/processValue';

const notFormfields = ['Divider'];
export default {
    inject: ['FormInstance'],
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
            return `${classPrefix}-form-item-label-tip`;
        },
        labelTipContentClasses() {
            return `${classPrefix}-form-item-label-tip-content`;
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
                const params = Object.assign({}, this.FormInstance.model, this.paramsContainer);
                const newField = Object.assign({}, field(params));
                return newField;
            }
            return field;
        },
        show() {
            const field = this.computedField;
            const model = this.FormInstance.model;
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
            return this.computedField.labelTip || {};
        },
        getRules() {
            const field = this.computedField;
            const requiredRules = field.required ? getRequiredRules(field) : [];
            if (Array.isArray(field.rules) && field.rules.length > 0) {
                return requiredRules.concat(field.rules);
            }
            return requiredRules;
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
                originModel: this.FormInstance.model,
                model: model,
                value
            });
            this.FormInstance.validateField(model);
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
        handleLabelTipClick() {
            this.$emit('on-label-tip-click',{
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
                this.FormInstance.validate(valid => {
                    const model = this.FormInstance.model;
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
                    reject({valid, model, res: null});
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
            let formModel = this.FormInstance.model || {};
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
