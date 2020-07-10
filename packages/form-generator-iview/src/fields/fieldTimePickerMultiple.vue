<!-- 多行时间的记录类型 -->
<template>
    <div :class="classes">
        <div :class="inputWrapperClasses">
            <TimePicker
                :class="inputClasses"
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
                :class="addBtnClasses"
                icon="md-add"
                type="primary"
                ghost
                @click="handleAdd"
            />
            <span :class="tipsClasses">{{ field.tips }}</span>
        </div>

        <div :classes="listWrapperClasses">
            <div
                v-for="(item, index) in list"
                :key="index"
                :class="listItemClasses"
            >
                <span :class="listItemDateClasses">{{ item }}</span>
                <Button
                    :class="listItemCloseClasses"
                    icon="md-close"
                    type="error"
                    ghost
                    @click="handleDelete(index)"
                />
            </div>
        </div>
    </div>
</template>

<script>
import {classPrefix} from '../utils/const';
import {getValue} from '../utils/processValue';

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
        return {
            value: ''
        };
    },
    computed: {
        classes() {
            return `${classPrefix}-${this.field.type.toLowerCase()}`;
        },
        inputWrapperClasses() {
            return `${this.classes}-input-wrapper`;
        },
        inputClasses() {
            return `${this.classes}-input-wrapper-time`;
        },
        addBtnClasses() {
            return `${this.classes}-input-wrapper-add-btn`;
        },
        tipsClasses() {
            return `${this.classes}-input-wrapper-tips`;
        },
        listWrapperClasses() {
            return `${this.classes}-list-wrapper`;
        },
        listItemClasses() {
            return `${this.classes}-list-wrapper-item`;
        },
        listItemDateClasses() {
            return `${this.classes}-list-wrapper-item-date`;
        },
        listItemCloseClasses() {
            return `${this.classes}-list-wrapper-item-close`;
        },
        list() {
            return getValue({
                originModel: this.FormInstance.model,
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
