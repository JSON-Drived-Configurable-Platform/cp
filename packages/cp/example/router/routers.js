/**
 * @file 路径配置配置
 * @author wangbing11(wangbing11@baidu.com)
 */

import Main from '../components/main';

import home from '../page/home';
import doc from '../page/doc';
import basicTemplates from '../page/basic-templates';
import componentTools from '../page/component-tools';
import queryConditionsGenerator from '../page/component-tools/query-conditions-generator';
import templatesGallery from '../page/templates-gallery';

export default [
    {
        path: '/',
        name: 'home',
        redirect: '/home',
        component: Main,
        children: [
            {
                path: '/home',
                name: 'data',
                component: home
            },
            {
                path: '/doc',
                name: 'app',
                component: doc
            },
            {
                path: '/basic-templates',
                name: 'basic-templates',
                component: basicTemplates
            },
            {
                path: '/component-tools',
                name: 'component-tools',
                component: componentTools
            },
            {
                path: '/component-tools/query-conditions-generator',
                name: 'query-conditions-generator',
                component: queryConditionsGenerator
            },
            {
                path: '/templates-gallery',
                name: 'templates-gallery',
                component: templatesGallery
            },
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
