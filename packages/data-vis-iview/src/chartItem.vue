<template>
    <Card :class="classes">
        <h3
            v-if="showHeader"
            :class="headerClasses"
        >
            <RadioGroup
                v-if="charts.length > 1 && !isInline"
                v-model="index"
                class="type"
                type="button"
            >
                <Radio
                    v-for="(charItem, i) in charts"
                    :key="i"
                    :label="i"
                >
                    {{ charItem.label }}
                </Radio>
            </RadioGroup>
            <span v-if="charts.length === 1">
                {{ chart.label }}
            </span>
            <FormGenerator
                v-if="conditionFields.length > 0"
                ref="FormGenerator"
                :class="groupConditionsClasses"
                :fields="conditionFields"
                :model="model"
                :options="options"
            />
        </h3>
        <Divider
            dashed
            size="small"
        />
        <Poptip
            v-if="tip.title"
            :title="tip.title"
            :class="tipClasses"
            placement="left-start"
        >
            <Icon type="md-help-circle" />
            <div slot="content">
                <p v-html="tip.content" />
            </div>
        </Poptip>
        <component
            :is="getFieldCom(chart.type)"
            v-if="!isInline"
            :chart="chart"
            :params-container="mergedParamsContainer"
            :class="chartBoxClasses"
            :api-base="apiBase"
            :request-interceptor="requestInterceptor"
            @on-change="onFieldChange"
        />
        <div
            v-if="isInline"
            :class="inlineItemsBoxClasses"
        >
            <Card
                v-for="(item, i) in charts"
                :key="i"
                :class="inlineItemBoxClasses"
            >
                <component
                    :is="getFieldCom(chart.type)"
                    :chart="item"
                    :params-container="mergedParamsContainer"
                    :class="chartBoxClasses"
                    :api-base="apiBase"
                    :request-interceptor="requestInterceptor"
                    @on-change="onFieldChange"
                />
            </Card>
        </div>
    </Card>
</template>
<script>
import chartComponents from './utils/fieldsLoader.js';
import {classPrifix} from './utils/const';
export default {
    name: 'ChartItem',
    components: {
        ...chartComponents
    },
    props: {
        chartGroup: {
            type: Object,
            required: true,
            default() {
                return {};
            }
        },
        paramsContainer: {
            type: Object,
            default() {
                return {};
            }
        },
        requestInterceptor: {
            type: [Function, null],
            default: null
        },
        apiBase: {
            type: String,
            default: ''
        },
    },
    data() {
        return {
            index: 0,
            model: {},
            options: {
                inline: true
            }
        };
    },

    computed: {
        display() {
            return this.chartGroup.display;
        },
        isInline() {
            return this.display === 'inline';
        },
        showHeader() {
            return this.tip.title
            // 条件选择
            || this.conditionFields.length > 0
            // 当前图的标题
            || this.chart.label
            || !this.isInline && this.charts.length > 1;
        },
        classes() {
            return `${classPrifix}-item`;
        },
        tipClasses() {
            return `${this.classes}-tip`;
        },
        headerClasses() {
            return `${this.classes}-header`;
        },
        chartBoxClasses() {
            return `${this.classes}-chart-box`;
        },
        groupConditionsClasses() {
            return `${this.classes}-chart-conditions`;
        },
        inlineItemsBoxClasses() {
            return `${classPrifix}-chart-inline-items-box`;
        },
        inlineItemBoxClasses() {
            return `${classPrifix}-chart-inline-item-box`;
        },
        charts() {
            return this.chartGroup.chartGroup || [];
        },
        chart() {
            return this.charts[this.index];
        },
        conditionFields() {
            return this.chartGroup.conditions || [];
        },
        mergedParamsContainer() {
            const model = this.model;
            const paramsContainer = this.paramsContainer;
            return Object.assign({}, model, paramsContainer);
        },
        tip() {
            return {
                title: this.chart.tip && this.chart.tip.title,
                content: this.chart.tip && this.chart.tip.content,
            };
        }
    },

    created() {
        const conditions = this.chartGroup.conditions || [];
        const model = {};
        conditions.forEach(item => {
            model[item.model] = item.defaultValue;
        });
        this.model = model;
    },

    methods: {
        onFieldChange(model, value) {
            this.$emit('on-field-change', model, value);
        },
        getFieldCom(comType) {
            return `chart-${comType}`;
        }
    }
};
</script>
