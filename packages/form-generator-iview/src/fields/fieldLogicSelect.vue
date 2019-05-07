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
            :size="field.size"
            :placeholder="field.placeholder"
            :remote="remote"
            :remote-method="remoteMethod"
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
            :style="{width: '100px', marginRight: '20px'}"
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
            :style="{
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'flex-start',
                flexDirection: 'row',
            }"
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
                :style="{width: '100px'}"
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
                :style="{width: '100px'}"
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
import axios from '../utils/http';
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
            value: this.model || {logic: '=', value: ''},
            options: []
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
            let logic = this.value.logic || '=';
            return logicInputMap[logic].valueType || 'input';
        },
        computedOptions() {
            return this.field.api ? this.options : this.field.options;
        }
    },
    created() {
        if (this.field.api) {
            this.getRemoteOptions();
        }
    },
    methods: {
        remoteMethod() {
            if (!this.field.api) {
                return;
            }
            this.getRemoteOptions();
        },
        getRemoteOptions() {
            this.loading = true;
            axios.request({
                url: this.field.api,
                method: 'get'
            }).then(({status, data}) => {
                if (+status === 0) {
                    this.options = data;
                    this.loading = false;
                }
            });
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
            this.value.value = this.start + ' - ' + this.end;
            this.$emit('on-change', this.field.model, this.value, null, this.field);
        }
    }
};
</script>
