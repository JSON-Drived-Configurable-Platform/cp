<template>
    <i-article>
        <article>
            <h1>CheckboxCard 选择框卡片</h1>
            <inAnchor title="概述" h2 />
            <p>基本组件-选择框卡片。主要用于可选的卡片-支持图片和视频显示</p>
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
                            <td>meta</td>
                            <td>图片或视频元素</td>
                            <td>Array</td>
                            <td>[{metaType:'image',metaUrl:''}]</td>
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
                            <td>metaType</td>
                            <td>元素类型</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>metaUrl</td>
                            <td>元素地址</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>showCheckBox</td>
                            <td>是否展示checkbox</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>header</td>
                            <td>slot</td>
                            <td>html</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>footer</td>
                            <td>slot</td>
                            <td>html</td>
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
import Demo from '../../../components/Demo';
import Code from '../../../code/doc/checkbox';

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
