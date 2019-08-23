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
            // don't use maxSize  option because of chunk hash problems
            chunks: 'initial',
            maxInitialRequests: 8,
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    priority: 10
                },

                commons: {
                    chunks: 'initial',
                    priority: 10,
                    minChunks: 2,
                    name: 'commons',
                    test: /\.js$/,
                    reuseExistingChunk: true
                },

                vendors: {
                    test: /[\\/]node_modules[\\/].*js$/,
                    priority: 10
                },

                iview: {
                    test: /[\\/]node_modules[\\/]iview/,
                    priority: 90,
                    name: 'iview',
                    reuseExistingChunk: true
                },

                vue: {
                    test: /[\\/]node_modules[\\/]vue[\\/]dist[\\/]vue\.min\.js/,
                    priority: 100,
                    name: 'vue',
                    reuseExistingChunk: true
                },

                vuex: {
                    test: /[\\/]node_modules[\\/]vuex[\\/]dist[\\/]vuex\.min\.js/,
                    priority: 100,
                    name: 'vuex',
                    reuseExistingChunk: true
                },
            }
        }
    },
    // 输出
    output: {
        path: path.resolve(__dirname, '../website/dist'),
        publicPath: '',
        filename: '[name].[contentHash].js',
        chunkFilename: '[name].[contentHash].chunk.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: path.resolve(__dirname, 'css/[name].[contentHash].css'),
            chunkFilename: path.resolve(__dirname, 'css/[name].[contentHash].css')
        }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: path.resolve(__dirname, '../website/dist/index.html'),
            template: path.resolve(__dirname, '../website/index.html')
        }),
        new CleanWebpackPlugin()
    ]
});
