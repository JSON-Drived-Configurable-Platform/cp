<template>
    <div v-if="loading" :class="loadingClasses">
        <Spin :class="loadingSpinClasses" :size="size" />
    </div>
    <RadioGroup
        v-else
        :value="value"
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
            options: [],
        };
    },
    computed: {
        classes() {
            return `${classPrefix}-${this.field.type.toLowerCase()}`;
        },
        loadingClasses() {
            return `${this.classes}-loading`;
        },
        loadingSpinClasses() {
            return `${this.classes}-loading-spin`;
        },
        computedOptions() {
            return this.options.length > 0 ? this.options : (Array.isArray(this.field.options) ? this.field.options : []);
        },
        optionsApi() {
            return !Array.isArray(this.field.options) ? this.field.options : '';
        },
        value() {
            return getValue({
                originModel: this.FormInstance.model,
                model: this.field.model
            });
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
            this.$emit('on-change', this.field.model, value, null, this.field);
        }
    }
};
</script>
