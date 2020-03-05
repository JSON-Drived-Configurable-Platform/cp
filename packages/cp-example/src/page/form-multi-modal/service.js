const getPageConfig = (params = {}) => {
  return {
    url: "/api/form/page-config",
    method: "get",
    params
  };
};

const getList = (params = {}) => {
  return {
    url: "/api/form/data",
    method: "get",
    params
  };
};

export default {
  getPageConfig,
  getList
};
