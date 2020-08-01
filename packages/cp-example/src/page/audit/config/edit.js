const pageConfig = {
  pageMark: 'reCheck',
  showButton: true,
  pageDataRequestInfo: {
    api: '/api/audit/edit/data',
    method: 'get',
    apiParams: ['all']
  },
  submitRequestInfo: {
    api: '/api/audit/edit/submit',
    method: 'get'
  },
  pageGoBackUrl: '',
  // 表单验证通过后的行为
  formVaildAction: 'showDialog',
  tableList: [
    {
      title: '用户上传信息',
      type: 'table',
      sectionKey: 'baseInfo',
      needClearData: true,
      changeFormStyle: true,
      showTableHeader: false,
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
                    label: '此部分信息填写有误，请重新填写',
                    value: '此部分信息填写有误，请重新填写'
                  },
                  {
                    label: '此部分信息填写不完整，请重新填写',
                    value: '此部分信息填写不完整，请重新填写'
                  },
                  {
                    label: '此部分信息填写与所上传图片不符，请重新填写',
                    value: '此部分信息填写与所上传图片不符，请重新填写'
                  },
                  {
                    label: '其他原因，手动输入',
                    value: '4'
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
                      enum: ['2']
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
                      enum: ['4']
                    },
                    {
                      required: true
                    }
                  ]
                }
              }
            ]
          }
        ]
      }
    },
    {
      title: '用户案件描述',
      type: 'table',
      sectionKey: 'caseDes',
      needClearData: true,
      changeFormStyle: false,
      showTableHeader: false,
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
                    label: '此部分信息填写有误，请重新填写',
                    value: '此部分信息填写有误，请重新填写'
                  },
                  {
                    label: '此部分信息填写不完整，请重新填写',
                    value: '此部分信息填写不完整，请重新填写'
                  },
                  {
                    label: '此部分信息填写与所上传图片不符，请重新填写',
                    value: '此部分信息填写与所上传图片不符，请重新填写'
                  },
                  {
                    label: '其他原因，手动输入',
                    value: '4'
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
                      enum: ['2']
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
                      enum: ['4']
                    },
                    {
                      required: true
                    }
                  ]
                }
              }
            ]
          }
        ]
      }
    },
    {
      title: '用户更多信息',
      type: 'table',
      sectionKey: 'moreInfo',
      needClearData: true,
      changeFormStyle: false,
      showTableHeader: false,
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
            width: 'auto'
          }
        ]
      }
    },
    {
      title: '用户图片信息',
      type: 'table',
      sectionKey: 'uploadMaterial',
      needClearData: true,
      changeFormStyle: true,
      showTableHeader: true,
      table: {
        columns: [
          {
            title: '图片项',
            key: 'label',
            width: 150
          },
          {
            title: '图片列表',
            slot: 'value1',
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
                    label: '此项图片上传较模糊，请重新拍摄后上传',
                    value: '此项图片上传较模糊，请重新拍摄后上传'
                  },
                  {
                    label: '此项图片上传不完整，请重新拍摄后上传',
                    value: '此项图片上传不完整，请重新拍摄后上传'
                  },
                  {
                    label: '其他原因，手动输入',
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
                      enum: ['2']
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
                  ]
                }
              }
            ]
          }
        ]
      }
    },
    {
      title: '案件审核结论',
      type: 'table',
      sectionKey: 'CaseReviewConclusion',
      changeFormStyle: false,
      showTableHeader: false,
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
                    value: '1',
                    disabled: false
                  },
                  {
                    label: '驳回',
                    value: '2',
                    disabled: true
                  },
                  {
                    label: '不通过',
                    value: '3',
                    disabled: true
                  }
                ],
                rules: [
                  {
                    required: true,
                    message: '请选择审核结论'
                  }
                ],
                showOn: {
                  isPass: {
                    type: 'enum',
                    enum: [true]
                  }
                }
              },
              {
                type: 'Radio',
                model: 'auditStatus',
                options: [
                  {
                    label: '通过',
                    value: '1',
                    disabled: true
                  },
                  {
                    label: '驳回',
                    value: '2',
                    disabled: false
                  },
                  {
                    label: '不通过',
                    value: '3',
                    disabled: false
                  }
                ],
                rules: [
                  {
                    required: true,
                    message: '请选择审核结论'
                  }
                ],
                showOn: {
                  isPass: {
                    type: 'enum',
                    enum: [false]
                  }
                }
              }
            ]
          }
        ],
        data: [
          {
            key: 'conclusion',
            label: '选择案件审核结论',
            value: '选择「通过」后转到下个审核流程，选择「不通过」后转到终审员，选择「驳回」后转到用户侧补交材料',
            reasonDesc: ''
          }
        ]
      }
    },
    {
      type: 'table',
      changeFormStyle: false,
      showTableHeader: false,
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
                type: 'Select',
                label: '',
                model: 'companyId',
                options: '/api/audit/edit/company-list',
                rules: [
                  {
                    required: true,
                    type: 'number',
                    message: '请选择线下调查公司'
                  }
                ]
              }
            ]
          }
        ],
        data: [
          {
            key: 'companyId',
            label: '选择线下调查公司',
            companyId: ''
          }
        ]
      }
    },
    {
      type: 'table',
      changeFormStyle: false,
      showTableHeader: true,
      table: {
        columns: [
          {
            title: '审核项',
            key: 'label',
            width: 100
          },
          {
            title: '审核结论',
            slot: 'action',
            width: 'auto',
            formFields: [
              {
                type: 'Input',
                subtype: 'textarea',
                model: 'checkConsolusion',
                placeholder: '请输入最终审核结论',
                rules: [
                  {
                    required: true,
                    message: '请输入最终审核结论'
                  },
                  {
                    type: 'string',
                    min: 20,
                    max: 500,
                    message: '字数要求在20-500字之间',
                    trigger: 'blur'
                  }
                ]
              }
            ]
          }
        ],
        data: [
          {
            key: 'checkConsolusion',
            label: '填写审核结论',
            checkConsolusion: ''
          }
        ]
      }
    }
  ],
  dialogs: {
    "title": "提交",
    "content": "提交后，案件将转入下一流程"
  }
};


