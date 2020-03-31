/**
 * 公共配置
 */
const path = require('path');
const webpack = require('webpack');
const pkg = require('../package.json');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

function resolve (dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = {
    // 加载器
    module: {
        noParse: [
            // /[\\/]node_modules[\\/]vue[\\/]/,
            /[\\/]node_modules[\\/]vuex[\\/]/,
            // /[\\/]node_modules[\\/]echarts[\\/]/
        ],
        // https://doc.webpack-china.org/guides/migrating/#module-loaders-module-rules
        rules: [
            {
                // https://vue-loader.vuejs.org/en/configurations/extract-css.html
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    sourceMap: true,
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    sourceMap: true,
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(gif|jpg|jpeg|png)\??.*$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 4000,
                            name: path.join('static', 'img/[name].[hash:7].[ext]')
                        }
                    }
                ]
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 4000,
                            name: path.join('static', 'font/[name].[hash:7].[ext]')
                        }
                    }
                ]
            },
            {
                test: /\.(html|tpl)$/,
                loader: 'html-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            // 'vue': 'vue/dist/vue.esm.js',
            'vuex': 'vuex/dist/vuex.min.js',
            'echarts': 'echarts/dist/echarts.min.js',
            '@': resolve('src')
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            'process.env.VERSION': `'${pkg.version}'`
        }),
    ]
};
