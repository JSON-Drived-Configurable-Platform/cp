const baseKeyToLabel = {
  baseInfo: {
    // 兼容go语言json序列化排序 保证成员姓名和身份证号显示在最前面
    aaname: '成员姓名',
    abidcard: '身份证号',
    diagnoseTime: '确诊时间',
    disease: '确诊疾病',
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
    idcardImgs: '身份证正反面',
    bankcard: '银行卡正反面',
    inpatient: '住院和疾病相关材料',
    diseaseCheck: '出院小结',
    diagnosticProof: '诊断证明',
    application: '互助申请书',
    other: '其他辅助资料'
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
    underlineDoc: '调查材料',
    status: ''
  },
  checkConsolusion: {
    checkConsolusion: '材料终审建议'
  }
}

export const keyToLabelMap = {
  '/audit/total': baseKeyToLabel,
  '/audit/edit': baseKeyToLabel
}
