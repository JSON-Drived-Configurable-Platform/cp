import Vue from "vue";
import Router from "vue-router";
import routes from "./routers";
import store from "../store";
import iView from "iview";

Vue.use(Router);
const router = new Router({
  routes,
  mode: "hash"
});

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  if (!store.state.app.menuList.length > 0) {
    store.dispatch("getMenuList");
  }
  if (!store.state.user.userName) {
    store.dispatch("getUserInfo");
  }
  store.commit("setPagePath", to.fullPath);

  next();
});

router.afterEach(() => {
  iView.LoadingBar.finish();
  window.scrollTo(0, 0);
});

export default router;
