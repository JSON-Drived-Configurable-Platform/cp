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
    title: 'form-generator-iview',

    /**
     * @description api请求基础路径
     */
    baseUrl: baseUrlMap[process.env.NODE_ENV],

    /**
     * @description 默认打开的首页的路由name值，默认为home
     */
    homeName: 'home',

    defaultOpenNames: '/doc',

    menuList: [
        {
            label: 'Home',
            name: '/home'
        },
        {
            label: 'Start',
            name: '/start'
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
                    label: 'Form Generator',
                    name: '/form-generator-example'
                },
                {
                    label: 'Field Generator',
                    name: '/field-generator-example'
                },
            ]
        },
    ]
};
