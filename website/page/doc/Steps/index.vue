<template>
    <i-article>
        <article>
            <h1>Steps</h1>
            <inAnchor title="概述" h2 />
            <p>拆分某项流程的步骤，引导用户按流程完成任务。</p>
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
                            <td>options</td>
                            <td>选项列表或者选项数据接口，如
                                <pre>
[
    {title: '已完成', 'content': '这里是该步骤的描述信息'},
    {title: '进行中', 'content': '这里是该步骤的描述信息'},
    {title: '待进行', 'content': '这里是该步骤的描述信息'}
]
                                </pre>
                            </td>
                            <td>Array(option) | String</td>
                            <td>[] | '', 如果为String则为获取选项数据的api。</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不设置</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>direction</td>
                            <td>步骤条的方向，可选值为horizontal（水平）或vertical（垂直）</td>
                            <td>String</td>
                            <td>horizontal</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="选项配置" h3 />
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
                            <td>title</td>
                            <td>选项展示名称</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>status</td>
                            <td>步骤的状态，可选值为wait、process、finish、error，不设置时自动判断</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>content</td>
                            <td>步骤的详细描述，可选</td>
                            <td>String</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>icon</td>
                            <td>步骤的图标，可选</td>
                            <td>String</td>
                            <td>false</td>
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
                    <p>通过设置<code>field</code>, <code>model</code>即可生成一个Step。</p>
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
import Code from '../../../code/doc/steps';

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
