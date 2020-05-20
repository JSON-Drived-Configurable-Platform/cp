<template>
    <i-article>
        <article>
            <h1>关于 FormGeneratorIView</h1>
            <p>FormGeneratorIView 是一套基于 iView UI 的开源的表单生成工具，可以很方便的基于 JSON 配置生成表单，主要服务于 PC 界面的中后台产品。</p>
            <p>在处理批量表单开发，复杂表单交互（如表格中嵌入表单）等场景下对于提升开发效率和提高代码可维护性有很大帮助。</p>
            <inAnchor
                title="特性"
                h2
            />
            <ul>
                <li>可配置、高效率</li>
                <li>可复用、易维护</li>
                <li>文档详细，查询方便</li>
            </ul>

            <inAnchor
                title="设计概览"
                h2
            />
            <p style="text-align: center;">
                <img width="100%" src="../../../form-generator.svg" alt="设计脑图">
                <strong>设计脑图</strong>
            </p>
            <inAnchor
                title="谁在使用"
                h2
            />
            <ul>
                <li>
                    <a href="https://www.baidu.com" target="_blank">百度</a>
                </li>
            </ul>
            <blockquote>
                如果你的公司和产品使用了FormGeneratorIView，欢迎到 <a href="https://github.com/BingBlog/form-generator-iview/issues/8" target="_blank">这里</a> 留言。
            </blockquote>

            <inAnchor title="安装" h2 />
            <p>使用 npm</p>
            <i-code lang="auto" bg>{{ code.introduce.install }}</i-code>

            <inAnchor title="引入" h2 />
            <p>在项目的主文件中添加如下代码：</p>
            <i-code lang="auto" bg>{{ code.introduce.import }}</i-code>

            <alert>FormGeneratorIView依赖iview，可以通过如下代码安装和引入iview</alert>
            <strong>安装和引入iview</strong>
            <i-code lang="auto" bg>{{ code.introduce.installIView }}</i-code>
            <i-code lang="auto" bg>{{ code.introduce.importIView }}</i-code>

            <inAnchor title="示例" h2 />
            <Demo title="简单示例">
                <div slot="demo">
                    <FormGenerator
                        ref="FormGenerator"
                        :fields="code.introduce.data.fields"
                        :model="code.introduce.data.model"
                        :options="code.introduce.data.options"
                        @on-submit="handleSubmit()"
                    />
                </div>
                <div slot="desc">
                    <p>FormGenerator组件依赖三个属性: <code>fields</code>, <code>model</code>, <code>options</code>。</p>
                    <p>通过设置<code>fields</code>, <code>model</code>, <code>options</code>即可生成一个表单UI。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.introduce.demo }}</i-code>
            </Demo>

            <!-- TODO -->
            <inAnchor title="版本" h2 />
            <p>
                <a href="https://www.npmjs.com/package/form-generator-iview" target="_blank">
                    <img src="https://img.shields.io/npm/v/form-generator-iview.svg?style=flat-square">
                </a>
                <br>
                <!-- <i>目前仍为开发中，不建议生产环境使用。</i> -->
            </p>

            <inAnchor title="兼容" h2 />
            <ul>
                <li>支持 iView 3.0</li>
            </ul>

            <inAnchor
                title="目标用户"
                h2
            />
            <p>已经或者打算使用iView组件库来开发中台的<strong>前端同学</strong>。</p>
            <p>特别项目中有很多的表单场景，直接使用模板开发会导致开发量增加、维护起来很困难。</p>
            <blockquote>
                如果你是从头开始开发一个中台，可以先看看<a href="https://github.com/BingBlog/cp">CP</a>。这个项目中汇总了很多中台中使用到的工具和模板。有可能会帮助到你。
            </blockquote>
            <!-- <blockquote>
                如果你是一个不了解前端技术的<strong>后端同学</strong>，可以考虑使用<a href="https://github.com/baidu/amis" target="_blank">amis配置工具</a>。
                这个工具可以让你在没有前端同学支持的情况下配置出完整的平台，功能非常强大。
            </blockquote> -->

            <inAnchor
                title="关于文档"
                h2
            />
            <p>文档的作用主要有一下几点：</p>
            <ul>
                <li>1. 帮助您了解如何使用这个工具；</li>
                <li>2. 提供各个组件的配置速查表；这些表对于<strong>后端同学</strong>了解如何更改配置很有帮助。</li>
            </ul>
            <!-- <blockquote>
                在我们的实践中，通常是前端将配置以接口的形式暴露给后端，
                主要的交互和UI部分仍由前端来完成，后续细节的调整可以由后端直接更改。
            </blockquote> -->

            <inAnchor
                title="与iView的关系"
                h2
            />
            <p>工具中的大部分组件都基于iView组件开发。所以在设计上，很多命名都尽量保持与iView一致，包含组件名称、组件属性名称、组件方法名称等。</p>
            <p>这个工具仅仅是对iView做了一些封装。目的是为了让使用iView的同时，也可以通过配置生成表单。希望对iView社区有一定帮助。</p>
            <!-- <p>选用iView是因为iView社区的活跃度很高，组件库和文档的质量也很好。</p> -->

            <inAnchor title="相关链接" h2 />
            <ul>
                <li>
                    <a href="https://iviewui.com/" target="_blank">iView官方文档</a>
                </li>
                <li>
                    <a href="https://json-drived-configurable-platform.github.io/cp" target="_blank">A configurable platform frontend ui solution based on iView UI.</a>
                </li>
                <li>
                    <a href="https://github.com/baidu/amis" target="_blank">baidu出品的amis配置工具</a>
                </li>
            </ul>

            <inAnchor title="感谢" h2 />
            <p>
                没有iView组件库及社区，这个库不会出现。在工具的实现中，大量的"借鉴"了iView组织的代码。包含组件库、文档等。
            </p>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../components/article';
import inAnchor from '../../components/anchor';
import iCode from '../../components/code';
import Demo from '../../components/demo';
import Code from '../../code/intro';
export default {
    components: {
        iArticle,
        inAnchor,
        iCode,
        Demo
    },
    data() {
        return {
            code: Code
        };
    },
    methods: {
        handleSubmit() {
            // eslint-disable-next-line no-console
            this.$Message.info(JSON.stringify(this.$refs.FormGenerator.model));
        },
    }
};
</script>

<style>

</style>
