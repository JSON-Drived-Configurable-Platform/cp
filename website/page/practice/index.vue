<template>
    <i-article>
        <article>
            <h1>思考与实践</h1>
            <p>
                FormGeneratorIView 作为<a href="">CP - Configurable Platform</a>的一部分。
                主要是为了解决在配置系统中大量的表单需求。这一点受到了<a target="_blank" href="https://github.com/mozilla-services/react-jsonschema-form">react-jsonschema-form</a>的启发。
            </p>
            <inAnchor
                title="我的中台表单开发经历"
                h2
            />
            <p>
                表单是中台组件化中非常重要的一部分。<strong>Ant Design</strong>、<strong>Element</strong>、<strong>iView</strong>都通过组件大大提升了中台的开发效率。
                特别是经过了巨大的视觉、交互的投入后，这些组件库为中台的表单开发，提供了往常前端工程师无法独自开发出来的产品功能和体验。
            </p>
            <p>
                但是我在一个数据平台的开发中，有着大量的表单需求。根本没有办法通过组件拼装按期完成需求。
                随后我和后端同学商量，决定先做一个表单渲染工具，后端输出json，通过这个工具直接渲染表单。
            </p>
            <p>
                那个时候我们并没有使用vue，所以也没有使用iView，我基于团队封装的组件库开发了表单渲染工具。
                有了这个经历后，我决定做一个<strong>表单渲染工具</strong>。
            </p>
            <p>
                后来，我们要做一个覆盖面更广的数据平台，团队决定使用开源的组件库(之前团队开发的组件库已经不怎么维护了)，团队讨论后最终选择了iView。
                我决定重新使用iView再做一个表单渲染工具。这个工具在这个数据平台及其他几个平台中被使用。
            </p>
            <p>以上就是这个工具的由来。</p>

            <inAnchor
                title="与iView的一致性"
                h2
            />
            <p>
                在设计上，很多命名都尽量保持与iView一致，包含组件名称、组件属性名称、组件方法名称等。
            </p>

            <inAnchor
                title="可配置的属性"
                h2
            />
            <p>
                <strong>表单选项：</strong>
            </p>
            <p>
                <strong>组件：</strong>
            </p>

            <!-- TODO -->
            <inAnchor
                title="场景限制"
                h2
            />
            <p>做成可配置的，其实是用灵活性去换效率。使用时，需要仔细考虑是否使用可配置的方式。目前的功能会在处理一下几个场景时遇到问题：</p>
            <ul>
                <li>交互中，多个表单项之间有关联逻辑。特别是展现关联、校验关联的场景；</li>
            </ul>
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
