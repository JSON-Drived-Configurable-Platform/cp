<template>
    <i-article>
        <article>
            <h1>MatrixSelect</h1>
            <inAnchor title="概述" h2 />
            <p>矩阵选择：用于有多行多列组成的M*N中选项的选择。</p>
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
                            <td>不可为空</td>
                        </tr>
                        <tr>
                            <td>columns</td>
                            <td>选项卡的列表头</td>
                            <td>Array(option) | String</td>
                            <td>[] | '', 如果为String则为获取选项数据的api。</td>
                        </tr>
                        <tr>
                            <td>rows</td>
                            <td>选项卡的行表头</td>
                            <td>Array(option) | String</td>
                            <td>[] | '', 如果为String则为获取选项数据的api。</td>
                        </tr>
                        <tr>
                            <td>options</td>
                            <td>选项</td>
                            <td>Array(option) | String</td>
                            <td>[] | '', 如果为String则为获取选项数据的api。</td>
                        </tr>
                        <tr>
                            <td>checkAll</td>
                            <td>是否展示全选</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不设置</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="columns选项配置" h3 />
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
                            <td>checkAll</td>
                            <td>列是否展示全选</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>是否禁用该列</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>

                </table>
                <inAnchor title="rows选项配置" h3 />
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
                            <td>checkAll</td>
                            <td>行是否展示全选</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>是否禁用该行</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="options选项配置" h3 />
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
                            <td>选项值</td>
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
                    <!-- <Form :model="code.simple.data.model">
                        <FieldGenerator
                            :field="code.simple.data.field"
                            @on-field-change="handleFieldChange"
                        />
                    </Form> -->
                </div>
                <div slot="desc">
                    <p>通过设置<code>field</code>, <code>model</code>即可生成一个Radio。</p>
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
import Code from '../../../code/doc/matrixSelect';

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
