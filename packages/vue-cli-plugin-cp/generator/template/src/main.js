import Vue from "vue";
import iView from "view-design";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "view-design/dist/styles/iview.css";
import "form-generator-iview/src/style/index.less";
import FormGenerator from "form-generator-iview";

Vue.use(iView);

// 开启debug模式
Vue.config.debug = true;

Vue.use(FormGenerator);
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
