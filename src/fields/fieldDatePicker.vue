<template>
    <DatePicker
        :type="field.subType"
        :placeholder="field.placeholder"
        :value="model"
        :disabled="field.disabled"
        :options=options
        :editable="true"
        separator="-"
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
            type: [Object, Array, String, Boolean],
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
        }
    },
    methods: {
        remoteMethod(field) {
            if (!this.field.api) {
                return;
            }
            this.loading = true;
            console.log(field.type, field);
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
