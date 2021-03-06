<template>
    <i-article>
        <article>
            <h1>DataVis</h1>
            <inAnchor title="概述" h2 />
            <p>
                通过 json 配置，快速生成一个数据报表页面，可以支持<strong>数据概览卡片</strong>、<strong>可视化图表</strong>、<strong>数据表格和留存表格</strong>。
            </p>
            <alert><strong>如果你希望更灵活的控制图表的布局，可以直接使用<code>DataVisGroup</code>和<code>DataVisItem</code></strong></alert>
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
                            <td>title</td>
                            <td>标题</td>
                            <td>String</td>
                            <td>可选</td>
                        </tr>
                        <tr>
                            <td>tip</td>
                            <td>提示信息</td>
                            <td>Object</td>
                            <td>可选</td>
                        </tr>
                        <tr>
                            <td>tip.title</td>
                            <td>提示信息-标题</td>
                            <td>String</td>
                            <td>可选</td>
                        </tr>
                        <tr>
                            <td>tip.content</td>
                            <td>提示信息-内容</td>
                            <td>String</td>
                            <td>可选<strong>内部使用了v-html，注意XSS攻击</strong></td>
                        </tr>
                        <tr>
                            <td>rows</td>
                            <td>图表的集合</td>
                            <td>Array</td>
                            <td>
                                必选, 值的类型为[[DataVisGroup...], [DataVisGroup...]]。<br>
                                rows 的元素是数组，每个元素都是一系 DataVisGroup 的集合，其内部的元素会在一行内展示。<br>
                                假如现在有三个 DataVisGroup, 希望第一行展示两个，第二行展示一个，则数据结构为 [[DataVisGroup0, DataVisGroup1], [DataVisGroup2]]。
                                <br>
                                <strong><a href="/#/doc/DataVisGroup">查看DataVisGroup了解详细配置项</a></strong>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <inAnchor title="代码示例" h2 />
            <Demo title="基础用法" vertical>
                <div slot="demo">
                    <DataVis
                        :config="code.simple.data.config"
                        @on-field-change="handleFieldChange"
                    />
                </div>
                <div slot="desc">
                    <p>通过设置<code>config</code>，即可控制图表的布局方式。</p>
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
import Code from '../../../code/main-components/dataVis';

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
