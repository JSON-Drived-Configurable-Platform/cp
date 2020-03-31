<template>
    <div
        v-show="computedForms.length > 0"
        class="combined-form-item combined-form-tab"
    >
        <Divider v-if="title" dashed orientation="left">{{ title }}</Divider>
        <Tabs
            :type="options.type"
            :size="options.size"
            :animated="options.animated"
        >
            <TabPane
                v-for="(form, index) in computedForms"
                :key="index"
                :label="form.label || form.title"
            >
                <div
                    :key="index"
                    class="combined-form-tab-form"
                >
                    <FormGenerator
                        :ref="'FormGenerator-' + index"
                        :fields="form.fields"
                        :model="model"
                        @on-field-change="handleFieldChange"
                        @on-submit="handleSubmit(index)"
                        @on-button-event="handleButtonEvent"
                    />
                </div>
            </TabPane>
        </Tabs>
    </div>
</template>

<script>
import {showValidate} from '../utils.js';
export default {
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
        model: {
            type: Object,
            default(){
                return {};
            }
        },
        forms: {
            type: Array,
            default() {
                return [];
            }
        },
        title: {
            type: String,
            default: ''
        },
        options: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data() {
        return {
            current: 0,
        };
    },
    computed: {
        length() {
            return this.forms.length;
        },
        computedForms() {
            const model = this.model;
            const forms = this.forms || [];
            return forms.filter(({showOn, hiddenOn}) => {
                return showValidate(model, showOn, hiddenOn);
            });
        }
    },
    // created() {
    //     // TODO, deep clone?
    //     this.localModel = Object.assign({}, this.model);
    // },
    methods: {
        handleFieldChange(model, value) {
            this.$emit('on-field-change', model, value);
        },

        handleSubmit(index) {
            this.$refs[`FormGenerator-${index}`][0].submit()
                .then(data => {
                    this.$emit('on-form-submit', data);
                    (this.current < this.length - 1) && this.current++;
                });
        },

        handleButtonEvent(event) {
            this[event.name]();
        },

        // 上一步
        prev() {
            this.current--;
        }
    }
};
</script>
<style lang="less">
.page-form-takeover-form {
    .ivu-form .ivu-form-item-label {
        width: 100px;
    }

    &-form {
        margin:10px auto 0;
    }
}
</style>
