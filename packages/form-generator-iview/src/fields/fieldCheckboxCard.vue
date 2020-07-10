<template>
    <div :class="classes">
        <div v-if="loading" :class="loadingClasses">
            <Spin :class="loadingSpinClasses" size="large" />
        </div>
        <div v-else>
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
                        <div @click.stop="handleCheckboxClick($event)">
                            <Checkbox
                                v-if="field.showCheckBox !== false"
                                :disabled="item.disabled || false"
                                :value="selectedIds[item.id]"
                                :class="checkboxCardClasses"
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
                            v-if="optionsType === 'image' && !openCarousel"
                            :src="item.url"
                            :alt="item.id"
                            :class="detailClasses"
                        >
                        <div v-if="openCarousel" :class="carouselClasses">
                            <Carousel
                                :value="carouselOptions.value"
                                :loop="carouselOptions.loop"
                                :autoplay="carouselOptions.autoplay"
                                :autoplay-speed="carouselOptions.autoplaySpeed"
                                :dots="carouselOptions.dots"
                                :radius-dot="carouselOptions.radiusDot"
                                :trigger="carouselOptions.trigger"
                                :arrow="carouselOptions.arrow"
                                :easing="carouselOptions.easing"
                            >
                                <CarouselItem
                                    v-for="(data, num) in item.urls"
                                    :key="num"
                                >
                                    <img
                                        :src="data"
                                        :class="detailClasses"
                                    >
                                </CarouselItem>
                            </Carousel>
                        </div>
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
                        <div v-if="optionsType === 'video' && !openCarousel">
                            <video :class="detailClasses" :controls="field.videoControl || false">
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
    </div>
</template>
<script>
import {classPrefix} from '../utils/const';
import getOptions from '../mixins/getOptions';
import {getValue} from '../utils/processValue';

export default {
    inject: ['FormInstance'],
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
            loading: false,
            options: [],
            pageNum: 1, // 页码
            selectedData: [] // 存放选择的数据
        };
    },
    computed: {
        classes() {
            return `${classPrefix}-${this.field.type.toLowerCase()}`;
        },
        loadingClasses() {
            return `${this.classes}-loading`;
        },
        loadingSpinClasses() {
            return `${this.classes}-loading-spin`;
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
        detailClasses() {
            return `${this.classes}-group-item-detail`;
        },
        carouselClasses() {
            return `${this.classes}-group-item-carousel`;
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
        // 选择的ids
        selectedIds() {
            const selectedIds = {};
            this.selectedData.forEach(item => {
                selectedIds[item.id] = true;
            });
            return selectedIds || {};
        },
        // 已选数据数
        selectedNum() {
            return this.selectedData.length;
        },
        // 数据总数
        total() {
            return this.dataOptions.length || 0;
        },
        // 每页条数
        pageSize() {
            return this.field.pageSize || 10;
        },
        // 头部可编辑
        headerEditable() {
            return this.field.headerEditable || false;
        },
        // 尾部可编辑
        footerEditable() {
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
        },
        // 开启走马灯
        openCarousel() {
            return this.field.openCarousel || false;
        },
        // 走马灯配置信息
        carouselOptions() {
            return this.field.carouselOptions || {};
        },
        value() {
            return getValue({
                originModel: this.FormInstance.model,
                model: this.field.model
            }) || [];
        }
    },
    watch: {
        value: {
            handler(value) {
                if (value && value.length === 0) {
                    this.selectedData = [];
                }
            },
            deep: true
        }
    },
    methods: {
        remoteMethod() {
            if (!this.optionsApi) {
                return;
            }
            this.getRemoteOptions();
        },
        // 阻止事件冒泡
        handleCheckboxClick() {
        },
        // 点击整个卡片触发事件
        handleClick(value) {
            this.$emit('on-checkboxCard-click', value);
        },
        // 单选
        handleChange(checked, value) {
            if (checked) {
                this.addItem(value);
            }
            else {
                this.removeItem(value);
            }
            this.$emit('on-change', this.field.model, this.selectedData, null, this.field);
        },
        // 全选
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
            this.$emit('on-change', this.field.model, this.selectedData, null, this.field);
        },
        // 添加数据
        addItem(item) {
            if (!this.selectedIds[item.id]) {
                this.selectedData.push(item);
            }
        },
        // 移除数据
        removeItem(item) {
            const selectedData = this.selectedData.filter(i => i.id !== item.id);
            this.selectedData = selectedData;
        },
        // 改变页码
        changePage(val) {
            this.pageNum = val;
        }
    }
};
</script>