const keyToLabelMap = {
  baseInfo: {
    // 兼容go语言json序列化排序 保证成员姓名和身份证号显示在最前面
    aaname: '成员姓名',
    abidcard: '身份证号',
    diagnoseTime: '确诊时间',
    diseaseName: '确诊疾病',
    diagnoseHospital: '确诊医院',
    address: '常住地址',
    phone: '联系电话',
    backupPhone: '备用电话',
    bankNo: '收款卡号',
    bankUsername: '卡主姓名'
  },
  caseDes: {
    caseDes: '用户案件描述'
  },
  moreInfo: {
    joinTime: '加入时间',
    applyTime: '申请时间',
    totalDays: '累计加入',
    mutualMoney: '匹配互助金额',
    isSerious: '是否为轻疾'
  },
  uploadMaterial: {
    bankcard: '银行卡正反面',
    idCardImgs: '身份证正反面',
    inpatient: '住院和疾病相关材料',
    diseaseImgs: '诊断证明',
    application: '出院小结',
  },
  firstComment: {
    checkConsolusion: '初审建议'
  },
  secondComment: {
    checkConsolusion: '复审建议'
  },
  offlineComment: {
    undeilineProcess: '调查过程',
    undeilineSurvey: '调查概况',
  },
  offlineCommentLink: {
    underlineDocUrl: '调查材料'
  },
  checkConsolusion: {
    checkConsolusion: '材料终审建议'
  }
};

// 不影响是否通过的keys
const excludePassKeys = [
  'conclusion',
  'checkConsolusion',
  'companyId'
];

export default {
  pageConfig,
  keyToLabelMap,
  excludePassKeys
}
