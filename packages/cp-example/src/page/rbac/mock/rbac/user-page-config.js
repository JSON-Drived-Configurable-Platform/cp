module.exports = {
  "errno": 0,
  "data": {
    "title": "用户管理",
    "columns": [
      {
        "title": "用户名",
        "key": "username"
      },
      {
        "title": "昵称",
        "key": "nickname"
      },
      {
        "title": "邮箱",
        "key": "email"
      },
      {
        "title": "性别",
        "slot": "gender",
        "width": 100,
        "formFields": [
          {
            "type": "Tag",
            "model": "gender",
            "options": [
              {
                "name": "男",
                "value": "1"
              },
              {
                "name": "女",
                "value": "2"
              },
              {
                "name": "未知",
                "value": "0"
              }
            ]
          }
        ]
      },
      {
        "title": "创建时间",
        "key": "create_time",
        "width": 150
      },
      {
        "title": "更新时间",
        "key": "update_time",
        "width": 150
      },
      {
        "title": "操作",
        "slot": "action",
        "align": "center",
        "width": 300,
        "formFields": [
          {
            "type": "Button",
            "text": "编辑",
            "subtype": "primary",
            "size": "small",
            "action": {
              "type": "event",
              "name": "editButtonClick"
            },
            "inline": true
          },
          {
            "type": "Button",
            "text": "角色管理",
            "subtype": "primary",
            "size": "small",
            "action": {
              "type": "event",
              "name": "roleButtonClick"
            },
            "inline": true
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
              "type": "event",
              "name": "deleteButtonClick"
            },
            "inline": true
          }
        ]
      }
    ],
    "editFormFields": [
      {
        "type": "Input",
        "label": "用户名",
        "model": "username",
        "placeholder": "请输入姓名",
        "rules": [
          {
            "type": "string",
            "required": true
          }
        ]
      },
      {
        "type": "Input",
        "label": "邮箱",
        "model": "email",
        "placeholder": "请输入邮箱",
        "required": true
      },
      {
        "type": "Input",
        "label": "昵称",
        "model": "nickname",
        "placeholder": "请输入昵称",
        "required": true
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
            "value": "1"
          },
          {
            "label": "女",
            "value": "2"
          },
          {
            "label": "保密",
            "value": "0"
          }
        ]
      },
      {
        "type": "Submit",
        "subtype": "primary",
        "text": "保存"
      }
    ],
    "editRoleFormFields": [
      {
        "type": "TableSelect",
        "label": "角色选择",
        "multiple": true,
        "model": "roles",
        "columns": [
          {
            "title": "名称",
            "key": "name"
          },
          {
            "title": "描述",
            "key": "description"
          }
        ],
        "options": [
          {
            "id": 1,
            "name": "admin",
            "description": "超级管理员，拥有所有权限",
            "create_time": "2019-9-10",
            "update_time": "2019-10-10"
          },
          {
            "id": 2,
            "name": "user",
            "description": "普通用户，只有浏览的权限",
            "create_time": "2019-9-10",
            "update_time": "2019-10-10"
          },
          {
            "id": 3,
            "name": "editor",
            "description": "编辑，可以编辑、发布文章等",
            "create_time": "2019-9-10",
            "update_time": "2019-10-10"
          },
          {
            "id": 4,
            "name": "auditor",
            "description": "审核人员，可以查看、审核文案",
            "create_time": "2019-9-10",
            "update_time": "2019-10-10"
          }
        ]
      },
      {
        "type": "Submit",
        "subtype": "primary",
        "text": "保存"
      }
    ]
  }
}
