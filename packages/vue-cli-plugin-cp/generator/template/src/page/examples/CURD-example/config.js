export const columns = [
    {
        title: '姓名',
        key: 'name',
        width: 150
    },
    {
        title: '年龄',
        key: 'age',
        width: 90
    },
    {
        title: '性别',
        key: 'gender',
        width: 90
    },
    {
        title: '出生日期',
        key: 'birthday',
        width: 150
    },
    {
        title: '地址',
        key: 'address'
    },
    {
        title: '用户状态',
        width: 100,
        slot: 'status',
        formFields: [
            {
                type: 'Tag',
                model: 'status',
                options: [
                    {
                        name: '正常',
                        value: '1',
                        color: 'primary'
                    },
                    {
                        name: '黑用户',
                        value: '2',
                        color: 'error'
                    }
                ]
            },
        ]
    },
    {
        title: '操作',
        slot: 'action',
        width: 300,
        formFields: [
            {
                type: 'Button',
                text: '编辑',
                subtype: 'primary',
                size: 'small',
                action: {
                    type: 'event',
                    name: 'edit'
                },
                inline: true
            },
            {
                type: 'Button',
                text: '判黑',
                subtype: 'primary',
                size: 'small',
                confirmPoptip: {
                    title: '确认判黑?',
                    placement: 'left'
                },
                action: {
                    type: 'event',
                    name: 'black'
                },
                inline: true,
                hiddenOn: {
                    status: [
                        {
                            type: 'enum',
                            enum: ['2']
                        }
                    ]
                }
            },
            {
                type: 'Button',
                text: '洗白',
                subtype: 'primary',
                size: 'small',
                confirmPoptip: {
                    title: '确定洗白?',
                    placement: 'left'
                },
                action: {
                    type: 'event',
                    name: 'white'
                },
                inline: true,
                hiddenOn: {
                    status: [
                        {
                            type: 'enum',
                            enum: ['1']
                        }
                    ]
                }
            },
            {
                type: 'Button',
                text: '删除',
                subtype: 'error',
                size: 'small',
                confirmPoptip: {
                    title: '确定删除?',
                    placement: 'left'
                },
                action: {
                    type: 'event',
                    name: 'delete'
                },
                inline: true
            },
        ]
    }
];

export const data = [
    {
        name: '王小明',
        age: 18,
        gender: '男',
        birthday: '1999-2-21',
        address: '北京市朝阳区芍药居',
        status: '1'
    },
    {
        name: '张小刚',
        age: 25,
        gender: '男',
        birthday: '1992-1-23',
        address: '北京市海淀区西二旗',
        status: '1'
    },
    {
        name: '李小红',
        age: 30,
        gender: '女',
        birthday: '1987-11-10',
        address: '上海市浦东新区世纪大道',
        status: '2'
    },
    {
        name: '周小伟',
        age: 26,
        gender: '男',
        birthday: '1991-10-10',
        address: '深圳市南山区深南大道',
        status: '1'
    }
];


export const editFormFields = [
    {
        type: 'Input',
        label: '姓名',
        model: 'name',
        placeholder: '请输入姓名',
        rules: [
            {
                type: 'string',
                required: true,
                pattern:  /^[\u4e00-\u9fa5]+$/,
                message: '请输入中文姓名'
            }
        ]
    },
    {
        type: 'InputNumber',
        label: '年龄',
        model: 'age',
        placeholder: '请输入年龄',
        required: true,
        max: 150,
        min: 0
    },
    {
        type: 'Select',
        label: '性别',
        model: 'gender',
        placeholder: '请输入性别',
        required: true,
        options: [
            {
                label: '男',
                value: '男'
            },
            {
                label: '女',
                value: '女'
            },
            {
                label: '保密',
                value: '保密'
            }
        ]
    },
    {
        type: 'DatePicker',
        label: '日期',
        subtype: 'date',
        model: 'birthday',
        placeholder: '请输入出生日期',
        required: true
    },
    {
        type: 'Input',
        label: '地址',
        model: 'address',
        placeholder: '请输入地址',
        required: true
    },
    {
        type: 'Submit',
        subtype: 'primary',
        text: '保存'
    }
];
