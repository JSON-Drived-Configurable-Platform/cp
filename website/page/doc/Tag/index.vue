<template>
    <i-article>
        <article>
            <h1>Tag</h1>
            <inAnchor title="概述" h2 />
            <p>Tag</p>
            <inAnchor title="代码示例" h2 />
            <Demo title="基础用法">
                <div slot="demo">
                    <Form :model="code.simple.data.model">
                        <FieldGenerator
                            :field="code.simple.data.field"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p></p>
                </div>
                <i-code slot="code" lang="html">{{ code.simple.code }}</i-code>
            </Demo>
            <Demo title="数组">
                <div slot="demo">
                    <Form :model="code.multiple.data.model">
                        <FieldGenerator
                            :field="code.multiple.data.field"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p></p>
                </div>
                <i-code slot="code" lang="html">{{ code.multiple.code }}</i-code>
            </Demo>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
import iCode from '../../../components/code';
import Demo from '../../../components/Demo';
import Code from '../../../code/doc/tag';

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
