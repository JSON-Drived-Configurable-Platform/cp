export const columns = [
    {
        title: '姓名',
        key: 'name',
        width: 150
    },
    {
        title: '年龄',
        slot: 'age',
        width: 90,
        poptip: {
            title: '年龄',
            'formFields': [
                {
                    'type': 'Input',
                    'model': 'age'
                },
                {
                    type: 'Submit',
                    text: '保存',
                    subtype: 'primary',
                    size: 'small',
                    action: {
                        type: 'ajax',
                        api: '/checkboxApi',
                        successed: 'updateData'
                    },
                    inline: true
                }
            ]
        }
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
        title: '图片',
        slot: 'city',
        width: 150,
        formFields: [
            {
                type: 'Carousel',
                model: 'city',
                valueAsOptions: true,
            }
        ]
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
        status: '1',
        city: [
            {
                url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg'
            }
        ]
    },
    {
        name: '张小刚',
        age: 25,
        gender: '男',
        birthday: '1992-1-23',
        address: '北京市海淀区西二旗',
        status: '1',
        city: [
            {
                value: 'beijing',
                label: '北京',
                url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg'
            }
        ]
    },
    {
        name: '李小红',
        age: 30,
        gender: '女',
        birthday: '1987-11-10',
        address: '上海市浦东新区世纪大道',
        status: '2',
        city: [
            {
                value: 'beijing',
                label: '北京',
                url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg'
            },
            {
                value: 'shanghai',
                label: '上海',
                url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg'
            }
        ]
    },
    {
        name: '周小伟',
        age: 26,
        gender: '男',
        birthday: '1991-10-10',
        address: '深圳市南山区深南大道',
        status: '1',
        city: [
            {
                value: 'beijing',
                label: '北京',
                url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg'
            },
            {
                value: 'shanghai',
                label: '上海',
                url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg'
            }
        ]
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
