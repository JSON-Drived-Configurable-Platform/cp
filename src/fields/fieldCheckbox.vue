<template>
    <div>
        <div
            v-if="field.checkAll"
            style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;"
        >
            <Checkbox
                :indeterminate="indeterminate"
                :value="checkAll"
                @click.prevent.native="handleCheckAll"
            >全选</Checkbox>
        </div>
        <CheckboxGroup
            :value="form.model[field.model]"
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
    </div>
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
            options: [],
            indeterminate: true,
            checkAll: false
        };
    },
    computed: {
        computedOptions() {
            return this.options.length > 0 ? this.options : this.field.options;
        },
        optionsApi() {
            return !Array.isArray(this.field.options) ? this.field.options : '';
        },
        value() {
            return this.form.model[this.field.model] || [];
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
            this.$set(this.form.model, this.field.model, value);
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
        }
    }
};
</script>
