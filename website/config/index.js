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

    defaultOpenNames: ['/development', '/advance', '/core-components'],

    menuList: [
        // {
        //     label: 'Home',
        //     name: '/home'
        // },
        {
            label: '简介',
            name: '/intro'
        },
        {
            label: '安装',
            name: '/install'
        },
        {
            label: '实践与思考',
            name: '/practice'
        },
        {
            label: '开发',
            name: '/development',
            submenu: [
                {
                    label: '组件速查',
                    name: '/development/components-choosen'
                },
                {
                    label: '控件的可见性',
                    name: '/development/visibility'
                },
                {
                    label: '表单校验',
                    name: '/development/form-validate'
                },
                {
                    label: '动态获取配置数据',
                    name: '/development/dynamic-config-data'
                },

                {
                    label: '函数类型的配置项',
                    name: '/development/function-field'
                },
            ]
        },
        {
            label: '进阶',
            name: '/advance',
            submenu: [
                // {
                //     label: '表单联动-选项联动',
                //     name: '/advance/union-request'
                // },
                {
                    label: '表单联动-展示联动',
                    name: '/advance/union-visibility'
                },
                {
                    label: '表单联动-配置联动',
                    name: '/advance/union-config'
                },
                {
                    label: '表单联动-校验联动',
                    name: '/advance/union-validate'
                },
                // {
                //     label: '表单联动-总结',
                //     name: '/advance/union-summary'
                // },
                {
                    label: '配置表格内表单控件',
                    name: '/advance/fieldGenerator-and-table'
                },
            ]
        },
        {
            label: '核心组件',
            name: '/core-components',
            submenu: [
                {
                    label: 'FormGenerator',
                    name: '/core-components/FormGenerator'
                },
                {
                    label: 'FieldGenerator',
                    name: '/core-components/FieldGenerator'
                },
            ]
        },
        {
            label: '内置组件',
            name: '/doc',
            submenu: [
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
                    label: 'MatrixSelect',
                    name: '/doc/MatrixSelect'
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
            label: '示例',
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
