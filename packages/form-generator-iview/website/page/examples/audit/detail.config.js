let pageConfig = [
    {
        title: '用户信息',
        sectionKey: 'userInfo',
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
                    width: 300,
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
            ]
        }
    },
    {
        title: '用户图片信息-checkboxCard',
        sectionKey: 'upload',
        table: {
            columns: [
                {
                    title: '项',
                    key: 'label',
                    width: 150,
                    img: true
                },
                {
                    title: '图拍列表',
                    slot: 'imgList',
                    width: 'auto',
                    formFields: [
                        {
                            type: 'List',
                            model: 'value',
                            'cardWidth': '120px',
                            'cardHeight': '90px'
                        }
                    ]
                },
                {
                    title: '操作',
                    slot: 'action',
                    width: 300,
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
            ]
        }
    },
    {
        title: '案件审核结论',
        sectionKey: 'result',
        table: {
            columns: [
                {
                    title: '项',
                    key: 'label',
                    width: 150
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
                            rules: [
                                {
                                    required: true,
                                    message: '请输入最终审核结论'
                                }
                            ],
                        },
                    ]
                }
            ]
        }
    },
];

export const keyToLabel = {
    userInfo: {
        name: '会员姓名',
        ID: '身份证号',
        time: '确诊时间',
        diseaseName: '确诊疾病',
        hospital: '确诊医院'
    },
    upload: {
        idImgs: '身份证'
    },
    result: {
        conclusion: '结论'
    }
};

export const pageData = {
    userInfo: {
        name: '张三',
        ID: '1234567890123',
        time: '2019-11-20',
        diseaseName: '急性心肌梗塞伴',
        hospital: '北京市协和医院'
    },
    upload: {
        idImgs: [
            {
                'id': '22',
                'url': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg',
            },
            {
                'id': '33',
                'url': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg',
            }
        ]
    },
    result: {
        conclusion: 'XXXXXXXXXX'
    }
};


pageConfig = pageConfig.map(sectionConfig => {
    let { sectionKey } = sectionConfig;
    let sectionLabel = keyToLabel[sectionKey];
    let sectionData = pageData[sectionKey];
    sectionConfig.table.data = Object.keys(sectionData).map(key => {
        return {
            key,
            label: sectionLabel[key],
            value: sectionData[key]
        };
    });
    return sectionConfig;
});
export {
    pageConfig
};
