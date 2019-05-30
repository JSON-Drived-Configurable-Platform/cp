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
        port: 9000,
        host: '0.0.0.0',
        historyApiFallback: true,
        hot: true,
        inline: true,
        open: true,
        before: function(app) {
            let data = [];
            for (let i = 0; i <= 100; i++) {
                data.push({
                    label: `选项${i}`,
                    value: i + ''
                });
            }
            app.get('/selectApi', function(req, res) {
                res.json({
                    status: 0,
                    data
                });
            });

            app.get('/cascaderApi', function(req, res) {
                res.json({
                    status: 0,
                    data: [{
                        value: 'beijing',
                        label: '北京',
                        children: [
                            {
                                value: 'gugong',
                                label: '故宫'
                            },
                            {
                                value: 'tiantan',
                                label: '天坛'
                            },
                            {
                                value: 'wangfujing',
                                label: '王府井'
                            }
                        ]
                    }, {
                        value: 'jiangsu',
                        label: '江苏',
                        children: [
                            {
                                value: 'nanjing',
                                label: '南京',
                                children: [
                                    {
                                        value: 'fuzimiao',
                                        label: '夫子庙',
                                    }
                                ]
                            },
                            {
                                value: 'suzhou',
                                label: '苏州',
                                children: [
                                    {
                                        value: 'zhuozhengyuan',
                                        label: '拙政园',
                                    },
                                    {
                                        value: 'shizilin',
                                        label: '狮子林狮子林狮子林狮子林狮子林狮子林',
                                        children: [
                                            {
                                                value: '1',
                                                label: '选项一',
                                            },
                                            {
                                                value: '2',
                                                label: '选项2选项2选项2选项2选项2选项2选项2选项2',
                                            }
                                        ]
                                    }
                                ]
                            }
                        ],
                    }],

                });
            });

            app.post('/uploadApi', function(req, res){
                res.json({
                    status: 0,
                    data: {
                        url: 'uploadUrl'
                    }
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
