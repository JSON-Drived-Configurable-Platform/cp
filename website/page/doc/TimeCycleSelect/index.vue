<template>
    <i-article>
        <article>
            <h1>timeCycleSelect 时间段选择</h1>
            <inAnchor title="概述" h2 />
            <div class="api">
                <inAnchor title="配置快速查询" h2 />
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
                            <td>model</td>
                            <td>绑定的值的名称</td>
                            <td>String</td>
                            <td>time</td>
                        </tr>
                        <tr>
                            <td>tipsName</td>
                            <td>['投放', '不投放']</td>
                            <td>Array</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>yAxisName</td>
                            <td>左侧y轴名称</td>
                            <td>Array</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>xAxisName</td>
                            <td>x轴名称</td>
                            <td>Array</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>xAxisNum</td>
                            <td>x轴需要展现的小方格数量</td>
                            <td>Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>yAxisNum</td>
                            <td>y轴需要展现的小方格数量</td>
                            <td>Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>width</td>
                            <td>宽度</td>
                            <td>string</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <inAnchor title="代码示例" h2 />
            <Demo title="基础用法" vertical>
                <div slot="demo">
                    <Form :model="code.simple.data.model">
                        <FieldGenerator
                            :field="code.simple.data.field"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
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
import Code from '../../../code/doc/timeCycleSelect';

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

<style scoped>
.fg-ivu-datepicker {
    margin-top: 20px;
}
</style>
