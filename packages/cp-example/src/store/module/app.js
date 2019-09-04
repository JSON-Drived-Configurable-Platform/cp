/* eslint-disable no-param-reassign */
import services from "@/service";

export default {
  state: {
    menuList: [],
    breadCrumbList: []
  },
  mutations: {
    setMenuList(state, menuList) {
      state.menuList = menuList;
    },

    breadCrumbList(state, breadCrumbList) {
      state.breadCrumbList = breadCrumbList;
    }
  },
  actions: {
    getMenuList({ commit }) {
      return new Promise((resolve, reject) => {
        try {
          services
            .getMenuList()
            .then(({ status, data }) => {
              if (+status === 200 || +status === 0) {
                commit("setMenuList", data);
                resolve(data);
              } else {
                reject(new Error(`response status is: ${status}`));
              }
            })
            .catch(err => {
              reject(err);
            });
        } catch (error) {
          reject(error);
        }
      });
    }
  }
};
