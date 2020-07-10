/**
 * @file 路径配置配置
 * @author wangbing11(wangbing11@baidu.com)
 */

import Vue from 'vue';
import Router from 'vue-router';
import routes from './routers';
import store from '../store';
import iView from 'view-design';
Vue.use(Router);

const router = new Router({
    routes,
    mode: 'hash'
});

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    store.commit('setPagePath', to.fullPath);
    next();
});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

export default router;
