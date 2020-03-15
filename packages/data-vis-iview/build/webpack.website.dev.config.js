/**
 * 本地开发及预览
 */

const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// website-data-api
const chartCardApiData = require('../docs/website-data-api/chartCardApi');
const chartBarApiData = require('../docs/website-data-api/chartBarApi');
const chartPieApiApiData = require('../docs/website-data-api/chartPieApi');
const chartPieApi1Data = require('../docs/website-data-api/chartPieApi1');
const chartLineApiData = require('../docs/website-data-api/chartLineApi');
const chartTableApiData = require('../docs/website-data-api/chartTableApi');
const chartTableNoColumnsApiData = require('../docs/website-data-api/chartTableNoColumnsApi');
const chartRetainApiData = require('../docs/website-data-api/chartRetainApi');
const chartLineAreaApiData = require('../docs/website-data-api/chartLineAreaApi');
const chartLineDatasetApiData = require('../docs/website-data-api/chartLineDatasetApi');

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
            app.get('/chartCardApi', function(req, res) {
                res.json(chartCardApiData);
            });

            app.get('/chartBarApi', function(req, res) {
                res.json(chartBarApiData);
            });

            app.get('/chartPieApi', function(req, res) {
                res.json(chartPieApiApiData);
            });

            app.get('/chartPieApi1', function(req, res) {
                setTimeout(() => {
                    res.json(chartPieApi1Data);
                }, 1000);
            });

            app.get('/chartLineApi', function(req, res) {
                res.json(chartLineApiData);
            });

            app.get('/chartLineDatasetApi', function(req, res) {
                res.json(chartLineDatasetApiData);
            });

            app.get('/chartTableApi', function(req, res) {
                res.json(chartTableApiData);
            });

            app.get('/chartTableNoColumnsApi', function(req, res) {
                res.json(chartTableNoColumnsApiData);
            });

            app.get('/chartRetainApi', function (req, res) {
                res.json(chartRetainApiData);
            });

            app.get('/chartLineAreaApi', function (req, res) {
                res.json(chartLineAreaApiData);
            });
        },
    },
    devtool: 'eval-source-map',

    // 入口
    entry: {
        main: path.resolve(__dirname, '../website/main'),
        vendors: ['vue', 'iview']
    },
    // 输出
    output: {
        path: path.resolve(__dirname, '../website/dist'),
        publicPath: '',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            filename: path.resolve(__dirname, '../website/dist/index.html'),
            template: path.resolve(__dirname, '../website/index.html')
        }),
        new CleanWebpackPlugin()
    ]
});
