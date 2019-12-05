<template>
    <i-article>
        <article>
            <h1>Submit</h1>
            <inAnchor title="概述" h2 />
            <p>基础组件-提交。主要用于控制表单的提交操作，如果表单有校验配置，会自动触发校验。</p>
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
                            <td>subtype</td>
                            <td>button 的样式</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不设置</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>

                <inAnchor title="事件" h3 />
                <table>
                    <thead>
                        <tr>
                            <th width="160">方法名</th>
                            <th>说明</th>
                            <th>参数</th>
                            <th>返回值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>on-submit</td>
                            <td>
                                点击提交按钮时触发，如果有校验规则，会自动触发校验。<strong>校验成功后才会触发该事件。</strong>
                                <br>
                                action.type 为 ajax 时，请求成功会 emit 一个 on-button-event 事件， name 为 ajaxSuccess。
                            </td>
                            <td>
                                model， 所在 form 的 model
                            </td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <inAnchor title="代码示例" h2 />
            <Demo title="基础用法">
                <div slot="demo">
                    <Form :model="code.model">
                        <FieldGenerator
                            :field="code.fieldInput"
                            @on-field-change="handleFieldChange"
                        />
                        <FieldGenerator
                            :field="code.simple.data.field"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field</code>即可生成一个Submit按钮</p>
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
import Code from '../../../code/doc/submit';
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
