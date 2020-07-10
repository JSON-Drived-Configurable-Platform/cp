<template>
    <i-switch
        :value="value"
        :true-value="trueValue"
        :false-value="falseValue"
        :disabled="field.disabled"
        :class="classes"
        :size="size"
        @on-change="handleChange"
    >
        <span v-if="field.true && field.true.label" slot="open">{{ field.true.label }}</span>
        <Icon v-else-if="field.true && field.true.icon" slot="open" :type="field.true.icon" />

        <span v-if="field.false && field.false.label" slot="close">{{ field.false.label }}</span>
        <Icon v-else-if="field.false && field.false.icon" slot="close" :type="field.false.icon" />
    </i-switch>
</template>
<script>
import {Switch as iSwitch} from 'view-design';
import getOptions from '../mixins/getOptions';
import {classPrefix} from '../utils/const';
import {getValue} from '../utils/processValue';

export default {
    inject: ['FormInstance'],
    components: {
        iSwitch
    },
    mixins: [getOptions],
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
            loading: false,
        };
    },
    computed: {
        trueValue() {
            let info = this.field.true;
            if (!info || info && info.value  === undefined) {
                return true;
            }
            else {
                return info.value;
            }
        },
        falseValue() {
            let info = this.field.false;
            if (!info || info && info.value  === undefined) {
                return false;
            }
            else {
                return info.value;
            }
        },
        classes() {
            return `${classPrefix}-${this.field.type.toLowerCase()}`;
        },
        value() {
            return getValue({
                originModel: this.FormInstance.model,
                model: this.field.model
            });
        }
    },
    methods: {
        handleChange(value) {
            this.$emit('on-change', this.field.model, value, null, this.field);
        }
    }
};
</script>
