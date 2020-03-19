// 用于匹配驳回项，在弹窗中展示
const keyListBase = {
  diagnoseTime: '确诊时间',
  disease: '确诊疾病',
  diagnoseHospital: '确诊医院',
  address: '常住地址',
  phone: '联系电话',
  backupPhone: '备用电话',
  bankNo: '收款卡号',
  bankUsername: '卡主姓名',
  caseDes: '用户案件描述',
  idcardImgs: '身份证正反面',
  bankcard: '银行卡正反面',
  inpatient: '住院和疾病相关材料',
  diseaseCheck: '出院小结',
  diagnosticProof: '诊断证明',
  application: '互助申请书',
  other: '其他辅助资料'
};
const keyList = {
  '/audit/total': keyListBase,
  '/audit/edit': keyListBase
}
export {keyList}