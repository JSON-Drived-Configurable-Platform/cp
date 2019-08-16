/**
 * @file 路径配置配置
 * @author wangbing11(wangbing11@baidu.com)
 */

import Main from '../components/main';

import home from '../page/home';
import start from '../page/start';
import doc from '../page/doc';
import practice from '../page/practice';
import formGeneratorExample from '../page/examples/form-generator-example';
import controlGeneratorExample from '../page/examples/control-generator-example';

export default [
    {
        path: '/',
        name: 'home',
        redirect: '/home',
        component: Main,
        children: [
            {
                path: '/home',
                name: 'home',
                component: home
            },
            {
                path: '/start',
                name: 'start',
                component: start
            },
            {
                path: '/practice',
                name: 'practice',
                component: practice
            },
            {
                path: '/doc',
                name: 'app',
                component: doc
            },
            {
                path: '/form-generator-example',
                name: 'data',
                component: formGeneratorExample
            },
            {
                path: '/control-generator-example',
                name: 'data',
                component: controlGeneratorExample
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
