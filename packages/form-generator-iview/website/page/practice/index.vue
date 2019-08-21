<template>
    <i-article>
        <article>
            <h1>思考与实践</h1>
            <p>
                FormGeneratorIView 作为<a href="https://github.com/BingBlog/cp" target="_blank">CP - Configurable Platform</a>的一部分。
                主要是为了解决在配置系统中大量的表单需求。这一点受到了<a target="_blank" href="https://github.com/mozilla-services/react-jsonschema-form">react-jsonschema-form</a>以及<a href="https://github.com/baidu/amis" target="_blank">amis配置工具</a>的启发。
            </p>
            <inAnchor
                title="我的中台表单开发经历"
                h2
            />
            <p>
                表单是中台组件化中非常重要的一部分。<strong>Ant Design</strong>、<strong>Element</strong>、<strong>iView</strong>都通过组件大大提升了中台的开发效率。
                特别是经过了巨大的视觉、交互的投入后，这些组件库为中台的表单开发，提供了往常前端工程师无法独自开发出来的产品功能和体验。
            </p>
            <p style="text-align: center;">
                <img width="100%" src="./example1.jpg" alt="大量表单的示例">
                <strong>大量表单中台的示例（多个产品线，每个产品线对应多个页面）</strong>
            </p>
            <p>
                如果一个平台中，有着大量的表单需求。直接通过组件拼装完成开发任务需要大量的人力和时间，后期表单项的频繁变更也增加了维护成本，而这些工作里面大多都是枯燥的重复工作。
            </p>
            <p>
                通过表单渲染工具，将所有配置维护在JSON中，可以一定程度上解决这些问题。
            </p>
            <p>
                其最大的优点是，不论前端还是后端同学，都可以通过编码来控制JSON配置，大大减少了表单的开发工作量。
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
                title="基于JSON的模板配置平台"
                h2
            />
            <p>
                <a href="https://github.com/BingBlog/cp" target="_blank">CP - Configurable Platform</a>是一个基于JSON的模板配置平台。FormGeneratorIView是其中的一个工具。
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
