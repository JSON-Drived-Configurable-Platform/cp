export default {
  title: "基础表单",
  desc: "表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。",
  forms: [
    {
      "title": "项目一",
      "fields": [
        {
          "type": "Input",
          "label": "任务名称",
          "model": "taskName",
          "placeholder": "请输入任务名称",
          "rules": [
            {
              "type": "string",
              "required": true,
              "pattern": "^[\\u4e00-\\u9fa5]+$",
              "message": "请输入中文姓名"
            }
          ]
        },
        {
          "label": "客户端",
          "type": "Checkbox",
          "model": "showClient",
          "options": [
            {
              "label": "好看",
              "value": "1"
            },
            {
              "label": "手百lite",
              "value": "2"
            },
            {
              "label": "百度地图",
              "value": "3"
            }
          ],
          "required": true
        },
        {
          "type": "Select",
          "label": "任务方",
          "model": "relationTask",
          "placeholder": "请输入性别",
          "required": true,
          "options": [
            {
              "label": "任务1",
              "value": "1"
            },
            {
              "label": "任务2",
              "value": "2"
            },
            {
              "label": "任务3",
              "value": "3"
            }
          ]
        },
        {
          "type": "Submit",
          "subtype": "primary",
          "text": "保存",
          "width": 100,
          "inline": true
        }
      ]
    },
    {
      "title": "项目二",
      "fields": [
        {
          "type": "Input",
          "label": "任务标题",
          "model": "taskHead",
          "placeholder": "请输入任务标题",
          "required": true,
          "max": 150,
          "min": 0
        },
        {
          "type": "Input",
          "label": "任务说明",
          "model": "taskExplain",
          "placeholder": "请输入任务说明",
          "required": true,
          "max": 150,
          "min": 0
        },
        {
          "type": "Input",
          "label": "任务信息",
          "model": "taskToolTips",
          "placeholder": "请输入任务提示信息",
          "required": true,
          "max": 150,
          "min": 0
        },
        {
          "type": "Submit",
          "subtype": "primary",
          "text": "保存",
          "width": 100,
          "inline": true
        }
      ]
    },
    {
      "title": "项目三",
      "fields": [
        {
          "type": "Input",
          "label": "任务周期",
          "model": "taskCycle",
          "placeholder": "请输入任务周期",
          "required": true,
          "max": 150,
          "min": 0
        },
        {
          "type": "Input",
          "label": "任务次数",
          "model": "taskNumber",
          "placeholder": "请输入任务次数",
          "required": true,
          "max": 150,
          "min": 0
        },
        {
          "type": "Submit",
          "subtype": "primary",
          "text": "保存",
          "width": 100,
          "inline": true
        }
      ]
    }
  ]
};
