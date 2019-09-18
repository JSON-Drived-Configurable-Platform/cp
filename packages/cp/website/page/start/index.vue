<template>
    <i-article>
        <article>
            <h1>Quick Start</h1>
            <p>本文介绍如何使用CP来快速创建一个平台的UI，除了包含顶部导航、动态侧边栏导航等基础功能外，还包含一个可配置的支持可视化、查询功能的数据报表模板。</p>
            <inAnchor
                title="使用vue-cli创建一个空项目"
                h2
            />
            <i-code>vue create cp-demo</i-code>
            <p>创建项目的时候的配置项可以如下设置：</p>
            <div class="api">
                <table>
                    <thead>
                        <tr>
                            <th>选项</th>
                            <th>选择</th>
                            <th>说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>preset</td>
                            <td>Manually select features</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>features</td>
                            <td>Babel、CSS Pre-processors、Linter / Formatter</td>
                            <td>必须选择Babel</td>
                        </tr>
                        <tr>
                            <td>CSS pre-processor</td>
                            <td>Less</td>
                            <td>必须选择Less、模板都基于Less开发。</td>
                        </tr>
                        <tr>
                            <td>linter / formatter</td>
                            <td>ESLint + Prettier</td>
                            <td>可自主选择</td>
                        </tr>
                        <tr>
                            <td>additional lint features</td>
                            <td>Lint on save</td>
                            <td>可自主选择</td>
                        </tr>
                        <tr>
                            <td>config for Babel</td>
                            <td>In dedicated config files</td>
                            <td>可自主选择</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>安装完成后，我们将得到一个初始化的项目。</p>
            <alert>
                <code>CP</code>依赖<code>vue-cli</code>，需要在全局安装<code>vue-cli</code>，详见<a href="https://cli.vuejs.org/guide/installation.html">Vue CLI Installation</a>
            </alert>

            <inAnchor
                title="安装vue-cli-plugin-cp"
                h2
            />
            <p>到项目的目录中执行:</p>
            <i-code>vue add cp</i-code>
            <alert>绿色的为新增文件或者文件夹，黄色的表示有变更，可以通过编辑器查看详细的变更。</alert>
            <p>安装完毕后，执行：</p>
            <i-code>yarn serve</i-code>
            <p>
                路由到<strong>/home</strong>页面，可以看到打开的页面上展示了很多模板。
                在后续的项目开发中，你可以根据自己的需要选择模板添加。
                本文后续将添加<strong>cp-template-data-report</strong>这个模板。
                并演示如何通过简单的配置变更，快速完成一个数据报表页面的开发。
            </p>

            <inAnchor
                title="添加template-data-report模板"
                h2
            />
            <i-code>vue add cp-template-data-report</i-code>
            <p>安装完毕后，重启项目并路由到<code>/data-report</code>就可以看到一个具有可视化、查询等功能的数据报表页面。</p>
            <alert>
                <code>cp-template-data-report</code>支持非常丰富的可视化组件以及查询组件，而且这些都可以通过JSON来配置。
                查看<a href="https://github.com/BingBlog/vue-cli-plugin-cp-template-data-report">cp-template-data-report</a>了解更多用法。
            </alert>

            <inAnchor
                title="发生了什么"
                h2
            />
            <p>到这个时候，你可能会有很多疑问。现在我们就来简单的了解下到底发生了什么。</p>
            <p>我们安装了两个插件，这两个插件都生成了一些代码。</p>
            <p>
                <strong><a href="https://github.com/BingBlog/vue-cli-plugin-cp">vue-cli-plugin-cp</a></strong>
                是一个CP基础插件，这个插件生成了脚手架、Layout相关代码。在安装后，就能看到顶部导航栏及侧边栏。
                还注入了vue-router、vuex项目核心依赖，并进行了Home页面的router和store的声明以及router和store动态加载机制的注入。
            </p>
            <p>
                <strong><a href="https://github.com/BingBlog/vue-cli-plugin-cp-template-data-report">vue-cli-plugin-cp-template-data-report</a></strong>
                是一个模板插件，这个插件生成了数据报表相关的代码。并自动注入了data-report所依赖的包和库，同时还声明了data-report的路由。
            </p>
            <p>我们对比一下每次操作后的文件变更，可以更直观的理解到底发生了什么？如下是每次操作后的代码目录：</p>
            <p class="project-structure-imgs">
                <ul>
                    <li><span>vue初始化项目目录结构</span><img width="200" src="./images/vue-init-project.png" alt="vue初始化项目目录结构"></li>
                    <li><span>安装vue-cli-plugin-cp之后的代码目录</span><img width="200" src="./images/vue-add-cp.png" alt="安装vue-cli-plugin-cp之后的代码目录"></li>
                    <li><span>安装vue-cli-plugin-cp-template-data-report之后的代码目录</span><img width="200" src="./images/vue-add-cp-template-data-report.png" alt="安装vue-cli-plugin-cp-template-data-report之后的代码目录"></li>
                </ul>
            </p>
            <p>
                现在我们对CP已经有了基本的认识，它基于vue-cli生成项目，然后通过安装一个基础插件来生成项目所需要的基础代码，然后再通过安装模板插件来生成模板页面。
                并通过一些约定来使基础插件和模板插件可以相互配合，以此来达到模板复用的目的。
            </p>

            <inAnchor
                title="基础插件:vue-cli-plugin-cp"
                h2
            />

            <inAnchor
                title="模板插件:vue-cli-plugin-cp-template-data-report"
                h2
            />
            <p><code>template-data-report</code>模板插件，仅注入了一个路由，真实业务中，一般会有多个页面都是用这个页面模板。我们可以添加额外的路由。</p>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../components/article';
import inAnchor from '../../components/anchor';
import iCode from '../../components/code';
// import Demo from '../../components/Demo';
import Code from '../../code/guide';
export default {
    components: {
        iArticle,
        inAnchor,
        iCode
        // Demo
    },
    data() {
        return {
            code: Code
        };
    }
};
</script>

<style lang="less" scoped>
.project-structure-imgs {
    margin: 20px auto;
    ul {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        li {
            margin: 0 20px;
            width: 25%;
            text-align: center;
            img {
                margin: 0 auto;
                max-width: 200px;
                display: block;
                width: 100%;
            }
            span {
                display: inline-block;
                height: 60px;
                line-height: 30px;
                font-size: 12px;
            }
        }
    }
}
</style>>
