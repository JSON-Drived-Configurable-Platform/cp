<template>
    <i-article>
        <article>
            <h1>关于 CP</h1>
            <p>CP 是一套服务于企业级应用前端开发，基于<code><a href="https://cli.vuejs.org/">vue-cli</a></code>插件机制的模板复用方案。可以使用提供的模板快速开发平台项目。</p>
            <p>我们的目标是：<strong>一个场景，我们只写一次</strong>。</p>

            <inAnchor
                title="特性"
                h2
            />
            <ul>
                <li><strong>开发环境基于<a href="https://cli.vuejs.org/">vue-cli</a>，组件库基于<a href="https://iviewui.com/">iview</a>，都是社区很成熟的项目</strong>。</li>
                <li><strong>多种场景下的模板可供选择，即插即用。</strong></li>
                <li><strong>提供了多种场景下的基础工具库，包括表单生成工具、图表可视化工具等，使你可以快速开发自己的页面模板。</strong></li>
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
                如果你的公司和产品使用了CP，欢迎到 <a href="https://github.com/JSON-Drived-Configurable-Platform/cp/issues/1" target="_blank">这里</a> 留言。
            </blockquote>

            <inAnchor
                title="快速开始"
                h2
            />
            <p><router-link to="/start">Quick Start</router-link>演示了如何使用已有的模板快速搭建一个数据报表平台的页面。</p>

            <inAnchor
                title="目标用户"
                h2
            />
            <p>已经或者打算使用iView组件库来开发中台的<strong>前端同学</strong>。</p>
            <blockquote>
                如果你是一个不了解前端技术的<strong>后端同学</strong>，可以考虑使用<a href="https://github.com/baidu/amis" target="_blank">amis配置工具</a>。
                这个工具可以让你在没有前端同学支持的情况下配置出完整的平台，功能非常强大。
            </blockquote>

            <inAnchor title="感谢" h2 />
            <p>
                感谢vue及其强大的社区和完善的基础工具链。
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

<style>

</style>
