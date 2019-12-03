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
import echarts from 'echarts';
import chartTheme from './theme.json';
import { on, off } from '../utils/utils';
import dataGetter from '../mixins/dataGetter';
import {classPrifix} from '../utils/const';
echarts.registerTheme('chartTheme', chartTheme);

export default {
    name: 'ChartBar',
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
            chartData: [],
            chartColumns: [],
        };
    },
    computed: {
        classes() {
            return [
                `${classPrifix}-chart`,
                `${classPrifix}-chart-bar`
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
            const columns = this.columns;
            const isHorizontal = this.chart.direction === 'horizontal';
            this.dom && this.dom.clear();
            this.dom = this.$refs.dom && echarts.init(this.$refs.dom, 'chartTheme');
            if (columns.length === 0 || data.length === 0) {
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
                grid: {
                    containLabel: true
                },
                xAxis: isHorizontal
                    ? {
                        type: 'value'
                    } : {
                        type: 'category',
                        data: columns
                    },
                yAxis: isHorizontal
                    ? {
                        type: 'category',
                        data: columns
                    } : {
                        type: 'value'
                    },
                series: [{
                    data: data,
                    type: 'bar'
                }]
            };
            this.dom && this.dom.setOption(option);
            on(window, 'resize', this.resize);
        }
    }
};
</script>
