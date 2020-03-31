<template>
    <span class="one-line">{{ value }}</span>
</template>

<script>
import {classPrefix} from '../utils/const';
import getOptions from '../mixins/getOptions';

export default {
    inject: ['form'],
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
        classes() {
            return `${classPrefix}-${this.field.type.toLowerCase()}`;
        },

        computedField() {
            const options = this.computedOptions;
            if (options.length > 0) {
                let value = this.form.model[this.field.model];

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
                    return options.find(item => item.value === value);
                }
            }
            return {
                label: this.form.model[this.field.model]
            };
        },
        optionsApi() {
            return !Array.isArray(this.field.options) ? this.field.options : '';
        },
        computedOptions() {
            return this.options.length > 0 ? this.options : (Array.isArray(this.field.options) ? this.field.options : []);
        },
        value() {
            return this.computedField.label;
        }
    }
};
</script>

<style>
    .one-line {
        white-space: nowrap;
    }
</style>
