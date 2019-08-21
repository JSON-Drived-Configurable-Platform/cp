<template>
    <i-switch
        :value="formModel[field.model]"
        :true-value="trueValue"
        :false-value="falseValue"
        :disabled="field.disabled"
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
import {Switch as iSwitch} from 'iview';
import getOptions from '../mixins/getOptions';
export default {
    components: {
        iSwitch
    },
    mixins: [getOptions],
    props: {
        field: {
            type: Object,
            required: true
        },
        formModel: {
            type: Object,
            required: true,
            default() {
                return {};
            }
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
            loading: false
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
        }
    },
    methods: {
        handleChange(value) {
            this.$emit('on-change', this.field.model, value, null, this.field);
        }
    }
};
</script>
