<template>
    <i-article>
        <article>
            <h1>Radio</h1>
            <inAnchor title="概述" h2 />
            <p>基本组件-单选框。主要用于一组可选项单项选择</p>
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
                            <td>选项列表或者选项数据接口，如[{label: '男', 'value': 'M'},{label: '女', 'value': 'F'}, {label: '保密', 'value': 'unknown', disabled: true}]</td>
                            <td>Array(option) | String</td>
                            <td>[] | '', 如果为String则为获取选项数据的api。</td>
                        </tr>
                        <tr>
                            <td>api</td>
                            <td>获取选项的接口</td>
                            <td>String</td>
                            <td>''，api的返回值格式为{status: 0, data: [{label: '男', 'value': 'M'}]}</td>
                        </tr>
                        <tr>
                            <td>subtype</td>
                            <td>可选值为 button 或不填，为 button 时使用按钮样式</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不设置</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>vertical</td>
                            <td>是否垂直排列，按钮样式下无效</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="选项配置" h3 />
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
                            <td>选项展示名称</td>
                            <td>String|Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>选项的值</td>
                            <td>String | Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>是否禁用该选项</td>
                            <td>Boolean</td>
                            <td>false</td>
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
                    <p>通过设置<code>field</code>, <code>model</code>即可生成一个Radio。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.simple.code }}</i-code>
            </Demo>
            <Demo title="使用api获取选项信息">
                <div slot="demo">
                    <Form :model="code.api.data.model">
                        <FieldGenerator
                            :field="code.api.data.field"
                            :form-model="code.api.data.model"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field.api</code>可以动态获取选项信息</p>
                </div>
                <i-code slot="code" lang="html">{{ code.api.code }}</i-code>
            </Demo>

            <Demo title="Button形态">
                <div slot="demo">
                    <Form :model="code.button.data.model">
                        <FieldGenerator
                            :field="code.button.data.field"
                            :form-model="code.button.data.model"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field.subtype</code>为<code>button</code>可以展示为button形态</p>
                </div>
                <i-code slot="code" lang="html">{{ code.button.code }}</i-code>
            </Demo>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
import iCode from '../../../components/code';
import Demo from '../../../components/demo';
import Code from '../../../code/doc/radio';

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
