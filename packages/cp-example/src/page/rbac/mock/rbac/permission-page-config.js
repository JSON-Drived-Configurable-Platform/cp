module.exports = {
  "errno": 0,
  "data": {
    "title": "权限管理",
    "columns": [
      {
        "title": "ID",
        "key": "id",
        "width": 50
      },
      {
        "title": "名称",
        "key": "name",
        "width": 200
      },
      {
        "title": "URL",
        "key": "url"
      },
      {
        "title": "权限",
        "key": "permission"
      },
      {
        "title": "方法",
        "key": "method",
        "width": 80
      },
      {
        "title": "父级ID",
        "slot": "parent_id",
        "width": 150,
        "formFields": [
          {
            "type": "Tag",
            "model": "parent_id",
            "options": [
              {
                "name": "无",
                "value": "0"
              },
              {
                "name": "用户管理",
                "value": "1"
              },
              {
                "name": "权限管理",
                "value": "7"
              }
            ]
          }
        ]
      },
      {
        "title": "操作",
        "slot": "action",
        "align": "center",
        "width": 200,
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
        "label": "名称",
        "model": "name",
        "placeholder": "请输入权限名称",
        "required": true
      },
      {
        "type": "Input",
        "label": "URL",
        "model": "url",
        "placeholder": "请输入权限URL",
        "required": true
      },
      {
        "type": "Input",
        "label": "权限表达式",
        "model": "permission",
        "placeholder": "请输入权限匹配表达式",
        "required": true
      },
      {
        "type": "Select",
        "label": "方法",
        "model": "method",
        "placeholder": "请选择方法",
        "required": true,
        "options": [
          {
            "label": "GET",
            "value": "GET"
          },
          {
            "label": "POST",
            "value": "POST"
          },
          {
            "label": "PUT",
            "value": "PUT"
          },
          {
            "label": "DELETE",
            "value": "DELETE"
          },
          {
            "label": "全部",
            "value": "*"
          }
        ]
      },
      {
        "type": "Select",
        "label": "父级权限",
        "model": "parent_id",
        "placeholder": "请选择父级权限",
        "required": true,
        "options": [
          {
            "label": "无",
            "value": "0"
          },
          {
            "label": "用户管理",
            "value": "1"
          },
          {
            "label": "权限管理",
            "value": "7"
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
