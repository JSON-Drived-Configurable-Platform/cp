/**
 * 本地开发及预览
 */

const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const fs = require('fs');

// website-data-api
let apiData = {};
let fileNames = fs.readdirSync(path.resolve(__dirname, '../docs/website-data-api')).map(file => {
    let fileName = file.split('.')[0];
    apiData[fileName] = require(`../docs/website-data-api/${fileName}`);
    return fileName;
});

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
            fileNames.forEach(item => {
                app.all(`/${item}`, function(req, res) {
                    setTimeout(() => {
                        res.json(apiData[item]);
                    }, 500);
                });
            });
        },
    },

    devtool: 'eval-source-map',

    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../website'),
        }
    },
    // 入口
    entry: {
        main: path.resolve(__dirname, '../website/main'),
        vendors: ['vue', 'view-design']
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
