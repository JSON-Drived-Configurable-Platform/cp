<template>
    <i-article>
        <article>
            <h1>Select 下拉选择器</h1>
            <inAnchor title="概述" h2 />
            <p>使用模拟的增强下拉选择器来代替浏览器原生的选择器。</p>
            <p>选择器支持单选、多选、搜索，以及键盘快捷操作。</p>
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
                            <td>type</td>
                            <td>日期选择器的类型，不可改</td>
                            <td>String</td>
                            <td>Select</td>
                        </tr>
                        <tr>
                            <td>placeholder</td>
                            <td>占位文本</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>transfer</td>
                            <td>是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>prefix</td>
                            <td>在 Select 内部显示图标，传入<a href="https://www.iviewui.com/components/icon">icon</a>名称</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>options</td>
                            <td>由option/groupOption组成的数组或者api接口，见下方option/groupOption的属性</td>
                            <td>Array|String</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>filterable</td>
                            <td>是否支持搜索</td>
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
                            <td>required</td>
                            <td>是否必须选择</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>clearable</td>
                            <td>是否可以清空选项，只在单选时有效</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>尺寸，可选值为large、small、default或者不设置</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>是否禁用选择器</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>multiple</td>
                            <td>是否支持多选</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>remote</td>
                            <td>是否使用远程搜索</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>defaultValueIndex</td>
                            <td>当remote为true时，如果该控件的值不为数组，拉取后自动设置默认值的index</td>
                            <td>Number(Int)</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>defaultValueIndexes</td>
                            <td>当remote为true时，如果该控件的值为数组，拉取后自动设置默认值的indexes</td>
                            <td>Array</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>api</td>
                            <td>由远程api接口获得数据（已废弃）</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="Option配置" h3 />
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
                            <td>value</td>
                            <td>选项值，默认根据此属性值进行筛选，必填</td>
                            <td>String | Number</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>label</td>
                            <td>选项显示的内容，默认优先读取该 label 值，无 label 时，读取 value。当选中时，选择器会显示 label 为已选文案。</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>是否禁用当前项</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="GroupOption配置" h3 />
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
                            <td>groupLabel</td>
                            <td>分组显示的内容，必填</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>groupOptions</td>
                            <td>分组的内容，由option组成</td>
                            <td>Array</td>
                            <td>[]</td>
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
                            :form-model="code.simple.data.model"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>单选时，value 只接受字符串和数字类型，多选时，只接受数组类型，组件会自动根据<code>Option</code>的<code>value</code>来返回选中的数据。</p>
                    <p>在展开选择器后，可以使用键盘的<code>up</code>和<code>down</code>快速上下选择，按下<code>Enter</code>选择，按下<code>Esc</code>收起选择器。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.simple.code }}</i-code>
            </Demo>

            <Demo title="远程获取选项">
                <div slot="demo">
                    <Form :model="code.api.data.model">
                        <FieldGenerator
                            :field="code.api.data.field"
                            :form-model="code.api.data.model"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    可以将<code>filed.options</code>的值设置为获取数据的接口。
                </div>
                <i-code slot="code" lang="html">{{ code.api.code }}</i-code>
            </Demo>
            <Demo title="多选">
                <div slot="demo">
                    <Form :model="code.multiple.data.model">
                        <FieldGenerator
                            :field="code.multiple.data.field"
                            :form-model="code.multiple.data.model"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    设置<code>field.multiple</code>可以控制多选，此时控件返回值为数组。
                </div>
                <i-code slot="code" lang="html">{{ code.multiple.code }}</i-code>
            </Demo>
            <Demo title="可搜索">
                <div slot="demo">
                    <Form :model="code.filterable.data.model">
                        <FieldGenerator
                            :field="code.filterable.data.field"
                            :form-model="code.filterable.data.model"
                            @on-field-change="handleFieldChange"
                        />
                        <FieldGenerator
                            :field="code.filterable.data.multipleField"
                            :form-model="code.filterable.data.model"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    设置<code>field.filterable</code>可以控制是否可搜索，可以通过输入值来过滤选项。
                </div>
                <i-code slot="code" lang="html">{{ code.filterable.code }}</i-code>
            </Demo>
            <Demo title="远程搜索">
                <div slot="demo">
                    <Form :model="code.remote.data.model">
                        <FieldGenerator
                            :field="code.remote.data.field"
                            :form-model="code.remote.data.model"
                            @on-field-change="handleFieldChange"
                        />
                        <FieldGenerator
                            :field="code.remote.data.multipleField"
                            :form-model="code.remote.data.model"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>设置<code>field.remote</code>为true后，可以根据输入进行远程搜索。</p>
                    <p>此项值依赖<code>field.options</code>为获取数据的url。如果为数组，则无效</p>
                </div>
                <i-code slot="code" lang="html">{{ code.remote.code }}</i-code>
            </Demo>
            <Demo title="分组">
                <div slot="demo">
                    <Form :model="code.group.data.model">
                        <FieldGenerator
                            :field="code.group.data.field"
                            :form-model="code.group.data.model"
                            @on-field-change="handleFieldChange"
                        />
                        <FieldGenerator
                            :field="code.group.data.multipleField"
                            :form-model="code.group.data.model"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    设置<code>field.options</code>格式为
                    <pre>
