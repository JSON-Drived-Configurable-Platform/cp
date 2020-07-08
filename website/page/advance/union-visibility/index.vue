<template>
    <i-article>
        <article>
            <h1>展现联动</h1>
            <inAnchor title="概述" h2 />
            <p>展现联动，是指表单内部某一个控件的展示依赖其它的值。基于showOn&hiddenOn配置项可以很容易实现控件展现的联动。</p>
            <div class="api">
                <inAnchor title="配置快速查询" h2 />
                <p>showOn&hiddenOn基于async-validator实现的数据验证，具体规则形式请参考<a href="https://github.com/yiminghe/async-validator" target="_blank"><i class="ivu-icon ivu-icon-social-github" /> async-validator</a>。</p>
                <inAnchor title="代码示例" h2 />

                <Demo title="基础用法（表单控制）">
                    <div slot="demo">
                        <FormGenerator
                            :fields="code.simple.data.fields"
                            :model="code.simple.data.model"
                        />
                    </div>
                    <div slot="desc">
                        <p>通过设置hiddenOn和showOn来控制表单子组件的显示和隐藏。</p>
                    </div>
                    <i-code slot="code" lang="html">{{ code.simple.code }}</i-code>
                </Demo>
            </div>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
import iCode from '../../../components/code';
import Demo from '../../../components/demo';
import Code from '../../../code/development/visibility';
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
        handleFieldChange() {}
    }
};
</script>

<style>

</style>
