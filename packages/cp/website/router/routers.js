/**
 * @file 路径配置配置
 * @author wangbing11(wangbing11@baidu.com)
 */

import Main from '../components/main';

const home = () => import(/* webpackChunkName: "home" */ '../page/home');

const start = () => import(/* webpackChunkName: "start" */ '../page/start');

const introduce = () => import(/* webpackChunkName: "introduce" */ '../page/introduce');

const mainTheory = () => import(/* webpackChunkName: "mainTheory" */ '../page/concept/main-theory');
const pluginSystem = () => import(/* webpackChunkName: "pluginSystem" */ '../page/concept/plugin-system');
const templateReuse = () => import(/* webpackChunkName: "templateReuse" */ '../page/concept/template-reuse');
const jsonDrived = () => import(/* webpackChunkName: "jsonDrived" */ '../page/concept/json-drived');

const directoryStructure = () => import(/* webpackChunkName: "directoryStructure" */ '../page/development/directory-structure');
const createProject = () => import(/* webpackChunkName: "createProject" */ '../page/development/create-project');
const routerConfig = () => import(/* webpackChunkName: "routerConfig" */ '../page/development/router-config');
const dataCommunication = () => import(/* webpackChunkName: "dataCommunication" */ '../page/development/data-communication');
const apiProxy = () => import(/* webpackChunkName: "apiProxy" */ '../page/development/api-proxy');
const apiMock  = () => import(/* webpackChunkName: "apiMock" */ '../page/development/api-mock');

const codeQuality = () => import(/* webpackChunkName: "codeQuality" */ '../page/practice-guide/code-quality');
const navagateManagement = () => import(/* webpackChunkName: "navagateManagement" */ '../page/practice-guide/navagate-management');
const authorityManagement = () => import(/* webpackChunkName: "authorityManagement" */ '../page/practice-guide/authority-management');
const layoutSwitch = () => import(/* webpackChunkName: "layoutSwitch" */ '../page/practice-guide/layout-switch');
const dynamicLoad = () => import(/* webpackChunkName: "dynamicLoad" */ '../page/practice-guide/dynamic-load');


const basicModules = () => import(/* webpackChunkName: "basicModules" */ '../page/resources/basic-modules');
const scaffordPlugin = () => import(/* webpackChunkName: "scaffordPlugin" */ '../page/resources/scafford-plugin');
const templatesGallery = () => import(/* webpackChunkName: "templatesGallery" */ '../page/resources/templates-gallery');

const contributeLayoutTemplate = () => import(/* webpackChunkName: "contributeLayoutTemplate" */ '../page/contribute/layout-template');
const contributePageTemplate = () => import(/* webpackChunkName: "contributePageTemplate" */ '../page/contribute/page-template');

export default [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/doc',
        redirect: '/doc/introduce',
        component: Main,
        children: [
            {
                path: '/doc/introduce',
                component: introduce
            },
            {
                path: '/doc/start',
                component: start
            }
        ]
    },
    {
        path: '/concept',
        redirect: '/concept/main-theory',
        component: Main,
        children: [
            {
                path: '/concept/main-theory',
                component: mainTheory
            },
            {
                path: '/concept/plugin-system',
                component: pluginSystem
            },
            {

                path: '/concept/template-reuse',
                component: templateReuse
            },
            {

                path: '/concept/json-drived',
                component: jsonDrived
            }

        ]
    },
    {
        path: '/development',
        redirect: '/development/create-project',
        component: Main,
        children: [
            {
                path: '/development/directory-structure',
                component: directoryStructure
            },
            {
                path: '/development/create-project',
                component: createProject
            },
            {
                path: '/development/router-config',
                component: routerConfig
            },
            {
                path: '/development/data-communication',
                component: dataCommunication
            },
            {
                path: '/development/api-proxy',
                component: apiProxy
            },
            {
                path: '/development/api-mock',
                component: apiMock
            },
        ]
    },
    {
        path: '/practice-guide',
        redirect: '/practice-guide/code-quality',
        component: Main,
        children: [
            {
                path: '/practice-guide/code-quality',
                component: codeQuality
            },
            {
                path: '/practice-guide/navagate-management',
                component: navagateManagement
            },
            {
                path: '/practice-guide/authority-management',
                component: authorityManagement
            },
            {
                path: '/practice-guide/layout-switch',
                component: layoutSwitch
            },
            {
                path: '/practice-guide/dynamic-load',
                component: dynamicLoad
            },
        ]
    },
    {
        path: '/resources',
        redirect: '/resources/basic-modules',
        component: Main,
        children: [
            {
                path: '/resources/basic-modules',
                component: basicModules,
            },
            {
                path: '/resources/scafford-plugin',
                component: scaffordPlugin,
            },
            {
                path: '/resources/templates-gallery',
                component: templatesGallery,
            }
        ]
    },
    {
        path: '/contribute',
        redirect: '/contribute/layout-template',
        component: Main,
        children: [
            {
                path: '/contribute/layout-template',
                component: contributeLayoutTemplate,
            },
            {
                path: '/contribute/page-template',
                component: contributePageTemplate,
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
