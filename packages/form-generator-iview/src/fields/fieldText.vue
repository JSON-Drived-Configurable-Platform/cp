<template>
    <pre>{{ value }}</pre>
</template>

<script>
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
            options: []
        };
    },
    computed: {
        computedField() {
            const options = this.computedOptions;
            if (this.field.showAll) {
                return {
                    label: this.FormInstance.model
                };
            }
            if (options.length > 0) {
                let value = getValue({
                    originModel: this.FormInstance.model,
                    model: this.field.model
                });

                if (Array.isArray(value)) {
                    return options.filter(item => value.includes(item.value)).reduce((acc, cur, idx) => {
                        if (idx === 0) {
                            acc.label = cur.label;
                        } else {
                            acc.label += ', ' + cur.label;
                        }
                        return acc;
                    }, {});
                } else {
                    let option = options.find(item => item.value === value);
                    if (option !== undefined) {
                        return option;
                    } else {
                        return {
                            label: this.computedNullValue
                        };
                    }
                }
            }
            return {
                label: getValue({
                    originModel: this.FormInstance.model,
                    model: this.field.model
                })
            };
        },
        computedOptions() {
            return this.options.length > 0 ? this.options : (Array.isArray(this.field.options) ? this.field.options : []);
        },
        computedNullValue() {
            let nullValue = this.field.nullValue;
            if (typeof nullValue === 'string') {
                return nullValue;
            } else if (typeof nullValue === 'object' && !nullValue) {
                return getValue({
                    originModel: this.FormInstance.model,
                    model: this.field.model
                });
            } else {
                return '-';
            }
        },
        value() {
            return this.computedField.label;
        }
    }
};
</script>

<style>
</style>
