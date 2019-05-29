<template>
    <iSwitch
        :value="formModel[field.model]"
        :true-value="field.trueValue"
        :false-value="field.falseValue"
        :disabled="field.disabled"
        :size="field.size"
        @on-change="handleChange"
    />
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
    },
    data() {
        return {
            loading: false
        };
    },
    methods: {
        handleChange(value) {
            this.$emit('on-change', this.field.model, value, null, this.field);
        }
    }
};
</script>
