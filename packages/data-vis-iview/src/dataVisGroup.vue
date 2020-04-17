<template>
    <Card :class="classes">
        <h3
            v-if="showHeader"
            :class="headerClasses"
        >
            <!-- Title or Tabs Titles -->
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

            <!-- Group Search Conditions -->
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
            v-if="showHeader"
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
        <template>
            <DataVisItem
                v-if="!isInline"
                :chart="chart"
                :params-container="mergedParamsContainer"
                :api-base="apiBase"
                :request-interceptor="requestInterceptor"
                @on-change="onFieldChange"
            />
            <div
                v-else
                :class="inlineItemsBoxClasses"
            >
                <Card
                    v-for="(item, i) in charts"
                    :key="i"
                    :class="inlineItemBoxClasses"
                >
                    <DataVisItem
                        :chart="item"
                        :params-container="mergedParamsContainer"
                        :api-base="apiBase"
                        :request-interceptor="requestInterceptor"
                        @on-change="onFieldChange"
                    />
                </Card>
            </div>
        </template>
    </Card>
</template>
<script>
import {classPrifix} from './utils/const';
import DataVisItem from './dataVisItem.vue';
export default {
    name: 'ChartItem',
    components: {
        DataVisItem
    },
    props: {
        charts: {
            type: Array,
            required: true,
            default() {
                return [];
            }
        },
        conditions: {
            type: Array,
            default() {
                return [];
            }
        },
        display: {
            type: String,
            default: ''
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
                inline: true,
                size: 'small'
            }
        };
    },

    computed: {
        isInline() {
            return this.display === 'inline';
        },
        showHeader() {
            return this.tip.title
            // 条件选择
            || this.conditionFields.length > 0
            // 当前图的标题
            || !this.isInline && this.chart.label
            // 显示切换按钮
            || !this.isInline && this.charts.length > 1;
        },
        classes() {
            return `${classPrifix}-group`;
        },
        tipClasses() {
            return `${this.classes}-tip`;
        },
        headerClasses() {
            return `${this.classes}-header`;
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
        chart() {
            return this.charts[this.index];
        },
        conditionFields() {
            return this.conditions || [];
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
        const conditions = this.conditions || [];
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
