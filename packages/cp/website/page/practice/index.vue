<template>
    <i-article>
        <article>
            <h1>思考与实践</h1>
            <p>
                FormGeneratorIView 作为<a href="https://github.com/BingBlog/cp" target="_blank">CP - Configurable Platform</a>的一部分。
                主要是为了解决在配置系统中大量的表单需求。这一点受到了<a target="_blank" href="https://github.com/mozilla-services/react-jsonschema-form">react-jsonschema-form</a>以及<a href="https://github.com/baidu/amis" target="_blank">amis配置工具</a>的启发。
            </p>

            <inAnchor
                title="一个常见的场景"
                h2
            />
            <!-- <p>
                表单是中台组件化中非常重要的一部分。<strong>Ant Design</strong>、<strong>Element</strong>、<strong>iView</strong>都通过组件大大提升了中台的开发效率。
                特别是经过了巨大的视觉、交互的投入后，这些组件库为中台的表单开发，提供了往常前端工程师无法独自开发出来的产品功能和体验。
            </p> -->
            <p>
                如果一个平台中，有着大量的表单需求。直接通过组件拼装完成开发任务需要大量的人力和时间，后期表单项的频繁变更也增加了维护成本，而这些工作里面大多都是枯燥的重复工作。
            </p>
            <p style="text-align: center;">
                <img width="100%" src="website/assets/example1.jpg" alt="大量表单的示例">
                <strong>大量表单中台的示例（多个产品线，每个产品线对应多个页面）</strong>
            </p>
            <p>
                通过表单渲染工具，将所有配置维护在JSON中，可以一定程度上解决这些问题。
            </p>
            <p>
                其最大的优点是，不论前端还是后端同学，都可以通过编码来控制JSON配置，大大减少了表单的开发工作量。
            </p>

            <inAnchor
                title="类似的场景"
                h2
            />
            <p>
                <ul>
                    <li><strong>同时支持几十个页面的数据查询报表:</strong>在数据平台中有这大量的类似上图的场景，需要同时支持多个甚至几十个页面，且他们的结构通常比较相似；</li>
                    <li><strong>可编辑的表格:</strong>在一个表格中对数据直接进行修改，且不同列的编辑形式不同，要支持输入、数值、日期、下来、选择等编辑形式；</li>
                </ul>
            </p>

            <inAnchor
                title="编码、JSON配置、可视化配置"
                h2
            />
            <p>iView通过组件化的方式，更关注与编码层面。</p>
            <p><a href="https://github.com/baidu/amis" target="_blank">amis配置工具</a>，通过可视化配置，更关注于提供一站式解决方案。</p>
            <p><strong>对于有着大量的表单的中台需求:</strong></p>
            <p>如果直接通过组件拼装需要开发几十个页面，维护几十个页面的代码。</p>
            <p>如果用可视化工具来配置，需要配置几十个页面，维护几十个页面的配置。</p>
            <p>FormGenerator介于两者之间，让你在不丢失编码灵活性的同时，可以通过配置提高代码复用度，提升开发效率。</p>

            <inAnchor
                title="一些比较有意思的实现"
                h2
            />
            <p>目录<strong>Example</strong>中，有一些具体的实现。展示了如何使用FormGeneratorIView高效解决一些具体场景的需求。</p>
            <ul>
                <li><a href=""><strong>Step Form:</strong></a>分步表单是一个很常见的场景，用来完成一系列有先后顺序的表单编辑工作，而且可以保存每一步填写的内容。</li>
                <li><a href=""><strong>CURD:</strong></a>在一个增删改查的例子中使用FormGenerator。</li>
                <li><a href=""><strong>Editable Table:</strong></a>可编辑的表格，可以支持快速编辑表格中的内容。实例展示了如何使用<code>FieldGenerator</code>来动态生成表格中的各种表单控件。</li>
                <li><a href=""><strong>Searchable Data Report:</strong></a>可以查询的数据报表在很多数据平台中会常常遇到。</li>
                <li><a href=""><strong>Search Inlined Chart:</strong></a>内置查询的图表库，这个例子还展示了如何使用<code>FormGenerator</code>来开发一个新的工具。</li>
            </ul>
            <p>上面的例子，是自己对于这些具体的场景进行抽象，并将其封装成可复用的组件模板的尝试。可能并不是特别好的实现，但其展示了可配置模板的基本思想，同样的场景，仅有一套代码。</p>
            <blockquote>
                <a href="https://uxdesign.cc/form-design-for-complex-applications-d8a1d025eba6">Form Design for Complex Applications</a>
                这篇文章简述了上面这些实例适合的场景。
            </blockquote>
            <blockquote>
                如果你对表单设计比较感兴趣，阅读<a href="https://uxdesign.cc/design-better-forms-96fadca0f49c">Design Better Forms</a>这篇文章，可以帮助你配置出更友好的表单。
            </blockquote>

            <inAnchor
                title="模板配置平台"
                h2
            />
            <p>
                <a href="https://github.com/BingBlog/cp" target="_blank">CP - Configurable Platform</a>是一个基于模板的配置平台。FormGeneratorIView是其中的一个工具。
                除了包含表单渲染工具、可视化渲染工具、可配置的脚手架之外，还会提供了很多可直接使用的模板。
                另外，还将搭建一个平台，让用户可以上传自己封装后的模板，供社区使用（类似于echarts的gallery）。
            </p>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../components/article';
import inAnchor from '../../components/anchor';
// import iCode from '../../components/code';
// import Demo from '../../components/Demo';
import Code from '../../code/guide';
export default {
    components: {
        iArticle,
        inAnchor,
        // iCode,
        // Demo
    },
    data() {
        return {
            code: Code
        };
    }
};
</script>

<style>
p {
    text-indent: 30px;
}
</style>
