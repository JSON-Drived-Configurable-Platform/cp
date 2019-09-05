const getHomeData = (params = {}) => {
  return {
    url: "/api/home/home-data",
    method: "get",
    params
  };
};

export default {
  getHomeData
};
