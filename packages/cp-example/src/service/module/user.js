const getUserInfo = (params = {}) => {
  return {
    url: "/api/user/user-info",
    method: "get",
    params
  };
};

export default {
  getUserInfo
};
