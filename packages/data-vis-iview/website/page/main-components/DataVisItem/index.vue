<template>
    <i-article>
        <article>
            <h1>DataVisItem</h1>
            <inAnchor title="概述" h2 />
            <p><strong><code>DataVisItem</code></strong>组件，用于通过配置生成一个单图，目前包含的图形主要有三部分：</p>
            <ul>
                <li>(1)、基于echart的可视化图，包含折线图、柱状图、饼图、漏斗图；</li>
                <li>(2)、基于IView Table组件的数据表格、留存图；</li>
                <li>(3)、基于IView Card组件的数据卡片，主要用于重要数据的展示；</li>
            </ul>
            <alert>下面的demo展示了三个分类的具体用例，更多图形配置及功能请见配置文档。</alert>
            <!-- <div class="api">
                <inAnchor title="图分类" h2 />
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
                            <td>chart.type</td>
                            <td>图的类型，目前支持TODO</td>
                            <td>String</td>
                            <td>必填</td>
                        </tr>
                        <tr>
                            <td>label</td>
                            <td>图的标题</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </div> -->
            <inAnchor title="一、基于Echart的可视化图表" h2 />
            <p>基于echart dataset用法可以渲染柱状图(bar)、折线图(line)、饼图(pie)、漏斗图(funnel)。</p>
            <Demo title="echart柱状图" vertical>
                <div slot="demo">
                    <DataVisItem
                        :chart="code.simpleEchart.data.chart"
                        @on-field-change="handleFieldChange"
                    />
                </div>
                <div slot="desc">
                    <p>通过设置<code>chart</code>，即可渲染一个图表。</p>
                </div>
                <i-code slot="code">{{ code.simpleEchart.code }}</i-code>
            </Demo>

            <inAnchor title="二、基于iView Table组件的表格和留存图" h2 />
            <p>基于iview的Table组件，支持配置数据表格和留存表格，用于展示数据明细和留存。</p>
            <Demo title="留存表" vertical>
                <div slot="demo">
                    <DataVisItem
                        :chart="code.tableRetain.data.chart"
                    />
                </div>
                <div slot="desc">
                    <p>通过设置<code>chart</code>即可生成一个留存表。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.tableRetain.code }}</i-code>
            </Demo>

            <inAnchor title="三、基于iView Card 组件的数据概览卡片" h2 />
            <p>基于iview的Card组件，支持配置数据卡片，用于展示重点概览数据。</p>
            <Demo title="数据卡片" vertical>
                <div slot="demo">
                    <DataVisItem
                        :chart="code.simpleCard.data.chart"
                    />
                </div>
                <div slot="desc">
                    <p>通过设置<code>chart</code>即可生成一个留存表。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.simpleCard.code }}</i-code>
            </Demo>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
import iCode from '../../../components/code';
import Demo from '../../../components/Demo';
import Code from '../../../code/main-components/dataVisItem';

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
