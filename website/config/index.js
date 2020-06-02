/* eslint-disable no-undef */
/**
 * @file 路径配置配置
 * @author wangbing11(wangbing11@baidu.com)
 */

const baseUrlMap = {
    development: '',
    test: '',
    production: ''
};

export default {
    /**
     * @description 配置显示在浏览器标签的title
     */
    title: 'Form Generator IView',

    /**
     * @description api请求基础路径
     */
    baseUrl: baseUrlMap[process.env.NODE_ENV],

    /**
     * @description 默认打开的首页的路由name值，默认为home
     */
    homeName: 'home',

    defaultOpenNames: ['/doc'],

    menuList: [
        // {
        //     label: 'Home',
        //     name: '/home'
        // },
        {
            label: 'Intro',
            name: '/intro'
        },
        {
            label: 'Practice && Thoughts',
            name: '/practice'
        },
        {
            label: 'Config Document',
            name: '/doc',
            submenu: [
                {
                    label: 'FormGenerator',
                    name: '/doc/FormGenerator'
                },
                {
                    label: 'FieldGenerator',
                    name: '/doc/FieldGenerator'
                },
                {
                    label: 'Input',
                    name: '/doc/Input'
                },
                {
                    label: 'Slider',
                    name: '/doc/Slider'
                },
                {
                    label: 'InputMultiple',
                    name: '/doc/InputMultiple'
                },
                {
                    label: 'Radio',
                    name: '/doc/Radio'
                },
                {
                    label: 'Checkbox',
                    name: '/doc/Checkbox'
                },
                {
                    label: 'CheckboxCard',
                    name: '/doc/CheckboxCard'
                },
                {
                    label: 'RadioCard',
                    name: '/doc/RadioCard'
                },
                {
                    label: 'Switch',
                    name: '/doc/Switch'
                },
                {
                    label: 'Select',
                    name: '/doc/Select'
                },
                {
                    label: 'LogicSelect',
                    name: '/doc/LogicSelect'
                },
                {
                    label: 'DatePicker',
                    name: '/doc/DatePicker'
                },
                {
                    label: 'TimePicker',
                    name: '/doc/TimePicker'
                },
                {
                    label: 'TimePickerMultiple',
                    name: '/doc/TimePickerMultiple'
                },
                {
                    label: 'TimeCycleSelect',
                    name: '/doc/TimeCycleSelect'
                },
                {
                    label: 'Cascader',
                    name: '/doc/Cascader'
                },
                {
                    label: 'InputNumber',
                    name: '/doc/InputNumber'
                },
                {
                    label: 'Upload',
                    name: '/doc/Upload'
                },
                {
                    label: 'Tag',
                    name: '/doc/Tag'
                },
                {
                    label: 'Tree',
                    name: '/doc/Tree'
                },
                {
                    label: 'Text',
                    name: '/doc/Text'
                },
                {
                    label: 'TableSelect',
                    name: '/doc/TableSelect'
                },
                {
                    label: 'Carousel',
                    name: '/doc/Carousel'
                },
                {
                    label: 'Submit',
                    name: '/doc/Submit'
                },
                {
                    label: 'Reset',
                    name: '/doc/Reset'
                },
                {
                    label: 'Button',
                    name: '/doc/Button'
                },
                {
                    label: 'Divider',
                    name: '/doc/Divider'
                },
                {
                    label: 'Steps',
                    name: '/doc/Steps'
                },
                {
                    label: 'List',
                    name: '/doc/List'
                },
                // {
                //     label: 'ImgUpload',
                //     name: '/doc/ImgUpload'
                // },
            ]
        },
        {
            label: 'Development',
            name: '/development',
            submenu: [
                {
                    label: 'Components Choosen',
                    name: '/development/components-choosen'
                },
                {
                    label: 'Union Request',
                    name: '/development/union-request'
                },
                {
                    label: 'Request Interceptor',
                    name: '/development/request-interceptor'
                },
                {
                    label: 'ShowOn HiddenOn',
                    name: '/development/showOn-hiddenOn'
                },
                {
                    label: 'Form Validate',
                    name: '/development/form-validate'
                },
                {
                    label: 'Powerful FieldGenerator',
                    name: '/development/powerful-fieldGenerator'
                },
            ]
        },
        {
            label: 'Examples',
            name: '/examples',
            submenu: [
                {
                    label: 'Group Form',
                    name: '/examples/group-form'
                },
                {
                    label: 'MultiStageValue Form',
                    name: '/examples/MultiStageValue-form'
                },
                {
                    label: 'CURD Simple',
                    name: '/examples/CURD-example/simple'
                },
                {
                    label: 'CURD Inlint Edit',
                    name: '/examples/CURD-example/inline-edit'
                },
                {
                    label: 'Audit Detail',
                    name: '/examples/Audit-example/detail'
                },
                {
                    label: 'Search Form',
                    name: '/examples/search-form'
                },
                {
                    label: 'Editable-Table',
                    name: '/examples/editable-table'
                },
                {
                    label: 'Inline-Table',
                    name: '/examples/inline-table'
                },
                {
                    label: 'Searchable-Chart',
                    name: '/examples/searchable-chart'
                },
                {
                    label: 'Two-Related-Form',
                    name: '/examples/two-related-form'
                },
                {
                    label: 'Dynamic-Form',
                    name: '/examples/dynamic-form'
                },
                {
                    label: 'Combined-Forms',
                    name: '/examples/combined-forms'
                },

            ]
        },
    ]
};
