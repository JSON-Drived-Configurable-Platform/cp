<template>
    <div :class="classes">
        <Select
            :value="model.logic"
            :multiple="field.multiple"
            :disabled="field.disabled"
            :clearable="field.clearable"
            :size="field.size"
            :placeholder="field.placeholder"
            :remote="remote"
            :remote-method="remoteMethod"
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
            v-if="['single', 'multiple'].includes(valueType)"
            :value="model.value"
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
        <div
            v-if="valueType === 'double'"
            :class="doubleSelectBoxClassess"
        >
            <Select
                :value="start"
                :multiple="field.multiple"
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
            <span :style="{width: '20px',textAlign: 'center'}">~</span>
            <Select
                :value="end"
                :multiple="field.multiple"
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
        formModel: {
            type: Object,
            required: true,
            default() {
                return {};
            }
        },
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
            let logic = this.value.logic || '=';
            return logicInputMap[logic].valueType || 'input';
        },
        computedOptions() {
            return this.options.length > 0 ? this.options : this.field.options;
        }
    },
    created() {
        if (this.field.api) {
            this.getRemoteOptions();
        }
    },
    methods: {
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
            this.value.value = this.start + ' - ' + this.end;
            this.$emit('on-change', this.field.model, this.value, null, this.field);
        }
    }
};
</script>
