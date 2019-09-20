<template>
    <i-article>
        <article>
            <h1>Main Concept</h1>
            <p>本文介绍关于<code><strong>CP</strong></code>背后的设计思路，主要包含：</p>
            <ul>
                <li>从组件到模块，再到模板，最终到页面的代码组织形式，以及该形式所践行的Atomic Design的理论。</li>
                <li>CP如何基于<a href="https://cn.vuejs.org">vue.js</a>强大的生态系统(vue全家桶和开源组件库)和完善的工具链(vue-cli)来实现基于vue-cli插件机制的模板复用方案。</li>
                <li>CP所包含的一些主要代码库，以及它们都做了什么。</li>
            </ul>
            <alert><code><router-link to="/docs/start">Quick Start</router-link></code>这一章节通过真实的例子演示了<code>CP</code>的主要功能，对于理解其原理非常有帮助，建议先阅读之后，再继续探索。</alert>
            <inAnchor
                title="CP践行了Atomic Design"
                h2
            />
            <p>CP践行了Atomic Design</p>

            <inAnchor
                title="基于vue-cli的模板复用机制"
                h2
            />
            <p>基于vue-cli的模板复用机制</p>

            <inAnchor
                title="主要代码库"
                h2
            />
            <p>CP所包含的一些主要代码库</p>

            <inAnchor
                title="CP是模板与模块的集合，是如何复用这些资源的一种方案"
                h2
            />
            <p>
                CP是一套解决方案，基于成熟的理论，构建与成熟的开源项目之上，
                利用现有的组件库(iView、Element)开发模块、模板，
                使用完善的工具链(vue-cli)及其插件机制来添加模板。
            </p>
            <p>
                CP中的模板可以通过插件机制添加到项目中，也可以直接下载并粘贴代码。
                即使你不打算使用这些页面模板和模块工具，在解决相似场景的问题时，他们也可以作为参考。
            </p>
            <p>
                CP中的模块都是标准的npm包。它们专注于企业级应用的某一特定场景，比如复杂表单和可视化图表。
                它们都有独自的文档，你可以使用它们构建模板，也可以直接在项目中使用它们。
            </p>
            <p>
                对于模块和模板，为了提高其复用性，它们都支持通过JSON配置来扩展其功能。这个特性是可配置的(Configurable)的核心。
                CP不仅限于页面UI的复用，更在于整个业务场景的复用，包含完整的页面布局与交互(UI)、与服务端的交互通信(service)、页面路由的申明(router),
                以及你可以通过简单的配置来对以上的功能进行调整，快速适配业务需要。
            </p>
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
