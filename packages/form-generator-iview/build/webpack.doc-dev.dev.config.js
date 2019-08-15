/**
 * 本地开发及预览
 */

const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// doc-dev-data-api
const selectApiData = require('../docs/doc-dev-data-api/selectApi');
const cascaderApiData = require('../docs/doc-dev-data-api/cascaderApi');
const uploadApiData = require('../docs/doc-dev-data-api/uploadApi');

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
            app.get('/selectApi', function(req, res) {
                res.json(selectApiData);
            });

            app.get('/cascaderApi', function(req, res) {
                res.json(cascaderApiData);
            });

            app.post('/uploadApi', function(req, res){
                res.json(uploadApiData);
            });
        },
    },

    devtool: 'eval-source-map',

    // 入口
    entry: {
        main: path.resolve(__dirname, '../doc-dev/main'),
        vendors: ['vue', 'iview']
    },
    // 输出
    output: {
        path: path.resolve(__dirname, '../doc-dev/dist'),
        publicPath: '',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            filename: path.resolve(__dirname, '../doc-dev/dist/index.html'),
            template: path.resolve(__dirname, '../doc-dev/index.html')
        }),
        new CleanWebpackPlugin()
    ]
});
