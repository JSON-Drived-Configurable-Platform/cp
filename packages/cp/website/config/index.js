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

    defaultOpenNames: ['/doc', '/concept', '/development', '/resources', '/contribute'],

    menuList: [
        {
            label: '简介',
            // label: 'Introduce',
            name: '/doc/introduce'
        },
        {
            label: '快速开始',
            // label: 'Quick Start',
            name: '/doc/start'
        },
        {
            label: '概念',
            // label: 'Concept',
            name: '/concept',
            submenu: [
                {
                    label: '主要原理',
                    name: '/concept/main-theory',
                },
                {
                    label: 'JSON配置化',
                    name: '/concept/json-drived',
                },
                {
                    label: '模板复用',
                    name: '/concept/template-reuse',
                },
                {
                    label: '插件机制',
                    name: '/concept/plugin-system',
                },
            ]
        },
        {
            label: '开发',
            // label: 'Concept',
            name: '/development',
            submenu: [
                {
                    label: '创建项目',
                    name: '/development/create-project',
                },
                {
                    label: '目录结构',
                    name: '/development/directory-structure',
                },
                {
                    label: '代码质量',
                    name: '/development/code-quality',
                },
                {
                    label: '路由配置',
                    name: '/development/router-config',
                },
                {
                    label: '服务注册',
                    name: '/development/service-registe',
                },
                {
                    label: '数据通信',
                    name: '/development/data-communication',
                },
                {
                    label: '接口代理',
                    name: '/development/api-proxy',
                },
                {
                    label: '接口模拟',
                    name: '/development/api-mock',
                },
                {
                    label: '导航管理',
                    name: '/development/navagate-management',
                },
                {
                    label: '权限管理',
                    name: '/development/authority-management',
                },
                {
                    label: '主题切换',
                    name: '/development/layout-switch',
                },
                {
                    label: '动态加载',
                    name: '/development/dynamic-load',
                },
            ]
        },
        {
            label: '资源',
            name: '/resources',
            submenu: [
                {
                    label: '基础模块',
                    name: '/resources/basic-modules'
                },
                {
                    label: '脚手架插件',
                    name: '/resources/scafford-plugin',
                },
                {
                    label: '模板汇总',
                    name: '/resources/templates-gallery',
                }
            ]
        },
        {
            label: '贡献',
            name: '/contribute',
            submenu: [
                {
                    label: '主题模板贡献',
                    name: '/contribute/layout-template',
                },
                {
                    label: '页面模板贡献',
                    name: '/contribute/page-template',
                }
            ]
        },
    ]
};
