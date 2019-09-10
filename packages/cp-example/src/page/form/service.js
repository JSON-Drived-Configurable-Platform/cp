const getSimplePageConfig = (params = {}) => {
  return {
    url: "/api/form/simple-page-config",
    method: "get",
    params
  };
};

const formSubmit = (params = {}) => {
  return {
    url: "/api/form/submit",
    method: "post",
    params
  };
};

export default {
  getSimplePageConfig,
  formSubmit
};
