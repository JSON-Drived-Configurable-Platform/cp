<template>
    <div class="container">
        <FormGenerator
            ref="FormGenerator"
            :fields="fields"
            :model="model"
            :options="options"
        />
        <Button @click="submit">提交</Button>
    </div>
</template>

<script>
    import FormGenerator from '../src/index';
    import {Button} from 'iview';
    export default {
        components: {
            FormGenerator
        },
        data() {
            return {
                model: {
                    name: 'wangbing',
                    'name-forbidden': 'wangbing',
                    'name-textarea': '啊啊啊啊啊',
                    singleSelect: '1',
                    multiSelect: ['1', '2'],
                    singleSelectRemote: '',
                    checkbox: ['1', '2'],
                    radio: '1',
                    date: '2016-01-01',
                    daterange: ['2016-01-01', '2016-02-15'],
                    datetime: '2019-04-22 00:00:00',
                    datetimerange: ['2019-04-22 00:00:00', '2019-05-30 00:00:00'],
                    cascader: ['jiangsu', 'suzhou', 'shizilin'],
                    inputNumber: 7,
                    logicInput: {
                        logic: '=',
                        value: ''
                    },
                    logicSelect: {
                        logic: '=',
                        value: ''
                    }
                },
                options: {
                    labelWidth: 140
                },
                fields: [
                    {
                        key: '1000',
                        type: 'Input',
                        label: '输入框',
                        model: 'name',
                        placeholder: '请输入用户名',
                        required: true
                    },
                    {
                        key: '10001',
                        type: 'Input',
                        label: '用户名-禁用',
                        model: 'name-forbidden',
                        readonly: true,
                        disabled: true,
                        placeholder: '请输入用户名'
                    },
                    {
                        key: '10002',
                        type: 'Input',
                        subType: 'textarea',
                        label: '输入框',
                        model: 'name-textarea',
                        placeholder: '请输入用户名',
                        required: true
                    },
                    {
                        key: '100021',
                        type: 'InputNumber',
                        label: '数字多行输入框',
                        model: 'inputNumber',
                        placeholder: '',
                        required: true
                    },
                    {
                        key: '1002',
                        type: 'Select',
                        label: '单选下拉',
                        model: 'singleSelect',
                        required: true,
                        options: [
                            {
                                label: '选项一',
                                value: '1'
                            },
                            {
                                label: '选项二',
                                value: '2'
                            }
                        ]
                    },
                    {
                        key: '10021',
                        type: 'Select',
                        label: '多选下拉',
                        multiple: true,
                        model: 'multiSelect',
                        options: [
                            {
                                label: '选项一',
                                value: '1'
                            },
                            {
                                label: '选项二',
                                value: '2'
                            }
                        ],
                        required: true,
                    },
                    {
                        key: '10023',
                        type: 'Select',
                        label: '单选下拉支持搜索',
                        api: 'http://www.baidu.com',
                        model: 'singleSelectRemote'
                    },
                    // {
                    //     key: '10023',
                    //     type: 'Select',
                    //     label: '多选下拉支持搜索',
                    //     multiple: true,
                    //     api: '',
                    //     model: 'multiSelectRemote',
                    //     options: [
                    //         {
                    //             label: '选项一',
                    //             value: '1'
                    //         },
                    //         {
                    //             label: '选项二',
                    //             value: '2'
                    //         }
                    //     ]
                    // },
                    {
                        key: '1003',
                        type: 'Radio',
                        label: '单选',
                        model: 'radio',
                        options: [
                            {
                                label: '选项一',
                                value: '1'
                            },
                            {
                                label: '选项二',
                                value: '2'
                            }
                        ],
                        required: true,
                    },
                    {
                        key: '1004',
                        type: 'Checkbox',
                        label: '多选',
                        model: 'checkbox',
                        options: [
                            {
                                label: '选项一',
                                value: '1'
                            },
                            {
                                label: '选项二',
                                value: '2'
                            },
                            {
                                label: '选项三',
                                value: '3'
                            },
                            {
                                label: '选项四',
                                value: '4'
                            }
                        ],
                        required: true,
                    },
                    {
                        key: '1005',
                        type: 'Cascader',
                        label: '级联',
                        model: 'cascader',
                        required: true,
                        options: [{
                            value: 'beijing',
                            label: '北京',
                            children: [
                                {
                                    value: 'gugong',
                                    label: '故宫'
                                },
                                {
                                    value: 'tiantan',
                                    label: '天坛'
                                },
                                {
                                    value: 'wangfujing',
                                    label: '王府井'
                                }
                            ]
                        }, {
                            value: 'jiangsu',
                            label: '江苏',
                            children: [
                                {
                                    value: 'nanjing',
                                    label: '南京',
                                    children: [
                                        {
                                            value: 'fuzimiao',
                                            label: '夫子庙',
                                        }
                                    ]
                                },
                                {
                                    value: 'suzhou',
                                    label: '苏州',
                                    children: [
                                        {
                                            value: 'zhuozhengyuan',
                                            label: '拙政园',
                                        },
                                        {
                                            value: 'shizilin',
                                            label: '狮子林',
                                        }
                                    ]
                                }
                            ],
                        }]
                    },
                    {
                        key: '10006',
                        type: 'DatePicker',
                        subType: 'date',
                        label: '日期选择',
                        model: 'date',
                        placeholder: '',
                        required: true,
                    },
                    {
                        key: '100061',
                        type: 'DatePicker',
                        subType: 'daterange',
                        label: '日期区间选择',
                        model: 'daterange',
                        placeholder: '',
                        required: true,
                    },
                    {
                        key: '100062',
                        type: 'DatePicker',
                        subType: 'datetime',
                        label: '日期时间选择',
                        model: 'datetime',
                        placeholder: '',
                        required: true,
                    },
                    {
                        key: '100063',
                        type: 'DatePicker',
                        subType: 'datetimerange',
                        label: '日期时间区间选择',
                        model: 'datetimerange',
                        placeholder: '',
                        required: true,
                    },
                    {
                        key: '10007',
                        type: 'LogicInput',
                        label: '逻辑输入',
                        model: 'logicInput',
                        required: true,
                        enables: ['=', '>', '>=', '<', '<=', 'betweenIn', 'betweenWith', '!=', 'multiple']
                    },
                    {
                        key: '10008',
                        type: 'LogicSelect',
                        label: '逻辑输入',
                        model: 'logicSelect',
                        required: true,
                        enables: ['=', '>', '>=', '<', '<=', 'betweenIn', 'betweenWith', '!=', 'multiple'],
                        options: [
                            {
                                label: '选项一',
                                value: '1'
                            },
                            {
                                label: '选项二',
                                value: '2'
                            },
                            {
                                label: '选项三',
                                value: '3'
                            },
                            {
                                label: '选项四',
                                value: '4'
                            }
                        ]
                    },
                    // {
                    //     key: '10007',
                    //     type: 'LogicTimePicker',
                    //     label: '逻辑时间选择',
                    //     model: 'logic',
                    //     required: true,
                    //     enables: ['=', '>', '>=', '<', '<=', 'between', '!=', 'multiple']
                    // },
                ]
            }
        },
        mounted: function() {

        },
        beforeDestroy: function() {

        },
        methods: {
            submit() {
                this.$refs.FormGenerator
                    .submit();
            }
        }
    }
</script>
<style lang="less" scoped>
    .container {
        padding: 30px
    }
</style>
