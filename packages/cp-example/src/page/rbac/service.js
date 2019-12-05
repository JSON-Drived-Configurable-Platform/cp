// User
const getRbacUserInfo = (params = {}) => {
  return {
    url: "/api/rbac/user-info",
    method: "get",
    params
  };
};

const getUserPageConfig = (params = {}) => {
  return {
    url: "/api/rbac/user-page-config",
    method: "get",
    params
  };
};

const getUserList = (params = {}) => {
  return {
    url: "/api/rbac/user-list",
    method: "get",
    params
  };
};

const userAdd = (params = {}) => {
  return {
    url: "/api/rbac/user-add",
    method: "get",
    data: params
  };
};

const userEdit = (params = {}) => {
  return {
    url: "/api/rbac/user-edit",
    method: "get",
    data: params
  };
};

const userDel = (params = {}) => {
  return {
    url: "/api/rbac/user-delete",
    method: "get",
    data: params
  };
};

// Role
const getRolePageConfig = (params = {}) => {
  return {
    url: "/api/rbac/role-page-config",
    method: "get",
    params
  };
};

const getRoleList = (params = {}) => {
  return {
    url: "/api/rbac/role-list",
    method: "get",
    params
  };
};

// Permission
const getPermissionPageConfig = (params = {}) => {
  return {
    url: "/api/rbac/permission-page-config",
    method: "get",
    params
  };
};

const getPermissionList = (params = {}) => {
  return {
    url: "/api/rbac/permission-list",
    method: "get",
    params
  };
};

const permissionAdd = (params = {}) => {
  return {
    url: "/api/rbac/permission-add",
    method: "get",
    params
  };
};

const permissionEdit = (params = {}) => {
  return {
    url: "/api/rbac/permission-update",
    method: "get",
    params
  };
};

const permissionDel = (params = {}) => {
  return {
    url: "/api/rbac/permission-delete",
    method: "get",
    params
  };
};

// 获取用户的角色权限信息
const getUserRolePermission = (params = {}) => {
  return {
    url: "/api/rbac/user-role-permission",
    method: "get",
    params
  };
};

// 更新用户的角色
const updateUserRole = (params = {}) => {
  return {
    url: "/api/rbac/user-role-update",
    method: "get",
    params
  };
};

// 获取角色当前的权限节点
const getRolePermission = (params = {}) => {
  return {
    url: "/api/rbac/role-permission",
    method: "get",
    params
  };
};

const updateRolePermission = (params = {}) => {
  return {
    url: "/api/rbac/role-permission-update",
    method: "get",
    params
  };
};

export default {
  getRbacUserInfo,
  getUserPageConfig,
  getUserList,
  userAdd,
  userEdit,
  userDel,
  getRolePageConfig,
  getRoleList,
  getPermissionPageConfig,
  getPermissionList,
  getUserRolePermission,
  updateUserRole,
  getRolePermission,
  updateRolePermission,
  permissionAdd,
  permissionEdit,
  permissionDel
};
