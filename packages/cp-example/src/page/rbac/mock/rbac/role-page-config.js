module.exports = {
  "errno": 0,
  "data": {
    "title": "角色管理",
    "columns": [
      {
        "title": "名称",
        "key": "name",
        "width": 200
      },
      {
        "title": "描述",
        "key": "description",
        "width": 200
      },
      {
        "title": "创建时间",
        "key": "create_time",
        "width": 200
      },
      {
        "title": "更新时间",
        "key": "update_time",
        "width": 200
      },
      {
        "title": "操作",
        "slot": "action",
        "align": "center",
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
            "text": "权限管理",
            "subtype": "primary",
            "size": "small",
            "action": {
              "type": "event",
              "name": "permissionButtonClick"
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
        "placeholder": "请输入姓名",
        "required": true
      },
      {
        "type": "Input",
        "subtype": "textarea",
        "label": "描述",
        "model": "description",
        "placeholder": "请输入描述",
        "required": true
      },
      {
        "type": "Submit",
        "subtype": "primary",
        "text": "保存"
      }
    ],
    "editPermissionFormFields": [
      {
        "type": "Tree",
        "label": "树形多选",
        "model": "permissions",
        "multiple": true,
        "showCheckbox": true,
        "options": [
          {
            "id": "1",
            "title": "用户管理",
            "children": [
              {
                "id": "2",
                "title": "查看用户"
              },
              {
                "id": "3",
                "title": "新增用户"
              },
              {
                "id": "4",
                "title": "编辑用户"
              },
              {
                "id": "5",
                "title": "删除用户"
              },
              {
                "id": "11",
                "title": "编辑用户角色"
              }
            ]
          },
          {
            "id": "6",
            "title": "角色管理",
            "children": [
              {
                "id": "7",
                "title": "查看角色"
              },
              {
                "id": "8",
                "title": "新增角色"
              },
              {
                "id": "9",
                "title": "编辑角色"
              },
              {
                "id": "10",
                "title": "删除角色"
              }
            ]
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
