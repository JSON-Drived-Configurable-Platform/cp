/**
 * @file 路径配置配置
 * @author wangbing11(wangbing11@baidu.com)
 */

import Main from "../components/layout/default";

const routersContext = require.context("../page/", true, /router\.js$/);
const routers = routersContext.keys().map(key => {
  return routersContext(key).default;
});

console.log('routers', routers);

export default [
  {
    path: "/",
    redirect: "/home",
    component: Main,
    children: [...[].concat(...routers)]
  }
];
