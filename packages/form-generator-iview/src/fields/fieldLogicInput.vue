<template>
    <div :class="classes">
        <Select
            :value="value.logic"
            :multiple="field.multiple"
            :disabled="field.disabled"
            :clearable="field.clearable"
            :filterable="field.filterable"
            :size="size"
            :placeholder="field.placeholder"
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
        <Input
            v-if="['single', 'multiple'].includes(valueType)"
            :class="singleInputClassess"
            :value="value.value"
            :type="valueType === 'single' ? 'text' : 'textarea'"
            :size="size"
            :placeholder="field.placeholder"
            :clearable="field.clearable"
            :disabled="field.disabled"
            :readonly="field.readonly"
            :icon="field.icon"
            :prefix="field.prefix"
            :suffix="field.suffix"
            :autofocus="field.autofocus"
            @on-change="handleLogicValueChange"
        />
        <div
            v-if="valueType === 'double'"
            :class="doubleInputBoxClassess"
        >
            <Input
                :value="start"
                type="text"
                :size="size"
                :placeholder="field.placeholder"
                :clearable="field.clearable"
                :disabled="field.disabled"
                :readonly="field.readonly"
                :icon="field.icon"
                :prefix="field.prefix"
                :suffix="field.suffix"
                :autofocus="field.autofocus"
                :class="singleInputClassess"
                @on-change="handleStartChange"
            />
            <span :style="{width: '20px',textAlign: 'center'}">~</span>
            <Input
                :value="end"
                type="text"
                :size="size"
                :placeholder="field.placeholder"
                :clearable="field.clearable"
                :disabled="field.disabled"
                :readonly="field.readonly"
                :icon="field.icon"
                :prefix="field.prefix"
                :suffix="field.suffix"
                :autofocus="field.autofocus"
                :class="singleInputClassess"
                @on-change="handleEndChange"
            />
        </div>
    </div>
</template>
<script>
import {logicInputMap} from '../utils/const';
import {classPrefix} from '../utils/const';
import {getValue} from '../utils/processValue';

export default {
    inject: ['FormInstance'],
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
            }) || {logic: '=', value: ''}
        };
    },
    computed: {
        classes() {
            return `${classPrefix}-${this.field.type.toLowerCase()}`;
        },
        logicSelectClassess() {
            return `${this.classes}-logic`;
        },
        singleInputClassess() {
            return `${this.classes}-single-input`;
        },
        doubleInputBoxClassess() {
            return `${this.classes}-double-input-box`;
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
        formModel() {
            return this.FormInstance.model;
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
    created() {
        this.$watch(`formModel.${this.field.model}`, ({logic, value = ''}) => {
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
            this.loading = true;
        },
        handleLogicValueChange(e) {
            this.value.value = e.target.value;
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
        handleStartChange(e) {
            this.start = e.target.value;
            this.handleDoubleTextChange();
        },
        handleEndChange(e) {
            this.end = e.target.value;
            this.handleDoubleTextChange();
        },
        handleDoubleTextChange() {
            this.value.value = [this.start, this.end];
            this.$emit('on-change', this.field.model, this.value, null, this.field);
        }
    }
};
</script>
