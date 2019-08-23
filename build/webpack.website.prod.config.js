/**
 * 文档网站生产构建
 */
process.env.NODE_ENV = 'production';
const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpackBaseConfig = require('./webpack.base.config.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = merge(webpackBaseConfig, {
    mode: 'production',
    // 入口
    entry: {
        main: path.resolve(__dirname, '../website/main')
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                exclude: [
                    /[\\/]node_modules[\\/]vue[\\/]/,
                    /[\\/]node_modules[\\/]vuex[\\/]/
                ]
            }),
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                // eslint-disable-next-line global-require
                cssProcessor: require('cssnano'),
                cssProcessorPluginOptions: {
                    preset: [
                        'default',
                        {
                            discardComments: {
                                removeAll: true
                            }
                        }
                    ]
                },
                canPrint: true
            })
        ],
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            // automaticNameMaxLength: 30,
            name: true,
            cacheGroups: {
                iview: {
                    test: /[\\/]node_modules[\\/]iview/,
                    name: 'iview',
                    chunks: 'all'
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },
    // 输出
    output: {
        path: path.resolve(__dirname, '../website/dist'),
        publicPath: '',
        filename: path.join('static', 'js/[name].[contentHash].js'),
        chunkFilename: path.join('static', 'js/[name].[contentHash].chunk.js')
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: path.resolve('static', 'css/[name].[contentHash].css'),
            chunkFilename: path.resolve('static', 'css/[name].[contentHash].css')
        }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: path.resolve(__dirname, '../website/dist/index.html'),
            template: path.resolve(__dirname, '../website/index.html')
        }),
        new CleanWebpackPlugin()
    ]
});
