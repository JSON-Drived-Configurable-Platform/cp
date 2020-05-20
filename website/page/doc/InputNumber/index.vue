<template>
    <i-article>
        <article>
            <h1>InputNumber 数值输入</h1>
            <inAnchor title="概述" h2 />
            <p>使用鼠标或键盘输入一定范围的标准数值。</p>
            <div class="api">
                <inAnchor title="配置快速查询" h2 />
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
                            <td>InputNumber</td>
                            <td>String</td>
                            <td>不可为空</td>
                        </tr>
                        <tr>
                            <td>max</td>
                            <td>最大值</td>
                            <td>Number</td>
                            <td>Infinity</td>
                        </tr>
                        <tr>
                            <td>min</td>
                            <td>最小值</td>
                            <td>Number</td>
                            <td>-Infinity</td>
                        </tr>
                        <tr>
                            <td>step</td>
                            <td>每次改变的步伐，可以是小数</td>
                            <td>Number</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>输入框尺寸，可选值为large、small、default或者不填</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>设置禁用状态</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>placeholder</td>
                            <td>占位文本</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>readonly</td>
                            <td>是否设置为只读</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>precision</td>
                            <td>数值精度</td>
                            <td>Number</td>
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
                    <p>通过设置<code>field</code>, <code>model</code>即可生成一个InputNumber。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.simple.code }}</i-code>
            </Demo>
            <Demo title="小数">
                <div slot="demo">
                    <Form :model="code.simple.data.model">
                        <FieldGenerator
                            :field="code.simple.data.stepField"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>step</code>属性控制每次改变的精度。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.simple.stepCode }}</i-code>
            </Demo>
            <Demo title="尺寸">
                <div slot="demo">
                    <Form :model="code.simple.data.model">
                        <FieldGenerator
                            :field="code.simple.data.smallField"
                            @on-field-change="handleFieldChange"
                        />
                        <FieldGenerator
                            :field="code.simple.data.field"
                            @on-field-change="handleFieldChange"
                        />
                        <FieldGenerator
                            :field="code.simple.data.largeField"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>size</code>, 属性为<code>model</code>即可生成一个InputNumber。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.simple.smallCode }}</i-code>
            </Demo>
            <Demo title="disabled">
                <div slot="demo">
                    <Form :model="code.simple.data.model">
                        <FieldGenerator
                            :field="code.simple.data.disabledField"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>disabled</code>属性禁用输入框，点击按钮切换状态。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.simple.disabledCode }}</i-code>
            </Demo>
            <Demo title="readonly(只读)">
                <div slot="demo">
                    <Form :model="code.simple.data.model">
                        <FieldGenerator
                            :field="code.simple.data.readonlyField"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>step</code>属性控制每次改变的精度。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.simple.readonlyCode }}</i-code>
            </Demo>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
import iCode from '../../../components/code';
import Demo from '../../../components/demo';
import Code from '../../../code/doc/inputNumber';

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
