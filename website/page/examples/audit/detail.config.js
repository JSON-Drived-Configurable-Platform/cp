export const pageConfig = [
    {
        title: '用户信息',
        table: {
            columns: [
                {
                    title: '项',
                    key: 'label',
                    width: 150
                },
                {
                    title: '值',
                    key: 'value',
                    width: 'auto',
                },
                {
                    title: '操作',
                    slot: 'action',
                    width: 'auto',
                    formFields: [
                        {
                            type: 'Radio',
                            model: 'auditStatus',
                            options: [
                                {
                                    label: '通过',
                                    value: '1'
                                },
                                {
                                    label: '驳回',
                                    value: '2'
                                },
                                {
                                    label: '不通过',
                                    value: '3'
                                }
                            ],
                            rules: [
                                {
                                    required: true,
                                    message: '请选择审核结论'
                                }
                            ]
                        },
                        {
                            type: 'Select',
                            model: 'reason',
                            placeholder: '请选择原因',
                            options: [
                                {
                                    label: '特定原因一',
                                    value: '1'
                                },
                                {
                                    label: '特定原因二',
                                    value: '2'
                                },
                                {
                                    label: '自定义原因三',
                                    value: '3'
                                }
                            ],
                            rules: [
                                {
                                    required: true,
                                    message: '请选择原因'
                                }
                            ],
                            showOn: {
                                auditStatus: [
                                    {
                                        type: 'enum',
                                        enum: ['2', '3']
                                    },
                                    {
                                        required: true
                                    }
                                ]
                            }
                        },
                        {
                            type: 'Input',
                            subtype: 'textarea',
                            model: 'reasonDesc',
                            placeholder: '请输入原因',
                            rules: [
                                {
                                    required: true,
                                    message: '请输入原因'
                                }
                            ],
                            showOn: {
                                reason: [
                                    {
                                        type: 'enum',
                                        enum: ['3']
                                    },
                                    {
                                        required: true
                                    }
                                ],
                                auditStatus: [
                                    {
                                        type: 'enum',
                                        enum: ['2', '3']
                                    },
                                    {
                                        required: true
                                    }
                                ]
                            }
                        },
                    ]
                }
            ],
            data: [
                {
                    key: 'name',
                    label: '会员姓名',
                    value: '张三',
                    auditStatus: '',
                    reason: '',
                    reasonDesc: ''
                },
                {
                    key: 'ID',
                    label: '身份证号',
                    value: '1234567890123',
                    auditStatus: '',
                    reason: '',
                    reasonDesc: ''
                },
                {
                    key: 'time',
                    label: '确诊时间',
                    value: '2019-11-20',
                    auditStatus: '',
                    reason: '',
                    reasonDesc: ''
                },
                {
                    key: 'diseaseName',
                    label: '确诊疾病',
                    value: '急性心肌梗塞伴',
                    auditStatus: '',
                    reason: '',
                    reasonDesc: ''
                },
                {
                    key: 'hospital',
                    label: '确诊医院',
                    value: '北京市协和医院',
                    auditStatus: '',
                    reason: '',
                    reasonDesc: ''
                }
            ]
        }
    },
    {
        title: '案件描述',
        table: {
            columns: [
                {
                    title: '项',
                    key: 'caseDesc',
                    width: 'auto'
                },
                {
                    title: '操作',
                    slot: 'action',
                    width: 'auto',
                    formFields: [
                        {
                            type: 'Radio',
                            model: 'auditStatus',
                            options: [
                                {
                                    label: '通过',
                                    value: '1'
                                },
                                {
                                    label: '驳回',
                                    value: '2'
                                },
                                {
                                    label: '不通过',
                                    value: '3'
                                }
                            ],
                            required: true
                        },
                        {
                            type: 'Select',
                            model: 'reason',
                            required: true,
                            placeholder: '请选择原因',
                            options: [
                                {
                                    label: '特定原因一',
                                    value: '1'
                                },
                                {
                                    label: '特定原因二',
                                    value: '2'
                                },
                                {
                                    label: '自定义原因三',
                                    value: '3'
                                }
                            ],
                            showOn: {
                                auditStatus: [
                                    {
                                        type: 'enum',
                                        enum: ['2', '3']
                                    },
                                    {
                                        required: true
                                    }
                                ]
                            }
                        },
                        {
                            type: 'Input',
                            subtype: 'textarea',
                            model: 'reasonDesc',
                            placeholder: '请输入原因',
                            required: true,
                            showOn: {
                                reason: [
                                    {
                                        type: 'enum',
                                        enum: ['3']
                                    },
                                    {
                                        required: true
                                    }
                                ],
                                auditStatus: [
                                    {
                                        type: 'enum',
                                        enum: ['2', '3']
                                    },
                                    {
                                        required: true
                                    }
                                ]
                            }
                        },
                    ]
                }
            ],
            data: [
                {
                    key: 'caseDesc',
                    caseDesc: '2016年10月20日，张三XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                    auditStatus: '',
                    reason: '',
                    reasonDesc: ''
                }
            ]
        }
    },
    {
        title: '用户图片信息',
        table: {
            columns: [
                {
                    title: '项',
                    key: 'label',
                    width: 'auto'
                },
                {
                    title: '值一',
                    key: 'value1',
                    width: 'auto'
                },
                {
                    title: '值二',
                    key: 'value2',
                    width: 'auto'
                },
                {
                    title: '值三',
                    key: 'value3',
                    width: 'auto'
                },
                {
                    title: '值四',
                    key: 'value4',
                    width: 'auto'
                },
                {
                    title: '操作',
                    slot: 'action',
                    width: 250,
                    formFields: [
                        {
                            type: 'Radio',
                            model: 'auditStatus',
                            options: [
                                {
                                    label: '通过',
                                    value: '1'
                                },
                                {
                                    label: '驳回',
                                    value: '2'
                                },
                                {
                                    label: '不通过',
                                    value: '3'
                                }
                            ],
                            required: true
                        },
                        {
                            type: 'Select',
                            model: 'reason',
                            required: true,
                            placeholder: '请选择原因',
                            options: [
                                {
                                    label: '特定原因一',
                                    value: '1'
                                },
                                {
                                    label: '特定原因二',
                                    value: '2'
                                },
                                {
                                    label: '自定义原因三',
                                    value: '3'
                                }
                            ],
                            showOn: {
                                auditStatus: [
                                    {
                                        type: 'enum',
                                        enum: ['2', '3']
                                    },
                                    {
                                        required: true
                                    }
                                ]
                            }
                        },
                        {
                            type: 'Input',
                            subtype: 'textarea',
                            model: 'reasonDesc',
                            placeholder: '请输入原因',
                            required: true,
                            showOn: {
                                reason: [
                                    {
                                        type: 'enum',
                                        enum: ['3']
                                    },
                                    {
                                        required: true
                                    }
                                ],
                                auditStatus: [
                                    {
                                        type: 'enum',
                                        enum: ['2', '3']
                                    },
                                    {
                                        required: true
                                    }
                                ]
                            }
                        },
                    ]
                }
            ],
            data: [
                {
                    key: 'idImg',
                    label: '身份证',
                    value1: '正面照片',
                    value2: '正面照片',
                    value3: '',
                    value4: '',
                    auditStatus: '',
                    reason: '',
                    reasonDesc: ''
                },
                {
                    key: 'idImg1',
                    label: '身份证',
                    value1: '正面照片',
                    value2: '正面照片',
                    value3: '',
                    value4: '',
                    auditStatus: '',
                    reason: '',
                    reasonDesc: ''
                },
                {
                    key: 'idImg2',
                    label: '身份证',
                    value1: '正面照片',
                    value2: '正面照片',
                    value3: '正面照片',
                    value4: '正面照片',
                    auditStatus: '',
                    reason: '',
                    reasonDesc: ''
                }
            ]
        }
    },
    {
        title: '案件审核结论',
        table: {
            columns: [
                {
                    title: '项',
                    key: 'label',
                    width: 'auto'
                },
                {
                    title: '值',
                    key: 'value',
                    width: 'auto'
                },
                {
                    title: '操作',
                    slot: 'action',
                    width: 'auto',
                    formFields: [
                        {
                            type: 'Radio',
                            model: 'auditStatus',
                            options: [
                                {
                                    label: '通过',
                                    value: '1'
                                },
                                {
                                    label: '驳回',
                                    value: '2'
                                },
                                {
                                    label: '不通过',
                                    value: '3'
                                }
                            ],
                            required: true
                        },
                        {
                            type: 'Select',
                            model: 'reason',
                            required: true,
                            placeholder: '请选择原因',
                            options: [
                                {
                                    label: '特定原因一',
                                    value: '1'
                                },
                                {
                                    label: '特定原因二',
                                    value: '2'
                                },
                                {
                                    label: '自定义原因三',
                                    value: '3'
                                }
                            ],
                            showOn: {
                                auditStatus: [
                                    {
                                        type: 'enum',
                                        enum: ['2', '3']
                                    },
                                    {
                                        required: true
                                    }
                                ]
                            }
                        },
                        {
                            type: 'Input',
                            subtype: 'textarea',
                            model: 'reasonDesc',
                            placeholder: '请输入原因',
                            required: true,
                            showOn: {
                                reason: [
                                    {
                                        type: 'enum',
                                        enum: ['3']
                                    },
                                    {
                                        required: true
                                    }
                                ],
                                auditStatus: [
                                    {
                                        type: 'enum',
                                        enum: ['2', '3']
                                    },
                                    {
                                        required: true
                                    }
                                ]
                            }
                        },
                    ]
                }
            ],
            data: [
                {
                    key: 'conclusion',
                    label: '结论',
                    value: '选择「通过」后转到下个审核流程，选择「不通过」后转到终审员，选择「驳回」后转到用户侧补交材料',
                    reasonDesc: ''
                }
            ]
        }
    },
    {
        table: {
            columns: [
                {
                    title: '项',
                    key: 'label',
                    width: 100
                },
                {
                    title: '操作',
                    slot: 'action',
                    width: 'auto',
                    formFields: [
                        {
                            type: 'Input',
                            subtype: 'textarea',
                            model: 'finalResult',
                            placeholder: '请输入最终审核结论',
                            required: true
                        },
                    ]
                }
            ],
            data: [
                {
                    key: 'final_conclusion',
                    label: '最终结论',
                    finalResult: ''
                }
            ]
        }
    },
];
