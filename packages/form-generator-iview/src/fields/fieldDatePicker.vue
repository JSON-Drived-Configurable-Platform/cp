<template>
    <DatePicker
        :type="subtype"
        :placeholder="field.placeholder"
        :value="formModel[field.model]"
        :disabled="field.disabled"
        :options="options"
        :editable="editable"
        :clearable="clearable"
        :class="itemClasses"
        :size="size"
        change-on-select
        @on-change="handleChange"
    />
</template>
<script>
import {classPrifix} from '../utils/const';
const getDate = function(days = 0) {
    const date = new Date();
    date.setTime(date.getTime() + 3600 * 1000 * 24 * days);
    return date;
};
export default {
    props: {
        field: {
            type: Object,
            required: true
        },
        formModel: {
            type: Object,
            required: true,
            default() {
                return {};
            }
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
        return {
            options: {
                shortcuts: subtypeToShortcuts[this.field.subtype]
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
        editable() {
            return this.field.editable === undefined
                ? this.field.required ? false : true
                : this.field.editable;
        },
        clearable() {
            return this.field.clearable === undefined
                ? this.field.required ? false : true
                : this.field.clearable;
        },
        subtype() {
            return this.field.subtype || 'date';
        },
        classes() {
            return `${classPrifix}-${this.field.type.toLowerCase()}`;
        },
        itemClasses() {
            const inlineClasses = this.inline ? 'inline' : 'full-width';
            if (this.inline) {
                return `${this.classes}-${inlineClasses}-${this.field.subtype.toLowerCase()}`;
            }
            else {
                return `${this.classes}-${inlineClasses}`;
            }
        }
    },
    methods: {
        remoteMethod() {
            // TODO
            if (!this.field.api) {
                return;
            }
            this.loading = true;
        },
        handleChange(value) {
            this.$emit('on-change', this.field.model, value, null, this.field);
        }
    }
};
</script>
