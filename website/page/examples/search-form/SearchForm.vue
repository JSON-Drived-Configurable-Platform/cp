<!-- 组件：过滤+列表联动 -->
<template>
    <div class="fg-filter-form">
        <formGenerator
            :options="options"
            :model="model"
            :fields="fields"
            @on-field-change="handelFieldChange"
            @on-button-event="handelButtonClick"
        />
        <slot></slot>
        <Page class="fg-filter-form-page"
            v-if="options.showPage"
            :current="model.page"
            :page-size="options.pageSize"
            :total="totalNum"
            :show-total="options.showPageTotal"
            @on-change="fetchData" />
    </div>
</template>

<script>
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
        totalNum: 0
    },
    data() {
        return {
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
        // handelInputPress(e) {
        //     if (e.keyCode === 13) {
        //         this.fetchData();
        //     }
        // },
        // 请求数据
        fetchData(pn) {
            let filterObj = {
                pageSize: this.options.pageSize || 12
            };
            this.model.page = pn || 1;

            // 删除空字符串、选择全部的选项
            for (let key in this.model) {
                let cur = this.model[key];
                if (cur !== 'ALL' && cur !== '') {
                    filterObj[key] = cur;
                }
            }
            this.$emit('on-search-field-change', filterObj);
        }
    },
}
</script>

<style lang="less">
</style>
