<template>
    <div>
        <div
            v-if="field.checkAll || false"
            :class="checkAllClasses"
        >
            <Checkbox
                :indeterminate="indeterminate"
                :value="isAllSelected"
                @on-change="handleCheckAll"
            >全选（已选<b>{{ selectedNum }}</b>张）</Checkbox>
        </div>
        <ul :class="checkboxCardGroupClasses">
            <li
                v-for="(item, index) in computedOptions"
                :key="index"
                :class="checkboxCardItemClasses"
                @click="handleClick(item)"
            >
                <Card
                    :style="styleCard"
                >
                    <div :class="checkboxCardClasses" @click.stop="handleCheckboxClick($event)">
                        <Checkbox
                            v-if="item.showCheckBox !== false"
                            :disabled="item.disabled || false"
                            :value="item.id | isChecked(selectedIds)"
                            @on-change="handleChange($event, item)"
                        >
                            {{ '' }}
                        </Checkbox>
                    </div>
                    <p v-if="item.header || false" :class="headerClasses">
                        {{ item.header }}
                    </p>
                    <div :class="headerEditClasses" @click.stop="handleCheckboxClick($event)">
                        <Poptip
                            v-if="item.headerEdit || false"
                            title="修改名称"
                            placement="top-end"
                        >
                            <i-input
                                slot="content"
                                v-model="item.header"
                                type="textarea"
                            />
                            <Icon
                                type="ios-create-outline"
                                size="20"
                            />
                        </Poptip>
                    </div>
                    <img
                        v-if="item.type === 'image'"
                        :src="item.url"
                        :alt="item.id"
                        width="100%"
                    >
                    <p v-if="item.footer || false" :class="footerClasses">
                        {{ item.footer }}
                    </p>
                    <div :class="footerEditClasses" @click.stop="handleCheckboxClick($event)">
                        <Poptip
                            v-if="item.footerEdit || false"
                            title="修改文案"
                            placement="top-start"
                        >
                            <i-input
                                slot="content"
                                v-model="item.footer"
                                type="textarea"
                            />
                            <Icon
                                type="ios-create-outline"
                                size="20"
                            />
                        </Poptip>
                    </div>
                    <div v-if="item.type === 'video'">
                        <video controls>
                            <source :src="item.url">
                        </video>
                    </div>
                </Card>
            </li>
        </ul>
        <Page
            v-if="field.isPage || false"
            :total="field.total || 0"
            :page-size="pageSize"
            size="small"
            show-elevator
            @on-change="changePage"
        />
    </div>
</template>
<script>
import {classPrefix} from '../utils/const';
import getOptions from '../mixins/getOptions';
export default {
    inject: ['form'],
    filters: {
        isChecked(id, selectedIds) {
            return selectedIds.includes(id);
        }
    },
    mixins: [getOptions],
    props: {
        field: {
            type: Object,
            required: true,
            default() {
                return {};
            }
        }
    },
    data() {
        return {
            pageNum: 1, // 页码
            selectedData: [] // 存放选择的数据
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
        headerClasses() {
            return `${this.classes}-group-item-header`;
        },
        footerClasses() {
            return `${this.classes}-group-item-footer`;
        },
        headerEditClasses() {
            return `${this.classes}-group-item-headeredit`;
        },
        footerEditClasses() {
            return `${this.classes}-group-item-footeredit`;
        },
        styleCard() {
            return `width: ${this.field.cardWidth || '270px'};height: ${this.field.cardHeight || '260px'}`;
        },
        isAllSelected() {
            return this.computedOptions.every(item => this.selectedIds.includes(item.id));
        },
        indeterminate() {
            return this.computedOptions.some(item => this.selectedIds.includes(item.id)) && !this.isAllSelected;
        },
        selectedIds() {
            return this.selectedData.map(item => item.id);
        },
        selectedNum() {
            return this.selectedData.length;
        },
        pageSize() {
            return this.field.pageSize || 10;
        },
        computedOptions() {
            if (this.field.isPage) {
                return this.field.options.slice((this.pageNum - 1) * this.pageSize, (this.pageNum) * this.pageSize);
            }
            return this.field.options;
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
            this.$emit('on-checkboxCard-click', value);
        },
        handleChange(checked, value) {
            if (checked) {
                this.addItem(value);
            }
            else {
                this.removeItem(value);
            }
            this.$set(this.form.model, this.field.model, this.selectedData);
        },
        handleCheckAll(checked) {
            this.computedOptions.forEach(item => {
                if (!item.disabled) {
                    if (checked) {
                        this.addItem(item);
                    }
                    else {
                        this.removeItem(item);
                    }
                }
            });
            this.$set(this.form.model, this.field.model, this.selectedData);
        },
        addItem(item) {
            if (!this.selectedIds.includes(item.id)) {
                this.selectedData.push(item);
            }
        },
        removeItem(item) {
            const selectedData = this.selectedData.filter(i => i.id !== item.id);
            this.selectedData = selectedData;
        },
        changePage(val) {
            this.pageNum = val;
        }
    }
};
</script>
