<template>
    <i-article>
        <article>
            <h1>接口代理</h1>
            <p>在项目的开发过程中，经常需要对接口进行代理。比如项目的前后端联调阶段。CP提供了一些解决这些问题的方案。</p>
            <alert>如果已经按照<router-link to="/development/api-proxy">接口模拟</router-link>章节中接入了YApi或者APIM这样的管理工具，则可以直接在管理工具中设置代理。</alert>
            <inAnchor
                title="通过devServer.proxy设置"
                h2
            />
            <p>在项目根目录下的vue.config.js文件的devServer中如下设置，即可实现接口的代理。</p>
            <i-code>
                <pre>

module.exports = {
  //...
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
};
                </pre>
            </i-code>
            <p>
                详细的代理规则，可以参考
                <a href="https://webpack.docschina.org/configuration/dev-server/#devserver-proxy">devServer.proxy</a>
            </p>
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
