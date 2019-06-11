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
            v-if="pageNum > 1"
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
import {addCommas, isNumber, calculateTableCellWidth} from '../utils/utils';
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
            pageSize: 1000,
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
            let columnsWidth = this.columnsWidth || {};
            let expandWidth = this.isExpand ? 30 : 0;
            let totalWidth = columns.map(item => columnsWidth[item.key]).reduce(function(prev,cur){
                return prev + cur;
            },0) + expandWidth;
            return columns.map((item, index) => {
                if (item.type === 'expand') {
                    return item;
                }
                item.width = this.elWidth < totalWidth
                    ? columnsWidth[item.key]
                    : (this.elWidth / Object.keys(columnsWidth).length) < columnsWidth[item.key] ? columnsWidth[item.key] : 'auto';
                item.render = (h, params) => {
                    const key = params.column.key;
                    let value = params.row[key];
                    let text = value;
                    let className = '';
                    if (index === 1 && isNumber(value)) {
                        // 如果是整数
                        text = addCommas(value.toString());
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
        },
        headerColumnsWidth() {
            let widths = {};
            this.columns.forEach(item => {
                widths[item.key] = calculateTableCellWidth(item.title);
            });
            return widths;
        },
        columnsWidth() {
            let widths = this.headerColumnsWidth || {};
            this.displayData.forEach((item = {}) => {
                Object.keys(item).forEach(fieldName => {
                    if (!widths[fieldName]) {
                        widths[fieldName] = 80;
                    }
                    const width = calculateTableCellWidth(item[fieldName]);
                    widths[fieldName] = Math.max(widths[fieldName], width);
                });
            });
            return widths;
        },
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
