const getPageConfig = (params = {}) => {
  return {
    url: "/api/form/page-config",
    method: "get",
    params
  };
};

const getEditableTablePageConfig = (params = {}) => {
  return {
    url: "/api/form/editable-table-page-config",
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

const formSubmit = (params = {}) => {
  return {
    url: "/api/form/submit",
    method: "post",
    params
  };
};

export default {
  getPageConfig,
  getEditableTablePageConfig,
  formSubmit,
  getList
};
