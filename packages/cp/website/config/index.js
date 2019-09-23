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
                    label: 'Scaffold Plugin',
                    name: '/concept/scaffold-plugin',
                },
                {
                    label: 'Template Plugin',
                    name: '/concept/template-plugin',
                },
                {
                    label: 'Router Config',
                    name: '/concept/router-config',
                },
                {
                    label: 'Service Config',
                    name: '/concept/service-config',
                },
                {
                    label: 'Layout Templates',
                    name: '/concept/layout-template',
                },
                {
                    label: 'Page Templates',
                    name: '/concept/page-template',
                },
            ]
        },
        {
            label: 'Templates Gallery',
            name: '/templates-gallery',
            submenu: [
                {
                    label: 'Layout Templates',
                    name: '/templates-gallery/layout',
                },
                {
                    label: 'Page Templates',
                    name: '/templates-gallery/page',
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
                    label: 'Layout Template',
                    name: '/contribute/layout-template',
                },
                {
                    label: 'Page Template',
                    name: '/contribute/page-template',
                }
            ]
        },
    ]
};
