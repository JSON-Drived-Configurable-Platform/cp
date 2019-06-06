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
                v-if="customColumns.length > 0"
                size="small"
                type="primary"
                @click="handleCustomColumnsClick"
            >
                自定义列
            </Button>
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
            @on-sort-change="handleSortChange"
        />
        <Page
            :current="pageNum"
            :class="pageClasses"
            :page-size="pageSize"
            :page-size-opts="[10, 20, 30, 40]"
            :total="total"
            :show-elevator="showElevator"
            :show-sizer="showSizer"
            show-total
            size="small"
            @on-change="handlePageChange"
            @on-page-size-change="handlePageSizeChange"
        />
        <Modal
            v-if="customColumns.length > 0"
            v-model="showModal"
            title="请选择要展示的列"
            footer-hide
        >
            <CheckboxGroup
                :value="selectedCustomColumns"
                @on-change="handleCustomColumnsChange"
            >
                <Checkbox
                    v-for="option in customColumnsOptions"
                    :key="option.key"
                    :label="option.key"
                >
                    {{ option.title }}
                </Checkbox>
            </CheckboxGroup>
        </Modal>
    </div>
</template>
<script>
import dataGetter from '../mixins/dataGetter';
import {classPrifix} from '../utils/const';
import {xlsDownload} from '../utils/download';
import {addCommas, isNumber, calculateTableCellWidth} from '../utils/utils';
import expandRow from './expandRow.vue';
export default {
    name: 'ChartTable',
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
            // maxWidth: 100,
            showModal: false,
            selectedCustomColumns: [],
            remoteTotal: 0,
            pageSize: 10,
            pageNum: 1,
            loading: false,
            elWidth: 0,
            sort: {},
            remotePage: {
                pageSize: 10,
                pageNum: 1
            }
        };
    },
    computed: {
        classes() {
            return [
                `${classPrifix}-chart`,
                `${classPrifix}-chart-table`
            ];
        },
        headerClasses() {
            return `${classPrifix}-chart-table-header`;
        },
        contentClasses() {
            return `${classPrifix}-chart-table-content`;
        },
        pageClasses() {
            return `${classPrifix}-chart-table-page`;
        },
        showSizer() {
            return this.chart.hideSizer === undefined ? true : !this.chart.hideSizer;
        },
        showElevator() {
            return this.chart.hideElevator === undefined ? true : !this.chart.hideElevator;
        },
        columns() {
            let chartColumns = this.chartColumns || [];
            let columns = this.chart.columns || [];
            return chartColumns.length > 0 ? chartColumns : columns;
        },
        data() {
            let data = this.chart.api ? this.chartData : this.chart.data;
            let sort = this.sort || {};
            if (sort.key) {
                let {key, order} = sort;
                data = data.sort((a, b) => {
                    if (order === 'desc') {
                        return b[key] - a[key];
                    }
                    else if (order === 'asc') {
                        return a[key] - b[key];
                    }
                    else {
                        return 0;
                    }
                });
            }
            return data;
        },
        total() {
            if (this.remoteTotal) {
                return this.remoteTotal;
            }
            return this.data.length;
        },
        queryParams () {
            let params = {
                ...this.remotePage
            };
            // let sort = this.sort;
            // if (sort.key) {
            //     params.sort = {
            //         [sort.key]: sort.order
            //     };
            // }
            return params;
        },
        isRemotePage() {
            return this.remoteTotal > 0;
        },
        customColumns() {
            return this.chart.customColumns || [];
        },
        customColumnsOptions() {
            return this.columns.filter(item => this.customColumns.includes(item.key)) || [];
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
        isExpand() {
            return this.displayData.find(item => {
                if (!Array.isArray(item.children)) {
                    return false;
                }
                return item.children.length > 0;
            });
        },
        displayColumns() {
            let selectedCustomColumns = this.selectedCustomColumns;
            let customColumns = this.customColumns;
            let columns = this.columns.filter(
                item => !customColumns.includes(item.key)
                || selectedCustomColumns.includes(item.key)
            ).slice();
            let columnsWidth = this.columnsWidth || {};
            let expandWidth = this.isExpand ? 30 : 0;
            let totalWidth = columns.map(item => columnsWidth[item.key]).reduce(function(prev,cur){
                return prev + cur;
            },0) + expandWidth;

            let sort = this.sort || {};

            columns = columns.map(item => {
                if (item.type === 'expand') {
                    return item;
                }
                item.width = this.elWidth < totalWidth
                    ? columnsWidth[item.key]
                    : (this.elWidth / Object.keys(columnsWidth).length) < columnsWidth[item.key] ? columnsWidth[item.key] : 'auto';
                // 如果是远程排序，则需要展示排序信息
                if (sort.key && sort.key === item.key) {
                    item.sortType = sort.order || 'normal';
                }
                else {
                    item.sortType = 'normal';
                }
                item.render = (h, params) => {
                    const key = params.column.key;
                    let value = params.row[key];
                    let text = value;
                    // 如果是整数
                    if (isNumber(value)) {
                        text = addCommas(value.toString());
                    }

                    // 如果有单位
                    if (item.unit) {
                        text = text + '' + params.column.unit;
                    }

                    // 如果为null, 则显示 '-', 不加单位
                    if (value === null) {
                        text = '-';
                    }
                    return h('span', {}, text);
                };
                return item;
            });


            // 增加扩展列
            if (this.isExpand) {
                columns.unshift({
                    width: expandWidth,
                    type: 'expand',
                    render: (h, params) => {
                        return h(expandRow, {
                            props: {
                                row: params.row,
                                data: params.row.children,
                                columns: columns.slice()
                            }
                        });
                    }
                });
            }
            return columns;
        },
    },

    watch: {
        chartColumns(val) {
            if (val.length === 0) {
                return;
            }
            this.selectedCustomColumns = this.columns.filter(item => item.defaultShow !== false).map(item => item.key);
        }
    },

    mounted() {
        this.elWidth = parseInt(window.getComputedStyle(this.$el).width);
        this.selectedCustomColumns = this.columns.filter(item => item.defaultShow !== false).map(item => item.key);
        this.$watch('chart', () => {
            this.$nextTick(() => {
                this.chartData = [];
                this.chartColumns = [];
                this.remoteTotal = 0;
            });
        });
    },
    methods: {
        getDataFinished() {},
        handleCustomColumnsClick() {
            this.showModal = true;
        },
        handlePageChange(pageNum) {
            this.pageNum = pageNum;
            if (this.isRemotePage) {
                this.remotePage = {
                    ...this.remotePage,
                    pageNum
                };
            }
        },
        handlePageSizeChange(pageSize) {
            this.pageSize = pageSize;
            if (this.isRemotePage) {
                this.page = {
                    ...this.page,
                    pageSize
                };
            }
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
        },
        handleSortChange({key, order}) {
            this.sort = {
                key,
                order
            };
        },

        handleCustomColumnsChange(val) {
            this.selectedCustomColumns = val;
        }
    }
};
</script>
