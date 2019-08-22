<template>
    <div :class="classes">
        <h3
            v-if="options.title || tip.title"
            :class="headerClasses"
        >
            {{ options.title }}
            <Poptip
                v-if="tip.title"
                :class="tipsClasses"
                :title="tip.title"
                placement="left-start"
            >
                <Icon type="md-help-circle" />
                <div slot="content">
                    <p v-html="tip.content" />
                </div>
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
            :label-width="options | labelWidth"
            :inline="options.inline"
            :label-position="options.labelPosition || 'right'"
        >
            <div :class="defaultItemsBoxClassess">
                <FormItem
                    v-for="field in displayFields"
                    :key="field.model"
                    :label="field.label"
                    :prop="field.model"
                    :required="field.required"
                    :rules="getRules(field)"
                    :class="itemClasses"
                    :style="options | itemStyle(field)"
                >
                    <FieldGenerator
                        :field="field"
                        :form-model="formModel"
                        :api-base="apiBase"
                        :size="options.size"
                        :inline="options.inline"
                        :request-interceptor="requestInterceptor"
                        @on-field-change="handleFieldChange"
                        @on-submit="handleSubmit"
                    />
                </FormItem>
            </div>

            <div
                v-if="extraType === 'right' && computedFields.defaultHideFields.length > 0"
                :class="extraSelectBoxRightClasses"
            >
                <Button
                    type="info"
                    size="small"
                    @click="handleExtraBtnClick"
                >更多
                    <Icon
                        v-if="isShowExtra"
                        type="ios-arrow-down"
                    />
                    <Icon
                        v-if="!isShowExtra"
                        type="ios-arrow-forward"
                    />
                </Button>
                <div
                    v-if="isShowExtra"
                    v-click-outside="handleExtraSelectRightContentClickOutside"
                    :class="extraSelectRightContentClasses"
                >
                    <CheckboxGroup
                        v-model="selectedDefaultHideFields"
                        size="small"
                        placeholder="请选择更多条件"
                        multiple
                        filterable
                    >
                        <Checkbox
                            v-for="item in computedFields.defaultHideFields"
                            :key="item.model"
                            :label="item.model"
                        >{{ item.label }}</Checkbox>
                    </CheckboxGroup>
                </div>
            </div>
            <div
                v-if="extraType === 'bottom' && computedFields.defaultHideFields.length > 0"
                :class="extraSelectBoxClasses"
            >
                <Row :class="moreDividerClasses">
                    <iCol span="10">
                        <Divider
                            dashed
                            size="small"
                        />
                    </iCol>
                    <iCol
                        span="4"
                        :class="extraBtnBoxClasses"
                    >
                        <Icon type="ios-arrow-back" />
                        更多选项
                        <Icon type="ios-arrow-forward" />
                    </iCol>
                    <iCol span="10">
                        <Divider
                            dashed
                            size="small"
                        />
                    </iCol>
                </Row>
                <Select
                    v-model="selectedDefaultHideFields"
                    size="small"
                    placeholder="请选择更多条件"
                    multiple
                    filterable
                >
                    <Option
                        v-for="item in computedFields.defaultHideFields"
                        :key="item.model"
                        :value="item.model"
                    >{{ item.label }}</Option>
                </Select>
            </div>
        </Form>
    </div>
