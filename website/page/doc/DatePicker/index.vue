<template>
    <i-article>
        <article>
            <h1>DatePicker 日期选择器</h1>
            <inAnchor title="概述" h2 />
            <p>选择或输入日期，支持年、月、日期等类型，支持选择范围。</p>
            <div class="api">
                <inAnchor title="配置快速查询" h2 />
            </div>
            <inAnchor title="代码示例" h2 />
            <Demo title="基础用法">
                <div slot="demo">
                    <FieldGenerator
                        :field="code.simple.data.field"
                        :form-model="code.simple.data.model"
                        @on-field-change="handleFieldChange"
                    />
                    <FieldGenerator
                        :field="code.simple.data.daterangeField"
                        :form-model="code.simple.data.model"
                        @on-field-change="handleFieldChange"
                    />

                </div>
                <div slot="desc">
                    <p>设置属性 type 为 date 或 daterange 分别显示选择单日和选择范围类型。</p>
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
import Code from '../../../code/doc/datePicker';

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
.fg-ivu-datepicker {
    margin-top: 20px;
}
</style>
