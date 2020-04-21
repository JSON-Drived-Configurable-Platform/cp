/**
 * @file 路径配置配置
 * @author wangbing11(wangbing11@baidu.com)
 */

import Main from '../components/main';

import home from '../page/home';

const intro = () => import(/* webpackChunkName: "intro" */ '../page/intro');
const practice = () => import(/* webpackChunkName: "practice" */ '../page/practice');

// main-components
const DataVis = () => import(/* webpackChunkName: "DataVis" */ '../page/main-components/DataVis');
const DataVisGroup = () => import(/* webpackChunkName: "DataVisGroup" */ '../page/main-components/DataVisGroup');
const DataVisItem = () => import(/* webpackChunkName: "DataVisItem" */ '../page/main-components/DataVisItem');

// doc

// chart
const Chart = () => import(/* webpackChunkName: "Chart" */ '../page/config-guide/chart');
const ChartLine = () => import(/* webpackChunkName: "ChartLine" */ '../page/config-guide/chart/Line');
const ChartBar = () => import(/* webpackChunkName: "ChartBar" */ '../page/config-guide/chart/Bar');
const ChartPie = () => import(/* webpackChunkName: "ChartPie" */ '../page/config-guide/chart/Pie');
const ChartFunnel = () => import(/* webpackChunkName: "ChartFunnel" */ '../page/config-guide/chart/Funnel');
const ChartLiquidFill = () => import(/* webpackChunkName: "ChartLiquidFill" */ '../page/config-guide/chart/LiquidFill');
const ChartMap = () => import(/* webpackChunkName: "ChartMap" */ '../page/config-guide/chart/Map');
// const ChartDataset = () => import(/* webpackChunkName: "ChartDataset" */ '../page/config-guide/chart/Dataset');
// const ChartCustom = () => import(/* webpackChunkName: "ChartCustom" */ '../page/config-guide/chart/Custom');

// table
const Table = () => import(/* webpackChunkName: "Table" */ '../page/config-guide/table');
const TableData = () => import(/* webpackChunkName: "TableData" */ '../page/config-guide/table/Table');
const TableRetain = () => import(/* webpackChunkName: "TableRetain" */ '../page/config-guide/table/Retain');

// card
const Card = () => import(/* webpackChunkName: "Card" */ '../page/config-guide/card');

// examples
const dataReport = () => import(/* webpackChunkName: "dataReport" */ '../page/examples/data-report');
const monitor = () => import(/* webpackChunkName: "monitor" */ '../page/examples/monitor');
const bigScreen = () => import(/* webpackChunkName: "monitor" */ '../page/examples/big-screen');
export default [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/intro',
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
        ]
    },
    // main-components
    {
        path: '/main-components',
        redirect: '/main-components/DataVisItem',
        component: Main,
        children: [
            {
                path: '/main-components/DataVis',
                component: DataVis
            },
            {
                path: '/main-components/DataVisGroup',
                component: DataVisGroup
            },
            {
                path: '/main-components/DataVisItem',
                component: DataVisItem
            },
        ]
    },
    // config-guide
    {
        path: '/config-guide',
        redirect: '/config-guide/chart',
        component: Main,
        children: [
            // chart
            {
                path: '/config-guide/chart',
                component: Chart
            },
            {
                path: '/config-guide/chart/chartLine',
                component: ChartLine
            },
            {
                path: '/config-guide/chart/chartBar',
                component: ChartBar
            },
            {
                path: '/config-guide/chart/chartPie',
                component: ChartPie
            },
            {
                path: '/config-guide/chart/chartFunnel',
                component: ChartFunnel
            },
            {
                path: '/config-guide/chart/chartLiquidFill',
                component: ChartLiquidFill
            },
            {
                path: '/config-guide/chart/chartLiquidFill',
                component: ChartLiquidFill
            },
            {
                path: '/config-guide/chart/chartMap',
                component: ChartMap
            },
            // {
            //     path: '/config-guide/chart/chartDataset',
            //     component: ChartDataset
            // },
            // {
            //     path: '/config-guide/chart/chartCustom',
            //     component: ChartCustom
            // },
            // table
            {
                path: '/config-guide/table',
                component: Table
            },
            {
                path: '/config-guide/table/tableData',
                component: TableData
            },
            {
                path: '/config-guide/table/tableRetain',
                component: TableRetain
            },
            // card
            {
                path: '/config-guide/card',
                component: Card
            },
        ]
    },
    // example
    {
        path: '/examples',
        redirect: '/examples/data-report',
        component: Main,
        children: [
            {
                path: '/examples/data-report',
                component: dataReport
            },
            {
                path: '/examples/monitor',
                component: monitor
            },
            {
                path: '/examples/big-screen',
                component: bigScreen
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
