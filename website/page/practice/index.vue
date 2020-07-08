<template>
    <i-article>
        <article>
            <h1>思考与实践</h1>
            <p>
                FormGeneratorIView 作为<a href="https://json-drived-configurable-platform.github.io/cp" target="_blank">CP - JSON Drived Configurable Platform</a>的一部分。
                主要是为了解决在配置系统中大量的表单需求。这一点受到了<a target="_blank" href="https://github.com/mozilla-services/react-jsonschema-form">react-jsonschema-form</a>以及<a href="https://github.com/baidu/amis" target="_blank">amis配置工具</a>的启发。
            </p>

            <inAnchor
                title="一个常见的场景"
                h2
            />
            <p>
                如果一个平台中，有着大量的表单需求。直接通过组件拼装完成开发任务需要大量的人力和时间，后期表单项的频繁变更也增加了维护成本，而这些工作里面大多都是枯燥的重复工作。
            </p>
            <p style="text-align: center;">
                <img width="100%" src="./example1.jpg" alt="大量表单的示例">
                <strong>大量表单中台的示例（多个产品线，每个产品线对应多个页面）</strong>
            </p>
            <br>
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
            <p>
                目录<strong>Example</strong>中，有一些具体的实现。展示了如何使用FormGeneratorIView高效解决一些具体场景的需求:
            </p>
            <ul>
                <li><router-link to="/examples/group-form"><strong>分组表单:</strong></router-link>通过配置分组，展示了FormGenerator所支持的所有组件。</li>
                <li><router-link to="/examples/multistageValue-form"><strong>多级分组表单:</strong></router-link>展示了FormGenerator对多层级深度数据model（如 a.b.c形式）的支持。</li>
                <li><router-link to="/examples/editable-table"><strong>Editable Table:</strong></router-link>可编辑的表格，可以支持快速编辑表格中的内容。实例展示了如何使用<code>FieldGenerator</code>来动态生成表格中的各种表单控件。</li>
                <li><router-link to="/examples/CURD-example/simple"><strong>CURD:</strong></router-link>使用FieldGenerator结合iView Table组件配置出增删改查的列表中的操作按钮，使用FormGenerator配置出增加和编辑弹框。</li>
                <li><router-link to="/examples/CURD-example/inline-edit"><strong>CURD-列表编辑:</strong></router-link>更复杂的列表编辑展示。</li>
                <li><router-link to="/examples/searchable-chart"><strong>Searchable Data Report:</strong></router-link>可以查询的数据报表在很多数据平台中会常常遇到。所使用的的DataVis组件中就使用到了FormGenerator。</li>
                <li><router-link to="/examples/Audit-example/detail"><strong>审核详情页:</strong></router-link>通过配置来解决大量重复的表单项的联动校验难题。</li>
                <li><router-link to="/examples/two-related-form"><strong>两表单联动:</strong></router-link>通过配置两个表单，来实现多表单联动。</li>
                <li><router-link to="/examples/dynamic-form"><strong>动态子项表单</strong></router-link>展示了如何动态添加和删除一组表单输入项。</li>
                <!-- <li><a href=""><strong>Step Form:</strong></a>分步表单是一个很常见的场景，用来完成一系列有先后顺序的表单编辑工作，而且可以保存每一步填写的内容。</li> -->
            </ul>
            <p>上面的例子，是自己对于这些具体的场景进行抽象，并将其封装成可复用的组件模板的尝试。其展示了可配置模板的基本思想。</p>
            <blockquote>
                <a href="https://uxdesign.cc/form-design-for-complex-applications-d8a1d025eba6">Form Design for Complex Applications</a>
                这篇文章简述了上面这些实例适合的场景。
            </blockquote>

            <inAnchor
                title="模板配置平台"
                h2
            />
            <p>
                <a href="https://github.com/BingBlog/cp" target="_blank">CP - Configurable Platform</a>是一个基于模板的配置平台。FormGeneratorIView是其中的一个工具。
                除了包含表单渲染工具、可视化渲染工具、可配置的脚手架之外，还会提供了很多可直接使用的模板。
            </p>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../components/article';
import inAnchor from '../../components/anchor';
// import iCode from '../../components/code';
// import Demo from '../../components/demo';
// import Code from '../../code/guide';
export default {
    components: {
        iArticle,
        inAnchor,
        // iCode,
        // Demo
    }
};
</script>

<style>
p {
    text-indent: 30px;
}
</style>
