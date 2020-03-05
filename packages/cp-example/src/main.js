import Vue from "vue";
import iView from "iview";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "iview/dist/styles/iview.css";
import "form-generator-iview/src/style/index.less";
import "data-vis-iview/src/style/index.less";
import FormGenerator from "form-generator-iview";
import DataVis from "data-vis-iview";

Vue.use(iView);

// 开启debug模式
Vue.config.debug = true;

Vue.use(FormGenerator);
Vue.use(DataVis);
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
