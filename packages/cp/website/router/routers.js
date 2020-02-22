/**
 * @file 路径配置配置
 * @author wangbing11(wangbing11@baidu.com)
 */

import Main from '../components/main';

const home = () => import(/* webpackChunkName: "home" */ '../page/home');

const start = () => import(/* webpackChunkName: "start" */ '../page/start');

const introduce = () => import(/* webpackChunkName: "introduce" */ '../page/introduce');

const mainTheory = () => import(/* webpackChunkName: "mainTheory" */ '../page/concept/main-theory');
const pluginSystem = () => import(/* webpackChunkName: "scaffoldPlugin" */ '../page/concept/plugin-system');
const templateReuse = () => import(/* webpackChunkName: "templatePlugin" */ '../page/concept/template-reuse');
const jsonDrived = () => import(/* webpackChunkName: "templatePlugin" */ '../page/concept/json-drived');

const createProject = () => import(/* webpackChunkName: "templatePlugin" */ '../page/development/create-project');
const directoryStructure = () => import(/* webpackChunkName: "templatePlugin" */ '../page/development/directory-structure');
const codeQuality = () => import(/* webpackChunkName: "templatePlugin" */ '../page/development/code-quality');
const routerConfig = () => import(/* webpackChunkName: "templatePlugin" */ '../page/development/router-config');
const serviceRegiste = () => import(/* webpackChunkName: "templatePlugin" */ '../page/development/service-registe');
const dataCommunication = () => import(/* webpackChunkName: "templatePlugin" */ '../page/development/data-communication');
const apiProxy = () => import(/* webpackChunkName: "templatePlugin" */ '../page/development/api-proxy');
const apiMock  = () => import(/* webpackChunkName: "templatePlugin" */ '../page/development/api-mock');
const navagateManagement = () => import(/* webpackChunkName: "templatePlugin" */ '../page/development/navagate-management');
const authorityManagement = () => import(/* webpackChunkName: "templatePlugin" */ '../page/development/authority-management');
const layoutSwitch = () => import(/* webpackChunkName: "templatePlugin" */ '../page/development/layout-switch');
const dynamicLoad = () => import(/* webpackChunkName: "templatePlugin" */ '../page/development/dynamic-load');


const basicModules = () => import(/* webpackChunkName: "routerConfig" */ '../page/resources/basic-modules');
const scaffordPlugin = () => import(/* webpackChunkName: "routerConfig" */ '../page/resources/scafford-plugin');
const templatesGallery = () => import(/* webpackChunkName: "routerConfig" */ '../page/resources/templates-gallery');

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
                path: '/development/create-project',
                component: createProject
            },
            {
                path: '/development/directory-structure',
                component: directoryStructure
            },
            {
                path: '/development/code-quality',
                component: codeQuality
            },
            {
                path: '/development/router-config',
                component: routerConfig
            },
            {
                path: '/development/service-registe',
                component: serviceRegiste

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
            {
                path: '/development/navagate-management',
                component: navagateManagement
            },
            {
                path: '/development/authority-management',
                component: authorityManagement
            },
            {
                path: '/development/layout-switch',
                component: layoutSwitch
            },
            {
                path: '/development/dynamic-load',
                component: dynamicLoad
            },
        ]
    },
    {
        path: '/modules',
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
