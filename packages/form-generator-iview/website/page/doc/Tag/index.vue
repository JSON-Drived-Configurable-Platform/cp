<template>
    <i-article>
        <article>
            <h1>Tag</h1>
            <inAnchor title="概述" h2 />
            <p>创建单标签/标签组</p>
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
                            <td>标签的类型，不可改</td>
                            <td>String</td>
                            <td>Tag</td>
                        </tr>
                        <tr>
                            <td>model</td>
                            <td>索引名称（必填）</td>
                            <td>String</td>
                            <td>不为空</td>
                        </tr>
                        <tr>
                            <td>options</td>
                            <td>标签类型的配置集合，如:
                                <pre>
[
    {
        name: '正常',
        value: '1',
        color: 'primary'
    },
    {
        name: '黑用户',
        value: '2',
        color: 'error'
    }
]
                                </pre>
                            </td>
                            <td>Array(<a href="#TagOptions">TagOptions</a>)</td>
                            <td>[]<br></td>
                        </tr>
                        <tr>
                            <td>subtype</td>
                            <td>默认标签的样式类型，可选值为 border、dot或不填</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>color</td>
                            <td>
                                默认标签颜色，预设颜色值为default、primary、success、warning、error、blue、green、red、yellow、pink、magenta、volcano、orange、gold、lime、cyan、geekblue、purple，你也可以自定义颜色值。
                            </td>
                            <td>String</td>
                            <td>default</td>
                        </tr>
                        <tr>
                            <td>fade</td>
                            <td>默认是否在出现和消失时使用渐变的动画，动画时长可能会引起占位的闪烁</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>

                    </tbody>
                </table>
                <inAnchor title="TagOptions" h3 id="TagOptions" />
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
                            <td>subtype</td>
                            <td>标签的样式类型，可选值为 border、dot或不填</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>color</td>
                            <td>
                                标签颜色，预设颜色值为default、primary、success、warning、error、blue、green、red、yellow、pink、magenta、volcano、orange、gold、lime、cyan、geekblue、purple，你也可以自定义颜色值。
                            </td>
                            <td>String</td>
                            <td>default</td>
                        </tr>
                        <tr>
                            <td>fade</td>
                            <td>是否在出现和消失时使用渐变的动画，动画时长可能会引起占位的闪烁</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>name</td>
                            <td>当前标签的名称</td>
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
                    <p></p>
                </div>
                <i-code slot="code" lang="html">{{ code.simple.code }}</i-code>
            </Demo>
            <Demo title="数组">
                <div slot="demo">
                    <Form :model="code.multiple.data.model">
                        <FieldGenerator
                            :field="code.multiple.data.field"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p></p>
                </div>
                <i-code slot="code" lang="html">{{ code.multiple.code }}</i-code>
            </Demo>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
import iCode from '../../../components/code';
import Demo from '../../../components/demo';
import Code from '../../../code/doc/tag';

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
