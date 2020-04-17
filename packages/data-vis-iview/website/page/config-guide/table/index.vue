<template>
    <i-article>
        <article>
            <h1>表格总述</h1>
            <inAnchor title="概述" h2 />
            <inAnchor title="类型二：基于iView table组件的表格和留存图" h3 />
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
                            <td>chart.hideSizer</td>
                            <td>是否隐藏页数选择器</td>
                            <td>boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>chart.hideElevator</td>
                            <td>是否隐藏跳页输入框</td>
                            <td>boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>chart.downloadAble</td>
                            <td>是否可下载</td>
                            <td>boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>chart.customColumns</td>
                            <td>是否可控制展示该列</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>chart.columns</td>
                            <td>表头，其中的设置项可参考<a href="http://iview.talkingdata.com/#/components/table">iView Table 表格 column</a></td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>chart.data</td>
                            <td>表数据</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>chart.api</td>
                            <td>表数据的API</td>
                            <td>string</td>
                            <td>[]</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </article>
    </i-article>
</template>

<script>
import iArticle from 'website/components/article';
import inAnchor from 'website/components/anchor';
import iCode from 'website/components/code';
import Demo from 'website/components/Demo';
import Code from 'website/code/doc/chart-line';

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
