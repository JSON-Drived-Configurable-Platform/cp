<template>
    <i-article>
        <article>
            <h1>函数类型的配置项</h1>
            <p>在实际项目中，可能需要动态的更新某些控件的状态，比如动态禁用某个控件，变更Radio的选择项。</p>
            <div class="api">
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
