import axios from "@/libs/api.request";

export const getMenuList = () => {
  return axios.request({
    url: "/api/app/menu-list",
    method: "get"
  });
};
