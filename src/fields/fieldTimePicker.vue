<template>
    <TimePicker
        :type="field.subtype || 'time'"
        :placeholder="field.placeholder"
        :value="value"
        :disabled="field.disabled"
        :editable="field.editable"
        :clearable="field.clearable"
        :class="classes"
        :size="size"
        @on-change="handleChange"
    />
</template>

<script>
import {classPrefix} from '../utils/const';
import {getMultistageValue} from '../utils/multistageValue';

export default {
    inject: ['form'],
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
        inline: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            value: getMultistageValue({
                originModel: this.form.model,
                model: this.field.model
            }) || ''
        };
    },
    computed: {
        classes() {
            return `${classPrefix}-${this.field.type.toLowerCase()}`;
        }
    },
    methods: {
        handleChange(value) {
            this.$emit('on-change', this.field.model, value, null, this.field);
        }
    }
};
</script>

<style>

</style>
