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
import tdTheme from './theme.json';
import { on, off } from '../utils/utils';
import dataGetter from '../mixins/dataGetter';
import {classPrifix} from '../utils/const';

echarts.registerTheme('tdTheme', tdTheme);

export default {
    name: 'ChartPie',
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
            chartData: []
        };
    },
    computed: {
        classes() {
            return [
                `${classPrifix}-chart`,
                `${classPrifix}-chart-pie`
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
            this.dom = this.$refs.dom && echarts.init(this.$refs.dom, 'tdTheme');
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
                tooltip : {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                series : [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius : '55%',
                        center: ['50%', '50%'],
                        data: data.sort(function (a, b) { return a.value - b.value; }),
                        roseType: 'radius',
                        animationType: 'scale',
                        animationEasing: 'elasticOut',
                        animationDelay: function () {
                            return Math.random() * 200;
                        }
                    }
                ]
            };
            this.dom && this.dom.setOption(option);
            on(window, 'resize', this.resize);
        }
    }
};
</script>
