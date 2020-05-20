<template>
    <i-article>
        <article>
            <h1>slider 示例</h1>
            <inAnchor title="概述" h2 />
            <p>选择比例</p>
            <div class="api">
                <inAnchor title="配置快速查询" h2 />
                <inAnchor title="核心配置" h3 />
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
                        <td>不可为空</td>
                    </tr>
                    <tr>
                        <td>value</td>
                        <td>滑块选定的值，可以使用 v-model 双向绑定数据。普通模式下，数据格式为数字，在双滑块模式下，数据格式为长度是2的数组，且每项都为数字</td>
                        <td>Number | Array</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>min</td>
                        <td>最小值</td>
                        <td>Number</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>max</td>
                        <td>最大值</td>
                        <td>Number</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>step</td>
                        <td>步长，取值建议能被（max - min）整除</td>
                        <td>Number</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>disabled</td>
                        <td>是否禁用滑块</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>range</td>
                        <td>是否开启双滑块模式</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>showInput</td>
                        <td>是否显示数字输入框，仅在单滑块模式下有效</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>left</td>
                        <td>数字输入框是否置于左侧（默认右侧），单滑模式下，showInput为true时生效</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>showStops</td>
                        <td>是否显示间断点，建议在 step 不密集时使用</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>showTip</td>
                        <td>提示的显示控制，可选值为 <code>hover</code>（悬停，默认）、 <code>always</code>（总是可见）、<code>never</code>（不可见）</td>
                        <td>String</td>
                        <td>hover</td>
                    </tr>
                    <tr>
                        <td>format</td>
                        <td>Slider 会把当前值传给format，并在 Tooltip 中显示 format 的返回值，若为 null，则隐藏 Tooltip</td>
                        <td>Function</td>
                        <td>value</td>
                    </tr>
                    <tr>
                        <td>inputSize</td>
                        <td>数字输入框的尺寸，可选值为large、small、default或者不填，仅在开启 show-input 时有效</td>
                        <td>String</td>
                        <td>default</td>
                    </tr>

                    </tbody>
                </table>
            </div>
            <inAnchor title="代码示例" h2 />
            <Demo title="单滑模式用法">
                <div slot="demo">
                    <Form :model="code.simple.data.model">
                        <FieldGenerator
                            :field="code.simple.data.field"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field</code>, <code>model</code>即可生成一个单滑Slider。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.simple.code }}</i-code>
            </Demo>

            <Demo title="双滑模式用法">
                <div slot="demo">
                    <Form :model="code.range.data.model">
                        <FieldGenerator
                                :field="code.range.data.field"
                                @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field</code>的range属性为true, 即可生成一个双滑Slider。需注意，此时<code>model</code>绑定的值类型需为一个数组</p>
                </div>
                <i-code slot="code" lang="html">{{ code.range.code }}</i-code>
            </Demo>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
import iCode from '../../../components/code';
import Demo from '../../../components/demo';
import Code from '../../../code/doc/slider';

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
