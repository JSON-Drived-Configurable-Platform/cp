<template>
    <i-article>
        <article>
            <h1>Tree</h1>
            <inAnchor title="概述" h2 />
            <p>文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用树控件可以完整展现其中的层级关系，并具有展开收起选择等交互功能。</p>
            <div class="api">
                <inAnchor title="配置快速查询" h2 />
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
                            <td>time</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>Tree</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>data</td>
                            <td>可嵌套的节点属性的数组，生成 tree 的数据</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>multiple</td>
                            <td>是否支持多选</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>show-checkbox</td>
                            <td>是否显示多选框</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>check-strictly</td>
                            <td>在显示复选框的情况下，是否严格的遵循父子不互相关联的做法</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="Tree events" h2 />
                <table>
                    <thead>
                        <tr>
                            <th>事件名</th>
                            <th>说明</th>
                            <th>返回值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>on-select-change</td>
                            <td>点击树节点时触发</td>
                            <td>当前已选中的节点数组、当前项</td>
                        </tr>
                        <tr>
                            <td>on-check-change</td>
                            <td>点击复选框时触发</td>
                            <td>当前已勾选节点的数组、当前项</td>
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
                    <p>基础用法</p>
                </div>
                <i-code slot="code" lang="html">{{ code.simple.code }}</i-code>
            </Demo>
            <Demo title="remote">
                <div slot="demo">
                    <Form :model="code.remote.data.model">
                        <FieldGenerator
                            :field="code.remote.data.field"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>远程数据</p>
                </div>
                <i-code slot="code" lang="html">{{ code.remote.code }}</i-code>
            </Demo>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
import iCode from '../../../components/code';
import Demo from '../../../components/demo';
import Code from '../../../code/doc/tree';

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
