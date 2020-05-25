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
const InputMultiple = () => import(/* webpackChunkName: "InputMultiple" */ '../page/doc/InputMultiple');
const Radio = () => import(/* webpackChunkName: "Radio" */ '../page/doc/Radio');
const RadioCard = () => import(/* webpackChunkName: "Radio" */ '../page/doc/RadioCard');
const Checkbox = () => import(/* webpackChunkName: "Checkbox" */ '../page/doc/Checkbox');
const CheckboxCard = () => import(/* webpackChunkName: "CheckboxCard" */ '../page/doc/CheckboxCard');
const Switch = () => import(/* webpackChunkName: "Switch" */ '../page/doc/Switch');
const Select = () => import(/* webpackChunkName: "Select" */ '../page/doc/Select');
const LogicSelect = () => import(/* webpackChunkName: "LogicSelect" */ '../page/doc/LogicSelect');
const DatePicker = () => import(/* webpackChunkName: "DatePicker" */ '../page/doc/DatePicker');
const TimePicker = () => import(/* webpackChunkName: "TimePicker" */ '../page/doc/TimePicker');
const TimePickerMultiple = () => import(/* webpackChunkName: "TimePickerMultiple" */ '../page/doc/TimePickerMultiple');
const TimeCycleSelect = () => import(/* webpackChunkName: "TimeCycleSelect" */ '../page/doc/TimeCycleSelect');
const Cascader = () => import(/* webpackChunkName: "Cascader" */ '../page/doc/Cascader');
const InputNumber = () => import(/* webpackChunkName: "InputNumber" */ '../page/doc/InputNumber');
const Upload = () => import(/* webpackChunkName: "Upload" */ '../page/doc/Upload');
const Tag = () => import(/* webpackChunkName: "Tag" */ '../page/doc/Tag');
const Text = () => import(/* webpackChunkName: "Tag" */ '../page/doc/Text');
const Tree = () => import(/* webpackChunkName: "Tag" */ '../page/doc/Tree');
const TableSelect = () => import(/* webpackChunkName: "Tag" */ '../page/doc/TableSelect');
const Carousel = () => import(/* webpackChunkName: "Carousel" */ '../page/doc/Carousel');
const Submit = () => import(/* webpackChunkName: "Submit" */ '../page/doc/Submit');
const Button = () => import(/* webpackChunkName: "Button" */ '../page/doc/Button');
const Reset = () => import(/* webpackChunkName: "Button" */ '../page/doc/Reset');
const Divider = () => import(/* webpackChunkName: "Button" */ '../page/doc/Divider');
const Steps = () => import(/* webpackChunkName: "Button" */ '../page/doc/Steps');
const List = () => import(/* webpackChunkName: "Button" */ '../page/doc/List');
const Slider = () => import(/* webpackChunkName: "Button" */ '../page/doc/Slider');

// development
const componentsChoosen = () => import(/* webpackChunkName: "componentsChoosen" */ '../page/development/components-choosen');
const unionRequest = () => import(/* webpackChunkName: "unionRequest" */ '../page/development/union-request');
const requestInterceptor = () => import(/* webpackChunkName: "componentsChoosen" */ '../page/development/request-interceptor');
const showOnHiddenOn = () => import(/* webpackChunkName: "componentsChoosen" */ '../page/development/showOn-hiddenOn');
const formValidate = () => import(/* webpackChunkName: "componentsChoosen" */ '../page/development/form-validate');
const powerfulFieldGenerator = () => import(/* webpackChunkName: "componentsChoosen" */ '../page/development/powerful-fieldGenerator');

// examples
const groupForm = () => import(/* webpackChunkName: "groupForm" */ '../page/examples/group-form');
const multistageValueForm = () => import(/* webpackChunkName: "multis" */ '../page/examples/multistageValue-form');
const CURDSimpleExample = () => import(/* webpackChunkName: "CURDExample" */ '../page/examples/CURD-example/simple');
const CURDSimpleExampleInlineEdit = () => import(/* webpackChunkName: "CURDExample" */ '../page/examples/CURD-example/inline-edit');

