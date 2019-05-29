<template>
    <div :class="[classes, classPrifix, loadingClasses]">
        <Spin
            v-if="loading"
            :class="spinClasses"
            size="large"
        />
        <div :class="firstSecondBoxClasses">
            <div :class="[firstContentClasses, getColorClasses(first)]">
                <h4 :class="firstLabelClasses">
                    {{ first.label }}
                </h4>
                <span :class="firstValueClasses">
                    {{ first.value }}
                    <i
                        v-if="first.unit"
                        :class="unitClasses"
                    >{{ first.unit }}</i>
                </span>
            </div>
            <div :class="[secondClasses, getColorClasses(second)]">
                <span :class="secondLabelClasses">
                    {{ second.label }}
                </span>
                <span :class="secondValueClasses">
                    {{ second.value }}
                    <i
                        v-if="second.unit"
                        :class="unitClasses"
                    >{{ second.unit }}</i>
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
                :class="[othersItemClasses, getColorClasses(item)]"
            >
                <span :class="othersItemLabelClasses">{{ item.label }}&nbsp;&nbsp;</span>
                <span :class="othersItemContentClasses">
                    {{ item.value }}
                    <i
                        v-if="first.unit"
                        :class="unitClasses"
                    >{{ first.unit }}</i>
                </span>
            </li>
        </ul>
    </div>
</template>
<script>
import dataGetter from '../mixins/dataGetter';
import {classPrifix} from '../utils/const';
export default {
    name: 'ChartCard',
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
        secondClasses() {
            const {showChange, value} = this.second;
            return [
                `${this.classes}-second`,
                {
                    [`${this.classes}-increase`]: showChange && parseFloat(value) > 0,
                    [`${this.classes}-decrease`]: showChange && parseFloat(value) < 0,
                }
            ];
        },
        secondLabelClasses() {
            return `${this.classes}-second-label`;
        },
        secondValueClasses() {
            return `${this.classes}-second-value`;
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
        second() {
            return this.data[1] || {};
        },
        others() {
            const data = this.data;
            return data.slice(2, data.length);
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
