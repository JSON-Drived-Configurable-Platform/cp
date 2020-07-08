<template>
    <i-article>
        <article>
            <h1>Submit</h1>
            <inAnchor title="概述" h2 />
            <p>基础组件-提交。主要用于控制表单的提交操作，主要有以下几个功能：</p>
            <ul>
                <li>（1）、点击会触发on-submit事件；</li>
                <li>（2）、如果有校验规则，则会先触发校验，然后再触发on-submit；</li>
                <li>（3）、如果action.type为ajax，则会通过ajax请求提交数据，再触发on-submit事件；</li>
                <!-- <li>（4）、如果配置了action.onSuccess或者action.onFail，则会在提交成功或者失败时触发on-submit事件</li> -->
            </ul>
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
                        <tr>
                            <td>disabled</td>
                            <td>设置按钮为禁用状态</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>textModel</td>
                            <td>按钮文案对应的model属性，指定后将从<code>form.model</code>里面获取按钮的文案</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>confirmPoptip</td>
                            <td>配置后，点击按钮，会触发确认提示</td>
                            <td>Object</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>confirmPoptip.title</td>
                            <td>确认提示弹框的标题</td>
                            <td>Object</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>confirmPoptip.okText</td>
                            <td>确定按钮的文字，只在 confirm 模式下有效</td>
                            <td>String</td>
                            <td>确定</td>
                        </tr>
                        <tr>
                            <td>confirmPoptip.cancelText</td>
                            <td>取消按钮的文字，只在 confirm 模式下有效</td>
                            <td>String</td>
                            <td>取消</td>
                        </tr>
                        <tr>
                            <td>confirmPoptip.placement</td>
                            <td>确认提示弹框的的位置</td>
                            <td>Object</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>confirmPoptip.classes</td>
                            <td>确认提示弹框的的位置类名</td>
                            <td>Object</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>action</td>
                            <td>按钮的行为配置</td>
                            <td>Object</td>
                            <td>必填，且内置type不可为空</td>
                        </tr>
                    </tbody>
                </table>

                <inAnchor title="action配置" h3 />
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
                            <td>action.type</td>
                            <td>行为类型，目前支持事件、ajax请求，分别通过event、ajax来标识</td>
                            <td>String</td>
                            <td>必填</td>
                        </tr>
                        <tr>
                            <td>action.name</td>
                            <td>当 action.type 为 event 时，需要指定name</td>
                            <td>String</td>
                            <td>当action.name为event时，必填</td>
                        </tr>
                        <tr>
                            <td>action.api</td>
                            <td>当 action.type 为 ajax 时，需要指定api， 触发点击后会向该接口返送请求。</td>
                            <td>String</td>
                            <td>当 action.name 为 ajax 时，必填</td>
                        </tr>
                        <tr>
                            <td>action.method</td>
                            <td>当 action.type 为 ajax 时，可以指定请求方式get、post、put等</td>
                            <td>String</td>
                            <td>非必填，默认值为get</td>
                        </tr>
                        <!-- 为了保持API简洁性，暂时移出该特性，默认总是触发 on-submit， 业务层可以忽略 -->
                        <!-- <tr>
                            <td>action.onSucess</td>
                            <td>监听请求成功时的回调开关，一旦开启需自行监听on-submit事件</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>action.onFail</td>
                            <td>监听请求失败时的回调开关（包括请求超时和返回非0错误码），一旦开启需自行监听on-submit事件</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr> -->
                    </tbody>
                </table>

                <inAnchor title="事件" h3 />
                <table>
                    <thead>
                        <tr>
                            <th width="160">方法名</th>
                            <th>说明</th>
                            <th>返回值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>on-submit</td>
                            <td>点击提交按钮后触发</td>
                            <td>$event = ({valid, model, field, res})，其中res为提交请求的返回值或者错误信息</td>
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
                            @on-submit="handleSubmit"
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
import Demo from '../../../components/demo';
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
        },
        handleSubmit(valid, model, field, res) {
            // eslint-disable-next-line no-console
            console.log(valid, model, field, res);
        }
    }
};
</script>
