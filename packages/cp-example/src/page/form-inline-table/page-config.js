export default {
  title: "弹框表单",
  desc: "表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。",
  "columns": [
    {
      "title": "姓名",
      "key": "name",
    },
    {
      "title": "年龄",
      "key": "age",
    },
    {
      "title": "性别",
      "key": "gender",
    },
    {
      "title": "出生日期",
      "key": "birthday",
    },
    {
      "title": "地址",
      "key": "address"
    }
  ],
  "editFormFields": [
    {
      "type": "Input",
      "label": "姓名",
      "model": "name",
      "placeholder": "请输入姓名",
      "rules": [
        {
          "type": "string",
          "required": true,
          "pattern": "^[\\u4e00-\\u9fa5]+$",
          "message": "请输入中文姓名"
        }
      ],
      width: 250,
      inline: true
    },
    {
      "type": "InputNumber",
      "label": "年龄",
      "model": "age",
      "placeholder": "请输入年龄",
      "required": true,
      "max": 150,
      "min": 0,
      width: 250,
      inline: true
    },
    {
      "type": "Select",
      "label": "性别",
      "model": "gender",
      "placeholder": "请输入性别",
      "required": true,
      "options": [
        {
          "label": "男",
          "value": "男"
        },
        {
          "label": "女",
          "value": "女"
        },
        {
          "label": "保密",
          "value": "保密"
        }
      ],
      width: 250,
      inline: true
    },
    {
      "type": "DatePicker",
      "label": "日期",
      "subtype": "date",
      "model": "birthday",
      "placeholder": "请输入出生日期",
      "required": true,
      width: 250,
      inline: true
    },
    {
      "type": "Input",
      "label": "地址",
      "model": "address",
      "placeholder": "请输入地址",
      "required": true,
      width: 250,
      inline: true
    },
    {
      type: 'Button',
      subtype: 'primary',
      text: '保存',
      action: {
        type: 'event',
        name: 'save'
      },
      width: 250,
    }
  ]
};
