module.exports = {
  "errno": 0,
  "data": {
    "id": "3",
    "username": "wangbing11",
    "nickname": "王兵",
    "phone": "13146989718",
    "email": "abing@gmail.com",
    "birthday": null,
    "sex": "1",
    "status": "1",
    "create_time": "1570512218000",
    "update_time": "1570512218000",
    "roles": [
      {
        "id": "1",
        "name": "管理员",
        "description": "超级管理员",
        "create_time": "1544611947239",
        "update_time": "1544611947239",
        "user_id": "3",
        "role_id": "1"
      },
      {
        "id": "2",
        "name": "普通用户",
        "description": "普通用户",
        "create_time": "1544611947246",
        "update_time": "1544611947246",
        "user_id": "3",
        "role_id": "2"
      }
    ],
    "permissions": [
      {
        "id": "1",
        "name": "测试页面",
        "url": "/test",
        "type": "1",
        "permission": "page:test",
        "method": null,
        "sort": "1",
        "parent_id": "0",
        "role_id": "1",
        "permission_id": "1"
      },
      {
        "id": "2",
        "name": "测试页面-查询",
        "url": "/**/test",
        "type": "2",
        "permission": "btn:test:query",
        "method": "GET",
        "sort": "1",
        "parent_id": "1",
        "role_id": "1",
        "permission_id": "2"
      },
      {
        "id": "1",
        "name": "测试页面",
        "url": "/test",
        "type": "1",
        "permission": "page:test",
        "method": null,
        "sort": "1",
        "parent_id": "0",
        "role_id": "2",
        "permission_id": "1"
      },
      {
        "id": "2",
        "name": "测试页面-查询",
        "url": "/**/test",
        "type": "2",
        "permission": "btn:test:query",
        "method": "GET",
        "sort": "1",
        "parent_id": "1",
        "role_id": "2",
        "permission_id": "2"
      }
    ]
  }
}
