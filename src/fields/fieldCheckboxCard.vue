<template>
    <div>
        <div
            v-if="field.checkAll || false"
            :class="checkAllClasses"
        >
            <Checkbox
                :indeterminate="indeterminate"
                :value="checkAll"
                @click.prevent.native="handleCheckAll"
            >全选</Checkbox>
        </div>
        <ul :class="checkboxCardGroupClasses">
            <li
                v-for="(item, index) in field.options"
                :key="index"
                :class="checkboxCardItemClasses"
                @click="handleClick(item)"
            >
                <Card
                    :style="{width: field.size.itemWidth || '270px',height: field.size.itemHeight || '270px'}"
                >
                    <div @click.stop="handleCheckboxClick($event)">
                        <Checkbox
                            v-if="item.showCheckBox !== false"
                            :class="checkboxCardClasses"
                            :disabled="item.disabled || false"
                            :value="item.label | isChecked(value)"
                            @on-change="handleChange($event, item)"
                        >
                            {{ '' }}
                        </Checkbox>
                    </div>
                    <dl v-if="item.header || false" v-html="item.header">
                        {{ item.header }}
                    </dl>
                    <img
                        v-if="item.type === 'image'"
                        :src="item.url"
                        :alt="item.label"
                        width="100%"
                    >
                    <dl v-if="item.footer || false" v-html="item.footer">
                        {{ item.footer }}
                    </dl>
                    <div v-if="item.type === 'video'">
                        <video controls>
                            <source :src="item.url">
                        </video>
                    </div>
                </Card>
            </li>
        </ul>
    </div>
</template>
<script>
import {classPrefix} from '../utils/const';
import getOptions from '../mixins/getOptions';
export default {
    inject: ['form'],
    filters: {
        isChecked(label, value) {
            return value.includes(label);
        }
    },
    mixins: [getOptions],
    props: {
        field: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            indeterminate: true,
            checkAll: false
        };
    },
    computed: {
        classes() {
            return `${classPrefix}-${this.field.type.toLowerCase()}`;
        },
        checkAllClasses() {
            return `${this.classes}-checkall`;
        },
        checkboxCardGroupClasses() {
            return `${this.classes}-group`;
        },
        checkboxCardItemClasses() {
            return `${this.classes}-group-item`;
        },
        checkboxCardClasses() {
            return `${this.classes}-group-item-checkbox`;
        },
        value() {
            return this.form.model[this.field.model] || [];
        },
        computedOptions() {
            return this.field.options || [];
        }
    },
    mounted() {
    },
    methods: {
        handleCheckboxClick(e) {
            // eslint-disable-next-line no-console
            console.log(e);
        },
        handleClick(value) { // 点击整个卡片触发事件
            this.$emit('on-click', value);
        },
        handleChange(checked, value) {
            if (checked) {
                this.value.push(value.label);
            }
            else {
                this.value.splice(this.value.indexOf(value.label), 1);
            }
            if (this.computedOptions.length == this.value.length) {
                this.indeterminate = false;
                this.checkAll = true;
            } else if (this.value.length > 0) {
                this.indeterminate = true;
                this.checkAll = false;
            }
            else {
                this.indeterminate = false;
                this.checkAll = false;
            }
            this.$set(this.form.model, this.field.model, this.value);
            
        },
        handleCheckAll() {
            let value = [];
            if (this.indeterminate) {
                this.checkAll = false;
            } else {
                this.checkAll = !this.checkAll;
            }
            this.indeterminate = false;

            if (this.checkAll) {
                value = this.computedOptions.map(option => option.label);
            } else {
                value = [];
            }
            this.$set(this.form.model, this.field.model, value);
        }
    }
};
</script>