</template>
<script>
import FieldGenerator from './fieldGenerator';
import {classPrifix} from './utils/const';
import vClickOutside from 'v-click-outside';
export default {
    name: 'FormGenerator',
    components: {
        FieldGenerator
    },
    directives: {
        clickOutside: vClickOutside.directive
    },
    filters: {
        labelWidth(options) {
            if (options.inline) {
                return options.labelWidth;
            }
            else {
                return options.labelWidth || 80;
            }
        },
        itemStyle(options, field) {
            return {
                width: (field.width || options.itemWidth) + 'px'
            };
        }
    },
    props: {
        requestInterceptor: {
            type: [Function, null],
            default: null
        },
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
            formModel: this.model || {},
            isShowExtra: false,
            selectedDefaultHideFields: []
        };
    },

    computed: {
        classes() {
            return classPrifix;
        },
        headerClasses() {
            return `${classPrifix}-header`;
        },
        tipsClasses() {
            return `${classPrifix}-tip`;
        },
        defaultItemsBoxClassess() {
            return [
                `${classPrifix}-default-items-box`,
                {
                    [`${classPrifix}-default-items-box-no-right`]: this.computedFields.defaultHideFields.length === 0,
                }
            ];
        },
        moreDividerClasses() {
            return `${classPrifix}-more-divider-box`;
        },
        extraItemsBoxClassess() {
            return `${classPrifix}-extra-items-box`;
        },
        extraSelectBoxRightClasses() {
            return `${classPrifix}-extra-box-right`;
        },
        extraSelectRightContentClasses() {
            return `${classPrifix}-extra-right-content`;
        },
        extraBtnBoxClasses() {
            return `${classPrifix}-extra-box`;
        },
        labelLeftClasses() {
            return `${classPrifix}-extra-left`;
        },
        extraSelectBoxClasses() {
            return `${classPrifix}-extra-select-box`;
        },
        itemClasses() {
            return `${classPrifix}-form-item`;
        },
        tip() {
            return {
                title: this.options.tip && this.options.tip.title,
                content: this.options.tip && this.options.tip.content,
            };
        },
        apiBase() {
            return this.options.apiBase || '';
        },
        extraType() {
            return this.options.extraType || 'right';
        },
        computedFields() {
            let fields = this.fields || [];
            let defaultShowFields = [];
            let defaultHideFields = [];
            fields.forEach(field => {
                if (!field.defaultHide) {
                    defaultShowFields.push(field);
                }
                else {
                    defaultHideFields.push(field);
                }
            });
            return {
                defaultShowFields,
                defaultHideFields
            };
        },
        displayFields() {
            return [
                ...this.computedFields.defaultShowFields,
                ...this.computedFields.defaultHideFields.filter(
                    item => this.selectedDefaultHideFields.includes(item.model)
                )
            ];
        },
        // 根据apiParams计算出某字段更改后，受影响的字段有哪些
        needResetFieldsOnChangeMap() {
            let fields = this.fields || [];
            let map = {};
            fields.forEach(field => {
                let apiParams = field.apiParams || [];
                if (apiParams.length > 0) {
                    apiParams.forEach(param => {
                        if (!map[param]) {
                            map[param] = [];
                        }
                        map[param].push(field);
                    });
                }
            });
            return map;
        }

    },
    watch: {
        model: {
            handler: function (val) {
                this.formModel = val;
            },
            deep: true
        }
    },
    methods: {
        handleFieldChange(model){
            // 关联项需要清空
            let needResetFields = this.needResetFieldsOnChangeMap[model] || [];
            needResetFields.forEach(field => {
                this.resetField(field);
            });
            // this.$set(this.formModel, model, value);
            this.$refs.form.validateField(model);
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
                    type: this.getValidType(field),
                    message: field.label || field.model + '不可为空',
                    trigger: 'change'
                });
            }
            if (field.rules) {
                rules = rules.concat(field.rules);
            }
            return rules;
        },
        resetField(field) {
            let typeToResetValues = {
                string: '',
                array: [],
                object: {},
                number: 0
            };

            // If type of field is string, it's the model identify of
            if (typeof field === 'string') {
                field = this.fields.find(item => item.model === field);
            }

            let type = this.getValidType(field);
            this.$set(this.formModel, field.model, typeToResetValues[type]);
        },
        reset() {
            this.fields.forEach(field => {
                this.resetField(field);
            });
        },
        getValidType(field) {
            const type = field.type.toLowerCase();
            const subtype = field.subtype;
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
                if (['daterange', 'datetimerange'].includes(subtype)){
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
            if (['imgupload', 'upload'].includes(type)) {
                return 'array';
            }
        },
        getFormModel() {
            return this.formModel;
        },
        handleSubmit() {
            this.submit().then(formModel => {
                // eslint-disable-next-line no-console
                console.log('formModel', formModel);
            }).catch(err => {
                // eslint-disable-next-line no-console
                console.log('err', err);
            });
        },
        submit() {
            return new Promise((resolve, reject) => {
                try {
                    this.$refs.form.validate().then(valid => {
                        if (valid) {
                            resolve(this.formModel);
                        }
                        else {
                            reject(valid);
                        }
                    }).catch(err => {
                        reject(err);
                    });
                }
                catch(err) {
                    // eslint-disable-next-line no-console
                    console.log(err);
                    reject(err);
                }

            });
        },
        handleExtraBtnClick() {
            this.isShowExtra = !this.isShowExtra;
        },
        handleExtraSelectRightContentClickOutside() {
            this.isShowExtra = !this.isShowExtra;
        }
    }
};
</script>
<style lang="less">
.form-generator {
    .ivu-divider {
        margin: 10px auto
    }
}

</style>
