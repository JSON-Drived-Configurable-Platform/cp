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
                        <tr>
                            <td>options</td>
                            <td>映射列表，如[{label: '西瓜', 'value': '1'},{label: '苹果', 'value': '2'}, {label: '梨', 'value': '3', disabled: true}]</td>
                            <td>Array(option)</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>nullValue</td>
                            <td>当value值不存在于options列表时，text项显示的值<br/>当nullValue为null时，展示原始value值</td>
                            <td>String|null</td>
                            <td>-</td>
                        </tr>
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
            <Demo title="model值在option中不存在的情况">
                <div slot="demo">
                    <Form :model="code.nullExample.data.model">
                        <FieldGenerator
                            :field="code.nullExample.data.field"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field</code>, <code>model</code>即可生成一个Text。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.nullExample.code }}</i-code>
            </Demo>
            <Demo title="自定义空值">
                <div slot="demo">
                    <Form :model="code.myNullExample.data.model">
                        <FieldGenerator
                            :field="code.myNullExample.data.field"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field</code>, <code>model</code>即可生成一个Text。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.myNullExample.code }}</i-code>
            </Demo>
            <Demo title="自定义空值为null">
                <div slot="demo">
                    <Form :model="code.originalNullExample.data.model">
                        <FieldGenerator
                            :field="code.originalNullExample.data.field"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>当空值为null时，显示本来的value值</p>
                </div>
                <i-code slot="code" lang="html">{{ code.originalNullExample.code }}</i-code>
            </Demo>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
import iCode from '../../../components/code';
import Demo from '../../../components/demo';
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
