<template>
    <i-article>
        <article>
            <h1>组件联动显示和隐藏</h1>
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

                <Demo title="外部变量控制">
                    <div slot="demo">
                        <RadioGroup v-model="code.params.data.paramsContainer.isShow" size="small">
                            <Radio :label="0"> 隐藏 </Radio>
                            <Radio :label="1"> 展示 </Radio>
                        </RadioGroup>
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
                        <p>同一个表单元素同时设置showOn,hiddenOn时，满足其中一项验证规则即当项生效，同时都满足时，hiddenOn优先。我们可以利用这一点来完成业务中某些复杂的逻辑判断。</p>
                    </div>
                    <i-code slot="code" lang="html">{{ code.bothConfig.code }}</i-code>
                </Demo>
                <Demo title="复杂规则">
                    <div slot="demo">
                        <FormGenerator
                            :fields="code.validatorConfig.data.validatorFileds"
                            :model="code.validatorConfig.data.validatorModels"
                        />
                    </div>
                    <div slot="desc">
                        <p>如果表单里某个元素的展示需要依赖表单中的其他值，我们可以自定义验证规则来实现。本例为有权限并且年龄大于20岁的男性展示年龄这一项。通过自定义validateCheck方法，将对应的验证规则放到validateCheck方法中，实现验证。</p>
                    </div>
                    <i-code slot="code" lang="html">{{ code.validatorConfig.code }}</i-code>
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
import Code from '../../../code/development/showOnhiddenOn';
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
