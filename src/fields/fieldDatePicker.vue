<template>
    <DatePicker
        :type="subType"
        :placeholder="field.placeholder"
        :value="model"
        :disabled="field.disabled"
        :options="options"
        :editable="true"
        :style="style"
        @on-change="handleChange"
    />
</template>
<script>
export default {
    props: {
        model: {
            type: [Array, String],
            required: true
        },
        field: {
            type: Object,
            required: true
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
                            // TODO
                            // console.log('最近一周');
                        }
                    },
                    {
                        text: '最近一月',
                        onClick() {
                            // TODO
                            // console.log('最近一月');
                        }
                    },
                    {
                        text: '最近三月',
                        onClick() {
                            // TODO
                            // console.log('最近三月');
                        }
                    },
                    {
                        text: '最近半年',
                        onClick() {
                            // TODO
                            // console.log('最近半年');
                        }
                    },
                    {
                        text: '最近一年',
                        onClick() {
                            // TODO
                            // console.log('最近一年');
                        }
                    }
                ]
            }
        };
    },
    computed: {
        remote() {
            return !!this.field.api;
        },
        filterable() {
            return !!this.field.api || this.field.filterable;
        },
        subType() {
            return this.field.subType || 'date';
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
        remoteMethod() {
            // TODO
            if (!this.field.api) {
                return;
            }
            this.loading = true;
        },
        handleChange(value) {
            this.$emit('on-change', this.field.model, value, null, this.field);
        }
    }
};
</script>
