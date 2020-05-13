<template>
    <i-article>
        <article>
            <h1>DataVisGroup</h1>
            <inAnchor title="概述" h2 />
            <p>用于生成一组图表，可以包含多个图，主要有两个功能：</p>
            <ul>
                <li>(1)、控制一组图的展现形式，该组件默认以Tab的形式将多个图组合起来，也可以设置<code>display:'inline'</code>使其平铺开来。</li>
                <li>(2)、配置查询条件，可以通过设置<code>conditions</code>，来为改组图设置查询条件；</li>
            </ul>
            <div class="api">
                <inAnchor title="通用配置" h2 />
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
                            <td>charts</td>
                            <td>图的配置集合</td>
                            <td>Array</td>
                            <td>不可为空，charts是一些列图的配置的集合。</td>
                        </tr>
                        <tr>
                            <td>display</td>
                            <td>展示方式,可以为tab或者inline</td>
                            <td>string</td>
                            <td>tab</td>
                        </tr>
                        <tr>
                            <td>conditions</td>
                            <td>
                                可配置一系列查询条件，查询条件的表单配置基于
                                <strong>
                                    <code>
                                        <a href="/form-generator-iview">
                                            FormGeneratorIview
                                        </a>
                                    </code>
                                </strong>
                            </td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Demo title="基本配置" vertical>
                <div slot="demo">
                    <DataVisGroup
                        :charts="code.simple.data.charts"
                    />
                </div>
                <div slot="desc">
                    <p>通过设置<code>charts</code>即可生成一个一系列可视化图表。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.simple.code }}</i-code>
            </Demo>

            <Demo title="inline展示" vertical>
                <div slot="demo">
                    <DataVisGroup
                        display="inline"
                        :charts="code.inline.data.charts"
                    />
                </div>
                <div slot="desc">
                    <p>通过设置<code>charts</code>即可生成一个一系列可视化图表。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.inline.code }}</i-code>
            </Demo>

            <Demo title="查询条件" vertical>
                <div slot="demo">
                    <DataVisGroup
                        :params-container="code.search.data.paramsContainer"
                        :conditions="code.search.data.conditions"
                        :charts="code.search.data.charts"
                    />
                </div>
                <div slot="desc">
                    <p>通过设置<code>conditions</code>来配置DataVisGroup的局部查询条件。</p>
                    <p>还可以通过<code>paramsContainer</code>来传入外部的查询参数</p>
                    <p>可以通过<code>chart.apimParams</code>来指定传入哪些字段作为查询参数</p>
                </div>
                <i-code slot="code" lang="html">{{ code.search.code }}</i-code>
            </Demo>

        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
import iCode from '../../../components/code';
import Demo from '../../../components/Demo';
import Code from '../../../code/main-components/DataVisGroup';

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
