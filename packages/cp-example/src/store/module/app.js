/**
 * @file app状态
 * @author wangbing11(wangbing11@baidu.com)
 */

/* eslint-disable no-param-reassign */
import config from "../../config";

const { menuList } = config;
export default {
  state: {
    menuList,
    breadCrumbList: [],
    tagNavList: [],
    homeRoute: {},
    errorList: [],
    hasReadErrorPage: false
  },
  mutations: {
    setLocal(state, lang) {
      state.local = lang;
    },
    addError(state, error) {
      state.errorList.push(error);
    },
    setHasReadErrorLoggerStatus(state, status = true) {
      state.hasReadErrorPage = status;
    }
  }
};
