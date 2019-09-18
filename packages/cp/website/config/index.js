/* eslint-disable no-undef */
/**
 * @file 路径配置配置
 * @author wangbing11(wangbing11@baidu.com)
 */

const baseUrlMap = {
    development: '',
    test: '',
    production: ''
};

export default {
    /**
     * @description 配置显示在浏览器标签的title
     */
    title: 'Configurable Platform',

    /**
     * @description api请求基础路径
     */
    baseUrl: baseUrlMap[process.env.NODE_ENV],

    /**
     * @description 默认打开的首页的路由name值，默认为home
     */
    homeName: 'home',

    defaultOpenNames: '/doc',

    menuList: [
        {
            label: 'Home',
            name: '/home'
        },
        {
            label: 'Introduce',
            name: '/introduce'
        },
        {
            label: 'Quick Start',
            name: '/start'
        }
        // {
        //     label: 'Concept',
        //     name: '/concept',
        //     submenu: [
        //         {
        //             label: 'Basic Plugin',
        //             name: '/basic-plugin',
        //         },
        //         {
        //             label: 'Template Plugin',
        //             name: '/template-plugin',
        //         }
        //     ]
        // },
        // {
        //     label: 'Practice && Thoughts',
        //     name: '/practice'
        // },
    ]
};