const searchForm = () => import(/* webpackChunkName: "CURDExample" */ '../page/examples/search-form');
const inlineTable = () => import(/* webpackChunkName: "inlineTable" */ '../page/examples/inline-table');
const editableTable = () => import(/* webpackChunkName: "editableTable" */ '../page/examples/editable-table');
const searchableChart = () => import(/* webpackChunkName: "searchableChart" */ '../page/examples/searchable-chart');
const twoRelatedForm = () => import(/* webpackChunkName: "twoRelatedForm" */ '../page/examples/two-related-form');
const auditExample = () => import(/* webpackChunkName: "auditExample" */ '../page/examples/audit/detail');
const dynamicForm = () => import(/* webpackChunkName: "dynamicForm" */ '../page/examples/dynamic-form');
const combinedForms = () => import(/* webpackChunkName: "combinedForms" */ '../page/examples/combined-forms');

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
        path: 'test',
        component: TimePickerMultiple
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
                path: '/doc/InputMultiple',
                name: 'doc-InputMultiple',
                component: InputMultiple
            },
            {
                path: '/doc/Radio',
                name: 'doc-Radio',
                component: Radio
            },
            {
                path: '/doc/RadioCard',
                name: 'doc-RadioCard',
                component: RadioCard
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
                path: '/doc/TimePickerMultiple',
                name: 'doc-TimePickerMultiple',
                component: TimePickerMultiple
            },
            {
                path: '/doc/TimeCycleSelect',
                name: 'doc-TimeCycleSelect',
                component: TimeCycleSelect
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
                path: '/doc/Text',
                name: 'doc-Text',
                component: Text
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
                path: '/doc/Slider',
                name: 'doc-Slider',
                component: Slider
            },
            {
                path: '/doc/Divider',
                name: 'doc-Divider',
                component: Divider
            },

        ],
    },
    {

        path: '/development',
        redirect: '/development/components-choosen',
        component: Main,
        children: [
            {
                path: '/development/components-choosen',
                component: componentsChoosen
            },
            {
                path: '/development/union-request',
                component: unionRequest
            },
            {
                path: '/development/request-interceptor',
                component: requestInterceptor
            },
            {
                path: '/development/showOn-hiddenOn',
                component: showOnHiddenOn
            },
            {
                path: '/development/form-validate',
                component: formValidate
            },
            {
                path: '/development/powerful-fieldGenerator',
                component: powerfulFieldGenerator
            },
        ]
    },
    {

        path: '/examples',
        redirect: '/examples/group-form',
        component: Main,
        children: [
            // examples
            {
                path: '/examples/group-form',
                name: '/examples/group-form',
                component: groupForm
            },
            // mutilValue examples
            {
                path: '/examples/multistageValue-form',
                name: '/examples/multistageValue-form',
                component: multistageValueForm
            },
            {
                path: '/examples/CURD-example',
                redirect: '/examples/CURD-example/simple',
            },
            {
                path: '/examples/CURD-example/simple',
                name: 'CURD-example-simple',
                component: CURDSimpleExample
            },
            {
                path: '/examples/search-form',
                name: '/examples/search-form',
                component: searchForm
            },
            {
                path: '/examples/CURD-example/inline-edit',
                name: 'CURD-example-simple-inline-edit',
                component: CURDSimpleExampleInlineEdit
            },
            {
                path: '/examples/audit-example/detail',
                name: 'audit-example-detail',
                component: auditExample
            },
            {
                path: '/examples/inline-table',
                name: 'inline-table',
                component: inlineTable
            },
            {
                path: '/examples/editable-table',
                name: 'editable-table',
                component: editableTable
            },
            {
                path: '/examples/searchable-chart',
                name: 'searchable-chart',
                component: searchableChart
            },
            {
                path: '/examples/two-related-form',
                name: 'two-related-form',
                component: twoRelatedForm
            },
            {
                path: '/examples/dynamic-form',
                name: 'dynamic-form',
                component: dynamicForm
            },
            {
                path: '/examples/combined-forms',
                name: 'combined-forms',
                component: combinedForms
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
