<template>
    <div :class="classes">
        <Table
            ref="table-select"
            :loading="loading"
            :border="field.border"
            :highlight-row="!multiple"
            :columns="computedColumns"
            :data="computedOptions"
            @on-current-change="handleCurrentChange"
            @on-selection-change="handleSelectionSelect"
        />
    </div>
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
    },
    data() {
        return {
            loading: false,
            columns: [],
            options: []
        };
    },
    computed: {
        classes() {
            return `${classPrefix}-${this.field.type.toLowerCase()}`;
        },
        multiple() {
            return this.field.multiple;
        },
        computedColumns() {
            const columns = this.columns.length > 0 ? this.columns : this.field.columns;
            const multiple = this.multiple;
            if (multiple) {
                let computedColumns = columns.slice();
                computedColumns.unshift({
                    type: 'selection',
                    width: 60,
                    align: 'center'
                });
                return computedColumns;
            }
            return columns;
        },
        computedOptions() {
            const options = this.options.length > 0 ? this.options : this.field.options;
            if (!Array.isArray(options)) {
                return [];
            }
            let value = null;
            if (this.multiple) {
                value = getValue({
                    originModel: this.FormInstance.model,
                    model: this.field.model
                }) || [];
                return options.map(item => {
                    if (value && value.includes(item.id)) {
                        item._checked = true;
                    } else {
                        item._checked = false;
                    }
                    return item;
                });
            } else {
                value = getValue({
                    originModel: this.FormInstance.model,
                    model: this.field.model
                }) || '';
                if (Array.isArray(value)) {
                    value = value[0];
                }
            }
            return options.map(item => {
                item._highlight = value === item.id;
                return item;
            });
        },
        optionsApi() {
            return !Array.isArray(this.field.options) ? this.field.options : '';
        },
    },
    methods: {
        remoteMethod() {
            if (!this.field.api && !this.optionsApi) {
                return;
            }
            this.getRemoteData();
        },
        handleChange(value) {
            this.$emit('on-change', this.field.model, value, null, this.field);
        },
        handleCurrentChange(currentRow) {
            this.handleChange(currentRow.id);
        },
        handleSelectionSelect(selection) {
            const value = selection.map(item => item.id);
            this.handleChange(value);
        }
    }
};
</script>

<style>

</style>
