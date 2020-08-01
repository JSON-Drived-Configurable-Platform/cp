/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import services from "@/service";

export default {
  state: {
    userName: "",
    userAvatar: "",
    departmentName: ""
  },
  mutations: {
    setAvatar(state, userAvatar) {
      state.userAvatar = userAvatar;
    },
    setUserName(state, userName) {
      state.userName = userName;
    },
    setDepartmentName(state, departmentName) {
      state.departmentName = departmentName;
    }
  },
  actions: {
    // 获取用户相关信息
    getUserInfo({ commit }) {
      return new Promise((resolve, reject) => {
        try {
          services
            .getUserInfo()
            .then(({ errno, data }) => {
              if (+errno === 200 || +errno === 0) {
                commit("setDepartmentName", data.departmentName);
                commit("setAvatar", data.headUrl);
                commit("setUserName", data.userName);
                resolve(data);
              } else {
                reject(new Error(`response errno is: ${errno}`));
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
