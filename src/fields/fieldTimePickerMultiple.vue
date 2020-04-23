<!-- 多行时间的记录类型 -->
<template>
    <div :class="classes">
        <div class="fg-ivu-timepickermultiple-timewp">
            <TimePicker
                class="fg-ivu-timepickermultiple-time"
                type="timerange"
                :placeholder="field.placeholder"
                :value="value"
                :disabled="field.disabled"
                :editable="field.editable"
                :clearable="field.clearable"
                :size="size"
                :format="field.format || 'HH:mm:ss'"
                @on-change="handleChange"
            />
            <Button
                class="fg-ivu-timepickermultiple-addbtn"
                icon="md-add"
                type="primary"
                ghost
                @click="handleAdd"
            />
            <span class="fg-ivu-timepickermultiple-tips">{{ field.tips }}</span>
        </div>

        <div v-for="(item, index) in list" :key="index" class="fg-ivu-timepickermultiple-item">
            <span class="fg-ivu-timepickermultiple-date">{{ item }}</span>
            <Button
                class="fg-ivu-timepickermultiple-closebtn"
                icon="md-close"
                type="error"
                ghost
                @click="handleDelete(index)"
            />
        </div>
    </div>
</template>

<script>
import {classPrefix} from '../utils/const';
import {getValue} from '../utils/processValue';

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
        return {
            value: ''
        };
    },
    computed: {
        classes() {
            return `${classPrefix}-${this.field.type.toLowerCase()}`;
        },
        list() {
            return getValue({
                originModel: this.form.model,
                model: this.field.model
            }) || [];
        }
    },
    methods: {
        handleAdd() {
            let val = this.value;

            if (!val || val.length === 0 || !val[0]) {
                this.$Message.warning('时间不能为空');
                return;
            }
            this.list.push(val.join(this.field.timeSplit || '~'));
            this.value = '';
            this.$emit('on-change', this.field.model, this.list, null, this.field);
        },
        handleDelete(index) {
            this.list.splice(index, 1);
            this.$emit('on-change', this.field.model, this.list, null, this.field);
        },
        handleChange(value) {
            this.value = value;
        }
    }
};
</script>

<style lang="less">
    @itemWidth: 155px;
    .fg-ivu-timepickermultiple {
        &-timewp {
            display: flex;
            flex-wrap: wrap;
        }
        &-time {
            position: relative;
            width: @itemWidth;
            margin-right: -1px;
            z-index: 10;
            input {
                border-radius: 0;
            }
        }
        &-tips {
            margin-left: 5px;
        }
        &-item {
            display: flex;
            margin-top: -1px;
        }
        button&-addbtn, button&-closebtn {
            border: 1px solid #dcdee2;
            border-radius: 0;
            &:hover {
                border: 1px solid #dcdee2;
            }
        }
        &-date {
            display: inline-block;
            width: @itemWidth;
            margin-right: -1px;
            text-align: left;
            padding: 0 7px;
            border: 1px solid #dcdee2;
        }
    }
</style>
