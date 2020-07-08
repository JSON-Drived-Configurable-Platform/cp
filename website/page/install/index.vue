<template>
    <i-article>
        <article>
            <h1>安装</h1>
            <inAnchor title="npm" h2 />
            <i-code lang="bash" bg>{{ code.introduce.install.npm }}</i-code>

            <inAnchor title="yarn" h2 />
            <i-code lang="bash" bg>{{ code.introduce.install.yarn }}</i-code>

            <inAnchor title="引入" h2 />
            <p>在项目的主文件中添加如下代码：</p>
            <i-code lang="javascript" bg>{{ code.introduce.import }}</i-code>

            <alert>FormGeneratorIView依赖iview，可以通过如下代码安装和引入iview</alert>
            <strong>安装和引入iview</strong>
            <i-code lang="bash" bg>{{ code.introduce.installIView }}</i-code>
            <i-code lang="javascript" bg>{{ code.introduce.importIView }}</i-code>

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
