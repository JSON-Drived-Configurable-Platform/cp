/**
 * @file 路径配置配置
 * @author wangbing11(wangbing11@baidu.com)
 */

import Main from '../components/main';

import formGeneratorExample from '../page/form-generator-example';
import controlGeneratorExample from '../page/control-generator-example';
import doc from '../page/doc';

export default [
    {
        path: '/',
        name: 'home',
        redirect: '/form-generator-example',
        component: Main,
        children: [
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
            {
                path: '/doc',
                name: 'app',
                component: doc
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
