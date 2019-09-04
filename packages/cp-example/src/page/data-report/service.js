import axios from "@/libs/api.request";

export const getPageConfig = () => {
  return axios.request({
    url: "/api/data-report/page-config",
    method: "get"
  });
};
