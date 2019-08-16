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
    title: 'form-generator-iview',

    /**
     * @description api请求基础路径
     */
    baseUrl: baseUrlMap[process.env.NODE_ENV],

    /**
     * @description 默认打开的首页的路由name值，默认为home
     */
    homeName: 'home',

    menuList: [
        {
            label: 'Home',
            name: '/home'
        },
        {
            label: 'Start',
            name: '/start'
        },
        {
            label: 'Practice && Thoughts',
            name: '/practice'
        },
        {
            label: 'Document',
            name: '/doc'
        },
        {
            label: 'Examples',
            name: '/doc',
            submenu: [
                {
                    label: 'Form Generator',
                    name: '/form-generator-example'
                },
                {
                    label: 'Control Generator',
                    name: '/control-generator-example'
                },
            ]
        },
    ]
};
