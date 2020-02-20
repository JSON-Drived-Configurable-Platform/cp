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

    defaultOpenNames: ['/doc', '/examples', '/config-guide'],

    menuList: [
        // {
        //     label: 'Home',
        //     name: '/home'
        // },
        {
            label: 'Intro',
            name: '/intro'
        },
        // {
        //     label: 'Practice && Thoughts',
        //     name: '/practice'
        // },
        {
            label: 'Main Component',
            name: '/doc',
            submenu: [
                {
                    label: 'DataVis',
                    name: '/doc/DataVis'
                },
                {
                    label: 'DataVisItem',
                    name: '/doc/DataVisItem'
                }
            ]
        },
        // {
        //     label: 'Config Guide',
        //     name: '/config-guide',
        //     submenu: [
        //         {
        //             label: 'Chart Line',
        //             name: '/doc/chart-line'
        //         },
        //         {
        //             label: 'Chart Bar',
        //             name: '/doc/char-bar'
        //         },
        //         {
        //             label: 'Chart Pie',
        //             name: '/doc/char-pie'
        //         },
        //         {
        //             label: 'Chart Funnel',
        //             name: '/doc/char-funnel'
        //         },
        //         {
        //             label: 'Table Data',
        //             name: '/doc/table-data'
        //         },
        //         {
        //             label: 'Table Retain',
        //             name: '/doc/table-retain'
        //         },
        //         {
        //             label: 'Card',
        //             name: '/doc/Card'
        //         }
        //     ]
        // },
        {
            label: 'Websites',
            name: '/examples',
            submenu: [
                {
                    label: 'Simple',
                    name: '/simple'
                }
            ]
        },
    ]
};
