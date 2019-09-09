/**
 * @file 路径配置配置
 * @author wangbing11(wangbing11@baidu.com)
 */

import Main from '../components/main';

const home = () => import(/* webpackChunkName: "home" */ '../page/home');
const start = () => import(/* webpackChunkName: "start" */ '../page/start');
const practice = () => import(/* webpackChunkName: "practice" */ '../page/practice');

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
