<template>
    <i-article>
        <article>
            <h1>选择合适的组件类型</h1>
            <p>提供各种相似场景组件的速查表和场景建议。</p>
            <div class="api">
                <inAnchor title="选项选择类" h2 />
                <table>
                    <thead>
                        <tr>
                            <th>组件类型</th>
                            <th>适用场景</th>
                            <th>推荐场景</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Switch</td>
                            <td>开关选择</td>
                            <td>只有两个选项，且为对立面</td>
                        </tr>
                        <tr>
                            <td>Radio</td>
                            <td>直接单选</td>
                            <td>选择项少于6个，直接展示所有选项</td>
                        </tr>
                        <tr>
                            <td>Checkbox</td>
                            <td>直接多选</td>
                            <td>选择项少于6个，直接展示所有选项</td>
                        </tr>
                        <tr>
                            <td>CheckboxCard</td>
                            <td>卡片多选</td>
                            <td>多选，且需展示图文信息时</td>
                        </tr>
                        <tr>
                            <td>Select</td>
                            <td>先下拉，再选择</td>
                            <td>选项大于等于6个</td>
                        </tr>
                        <tr>
                            <td>LogicSelect</td>
                            <td>逻辑选择</td>
                            <td>需要进行大于、小于、等于、区间等逻辑的选择时</td>
                        </tr>
                        <tr>
                            <td>Cascader</td>
                            <td>层级较多时的选择</td>
                            <td>多级单选</td>
                        </tr>
                        <tr>
                            <td>Tree</td>
                            <td>层级较多时的选择</td>
                            <td>多级多选</td>
                        </tr>
                        <tr>
                            <td>TableSelect</td>
                            <td>表格选择</td>
                            <td>有较多的描述信息</td>
                        </tr>
                        <tr>
                            <td>Carousel</td>
                            <td>走马灯</td>
                            <td>可通过横划来进行单选，适用于图片视频媒体的单选</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
export default {
    components: {
        iArticle,
        inAnchor
    },
    data() {
        return {};
    }
};
</script>

<style>

</style>
