<template>
    <i-article>
        <article>
            <h1>组件联动显示和隐藏</h1>
            <inAnchor title="概述" h2 />
            <p>在某些业务场景中，我们常常会需要根据某些字段来判断元素的显示隐藏(比如：权限控制),利用showOn和hiddenOn两个api，可以很好的实现这一点。我们可以把控制显示或者隐藏的字段放在表单的model中，或者在页面全局变量paramContainer中使用。</p>
            <div class="api">
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
                    <!-- <i-code slot="code" lang="html">{{ code.simple.code }}</i-code> -->
                </Demo>
                <!-- <Demo title="全局变量控制">
                    <div slot="demo">
                        <FormGenerator
                            :fields="code.params.data.paramsFields"
                            :model="code.params.data.paramsModel"
                            :params-container="code.params.data.paramsContainer"
                        />
                    </div>
                    <div slot="desc">
                        <p>在某些场景下，控制元素显示（隐藏）的字段可能不在表单中返回，这时，我们就可以使用paramContainer来实现元素的显示（隐藏）这一功能，只需要把变量放到paramContainer中就可以了。</p>
                    </div>
                    <i-code slot="code" lang="html">{{ code.params.code }}</i-code>
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
                </Demo> -->
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
