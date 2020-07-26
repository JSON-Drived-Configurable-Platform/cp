<template>
    <i-article>
        <article>
            <h1>接口模拟</h1>
            <p>在项目的开发过程中，经常需要对接口进行模拟。CP提供了一些解决这些问题的方案。</p>

            <!-- <inAnchor
                title="YApi"
                h2
            />
            <p>YApi旨在为开发、产品、测试人员提供更优雅的接口管理服务。可以帮助开发者轻松创建、发布、维护 API</p>
            <p>接入方式待补充</p> -->
            <inAnchor
                title="本地模拟"
                h2
            />
            <p>我们使用了<a href="https://github.com/Yegorich555/webpack-mock-server">webpackMockServer</a>来实现本地代理。接入CP的开发模式，需要注意以下几点：</p>
            <ul>
                <li>（1）、页面、页面模板的mock文件放到页面、模板各自的目录维护；</li>
                <li>（2）、Layout相关的mock文件放到对应的layout目录下；</li>
            </ul>
            <p>可参考<a href="https://github.com/JSON-Drived-Configurable-Platform/cp-example">CP-Example</a></p>
            <p><strong>webpackMockServer的接入:</strong></p>
            <i-code>
                <pre>
// 引入webpackMockServer
const webpackMockServer = require("webpack-mock-server");


module.exports = {
  publicPath: "./",
  assetsDir: "static",
  devServer: {
    compress: true,
    port: 9000,
    host: "0.0.0.0",
    historyApiFallback: true,
    hot: true,
    inline: true,
    open: true,
    // webpackMockServer初始化参数
    before: app => webpackMockServer.use(app, {
      port: 8079,
      entry: ["webpack.mock.js"],
      tsConfigFileName: "jsconfig.json"
    })
  }
};

                </pre>
            </i-code>
            <strong>webpack.mock.js(匹配所有放在**/mock/**/*.js下的mock文件，仅供参考)</strong>
            <i-code>
                <pre>
import webpackMockServer from "webpack-mock-server";
import path from "path";
import glob from "glob";

export default webpackMockServer.add((app, helper) => {
  app.all('/api/*', function(req, res) {
    function getMockApiPath() {
      let mockPaths = glob.sync("**/mock/**/*.js", {
        cwd: path.resolve(__dirname, "./src")
      });
      let mockApiPath = {};
      mockPaths.forEach(mockPath => {
        const fileIndex = /mock(.+)\.js/.exec(mockPath)[1];
        const filepath = path.resolve(
          path.resolve(__dirname, "./src"),
          mockPath
        );
        mockApiPath[fileIndex] = filepath;
      });
      return mockApiPath;
    }

    const mockApiPath = getMockApiPath();
    const url = req.url
    Object.keys(mockApiPath).forEach(item => {
      const strPath = mockApiPath[item];
      if (url.indexOf(item) > 0) {
        // removing NodeJs require-cache
        delete require.cache[require.resolve(strPath)];
        res.json(require(strPath));
      }
    });
  });
});

                </pre>
            </i-code>


            <inAnchor
                title="apim-tools(推荐百度内部使用)"
                h2
            />
            <p>apim-tools是百度开源的一套用来解决前端开发中管理mock数据和设置接口代理的工具。</p>
            <p>接入方法如下:</p>
            <ul>
                <li>
                    （1）、脚手架插件安装
                    <strong>
                        <a href="https://github.com/JSON-Drived-Configurable-Platform/vue-cli-plugin-cp-baidu">vue-cli-plugin-cp</a>
                    </strong>
                </li>
                <li>（2）、登录到百度内部apim网站注册项目；</li>
                <li>（3）、在项目根目录下找到vue.config.js文件，然后将devServer.before方法中的schemaToken替换为自己注册的token。；</li>
            </ul>
            <p>相关代码如下:</p>
            <i-code>
                <pre>

// 项目中安装apim-tools
npm i apim-tools --save-dev

// vue.config.js进行接入
before(app) {
    // do fancy stuff
    const apimMw = apimTools.express({
        port: 9000,
        // 设置存储的 mock 相关数据存储的根目录
        root: path.resolve(__dirname + '/.mock'),
        // 项目 schema token 具体到 apim 平台查看
        schemaToken: '注册后获取的项目token',
        // 是否启动时候立刻自动同步
        startAutoSync: true
    });
    app.use(apimMw);
}
                </pre>
            </i-code>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../components/article';
import inAnchor from '../../components/anchor';
import iCode from '../../components/code';
export default {
    components: {
        iArticle,
        inAnchor,
        iCode
    }
};
</script>

<style lang="less" scoped>
.img-list {
    margin: 20px auto;
    ul {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        li {
            margin: 0 50px;
            text-align: center;
            img {
                margin: 0 auto;
                display: block;
                width: 100%;
            }
            span {
                display: inline-block;
                line-height: 30px;
                font-size: 12px;
            }
        }
    }
}
</style>>
