<template>
    <i-article>
        <article>
            <h1>InputMultiple</h1>
            <inAnchor title="概述" h2 />
            <p>表单组件，按照标签展示多行元素的input组件；组件内部用到的组件有：Input、Tag</p>
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
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>defaultList</td>
                            <td>默认包含的成员（默认的成员始终展示，并且不可删除）</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>succMessage</td>
                            <td>添加成员后，提示信息</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>delMessage</td>
                            <td>删除成员后，提示信息</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>closable</td>
                            <td>是否支持删除成员（只对非默认的成员有效）</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>subtype</td>
                            <td>输入框类型，可选值为 <code>text</code>、<code>password</code>、<code>textarea</code>、<code>url</code>、<code>email</code>、<code>date</code></td>
                            <td>String</td>
                            <td>text</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>输入框尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不设置</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>placeholder</td>
                            <td>占位文本</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>clearable</td>
                            <td>是否显示清空按钮</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>设置输入框为禁用状态</td>
                            <td>Boolean</td>
                            <td>false</td>
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
                            <td>readonly</td>
                            <td>设置输入框为只读</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>maxlength</td>
                            <td>最大输入长度</td>
                            <td>Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>icon</td>
                            <td>输入框尾部图标，仅在 text 类型下有效</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>prefix</td>
                            <td>输入框头部图标</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>suffix</td>
                            <td>输入框尾部图标</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>search</td>
                            <td>是否显示为搜索型输入框</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>enter-button</td>
                            <td>开启 search 时可用，是否有确认按钮，可设为按钮文字</td>
                            <td>Boolean | String</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>rows</td>
                            <td>文本域默认行数，仅在 textarea 类型下有效</td>
                            <td>Number</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>autosize</td>
                            <td>自适应内容高度，仅在 textarea 类型下有效，可传入对象，如 { minRows: 2, maxRows: 6 }</td>
                            <td>Boolean | Object</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>number</td>
                            <td>将用户的输入转换为 Number 类型</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>autofocus</td>
                            <td>自动获取焦点</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>autocomplete</td>
                            <td>原生的自动完成功能，可选值为 off 和 on</td>
                            <td>String</td>
                            <td>off</td>
                        </tr>
                        <!-- <tr>
                            <td>element-id</td>
                            <td>给表单元素设置 <code>id</code>，详见 Form 用法。</td>
                            <td>String</td>
                            <td>-</td>
                        </tr> -->
                        <tr>
                            <td>spellcheck</td>
                            <td>原生的 spellcheck 属性</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <!-- <tr>
                            <td>wrap</td>
                            <td>原生的 wrap 属性，可选值为 hard 和 soft，仅在 textarea 下生效</td>
                            <td>String</td>
                            <td>soft</td>
                        </tr> -->
                        <tr>
                            <td>prepend</td>
                            <td>复合型输入前置信息，仅展示使用，不影响输入值</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>append</td>
                            <td>复合型输入后置信息，仅展示使用，不影响输入值</td>
                            <td>String</td>
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
                    <p>通过设置<code>field</code>, <code>model</code>即可生成一个InputMultiple。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.simple.code }}</i-code>
            </Demo>
            <Demo title="设置默认成员">
                <div slot="demo">
                    <Form :model="code.defMember.data.model">
                        <FieldGenerator
                            :field="code.defMember.data.field"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field</code>, <code>model</code>即可生成一个InputMultiple。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.defMember.code }}</i-code>
            </Demo>
            <Demo title="设置：添加的成员不可删除">
                <div slot="demo">
                    <Form :model="code.closable.data.model">
                        <FieldGenerator
                            :field="code.closable.data.field"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field</code>, <code>model</code>即可生成一个InputMultiple。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.closable.code }}</i-code>
            </Demo>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
import iCode from '../../../components/code';
import Demo from '../../../components/demo';
import Code from '../../../code/doc/inputmultiple';

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
    created() {
        console.log('field', this.code);
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
.fg-ivu-inputmultiple {
    margin-top: 20px;
}
</style>
