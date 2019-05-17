<template>
    <div :class="classes">
        <Select
            :value="value.logic"
            :disabled="field.disabled"
            :clearable="field.clearable"
            :size="field.size"
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
            :size="field.size"
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
            :size="field.size"
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
                :size="field.size"
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
                :size="field.size"
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
            <span :style="{width: '20px',textAlign: 'center'}">~</span>
            <Select
                v-if="remote"
                :value="end"
                :disabled="field.disabled"
                :clearable="field.clearable"
                :filterable="filterable"
                :size="field.size"
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
                :size="field.size"
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
import {classPrifix} from '../utils/const';
import getOptions from '../mixins/getOptions';
export default {
    mixins: [getOptions],
    props: {
        model: {
            type: Object,
            required: true
        },
        field: {
            type: Object,
            required: true
        },
        apiBase: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            start: '',
            end: '',
            value: this.model || {logic: '=', value: ''},
            options: []
        };
    },
    computed: {
        logic() {
            return this.value.logic;
        },
        classes() {
            return `${classPrifix}-${this.field.type.toLowerCase()}`;
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
            let logic = this.value.logic || '';
            return logicInputMap[logic].valueType;
        },
        computedOptions() {
            return this.options.length > 0 ? this.options : this.field.options;
        }
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
            this.$emit('on-change', this.field.model, this.value, null, this.field);
        }
    }
};
</script>
