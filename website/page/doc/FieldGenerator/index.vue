<template>
    <i-article>
        <article>
            <h1>FieldGenerator</h1>
            <p>FieldGenerator用来生成各种类型的表单控件。</p>
            <p>一开始它仅在FormGenerator被调用，v0.11后可以直接调用。这在特定的场景下非常有用，比如编辑表格，具体可以参考<a href="">FieldGenerator的example</a></p>
            <blockquote>
                文档中在针对单个控件讲解时，都会使用这个组件来生成。虽然封装后的表单组件如Input，Select等也可以直接使用，但是并不建议，那和直接使用iView组件没有任何区别
            </blockquote>
            <inAnchor title="示例" h2 />
            <Demo title="简单示例">
                <div slot="demo">
                    <Form :model="code.simple.data.model">
                        <FieldGenerator
                            :field="code.simple.data.field"
                            :form-model="code.simple.data.model"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field</code>, <code>model</code>即可生成一个Input。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.simple.code }}</i-code>
            </Demo>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
import iCode from '../../../components/code';
import Demo from '../../../components/Demo';
import Code from '../../../code/doc/fieldGenerator';

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
        handleFieldChange(model, value) {
            // eslint-disable-next-line no-console
            console.log(model, value);
        }
    }
};
</script>

<style>

</style>
