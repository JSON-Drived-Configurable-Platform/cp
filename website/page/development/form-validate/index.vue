<template>
    <i-article>
        <article>
            <h1>表单校验</h1>
            <inAnchor title="概述" h2 />
            <p>在某些提交表单场景中，我们常常会需要进行表单的验证以引导用户填入符合规则的值，这时我们就需要在提交之前告知用户应该以什么样的规则填入表单。</p>
            <div class="api">
                <inAnchor title="配置快速查询" h2 />
                <p>基于async-validator实现的数据验证，具体规则形式请参考<a href="https://github.com/yiminghe/async-validator" target="_blank"><i class="ivu-icon ivu-icon-social-github" /> async-validator</a>。</p>
                <inAnchor title="代码示例" h2 />
                <Demo title="基础用法">
                    <div slot="demo">
                        <FormGenerator
                            :fields="code.simple.data.fields"
                            :model="code.simple.data.model"
                        />
                    </div>
                    <div slot="desc">
                        <p>通过设置required属性增加表单必填验证。提示消息为label标签值+不可为空</p>
                    </div>
                    <i-code slot="code" lang="html">{{ code.simple.code }}</i-code>
                </Demo>
                <Demo title="更加多样的表单验证">
                    <div slot="demo">
                        <FormGenerator
                            :fields="code.params.data.paramsRules"
                            :model="code.params.data.paramsModel"
                        />
                    </div>
                    <div slot="desc">
                        <p>在某些场景下，需要更明确的告知用户填入什么样的信息，这时可以自定义验证规则，通过type定义输入类型，通过message定义提示用户信息。</p>
                    </div>
                    <i-code slot="code" lang="html">{{ code.params.code }}</i-code>
                </Demo>
                <Demo title="包含某一个值">
                    <div slot="demo">
                        <FormGenerator
                            :fields="code.enumConfig.data.enumFileds"
                            :model="code.enumConfig.data.enumModels"
                        />
                    </div>
                    <div slot="desc">
                        <p>type为enum时可以定义用户输入值中要包含的信息</p>
                    </div>
                    <i-code slot="code" lang="html">{{ code.enumConfig.code }}</i-code>
                </Demo>
                <Demo title="复杂规则">
                    <div slot="demo">
                        <FormGenerator
                            :fields="code.validatorConfig.data.validatorFileds"
                            :model="code.validatorConfig.data.validatorModels"
                        />
                    </div>
                    <div slot="desc">
                        <p>如果有些值验证比较复杂可以通过自定义函数来实现，通过定义validator函数才实现自定义控制。</p>
                    </div>
                    <i-code slot="code" lang="html">{{ code.validatorConfig.code }}</i-code>
                </Demo>
                <Demo title="异步复杂规则">
                    <div slot="demo">
                        <FormGenerator
                            :fields="code.asyncValidatorConfig.data.asyncValidatorFileds"
                            :model="code.asyncValidatorConfig.data.asyncValidatorModels"
                        />
                    </div>
                    <div slot="desc">
                        <p>如果有些值验证比较复杂可以通过自定义函数来实现，通过定义asyncValidator函数才实现自定义控制。</p>
                    </div>
                    <i-code slot="code" lang="html">{{ code.asyncValidatorConfig.code }}</i-code>
                </Demo>
                <inAnchor title="提交按钮也会走验证逻辑" h2 />
                <Demo title="提交按钮验证规则">
                    <div slot="demo">
                        <FormGenerator
                            :fields="code.submitConfig.data.submitFileds"
                            :model="code.submitConfig.data.submitModels"
                        />
                    </div>
                    <div slot="desc">
                        <p>当通知field设置Submit类型的组件时，这个组件会自带提交验证绑定model值的功能，如果不符合规则会阻止提交。</p>
                    </div>
                    <i-code slot="code" lang="html">{{ code.submitConfig.code }}</i-code>
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
import Code from '../../../code/doc/formValidate';
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
