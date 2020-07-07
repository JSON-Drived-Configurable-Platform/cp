const pageConfig = {
  pageMark: "total",
  showButton: false,
  pageDataRequestInfo: {
    api: '/api/audit/total/data',
    method: 'get',
    apiParams: ['all']
  },
  pageGoBackUrl: '',
  tableList: [
    {
      title: '用户上传信息',
      type: 'table',
      sectionKey: 'baseInfo',
      needClearData: true,
      needShowDownLoadButton: false,
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
      title: '用户案件描述',
      type: 'table',
      needShowDownLoadButton: false,
      needClearData: true,
      sectionKey: 'caseDes',
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
      title: '用户更多信息',
      type: 'table',
      needShowDownLoadButton: false,
      needClearData: true,
      sectionKey: 'moreInfo',
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
      needShowDownLoadButton: true,
      needClearData: true,
      sectionKey: 'uploadMaterial',
      showTableHeader: false,
      table: {
        columns: [
          {
            title: '项',
            key: 'label',
            width: 150
          },
          {
            title: '图片列表',
            slot: 'value',
            width: 'auto',
            formFields: [
              {
                type: 'List',
                model: 'value',
                cardWidth: '120px',
                cardHeight: '90px'
              }
            ]
          }
        ]
      }
    },
    {
      title: '材料初审建议',
      type: 'table',
      needShowDownLoadButton: false,
      needClearData: true,
      sectionKey: 'firstComment',
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
      title: '材料复审建议',
      type: 'table',
      needShowDownLoadButton: false,
      needClearData: true,
      sectionKey: 'secondComment',
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
      title: '线下调查建议',
      type: 'table',
      needShowDownLoadButton: false,
      needClearData: true,
      sectionKey: 'offlineComment',
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
            width: 'auto',
            key: 'value',
          }
        ]
      }
    },
    {
      title: '线下调查链接',
      type: 'table',
      needShowDownLoadButton: false,
      needClearData: true,
      sectionKey: 'offlineCommentLink',
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
            width: 'auto',
            slot: 'value',
            formFields: [
              {
                type: 'Button',
                model: 'value',
                textModel: 'value',
                subtype: 'text',
                action: {
                  type: 'url',
                }
              }
            ]
          }
        ]
      }
    },
    {
      title: '材料终审建议',
      type: 'table',
      needShowDownLoadButton: false,
      needClearData: true,
      sectionKey: 'checkConsolusion',
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
    }
  ]
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

export default {
  pageConfig,
  keyToLabelMap
}
