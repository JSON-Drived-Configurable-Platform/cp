<template>
    <i-article>
        <article>
            <h1>Input</h1>
            <inAnchor title="概述" h2 />
            <p>aaaa</p>

            <inAnchor title="代码示例" h2 />
            <Demo title="基础用法">
                <div slot="demo">
                    <FieldGenerator
                        :field="code.simple.data.field"
                        :form-model="code.simple.data.model"
                        @on-field-change="handleFieldChange"
                    />
                </div>
                <div slot="desc">
                    <p>通过设置<code>field</code>, <code>model</code>即可生成一个Input。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.simple.code }}</i-code>
            </Demo>
            <Demo title="尺寸">
                <div slot="demo">
                    <FieldGenerator
                        :field="code.size.data.sizeLargeField"
                        :form-model="code.size.data.model"
                    />
                    <FieldGenerator
                        :field="code.size.data.sizeDefaultField"
                        :form-model="code.size.data.model"
                    />
                    <FieldGenerator
                        :field="code.size.data.sizeSmallField"
                        :form-model="code.size.data.model"
                    />
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
                    <FieldGenerator
                        :field="code.clearable.data.field"
                        :form-model="code.clearable.data.model"
                    />
                </div>
                <div slot="desc">
                    <p>通过设置<code>field.clearable</code>是否展示可清空的icon</p>
                </div>
                <i-code slot="code" lang="html">{{ code.clearable.code }}</i-code>
            </Demo>
            <Demo title="带Icon">
                <div slot="demo">
                    <FieldGenerator
                        :field="code.withIcon.data.field"
                        :form-model="code.withIcon.data.model"
                    />
                </div>
                <div slot="desc">
                    <p>通过设置<code>field.icon</code>可以控制展示icon</p>
                </div>
                <i-code slot="code" lang="html">{{ code.withIcon.code }}</i-code>
            </Demo>
            <Demo title="前缀和后缀图标">
                <div slot="demo">
                    <FieldGenerator
                        :field="code.prefixAndSuffix.data.prefixField"
                        :form-model="code.prefixAndSuffix.data.model"
                    />
                    <FieldGenerator
                        :field="code.prefixAndSuffix.data.suffixField"
                        :form-model="code.prefixAndSuffix.data.model"
                    />
                </div>
                <div slot="desc">
                    <p>通过设置<code>field.prefix</code>、<code>field.suffix</code>可以给input添加前后缀icon。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.prefixAndSuffix.code }}</i-code>
            </Demo>
            <Demo title="搜索框">
                <div slot="demo">
                    <FieldGenerator
                        :field="code.search.data.searchField"
                        :form-model="code.search.data.model"
                    />
                    <FieldGenerator
                        :field="code.search.data.enterButtonField"
                        :form-model="code.search.data.model"
                    />
                    <FieldGenerator
                        :field="code.search.data.searchWithEnterButtonField"
                        :form-model="code.search.data.model"
                    />
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
                    <FieldGenerator
                        :field="code.textarea.data.field"
                        :form-model="code.textarea.data.model"
                    />
                </div>
                <div slot="desc">
                    <p>通过设置<code>field.subType</code>可以展示文本域</p>
                    <p>通过设置<code>field.rows</code>来控制默认展示行数</p>
                </div>
                <i-code slot="code" lang="html">{{ code.textarea.code }}</i-code>
            </Demo>
            <Demo title="适应文本高度的文本域">
                <div slot="demo">
                    <FieldGenerator
                        :field="code.aotusizeTextarea.data.field"
                        :form-model="code.aotusizeTextarea.data.model"
                    />
                </div>
                <div slot="desc">
                    <p>通过设置<code>field.autosize</code>可以使文本域大小适应内容</p>
                </div>
                <i-code slot="code" lang="html">{{ code.aotusizeTextarea.code }}</i-code>
            </Demo>
            <Demo title="禁用">
                <div slot="demo">
                    <FieldGenerator
                        :field="code.disabled.data.inputField"
                        :form-model="code.disabled.data.model"
                    />
                    <FieldGenerator
                        :field="code.disabled.data.textareaField"
                        :form-model="code.disabled.data.model"
                    />
                </div>
                <div slot="desc">
                    <p>通过设置<code>field.disabled</code>可以禁用输入框</p>
                </div>
                <i-code slot="code" lang="html">{{ code.disabled.code }}</i-code>
            </Demo>

            <div class="api">
                <inAnchor title="API" h2 />
                <inAnchor title="Input props" h3 />
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
                            <td>subType</td>
                            <td>输入框类型，可选值为 <code>text</code>、<code>password</code>、<code>textarea</code>、<code>url</code>、<code>email</code>、<code>date</code></td>
                            <td>String</td>
                            <td>text</td>
                        </tr>
                        <tr>
                            <td>model</td>
                            <td>绑定的值的名称</td>
                            <td>String</td>
                            <td>必填</td>
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
                    </tbody>
                </table>
            </div>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
import iCode from '../../../components/code';
import Demo from '../../../components/Demo';
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

<style>
.fg-ivu-input {
    margin-top: 20px;
}
</style>
