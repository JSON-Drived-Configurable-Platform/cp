<template>
    <i-article>
        <article>
            <h1>控件的可见性</h1>
            <inAnchor title="概述" h2 />
            <p>在某些业务场景中，我们常常会需要根据某些字段来判断元素的显示隐藏(比如：权限控制),利用showOn和hiddenOn两个api，可以很好的实现这一点。我们可以把控制显示或者隐藏的字段放在表单的model中，或者在页面全局变量paramContainer中使用。</p>
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
