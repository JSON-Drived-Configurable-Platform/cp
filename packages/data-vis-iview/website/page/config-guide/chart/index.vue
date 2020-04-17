<template>
    <i-article>
        <article>
            <h1>图表总述</h1>
            <p>可视化基本图形，包含折线图、柱状图、饼图、漏斗图、液体球都是基于echart的dataset特性来实现的。</p>
            <alert>本文仅列出了部分基础配置，详情参考echart官网：<a href="https://www.echartsjs.com/zh/tutorial.html#%E4%BD%BF%E7%94%A8%20dataset%20%E7%AE%A1%E7%90%86%E6%95%B0%E6%8D%AE">使用 dataset 管理数据</a></alert>
            <!-- <p>由于echart仅对部分组件做了dataset支持，不支持dataset特性的图，可以使用custom来实现。</p> -->
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
        </article>
    </i-article>
</template>

<script>
import iArticle from 'website/components/article';
import inAnchor from 'website/components/anchor';
import iCode from 'website/components/code';
import Demo from 'website/components/Demo';
import Code from 'website/code/config-guide/chart/index';

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
