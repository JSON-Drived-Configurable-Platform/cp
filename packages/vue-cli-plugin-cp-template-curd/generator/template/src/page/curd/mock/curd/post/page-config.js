module.exports = {
  "errno": 0,
  "data": {
    "title": "文章",
    "search": {
      "formFields": [
        {
          "type": "Select",
          "label": "分类",
          "multiple": true,
          "model": "class",
          "options": [
            {
              "label": "技术",
              "value": "1"
            },
            {
              "label": "生活",
              "value": "2"
            }
          ]
        },
        {
          "type": "DatePicker",
          "subtype": "daterange",
          "label": "发布时间",
          "model": "publish_time",
          "options": []
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
        "api": "/api/curd/post/data",
        "method": "get",
        "apiParams": [
          "all"
        ]
      },
      "columns": [
        {
          "title": "标题",
          "key": "title",
          "width": 150
        },
        {
          "title": "发布时间",
          "key": "publish_time",
          "width": 150
        },
        {
          "title": "备注",
          "slot": "comment",
          "poptip": {
            "title": "编辑备注",
            "formFields": [
              {
                "type": "Input",
                "model": "comment",
                "placeholder": "请输入备注",
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
                  "api": "/api/curd/post/edit"
                },
                "apiParams": [
                  "title",
                  "comment"
                ],
                "inline": true
              }
            ]
          }
        },
        {
          "title": "文章状态",
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
                  "name": "已删除",
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
              "text": "删除",
              "subtype": "primary",
              "size": "small",
              "confirmPoptip": {
                "title": "确认放到垃圾箱?",
                "placement": "left"
              },
              "action": {
                "type": "ajax",
                "api": "/api/curd/post/delete"
              },
              "apiParams": [
                "title",
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
              "text": "恢复",
              "subtype": "primary",
              "size": "small",
              "confirmPoptip": {
                "title": "确定从垃圾箱恢复?",
                "placement": "left"
              },
              "action": {
                "type": "ajax",
                "api": "/api/curd/post/back"
              },
              "apiParams": [
                "title",
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
              "text": "清除",
              "subtype": "error",
              "size": "small",
              "confirmPoptip": {
                "title": "清除后不可恢复，确定清除?",
                "placement": "left"
              },
              "action": {
                "type": "ajax",
                "api": "/api/curd/post/delete"
              },
              "apiParams": [
                "title"
              ],
              "showOn": {
                "status": [
                  {
                    "type": "enum",
                    "enum": [
                      "2"
                    ]
                  }
                ]
              },
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
            "label": "标题",
            "model": "title",
            "placeholder": "请输入标题",
            "rules": [
              {
                "type": "string",
                "required": true,
                "message": "请输入标题"
              }
            ]
          },
          {
            "type": "DatePicker",
            "label": "发布日期",
            "subtype": "date",
            "model": "publish_time",
            "placeholder": "请输入发布日期",
            "required": true
          },
          {
            "type": "Input",
            "label": "备注",
            "model": "comment",
            "placeholder": "请输入备注",
            "required": true
          },
          {
            "type": "Submit",
            "subtype": "primary",
            "size": "large",
            "text": "提交",
            "action": {
              "api": "/api/curd/post/edit",
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
            "label": "标题",
            "model": "title",
            "placeholder": "请输入标题",
            "rules": [
              {
                "type": "string",
                "required": true,
                "message": "请输入标题"
              }
            ]
          },
          {
            "type": "DatePicker",
            "label": "发布日期",
            "subtype": "date",
            "model": "publish_time",
            "placeholder": "请输入发布日期",
            "required": true
          },
          {
            "type": "Input",
            "label": "备注",
            "model": "comment",
            "placeholder": "请输入备注",
            "required": true
          },
          {
            "type": "Submit",
            "subtype": "primary",
            "size": "large",
            "text": "提交",
            "action": {
              "api": "/api/curd/post/add",
              "method": "get"
            }
          }
        ]
      }
    ]
  },
  "msg": "ok"
}
