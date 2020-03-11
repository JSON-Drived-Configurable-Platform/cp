module.exports = {
  "errno": 0,
  "data": {
    "title": "用户",
    "search": {
      "formFields": [
        {
          "type": "Select",
          "label": "性别",
          "multiple": true,
          "model": "gender",
          "options": [
            {
              "label": "男",
              "value": "1"
            },
            {
              "label": "女",
              "value": "2"
            }
          ]
        },
        {
          "type": "LogicSelect",
          "label": "年龄",
          "model": "logicSelect",
          "enables": [
            "=",
            ">",
            ">=",
            "<",
            "<=",
            "betweenIn",
            "betweenWith",
            "!=",
            "multiple"
          ],
          "options": [
            {
              "label": "10",
              "value": "10"
            },
            {
              "label": "20",
              "value": "20"
            },
            {
              "label": "30",
              "value": "30"
            },
            {
              "label": "40",
              "value": "40"
            },
            {
              "label": "50",
              "value": "50"
            },
            {
              "label": "60",
              "value": "60"
            },
            {
              "label": "70",
              "value": "70"
            },
            {
              "label": "80",
              "value": "80"
            },
            {
              "label": "90",
              "value": "90"
            }
          ]
        }
      ],
      "options": {
        "inline": true,
        "itemWidth": "300",
        "labelPosition": "left",
        "labelWidth": 80
      }
    },
    "actions": [
      {
        "type": "Button",
        "text": "创建",
        "subtype": "primary",
        "action": {
          "type": "event",
          "name": "dialog-create"
        },
        "inline": true
      }
    ],
    "table": {
      "request": {
        "api": "/api/curd/user/data",
        "method": "get",
        "apiParams": [
          "all"
        ]
      },
      "columns": [
        {
          "title": "姓名",
          "key": "name",
          "width": 150
        },
        {
          "title": "年龄",
          "key": "age",
          "width": 90
        },
        {
          "title": "性别",
          "key": "gender",
          "width": 90
        },
        {
          "title": "出生日期",
          "key": "birthday",
          "width": 150
        },
        {
          "title": "地址",
          "slot": "address",
          "poptip": {
            "title": "编辑地址",
            "formFields": [
              {
                "type": "Input",
                "model": "address",
                "placeholder": "请输入地址",
                "rules": [
                  {
                    "type": "string",
                    "required": true
                  }
                ]
              },
              {
                "type": "Button",
                "text": "保存",
                "subtype": "primary",
                "size": "small",
                "action": {
                  "type": "ajax",
                  "api": "/api/curd/user/edit"
                },
                "apiParams": [
                  "name",
                  "address"
                ],
                "inline": true
              }
            ]
          }
        },
        {
          "title": "用户状态",
          "width": 100,
          "slot": "status",
          "align": "center",
          "formFields": [
            {
              "type": "Tag",
              "model": "status",
              "options": [
                {
                  "name": "正常",
                  "value": "1",
                  "color": "primary"
                },
                {
                  "name": "黑用户",
                  "value": "2",
                  "color": "error"
                }
              ]
            }
          ]
        },
        {
          "title": "操作",
          "slot": "action",
          "width": 300,
          "align": "center",
          "formFields": [
            {
              "type": "Button",
              "text": "编辑",
              "subtype": "primary",
              "size": "small",
              "action": {
                "type": "event",
                "name": "dialog-edit"
              },
              "inline": true
            },
            {
              "type": "Button",
              "text": "判黑",
              "subtype": "primary",
              "size": "small",
              "confirmPoptip": {
                "title": "确认判黑?",
                "placement": "left"
              },
              "action": {
                "type": "ajax",
                "api": "/api/curd/user/toBlack"
              },
              "apiParams": [
                "name",
                "status"
              ],
              "inline": true,
              "hiddenOn": {
                "status": [
                  {
                    "type": "enum",
                    "enum": [
                      "2"
                    ]
                  }
                ]
              }
            },
            {
              "type": "Button",
              "text": "洗白",
              "subtype": "primary",
              "size": "small",
              "confirmPoptip": {
                "title": "确定洗白?",
                "placement": "left"
              },
              "action": {
                "type": "ajax",
                "api": "/api/curd/user/toWhite"
              },
              "apiParams": [
                "name",
                "status"
              ],
              "inline": true,
              "hiddenOn": {
                "status": [
                  {
                    "type": "enum",
                    "enum": [
                      "1"
                    ]
                  }
                ]
              }
            },
            {
              "type": "Button",
              "text": "删除",
              "subtype": "error",
              "size": "small",
              "confirmPoptip": {
                "title": "确定删除?",
                "placement": "left"
              },
              "action": {
                "type": "ajax",
                "api": "/api/curd/user/delete"
              },
              "apiParams": [
                "name"
              ],
              "inline": true
            }
          ]
        }
      ],
      "pagenation": {
        "pageSize": 20,
        "showTotal": true,
        "showElevator": true,
        "showSizer": true
      }
    },
    "dialogs": [
      {
        "name": "edit",
        "title": "编辑",
        "formFields": [
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
            ]
          },
          {
            "type": "InputNumber",
            "label": "年龄",
            "model": "age",
            "placeholder": "请输入年龄",
            "required": true,
            "max": 150,
            "min": 0
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
            ]
          },
          {
            "type": "DatePicker",
            "label": "日期",
            "subtype": "date",
            "model": "birthday",
            "placeholder": "请输入出生日期",
            "required": true
          },
          {
            "type": "Input",
            "label": "地址",
            "model": "address",
            "placeholder": "请输入地址",
            "required": true
          },
          {
            "type": "Submit",
            "subtype": "primary",
            "size": "large",
            "text": "提交",
            "action": {
              "api": "/api/curd/user/edit",
              "method": "get"
            }
          }
        ]
      },
      {
        "name": "create",
        "title": "创建",
        "formFields": [
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
            ]
          },
          {
            "type": "InputNumber",
            "label": "年龄",
            "model": "age",
            "placeholder": "请输入年龄",
            "required": true,
            "max": 150,
            "min": 0
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
            ]
          },
          {
            "type": "DatePicker",
            "label": "日期",
            "subtype": "date",
            "model": "birthday",
            "placeholder": "请输入出生日期",
            "required": true
          },
          {
            "type": "Input",
            "label": "地址",
            "model": "address",
            "placeholder": "请输入地址",
            "required": true
          },
          {
            "type": "Submit",
            "subtype": "primary",
            "size": "large",
            "text": "提交",
            "action": {
              "api": "/api/curd/user/add",
              "method": "get"
            }
          }
        ]
      }
    ]
  },
  "msg": "ok"
}
