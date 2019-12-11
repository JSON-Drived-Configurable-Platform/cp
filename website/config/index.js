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

    defaultOpenNames: ['/doc', '/examples'],

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
                // {
                //     label: 'ImgUpload',
                //     name: '/doc/ImgUpload'
                // },
            ]
        },
        {
            label: 'Examples',
            name: '/examples',
            submenu: [
                {
                    label: 'Group Form',
                    name: '/group-form'
                },
                {
                    label: 'CURD Simple',
                    name: '/CURD-example/simple'
                },
                {
                    label: 'CURD Inlint Edit',
                    name: '/CURD-example/inline-edit'
                },
                {
                    label: 'Audit Detail',
                    name: '/Audit-example/detail'
                },
                {
                    label: 'Editable-Table',
                    name: '/editable-table'
                },
                {
                    label: 'Inline-Table',
                    name: '/inline-table'
                },
                {
                    label: 'Searchable-Chart',
                    name: '/searchable-chart'
                },
                {
                    label: 'Two-Related-Form',
                    name: 'two-related-form'
                },
            ]
        },
    ]
};
