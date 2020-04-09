<template>
    <i-article>
        <article>
            <h1>组件联动显示和隐藏</h1>
            <inAnchor title="概述" h2 />
            <p>组件联动显示(showOn)和隐藏(hiddenOn)。两者同时存在时，以hiddenOn为准。</p>
            <div class="api">
                <inAnchor title="代码示例" h2 />
                <Demo title="基础用法">
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
                <Demo title="两者共存">
                    <div slot="demo">
                        <FormGenerator
                            :fields="code.bothConfig.data.bothFileds"
                            :model="code.bothConfig.data.bothModels"
                        />
                    </div>
                    <div slot="desc">
                        <p>同一个表单元素同时设置showOn,hiddenOn时，满足其中一项验证规则即当项生效，同时都满足时，hiddenOn优先。</p>
                    </div>
                    <i-code slot="code" lang="html">{{ code.bothConfig.code }}</i-code>
                </Demo>
            </div>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
import iCode from '../../../components/code';
import Demo from '../../../components/Demo';
import Code from '../../../code/doc/showOnhiddenOn';
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
