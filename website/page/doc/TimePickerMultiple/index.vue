<template>
    <i-article>
        <article>
            <h1>TimePickerMultiple 多行时间选择器</h1>
            <inAnchor title="概述" h2 />
            <p>选择或输入标准时间，支持选择范围。</p>
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
                            <td>size</td>
                            <td>尺寸，可选值为large、small、default或者不设置</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>是否禁用选择器</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>placeholder</td>
                            <td>占位文本</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>editable</td>
                            <td>文本框是否可以输入，只在没有使用 slot 时有效</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>clearable</td>
                            <td>是否显示清除按钮</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>tips</td>
                            <td>输入框后面的提示文案</td>
                            <td>String</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>timeSplit</td>
                            <td>添加后的记录，时间段之间的分隔符</td>
                            <td>String</td>
                            <td> - </td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="TimePickerMultiple events" h2 />
                <table >
                    <thead>
                        <tr>
                            <th>事件名</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>返回值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>on-change</td>
                            <td>添加或者删除记录时触发</td>
                            <td>Array</td>
                            <td>已经格式化后的时间，比如 ['00:10:00 - 12:00:00', '13:00:00 - 16:00:00']</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <inAnchor title="代码示例" h2 />
            <Demo title="基础用法">
                <div slot="demo">
                    <Form :model="code.simple.data.model">
                        <FieldGenerator
                            :field="code.simple.data.field"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>设置属性 type 为 timerange 显示选择单个时间和选择范围时间类型。</p>
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
import Code from '../../../code/doc/timePickerMultiple';

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
