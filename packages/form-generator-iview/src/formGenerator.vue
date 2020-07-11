<template>
    <div :class="classes">
        <h3
            v-if="options.title || tip.title"
            :class="headerClasses"
        >
            <span :class="headerTextClasses">{{ options.title }}</span>
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
            :model="model"
            :label-width="options | labelWidth"
            :inline="options.inline"
            :label-position="options.labelPosition || 'right'"
        >
            <div :class="defaultItemsBoxClassess">
                <FieldGenerator
                    v-for="field in displayFields"
                    :key="field.model"
                    :field="field"
                    :api-base="apiBase"
                    :size="options.size"
                    :item-width="options.itemWidth"
                    :inline="options.inline"
                    request-interceptor="requestInterceptor"
                    :params-container="paramsContainer"
                    @on-field-change="handleFieldChange"
                    @on-field-preview="handleFieldPreview"
                    @on-submit="handleSubmit($event)"
                    @on-reset="handleReset"
                    @on-button-event="handleButtonEvent($event)"
                    @on-button-cancel="handleButtonCancel"
                    @on-checkboxCard-click="handelCheckboxCardClick"
                    @on-list-item-click="handelListItemClick"
                    @on-label-tip-click="handelLabelTipClick"
                    @on-label-tip-mouseIn="handelMouseInClick"
                    @on-label-tip-mouseOut="handelMouseOutClick"
                />
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
import {classPrefix} from './utils/const';
import {isFunction} from './utils/func';
import vClickOutside from 'v-click-outside';
import {getValidType} from './utils/getValidType';
import {setValue} from './utils/processValue';

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
        }
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
            default() {
                return {};
            }
        }
    },
    data () {
        return {
            isShowExtra: false,
            selectedDefaultHideFields: [],
            oldParamsContainer: {}
        };
    },

    computed: {
        classes() {
            return classPrefix;
        },
        headerClasses() {
            return `${classPrefix}-header`;
        },
        headerTextClasses() {
            return `${classPrefix}-header-text`;
        },
        tipsClasses() {
            return `${classPrefix}-tip`;
        },
        defaultItemsBoxClassess() {
            return [
                `${classPrefix}-default-items-box`,
                {
                    [`${classPrefix}-default-items-box-no-right`]: this.computedFields.defaultHideFields.length === 0,
                }
            ];
        },
        moreDividerClasses() {
            return `${classPrefix}-more-divider-box`;
        },
        extraItemsBoxClassess() {
            return `${classPrefix}-extra-items-box`;
        },
        extraSelectBoxRightClasses() {
            return `${classPrefix}-extra-box-right`;
        },
        extraSelectRightContentClasses() {
            return `${classPrefix}-extra-right-content`;
        },
        extraBtnBoxClasses() {
            return `${classPrefix}-extra-box`;
        },
        labelLeftClasses() {
            return `${classPrefix}-extra-left`;
        },
        extraSelectBoxClasses() {
            return `${classPrefix}-extra-select-box`;
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
            const allParams = [...Object.keys(this.paramsContainer), ...fields.map(field => field.model)];
            fields.forEach(field => {
                let apiParams = field.apiParams;
                if (apiParams === 'all') {
                    apiParams = allParams;
                }
                if (Array.isArray(apiParams) && apiParams.length > 0) {
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
        paramsContainer: {
            deep: true,
            handler(newParams) {
                const oldParams = this.oldParamsContainer;
                const newParamsModels = Object.keys(newParams);
                const oldParamsModels = Object.keys(oldParams);
                const models = newParamsModels.length > oldParamsModels.length ? newParamsModels : oldParamsModels;
                models.forEach(model => {
                    if (newParams[model] !== oldParams[model]) {
                        let needResetFields = this.needResetFieldsOnChangeMap[model] || [];
                        needResetFields.forEach(field => {
                            this.resetField(field);
                        });
                    }
                });
                this.oldParamsContainer = JSON.parse(JSON.stringify(newParams));
            }
        }
    },
    created() {
        this.oldParamsContainer = JSON.parse(JSON.stringify(this.paramsContainer)) || {};
    },
    mounted() {
        this.form = this.$refs.form;
        this.form.model = this.model;
    },
    methods: {
        handleFieldChange({model, value, field}) {
            // 关联项需要清空
            let needResetFields = this.needResetFieldsOnChangeMap[model] || [];
            needResetFields.forEach(fieldItem => {
                this.resetField(fieldItem);
            });
            setValue.call(this, {
                originModel: this.form.model,
                model: model,
                value
            });
            this.$refs.form.validateField(model);
            this.$emit('on-field-change', model, value, field);
        },
        handleFieldPreview({model, value, field}) {
            this.$emit('on-field-preview', model, value, field);
        },
        handleSubmit($event) {
            this.$emit('on-submit', $event);
        },

        handleReset() {
            // TODO still has problem
            this.reset();
        },

        submit() {
            return new Promise((resolve, reject) => {
                try {
                    this.form.validate(
                        valid => {
                            if (valid) {
                                resolve(this.form.model);
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

        reset() {
            this.fields.forEach(field => {
                this.resetField(field);
            });
        },

        resetField(field) {
            if (field && isFunction(field)) {
                const params = Object.assign({}, this.form.model, this.paramsContainer);
                field = field(params);
            }
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
            let type = getValidType(field);
            let fieldComponent = this.$refs.form.fields.find(item => item.prop === field.model);
            if (fieldComponent) {
                setValue.call(this, {
                    originModel: this.form.model,
                    model: field.model,
                    value: typeToResetValues[type]
                });
                fieldComponent.resetField();
            }
        },

        handleButtonEvent($event) {
            this.$emit('on-button-event', $event);
        },

        handleButtonCancel($event) {
            this.$emit('on-button-cancel', $event);
        },

        handelCheckboxCardClick(value) {
            this.$emit('on-checkboxCard-click', value);
        },

        handelListItemClick(value) {
            this.$emit('on-list-item-click', value);
        },

        handelLabelTipClick({field}) {
            this.$emit('on-label-tip-click', {field});
        },

        handelMouseInClick({field}) {
            this.$emit('on-label-tip-mouseIn', {field});
        },

        handelMouseOutClick({field}) {
            this.$emit('on-label-tip-mouseOut', {field});
        },

        handleExtraBtnClick() {
            this.isShowExtra = !this.isShowExtra;
        },
        handleExtraSelectRightContentClickOutside() {
            this.isShowExtra = !this.isShowExtra;
        },
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
