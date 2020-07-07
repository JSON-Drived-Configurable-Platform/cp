/**
将section的数据：
{
   "aaname":"lisi",
   "abidcard":"1238294839824",
   "diagnoseTime":"2019-11-20",
}
和sectionLabel：
{
   "aaname":"成员姓名",
   "abidcard":"身份证号",
   "diagnoseTime":"确诊时间",
}
转换为表格数据：
[
    {
        "key": "aaname",
        "label": "成员姓名",
        "value": "lisi"
    },
    {
        "key": "abidcard",
        "label": "身份证号",
        "value": "1238294839824"
    },
    {
        "key": "diagnoseTime",
        "label": "确诊时间",
        "value": "2019-11-20"
    }
]
 */
function getTableData(sectionData, sectionLabel) {
  const tableData = Object.keys(sectionData).map(key => {
    let rowData = {};
    if (sectionLabel[key]) {
      rowData = {
        key,
        label: sectionLabel[key],
        value: sectionData[key]
      };
    }
    return rowData;
  }).filter(item => item);
  return tableData;
}

/**
 * 通过配置信息和页面数据，生成表格数据
 */
export function getSectionTableData(sectionConfig, pageData, keyToLabel) {
  const {sectionKey, table} = sectionConfig;
  const sectionLabel = keyToLabel[sectionKey];
  const sectionData = pageData.info && pageData.info[sectionKey];
  let tableData = [];
  // 有一些section的表格数据是维护在配置中的
  if (table.data && table.data) {
    tableData = table.data;
  }
  // 另外的一些表格数据是从后端下发的，需要结合本地维护的keyToLabel生成表格数据
  if (sectionLabel && sectionData) {
    tableData = getTableData(sectionData, sectionLabel);
  }
  return tableData;
}
