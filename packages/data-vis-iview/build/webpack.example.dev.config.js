/**
 * 本地开发及预览
 */

const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = merge(webpackBaseConfig, {
    mode: 'development',
    devServer: {
        compress: true,
        port: 9090,
        host: '0.0.0.0',
        historyApiFallback: true,
        hot: true,
        inline: true,
        open: true,
        before: function(app) {
            app.get('/chartCard', function(req, res) {
                res.json({
                    status: 0,
                    data: [
                        {
                            label: '新增用户数111',
                            value: '100000000',
                            unit: '人',
                            showChange: false,
                        },
                        {
                            label: '日环比',
                            value: '3.95',
                            unit: '%',
                            showChange: true,
                        },
                        {
                            label: '当前值a',
                            value: '8888888',
                            unit: '人',
                            showChange: false,
                        },
                        {
                            label: '日环比',
                            value: '3.95',
                            unit: '%',
                            showChange: true,
                        },
                        {
                            label: '当前值b',
                            value: '8888888',
                            unit: '人',
                            showChange: false,
                        },
                        {
                            label: '日环比',
                            value: '3.95%',
                            unit: '%',
                            showChange: true,
                        }
                    ]
                });
            });
            app.get('/chartBarApi', function(req, res) {
                res.json({
                    status: 0,
                    columns: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    data: [120, 200, 150, 80, 70, 110, 130]
                });
            });
            app.get('/chartPieApi', function(req, res) {
                res.json({
                    status: 0,
                    data: [
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:274, name:'联盟广告'},
                        {value:235, name:'视频广告'},
                        {value:400, name:'搜索引擎'}
                    ]
                });
            });
            app.get('/chartPieApi1', function(req, res) {
                setTimeout(() => {
                    res.json({
                        status: 0,
                        data: [
                            {value:335, name:'直接访问'},
                            {value:310, name:'邮件营销'},
                            {value:274, name:'联盟广告'},
                            {value:235, name:'视频广告'},
                            {value:400, name:'搜索引擎'}
                        ]
                    });
                }, 1000);
            });
            app.get('/chartLineApi', function(req, res) {
                res.json({
                    status: 0,
                    'columns': [
                        ['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10', '2015-11'],
                        ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12']
                    ],
                    'data': [
                        {
                            name:'2015 邮件营销',
                            data:[120, 132, 101, 134, 90, 230, 210, 101, 134]
                        },
                        {
                            name:'2016 邮件营销',
                            data:[150, 122, 121, 164, 100, 200, 200, 141, 134, 90, 230, 210]
                        },
                        {
                            name:'2015 联盟广告',
                            data:[220, 182, 191, 234, 290, 330, 310, 101, 134, 90, 230]
                        },
                        {
                            name:'2016 联盟广告',
                            data:[20, 82, 91, 34, 90, 30, 10, 1, 34, 90, 30, 10]
                        },
                        {
                            name:'2015 视频广告',
                            data:[150, 232, 201, 154, 190, 330, 410, 101, 134, 90, 230]
                        },
                        {
                            name:'2016 视频广告',
                            data:[250, 332, 301, 254, 290, 430, 510, 201, 34, 40, 230, 410]
                        },
                        {
                            name:'2015 视频广告1',
                            data:[150, 232, 201, 154, 190, 330, 410, 101, 134, 90, 230]
                        },
                        {
                            name:'2016 视频广告1',
                            data:[250, 332, 301, 254, 290, 430, 510, 201, 34, 40, 230, 410]
                        },
                        {
                            name:'2015 视频广告2',
                            data:[150, 232, 201, 154, 190, 330, 410, 101, 134, 90, 230]
                        },
                        {
                            name:'2016 视频广告2',
                            data:[250, 332, 301, 254, 290, 430, 510, 201, 34, 40, 230, 410]
                        }
                    ]
                });
            });

            app.get('/chartTableApi', function(req, res) {
                res.json({
                    status: 0,
                    total: 100,
                    'columns': [
                        {
                            title: 'Name-api',
                            key: 'name',
                            defaultShow: true
                        },
                        {
                            title: 'Age-api',
                            key: 'age',
                            sortable: true,
                            defaultShow: false
                        },
                        {
                            title: 'Address-api',
                            key: 'address',
                            defaultShow: true
                        },
                        {
                            title: 'Date-api',
                            key: 'date',
                            defaultShow: true
                        }
                    ],
                    'data': [
                        {
                            name: 'John Brown-api',
                            age: 18,
                            address: 'New York No. 1 Lake Park-api',
                            date: '2016-10-03'
                        },
                        {
                            name: 'Jim Green',
                            age: 24,
                            address: 'London No. 1 Lake Park',
                            date: '2016-10-01'
                        },
                        {
                            name: 'Joe Black',
                            age: 30,
                            address: 'Sydney No. 1 Lake Park',
                            date: '2016-10-02'
                        },
                        {
                            name: 'Jon Snow',
                            age: 26,
                            address: 'Ottawa No. 2 Lake Park',
                            date: '2016-10-04'
                        },
                        {
                            name: 'John Brown',
                            age: 18,
                            address: 'New York No. 1 Lake Park',
                            date: '2016-10-03'
                        },
                        {
                            name: 'Jim Green',
                            age: 24,
                            address: 'London No. 1 Lake Park',
                            date: '2016-10-01'
                        },
                        {
                            name: 'Joe Black',
                            age: 30,
                            address: 'Sydney No. 1 Lake Park',
                            date: '2016-10-02'
                        },
                        {
                            name: 'Jon Snow',
                            age: 26,
                            address: 'Ottawa No. 2 Lake Park',
                            date: '2016-10-04'
                        },
                        {
                            name: 'John Brown',
                            age: 18,
                            address: 'New York No. 1 Lake Park',
                            date: '2016-10-03'
                        },
                        {
                            name: 'Jim Green',
                            age: 24,
                            address: 'London No. 1 Lake Park',
                            date: '2016-10-01'
                        },
                        {
                            name: 'Joe Black',
                            age: 30,
                            address: 'Sydney No. 1 Lake Park',
                            date: '2016-10-02'
                        },
                        {
                            name: 'Jon Snow',
                            age: 26,
                            address: 'Ottawa No. 2 Lake Park',
                            date: '2016-10-04'
                        },
                        {
                            name: 'John Brown',
                            age: 18,
                            address: 'New York No. 1 Lake Park',
                            date: '2016-10-03'
                        },
                        {
                            name: 'Jim Green',
                            age: 24,
                            address: 'London No. 1 Lake Park',
                            date: '2016-10-01'
                        },
                        {
                            name: 'Joe Black',
                            age: 30,
                            address: 'Sydney No. 1 Lake Park',
                            date: '2016-10-02'
                        },
                        {
                            name: 'Jon Snow',
                            age: 26,
                            address: 'Ottawa No. 2 Lake Park',
                            date: '2016-10-04'
                        },
                        {
                            name: 'John Brown',
                            age: 18,
                            address: 'New York No. 1 Lake Park',
                            date: '2016-10-03'
                        },
                        {
                            name: 'Jim Green',
                            age: 24,
                            address: 'London No. 1 Lake Park',
                            date: '2016-10-01'
                        },
                        {
                            name: 'Joe Black',
                            age: 30,
                            address: 'Sydney No. 1 Lake Park',
                            date: '2016-10-02'
                        },
                        {
                            name: 'Jon Snow',
                            age: 26,
                            address: 'Ottawa No. 2 Lake Park',
                            date: '2016-10-04'
                        }
                    ]
                });
            });
            app.get('/chartTableNoColumnsApi', function(req, res) {
                res.json({
                    status: 0,
                    'data': [
                        {
                            name: 'John Brown-api',
                            age: 18,
                            address: 'New York No. 1 Lake Park-api',
                            date: '2016-10-03'
                        },
                        {
                            name: 'Jim Green',
                            age: 24,
                            address: 'London No. 1 Lake Park',
                            date: '2016-10-01'
                        },
                        {
                            name: 'Joe Black',
                            age: 30,
                            address: 'Sydney No. 1 Lake Park',
                            date: '2016-10-02'
                        },
                        {
                            name: 'Jon Snow',
                            age: 26,
                            address: 'Ottawa No. 2 Lake Park',
                            date: '2016-10-04'
                        },
                        {
                            name: 'John Brown',
                            age: 18,
                            address: 'New York No. 1 Lake Park',
                            date: '2016-10-03'
                        },
                        {
                            name: 'Jim Green',
                            age: 24,
                            address: 'London No. 1 Lake Park',
                            date: '2016-10-01'
                        },
                        {
                            name: 'Joe Black',
                            age: 30,
                            address: 'Sydney No. 1 Lake Park',
                            date: '2016-10-02'
                        },
                        {
                            name: 'Jon Snow',
                            age: 26,
                            address: 'Ottawa No. 2 Lake Park',
                            date: '2016-10-04'
                        },
                        {
                            name: 'John Brown',
                            age: 18,
                            address: 'New York No. 1 Lake Park',
                            date: '2016-10-03'
                        },
                        {
                            name: 'Jim Green',
                            age: 24,
                            address: 'London No. 1 Lake Park',
                            date: '2016-10-01'
                        },
                        {
                            name: 'Joe Black',
                            age: 30,
                            address: 'Sydney No. 1 Lake Park',
                            date: '2016-10-02'
                        },
                        {
                            name: 'Jon Snow',
                            age: 26,
                            address: 'Ottawa No. 2 Lake Park',
                            date: '2016-10-04'
                        },
                        {
                            name: 'John Brown',
                            age: 18,
                            address: 'New York No. 1 Lake Park',
                            date: '2016-10-03'
                        },
                        {
                            name: 'Jim Green',
                            age: 24,
                            address: 'London No. 1 Lake Park',
                            date: '2016-10-01'
                        },
                        {
                            name: 'Joe Black',
                            age: 30,
                            address: 'Sydney No. 1 Lake Park',
                            date: '2016-10-02'
                        },
                        {
                            name: 'Jon Snow',
                            age: 26,
                            address: 'Ottawa No. 2 Lake Park',
                            date: '2016-10-04'
                        },
                        {
                            name: 'John Brown',
                            age: 18,
                            address: 'New York No. 1 Lake Park',
                            date: '2016-10-03'
                        },
                        {
                            name: 'Jim Green',
                            age: 24,
                            address: 'London No. 1 Lake Park',
                            date: '2016-10-01'
                        },
                        {
                            name: 'Joe Black',
                            age: 30,
                            address: 'Sydney No. 1 Lake Park',
                            date: '2016-10-02'
                        },
                        {
                            name: 'Jon Snow',
                            age: 26,
                            address: 'Ottawa No. 2 Lake Park',
                            date: '2016-10-04'
                        }
                    ]
                });
            });

            app.get('/chartRetain', function (req, res) {
                res.json({
                    status: 0,
                    'columns': [
                        {
                            title: '日期',
                            key: 'date',
                        },
                        {
                            title: '用户数',
                            key: 'user_number'
                        },
                        {
                            title: '1天后',
                            key: '1',
                        },
                        {
                            title: '2天后',
                            key: '2',
                        },
                        {
                            title: '3天后',
                            key: '3',
                        },
                        {
                            title: '4天后',
                            key: '4',
                        },
                        {
                            title: '5天后',
                            key: '5',
                        },
                        {
                            title: '6天后',
                            key: '6',
                        },
                        {
                            title: '7天后',
                            key: '7',
                        }
                    ],
                    'data': [
                        {
                            'date': '2018-01-10',
                            'user_number': 123456789,
                            '1': 90.70,
                            '2': '',
                            '3': '',
                            '4': '',
                            '5': '',
                            '6': '',
                            '7': ''
                        },
                        {
                            'date': '2018-01-09',
                            'user_number': 123456789,
                            '1': 60.34,
                            '2': 55.22,
                            '3': '',
                            '4': '',
                            '5': '',
                            '6': '',
                            '7': ''
                        },
                        {
                            'date': '2018-01-08',
                            'user_number': 123456789,
                            '1': 90.34,
                            '2': 85.29,
                            '3': 74.39,
                            '4': '',
                            '5': '',
                            '6': '',
                            '7': ''
                        },
                        {
                            'date': '2018-01-07',
                            'user_number': 123456789,
                            '1': 60.00,
                            '2': 55.01,
                            '3': 44.49,
                            '4': 33.29,
                            '5': '',
                            '6': '',
                            '7': ''
                        },
                        {
                            'date': '2018-01-06',
                            'user_number': 123456789,
                            '1': 60.29,
                            '2': 55.47,
                            '3': 54.57,
                            '4': 53.29,
                            '5': 52.98,
                            '6': '',
                            '7': ''
                        },
                        {
                            'date': '2018-01-05',
                            'user_number': 123456789,
                            '1': 90.00,
                            '2': 85.23,
                            '3': 74.48,
                            '4': 63.47,
                            '5': 52.77,
                            '6': 40.22,
                            '7': ''
                        },
                        {
                            'date': '2018-01-04',
                            'user_number': 123456789,
                            '1': 90.78,
                            '2': 85.36,
                            '3': 74.78,
                            '4': 63.26,
                            '5': 52.97,
                            '6': 40.46,
                            '7': 38.76
                        },
                        {
                            'date': '2018-01-03',
                            'user_number': 123456789,
                            '1': 60.2,
                            '2': 55.87,
                            '3': 44.6,
                            '4': 33.6,
                            '5': 22.9,
                            '6': 10.9,
                            '7': 8.2
                        },
                        {
                            'date': '2018-01-02',
                            'user_number': 123456789,
                            '1': 60.2,
                            '2': 55.87,
                            '3': 44.6,
                            '4': 33.6,
                            '5': 22.9,
                            '6': 10.9,
                            '7': 8.2
                        },
                        {
                            'date': '2018-01-02',
                            'user_number': 123456789,
                            '1': 60.2,
                            '2': 55.87,
                            '3': 44.6,
                            '4': 33.6,
                            '5': 22.9,
                            '6': 10.9,
                            '7': 8.2
                        },
                        {
                            'date': '2018-01-02',
                            'user_number': 123456789,
                            '1': 60.2,
                            '2': 55.87,
                            '3': 44.6,
                            '4': 33.6,
                            '5': 22.9,
                            '6': 10.9,
                            '7': 8.2
                        },
                        {
                            'date': '2018-01-02',
                            'user_number': 123456789,
                            '1': 60.2,
                            '2': 55.87,
                            '3': 44.6,
                            '4': 33.6,
                            '5': 22.9,
                            '6': 10.9,
                            '7': 8.2
                        },
                        {
                            'date': '2018-01-02',
                            'user_number': 123456789,
                            '1': 60.2,
                            '2': 55.87,
                            '3': 44.6,
                            '4': 33.6,
                            '5': 22.9,
                            '6': 10.9,
                            '7': 8.2
                        },
                    ]
                });
            });
        },
    },
    devtool: 'eval-source-map',

    // 入口
    entry: {
        main: path.resolve(__dirname, '../example/main'),
        vendors: ['vue', 'iview']
    },
    // 输出
    output: {
        path: path.resolve(__dirname, '../example/dist'),
        publicPath: '',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            filename: path.resolve(__dirname, '../example/dist/index.html'),
            template: path.resolve(__dirname, '../example/index.html')
        }),
        new CleanWebpackPlugin()
    ]
});
