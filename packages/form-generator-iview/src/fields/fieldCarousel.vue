<template>
    <div :class="classes">
        <Carousel
            :value="currentIndex"
            :loop="field.loop"
            :arrow="computedArrow"
            @on-change="handleChange"
        >
            <CarouselItem
                v-for="(item, index) in computedOptions"
                :key="index"
                :class="carouselItemClasses"
            >
                <img v-if="subtype === 'img'" width="100%" :src="item.url" :alt="item.label">
                <div v-if="subtype === 'video'">
                    <video controls>
                        <source :src="item.url">
                    </video>
                </div>
                <div v-if="subtype === 'text'">{{ item.label }}</div>
            </CarouselItem>
        </Carousel>
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
            required: true
        },
        size: {
            type: String,
            default() {
                return 'default';
            }
        },
    },
    data() {
        return {
            loading: false,
            options: []
        };
    },
    computed: {
        classes() {
            return `${classPrefix}-${this.field.type.toLowerCase()}`;
        },
        carouselItemClasses() {
            return `${this.classes}-item`;
        },
        computedOptions() {
            if (this.field.valueAsOptions) {
                return this.FormInstance.model[this.field.model];
            }
            let fieldOptions = [];
            if (Array.isArray(this.field.options)) {
                fieldOptions = this.field.options;
            }
            return this.options.length > 0 ? this.options : fieldOptions;
        },
        computedArrow() {
            if (this.computedOptions && this.computedOptions.length > 1) {
                return this.field.arrow || 'hover';
            }
            return 'never';
        },
        optionsApi() {
            return !Array.isArray(this.field.options) ? this.field.options : '';
        },
        subtype() {
            return this.field.subtype || 'img';
        },
        currentIndex() {
            let computedOptions = this.computedOptions || [];
            let value = this.FormInstance.model[this.field.model];
            let index = computedOptions.findIndex(item => item.value === value);
            return index >= 0 ? index : 0;
        }
    },
    methods: {
        remoteMethod() {
            if (!this.field.api && !this.optionsApi) {
                return;
            }
            this.getRemoteOptions();
        },
        handleChange(oldValue, value) {
            this.$emit('on-change', this.field.model, value, null, this.field);
        }
    }
};
</script>
