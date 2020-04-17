<template>
    <div :class="[classes, loadingClasses]">
        <Spin
            v-if="loading"
            :class="spinClasses"
            size="large"
        />
        <div :class="firstSecondBoxClasses">
            <div :class="[firstContentClasses, getColorClasses(first)]">
                <h4 :class="firstLabelClasses">
                    {{ first.label }}:
                </h4>
                <span :class="firstValueClasses">
                    {{ first.value | dataFormat }}
                    <i
                        v-if="first.unit"
                        :class="unitClasses"
                    >{{ first.unit }}</i>
                </span>
            </div>
        </div>
        <Divider
            :class="dividerClassess"
            dashed
            size="small"
        />
        <ul :class="othersClasses">
            <li
                v-for="(item, index) in others"
                :key="index"
                :class="othersItemClasses"
            >
                <span :class="othersItemLabelClasses">{{ item.label }}:&nbsp;</span>
                <span :class="othersItemContentClasses">
                    {{ item.value | dataFormat }}
                    <i
                        v-if="item.unit"
                        :class="unitClasses"
                    >{{ item.unit }}</i>
                    <Icon
                        v-if="item.showChange && item.value < 0"
                        color="#19be6b"
                        type="md-arrow-dropdown"
                    />
                    <Icon
                        v-if="item.showChange && item.value > 0"
                        color="#ed4014"
                        type="md-arrow-dropup"
                    />
                </span>
            </li>
        </ul>
    </div>
</template>
<script>
import dataGetter from '../mixins/dataGetter';
import {classPrifix} from '../utils/const';
import {addCommas, isNumber} from '../utils/utils';
export default {
    name: 'ChartCard',
    filters: {
        dataFormat(value) {
            if (value === null) {
                return '-';
            }
            if (isNumber(value)) {
                return addCommas(value);
            }
            return value;
        }
    },
    mixins: [dataGetter],
    props: {
        chart: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data() {
        return {
            chartData: [],
            loading: false,
        };
    },
    computed: {
        classPrifix() {
            return `${classPrifix}-chart`;
        },
        classes() {
            return `${this.classPrifix}-card`;
        },
        firstSecondBoxClasses() {
            return `${this.classes}-first-second-box`;
        },
        firstContentClasses() {
            const {showChange, value} = this.first;
            return [
                `${this.classes}-first-content`,
                {
                    [`${this.classes}-increase`]: showChange && parseFloat(value) > 0,
                    [`${this.classes}-decrease`]: showChange && parseFloat(value) < 0,
                }
            ];
        },
        firstLabelClasses() {
            return `${this.classes}-first-label`;
        },
        firstValueClasses() {
            return `${this.classes}-first-value`;
        },
        unitClasses() {
            return `${this.classes}-unit`;
        },
        dividerClassess() {
            return `${this.classes}-divider`;
        },
        othersClasses() {
            return `${this.classes}-others`;
        },
        othersItemClasses() {
            return `${this.classes}-others-item`;
        },
        othersItemLabelClasses() {
            return `${this.classes}-others-item-label`;
        },
        othersItemContentClasses() {
            return `${this.classes}-others-item-content`;
        },
        data() {
            return this.chart.api ? this.chartData : this.chart.data;
        },
        first() {
            return this.data[0] || {};
        },
        others() {
            const data = this.data;
            return data.slice(1, data.length);
        },
    },
    methods: {
        getDataFinished() {},
        getColorClasses({value, showChange}) {
            return {
                [`${this.classes}-increase`]: showChange && parseFloat(value) > 0,
                [`${this.classes}-decrease`]: showChange && parseFloat(value) < 0,
            };
        },
        getChangeIcon(change) {
            const map = {
                '0': 'md-arrow-dropright',
                '1': 'md-arrow-dropup',
                '-1': 'md-arrow-dropdown'
            };
            return map[change.type];
        },
    }
};
</script>
