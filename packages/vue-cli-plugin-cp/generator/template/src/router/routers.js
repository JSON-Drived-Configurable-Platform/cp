/**
 * @file 路径配置配置
 * @author wangbing11(wangbing11@baidu.com)
 */

import Main from "../components/layout/default";

const home = () => import(/* webpackChunkName: "home" */ "../page/home");
const groupForm = () =>
  import(/* webpackChunkName: "groupForm" */ "../page/examples/group-form");
const CURDExample = () =>
  import(/* webpackChunkName: "CURDExample" */ "../page/examples/CURD-example");
const editableTable = () =>
  import(
    /* webpackChunkName: "editableTable" */ "../page/examples/editable-table"
  );

export default [
  {
    path: "/",
    name: "home",
    redirect: "/home",
    component: Main,
    children: [
      {
        path: "/home",
        name: "home",
        component: home
      },
      {
        path: "/group-form",
        name: "group-form",
        component: groupForm
      },
      {
        path: "/CURD-example",
        name: "CURD-example",
        component: CURDExample
      },
      {
        path: "/editable-table",
        name: "editable-table",
        component: editableTable
      }
    ]
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
