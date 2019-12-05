import Vue from "vue";
import Router from "vue-router";
import initialRoutes from "./routers";
import store from "../store";
import iView from "iview";
import Main from "../components/layout/default";

Vue.use(Router);

const router = new Router({
  mode: "hash",
  routes: initialRoutes
});

const templateToComponent = {
  "template-curd": () =>
    import(/* webpackChunkName: "data-report" */ "../template/curd"),
  "template-data-report": () =>
    import(/* webpackChunkName: "curd" */ "../template/data-report")
};

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
        if (template) {
          child.component = templateToComponent[template];
        }
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
      // 重试
      console.log("Get getMenuList failed, please check this api request!");
      return;
    });
    const dynamicRoutes = generateRoutes(store.state.app.menuList);
    router.addRoutes(dynamicRoutes);
    router.push(to.fullPath);
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

// [
//   {
//     path: "/data",
//     redirect: "/data/general",
//     component: Main,
//     children: [
//       {
//         path: "/data/:pageId",
//         component: () =>
//           import(
//             /* webpackChunkName: "data-report" */ "../template/data-report"
//           )
//       }
//     ]
//   },
//   {
//     path: "/curd",
//     redirect: "/data/user",
//     component: () =>
//       import(
//         /* webpackChunkName: "data-report" */ "../components/layout/default/"
//       ),
//     children: [
//       {
//         path: "/curd/:pageId",
//         component: () =>
//           import(/* webpackChunkName: "curd" */ "../template/curd")
//       }
//     ]
//   }
// ]
