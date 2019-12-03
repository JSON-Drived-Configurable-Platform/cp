<template>
    <i-article>
        <article>
            <h1>DataVisItem</h1>
            <inAnchor title="概述" h2 />
            <p>用于生成一个可视化区域，可以包含多个图，这些图会以Tab的形式组合起来。</p>
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
                            <td>不可为空，charts是一些列图的配置的集合。这些图可以以Tab或者平铺的形式展示。如下方Demo所示：一个 DataVisItem 中包含多个图表，它们以Tab的形式组合在一起。</td>
                        </tr>
                        <tr>
                            <td>chart</td>
                            <td>单个图的配置</td>
                            <td>Object</td>
                            <td>不可为空</td>
                        </tr>
                        <tr>
                            <td>chart.label</td>
                            <td>图的标题</td>
                            <td>String</td>
                            <td>''</td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="类型一：基于echart的可视化图表，包含折线图、柱状图、饼图、漏斗图" h3 />
                <alert>v0.1及之后的版本，为了简化配置，通过dataset来声明数据。v0.1之前通过columns和data的配置方式将逐渐废弃调。</alert>
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
                            <td>chart.dataset</td>
                            <td>图的数据集，可以是多个数据的集合。详情参考echart官网：</td>
                            <td>Object | Array</td>
                            <td>{}</td>
                        </tr>
                        <tr>
                            <td>chart.series</td>
                            <td>图的系列配置集合。详情参考echart官网：</td>
                            <td>Object | Array</td>
                            <td>{}</td>
                        </tr>
                    </tbody>
                </table>

                <inAnchor title="类型二：基于iView table组件的表格和留存图" h3 />
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
                            <td>不可为空</td>
                        </tr>
                    </tbody>
                </table>

                <inAnchor title="类型三：基于iView Card 组件的数据概览卡片" h3 />
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
                            <td>不可为空</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <inAnchor title="基于Echart的可视化图表" h2 />
            <Demo title="饼图、折线图、柱状图、漏斗图" vertical>
                <div slot="demo">
                    <DataVisItem
                        :charts="code.simple.data.charts"
                    />
                </div>
                <div slot="desc">
                    <p>通过设置<code>charts</code>即可生成一个一系列可视化图表。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.simple.code }}</i-code>
            </Demo>
            <inAnchor title="基于iView Table组件的表格和留存图" h2 />
            <Demo title="表格、留存" vertical>
                <div slot="demo">
                    <DataVisItem
                        :charts="code.table.data.charts"
                    />
                </div>
                <div slot="desc">
                    <p>通过设置<code>charts</code>即可生成一个一系列数据表格和留存表。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.table.code }}</i-code>
            </Demo>
            <inAnchor title="基于iView Card 组件的数据概览卡片" h2 />
            <Demo title="数据概览" vertical>
                <div slot="demo">
                    <DataVisItem
                        display="inline"
                        :charts="code.card.data.charts"
                    />
                </div>
                <div slot="desc">
                    <p>通过设置<code>charts</code>即可生成一个一系列数据表格和留存表。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.card.code }}</i-code>
            </Demo>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
import iCode from '../../../components/code';
import Demo from '../../../components/Demo';
import Code from '../../../code/doc/DataVisItem';

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
