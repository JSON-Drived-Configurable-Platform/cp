const getPageConfig = (params = {}) => {
  return {
    url: "/api/curd/page-config",
    method: "get",
    params
  };
};

export default {
  getPageConfig
};
