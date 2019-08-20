/**
 * @file 路径配置配置
 * @author wangbing11(wangbing11@baidu.com)
 */

import Main from '../components/main';

import home from '../page/home';
import start from '../page/start';

import practice from '../page/practice';
import formGeneratorExample from '../page/examples/form-generator-example';
import fieldGeneratorExample from '../page/examples/field-generator-example';
import FormGenerator from '../page/doc/FormGenerator';
import FieldGenerator from '../page/doc/FieldGenerator';
import Input from '../page/doc/Input';
import Radio from '../page/doc/Radio';
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
                redirect: '/doc/FormGenerator',
                name: 'doc',
            },
            {
                path: '/doc/FormGenerator',
                name: 'doc-FormGenerator',
                component: FormGenerator
            },
            {
                path: '/doc/FieldGenerator',
                name: 'doc-FieldGenerator',
                component: FieldGenerator
            },
            {
                path: '/doc/Input',
                name: 'doc-Input',
                component: Input
            },
            {
                path: '/doc/Radio',
                name: 'doc-Radio',
                component: Radio
            },
            {
                path: '/form-generator-example',
                name: 'data',
                component: formGeneratorExample
            },
            {
                path: '/field-generator-example',
                name: 'data',
                component: fieldGeneratorExample
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
