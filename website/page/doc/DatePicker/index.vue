<template>
    <i-article>
        <article>
            <h1>DatePicker 日期选择器</h1>
            <inAnchor title="概述" h2 />
            <p>选择或输入日期，支持年、月、日期等类型，支持选择范围。</p>
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
                            <td>type</td>
                            <td>日期选择器的类型，不可改</td>
                            <td>String</td>
                            <td>DatePicker</td>
                        </tr>
                        <tr>
                            <td>subtype</td>
                            <td>显示类型，可选值为 date、daterange、datetime、datetimerange、year、month</td>
                            <td>String</td>
                            <td>date</td>
                        </tr>
                        <tr>
                            <td>placeholder</td>
                            <td>占位文本</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>format</td>
                            <td>展示的日期格式(与iView支持的日期格式一致)</td>
                            <td>Date</td>
                            <td>date | daterange：yyyy-MM-dd<br>
                                datetime | datetimerange：yyyy-MM-dd HH:mm:ss<br>
                                year：yyyy<br>
                                month：yyyy-MM<br></td>
                        </tr>
                    </tbody>
                </table>
                <inAnchor title="扩展配置" h3 />
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
                            <td>required</td>
                            <td>是否必须选择日期</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
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
                            <td>multiple</td>
                            <td>开启后，可以选择多个日期，仅在<code>date</code>下可用。</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>splitPanels</td>
                            <td>开启后，左右面板不联动，仅在<code>daterange</code>和<code>datetimerange</code>下可用。</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>disabledDates</td>
                            <td>设置不可选择的日期。二维数组形如[[startDate1,endDate1]],[startDate2,endDate2]。startDate和endDate为日期字符串，推荐使用
                                ISO 8601 格式，如
                                "2017-04-16"，startDate为空表示endDate及之前的日期不可选择，endDate为空表示startDate及之后的日期不可选择。注意：最终的不可选择的日期区间为设置的日期区间的并集。
                            </td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>maxLength</td>
                            <td>设置日期最多可以选择几天</td>
                            <td>Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>options</td>
                            <td>设置左侧的快捷方式。当subtype为date或datetime时，二维数组形如[{label:'昨天',value: -1},{label:'七天后',value: 7}]；当subtype为daterange或datetimerange时，二维数组形如[{label:'前后三天',value: [-3, 3]}],如果不需要快捷方式，传递空数组即可。
                            </td>
                            <td>Array</td>
                            <td>-</td>
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
                        <FieldGenerator
                            :field="code.simple.data.daterangeField"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>设置属性 subtype 为 date 或 daterange 分别显示选择单日和选择范围类型。</p>
                    <p>为了减少配置，默认支持快捷方式。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.simple.code }}</i-code>
            </Demo>
            <Demo title="面板不联动(daterange | datetimerange)">
                <div slot="demo">
                    <Form :model="code.splitPanels.data.model">
                        <FieldGenerator
                            :field="code.splitPanels.data.field"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>开启属性<code>split-panels</code>后，左右两面板在切换年、月时不联动。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.splitPanels.code }}</i-code>
            </Demo>
            <Demo title="多选(date)">
                <div slot="demo">
                    <Form :model="code.multiple.data.model">
                        <FieldGenerator
                            :field="code.multiple.data.field"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>开启属性<code>multiple</code>后，可以多选。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.multiple.code }}</i-code>
            </Demo>
            <Demo title="日期格式">
                <div slot="demo">
                    <Form :model="code.format.data.model">
                        <FieldGenerator
                            :field="code.format.data.field"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>设置属性 format 可以改变日期的显示格式，详见 <a
                        href="https://iviewui.com/components/date-picker#RQGS"
                        target="_blank"
                    >Date</a>。</p>
                    <p>注意，format 只是改变显示的格式，并非改变 value 值。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.multiple.code }}</i-code>
            </Demo>
            <Demo title="不可选日期">
                <div slot="demo">
                    <Form :model="code.disabledDates.data.model">
                        <FieldGenerator
                            :field="code.disabledDates.data.field"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>设置属性 disabledDates 可以指定不可选日期。上例为“只能选择2019年的2月和4月的某一天”。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.disabledDates.code }}</i-code>
            </Demo>
            <Demo title="年和月">
                <div slot="demo">
                    <Form :model="code.yearAndMonth.data.model">
                        <FieldGenerator
                            :field="code.yearAndMonth.data.yearField"
                            @on-field-change="handleFieldChange"
                        />
                        <FieldGenerator
                            :field="code.yearAndMonth.data.monthField"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>设置属性 subtype 为 year 或 month 可以使用选择年或月的功能。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.yearAndMonth.code }}</i-code>
            </Demo>
            <Demo title="快捷方式">
                <div slot="demo">
                    <Form :model="code.quick.data.model">
                        <FieldGenerator
                            :field="code.quick.data.field"
                            @on-field-change="handleFieldChange"
                        />
                        <FieldGenerator
                            :field="code.quick.data.daterangeField"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>设置快捷方式</p>
                </div>
                <i-code slot="code" lang="html">{{ code.quick.code }}</i-code>
            </Demo>
            <Demo title="选择多天及天数限制">
                <div slot="demo">
                    <Form :model="code.maxLength.data.model">
                        <FieldGenerator
                            :field="code.maxLength.data.field"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>在开启 multiple 后,可以选择多个日期, 用maxLength 来限制用户选择几天 </p>
                </div>
                <i-code slot="code" lang="html">{{ code.maxLength.code }}</i-code>
            </Demo>
            <Demo title="日期时间区间选择">
                <div slot="demo">
                    <Form :model="code.timedateRange.data.model">
                        <FieldGenerator
                            :field="code.timedateRange.data.field"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>设置属性subtype为datetimerange,可选择具体的日期时间，也可结合format定制范围</p>
                </div>
                <i-code slot="code" lang="html">{{ code.timedateRange.code }}</i-code>
            </Demo>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
import iCode from '../../../components/code';
import Demo from '../../../components/demo';
import Code from '../../../code/doc/datePicker';

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
