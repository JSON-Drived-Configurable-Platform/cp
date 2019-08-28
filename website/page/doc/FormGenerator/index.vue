<template>
    <i-article>
        <article>
            <h1>FormGenerator</h1>
            <p>在iView表单的基础上，新增了几种中台中常用的类型：逻辑输入、逻辑选择，对于文件上传，实现了图片上传和视频上传。</p>
            <!-- 对于视频上传，我们还做了分片上传的方案。 -->
            <inAnchor title="示例" h2 />
            <Demo title="简单示例">
                <div slot="demo">
                    <FormGenerator
                        :fields="code.simple.data.fields"
                        :model="code.simple.data.model"
                        :options="code.simple.data.options"
                    />
                </div>
                <div slot="desc">
                    <p>FormGenerator组件依赖三个属性: <code>fields</code>, <code>model</code>, <code>options</code>。</p>
                    <p>通过设置<code>fields</code>, <code>model</code>, <code>options</code>即可生成一个表单UI。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.simple.code }}</i-code>
            </Demo>
            <Demo title="表单控件">
                <div slot="demo">
                    <FormGenerator
                        :fields="code.form.data.fields"
                        :model="code.form.data.model"
                        :options="code.form.data.options"
                    />
                </div>
                <div slot="desc">
                    <!-- <p>FormGenerator组件依赖三个属性: <code>fields</code>, <code>model</code>, <code>options</code>。</p> -->
                    <!-- <p>通过设置<code>fields</code>, <code>model</code>, <code>options</code>即可生成一个表单UI。</p> -->
                </div>
                <i-code slot="code" lang="html">{{ code.form.code }}</i-code>
            </Demo>
            <Demo title="校验">
                <div slot="demo">
                    <FormGenerator
                        :fields="code.validate.data.fields"
                        :model="code.validate.data.model"
                        :options="code.validate.data.options"
                    />
                </div>
                <div slot="desc">
                    <!-- <p>validateGenerator组件依赖三个属性: <code>fields</code>, <code>model</code>, <code>options</code>。</p> -->
                    <!-- <p>通过设置<code>fields</code>, <code>model</code>, <code>options</code>即可生成一个表单UI。</p> -->
                </div>
                <i-code slot="code" lang="html">{{ code.validate.code }}</i-code>
            </Demo>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
import iCode from '../../../components/code';
import Demo from '../../../components/Demo';
import Code from '../../../code/doc/formGenerator';
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
    }
};
</script>

<style>

</style>
