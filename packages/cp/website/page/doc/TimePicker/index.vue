<template>
    <i-article>
        <article>
            <h1>TimePicker 时间选择器</h1>
            <inAnchor title="概述" h2 />
            <p>选择或输入标准时间，支持选择范围。</p>
            <div class="api">
                <inAnchor title="配置快速查询" h2 />
            </div>
            <inAnchor title="代码示例" h2 />
            <Demo title="基础用法">
                <div slot="demo">
                    <Form :model="code.simple.data.model">
                        <FieldGenerator
                            :field="code.simple.data.field"
                            @on-field-change="handleFieldChange"
                        />
                        <FieldGenerator
                            :field="code.simple.data.timerangeField"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>设置属性 type 为 time 或 timerange 分别显示选择单个时间和选择范围时间类型。</p>
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
import Code from '../../../code/doc/timePicker';

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

<style scoped>
.fg-ivu-datepicker {
    margin-top: 20px;
}
</style>
