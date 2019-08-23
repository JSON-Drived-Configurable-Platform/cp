/**
 * @file 路径配置配置
 * @author wangbing11(wangbing11@baidu.com)
 */

import Main from '../components/main';

const home = () => import(/* webpackChunkName: "home" */ '../page/home');
const start = () => import(/* webpackChunkName: "start" */ '../page/start');
const practice = () => import(/* webpackChunkName: "practice" */ '../page/practice');
const FormGenerator = () => import(/* webpackChunkName: "FormGenerator" */ '../page/doc/FieldGenerator');
const FieldGenerator = () => import(/* webpackChunkName: "FieldGenerator" */ '../page/doc/FieldGenerator');
const Input = () => import(/* webpackChunkName: "Input" */ '../page/doc/Input');
const Radio = () => import(/* webpackChunkName: "Radio" */ '../page/doc/Radio');
const Checkbox = () => import(/* webpackChunkName: "Checkbox" */ '../page/doc/Checkbox');
const Switch = () => import(/* webpackChunkName: "Switch" */ '../page/doc/Switch');
const Select = () => import(/* webpackChunkName: "Select" */ '../page/doc/Select');
const LogicSelect = () => import(/* webpackChunkName: "LogicSelect" */ '../page/doc/LogicSelect');
const DatePicker = () => import(/* webpackChunkName: "DatePicker" */ '../page/doc/DatePicker');
const TimePicker = () => import(/* webpackChunkName: "TimePicker" */ '../page/doc/TimePicker');
const Cascader = () => import(/* webpackChunkName: "Cascader" */ '../page/doc/Cascader');
const InputNumber = () => import(/* webpackChunkName: "InputNumber" */ '../page/doc/InputNumber');
const Upload = () => import(/* webpackChunkName: "Upload" */ '../page/doc/Upload');
const formGeneratorExample = () => import(/* webpackChunkName: "formGeneratorExample" */ '../page/examples/form-generator-example');
const fieldGeneratorExample = () => import(/* webpackChunkName: "fieldGeneratorExample" */ '../page/examples/field-generator-example');

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
                path: '/doc/Checkbox',
                name: 'doc-Checkbox',
                component: Checkbox
            },
            {
                path: '/doc/Switch',
                name: 'doc-Switch',
                component: Switch
            },
            {
                path: '/doc/Select',
                name: 'doc-Select',
                component: Select
            },
            {
                path: '/doc/LogicSelect',
                name: 'doc-LogicSelect',
                component: LogicSelect
            },
            {
                path: '/doc/DatePicker',
                name: 'doc-DatePicker',
                component: DatePicker
            },
            {
                path: '/doc/TimePicker',
                name: 'doc-TimePicker',
                component: TimePicker
            },
            {
                path: '/doc/Cascader',
                name: 'doc-Cascader',
                component: Cascader
            },
            {
                path: '/doc/InputNumber',
                name: 'doc-InputNumber',
                component: InputNumber
            },
            {
                path: '/doc/Upload',
                name: 'doc-Upload',
                component: Upload
            },
            // {
            //     path: '/doc/ImgUpload',
            //     name: 'doc-ImgUpload',
            //     component: ImgUpload
            // },
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
