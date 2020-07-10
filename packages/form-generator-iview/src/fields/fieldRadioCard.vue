<template>
    <div :class="classes">
        <div v-if="loading" :class="loadingClasses">
            <Spin :class="loadingSpinClasses" size="large" />
        </div>
        <div v-else>
            <ul :class="radioCardGroupClasses">
                <RadioGroup
                    @on-change="handleChange"
                >
                    <li
                        v-for="(item, index) in computedOptions"
                        :key="index"
                        :class="radioCardItemClasses"
                    >
                        <Card
                            :style="styleCard"
                        >
                            <div>
                                <Radio
                                    v-if="field.showRadio !== false"
                                    :key="item.id"
                                    :label="item.id"
                                    :class="radioCardClasses"
                                    :disabled="field.disabled"
                                >
                                    {{ field.label }}
                                </Radio>
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
                            <div v-if="optionsType === 'video' && !openCarousel">
                                <video :class="detailClasses" :controls="field.videoControl || false">
                                    <source :src="item.url">
                                </video>
                            </div>
                        </Card>
                    </li>
                </RadioGroup>
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
            pageNum: 1,
            selectedData: []
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
        radioCardGroupClasses() {
            return `${this.classes}-group`;
        },
        radioCardItemClasses() {
            return `${this.classes}-group-item`;
        },
        radioCardClasses() {
            return `${this.classes}-group-item-checkbox`;
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
        optionsType() {
            return this.field.optionsType || 'image';
        },
        // 数据总数
        total() {
            return this.dataOptions.length || 0;
        },
        // 每页条数
        pageSize() {
            return this.field.pageSize || 10;
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
        }
    },
    methods: {
        // 单选
        handleChange(value) {
            const selectedData = this.computedOptions.find(item => item.id === value) || {};
            this.$emit('on-change', this.field.model, selectedData, null, this.field);

        },
        // 改变页码
        changePage(val) {
            this.pageNum = val;
        }
    }
};
</script>
