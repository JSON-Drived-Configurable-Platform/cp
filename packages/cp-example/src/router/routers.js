/**
 * @file 路径配置配置
 * @author wangbing11(wangbing11@baidu.com)
 */

import Main from "../components/layout/default";

const routersContext = require.context("../page/", true, /router\.js$/);
const routers = routersContext.keys().map(key => {
  return routersContext(key).default;
});

export default [
  {
    path: "/",
    redirect: "/home",
    component: Main,
    children: [...[].concat(...routers)]
  }
  // {
  //     path: '/401',
  //     name: 'error_401',
  //     meta: {
  //         hideInMenu: true
  //     },
  //     component: () => import('@/view/error-strategy/401.vue')
  // },
  // {
  //     path: '/500',
  //     name: 'error_500',
  //     meta: {
  //         hideInMenu: true
  //     },
  //     component: () => import('@/view/error-page/500.vue')
  // },
  // {
  //     path: '*',
  //     name: 'error_404',
  //     meta: {
  //         hideInMenu: true
  //     },
  //     component: () => import('@/view/error-page/404.vue')
  // }
];
