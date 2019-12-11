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
                            :value="selectedIds[item.id]"
                            @on-change="handleChange($event, item)"
                        >
                            {{ '' }}
                        </Checkbox>
                    </div>
                    <p v-if="item.header || false" :class="headerClasses">
                        {{ item.header }}
                    </p>
                    <div
                        v-if="headerEditable && selectedIds[item.id]"
                        :class="headerEditClasses"
                        @click.stop="handleCheckboxClick($event)"
                    >
                        <Poptip
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
                        v-if="optionsType === 'image'"
                        :src="item.url"
                        :alt="item.id"
                        width="100%"
                    >
                    <p v-if="item.footer || false" :class="footerClasses">
                        {{ item.footer }}
                    </p>
                    <div
                        v-if="footerEditable && selectedIds[item.id]"
                        :class="footerEditClasses"
                        @click.stop="handleCheckboxClick($event)"
                    >
                        <Poptip
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
                    <div v-if="optionsType === 'video'">
                        <video controls>
                            <source :src="item.url">
                        </video>
                    </div>
                </Card>
            </li>
        </ul>
        <Page
            v-if="field.pageLation || false"
            :total="total"
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
            options: [],
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
            return this.computedOptions.every(item => this.selectedIds[item.id]);
        },
        indeterminate() {
            return this.computedOptions.some(item => this.selectedIds[item.id]) && !this.isAllSelected;
        },
        optionsType() {
            return this.field.optionsType || 'image';
        },
        selectedIds() {
            const selectedIds = {};
            this.selectedData.forEach(item => {
                selectedIds[item.id] = true;
            });
            return selectedIds || {};
        },
        selectedNum() { // 已选数据数
            return this.selectedData.length;
        },
        total() { // 数据总数
            return this.dataOptions.length || 0;
        },
        pageSize() { // 每页条数
            return this.field.pageSize || 10;
        },
        headerEditable() { // 头部可编辑
            return this.field.headerEditable || false;
        },
        footerEditable() { // 尾部可编辑
            return this.field.footerEditable || false;
        },
        dataOptions() {
            let options = this.options.length > 0 ? this.options : this.field.options;
            if (Array.isArray(options)) {
                return options;
            }
            return [];
        },
        computedOptions() {
            if (this.field.pageLation) {
                return this.dataOptions.slice((this.pageNum - 1) * this.pageSize, (this.pageNum) * this.pageSize);
            }
            return this.dataOptions;
        },
        optionsApi() {
            return !Array.isArray(this.field.options) ? this.field.options : '';
        }
    },
    mounted() {
    },
    methods: {
        remoteMethod() {
            if (!this.optionsApi) {
                return;
            }
            this.getRemoteOptions();
        },
        handleCheckboxClick(e) {
            // eslint-disable-next-line no-console
            console.log(e);
        },
        handleClick(value) { // 点击整个卡片触发事件
            this.$emit('on-checkboxCard-click', value);
        },
        handleChange(checked, value) { // 单选
            if (checked) {
                this.addItem(value);
            }
            else {
                this.removeItem(value);
            }
            this.$set(this.form.model, this.field.model, this.selectedData);
        },
        handleCheckAll(checked) { // 全选
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
        addItem(item) { // 添加数据
            if (!this.selectedIds[item.id]) {
                this.selectedData.push(item);
            }
        },
        removeItem(item) { // 移除数据
            const selectedData = this.selectedData.filter(i => i.id !== item.id);
            this.selectedData = selectedData;
        },
        changePage(val) { // 改变页码
            this.pageNum = val;
        }
    }
};
</script>
