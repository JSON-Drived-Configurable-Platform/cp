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

            <p>
                前端组件化是对<a target="_blank" href="http://bradfrost.com/blog/post/atomic-web-design/">Atomic Design</a>最好的实践，但并不是全部。
                CP基于社区成熟的组件库，针对平台开发中通用功能构建出<strong>模块（module）</strong>，如
                表单（<a target="_blank" href="https://github.com/BingBlog/form-generator-iview">FormGeneratorIView</a>）、
                可视化（<a target="_blank" href="https://github.com/BingBlog/data-vis-iview">DataVisIView</a>）
                等；
                针对通用场景构建出<strong>模板（Template）</strong>，它们通常是基于某一个模块或者多个模块来开发，如
                <a target="_blank" href="https://github.com/BingBlog/vue-cli-plugin-cp-template-data-report">cp-template-data-report</a>、
                <a target="_blank" href="https://github.com/BingBlog/vue-cli-plugin-cp-template-curd">cp-template-data-curd</a>。
            </p>
            <p>
                我们希望通过这样的代码分层，来提高平台开发中代码的复用性。最重要的是，我们希望有一种机制可以让这些模块和模板被更广泛的复用。
            </p>

            <p class="img-list">
                <ul>
                    <li>
                        <a target="_blank" href="http://bradfrost.com/blog/post/atomic-web-design/">
                            <img width="60%" src="website/assets/atomic-design.jpg" alt="Atomic Design">
                        </a>
                        <a target="_blank" href="http://bradfrost.com/blog/post/atomic-web-design/"><span>Atomic Design</span></a>
                    </li>
                </ul>
            </p>

            <inAnchor
                title="基于vue-cli的模板复用机制"
                h2
            />
            <p>
                为了使模板能够被更广泛的复用，我们使用了<code><a target="_blank" href="https://cli.vuejs.org/">vue-cli</a></code>。
                得益于其<a target="_blank" href="https://cli.vuejs.org/guide/plugins-and-presets.html#plugins">插件机制</a>，

                我们可以很方便的创建<router-link to="/concept/scaffold-plugin">脚手架插件(Scaffold Plugin)</router-link>
                和<router-link to="/concept/template-plugin">模板插件(Template Plugin)</router-link>。

                其中模板插件又分为<router-link to="/concept/layout-template">平台布局模板插件(Layout Template Plugin)</router-link>
                和
                <router-link to="/concept/page-template">页面模板插件(Page Template Plugin)</router-link>。
            </p>
            <p class="img-list">
                <ul>
                    <li>
                        <img width="60%" src="./assets/configurable-platform-plugins-relationship.svg" alt="Atomic Design">
                        <span>Relationship Between CP Plugins And Their Templates</span>
                    </li>
                </ul>
            </p>
            <p>基于上述的设计，通过将可复用的代码抽离，并按照一定的约定和规范封装到插件中。再通过<code><a href="https://cli.vuejs.org/">vue-cli</a></code>的插件机制添加到项目中，即达到了复用的目的。</p>
            <p>
                其中<router-link to="/concept/scaffold-plugin">脚手架插件(Scaffold Plugin)</router-link>起到了纽带的作用，将一个个独立的模板插件有效关联起来。
            </p>
            <inAnchor
                title="Configurible Platform的意义"
                h2
            />
            <p>
                CP的主要目的是<strong>相似场景的复用</strong>。模块、模板、脚手架的分层设计和插件机制都是为这个目的服务的。
            </p>
            <p>
                CP中的模板可以通过插件机制添加到项目中，也可以直接下载并粘贴代码。
                即使你不打算使用这些页面模板和模块工具，在解决相似场景的问题时，它们也可以作为参考。
            </p>
            <p>
                CP中的模块都是标准的npm包。它们专注于企业级应用的某一特定场景，比如复杂表单和可视化图表。
                它们都有独自的文档，你可以使用它们构建模板，也可以直接在项目中使用它们。
            </p>
            <p>
                CP不仅限于页面UI的复用，更在于整个业务场景的复用，包含完整的页面布局与交互(UI)、与服务端的交互通信(service)、页面路由的申明(router),
                以及你可以通过简单的配置来对以上的功能进行调整，快速适配业务需要。
                对于模块和模板，为了提高其复用性，它们都支持通过JSON配置来扩展其功能。这个特性是可配置的(Configurable)的核心。
            </p>
            <inAnchor
                title="主要代码库"
                h2
            />
            <p>CP所包含的一些主要代码库</p>
            <ul>
                <!-- 1、FormGenerator（有文档）: https://github.com/BingBlog/form-generator-iview
                2、DataVis: https://github.com/BingBlog/data-vis-iview
                3、CP项目总地址：https://github.com/BingBlog/cp
                4、基础插件: https://github.com/BingBlog/vue-cli-plugin-cp
                5、数据报表模板: https://github.com/BingBlog/vue-cli-plugin-cp-template-data-report -->
                <li>
                    <strong><a target="_blank" href="https://github.com/BingBlog/vue-cli-plugin-cp">脚手架插件vue-cli-plugin-cp:</a></strong>
                    <strong>vue-cli-plugin-cp</strong>目前是唯一的脚手架插件，负责处理动态加载其它的Layout模板和页面模板，<router-link to="/concept/router-config">动态加载这些模板的路由（Router）</router-link>，<router-link to="/concept/service-config">注册这些模板的服务（Service）</router-link>。
                    除此之外还包含了默认的Layout模板代码、一个简单的Home页面模板（用来展示CP的最新动态，模板、模块列表等信息）。查看<router-link to="/concept/scaffold-plugin">Concept/Scaffold Plugin</router-link>章节了解更多信息。
                </li>
                <li>
                    <strong>模块：</strong><br>
                    <a href="https://github.com/BingBlog/form-generator-iview">JSON表单生成工具：FormGenerator</a><br>
                    <a href="https://github.com/BingBlog/data-vis-iview">数据可视化报表渲染工具：DataVis</a><br>
                </li>
                <li>
                    <strong>模板插件：</strong><br>
                    <a href="https://github.com/BingBlog/vue-cli-plugin-cp-template-data-report">可视化数据报表模板插件：vue-cli-plugin-cp-template-data-report</a><br>
                    <a href="https://github.com/BingBlog/vue-cli-plugin-cp-template-curd">JSON配置驱动的CURD模板插件：vue-cli-plugin-cp-template-curd</a>
                </li>
                <alert>更多模板正在开发中...如果你想贡献自己的模板，请参考：<router-link to="/contribute">Contribute</router-link>章节</alert>
            </ul>
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
