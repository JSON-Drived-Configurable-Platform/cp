export const columns = [
    {
        title: '姓名',
        slot: 'name',
        width: 100,
        formFields: [{
            type: 'Button',
            autoButton: false,
            model: 'name',
            subtype: 'primary',
            size: 'small',
            action: {
                type: 'route'
            }
        }]
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
        title: '省',
        slot: 'province',
        width: 230,
        poptip: {
            title: '编辑地址',
            displayField: {
                type: 'Select',
                api: '/selectApi',
                model: 'province',
                inline: true,
                cache: true,
                disabled: true,
                width: 100,
                size: 'small'
            },
            formFields: [
                {
                    type: 'Select',
                    api: '/selectApi',
                    model: 'province',
                    inline: true,
                    cache: true,
                    width: 100
                },
                {
                    type: 'Button',
                    text: '保存',
                    subtype: 'primary',
                    size: 'small',
                    action: {
                        type: 'ajax',
                        api: '/curdEdit'
                    },
                    apiParams: ['name', 'province'],
                    inline: true
                },
            ]
        }
    },
    {
        title: '城市',
        slot: 'city',
        width: 230,
        formFields: [
            {
                type: 'Select',
                api: '/selectApi',
                transfer: true,
                model: 'city',
                inline: true,
                cache: true,
                width: 100
            },
            {
                type: 'Button',
                text: '保存',
                subtype: 'primary',
                size: 'small',
                action: {
                    type: 'ajax',
                    api: '/curdEdit'
                },
                apiParams: ['name', 'province', 'city'],
                inline: true
            },
        ]
    },
    {
        title: '地址',
        slot: 'address',
        width: 200,
        poptip: {
            title: '编辑地址',
            formFields: [
                {
                    type: 'Input',
                    model: 'address',
                    placeholder: '请输入地址',
                    rules: [
                        {
                            type: 'string',
                            required: true,
                        }
                    ],
                    width: 250,
                    inline: true
                },
                {
                    type: 'Button',
                    text: '保存',
                    subtype: 'primary',
                    size: 'small',
                    action: {
                        type: 'ajax',
                        api: '/curdEdit'
                    },
                    apiParams: ['name', 'address', 'test'],
                    inline: true
                },
            ]
        }
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
                    name: 'editDialog'
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
                    type: 'ajax',
                    api: '/curdToBlack'
                },
                apiParams: ['name', 'status'],
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
                    type: 'ajax',
                    api: '/curdToWhite'
                },
                apiParams: ['name', 'status'],
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
                    type: 'ajax',
                    api: '/curdDelete'
                },
                apiParams: ['name'],
                inline: true
            },
            {
                type: 'Button',
                model: 'detailRoute',
                text: '详情',
                subtype: 'primary',
                size: 'small',
                action: {
                    type: 'route'
                },
                apiParams: ['name'],
                inline: true
            },
        ]
    }
];

export const data = [
    {
        name: {
            name: '王小明',
            path: '/home',
            query: {
                test: 10001
            }
        },
        age: 18,
        gender: '男',
        birthday: '1999-2-21',
        province: 'Beijing',
        city: 'Beijing',
        address: '北京市朝阳区芍药居',
        status: '1',
        detailRoute: {
            path: '/home',
            query: {
                name: '王小明',
            }
        }
    },
    {
        name: {
            name: '张小刚',
            path: '/home',
            query: {
                test: 10002
            }
        },
        age: 25,
        gender: '男',
        birthday: '1992-1-23',
        province: 'Beijing',
        city: 'Beijing',
        address: '北京市海淀区西二旗',
        status: '1',
        detailRoute: {
            path: '/home',
            query: {
                name: '张小刚',
            }
        }
    },
    {
        name: {
            name: '李晓红',
            path: '/home',
            query: {
                test: 10003
            }
        },
        age: 30,
        gender: '女',
        birthday: '1987-11-10',
        province: 'Beijing',
        city: 'Beijing',
        address: '上海市浦东新区世纪大道',
        status: '2',
        detailRoute: {
            path: '/home',
            query: {
                name: '李小红',
            }
        }
    },
    {
        name: {
            name: '周小伟',
            path: '/home',
            query: {
                test: 10004
            }
        },
        age: 26,
        gender: '男',
        birthday: '1991-10-10',
        province: 'Beijing',
        city: 'Beijing',
        address: '深圳市南山区深南大道',
        status: '1',
        detailRoute: {
            path: '/home',
            query: {
                name: '周小伟',
            }
        }
    },
    {
        name: {
            name: '王小明',
            path: '/home',
            query: {
                test: 10005
            }
        },
        age: 18,
        gender: '男',
        birthday: '1999-2-21',
        province: 'Beijing',
        city: 'Beijing',
        address: '北京市朝阳区芍药居',
        status: '1',
        detailRoute: {
            path: '/home',
            query: {
                name: '王小明',
            }
        }
    },
    {
        name: {
            name: '张小刚',
            path: '/home',
            query: {
                test: 10005
            }
        },
        age: 25,
        gender: '男',
        birthday: '1992-1-23',
        province: 'Beijing',
        city: 'Beijing',
        address: '北京市海淀区西二旗',
        status: '1',
        detailRoute: {
            path: '/home',
            query: {
                name: '张小刚',
            }
        }
    },
    {
        name: {
            name: '李小红',
            path: '/home',
            query: {
                test: 10005
            }
        },
        age: 30,
        gender: '女',
        birthday: '1987-11-10',
        province: 'Beijing',
        city: 'Beijing',
        address: '上海市浦东新区世纪大道',
        status: '2',
        detailRoute: {
            path: '/home',
            query: {
                name: '李小红',
            }
        }
    },
    {
        name: {
            name: '周晓伟',
            path: '/home',
            query: {
                test: 10005
            }
        },
        age: 26,
        gender: '男',
        birthday: '1991-10-10',
        province: 'Beijing',
        city: 'Beijing',
        address: '深圳市南山区深南大道',
        status: '1',
        detailRoute: {
            path: '/home',
            query: {
                name: '周小伟',
            }
        }
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
        type: 'CheckboxCard',
        model: 'card',
        checkAll: true,
        pageLation: true, // 是否分页
        pageSize: 3, // 分页数目
        'headerEditable': true,
        'footerEditable': true,
        'cardWidth': '220px',
        'cardHeight': '245px',
        'optionsType': 'image',
        'options': '/checkboxCardApi',
        required: true
    },
    {
        type: 'Submit',
        text: '保存',
        subtype: 'primary',
        size: 'small',
        action: {
            type: 'ajax',
            api: '/curdEdit'
        },
        inline: true,
        apiParams: 'all'
    },
];
