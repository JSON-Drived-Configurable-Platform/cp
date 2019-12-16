<template>
    <i-article>
        <article>
            <h1>FieldGenerator</h1>
            <p>
                用来生成一个特定的表单控件。<strong>通过 field.type 指定组件的类型。</strong>常用于解决在其他结构(如表格)中嵌入表单控件。关于支持的组件类型可以参考<router-link to="/intro#SJGL">简介中的设计概览</router-link>。
                <strong>在使用时，需要配合 iView Form组件一起使用。</strong>
            </p>
            <alert>
                文档中在针对单个控件讲解时，都会使用这个组件来生成。
            </alert>
            <div class="api">
                <inAnchor title="配置快速查询" h2 />
                <inAnchor title="核心配置" h3 />
                <table>
                    <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>field</td>
                            <td>表单项配置列表</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>requestInterceptor</td>
                            <td>表单请求的拦截器，下拉选择的列表等需要动态获取数据的组件中传入该属性后，将使用该属性声明的方法进行数据请求。</td>
                            <td>Function</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>paramsContainer</td>
                            <td>表单控件中的请求（如Select的option动态获取，Button的Ajax请求等）的额外参数的传入，通常配合表单控件的 field.apiParams 一起使用。</td>
                            <td>Object</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="通用field配置详解" h3 />
                <table>
                    <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>field.model</td>
                            <td>控件对应的表单的数据的name</td>
                            <td>String</td>
                            <td>必须</td>
                        </tr>
                        <tr>
                            <td>field.width</td>
                            <td>表单控件的宽度，如果为String， 如 100px, 100% 则为 style.with 的值；如果为Number, 如 100，则为 100px。</td>
                            <td>Number | String</td>
                            <td>'100%'</td>
                        </tr>
                        <tr>
                            <td>field.size</td>
                            <td>表单控件的大小，可选small, default, large</td>
                            <td>String</td>
                            <td>'default'</td>
                        </tr>
                        <tr>
                            <td>field.inline</td>
                            <td>是否行内布局</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="通用事件" h3 />
                <table>
                    <thead>
                        <tr>
                            <th>事件名</th>
                            <th>说明</th>
                            <th>返回值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>on-field-change</td>
                            <td>表单项数据变更时</td>
                            <td>($event) $event.model；表单项的标识；$event.value：表单项的值；</td>
                        </tr>
                    </tbody>
                </table>
            </div>
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
