<template>
    <i-article>
        <article>
            <h1>关于 FormGeneratorIView</h1>
            <p>FormGeneratorIView 是一套基于 iView UI 的开源的表单生成工具，可以很方便的基于Json配置生成表单，主要服务于 PC 界面的中后台产品。</p>
            <inAnchor
                title="特性"
                h2
            />
            <ul>
                <li>高质量、功能强大</li>
                <li>细致、漂亮的 UI</li>
                <li>事无巨细的文档</li>
            </ul>

            <inAnchor
                title="谁在使用"
                h2
            />
            <ul>
                <li>
                    <a href="https://www.baidu.com/" target="_blank">百度</a>
                </li>
            </ul>
            <blockquote>
                如果你的公司和产品使用了FormGeneratorIView，欢迎到 <a href="https://github.com/BingBlog/form-generator-iview/issues/8" target="_blank">这里</a> 留言。
            </blockquote>

            <inAnchor title="安装" h2 />
            <p>使用 npm</p>
            <i-code lang="auto" bg>{{ code.introduce.install }}</i-code>

            <inAnchor title="示例" h2 />
            <Demo title="简单示例">
                <div slot="demo">
                    <FormGenerator
                        :fields="code.introduce.data.fields"
                        :model="code.introduce.data.model"
                        :options="code.introduce.data.options"
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
                <i>目前仍为开发中，不建议生产环境使用。</i>
            </p>

            <inAnchor title="兼容" h2 />
            <ul>
                <li>支持 iView 3.0</li>
            </ul>

            <inAnchor title="相关链接" h2 />
            <ul>
                <li>
                    <a href="https://iviewui.com/" target="_blank">iView官方文档</a>
                </li>
            </ul>

            <inAnchor title="感谢" h2 />
            <p>
                没有iView组件库及社区，这个库不会出现。在工具的实现中，大量的"借鉴"了iView组织的代码。包含但不限于组件库、文档。
            </p>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../components/article';
import inAnchor from '../../components/anchor';
import iCode from '../../components/code';
import Demo from '../../components/Demo';
import Code from '../../code/guide';
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
    }
};
</script>

<style>

</style>
