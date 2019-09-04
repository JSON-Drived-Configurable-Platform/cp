/**
 * @file 路径配置配置
 * @author wangbing11(wangbing11@baidu.com)
 */

import Vue from "vue";
import Vuex from "vuex";

import app from "./module/app";
import page from "./module/page";
import user from "./module/user";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    app,
    page,
    user
  }
});
