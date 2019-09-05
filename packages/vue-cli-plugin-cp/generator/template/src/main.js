import Vue from "vue";
import iView from "iview";
import VueRouter from "vue-router";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "iview/dist/styles/iview.css";

Vue.use(VueRouter);
Vue.use(iView);

// 开启debug模式
Vue.config.debug = true;

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
