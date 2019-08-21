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
            </div>
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
                    <p>单选时，value 只接受字符串和数字类型，多选时，只接受数组类型，组件会自动根据<code>Option</code>的<code>value</code>来返回选中的数据。</p>
                    <p>在展开选择器后，可以使用键盘的<code>up</code>和<code>down</code>快速上下选择，按下<code>Enter</code>选择，按下<code>Esc</code>收起选择器。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.simple.code }}</i-code>
            </Demo>
            <Demo title="远程获取选项">
                <div slot="demo">
                    <FieldGenerator
                        :field="code.api.data.field"
                        :form-model="code.api.data.model"
                        @on-field-change="handleFieldChange"
                    />
                </div>
                <div slot="desc">
                    可以将<code>filed.options</code>的值设置为获取数据的接口。
                </div>
                <i-code slot="code" lang="html">{{ code.api.code }}</i-code>
            </Demo>
            <Demo title="多选">
                <div slot="demo">
                    <FieldGenerator
                        :field="code.multiple.data.field"
                        :form-model="code.multiple.data.model"
                        @on-field-change="handleFieldChange"
                    />
                </div>
                <div slot="desc">
                    设置<code>field.multiple</code>可以控制多选，此时控件返回值为数组。
                </div>
                <i-code slot="code" lang="html">{{ code.multiple.code }}</i-code>
            </Demo>
            <Demo title="可搜索">
                <div slot="demo">
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
                </div>
                <div slot="desc">
                    设置<code>field.filterable</code>可以控制是否可搜索，可以通过输入值来过滤选项。
                </div>
                <i-code slot="code" lang="html">{{ code.filterable.code }}</i-code>
            </Demo>
            <Demo title="远程搜索">
                <div slot="demo">
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
                </div>
                <div slot="desc">
                    <p>设置<code>field.remote</code>为true后，可以根据输入进行远程搜索。</p>
                    <p>此项值依赖<code>field.options</code>为获取数据的url。如果为数组，则无效</p>
                </div>
                <i-code slot="code" lang="html">{{ code.remote.code }}</i-code>
            </Demo>
            <Demo title="分组">
                <div slot="demo">
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
                    <FieldGenerator
                        :field="code.clearable.data.field"
                        :form-model="code.clearable.data.model"
                        @on-field-change="handleFieldChange"
                    />
                </div>
                <div slot="desc">
                    <p>通过设置<code>field.clearable</code>是否展示可清空的icon。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.clearable.code }}</i-code>
            </Demo>
            <Demo title="前缀图标">
                <div slot="demo">
                    <FieldGenerator
                        :field="code.prefix.data.field"
                        :form-model="code.prefix.data.model"
                        @on-field-change="handleFieldChange"
                    />
                </div>
                <div slot="desc">
                    <p>通过设置<code>field.prefix</code>是否展示前缀图标。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.prefix.code }}</i-code>
            </Demo>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
import iCode from '../../../components/code';
import Demo from '../../../components/Demo';
import Code from '../../../code/doc/select';

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
.fg-ivu-select {
    margin-top: 20px;
}
</style>
