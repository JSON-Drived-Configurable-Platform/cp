/**
 * @file 路径配置配置
 * @author wangbing11(wangbing11@baidu.com)
 */

import Main from '../components/main';

// import home from '../page/home';
// import start from '../page/start';
// import practice from '../page/practice';

// import FormGenerator from '../page/doc/FormGenerator';
// import FieldGenerator from '../page/doc/FieldGenerator';
// import Input from '../page/doc/Input';
// import Radio from '../page/doc/Radio';
// import Checkbox from '../page/doc/Checkbox';
// import Switch from '../page/doc/Switch';

// import formGeneratorExample from '../page/examples/form-generator-example';
// import fieldGeneratorExample from '../page/examples/field-generator-example';

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
                component: (resolve) => require(['../page/home'], resolve)
            },
            {
                path: '/start',
                name: 'start',
                component: (resolve) => require(['../page/start'], resolve)
            },
            {
                path: '/practice',
                name: 'practice',
                component: (resolve) => require(['../page/practice'], resolve)
            },
            {
                path: '/doc',
                redirect: '/doc/FormGenerator',
                name: 'doc',
            },
            {
                path: '/doc/FormGenerator',
                name: 'doc-FormGenerator',
                component: (resolve) => require(['../page/doc/FormGenerator'], resolve)
            },
            {
                path: '/doc/FieldGenerator',
                name: 'doc-FieldGenerator',
                component: (resolve) => require(['../page/doc/FieldGenerator'], resolve)
            },
            {
                path: '/doc/Input',
                name: 'doc-Input',
                component: (resolve) => require(['../page/doc/Input'], resolve)
            },
            {
                path: '/doc/Radio',
                name: 'doc-Radio',
                component: (resolve) => require(['../page/doc/Radio'], resolve)
            },
            {
                path: '/doc/Checkbox',
                name: 'doc-Checkbox',
                component: (resolve) => require(['../page/doc/Checkbox'], resolve)
            },
            {
                path: '/doc/Switch',
                name: 'doc-Switch',
                component: (resolve) => require(['../page/doc/Switch'], resolve)
            },
            {
                path: '/doc/Select',
                name: 'doc-Select',
                component: (resolve) => require(['../page/doc/Select'], resolve)
            },
            {
                path: '/doc/DatePicker',
                name: 'doc-DatePicker',
                component: (resolve) => require(['../page/doc/DatePicker'], resolve)
            },
            {
                path: '/form-generator-example',
                name: 'data',
                component: (resolve) => require(['../page/examples/form-generator-example'], resolve)
            },
            {
                path: '/field-generator-example',
                name: 'data',
                component: (resolve) => require(['../page/examples/field-generator-example'], resolve)
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
