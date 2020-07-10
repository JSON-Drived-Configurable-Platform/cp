<template>
    <div :class="classes">
        <ul :class="checkboxCardUlClasses">
            <li
                v-for="(item, index) in value"
                :key="index"
                :class="checkboxCardItemClasses"
                @click="handleClick(item)"
            >
                <Card :style="styleCard">
                    <p v-if="item.header || false" :class="headerClasses">
                        {{ item.header }}
                    </p>
                    <img
                        v-if="optionsType === 'image'"
                        :src="item.url"
                        :alt="item.id"
                        width="100%"
                        height="100%"
                    >
                    <p v-if="item.footer || false" :class="footerClasses">
                        {{ item.footer }}
                    </p>
                    <div v-if="optionsType === 'video'">
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
export default {
    inject: ['FormInstance'],
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
        checkboxCardUlClasses() {
            return `${this.classes}-ul`;
        },
        checkboxCardItemClasses() {
            return `${this.classes}-item`;
        },
        checkboxCardClasses() {
            return `${this.classes}-item-checkbox`;
        },
        headerClasses() {
            return `${this.classes}-item-header`;
        },
        footerClasses() {
            return `${this.classes}-item-footer`;
        },
        headerEditClasses() {
            return `${this.classes}-item-headeredit`;
        },
        footerEditClasses() {
            return `${this.classes}-item-footeredit`;
        },
        styleCard() {
            return `width: ${this.field.cardWidth || '270px'};height: ${this.field.cardHeight || '260px'}`;
        },
        optionsType() {
            return this.field.optionsType || 'image';
        },
        value() {
            return this.FormInstance.model[this.field.model] || [];
        }
    },
    methods: {
        // 阻止事件冒泡
        handleCheckboxClick() {
        },
        // 点击整个卡片触发事件
        handleClick(value) {
            this.$emit('on-list-item-click', value);
        }
    }
};
</script>
