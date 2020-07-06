<template>
    <i-article>
        <article>
            <h1>联动配置</h1>
            <inAnchor title="概述" h2 />
            <p>配置联动，是指一个控件的配置项依赖其它值。可以通过函数类型的配置来实现。</p>
            <div class="api">
                <inAnchor title="配置快速查询" h2 />
                <p />
                <inAnchor title="代码示例" h2 />

                <Demo title="控件的field为函数">
                    <div slot="demo">
                        <FormGenerator
                            :fields="code.simple.data.field"
                            :model="code.simple.data.model"
                        />
                    </div>
                    <div slot="desc">
                        支持配置项设置为函数，paramsContainer中包含当前表单的model的值和外部传入的参数的集合。
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
import Code from '../../../code/development/function-field';

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
};
</script>

<style>

</style>
