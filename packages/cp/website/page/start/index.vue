<template>
    <i-article>
        <article>
            <h1>Quick Start</h1>
            <p>本文介绍如何使用CP来快速构建一个简单的数据报表平台前端项目，包含如下功能:</p>
            <ul>
                <li>（1）、包含顶部导航、动态侧边栏导航、用户中心等平台基础功能；</li>
                <li>（2）、包含一个可配置的支持可视化、查询功能的数据报表模板；</li>
                <li>（3）、支持变更配置来动态更改侧边栏及导航。</li>
            </ul>
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
                <code>CP</code>依赖<code><a href="https://cli.vuejs.org/">vue-cli</a></code>，需要在全局安装<code>vue-cli</code>，详见<a href="https://cli.vuejs.org/guide/installation.html">Vue CLI Installation</a>
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
            <p class="img-list">
                <ul>
                    <li><img src="website/assets/vue-init-project.png" alt="vue初始化项目目录结构"><span>vue初始化项目目录结构</span></li>
                    <li><img src="website/assets/vue-add-cp.png" alt="安装vue-cli-plugin-cp之后的代码目录"><span>安装vue-cli-plugin-cp之后的代码目录</span></li>
                    <li><img src="website/assets/vue-add-cp-template-data-report.png" alt="安装vue-cli-plugin-cp-template-data-report之后的代码目录"><span>安装vue-cli-plugin-cp-template-data-report之后的代码目录</span></li>
                </ul>
            </p>
            <p>
                现在我们对CP已经有了基本的认识，它基于<code><a href="https://cli.vuejs.org/">vue-cli</a></code>生成项目，然后通过安装一个基础插件来生成项目所需要的基础代码，然后再通过安装模板插件来生成模板页面。
                并通过一些约定来使基础插件和模板插件可以相互配合，以此来达到模板复用的目的。
            </p>

            <inAnchor
                title="更改侧边栏配置"
                h2
            />
            <p>侧边栏的配置维护在<code>layout</code>模板里面。在这个例子中，<code>layout</code>模板是通过<code>vue-cli-plugin-cp</code>注入的。</p>
            <p>我们希望需要更改侧边栏，增加一个数据报表的菜单项。对于当前项目的<code>layout</code>，侧边栏的配置是通过<code>src/service/module/app.js</code>里面的<code>getMenuList</code>来获取的。所以我们仅需要更改这个接口的数据即可。</p>
            <p>在开发环境下，默认使用了json来mock数据。更改<code>src/mock/app/menu-list.json</code>里面的配置就可以完成对侧边栏配置的更新。</p>
            <alert>mock数据的变更需要重启webpack才能生效。</alert>
            <p class="img-list">
                <ul>
                    <li><img width="400" src="website/assets/modify-mock-data.png" alt="更改menu-list.json里的mock数据"><span>更改menu-list.json里的mock数据</span></li>
                    <li><img width="400" src="website/assets/slide-after-modified.png" alt="变更之后的侧边栏"><span>变更之后的侧边栏</span></li>
                </ul>
            </p>
            <alert>如果先要了解更多关于<code>service</code>中的配置，可阅读<a href="/concept/services">Concept Services</a></alert>

            <inAnchor
                title="配置报表路由"
                h2
            />
            <p>现在我们已经有了一个功能完整的数据报表页面，这个页面是通过模板插件注入到项目中的，Router的配置是模板默认的，如果我们想要变更路由，可以直接更改<code>src/page/data-report/router.js</code>下的路由配置。</p>
            <p class="img-list">
                <ul>
                    <li><img width="80%" src="website/assets/modify-router.png" alt="更改路由"><span>更改menu-list.json里的mock数据</span></li>
                </ul>
            </p>
            <p>上图展示了如何将<code>/data-report</code>更改为<code>/my-report</code>。</p>
            <p>router的申明要遵循一定的格式，由于router的申明会分离在不同的模板页面中，所以需要我们自己来控制路由的命名冲突问题。</p>
            <alert>如果想要了解<code>router</code>的申明格式，注入机制，可阅读<router-link to="/concept/router-config">Concept/Router Config</router-link></alert>

            <inAnchor
                title="Data Report模板的详细用法"
                h2
            />
            <p>现在我们添加了侧边栏菜单项，也增加了Data Report的路由。我们得到了一个完整的数据报表。</p>
            <p>但是这仅限于开发环境。实际生产中，我们需要满足具体的业务需求。数据报表的查询项和可视化的图表都需要结合业务来实现。</p>
            <p>
                Data Report模板是通过可配置的JSON来驱动页面的，包括页面结构与布局，图表类型与数据，查询条件等。
                <code>vue-cli-plugin-cp-template-data-report</code>支持非常丰富的可视化组件以及查询组件，而且这些都可以通过JSON来配置。
                查看<a href="https://github.com/BingBlog/vue-cli-plugin-cp-template-data-report">cp-template-data-report</a>了解更多用法。
            </p>

            <inAnchor
                title="模板、模块、可配置平台"
                h2
            />
            <p>Data Report模板是通过可配置的JSON来驱动的，通常这些<strong>可配置的模板(Configuable Template)</strong>都基于一些<strong>基础模块(Modules)</strong>来构建。</p>
            <p>
                Data Report模版构建在
                <strong><a href="https://github.com/BingBlog/form-generator-iview">FormGeneratorIView</a></strong>
                和
                <strong><a href="https://github.com/BingBlog/data-vis-iview">DataVisIView</a></strong>
                之上。
                前者主要解决平台开发中的表单问题，提供基于JSON的表单渲染。后者主要解决可视化图表的渲染，实际上在DataVisIView里面就使用了FormGeneratorIView。
            </p>
            <p>这些<strong>可配置的模板(Configuable Template)和基础模块(Modules)是CP整个项目的重点</strong>。</p>

            <inAnchor
                title="Atomic Design"
                h2
            />
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
            <p><strong>CP</strong>的意义不仅限于提供了一套模板复用机制，更在于在平台开发中践行<strong>Atomic Design</strong>的原则。</p>
            <p>
                从iView到FormGeneratorIView、DataVisIView，再到vue-cli-plugin-cp-template-data-report，最终到Data Report页面。
                也就是从Atoms、Molecules到Organisms，再到Templates，最终到Pages的过程。
            </p>
            <p>如果想要了解更多关于<Strong>CP</Strong>的设计理念，可以参考<a href="/concept/main-thoery">Concept Main Thoery</a></p>
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
