<template>
    <div :class="classes">
        <div v-if="loading" :class="loadingClasses">
            <Spin :class="loadingSpinClasses" :size="size" />
        </div>
        <template v-else>
            <div
                v-if="field.checkAll"
                :class="checkAllClasses"
            >
                <Checkbox
                    :indeterminate="indeterminate"
                    :value="checkAll"
                    @click.prevent.native="handleCheckAll"
                >全选</Checkbox>
            </div>
            <CheckboxGroup
                :value="value"
                :size="size"
                @on-change="handleChange"
            >
                <Checkbox
                    v-for="item in computedOptions"
                    :key="item.value"
                    :label="item.value"
                    :disabled="item.disabled"
                >
                    {{ item.label }}
                </Checkbox>
            </CheckboxGroup>
        </template>
    </div>
</template>
<script>
import getOptions from '../mixins/getOptions';
import {classPrefix} from '../utils/const';
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
            indeterminate: true,
            checkAll: false
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
        checkAllClasses() {
            return `${this.classes}-checkall`;
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
            }) || [];
        }
    },
    watch: {
        value(value = []) {
            this.checkAllGroupChange(value);
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
            if (this.field.checkAll) {
                this.checkAllGroupChange(value);
            }
            this.$emit('on-change', this.field.model, value, null, this.field);
        },
        handleCheckAll() {
            let value = [];
            if (this.indeterminate) {
                this.checkAll = false;
            } else {
                this.checkAll = !this.checkAll;
            }
            this.indeterminate = false;

            if (this.checkAll) {
                value = this.computedOptions.map(option => option.value);
            } else {
                value = [];
            }
            this.handleChange(value);
        },
        checkAllGroupChange(value) {
            if (value.length === this.computedOptions.length) {
                this.indeterminate = false;
                this.checkAll = true;
            } else if (value.length > 0) {
                this.indeterminate = true;
                this.checkAll = false;
            } else {
                this.indeterminate = false;
                this.checkAll = false;
            }
        },
    }
};
</script>
