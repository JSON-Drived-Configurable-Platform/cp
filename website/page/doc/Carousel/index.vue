<template>
    <i-article>
        <article>
            <h1>Carousel 走马灯</h1>
            <inAnchor title="概述" h2 />
            <p>走马灯</p>
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
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field</code>, <code>model</code>即可生成一个Cascader。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.simple.code }}</i-code>
            </Demo>
            <Demo title="视频">
                <div slot="demo">
                    <Form :model="code.video.data.model">
                        <FieldGenerator
                            :field="code.video.data.field"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field</code>, <code>model</code>即可生成一个Cascader。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.video.code }}</i-code>
            </Demo>
            <Demo title="值作为列表">
                <div slot="demo">
                    <Form :model="code.valueAsOptions.data.model">
                        <FieldGenerator
                            :field="code.valueAsOptions.data.field"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field</code>, <code>model</code>即可生成一个Cascader。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.valueAsOptions.code }}</i-code>
            </Demo>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
import iCode from '../../../components/code';
import Demo from '../../../components/demo';
import Code from '../../../code/doc/carousel';

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
        handleFieldChange({model, value}) {
            // eslint-disable-next-line no-console
            console.log(model, value);
        }
    }
};
</script>
