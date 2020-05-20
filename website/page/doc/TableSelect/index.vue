<template>
    <i-article>
        <article>
            <h1>TableSelect</h1>
            <inAnchor title="概述" h2 />
            <p>支持单选/多选表格</p>
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
                            <td>type</td>
                            <td>表格选择器的类型，不可改</td>
                            <td>String</td>
                            <td>TableSelect</td>
                        </tr>

                        <tr>
                            <td>columns</td>
                            <td>列定义,需要存在key&&title,必填</td>
                            <td>Array[Object]</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>model</td>
                            <td>索引名称（必填）</td>
                            <td>String</td>
                            <td>不为空</td>
                        </tr>
                        <tr>
                            <td>api</td>
                            <td>获取选项的接口</td>
                            <td>String</td>
                            <td>''，api的返回值格式为{status: 0, data: [
                                {
                                'id': '1',
                                'name': 'admin',
                                'description': '超级管理员，拥有所有权限',
                                'create_time': '2019-9-10',
                                'update_time': '2019-10-10'
                                }]}
                            </td>
                        </tr>
                        <tr>
                            <td>options</td>
                            <td>选项列表或者选项数据接口，如[
                                {
                                'id': '1',
                                'name': 'admin',
                                'description': '超级管理员，拥有所有权限',
                                'create_time': '2019-9-10',
                                'update_time': '2019-10-10'
                                }]
                            </td>
                            <td>Array(option) | String</td>
                            <td>[] | '', 如果为String则为获取选项数据的api。<br></td>
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
                            <td>multiple</td>
                            <td>是否多选</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>label</td>
                            <td>表格选择器的左侧标签</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>border</td>
                            <td>是否显示纵向边框</td>
                            <td>Boolean</td>
                            <td>true</td>
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
            <Demo title="远程">
                <div slot="demo">
                    <Form :model="code.remote.data.model">
                        <FieldGenerator
                            :field="code.remote.data.field"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>远程</p>
                </div>
                <i-code slot="code" lang="html">{{ code.remote.code }}</i-code>
            </Demo>
            <Demo title="单选">
                <div slot="demo">
                    <Form :model="code.single.data.model">
                        <FieldGenerator
                            :field="code.single.data.field"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>单选</p>
                </div>
                <i-code slot="code" lang="html">{{ code.single.code }}</i-code>
            </Demo>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
import iCode from '../../../components/code';
import Demo from '../../../components/demo';
import Code from '../../../code/doc/tableSelect';

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
