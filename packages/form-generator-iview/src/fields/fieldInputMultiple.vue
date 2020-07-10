<!-- 按照标签展示多行元素的input组件 -->
<template>
    <div :class="classes">
        <div :class="inputBoxClasses">
            <i-input
                :value="value"
                :type="field.subtype"
                :placeholder="field.placeholder"
                :clearable="field.clearable"
                :disabled="field.disabled"
                :readonly="field.readonly"
                :maxlength="field.maxlength"
                :icon="field.icon"
                :prefix="field.prefix"
                :suffix="field.suffix"
                :autofocus="field.autofocus"
                :autocomplete="field.autocomplete"
                :autosize="field.autosize"
                :search="field.search"
                :spellcheck="field.spellcheck"
                :rows="field.rows"
                :number="field.number"
                :enter-button="field.enterButton"
                :size="size"
                @on-keydown="handelMemberKeydown"
                @on-change="handleChange"
            />
            <Button
                :class="addBtnClasses"
                icon="md-add"
                type="primary"
                ghost
                @click="handleAdd"
            />
        </div>
        <div :class="listWrapperClasses">
            <Tag
                v-for="item in defaultList"
                :key="item"
                disabled
                type="border"
                size="large"
            >{{ item }}</Tag>
            <Tag
                v-for="(member, index) in list"
                :key="member"
                type="border"
                size="large"
                :closable="typeof field.closable === 'undefined' ? true : field.closable"
                @on-close="handelMemberDelete(index, $event)"
            >{{ member }}</Tag>
        </div>
    </div>
</template>

<script>
import {Input, Tag} from 'view-design';
import {getValue} from '../utils/processValue';
import schema from 'async-validator';
import {classPrefix} from '../utils/const';

export default {
    inject: ['FormInstance'],
    components: {
        iInput: Input,
        Tag
    },
    props: {
        field: {
            type: Object,
            required: true
        },
        size: {
            type: String,
            default() {
                return 'default';
            }
        }
    },
    data() {
        return {
            value: '',
            defaultList: this.field.defaultList || [],
        };
    },
    computed: {
        classes() {
            return `${classPrefix}-${this.field.type.toLowerCase()}`;
        },
        inputBoxClasses() {
            return `${this.classes}-box`;
        },
        addBtnClasses() {
            return `${this.classes}-add-btn`;
        },
        listWrapperClasses() {
            return `${this.classes}-list-wrapper`;
        },
        list() {
            return getValue({
                originModel: this.FormInstance.model,
                model: this.field.model
            }) || [];
        }
    },
    mounted() {},
    created() {},
    methods: {
        handelMemberKeydown(e) {
            if (e.keyCode === 13) {
                this.handleAdd(e);
            }
        },
        // 通过field.inputRules校验
        validator() {
            let formItem = this.$parent;

            if (typeof this.field.inputRules === 'object') {
                let descriptor = {};
                descriptor[this.field.model] = this.field.inputRules;

                let validator = new schema(descriptor);
                let model = {};

                model[this.field.model] = this.value;

                validator.validate(model, errors => {
                    if (errors) {
                        this.validateMessage = errors ? errors[0].message : '';

                        formItem.validateState = 'error';
                        formItem.validateMessage = this.validateMessage;
                        return;
                    } else {
                        formItem.validateState = 'success';
                        this.validateMessage = '';
                    }
                });
            } else {
                formItem.validateState = 'success';
                this.validateMessage = '';
            }
        },
        handleAdd(e) {
            if (!this.value) {
                this.$Message.warning('请输入数据后添加');
                return;
            }
            if (this.list.indexOf(this.value) !== -1) {
                this.$Message.warning(`${this.value}已存在`);
                return;
            }
            if (this.defaultList.indexOf(this.value) !== -1) {
                this.$Message.warning(`${this.value}已存在`);
                return;
            }

            if (!this.validateMessage) {
                this.addMember(e);
            }
        },
        addMember(e) {
            let formItem = this.$parent;
            formItem.validateState = 'success';

            this.field.succMessage && this.$Message.success(this.field.succMessage);
            this.list.push(this.value);
            this.value = '';
            // this.$set(this.FormInstance.model, this.field.model, this.list);
            this.$emit('on-change', this.field.model, this.list, e, this.field);
        },
        handelMemberDelete(i, e) {
            this.list.splice(i, 1);
            this.field.delMessage && this.$Message.success(this.field.delMessage);
            this.$emit('on-change', this.field.model, this.list, e, this.field);
        },
        handleChange(e) {
            this.value = e.target.value;
            this.validator();
        }
    }
};
</script>
