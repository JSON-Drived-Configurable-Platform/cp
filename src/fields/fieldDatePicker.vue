<template>
    <DatePicker
        :type="subType"
        :placeholder="field.placeholder"
        :value="model"
        :disabled="field.disabled"
        :options=options
        :editable="true"
        :style="style"
        @on-change="handleChange"
    >
    </DatePicker>
</template>
<script>
import {Select, Option} from 'iview';
export default {
    components: {
        Select,
        Option
    },
    props: {
        model: {
            type: [Array, String],
            required: true
        },
        field: {
            type: Object,
            required: true
        },
        onChange: {
            type: Function,
            required: true
        }
    },
    computed: {
        remote() {
            return !!this.field.api
        },
        filterable() {
            return !!this.field.api || this.field.filterable
        },
        subType() {
            return this.field.subType || 'date'
        },
        style() {
            const subTypeToStyleWidth = {
                date: '110',
                daterange: '180',
                datetime: '160',
                datetimerange: '280'
            };
            return {
                width: subTypeToStyleWidth[this.subType] + 'px'
            };
        }
    },
    methods: {
        remoteMethod(field) {
            if (!this.field.api) {
                return;
            }
            this.loading = true;
        },
        handleChange(value) {
            this.onChange(this.field.model, value, null, this.field);
        }
    },
    data() {
        return {
            options: {
                disabledDate() {

                },
                shortcuts: [
                    {
                        text: '最近一周',
                        onClick() {
                            console.log('最近一周');
                        }
                    },
                    {
                        text: '最近一月',
                        onClick() {
                            console.log('最近一月');
                        }
                    },
                    {
                        text: '最近三月',
                        onClick() {
                            console.log('最近三月');
                        }
                    },
                    {
                        text: '最近半年',
                        onClick() {
                            console.log('最近半年');
                        }
                    },
                    {
                        text: '最近一年',
                        onClick() {
                            console.log('最近一年');
                        }
                    }
                ]
            }
        };
    }
}
</script>
