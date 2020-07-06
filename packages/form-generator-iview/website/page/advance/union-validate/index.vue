<template>
    <i-article>
        <article>
            <h1>联动校验</h1>
            <inAnchor title="概述" h2 />
            <p>联动校验，是指控件的校验规则受到其它值的影响。</p>
            <div class="api">
                <inAnchor title="配置快速查询" h2 />
                <p />
                <inAnchor title="代码示例" h2 />

                <Demo title="验证规则依赖值">
                    <div slot="demo">
                        <FormGenerator
                            :fields="code.validateForm.data.fields"
                            :model="code.validateForm.data.model"
                            :options="code.validateForm.data.options"
                        />
                    </div>
                    <div slot="desc">
                        当查询条件选择立即时，条数上线必须小于1千。
                    </div>
                    <i-code slot="code" lang="html">{{ code.validateForm.code }}</i-code>
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
import Code from '../../../code/advance/union-validate';
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
