/**
 * @file 用户状态
 * @author wangbing11(wangbing11@baidu.com)
 */

/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import { getUserInfo } from "../service/user";

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
          getUserInfo()
            .then(({ status, data }) => {
              if (+status === 200 || +status === 0) {
                commit("setDepartmentName", data.departmentName);
                commit("setAvatar", data.headUrl);
                commit("setUserName", data.userName);
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
