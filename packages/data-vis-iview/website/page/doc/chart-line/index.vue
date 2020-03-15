<template>
    <i-article>
        <article>
            <h1>chart-line 折线图</h1>
            <inAnchor title="概述" h2 />
            <p>折线图是用折线将各个数据点标志连接起来的图表，用于展现数据的变化趋势。</p>
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
                        <tr>
                            <td>chart.display</td>
                            <td>图的组合方式， 设置为 inline 会使其平铺</td>
                            <td>String</td>
                            <td>'tab'</td>
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
                            <td>1、基于数据（dataset 组件来提供数据），指定数据到视觉的映射（由 encode 属性来指定映射），形成图表。
                                2、数据和其他配置可以被分离开来，使用者相对便于进行单独管理，也省去了一些数据处理的步骤。
                                3、数据可以被多个系列或者组件复用，对于大数据，不必为每个系列创建一份。
                                4、支持更多的数据的常用格式，例如二维数组、对象数组等，一定程度上避免使用者为了数据格式而进行转换。详情参考echart官网：<a href="https://www.echartsjs.com/zh/option.html#dataset">地址</a></td>
                            <td>Object | Array</td>
                            <td>{}</td>
                        </tr>
                        <tr>
                            <td>chart.series</td>
                            <td>图的系列配置集合。详情参考echart官网：<a href="https://www.echartsjs.com/zh/option.html#series">地址</a></td>
                            <td>Object | Array</td>
                            <td>{}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <inAnchor title="基于Echart的可视化图表" h2 />
            <Demo title="折线图" vertical>
                <div slot="demo">
                    <DataVisItem
                        :charts="code.simple.data.charts"
                    />
                </div>
                <div slot="desc">
                    <p>通过设置<code>charts</code>即可生成一个一系列可视化图表。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.simple.chartsCode }}</i-code>
            </Demo>
            <Demo title="多条折线图" vertical>
                <div slot="demo">
                    <DataVisItem
                        :charts="code.simple.data.multipleCharts"
                    />
                </div>
                <div slot="desc">
                    <p>通过设置<code>charts</code>即可生成一个一系列可视化图表。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.simple.multipleChartsCode }}</i-code>
            </Demo>
            <Demo title="多轴折线图" vertical>
                <div slot="demo">
                    <DataVisItem
                        :charts="code.simple.data.Multiaxial"
                    />
                </div>
                <div slot="desc">
                    <p>通过设置<code>charts</code>即可生成一个一系列可视化图表。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.simple.MultiaxialCode }}</i-code>
            </Demo>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
import iCode from '../../../components/code';
import Demo from '../../../components/Demo';
import Code from '../../../code/doc/chart-line';

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