[{
    "groupLabel":"直辖",
    "groupOptions":[
        {
            "label":"北京",
            "value":"110000000000"
        }
    ]
},
{
    "groupLabel": "全部",
    "groupOptions": [
        {
            "label": "北京",
            "value": "110000000000"
        },
        {
            "label": "天津",
            "value": "120000000000"
        }
    ]
}]
                    </pre>
                    可以使选项按照分组展示。
                </div>
                <i-code slot="code" lang="html">{{ code.group.code }}</i-code>
            </Demo>
            <Demo title="可清空">
                <div slot="demo">
                    <Form :model="code.clearable.data.model">
                        <FieldGenerator
                            :field="code.clearable.data.field"
                            :form-model="code.clearable.data.model"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field.clearable</code>是否展示可清空的icon。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.clearable.code }}</i-code>
            </Demo>
            <Demo title="前缀图标">
                <div slot="demo">
                    <Form :model="code.prefix.data.model">
                        <FieldGenerator
                            :field="code.prefix.data.field"
                            :form-model="code.prefix.data.model"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field.prefix</code>是否展示前缀图标。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.prefix.code }}</i-code>
            </Demo>
            <inAnchor title="代码示例 transfer" h2 />
            <Demo title="transfer" vertical>
                <div slot="demo">
                    <Table class="curd-example-demo-table" :columns="code.columns" :data="code.data">
                        <template
                            v-for="column in code.columns"
                            :slot="column.slot"
                            slot-scope="{ row, index}"
                        >
                            <Form
                                :key="column.slot"
                                :model="JSON.parse(JSON.stringify(row))"
                            >
                                <Poptip
                                    v-if="column.poptip"
                                    :key="column.slot"
                                    placement="left-start"
                                >
                                    <template v-if="column.poptip.displayField">
                                        <FieldGenerator
                                            :params-container="paramsContainer"
                                            :field="column.poptip.displayField"
                                        />
                                    </template>
                                    <template v-else>
                                        <span>{{ row[column.slot] }}</span>
                                    </template>
                                    <Icon type="ios-create-outline" size="20" />
                                    <div slot="content">
                                        <FieldGenerator
                                            v-for="(field, i) in column.poptip.formFields"
                                            :key="i"
                                            :params-container="paramsContainer"
                                            :field="field"
                                        />
                                    </div>
                                </Poptip>
                                <div v-if="column.formFields">
                                    <FieldGenerator
                                        v-for="(field, i) in column.formFields"
                                        :key="i"
                                        :field="field"
                                        @on-button-event="handleButtonEvent($event, row, index)"
                                    />
                                </div>
                            </Form>
                        </template>
                    </Table>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field.transfer</code>是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果</p>
                </div>
            </Demo>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
import iCode from '../../../components/code';
import Demo from '../../../components/demo';
import Code from '../../../code/doc/select';
// eslint-disable-next-line no-unused-vars
export default {
    components: {
        iArticle,
        inAnchor,
        iCode,
        Demo
    },
    data() {
        return {
            editModel: {},
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
.fg-ivu-select {
    margin-top: 20px;
}
</style>
