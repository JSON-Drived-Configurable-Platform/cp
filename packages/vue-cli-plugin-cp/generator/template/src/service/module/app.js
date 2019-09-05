const getMenuList = (params = {}) => {
  return {
    url: "/api/app/menu-list",
    method: "get",
    params
  };
};

export default {
  getMenuList
};
