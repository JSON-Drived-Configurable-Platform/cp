export const getPageConfig = (params = {}) => {
  return {
    url: "/api/data-report/page-config",
    method: "get",
    params
  };
};
