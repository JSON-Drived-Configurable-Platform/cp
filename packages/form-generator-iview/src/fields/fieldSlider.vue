<template>
    <Slider
        :value="value"
        :range="field.range || false"
        :disabled="field.disabled || false"
        :step="field.step || 1"
        :show-input="field.showInput || false"
        :marks="field.marks || {}"
        :min="field.min || 0"
        :max="field.max || 100"
        :tip-format="field.format || defaultFormat"
        :show-stops="field.showStops || false"
        :input-size="field.inputSize || 'default'"
        :show-tip="field.showTip || 'hover'"
        :class="leftClasses"
        @on-change="handleChange"
    />
</template>
<script>
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
        }
    },
    data() {
        return {
        };
    },
    computed: {
        classes() {
            return `${classPrefix}-${this.field.type.toLowerCase()}`;
        },
        leftClasses() {
            if (this.field.left) {
                return `${this.classes}-left`;
            }
            return '';
        },
        value() {
            return getValue({
                originModel: this.FormInstance.model,
                model: this.field.model
            }) || '';
        }
    },
    methods: {
        handleChange(value) {
            this.$emit('on-change', this.field.model, value, null, this.field);
        },
        defaultFormat(val) {
            return val;
        }
    }
};
</script>
