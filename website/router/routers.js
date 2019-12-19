/**
 * @file 路径配置配置
 * @author wangbing11(wangbing11@baidu.com)
 */

import Main from '../components/main';

const home = () => import(/* webpackChunkName: "home" */ '../page/home');
const intro = () => import(/* webpackChunkName: "start" */ '../page/intro');
const practice = () => import(/* webpackChunkName: "practice" */ '../page/practice');
const FormGenerator = () => import(/* webpackChunkName: "FormGenerator" */ '../page/doc/FormGenerator');
const FieldGenerator = () => import(/* webpackChunkName: "FieldGenerator" */ '../page/doc/FieldGenerator');
const Input = () => import(/* webpackChunkName: "Input" */ '../page/doc/Input');
const Radio = () => import(/* webpackChunkName: "Radio" */ '../page/doc/Radio');
const Checkbox = () => import(/* webpackChunkName: "Checkbox" */ '../page/doc/Checkbox');
const CheckboxCard = () => import(/* webpackChunkName: "CheckboxCard" */ '../page/doc/CheckboxCard');
const Switch = () => import(/* webpackChunkName: "Switch" */ '../page/doc/Switch');
const Select = () => import(/* webpackChunkName: "Select" */ '../page/doc/Select');
const LogicSelect = () => import(/* webpackChunkName: "LogicSelect" */ '../page/doc/LogicSelect');
const DatePicker = () => import(/* webpackChunkName: "DatePicker" */ '../page/doc/DatePicker');
const TimePicker = () => import(/* webpackChunkName: "TimePicker" */ '../page/doc/TimePicker');
const Cascader = () => import(/* webpackChunkName: "Cascader" */ '../page/doc/Cascader');
const InputNumber = () => import(/* webpackChunkName: "InputNumber" */ '../page/doc/InputNumber');
const Upload = () => import(/* webpackChunkName: "Upload" */ '../page/doc/Upload');
const Tag = () => import(/* webpackChunkName: "Tag" */ '../page/doc/Tag');
const Tree = () => import(/* webpackChunkName: "Tag" */ '../page/doc/Tree');
const TableSelect = () => import(/* webpackChunkName: "Tag" */ '../page/doc/TableSelect');
const Carousel = () => import(/* webpackChunkName: "Carousel" */ '../page/doc/Carousel');
const Submit = () => import(/* webpackChunkName: "Submit" */ '../page/doc/Submit');
const Button = () => import(/* webpackChunkName: "Button" */ '../page/doc/Button');
const Reset = () => import(/* webpackChunkName: "Button" */ '../page/doc/Reset');
const Divider = () => import(/* webpackChunkName: "Button" */ '../page/doc/Divider');
const Steps = () => import(/* webpackChunkName: "Button" */ '../page/doc/Steps');
const List = () => import(/* webpackChunkName: "Button" */ '../page/doc/List');
// examples
const groupForm = () => import(/* webpackChunkName: "groupForm" */ '../page/examples/group-form');
const CURDSimpleExample = () => import(/* webpackChunkName: "CURDExample" */ '../page/examples/CURD-example/simple');
const CURDSimpleExampleInlineEdit = () => import(/* webpackChunkName: "CURDExample" */ '../page/examples/CURD-example/inline-edit');
const inlineTable = () => import(/* webpackChunkName: "inlineTable" */ '../page/examples/inline-table');
const editableTable = () => import(/* webpackChunkName: "editableTable" */ '../page/examples/editable-table');
const searchableChart = () => import(/* webpackChunkName: "searchableChart" */ '../page/examples/searchable-chart');
const twoRelatedForm = () => import(/* webpackChunkName: "twoRelatedForm" */ '../page/examples/two-related-form');
const auditExample = () => import(/* webpackChunkName: "auditExample" */ '../page/examples/audit/detail');

export default [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'home',
        component: home
    },
    {

        path: '/doc',
        redirect: '/doc/FormGenerator',
        component: Main,
        children: [
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
                path: '/doc/CheckboxCard',
                name: 'doc-CheckboxCard',
                component: CheckboxCard
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
                path: '/doc/Tag',
                name: 'doc-Tag',
                component: Tag
            },
            {
                path: '/doc/Tree',
                name: 'doc-Tree',
                component: Tree
            },
            {
                path: '/doc/TableSelect',
                name: 'doc-TableSelect',
                component: TableSelect
            },
            {
                path: '/doc/Carousel',
                name: 'doc-Carousel',
                component: Carousel
            },
            {
                path: '/doc/Submit',
                name: 'doc-Submit',
                component: Submit
            },
            {
                path: '/doc/Button',
                name: 'doc-Button',
                component: Button
            },
            {
                path: '/doc/Reset',
                name: 'doc-Reset',
                component: Reset
            },
            {
                path: '/doc/Steps',
                name: 'doc-Steps',
                component: Steps
            },
            {
                path: '/doc/List',
                name: 'doc-List',
                component: List
            },
            {
                path: '/doc/Divider',
                name: 'doc-Divider',
                component: Divider
            },
            // examples
            {
                path: '/group-form',
                name: 'group-form',
                component: groupForm
            },
            {
                path: '/CURD-example',
                redirect: '/CURD-example/simple',
            },
            {
                path: '/CURD-example/simple',
                name: 'CURD-example-simple',
                component: CURDSimpleExample
            },
            {
                path: '/CURD-example/inline-edit',
                name: 'CURD-example-simple-inline-edit',
                component: CURDSimpleExampleInlineEdit
            },
            {
                path: '/audit-example/detail',
                name: 'audit-example-detail',
                component: auditExample
            },
            {
                path: '/inline-table',
                name: 'inline-table',
                component: inlineTable
            },
            {
                path: '/editable-table',
                name: 'editable-table',
                component: editableTable
            },
            {
                path: '/searchable-chart',
                name: 'searchable-chart',
                component: searchableChart
            },
            {
                path: '/two-related-form',
                name: 'two-related-form',
                component: twoRelatedForm
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
