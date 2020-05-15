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

const getDate = function (days = 0) {
    const date = new Date();
    date.setTime(date.getTime() + 3600 * 1000 * 24 * days);
    return date;
};
export default {
    inject: ['form'],
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
        let subtypeToShortcuts = {
            'date': [
                {
                    text: '今天',
                    value() {
                        return getDate(0);
                    }
                },
                {
                    text: '昨天',
                    value() {
                        return getDate(-1);
                    }
                },
                {
                    text: '前天',
                    value() {
                        return getDate(-2);
                    }
                },
                {
                    text: '7天前',
                    value() {
                        return getDate(-7);
                    }
                },
                {
                    text: '30天前',
                    value() {
                        return getDate(-30);
                    }
                },
            ],
            'daterange': [
                {
                    text: '最近7天',
                    value() {
                        return [getDate(-7), getDate(0)];
                    }
                },
                {
                    text: '最近30天',
                    value() {
                        return [getDate(-30), getDate(0)];
                    }
                },
                {
                    text: '最近90天',
                    value() {
                        return [getDate(-90), getDate(0)];
                    }
                },
                {
                    text: '最近182天',
                    value() {
                        return [getDate(-180), getDate(0)];
                    }
                },
                {
                    text: '最近365天',
                    value() {
                        return [getDate(-365), getDate(0)];
                    }
                }
            ],
            'datetime': [
                {
                    text: '昨天',
                    value() {
                        return getDate(-1);
                    }
                },
                {
                    text: '前天',
                    value() {
                        return getDate(-2);
                    }
                },
                {
                    text: '7天前',
                    value() {
                        return getDate(-7);
                    }
                },
                {
                    text: '30天前',
                    value() {
                        return getDate(-30);
                    }
                },
            ],
            'datetimerange': [
                {
                    text: '最近7天',
                    value() {
                        return [getDate(-7), getDate(0)];
                    }
                },
                {
                    text: '最近30天',
                    value() {
                        return [getDate(-30), getDate(0)];
                    }
                },
                {
                    text: '最近90天',
                    value() {
                        return [getDate(-90), getDate(0)];
                    }
                },
                {
                    text: '最近182天',
                    value() {
                        return [getDate(-182), getDate(0)];
                    }
                },
                {
                    text: '最近365',
                    value() {
                        return [getDate(-365), getDate(0)];
                    }
                }
            ]
        };
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
                originModel: this.form.model,
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
