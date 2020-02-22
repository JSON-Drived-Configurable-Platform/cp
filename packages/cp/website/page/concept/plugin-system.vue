<template>
    <i-article>
        <article>
            <h1>插件机制</h1>
            <p>本文介绍<code><strong>CP</strong></code>如何实现<code><strong>模板复用</strong></code>。主要包含：</p>
            <ul>
                <li>（1）、为什么要使用插件机制;</li>
                <li>（2）、脚手架插件的作用;</li>
                <li>（3）、模板插件;</li>
            </ul>
            <inAnchor
                title="为什么要使用插件机制"
                h2
            />
            <p>模板沉淀之后，如果被其他人使用呢？这里要解决两个问题：</p>
            <li>（1）、模板的开发；</li>
            <li>（2）、模板的引入及安转机制；</li>
            <p>我们使用了vue-cli的插件机制，可以很方便的将模板代码安装到项目中。并且是适用方仍然可以对模板的功能进行扩展。</p>
            <p class="img-list">
                <ul>
                    <li>
                        <img width="60%" src="./assets/configurable-platform-plugins-relationship.svg" alt="Atomic Design">
                        <span>CP插件和模板之间的关系</span>
                    </li>
                </ul>
            </p>

            <inAnchor
                title="脚手架插件"
                h2
            />
            <p>
                <strong><a target="_blank" href="https://github.com/JSON-Drived-Configurable-Platform/vue-cli-plugin-cp">脚手架插件vue-cli-plugin-cp:</a></strong>
                <strong>vue-cli-plugin-cp</strong>负责处理动态加载其它的Layout模板和页面模板，<router-link to="/development/router-config">动态加载这些模板的路由（Router）</router-link>，<router-link to="/development/service-config">注册这些模板的服务（Service）</router-link>。
                除此之外还包含了默认的Layout模板代码、一个简单的Home页面模板（用来展示CP的最新动态，模板、模块列表等信息）。
            </p>
            <p class="img-list">
                <ul>
                    <li>
                        <img width="60%" src="./assets/scafford-plugin-structure.png" alt="脚手架插件的主要内容">
                        <span>脚手架插件的主要内容</span>
                    </li>
                </ul>
            </p>
            <p>
                CP的插件都是一个标准的vue-cli插件。
                简单来说，就是一个生成器。generator/template目录下的代理，就是这个生成器被安装时，同步到项目的代码。
            </p>


            <inAnchor
                title="模板插件"
                h2
            />
            <p>模板插件的结构和脚手架插件一样，仅仅之模板插件仅包含改模板所需要的模板代码和其对应的JSON配置。</p>
            <p class="img-list">
                <ul>
                    <li>
                        <img width="60%" src="./assets/template-plugin-structure.png" alt="页面模板插件的主要内容">
                        <span>页面模板插件的主要内容</span>
                    </li>
                </ul>
            </p>

            <inAnchor
                title="插件的开发"
                h2
            />
            <p>关于插件开发的详细信息，可以参考<a href="https://cli.vuejs.org/zh/dev-guide/plugin-dev.html">vue-cli插件开发官方文档</a></p>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../components/article';
import inAnchor from '../../components/anchor';
import Code from '../../code/guide';
export default {
    components: {
        iArticle,
        inAnchor
    },
    data() {
        return {
            code: Code
        };
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
