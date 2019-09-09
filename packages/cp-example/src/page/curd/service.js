const getPageConfig = (params = {}) => {
  return {
    url: "/api/curd/page-config",
    method: "get",
    params
  };
};

const getList = (params = {}) => {
  return {
    url: "/api/curd/data",
    method: "get",
    params
  };
};

const add = (params = {}) => {
  return {
    url: "/api/curd/add",
    method: "post",
    data: params
  };
};

const edit = (params = {}) => {
  return {
    url: "/api/curd/edit",
    method: "post",
    data: params
  };
};

const del = (params = {}) => {
  return {
    url: "/api/curd/delete",
    method: "post",
    data: params
  };
};

const toBlack = (params = {}) => {
  return {
    url: "/api/curd/toBlack",
    method: "post",
    data: params
  };
};

const toWhite = (params = {}) => {
  return {
    url: "/api/curd/toWhite",
    method: "post",
    data: params
  };
};

export default {
  getPageConfig,
  getList,
  add,
  edit,
  del,
  toBlack,
  toWhite
};
