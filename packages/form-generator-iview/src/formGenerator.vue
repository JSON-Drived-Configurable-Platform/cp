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
                    :request-interceptor="requestInterceptor"
                    @on-field-change="handleFieldChange"
                    @on-submit="handleSubmit"
                    @on-reset="handleReset"
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
import {classPrifix} from './utils/const';
import vClickOutside from 'v-click-outside';
import {getValidType} from './utils/getValidType';
import schema from 'async-validator';
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
        headerTextClasses() {
            return `${classPrifix}-header-text`;
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
            ].filter(item => this.checkHiddenOn(item));
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
    // watch: {
    //     model: {
    //         handler: function (val) {
    //             this.formModel = val;
    //         },
    //         deep: true
    //     }
    // },
    methods: {
        handleFieldChange(model, value){
            // 关联项需要清空
            let needResetFields = this.needResetFieldsOnChangeMap[model] || [];
            needResetFields.forEach(field => {
                this.resetField(field);
            });
            this.$refs.form.validateField(model);
            this.$emit('on-field-change', model, value);
        },

        handleSubmit() {
            this.submit().then(model => {
                // eslint-disable-next-line no-console
                console.log('model', model);
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
                            resolve(this.model);
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

        handleReset() {
            // TODO still has problem
            // this.$refs.form.resetFields();
            this.reset();
        },

        reset() {
            this.fields.forEach(field => {
                this.resetField(field);
            });
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
            let type = getValidType(field);
            // console.log(type, field.model, typeToResetValues[type]);
            this.$set(this.model, field.model, typeToResetValues[type]);
        },

        handleExtraBtnClick() {
            this.isShowExtra = !this.isShowExtra;
        },
        handleExtraSelectRightContentClickOutside() {
            this.isShowExtra = !this.isShowExtra;
        },

        checkHiddenOn(item) {
            let show = true;
            const model = this.model;
            if (item.hiddenOn) {
                let descriptor = item.hiddenOn;
                let validator = new schema(descriptor);
                validator.validate(model, (errors) => {
                    if(!errors) {
                        show = false;
                    }
                });
            }
            if (item.showOn) {
                let descriptor = item.showOn;
                let validator = new schema(descriptor);
                validator.validate(model, (errors) => {
                    if(errors) {
                        show = false;
                    }
                });
            }
            // console.log(item.model, valid, model);
            return show;
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
