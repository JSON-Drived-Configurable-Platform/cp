/**
 * @file 路径配置配置
 * @author wangbing11(wangbing11@baidu.com)
 */

import Main from '../components/main';

const home = () => import(/* webpackChunkName: "home" */ '../page/home');
const start = () => import(/* webpackChunkName: "start" */ '../page/start');
const introduce = () => import(/* webpackChunkName: "introduce" */ '../page/introduce');
const mainTheory = () => import(/* webpackChunkName: "mainTheory" */ '../page/concept/main-theory');
const scaffoldPlugin = () => import(/* webpackChunkName: "scaffoldPlugin" */ '../page/concept/scaffold-plugin');
const routerConfig = () => import(/* webpackChunkName: "routerConfig" */ '../page/concept/router-config');
const serviceConfig = () => import(/* webpackChunkName: "serviceConfig" */ '../page/concept/service-config');
const templatePlugin = () => import(/* webpackChunkName: "templatePlugin" */ '../page/concept/template-plugin');
const layoutTemplate = () => import(/* webpackChunkName: "layoutTemplate" */ '../page/concept/layout-template');
const pageTemplate = () => import(/* webpackChunkName: "pageTemplate" */ '../page/concept/page-template');
const templatesGallery = () => import(/* webpackChunkName: "pageTemplate" */ '../page/templates-gallery');
const modules = () => import(/* webpackChunkName: "modules" */ '../page/modules');
const contributeLayoutTemplate = () => import(/* webpackChunkName: "contributeLayoutTemplate" */ '../page/contribute/layout-template');
const contributePageTemplate = () => import(/* webpackChunkName: "contributePageTemplate" */ '../page/contribute/page-template');

export default [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: home
    },
    {
        path: '/doc',
        name: 'doc',
        redirect: '/doc/introduce',
        component: Main,
        children: [
            {
                path: '/doc/introduce',
                name: 'introduce',
                component: introduce
            },
            {
                path: '/doc/start',
                name: 'start',
                component: start
            }
        ]
    },
    {
        path: '/concept',
        name: 'main-theory',
        redirect: '/concept/main-theory',
        component: Main,
        children: [
            {
                path: '/concept/main-theory',
                name: '/concept/main-theory',
                component: mainTheory
            },
            {
                path: '/concept/scaffold-plugin',
                name: 'scaffold-plugin',
                component: scaffoldPlugin
            },
            {

                path: '/concept/template-plugin',
                name: 'template-plugin',
                component: templatePlugin
            },
            {
                path: '/concept/layout-template',
                name: 'layout-template',
                component: layoutTemplate
            },
            {
                path: '/concept/page-template',
                name: 'page-template',
                component: pageTemplate
            },
            {
                path: '/concept/router-config',
                name: 'router-config',
                component: routerConfig
            },
            {
                path: '/concept/service-config',
                name: 'service-config',
                component: serviceConfig
            }
        ]
    },
    {
        path: '/templates-gallery/:tpye',
        name: 'templates-gallery',
        component: templatesGallery
    },
    {
        path: '/modules',
        component: Main,
        children: [
            {
                path: '/modules',
                name: 'modules',
                component: modules,
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
                name: 'contribute-layout-template',
                component: contributeLayoutTemplate,
            },
            {
                path: '/contribute/page-template',
                name: 'contribute-page-template',
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
