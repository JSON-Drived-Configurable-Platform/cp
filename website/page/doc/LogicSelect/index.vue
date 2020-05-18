<template>
    <i-article>
        <article>
            <h1>LogicSelect 逻辑选择</h1>
            <inAnchor title="概述" h2 />
            <p>逻辑选择</p>
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
                            <td>type</td>
                            <td>LogicInput、LogicSelect</td>
                            <td>String</td>
                            <td>不可为空</td>
                        </tr>
                        <tr>
                            <td>enables</td>
                            <td>逻辑选择,选项的数据：['=', '>', '>=', '<', '<=', 'betweenIn', 'betweenWith', '!=', 'multiple']</td>
                            <td>String</td>
                            <td>'<' (小于)</td>
                        </tr>
                        <tr>
                            <td>options</td>
                            <td>选项列表或者选项数据接口，如[{label: '1.0', 'value': '1.0'},{label: '2.0', 'value': '2.0'}, {label: '3.0', 'value': '3.0', disabled: true}]</td>
                            <td>Array(option) | String</td>
                            <td>[] | '', 如果为String则为获取选项数据的api。</td>
                        </tr>
                        <tr>
                            <td>api</td>
                            <td>获取选项的接口</td>
                            <td>String</td>
                            <td>''，api的返回值格式为{status: 0, data: [{label: '1.0', 'value': '1.0'}]}</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="扩展配置" h3 />
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
                            <td>required</td>
                            <td>是否必须选择</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>尺寸，可选值为large、small、default或者不设置</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>是否禁用选择器</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>multiple</td>
                            <td>是否支持多选</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="Option配置" h3 />
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
                            <td>value</td>
                            <td>选项值，默认根据此属性值进行筛选，必填</td>
                            <td>String | Number</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>label</td>
                            <td>选项显示的内容，默认优先读取该 label 值，无 label 时，读取 value。当选中时，选择器会显示 label 为已选文案。</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>是否禁用当前项</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <inAnchor title="代码示例" h2 />
            <Demo title="LogicSelect 基础用法">
                <div slot="demo">
                    <Form :model="code.simple.data.model">
                        <FieldGenerator
                            :field="code.simple.data.field"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field</code>, <code>model</code>即可生成一个LogicSelect。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.simple.code }}</i-code>
            </Demo>
            <Demo title="LogicInput 基础用法">
                <div slot="demo">
                    <Form :model="code.logicInput.data.model">
                        <FieldGenerator
                            :field="code.logicInput.data.field"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field</code>, <code>model</code>即可生成一个LogicInput。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.logicInput.code }}</i-code>
            </Demo>
            <Demo title="逻辑选择Api">
                <div slot="demo">
                    <Form :model="code.LogicSelectApi.data.model">
                        <FieldGenerator
                            :field="code.LogicSelectApi.data.field"
                            :form-model="code.LogicSelectApi.data.model"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field</code>, <code>model</code>即可生成一个LogicSelect。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.LogicSelectApi.code }}</i-code>
            </Demo>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
import iCode from '../../../components/code';
import Demo from '../../../components/demo';
import Code from '../../../code/doc/logicSelect';

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
