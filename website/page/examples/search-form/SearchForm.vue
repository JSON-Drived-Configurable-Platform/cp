<!-- 组件：过滤+列表联动 -->
<template>
    <div class="fg-filter-form">
        <formGenerator
            :options="options"
            :model="model"
            :fields="fields"
            @on-field-change="handelFieldChange"
            @on-button-event="handelButtonClick"
            @keydown.native.enter.prevent="handelInputPress"
        />
        <slot />
        <Page
            v-if="options.showPage"
            class="fg-filter-form-page"
            :current="model.page"
            :page-size="options.pageSize"
            :total="totalNum"
            :show-total="options.showPageTotal"
            @on-change="fetchData"
        />
    </div>
</template>

<script>
import axios from 'axios';
import {isArray} from '../../../libs';

export default {
    props: {
        model: {
            type: Object,
            default() {
                return {};
            }
        },
        fields: {
            type: Array,
            default() {
                return [];
            }
        },
        options: {
            type: Object,
            default: () => {
                return {};
            }
        },
        totalNum: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            isAjax: false
        }
    },
    created() {
    },
    mounted() {
    },
    methods: {
        // 筛选
        handelFieldChange(model, value, field) {
            if (field.changeToSearch) {
                this.fetchData();
            }
        },
        handelButtonClick() {
            this.fetchData();
        },
        handelInputPress(e) {
            if (e.keyCode === 13) {
                this.fetchData();
            }
        },
        // 请求数据
        fetchData(pn) {
            let filterObj = {
                pageSize: this.options.pageSize || 12
            };
            this.model.page = pn || 1;

            // 删除空字符串、选择全部的选项
            for (let key in this.model) {
                let cur = this.model[key];
                if (
                    cur !== 'ALL'
                    && cur !== ''
                    && !(isArray(cur) && cur.length === 0)
                ) {
                    filterObj[key] = typeof cur === 'object' ? JSON.stringify(cur) : cur;
                }
            }
            this.$emit('on-search-field-change', filterObj);
            // 如果设置了apiBase，则请求数据
            if (this.options.apiBase) {
                if (this.isAjax) {
                    return;
                }
                this.isAjax = true;
                // 模拟异步请求数据
                axios.get(this.options.apiBase).then(res => {
                    this.$emit('on-search-data-change', res);
                    this.isAjax = false;
                }).catch(err => {
                    this.$emit('on-search-data-error', err);
                    this.isAjax = false;
                })
            }
        }
    },
};
</script>

<style lang="less">
</style>
