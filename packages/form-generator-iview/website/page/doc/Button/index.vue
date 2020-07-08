<template>
    <i-article>
        <article>
            <h1>Button</h1>
            <inAnchor title="概述" h2 />
            <p>基础组件-按钮。主要用于在配置表单中一些额外的交互操作。</p>
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
                            <td>行为类型，目前支持事件、ajax请求、Route、Url四中形态，分别通过event、ajax、route、url来标识</td>
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
                        <tr>
                            <td>action.route</td>
                            <td>
                                当 action.type 为 route 时，可以指定action.route， 触发点击后会向该接口返送请求。
                                <br>
                                <strong>另外一种常用的指定action.route方法是，申明field.model，然后会从form.model中获取对应的route值，参考下面的示例:</strong>
                                <br>
                                <span>form.model</span>
                                <pre>
{{ JSON.stringify(code.route.data.model, null, 4) }}
                                </pre>
                                <span>Button.field</span>
                                <pre>
{{ JSON.stringify(code.route.data.field, null, 4) }}
                                </pre>
                            </td>
                            <td>String</td>
                            <td>当 action.name 为 ajax 时，必填</td>
                        </tr>
                        <tr>
                            <td>action.url</td>
                            <td>
                                当 action.type 为 url 时，可以指定action.url， 触发点击后会向该接口返送请求。
                                <br>
                                <strong>另外一种常用的指定action.url方法是，申明field.model，然后会从form.model中获取对应的route值，参考下面的示例:</strong>
                                <br>
                                <span>form.model</span>
                                <pre>
{{ JSON.stringify(code.url.data.model, null, 4) }}
                                </pre>
                                <span>Button.field</span>
                                <pre>
{{ JSON.stringify(code.url.data.field, null, 4) }}
                                </pre>
                            </td>
                            <td>String</td>
                            <td>当 action.name 为 ajax 时，必填</td>
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>on-button-event</td>
                            <td>action.type 为 event 或 ajax 时，点击按钮触发</td>
                            <td>$event, ({name, field, res})，其中name为事件名称，field为完整配置项，res为请求的结果或者error信息。</td>
                        </tr>
                        <tr>
                            <td>on-button-cancel</td>
                            <td>
                                点击取消的回调，只在 confirm 模式下有效
                            </td>
                            <td>$event: 组件示例</td>
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
                            @on-button-event="handleButtonEvent"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field</code>即可生成一个Button按钮，点击触发一个事件</p>
                </div>
                <i-code slot="code" lang="html">{{ code.simple.code }}</i-code>
            </Demo>

            <Demo title="route">
                <div slot="demo">
                    <Form :model="code.route.data.model">
                        <FieldGenerator
                            :field="code.route.data.field"
                            @on-button-event="handleButtonEvent"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field.action.type</code>为<code>route</code>可以跳转到指定的route</p>
                </div>
                <i-code slot="code" lang="html">{{ code.route.code }}</i-code>
            </Demo>


            <Demo title="链接">
                <div slot="demo">
                    <Form :model="code.url.data.model">
                        <FieldGenerator
                            :field="code.url.data.field"
                            @on-button-event="handleButtonEvent"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field.action.type</code>为<code>url</code>即可生成一个Button按钮</p>
                </div>
                <i-code slot="code" lang="html">{{ code.url.code }}</i-code>
            </Demo>

            <Demo title="点击发送Ajax请求">
                <div slot="demo">
                    <Form :model="code.ajax.data.model">
                        <FieldGenerator
                            :field="code.ajax.data.field"
                            @on-button-event="handleButtonEvent"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>
                        通过设置<code>field.action.type</code>为<code>ajax</code>，并设置<code>field.api</code>，即可通过点击按钮发送请求。
                        <br>
                        发送请求默认会携带form.model作为参数，可以通过paramsContainer传入外部参数，并可通过apiParams选择所需的参数。
                    </p>
                </div>
                <i-code slot="code" lang="html">{{ code.ajax.code }}</i-code>
            </Demo>

            <Demo title="从数据中获取按钮文案">
                <div slot="demo">
                    <Form :model="code.textModel.data.model">
                        <FieldGenerator
                            :field="code.textModel.data.field"
                            @on-button-event="handleButtonEvent"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field.textModel</code>可以指定按钮的文案对应model的值。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.textModel.code }}</i-code>
            </Demo>

            <Demo title="结合toolTip">
                <div slot="demo">
                    <Form :model="code.ajax.data.model">
                        <FieldGenerator
                            :field="code.confirm.data.field"
                            @on-button-event="handleButtonEvent"
                            @on-button-cancel="handleButtonCancel"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>设置<code>field.confirmPoptip</code>，点击按钮会先出现确认弹框。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.confirm.code }}</i-code>
            </Demo>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
import iCode from '../../../components/code';
import Demo from '../../../components/demo';
import Code from '../../../code/doc/button';
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
        handleButtonEvent($event) {
            // eslint-disable-next-line no-console
            console.log($event);
            const res = JSON.stringify($event.res) ? `res: ${JSON.stringify($event.res)}` : '';
            this.$Message.info(`event: ${$event.name} has been triggered!${res}`);
        },
        handleButtonCancel($event) {
            // eslint-disable-next-line no-console
            console.log($event);
            // this.$Message.info(`event: ${$event.name} has been triggered`);
        }
    }
};
</script>
