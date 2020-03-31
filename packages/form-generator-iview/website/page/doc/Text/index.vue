<template>
    <i-article>
        <article>
            <h1>Text</h1>
            <inAnchor title="概述" h2 />
            <p>基本文本组件</p>
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
                            <td>model</td>
                            <td>绑定的值的名称</td>
                            <td>String</td>
                            <td>不可为空</td>
                        </tr>
<!--                        <tr>-->
<!--                            <td>subtype</td>-->
<!--                            <td>输入框类型，可选值为 <code>text</code>、<code>password</code>、<code>textarea</code>、<code>url</code>、<code>email</code>、<code>date</code></td>-->
<!--                            <td>String</td>-->
<!--                            <td>text</td>-->
<!--                        </tr>-->
<!--                        <tr>-->
<!--                            <td>size</td>-->
<!--                            <td>输入框尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不设置</td>-->
<!--                            <td>String</td>-->
<!--                            <td>-</td>-->
<!--                        </tr>-->
<!--                        <tr>-->
<!--                            <td>placeholder</td>-->
<!--                            <td>占位文本</td>-->
<!--                            <td>String</td>-->
<!--                            <td>-</td>-->
<!--                        </tr>-->
                        <tr>
                            <td>options</td>
                            <td>映射列表，如[{label: '西瓜', 'value': '1'},{label: '苹果', 'value': '2'}, {label: '梨', 'value': '3', disabled: true}]</td>
                            <td>Array(option)</td>
                            <td>[]</td>
                        </tr>
<!--                        <tr>-->
<!--                            <td>disabled</td>-->
<!--                            <td>设置输入框为禁用状态</td>-->
<!--                            <td>Boolean</td>-->
<!--                            <td>false</td>-->
<!--                        </tr>-->
                    </tbody>
                </table>
                <inAnchor title="option配置" h3 />
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
                            <td>label</td>
                            <td>展示项名称</td>
                            <td>String | Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>展示项值</td>
                            <td>String | Number</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>

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
                    <p>通过设置<code>field</code>, <code>model</code>即可生成一个Text。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.simple.code }}</i-code>
            </Demo>

            <Demo title="options用法">
                <div slot="demo">
                    <Form :model="code.optionExample.data.model">
                        <FieldGenerator
                            :field="code.optionExample.data.field"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field</code>, <code>model</code>即可生成一个Text。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.remote.code }}</i-code>
            </Demo>
            <Demo title="远程options用法">
                <div slot="demo">
                    <Form :model="code.remote.data.model">
                        <FieldGenerator
                            :field="code.remote.data.field"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field</code>, <code>model</code>即可生成一个Text。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.remote.code }}</i-code>
            </Demo>
            <Demo title="model值为array用法">
                <div slot="demo">
                    <Form :model="code.arrayExample.data.model">
                        <FieldGenerator
                            :field="code.arrayExample.data.field"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field</code>, <code>model</code>即可生成一个Text。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.arrayExample.code }}</i-code>
            </Demo>

        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
import iCode from '../../../components/code';
import Demo from '../../../components/Demo';
import Code from '../../../code/doc/text';

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
.fg-ivu-input {
    margin-top: 20px;
}
</style>
