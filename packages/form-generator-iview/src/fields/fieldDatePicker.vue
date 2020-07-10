<template>
    <DatePicker
        :type="subtype"
        :placeholder="field.placeholder"
        :value="value"
        :disabled="field.disabled"
        :split-panels="field.splitPanels"
        :multiple="field.multiple"
        :format="field.format"
        :options="options"
        :editable="field.editable"
        :clearable="field.clearable"
        :class="itemClasses"
        :size="size"
        change-on-select
        @on-change="handleChange"
    />
</template>
<script>
import {classPrefix} from '../utils/const';
import {getValue} from '../utils/processValue';

const shortcutsMapList = [
    {
        type: 'date',
        range: false,
        list: [0, -1, -2, -7, -30, 1, 2, 7, 30],
    },
    {
        type: 'daterange',
        range: true,
        list: [-7, -30, -90, -182, -365, 7, 30, 90, 182, 365],
    },
    {
        type: 'datetime',
        range: false,
        list: [0, -1, -2, -7, -30, 1, 2, 7, 30],
    },
    {
        type: 'ddatetimerangeate',
        range: true,
        list: [-7, -30, -90, -182, -365, 7, 30, 90, 182, 365],
    }
];

const shortcutsLabel = {
    '0': '今天',
    '-1': '昨天',
    '-2': '前天',
    '-7': '一周前',
    '-30': '一月前',
    '-90': '三月前',
    '-182': '最近半年',
    '-365': '最近一年',
    '1': '明天',
    '2': '后天',
    '7': '一周后',
    '30': '一月后',
    '90': '三月后',
    '182': '半年后',
    '365': '一年后'
};

const getDate = function (days = 0) {
    const date = new Date();
    date.setTime(date.getTime() + 3600 * 1000 * 24 * days);
    return date;
};
export default {
    inject: ['FormInstance'],
    props: {
        field: {
            type: Object,
            required: true
        },
        size: {
            type: String,
            default() {
                return 'default';
            }
        },
        inline: {
            type: Boolean,
            default: false
        }
    },
    data() {
        let subtypeToShortcuts = {};
        shortcutsMapList.forEach(({type, range, list}) => {
            subtypeToShortcuts[type] = list.map(item => {
                return {
                    text: shortcutsLabel[item.toString()],
                    value() {
                        return range ? [getDate(item), getDate(0)] : getDate(item);
                    }
                };
            });
        });

        const disabledDates = this.field.disabledDates || [];
        let shortcuts = subtypeToShortcuts[this.field.subtype || 'date'];
        if (this.field.options) {
            if (['daterange', 'datetimerange'].includes(this.field.subtype)) {
                shortcuts = this.field.options.map(option => {
                    return {
                        text: option.label,
                        value() {
                            return [getDate(+option.value[0]), getDate(+option.value[1])];
                        }
                    };
                });
            } else if (['date', 'datetime'].includes(this.field.subtype || 'date')) {
                shortcuts = this.field.options.map(option => {
                    return {
                        text: option.label,
                        value() {
                            return getDate(+option.value);
                        }
                    };
                });
            }

        }
        return {
            options: {
                shortcuts: shortcuts,
                disabledDate: date => {
                    let initdate = '';
                    if (this.field.subtype === 'date' && this.field.multiple) {
                        if (!this.value) {
                            return false;
                        }
                        const selectedDates = this.value.split(',') || [];
                        if (selectedDates.length !== this.field.maxLength) {
                            return false;
                        }

                        return !selectedDates.some(item => {
                            // TODO there should use an dateTime tools solve these transform
                            if (this.field.format === 'yyyyMMdd') {
                                initdate = new Date(item.split(/(\d{4})(\d{2})(\d{2})/));
                            } else {
                                initdate = new Date(item.split(/\D+/));
                            }
                            return date && date.valueOf() === initdate.valueOf() ;
                        });
                    }
                    // disabledselectedDates 的格式为 [[, 2018-12-30], [2019-1-30, 2019-2-30], [2019-3-30,]]
                    // 只要满足 disabledselectedDates 中任意一个区间，则禁用。
                    return disabledDates.some(daterange => {
                        const startTime = daterange[0] ? (new Date(daterange[0])).getTime() : -Infinity;
                        const endTime = daterange[1] ? new Date(daterange[1]).getTime() : Infinity;
                        const currentDateTime = date.getTime();
                        return currentDateTime >= startTime && currentDateTime <= endTime;
                    });
                }
            }
        };
    },
    computed: {
        remote() {
            return !!this.field.api;
        },
        filterable() {
            return !!this.field.api || this.field.filterable;
        },
        subtype() {
            return this.field.subtype || 'date';
        },
        classes() {
            return `${classPrefix}-${this.field.type.toLowerCase()}`;
        },
        itemClasses() {
            const inlineClasses = this.inline ? 'inline' : 'full-width';
            if (this.inline) {
                return `${this.classes}-${inlineClasses}-${this.field.subtype.toLowerCase()}`;
            } else {
                return `${this.classes}-${inlineClasses}`;
            }
        },
        value() {
            return getValue({
                originModel: this.FormInstance.model,
                model: this.field.model
            }) || '';
        }
    },
    methods: {
        handleChange(value) {
            this.$emit('on-change', this.field.model, value, null, this.field);
        }
    }
};
</script>
