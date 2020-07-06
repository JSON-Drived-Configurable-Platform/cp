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
            </div>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
// import iCode from '../../../components/code';
// import Demo from '../../../components/demo';
import Code from '../../../code/development/formValidate';
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
    },
    methods: {
        handleFieldChange() {}
    }
};
</script>

<style>

</style>
