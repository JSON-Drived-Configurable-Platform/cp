<template>
    <RadioGroup
        :value="form.model[field.model]"
        :type="field.subtype"
        :vertical="field.vertical"
        :size="size"
        @on-change="handleChange"
    >
        <Radio
            v-for="item in computedOptions"
            :key="item.value"
            :label="item.value"
            :disabled="item.disabled"
        >
            {{ item.label }}
        </Radio>
    </RadioGroup>
</template>
<script>
import getOptions from '../mixins/getOptions';
export default {
    inject: ['form'],
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
            options: []
        };
    },
    computed: {
        computedOptions() {
            return this.options.length > 0 ? this.options : this.field.options;
        },
        optionsApi() {
            return !Array.isArray(this.field.options) ? this.field.options : '';
        }
    },
    methods: {
        remoteMethod() {
            if (!this.field.api && !this.optionsApi) {
                return;
            }
            this.getRemoteOptions();
        },
        handleChange(value) {
            this.$set(this.form.model, this.field.model, value);
            this.$emit('on-change', this.field.model, value, null, this.field);
        }
    }
};
</script>
