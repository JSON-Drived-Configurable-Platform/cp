<template>
    <i-article>
        <article>
            <h1>Input</h1>
            <inAnchor title="概述" h2 />
            <p>基本表单组件，支持 input 和 textarea，并在原生控件基础上进行了功能扩展，可以组合使用。</p>
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
                    <p>通过设置<code>field</code>, <code>model</code>即可生成一个Input。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.simple.code }}</i-code>
            </Demo>
            <Demo title="尺寸">
                <div slot="demo">
                    <Form :model="code.size.data.model">
                        <FieldGenerator
                            :field="code.size.data.sizeLargeField"
                        />
                        <FieldGenerator
                            :field="code.size.data.sizeDefaultField"
                        />
                        <FieldGenerator
                            :field="code.size.data.sizeSmallField"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field.size</code>可以控制大小。</p>
                    <p>输入框有三种尺寸：大、默认（中）、小</p>
                    <p>通过设置<code>size</code>为<code>large</code>和<code>small</code>设置为大和小尺寸，不设置为默认（中）尺寸。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.size.code }}</i-code>
            </Demo>
            <Demo title="可清空">
                <div slot="demo">
                    <Form :model="code.clearable.data.model">
                        <FieldGenerator
                            :field="code.clearable.data.field"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field.clearable</code>是否展示可清空的icon</p>
                </div>
                <i-code slot="code" lang="html">{{ code.clearable.code }}</i-code>
            </Demo>
            <Demo title="带Icon">
                <div slot="demo">
                    <Form :model="code.withIcon.data.model">
                        <FieldGenerator
                            :field="code.withIcon.data.field"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field.icon</code>可以控制展示icon</p>
                </div>
                <i-code slot="code" lang="html">{{ code.withIcon.code }}</i-code>
            </Demo>
            <Demo title="前缀和后缀图标">
                <div slot="demo">
                    <Form :model="code.prefixAndSuffix.data.model">
                        <FieldGenerator
                            :field="code.prefixAndSuffix.data.prefixField"
                        />
                        <FieldGenerator
                            :field="code.prefixAndSuffix.data.suffixField"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field.prefix</code>、<code>field.suffix</code>可以给input添加前后缀icon。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.prefixAndSuffix.code }}</i-code>
            </Demo>
            <Demo title="搜索框">
                <div slot="demo">
                    <Form :model="code.search.data.model">
                        <FieldGenerator
                            :field="code.search.data.searchField"
                        />
                        <FieldGenerator
                            :field="code.search.data.enterButtonField"
                        />
                        <FieldGenerator
                            :field="code.search.data.searchWithEnterButtonField"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field.search</code>、<code>field.enterButton</code>可以展示搜索框</p>
                    <blockquote>
                        按enter键和点击搜索按钮，仅触发handleFieldChange事件，没有对应的onSearch事件
                    </blockquote>
                </div>
                <i-code slot="code" lang="html">{{ code.search.code }}</i-code>
            </Demo>
            <Demo title="文本域">
                <div slot="demo">
                    <Form :model="code.textarea.data.model">
                        <FieldGenerator
                            :field="code.textarea.data.field"
                            :form-model="code.textarea.data.model"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field.subtype</code>可以展示文本域</p>
                    <p>通过设置<code>field.rows</code>来控制默认展示行数</p>
                </div>
                <i-code slot="code" lang="html">{{ code.textarea.code }}</i-code>
            </Demo>
            <Demo title="适应文本高度的文本域">
                <div slot="demo">
                    <Form :model="code.aotusizeTextarea.data.model">
                        <FieldGenerator
                            :field="code.aotusizeTextarea.data.field"
                            :form-model="code.aotusizeTextarea.data.model"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field.autosize</code>可以使文本域大小适应内容</p>
                </div>
                <i-code slot="code" lang="html">{{ code.aotusizeTextarea.code }}</i-code>
            </Demo>
            <Demo title="禁用">
                <div slot="demo">
                    <Form :model="code.disabled.data.model">
                        <FieldGenerator
                            :field="code.disabled.data.inputField"
                            :form-model="code.disabled.data.model"
                        />
                        <FieldGenerator
                            :field="code.disabled.data.textareaField"
                            :form-model="code.disabled.data.model"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field.disabled</code>可以禁用输入框</p>
                </div>
                <i-code slot="code" lang="html">{{ code.disabled.code }}</i-code>
            </Demo>
            <Demo title="复合型输入框">
                <div slot="demo">
                    <Form :model="code.prependAndAppend.data.model">
                        <FieldGenerator
                            :field="code.prependAndAppend.data.prependField"
                        />
                        <FieldGenerator
                            :field="code.prependAndAppend.data.appendField"
                        />
                        <FieldGenerator
                            :field="code.prependAndAppend.data.prependAndappendField"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field.prepend</code>或者<code>field.prepend</code>可以实现复合型输入框。</p>
                    <blockquote>
                        不支持<code>Select</code>类型的复合型输入。
                    </blockquote>
                </div>
                <i-code slot="code" lang="html">{{ code.prependAndAppend.code }}</i-code>
            </Demo>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
import iCode from '../../../components/code';
import Demo from '../../../components/demo';
import Code from '../../../code/doc/input';

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
