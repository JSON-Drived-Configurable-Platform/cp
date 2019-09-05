import Vue from "vue";
import iView from "iview";
import VueRouter from "vue-router";
// import FormGenerator from "form-generator-iview/src/index";
// import DataVis from "data-vis-iview";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "iview/dist/styles/iview.css";
// import "form-generator-iview/src/style/index.less";
// import "data-vis-iview/src/style/index.less";

Vue.use(VueRouter);
Vue.use(iView);
// Vue.use(FormGenerator);
// Vue.use(DataVis);

// 开启debug模式
Vue.config.debug = true;

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
