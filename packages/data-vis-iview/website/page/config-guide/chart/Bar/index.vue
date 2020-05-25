<template>
    <i-article>
        <article>
            <h1>柱状图</h1>
            <inAnchor title="概述" h2 />
            <p>柱状图用来对一系列数据进行对比，并展示其详细大小。</p>
            <div class="api">
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
                            <td>chart.label</td>
                            <td>图的标题</td>
                            <td>Object | Array</td>
                            <td>{}</td>
                        </tr>
                        <tr>
                            <td>chart.dataset</td>
                            <td>图的数据集，可以是多个数据的集合。</td>
                            <td>Object | Array</td>
                            <td>{}</td>
                        </tr>
                        <tr>
                            <td>chart.series</td>
                            <td>图的系列配置集合。</td>
                            <td>Object | Array</td>
                            <td>{}</td>
                        </tr>
                        <tr>
                            <td>chart.xAxis</td>
                            <td>x轴配置</td>
                            <td>Object | Array</td>
                            <td>{}</td>
                        </tr>
                        <tr>
                            <td>chart.yAxis</td>
                            <td>y轴配置</td>
                            <td>Object | Array</td>
                            <td>{}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Demo title="基本用法" vertical>
                <div slot="demo">
                    <DataVisItem
                        :chart="code.simple.data.chart"
                        @on-field-change="handleFieldChange"
                    />
                </div>
                <div slot="desc">
                    <p>通过设置<code>chart</code>，即可渲染一个图表。</p>
                </div>
                <i-code slot="code">{{ code.simple.code }}</i-code>
            </Demo>

            <Demo title="多条线" vertical>
                <div slot="demo">
                    <DataVisItem
                        :chart="code.multiple.data.chart"
                        @on-field-change="handleFieldChange"
                    />
                </div>
                <div slot="desc">
                    <p>通过设置<code>chart</code>，即可渲染一个图表。</p>
                </div>
                <i-code slot="code">{{ code.multiple.code }}</i-code>
            </Demo>

            <Demo title="多轴" vertical>
                <div slot="demo">
                    <DataVisItem
                        :chart="code.multipleAxis.data.chart"
                        @on-field-change="handleFieldChange"
                    />
                </div>
                <div slot="desc">
                    <p>通过设置<code>chart</code>，即可渲染一个图表。</p>
                </div>
                <i-code slot="code">{{ code.multipleAxis.code }}</i-code>
            </Demo>
        </article>
    </i-article>
</template>

<script>
import iArticle from 'website/components/article';
import inAnchor from 'website/components/anchor';
import iCode from 'website/components/code';
import Demo from 'website/components/demo';
import Code from 'website/code/config-guide/chart/bar';

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
