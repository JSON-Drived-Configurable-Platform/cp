<template>
    <div
        :style="{
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'flex-start',
            flexDirection: 'row',
        }"
    >
        <Select
            :value="model.logic"
            :multiple="field.multiple"
            :disabled="field.disabled"
            :clearable="field.clearable"
            :filterable="field.filterable"
            :size="field.size"
            :placeholder="field.placeholder"
            :remote="remote"
            :style="{width: '100px', marginRight: '20px'}"
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
            :style="{width: '200px'}"
            :value="model.value"
            :type="valueType === 'single' ? 'text' : 'textarea'"
            :size="field.size || 'default'"
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
            :style="{
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'flex-start',
                flexDirection: 'row',
            }"
        >
            <Input
                :value="start"
                type="text"
                :size="field.size || 'default'"
                :placeholder="field.placeholder"
                :clearable="field.clearable"
                :disabled="field.disabled"
                :readonly="field.readonly"
                :icon="field.icon"
                :prefix="field.prefix"
                :suffix="field.suffix"
                :autofocus="field.autofocus"
                :style="{width: '100px'}"
                @on-change="handleStartChange"
            />
            <span :style="{width: '20px',textAlign: 'center'}">~</span>
            <Input
                :value="end"
                type="text"
                :size="field.size || 'default'"
                :placeholder="field.placeholder"
                :clearable="field.clearable"
                :disabled="field.disabled"
                :readonly="field.readonly"
                :icon="field.icon"
                :prefix="field.prefix"
                :suffix="field.suffix"
                :autofocus="field.autofocus"
                :style="{width: '100px'}"
                @on-change="handleEndChange"
            />
        </div>
    </div>
</template>
<script>
import {logicInputMap} from '../utils/const';
export default {
    props: {
        model: {
            type: Object,
            required: true
        },
        field: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            start: '',
            end: '',
            value: this.model || {logic: '=', value: ''}
        };
    },
    computed: {
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
            return logicInputMap[this.value.logic].valueType || 'input';
        }
    },
    methods: {
        remoteMethod() {
            // TODO
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
            this.value.value = this.start + ' - ' + this.end;
            this.$emit('on-change', this.field.model, this.value, null, this.field);
        }
    }
};
</script>
