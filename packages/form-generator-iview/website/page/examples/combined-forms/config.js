export default [
    {
        title: 'Tab表单配置',
        type: 'Normal',
        forms: [
            {
                title: '基本信息',
                fields: [
                    {
                        label: 'Tab表单开启项',
                        type: 'Checkbox',
                        model: 'tabShowItems',
                        options: [
                            {
                                label: '项目一',
                                'value': '1'
                            },
                            {
                                label: '项目二',
                                'value': '2'
                            },
                            {
                                label: '项目三',
                                'value': '3'
                            }
                        ],
                        required: true
                    },
                ]
            },
        ]
    },
    {
        type: 'Tab',
        typeOptions: {
            type: 'line',
            size: 'small',
            animated: false
        },
        forms: [
            {
                title: '项目一',
                showOn: {
                    tabShowItems: [
                        {
                            type: 'array',
                            required: true
                        },
                        {
                            validator(rule, value){
                                return Array.isArray(value) && value.includes('1');
                            }
                        }
                    ]
                },
                fields: [
                    {
                        type: 'Input',
                        label: '任务名称',
                        model: 'tab-taskName',
                        placeholder: '请输入任务名称',
                        rules: [
                            {
                                type: 'string',
                                required: true,
                                pattern: '^[\\u4e00-\\u9fa5]+$',
                                message: '请输入中文姓名'
                            }
                        ]
                    },
                    {
                        label: '客户端',
                        type: 'Checkbox',
                        model: 'tab-showClient',
                        options: [
                            {
                                label: '好看',
                                'value': '1'
                            },
                            {
                                label: '手百lite',
                                'value': '2'
                            },
                            {
                                label: '百度地图',
                                'value': '3'
                            }
                        ],
                        required: true
                    },
                    {
                        type: 'Select',
                        label: '任务方',
                        model: 'tab-relationTask',
                        placeholder: '请输入性别',
                        required: true,
                        options: [
                            {
                                label: '任务1',
                                'value': '1'
                            },
                            {
                                label: '任务2',
                                'value': '2'
                            },
                            {
                                label: '任务3',
                                'value': '3'
                            }
                        ]
                    },
                    {
                        type: 'Submit',
                        subtype: 'primary',
                        'text': '保存',
                        'width': 100,
                        'inline': true
                    }
                ]
            },
            {
                title: '项目二',
                showOn: {
                    tabShowItems: [
                        {
                            type: 'array',
                            required: true
                        },
                        {
                            validator(rule, value){
                                return Array.isArray(value) && value.includes('2');
                            }
                        }
                    ]
                },
                fields: [
                    {
                        type: 'Input',
                        label: '任务标题',
                        model: 'tab-taskHead',
                        placeholder: '请输入任务标题',
                        required: true,
                        max: 150,
                        min: 0
                    },
                    {
                        type: 'Input',
                        label: '任务说明',
                        model: 'tab-taskExplain',
                        placeholder: '请输入任务说明',
                        required: true,
                        max: 150,
                        min: 0
                    },
                    {
                        type: 'Input',
                        label: '任务信息',
                        model: 'tab-taskToolTips',
                        placeholder: '请输入任务提示信息',
                        required: true,
                        max: 150,
                        min: 0
                    },
                    {
                        type: 'Submit',
                        subtype: 'primary',
                        'text': '保存',
                        'width': 100,
                        'inline': true
                    }
                ]
            },
            {
                title: '项目三',
                showOn: {
                    tabShowItems: [
                        {
                            type: 'array',
                            required: true
                        },
                        {
                            validator(rule, value){
                                return Array.isArray(value) && value.includes('3');
                            }
                        }
                    ]
                },
                fields: [
                    {
                        type: 'Input',
                        label: '任务周期',
                        model: 'tab-taskCycle',
                        placeholder: '请输入任务周期',
                        required: true,
                        max: 150,
                        min: 0
                    },
                    {
                        type: 'Input',
                        label: '任务次数',
                        model: 'tab-taskNumber',
                        placeholder: '请输入任务次数',
                        required: true,
                        max: 150,
                        min: 0
                    },
                    {
                        type: 'Submit',
                        subtype: 'primary',
                        'text': '保存',
                        'width': 100,
                        'inline': true
                    }
                ]
            }
        ]
    },
    {
        title: '分步表单配置',
        type: 'Normal',
        forms: [
            {
                title: '基本信息',
                fields: [
                    {
                        label: '分步表单开启项',
                        type: 'Checkbox',
                        model: 'takeoverShowItems',
                        options: [
                            {
                                label: '第一步',
                                'value': '1'
                            },
                            {
                                label: '第二步',
                                'value': '2'
                            },
                            {
                                label: '第三步',
                                'value': '3'
                            }
                        ],
                        required: true
                    }
                ]
            },
        ]
    },
    {
        type: 'TakeOver',
        forms: [
            {
                title: '第一步',
                content: '良好的开端是成功的一半',
                showOn: {
                    takeoverShowItems: [
                        {
                            type: 'array',
                            required: true
                        },
                        {
                            validator(rule, value){
                                return Array.isArray(value) && value.includes('1');
                            }
                        }
                    ]
                },
                fields: [
                    {
                        type: 'Input',
                        label: '任务名称',
                        model: 'takeover-taskName',
                        placeholder: '请输入任务名称',
                        rules: [
                            {
                                type: 'string',
                                required: true,
                                pattern: '^[\\u4e00-\\u9fa5]+$',
                                message: '请输入中文姓名'
                            }
                        ]
                    },
                    {
                        label: '客户端',
                        type: 'Checkbox',
                        model: 'takeover-showClient',
                        options: [
                            {
                                label: '好看',
                                'value': '1'
                            },
                            {
                                label: '手百lite',
                                'value': '2'
                            },
                            {
                                label: '百度地图',
                                'value': '3'
                            }
                        ],
                        required: true
                    },
                    {
                        type: 'Select',
                        label: '任务方',
                        model: 'takeover-relationTask',
                        placeholder: '请输入性别',
                        required: true,
                        options: [
                            {
                                label: '任务1',
                                'value': '1'
                            },
                            {
                                label: '任务2',
                                'value': '2'
                            },
                            {
                                label: '任务3',
                                'value': '3'
                            }
                        ]
                    },
                    {
                        type: 'Submit',
                        subtype: 'primary',
                        'text': '下一步',
                        'width': 100,
                        'inline': true
                    }
                ]
            },
            {
                title: '第二步',
                content: '第二步是解决问题的关键',
                showOn: {
                    takeoverShowItems: [
                        {
                            type: 'array',
                            required: true
                        },
                        {
                            validator(rule, value){
                                return Array.isArray(value) && value.includes('2');
                            }
                        }
                    ]
                },
                fields: [
                    {
                        type: 'Input',
                        label: '任务标题',
                        model: 'takeover-taskHead',
                        placeholder: '请输入任务标题',
                        required: true,
                        max: 150,
                        min: 0
                    },
                    {
                        type: 'Input',
                        label: '任务说明',
                        model: 'takeover-taskExplain',
                        placeholder: '请输入任务说明',
                        required: true,
                        max: 150,
                        min: 0
                    },
                    {
                        type: 'Input',
                        label: '任务信息',
                        model: 'takeover-taskToolTips',
                        placeholder: '请输入任务提示信息',
                        required: true,
                        max: 150,
                        min: 0
                    },
                    {
                        type: 'Button',
                        'text': '上一步',
                        subtype: 'primary',
                        'action': {
                            type: 'event',
                            'name': 'prev'
                        },
                        'inline': true
                    },
                    {
                        type: 'Submit',
                        subtype: 'primary',
                        'text': '下一步',
                        'width': 100,
                        'inline': true
                    }
                ]
            },
            {
                title: '第三步',
                content: '最后一步了，加油',
                showOn: {
                    takeoverShowItems: [
                        {
                            type: 'array',
                            required: true
                        },
                        {
                            validator(rule, value){
                                return Array.isArray(value) && value.includes('3');
                            }
                        }
                    ]
                },
                fields: [
                    {
                        type: 'Input',
                        label: '任务周期',
                        model: 'takeover-taskCycle',
                        placeholder: '请输入任务周期',
                        required: true,
                        max: 150,
                        min: 0
                    },
                    {
                        type: 'Input',
                        label: '任务次数',
                        model: 'takeover-taskNumber',
                        placeholder: '请输入任务次数',
                        required: true,
                        max: 150,
                        min: 0
                    },
                    {
                        type: 'Button',
                        'text': '上一步',
                        subtype: 'primary',
                        'action': {
                            type: 'event',
                            'name': 'prev'
                        },
                        'inline': true
                    },
                    {
                        type: 'Submit',
                        subtype: 'primary',
                        'text': '提交',
                        'labelWidth': 0,
                        'width': 100,
                        'inline': true
                    }
                ]
            }
        ]
    },
    {
        title: '导航表单配置',
        type: 'Normal',
        forms: [
            {
                title: '基本信息',
                fields: [
                    {
                        type: 'Select',
                        label: '导航表单开启项',
                        model: 'wizardShowItems',
                        multiple: true,
                        placeholder: '请输入性别',
                        required: true,
                        options: [
                            {
                                label: '基本信息',
                                'value': '1'
                            },
                            {
                                label: '任务信息',
                                'value': '2'
                            },
                            {
                                label: '时间次数',
                                'value': '3'
                            }
                        ]
                    }
                ]
            },
        ]
    },
    {
        type: 'Wizard',
        forms: [
            {
                title: '基本信息',
                content: '良好的开端是成功的一半',
                showOn: {
                    wizardShowItems: [
                        {
                            type: 'array',
                            required: true
                        },
                        {
                            validator(rule, value){
                                return Array.isArray(value) && value.includes('1');
                            }
                        }
                    ]
                },
                fields: [
                    {
                        type: 'Input',
                        label: '任务名称',
                        model: 'wizard-taskName',
                        placeholder: '请输入任务名称',
                        rules: [
                            {
                                type: 'string',
                                required: true,
                                pattern: '^[\\u4e00-\\u9fa5]+$',
                                message: '请输入中文姓名'
                            }
                        ]
                    },
                    {
                        label: '客户端',
                        type: 'Checkbox',
                        model: 'wizard-showClient',
                        options: [
                            {
                                label: '好看',
                                'value': '1'
                            },
                            {
                                label: '手百lite',
                                'value': '2'
                            },
                            {
                                label: '百度地图',
                                'value': '3'
                            }
                        ],
                        required: true
                    },
                    {
                        type: 'Select',
                        label: '任务方',
                        model: 'wizard-relationTask',
                        placeholder: '请输入性别',
                        required: true,
                        options: [
                            {
                                label: '任务1',
                                'value': '1'
                            },
                            {
                                label: '任务2',
                                'value': '2'
                            },
                            {
                                label: '任务3',
                                'value': '3'
                            }
                        ]
                    },
                    {
                        type: 'Submit',
                        subtype: 'primary',
                        'text': '保存',
                        'width': 100,
                        'inline': true
                    }
                ]
            },
            {
                title: '任务信息',
                content: '第二步是解决问题的关键',
                showOn: {
                    wizardShowItems: [
                        {
                            type: 'array',
                            required: true
                        },
                        {
                            validator(rule, value){
                                return Array.isArray(value) && value.includes('2');
                            }
                        }
                    ]
                },
                fields: [
                    {
                        type: 'Input',
                        label: '任务标题',
                        model: 'wizard-taskHead',
                        placeholder: '请输入任务标题',
                        required: true,
                        max: 150,
                        min: 0
                    },
                    {
                        type: 'Input',
                        label: '任务说明',
                        model: 'wizard-taskExplain',
                        placeholder: '请输入任务说明',
                        required: true,
                        max: 150,
                        min: 0
                    },
                    {
                        type: 'Input',
                        label: '任务信息',
                        model: 'wizard-taskToolTips',
                        placeholder: '请输入任务提示信息',
                        required: true,
                        max: 150,
                        min: 0
                    },
                    {
                        type: 'Submit',
                        subtype: 'primary',
                        'text': '保存',
                        'width': 100,
                        'inline': true
                    }
                ]
            },
            {
                title: '时间次数',
                content: '最后一步了，加油',
                showOn: {
                    wizardShowItems: [
                        {
                            type: 'array',
                            required: true
                        },
                        {
                            validator(rule, value){
                                return Array.isArray(value) && value.includes('3');
                            }
                        }
                    ]
                },
                fields: [
                    {
                        type: 'Input',
                        label: '任务周期',
                        model: 'wizard-taskCycle',
                        placeholder: '请输入任务周期',
                        required: true,
                        max: 150,
                        min: 0
                    },
                    {
                        type: 'Input',
                        label: '任务次数',
                        model: 'wizard-taskNumber',
                        placeholder: '请输入任务次数',
                        required: true,
                        max: 150,
                        min: 0
                    },
                    {
                        type: 'Submit',
                        subtype: 'primary',
                        'text': '保存',
                        'width': 100,
                        'inline': true
                    }
                ]
            }
        ]
    }
];
