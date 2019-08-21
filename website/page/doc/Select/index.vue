<template>
    <i-article>
        <article>
            <h1>Select 下拉选择器</h1>
            <inAnchor title="概述" h2 />
            <p>使用模拟的增强下拉选择器来代替浏览器原生的选择器。</p>
            <p>选择器支持单选、多选、搜索，以及键盘快捷操作。</p>
            <div class="api">
                <inAnchor title="配置快速查询" h2 />
                <inAnchor title="核心配置" h3 />
            </div>
            <inAnchor title="代码示例" h2 />
            <Demo title="基础用法">
                <div slot="demo">
                    <FieldGenerator
                        :field="code.simple.data.field"
                        :form-model="code.simple.data.model"
                        @on-field-change="handleFieldChange"
                    />
                </div>
                <div slot="desc">
                    <p>单选时，value 只接受字符串和数字类型，多选时，只接受数组类型，组件会自动根据<code>Option</code>的<code>value</code>来返回选中的数据。</p>
                    <p>在展开选择器后，可以使用键盘的<code>up</code>和<code>down</code>快速上下选择，按下<code>Enter</code>选择，按下<code>Esc</code>收起选择器。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.simple.code }}</i-code>
            </Demo>
            <Demo title="远程获取选项">
                <div slot="demo">
                    <FieldGenerator
                        :field="code.api.data.field"
                        :form-model="code.api.data.model"
                        @on-field-change="handleFieldChange"
                    />
                </div>
                <div slot="desc">
                    可以将<code>options</code>的值设置为获取数据的接口。
                </div>
                <i-code slot="code" lang="html">{{ code.api.code }}</i-code>
            </Demo>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
import iCode from '../../../components/code';
import Demo from '../../../components/Demo';
import Code from '../../../code/doc/select';

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
.fg-ivu-input {
    margin-top: 20px;
}
</style>
