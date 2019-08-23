<template>
    <i-article>
        <article>
            <h1>DatePicker 日期选择器</h1>
            <inAnchor title="概述" h2 />
            <p>选择或输入日期，支持年、月、日期等类型，支持选择范围。</p>
            <div class="api">
                <inAnchor title="配置快速查询" h2 />
            </div>
            <inAnchor title="代码示例" h2 />
            <Demo title="基础用法">
                <div slot="demo">
                    <FieldGenerator
                        :field="code.simple.data.field"
                        :form-model="code.simple.data.model"
                        @on-field-change="handleFieldChange"
                    />
                    <FieldGenerator
                        :field="code.simple.data.daterangeField"
                        :form-model="code.simple.data.model"
                        @on-field-change="handleFieldChange"
                    />

                </div>
                <div slot="desc">
                    <p>设置属性 type 为 date 或 daterange 分别显示选择单日和选择范围类型。</p>
                    <p>为了减少配置，默认支持快捷方式。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.simple.code }}</i-code>
            </Demo>
            <Demo title="面板不联动(daterange | datetimerange)">
                <div slot="demo">
                    <FieldGenerator
                        :field="code.splitPanels.data.field"
                        :form-model="code.splitPanels.data.model"
                        @on-field-change="handleFieldChange"
                    />
                </div>
                <div slot="desc">
                    <p>开启属性<code>split-panels</code>后，左右两面板在切换年、月时不联动。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.splitPanels.code }}</i-code>
            </Demo>
            <Demo title="多选(date)">
                <div slot="demo">
                    <FieldGenerator
                        :field="code.multiple.data.field"
                        :form-model="code.multiple.data.model"
                        @on-field-change="handleFieldChange"
                    />
                </div>
                <div slot="desc">
                    <p>开启属性<code>split-panels</code>后，左右两面板在切换年、月时不联动。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.multiple.code }}</i-code>
            </Demo>
            <Demo title="日期格式">
                <div slot="demo">
                    <FieldGenerator
                        :field="code.multiple.data.field"
                        :form-model="code.multiple.data.model"
                        @on-field-change="handleFieldChange"
                    />
                </div>
                <div slot="desc">
                    <p>设置属性 format 可以改变日期的显示格式，详见  <a href="https://iviewui.com/components/date-picker#RQGS" target="_blank">Date</a>。</p>
                    <p>注意，format 只是改变显示的格式，并非改变 value 值。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.multiple.code }}</i-code>
            </Demo>
            <Demo title="不可选日期">
                <div slot="demo">
                    <FieldGenerator
                        :field="code.disabledDates.data.field"
                        :form-model="code.disabledDates.data.model"
                        @on-field-change="handleFieldChange"
                    />
                </div>
                <div slot="desc">
                    <p>设置属性 disabledDates 可以指定不可选日期。上例为“只能选择2019年的2月和4月的某一天”。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.disabledDates.code }}</i-code>
            </Demo>
            <Demo title="年和月">
                <div slot="demo">
                    <FieldGenerator
                        :field="code.yearAndMonth.data.yearField"
                        :form-model="code.yearAndMonth.data.model"
                        @on-field-change="handleFieldChange"
                    />
                    <FieldGenerator
                        :field="code.yearAndMonth.data.monthField"
                        :form-model="code.yearAndMonth.data.model"
                        @on-field-change="handleFieldChange"
                    />
                </div>
                <div slot="desc">
                    <p>设置属性 type 为 year 或 month 可以使用选择年或月的功能。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.yearAndMonth.code }}</i-code>
            </Demo>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
import iCode from '../../../components/code';
import Demo from '../../../components/Demo';
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
