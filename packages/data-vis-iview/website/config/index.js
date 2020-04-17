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

    defaultOpenNames: ['/components', '/examples', '/main-components', '/config-guide', '/config-guide/chart', '/config-guide/table'],

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
            label: 'Practice && Thoughts',
            name: '/practice'
        },
        {
            label: '主要组件',
            name: '/main-components',
            submenu: [
                {
                    label: 'DataVisItem',
                    name: '/main-components/DataVisItem'
                },
                {
                    label: 'DataVisGroup',
                    name: '/main-components/DataVisGroup'
                },
                {
                    label: 'DataVis',
                    name: '/main-components/DataVis'
                }
            ]
        },
        {
            label: '配置文档',
            name: '/config-guide',
            submenu: [
                {
                    label: '图表',
                    name: '/config-guide/chart',
                    submenu: [
                        {
                            label: '总述',
                            name: '/config-guide/chart'
                        },
                        {
                            label: '折线图',
                            name: '/config-guide/chart/chartLine'
                        },
                        {
                            label: '柱状图',
                            name: '/config-guide/chart/chartBar'
                        },
                        {
                            label: '饼图',
                            name: '/config-guide/chart/chartPie'
                        },
                        {
                            label: '漏斗图',
                            name: '/config-guide/chart/chartFunnel'
                        },
                        // {
                        //     label: '液体球',
                        //     name: '/config-guide/chart/chartLiquidFill'
                        // }
                        // {
                        //     label: 'Dataset',
                        //     name: '/config-guide/chart/chartDataset'
                        // },
                        // {
                        //     label: 'Custom',
                        //     name: '/config-guide/chart/chartCustom'
                        // }
                    ],
                },
                {
                    label: '表格',
                    name: '/config-guide/table',
                    submenu: [
                        {
                            label: '总述',
                            name: '/config-guide/table'
                        },
                        {
                            label: '数据表',
                            name: '/config-guide/table/tableData'
                        },
                        {
                            label: '留存表',
                            name: '/config-guide/table/tableRetain'
                        },
                    ]
                },
                {
                    label: '卡片',
                    name: '/config-guide/card'
                }
            ]
        },
        {
            label: '用例',
            name: '/examples',
            submenu: [
                {
                    label: '数据报表',
                    name: '/examples/data-report'
                },
                {
                    label: '数据监控',
                    name: '/examples/monitor'
                },
                {
                    label: '大屏数据',
                    name: '/examples/big-screen-data'
                }
            ]
        },
    ]
};
