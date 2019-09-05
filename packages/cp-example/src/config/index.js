/* eslint-disable no-undef */
/**
 * @file 路径配置配置
 * @author wangbing11(wangbing11@baidu.com)
 */

const baseUrlMap = {
  development: "",
  test: "",
  production: ""
};

export default {
  /**
   * @description 配置显示在浏览器标签的title
   */
  title: "cp-example",

  /**
   * @description api请求基础路径
   */
  baseUrl: baseUrlMap[process.env.NODE_ENV],

  /**
   * @description 默认打开的首页的路由name值，默认为home
   */
  homeName: "home",

  defaultOpenNames: "/doc",

  menuList: [
    {
      label: "Home",
      path: "/home"
    },
    {
      label: "Data Report",
      path: "/data-report"
    }
  ]
};
