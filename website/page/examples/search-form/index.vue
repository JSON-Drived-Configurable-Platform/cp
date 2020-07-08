<template>
<div class="fg-searchform-demo">
    <div class="content">
        <p class="nav-right">共{{totalNum}}个记录，共{{Math.ceil(totalNum/config.options.pageSize)}}页</p>
        <SearchForm
            :model="config.model"
            :options="config.options"
            :fields="config.fields"
            :totalNum="totalNum"
            ref="searchForm"
            @on-search-field-change="handelSearchFieldChange">
            <slot>
                <Table v-if="list.length > 0" class="tablewp"
                    :columns="config.columns" :data="list"
                ></Table>
                <div class="nocontent" v-else>
                    <p class="title" v-if="!isAjax && firstLoad">
                        还没有记录
                    </p>
                    <p class="title" v-else>加载中...</p>
                </div>
            </slot>
        </SearchForm>
    </div>
</div>
</template>

<script>
import SearchForm from './SearchForm';
import config from './config';

export default {
    components: {
        SearchForm
    },
    data() {
        return {
            totalNum: 0,
            config,
            list: [],
            firstLoad: false,
            isAjax: false
        }
    },
    mounted() {
        this.$refs.searchForm.fetchData();
    },
    methods: {
        handelSearchFieldChange(field) {
            console.log('handelSearchFieldChange', field)
            if (this.isAjax) {
                return;
            }
            this.isAjax = true;
            this.totalNum = 0;
            this.list = [];
            // 模拟异步请求数据
            setTimeout(() => {
                let list = config.data.filter(v => {
                    return (!field.name || v.name.indexOf(field.name) !== -1)
                        && (!field.gender || field.gender === v.gender);
                });

                let res = {
                    totalNum: list.length,
                    list: list
                };

                this.totalNum = res.totalNum;
                this.list = res.list;

                this.firstLoad = true;
                this.isAjax = false;
            }, 300);
        },
        handelRefresh() {
            // 可以用来刷新页面
            this.$refs.searchForm.fetchData();
        }
    }
};
</script>

<style lang="less">
.fg-searchform-demo {
    .nav-right {
        text-align: right;
    }
    .content {
        margin: 0 auto;
        padding: 0 50px;
    }
    .tablewp {
        margin-bottom: 30px;
    }
    .nocontent {
        margin: 283px 0 414px;
        text-align: center;
        .title {
            font-size: 16px;
            color: #666;
        }
    }
}
</style>
