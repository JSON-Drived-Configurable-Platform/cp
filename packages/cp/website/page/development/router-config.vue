<template>
    <i-article>
        <article>
            <h1>路由配置</h1>
            <inAnchor
                title="静态路由配置"
                h2
            />
            <p>固定的页面路由，可以直接在router/router.js文件里面设置。如下</p>
            <i-code>
                <pre>

{
    path: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../page/index')
}
                </pre>
            </i-code>

            <inAnchor
                title="模板路由配置"
                h2
            />
            <p>如果一个模板被多个页面使用，可以在router/router.js文件里面设置。如下</p>
            <i-code>
                <pre>

[
    // 详情 总库
    {
        path: '/ams/verify/apply/detail/0',
        component: () => import(/* webpackChunkName: "detail" */ '../template/detail/index')
    },
    // 详情 初审
    {
        path: '/ams/verify/apply/detail/1',
        component: () => import(/* webpackChunkName: "detail" */ '../template/detail/index')
    },
    // 详情 复审
    {
        path: '/ams/verify/apply/detail/2',
        component: () => import(/* webpackChunkName: "detail" */ '../template/detail/index')
    }
]
                </pre>
            </i-code>


            <inAnchor
                title="动态路由的支持"
                h2
            />
            <p>路由也可以动态生成。如下代码展示了如何通过接口获取当前用户可访问的页面，然后动态生成路由：</p>
            <i-code>
                <pre>
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
                </pre>
            </i-code>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../components/article';
import inAnchor from '../../components/anchor';
import iCode from '../../components/code';
export default {
    components: {
        iArticle,
        inAnchor,
        iCode
    }
};
</script>

<style lang="less" scoped>
.img-list {
    margin: 20px auto;
    ul {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        li {
            margin: 0 50px;
            text-align: center;
            img {
                margin: 0 auto;
                display: block;
                width: 100%;
            }
            span {
                display: inline-block;
                line-height: 30px;
                font-size: 12px;
            }
        }
    }
}
</style>>
