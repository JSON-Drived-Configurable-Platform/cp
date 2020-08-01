import Vue from "vue";
import Router from "vue-router";
import initialRoutes from "./routers";
import store from "../store";
import iView from "view-design";
import Main from "../components/layout/default";

Vue.use(Router);

const router = new Router({
  mode: "hash",
  routes: initialRoutes
});

/**
 * Generate routes
 *
 * @param {Array} menuList
 */
function generateRoutes(menuList = []) {
  return menuList.map(({ path = "", redirect = null, submenu = [] }) => {
    const route = {
      path,
      // 设置layout
      component: Main
    };
    if (redirect) {
      route.redirect = redirect;
    }
    return {
      ...route,
      children: submenu.map(({ path, redirect, template }) => {
        const child = {
          path,
          redirect
        };
        return child;
      })
    };
  });
}

router.beforeEach(async (to, from, next) => {
  iView.LoadingBar.start();
  // If there is not menuList in store, get it first.
  if (store.state.app.dynamicMenuList.length === 0) {
    await store.dispatch("getDynamicMenuList").catch(() => {
      // console.log("Get getMenuList failed, please check this api request!");
      throw Error("Get getMenuList failed, please check this api request!");
      return;
    });
    const dynamicRoutes = generateRoutes(store.state.app.menuList);
    console.log('dynamicRoutes', dynamicRoutes);
    router.addRoutes(dynamicRoutes);
    router.push(to.fullPath);
    next();
  } else {
    if (!store.state.user.userName) {
      store.dispatch("getUserInfo");
    }
    store.commit("setPagePath", to.fullPath);
    next();
  }
});

router.afterEach(() => {
  iView.LoadingBar.finish();
  window.scrollTo(0, 0);
});

export default router;
