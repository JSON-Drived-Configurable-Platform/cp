
<template>
    <div :class="[loadingClasses, classes]">
        <Spin
            v-if="loading"
            :class="spinClasses"
            size="large"
        />
        <div
            ref="dom"
            :class="classes"
        />
    </div>
</template>

<script>
/**
 * ChartDataset is supported from v0.1, and it's not just only for one kind chart type, but for many.
 * The purpose of change to using dataset is to simplfy the config and separte the dataset from the chart config.
 * And it's easy to rendering multiple chart type inside one using dataset.
 * */

import echarts from 'echarts';
import chartTheme from './theme.json';
import chinaJson from 'echarts/map/json/china.json';
import { on, off } from '../utils/utils';
import dataGetter from '../mixins/dataGetter';
import {classPrifix} from '../utils/const';
echarts.registerTheme('chartTheme', chartTheme);
echarts.registerMap('china', chinaJson);

export default {
    name: 'ChartDataset',
    mixins: [dataGetter],
    props: {
        //  图的配置
        chart: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data () {
        return {
            loading: false,
            dom: null,
            // 数据
            chartDataset: null
        };
    },
    computed: {
        classes() {
            return [
                `${classPrifix}-chart`,
                `${classPrifix}-chart-dataset`
            ];
        },
        dataset() {
            return typeof this.chart.dataset === 'string' ? this.chartDataset || null : this.chart.dataset || null;
        }
    },
    mounted () {
        this.render();
        this.$watch('chart', () => {
            this.render();
        });
    },
    beforeDestroy () {
        off(window, 'resize', this.resize);
    },
    methods: {
        resize () {
            this.dom && this.dom.resize();
        },
        getDataFinished() {
            this.render();
        },
        render() {
            const dataset = this.dataset || null;
            const chart = this.chart;
            this.dom && this.dom.clear();
            this.dom = this.$refs.dom && echarts.init(this.$refs.dom, 'chartTheme');
            // Notice dataset can be Objct or Array
            if (!dataset) {
                return;
            }
            let option = {
                toolbox: {
                    top: '-1%',
                    right: '4%',
                    feature: {
                        saveAsImage: {}
                    }
                },
                legend: chart.legend !== undefined ? chart.legend : {},
                tooltip : {
                    trigger: 'axis',
                },
                grid: {
                    containLabel: true
                },
                dataset,
                series: chart.series.map(
                    item => {
                        if (['pie', 'funnel'].includes(item.type)) {
                            item.tooltip = {
                                trigger: 'item'
                            };
                            item.label = {
                                position: 'inner',
                                formatter: '{b}\n {d}'
                            };
                        }
                        return item;
                    }
                ) || []
            };

            // xAxis
            if (chart.xAxis) {
                option.xAxis = chart.xAxis || {};
            }

            // yAxis
            if (chart.yAxis) {
                option.yAxis = chart.yAxis || {};
            }

            // visualMap
            if (chart.visualMap) {
                option.visualMap = chart.visualMap || {};
            }

            this.dom && this.dom.setOption(option);
            on(window, 'resize', this.resize);
        }
    }
};
</script>
