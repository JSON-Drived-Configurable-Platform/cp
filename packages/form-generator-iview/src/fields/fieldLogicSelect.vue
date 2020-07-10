<template>
    <div :class="classes">
        <Select
            :value="value.logic"
            :disabled="field.disabled"
            :clearable="field.clearable"
            :size="size"
            placeholder="请选择逻辑类型"
            :class="logicSelectClassess"
            @on-change="handleLogicChange"
        >
            <Option
                v-for="item in enables"
                :key="item.value"
                :value="item.value"
                :disabled="item.disabled"
            >
                {{ item.label }}
            </Option>
        </Select>
        <Select
            v-if="['single', 'multiple'].includes(valueType) && remote"
            :value="value.value"
            :multiple="valueType === 'multiple'"
            :disabled="field.disabled"
            :clearable="field.clearable"
            :filterable="filterable"
            :size="size"
            :placeholder="field.placeholder"
            :remote="remote"
            :remote-method="remoteMethod"
            :class="singleSelectClassess"
            @on-change="handleLogicValueChange"
        >
            <Option
                v-for="item in computedOptions"
                :key="item.value"
                :value="item.value"
                :disabled="item.disabled"
            >{{ item.label }}</Option>
        </Select>
        <Select
            v-if="['single', 'multiple'].includes(valueType) && !remote"
            :value="value.value"
            :multiple="valueType === 'multiple'"
            :disabled="field.disabled"
            :clearable="field.clearable"
            :filterable="filterable"
            :size="size"
            :placeholder="field.placeholder"
            :class="singleSelectClassess"
            @on-change="handleLogicValueChange"
        >
            <Option
                v-for="item in computedOptions"
                :key="item.value"
                :value="item.value"
                :disabled="item.disabled"
            >{{ item.label }}</Option>
        </Select>
        <div
            v-if="valueType === 'double'"
            :class="doubleSelectBoxClassess"
        >
            <Select
                v-if="remote"
                :value="start"
                :disabled="field.disabled"
                :clearable="field.clearable"
                :filterable="filterable"
                :size="size"
                :placeholder="field.placeholder"
                :remote="remote"
                :remote-method="remoteMethod"
                :class="singleSelectClassess"
                @on-change="handleStartChange"
            >
                <Option
                    v-for="item in computedOptions"
                    :key="item.value"
                    :value="item.value"
                    :disabled="item.disabled"
                >{{ item.label }}</Option>
            </Select>
            <Select
                v-else
                :value="start"
                :disabled="field.disabled"
                :clearable="field.clearable"
                :filterable="filterable"
                :size="size"
                :placeholder="field.placeholder"
                :class="singleSelectClassess"
                @on-change="handleStartChange"
            >
                <Option
                    v-for="item in computedOptions"
                    :key="item.value"
                    :value="item.value"
                    :disabled="item.disabled"
                >{{ item.label }}</Option>
            </Select>
            <span :class="midClasses">~</span>
            <Select
                v-if="remote"
                :value="end"
                :disabled="field.disabled"
                :clearable="field.clearable"
                :filterable="filterable"
                :size="size"
                :placeholder="field.placeholder"
                :remote="remote"
                :remote-method="remoteMethod"
                :class="singleSelectClassess"
                @on-change="handleEndChange"
            >
                <Option
                    v-for="item in computedOptions"
                    :key="item.value"
                    :value="item.value"
                    :disabled="item.disabled"
                >{{ item.label }}</Option>
            </Select>
            <Select
                v-else
                :value="end"
                :disabled="field.disabled"
                :clearable="field.clearable"
                :filterable="filterable"
                :size="size"
                :placeholder="field.placeholder"
                :class="singleSelectClassess"
                @on-change="handleEndChange"
            >
                <Option
                    v-for="item in computedOptions"
                    :key="item.value"
                    :value="item.value"
                    :disabled="item.disabled"
                >{{ item.label }}</Option>
            </Select>
        </div>
    </div>
</template>
<script>
import {logicInputMap} from '../utils/const';
import {classPrefix} from '../utils/const';
import getOptions from '../mixins/getOptions';
import {getValue} from '../utils/processValue';

export default {
    inject: ['FormInstance'],
    mixins: [getOptions],
    props: {
        field: {
            type: Object,
            required: true
        },
        apiBase: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default() {
                return 'default';
            }
        },
    },
    data() {
        return {
            start: '',
            end: '',
            // 有watch，所以只取一次赋值
            value: getValue({
                originModel: this.FormInstance.model,
                model: this.field.model
            }) || {logic: '=', value: ''},
            options: []
        };
    },
    computed: {
        logic() {
            return this.value.logic;
        },
        classes() {
            return `${classPrefix}-${this.field.type.toLowerCase()}`;
        },
        midClasses() {
            return `${this.classes}-logic-mid`;
        },
        logicSelectClassess() {
            return `${this.classes}-logic`;
        },
        singleSelectClassess() {
            return `${this.classes}-single-select`;
        },
        doubleSelectBoxClassess() {
            return `${this.classes}-double-select-box`;
        },
        remote() {
            return !!this.field.api;
        },
        filterable() {
            return !!this.field.api || this.field.filterable;
        },
        enables() {
            const enables = this.field.enables || [];
            return enables.map(logic => {
                return {
                    label: logicInputMap[logic].label,
                    value: logic
                };
            });
        },
        valueType() {
            if (!this.value.logic) {
                return 'text';
            }
            return logicInputMap[this.value.logic].valueType || 'text';
        },
        computedOptions() {
            return this.options.length > 0 ? this.options : this.field.options;
        },
        formModel() {
            return this.FormInstance.model;
        },
    },
    watch: {
        value: {
            handler({value}) {
                if (Array.isArray(value)) {
                    this.start = value[0];
                    this.end = value[1];
                }
                else {
                    this.start = '',
                    this.end = '';
                }
            },
            deep: true,
            immediate: true
        }
    },
    created() {
        this.$watch(`formModel.${this.field.model}`, ({logic, value = ''}) => {
            // ???设置成空是不是更合适？但是设置为空有bug
            if (!logic) {
                logic = this.enables[0].value;
            }
            this.value = {
                logic,
                value
            };
        });
    },
    methods: {
        remoteMethod() {
            if (!this.field.api) {
                return;
            }
            this.getRemoteOptions();
        },
        handleLogicValueChange(value) {
            this.value.value = value;
            this.handleChange();
        },
        handleLogicChange(logic) {
            this.value = {
                logic,
                value: ''
            };
            this.start = '';
            this.end = '';
            this.handleChange();
        },
        handleChange() {
            this.$emit('on-change', this.field.model, this.value, null, this.field);
        },
        handleStartChange(value) {
            this.start = value;
            this.handleDoubleTextChange();
        },
        handleEndChange(value) {
            this.end = value;
            this.handleDoubleTextChange();
        },
        handleDoubleTextChange() {
            this.value.value = [this.start, this.end];
            this.handleChange();
        }
    }
};
</script>
