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
// takeover
const getTakeoverFormData = (params = {}) => {
  return {
    url: "/api/form/takeover-data",
    method: "get",
    params
  };
};

const getTakeoverModel = (params = {}) => {
  return {
    url: "/api/form/takeover-model",
    method: "get",
    params
  };
};

const getWizardFormData = (params = {}) => {
  return {
    url: "/api/form/wizard-data",
    method: "get",
    params
  };
};

const getSenctionedFormData = (params = {}) => {
  return {
    url: "/api/form/sectioned-data",
    method: "get",
    params
  };
};

const formSubmit = (params = {}) => {
  return {
    url: "/api/form/submit",
    method: "get",
    params
  };
};

export default {
  getPageConfig,
  getEditableTablePageConfig,
  formSubmit,
  getList,
  getTakeoverFormData,
  getTakeoverModel,
  getWizardFormData,
  getSenctionedFormData
};
