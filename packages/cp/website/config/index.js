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

    defaultOpenNames: ['/doc', '/concept', '/contribute'],

    menuList: [
        {
            label: 'Introduce',
            name: '/doc/introduce'
        },
        {
            label: 'Quick Start',
            name: '/doc/start'
        },
        {
            label: 'Concept',
            name: '/concept',
            submenu: [
                {
                    label: 'Main Theory',
                    name: '/concept/main-theory',
                },
                {
                    label: 'Basic Plugin',
                    name: '/concept/basic-plugin',
                },
                {
                    label: 'Layout',
                    name: '/concept/layout',
                },
                {
                    label: 'Routers',
                    name: '/concept/routers',
                },
                {
                    label: 'Services',
                    name: '/concept/services',
                },
                {
                    label: 'Template Plugin',
                    name: '/concept/template-plugin',
                }
            ]
        },
        {
            label: 'Templates',
            name: '/templates',
            submenu: [
                {
                    label: 'Layout Templates',
                    name: '/templates/layout-templates',
                },
                {
                    label: 'Page Templates',
                    name: '/templates/page-templates',
                }
            ]
        },
        {
            label: 'Modules',
            name: '/modules',
        },
        {
            label: 'Contribute',
            name: '/contribute',
            submenu: [
                {
                    label: 'Contribute A Layout',
                    name: '/concept/contribute-layout',
                },
                {
                    label: 'Contribute A Template',
                    name: '/concept/contribute-template',
                }
            ]
        },
    ]
};
