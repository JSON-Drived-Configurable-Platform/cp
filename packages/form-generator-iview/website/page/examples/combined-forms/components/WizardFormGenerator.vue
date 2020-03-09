<template>
    <div
        v-show="computedForms.length > 0"
        class="combined-form-item combined-form-wizard"
    >
        <Divider v-if="title" dashed orientation="left">{{ title }}</Divider>
        <div class="combined-form-wizard-forms">
            <Steps :current="current" direction="vertical">
                <div
                    v-for="(item, index) in computedForms"
                    :key="index"
                    class="combined-form-wizard-title"
                    @click="handelTabChange(index)"
                >
                    <Step
                        :title="item.title"
                        :content="item.content"
                    />
                </div>
            </Steps>
            <template v-for="(form, index) in computedForms">
                <div
                    v-show="current === index"
                    :key="index"
                    class="combined-form-wizard-form"
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
            </template>
        </div>
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
    },
    data() {
        return {
            current: 0
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

        handelTabChange(index) {
            this.current = index;
        }
    }
};
</script>
<style lang="less">
.combined-form-wizard {
  &-forms {
    display: flex;
    align-items: flex-start;
  }

  &-title {
    cursor: pointer;
  }

  .ivu-steps {
    width: 200px;
  }

  &-form {
    float: left;
  }
}
</style>
