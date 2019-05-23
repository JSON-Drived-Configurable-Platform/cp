export const fields = [
    {
        key: '1000',
        type: 'Input',
        label: '输入框',
        model: 'name',
        placeholder: '请输入用户名',
        required: true,
        defaultHide: false
    },
    {
        key: '10001',
        type: 'Input',
        label: '用户名-禁用',
        model: 'name-forbidden',
        readonly: true,
        disabled: true,
        placeholder: '请输入用户名',
        defaultHide: false
    },
    {
        key: '10002',
        type: 'Input',
        subType: 'textarea',
        label: '输入框',
        model: 'name-textarea',
        placeholder: '请输入用户名',
        required: true,
        defaultHide: false
    },
    {
        key: '100021',
        type: 'InputNumber',
        label: '数字多行输入框',
        model: 'inputNumber',
        placeholder: '',
        required: true,
        defaultHide: true
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
        ],
        defaultHide: true
    },
    {
        key: '100211',
        type: 'Select',
        label: '单选下拉可搜索',
        model: 'singleSelectApi',
        required: true,
        api: '/selectApi',
        apiParams: ['radio'],
        defaultHide: true
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
        defaultHide: true
    },
    {
        key: '10023',
        type: 'Select',
        multiple: true,
        label: '多选下拉支持搜索',
        api: '/selectApi',
        apiParams: ['radio'],
        model: 'multiSelectApi',
        defaultHide: true
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
        defaultHide: true
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
        defaultHide: true
    },
    {
        key: '1005',
        type: 'Cascader',
        label: '省/城市/景点',
        model: 'cascader',
        required: true,
        changeType: 'all',
        // changeType: 'step',
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
                            children: [
                                {
                                    value: '1',
                                    label: '选项一',
                                },
                                {
                                    value: '2',
                                    label: '选项2',
                                }
                            ]
                        }
                    ]
                }
            ],
        }],
        defaultHide: true
    },
    {
        key: '1005',
        type: 'Cascader',
        label: '省/城市/景点-api',
        model: 'cascaderApi',
        required: true,
        api: '/cascaderApi',
        apiParams: ['radio'],
        defaultHide: true,
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
        }],

    },
    {
        key: '10006',
        type: 'DatePicker',
        subType: 'date',
        label: '日期选择',
        model: 'date',
        placeholder: '',
        required: true,
        defaultHide: true
    },
    {
        key: '100061',
        type: 'DatePicker',
        subType: 'daterange',
        label: '日期区间选择',
        model: 'daterange',
        placeholder: '',
        required: true,
        defaultHide: true
    },
    {
        key: '100062',
        type: 'DatePicker',
        subType: 'datetime',
        label: '日期时间选择',
        model: 'datetime',
        placeholder: '',
        required: true,
        defaultHide: true
    },
    {
        key: '100063',
        type: 'DatePicker',
        subType: 'datetimerange',
        label: '日期时间区间选择',
        model: 'datetimerange',
        placeholder: '',
        required: true,
        defaultHide: true
    },
    {
        key: '10007',
        type: 'LogicInput',
        label: '逻辑输入',
        model: 'logicInput',
        required: true,
        enables: ['=', '>', '>=', '<', '<=', 'betweenIn', 'betweenWith', '!=', 'multiple'],
        defaultHide: true
    },
    {
        key: '10008',
        type: 'LogicSelect',
        label: '逻辑选择',
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
        ],
        defaultHide: true
    },
    {

        key: '100081',
        type: 'LogicSelect',
        label: '逻辑选择Api',
        model: 'logicSelectApi',
        required: true,
        enables: ['=', '>', '>=', '<', '<=', 'betweenIn', 'betweenWith', '!=', 'multiple'],
        api: '/selectApi',
        apiParams: ['radio'],
        defaultHide: true
    }
];


export const model = {
    name: 'wangbing',
    'name-forbidden': 'wangbing',
    'name-textarea': '啊啊啊啊啊',
    singleSelect: '1',
    singleSelectApi: '1',
    multiSelect: ['1', '2'],
    multiSelectApi: ['1', '2'],
    checkbox: ['1', '2'],
    radio: '1',
    date: '2016-01-01',
    daterange: ['2016-01-01', '2016-02-15'],
    datetime: '2019-04-22 00:00:00',
    datetimerange: ['2019-04-22 00:00:00', '2019-05-30 00:00:00'],
    cascader: ['jiangsu', 'suzhou', 'shizilin', '1'],
    cascaderApi: ['jiangsu', 'suzhou', 'shizilin', '2'],
    inputNumber: 7,
    logicInput: {
        logic: 'betweenIn',
        value: ['1', '2']
    },
    logicSelect: {
        logic: 'betweenIn',
        value: ['1', '2']
    },
    logicSelectApi: {
        logic: 'betweenIn',
        value: ['1', '2']
    }
};

export const options = {
    labelWidth: 100,
    inline: true,
    itemWidth: '400',
    title: '测试表单',
    // extraType: 'bottom',
    tip: {
        title: '规则',
        content: '规则内容',
    },
    apiBase: ''
};


export const config = {
    fields: fields.map(item => {
        item.defaultValue = model[item.model];
        return item;
    }),
    options
};
