/**
 * @file 路径配置配置
 * @author wangbing11(wangbing11@baidu.com)
 */

import Main from '../components/main';

import home from '../page/home';

const intro = () => import(/* webpackChunkName: "start" */ '../page/intro');
const practice = () => import(/* webpackChunkName: "practice" */ '../page/practice');
// doc-com
const DataVis = () => import(/* webpackChunkName: "practice" */ '../page/doc/DataVis');
const DataVisItem = () => import(/* webpackChunkName: "practice" */ '../page/doc/DataVisItem');
// examples
// const simple = () => import(/* webpackChunkName: "simple" */ '../page/examples/simple');
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
                path: '/intro',
                name: 'intro',
                component: intro
            },
            {
                path: '/practice',
                name: 'practice',
                component: practice
            },
            // doc
            {
                path: '/doc',
                redirect: '/doc/DataVis',
            },
            {
                path: '/doc/DataVis',
                name: '/doc/DataVis',
                component: DataVis
            },
            {
                path: '/doc/DataVisItem',
                name: '/doc/DataVisItem',
                component: DataVisItem
            },

            // example
            {
                path: '/simple',
                name: 'examples-simple',
                component: home
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
