<template>
    <div :class="[loadingClasses, classes, displayClasses]">
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
import echarts from 'echarts';
import chartTheme from './theme.json';
import { on, off } from '../utils/utils';
import dataGetter from '../mixins/dataGetter';
import {classPrifix} from '../utils/const';

echarts.registerTheme('chartTheme', chartTheme);

export default {
    name: 'ChartFunnel',
    mixins: [dataGetter],
    props: {
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
            chartColumns: [],
            chartData: []
        };
    },
    computed: {
        classes() {
            return [
                `${classPrifix}-chart`,
                `${classPrifix}-chart-funnel`
            ];
        },
        displayClasses() {
            return [
                {
                    [`${classPrifix}-hide`]: this.loading,
                }
            ];
        },
        data() {
            return this.chart.api ? this.chartData : this.chart.data;
        },
        columns() {
            let chartColumns = this.chartColumns || [];
            let columns = this.chart.columns || [];
            return chartColumns.length > 0 ? chartColumns : columns;
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
            const data = this.data;
            this.dom && this.dom.clear();
            this.dom = this.$refs.dom && echarts.init(this.$refs.dom, 'chartTheme');
            if (data.length === 0) {
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
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c}%'
                },
                grid: {
                    containLabel: true
                },
                legend: {
                    data: this.columns
                },
                calculable: true,
                series: [
                    {
                        name: this.chart.label,
                        type: 'funnel',
                        min: 0,
                        max: 100,
                        minSize: '0%',
                        maxSize: '100%',
                        sort: 'descending',
                        label: {
                            show: true,
                            position: 'ouside',
                            formatter: '{b}: {c}%'
                        },
                        labelLine: {
                            length: 10,
                            lineStyle: {
                                width: 1,
                                type: 'solid'
                            }
                        },
                        emphasis: {
                            label: {
                                fontSize: 14
                            }
                        },
                        data: this.data,
                        animationDuration: function (idx) {
                            // 越往后的数据延迟越大
                            return idx * 1000;
                        }
                    }
                ],
            };
            this.dom && this.dom.setOption(option);
            on(window, 'resize', this.resize);
        }
    }
};
</script>
