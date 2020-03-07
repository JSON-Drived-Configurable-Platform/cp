module.exports = {
  "errno": 0,
  "data": {
    "roles": {
      "id": "1",
      "name": "管理员",
      "description": "超级管理员",
      "create_time": "1544611947239",
      "update_time": "1544611947239",
      "user_id": "3",
      "role_id": "1"
    },
    "permissions": [
      {
        "id": "1",
        "name": "用户管理",
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
        "id": "7",
        "name": "查看角色",
        "url": "/**/test",
        "type": "2",
        "permission": "btn:test:query",
        "method": "GET",
        "sort": "1",
        "parent_id": "1",
        "role_id": "1",
        "permission_id": "2"
      }
    ]
  }
}
