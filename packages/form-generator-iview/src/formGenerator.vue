<template>
    <div :class="classes">
        <h3 :class="headerClasses">
            {{ options.title }}
            <Poptip
                v-if="tip.title"
                :class="tipsClasses"
                :title="tip.title"
                :content="tip.content"
                placement="left-start"
            >
                <Icon type="md-help-circle" />
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
            label-position="left"
        >
            <div :class="defaultItemsBoxClassess">
                <FormItem
                    v-for="field in displayFields"
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
import ControlGenerator from './controlGenerator';
import {classPrifix} from './utils/const';
import vClickOutside from 'v-click-outside';
export default {
    name: 'FormGenerator',
    components: {
        ControlGenerator
    },
    directives: {
        clickOutside: vClickOutside.directive
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
            return `${classPrifix}-default-items-box`;
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
        itemStyle() {
            return {
                minWidth: this.options.itemWidth + 'px',
                maxWidth: '100%',
                marginRight: '30px'
            };
        },
        tip() {
            return {
                title: this.options.tip && this.options.tip.title,
                content: this.options.tip && this.options.tip.content,
            };
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
