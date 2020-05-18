<template>
    <i-article>
        <article>
            <h1>Switch 开关</h1>
            <inAnchor title="概述" h2 />
            <p>在两种状态间切换时用到的开关选择器。</p>
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
                            <td>size</td>
                            <td>开关的尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不写。建议开关如果使用了2个汉字的文字，使用 large。</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>禁用开关</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>true</td>
                            <td>开启时对应的配置</td>
                            <td>Object</td>
                            <td>{value: true}</td>
                        </tr>
                        <tr>
                            <td>true.value</td>
                            <td>选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td>
                            <td>String, Number, Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>true.label</td>
                            <td>选中时的文案</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>true.icon</td>
                            <td>选中时的图标，如果设置了<code>true.label</code>，此项无效</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>true</td>
                            <td>关闭时对应的配置</td>
                            <td>Object</td>
                            <td>{value: false}</td>
                        </tr>
                        <tr>
                            <td>false.value</td>
                            <td>没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td>
                            <td>String, Number, Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>false.label</td>
                            <td>选中时的文案</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>false.icon</td>
                            <td>选中时的图标，如果设置了<code>true.label</code>，此项无效</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <!-- <tr>
                            <td>loading</td>
                            <td>加载中的开关</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr> -->
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
            <Demo title="文字">
                <div slot="demo">
                    <Form :model="code.text.data.model">
                        <FieldGenerator
                            :field="code.text.data.field"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field.true.label</code>, <code>field.false.label</code>展示自定义文字。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.text.code }}</i-code>
            </Demo>
            <Demo title="图标">
                <div slot="demo">
                    <Form :model="code.icon.data.model">
                        <FieldGenerator
                            :field="code.icon.data.field"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field.true.icon</code>, <code>field.false.icon</code>展示自定义文字。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.icon.code }}</i-code>
            </Demo>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
import iCode from '../../../components/code';
import Demo from '../../../components/demo';
import Code from '../../../code/doc/switch';

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
