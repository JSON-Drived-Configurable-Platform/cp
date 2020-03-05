export default {
  title: "基础表单",
  desc: "表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。",
  "columns": [
    {
      "title": "姓名",
      "slot": "name",
      "formField": {
        "type": "Input",
        "model": "name",
        "placeholder": "请输入用户名",
        "rules": [
          {
            "type": "string",
            "required": true,
            "pattern": "^[\\u4e00-\\u9fa5]+$",
            "message": "请输入中文姓名"
          }
        ]
      }
    },
    {
      "title": "年龄",
      "slot": "age",
      "formField": {
        "type": "InputNumber",
        "model": "age",
        "placeholder": "请输入年龄",
        "required": true,
        "max": 150,
        "min": 0
      }
    },
    {
      "title": "性别",
      "slot": "gender",
      "formField": {
        "type": "Select",
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
        ]
      }
    },
    {
      "title": "出生日期",
      "slot": "birthday",
      "formField": {
        "type": "DatePicker",
        "subtype": "date",
        "model": "birthday",
        "placeholder": "请输入出生日期",
        "required": true
      }
    },
    {
      "title": "地址",
      "key": "address",
      "formField": {
        "type": "Input",
        "model": "address",
        "placeholder": "请输入地址",
        "required": true
      }
    },
    {
      "title": "操作",
      "slot": "action",
      "formField": {
        "type": "Submit",
        "subtype": "primary",
        "text": "保存"
      }
    }
  ]
};
