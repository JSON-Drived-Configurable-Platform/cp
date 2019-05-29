<template>
    <div
        v-if="loading"
        :class="[loadingClasses, classes]"
    >
        <Spin
            :class="spinClasses"
            size="large"
        />
    </div>
    <div
        v-else
        :class="classes"
    >
        <h3 :class="headerClasses">
            <Button
                size="small"
                type="primary"
                @click="handleDownloadClick"
            >
                下载数据
            </Button>
        </h3>
        <Table
            ref="table"
            stripe
            size="small"
            :class="contentClasses"
            :columns="displayColumns"
            :data="displayData"
            :loading="loading"
        />
        <Page
            :current="pageNum"
            :class="pageClasses"
            :page-size="pageSize"
            :page-size-opts="[10, 20, 30, 40]"
            :total="total"
            show-total
            size="small"
            @on-change="handlePageChange"
            @on-page-size-change="handlePageSizeChange"
        />
    </div>
</template>
<script>
import dataGetter from '../mixins/dataGetter';
import {classPrifix} from '../utils/const';
import {xlsDownload} from '../utils/download';
export default {
    name: 'ChartRetain',
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
            chartData: [],
            chartColumns: [],
            pageSize: 10,
            pageNum: 1,
            loading: false,
            elWidth: 0
        };
    },
    computed: {
        classes() {
            return [
                `${classPrifix}-chart`,
                `${classPrifix}-chart-retain`
            ];
        },
        headerClasses() {
            return `${classPrifix}-chart-retain-header`;
        },
        contentClasses() {
            return `${classPrifix}-chart-retain-content`;
        },
        pageClasses() {
            return `${classPrifix}-chart-retain-page`;
        },
        columns() {
            let chartColumns = this.chartColumns || [];
            let columns = this.chart.columns || [];
            return chartColumns.length > 0 ? chartColumns : columns;
        },
        data() {
            return this.chart.api ? this.chartData : this.chart.data;
        },
        total() {
            return this.data.length;
        },
        displayColumns() {
            let columns = this.columns || [];
            return columns.map((item, index) => {
                if (item.type === 'expand') {
                    return item;
                }
                item.width = index > 1 ? 54 : 75;
                item.render = (h, params) => {
                    const key = params.column.key;
                    let value = params.row[key];
                    let text = value;
                    let className = '';
                    if (index === 1 && Number.isInteger(text)) {
                        text = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                    }
                    if (index > 1) {
                        // 颜色
                        let grade = Math.floor(value / 10);
                        className = [
                            `${classPrifix}-chart-retain-color`,
                            {
                                [`${classPrifix}-chart-retain-color-${grade}`]: grade >= 0 && grade <= 10,
                                [`${classPrifix}-chart-retain-color-error`]: grade < 0 && grade > 10
                            }
                        ];
                        // 单位
                        if (typeof text === 'number') {
                            text = text + '%';
                        }
                    }
                    return h('div', {
                        class: className
                    }, text);
                };
                item.ellipsis = true;
                item.tooltip = true;
                item.align = 'center';
                return item;
            });
        },
        displayData() {
            if (this.isRemotePage) {
                return this.data;
            }
            return this.data.slice((this.pageNum - 1) * this.pageSize, (this.pageNum) * this.pageSize);
        }
    },

    mounted() {
        this.elWidth = parseInt(window.getComputedStyle(this.$el).width);
        this.$watch('chart', () => {
            this.$nextTick(() => {
                this.chartData = [];
                this.chartColumns = [];
            });
        });
    },
    methods: {
        getDataFinished() {},
        handlePageChange(pageNum) {
            this.pageNum = pageNum;
        },
        handlePageSizeChange(pageSize) {
            this.pageSize = pageSize;
        },
        handleDownloadClick() {
            if (this.chart.downLoadApi) {
                window.open(this.chart.downLoadApi);
            }
            else {
                // download local data
                const header = this.columns.map(item => item.title);
                const data = [
                    header,
                    ...this.data.map(item => {
                        return this.columns.map(field => item[field.key]);
                    })
                ];
                xlsDownload(data, this.chart.label);
            }
        }
    }
};
</script>
