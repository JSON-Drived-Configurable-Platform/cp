<template>
    <div>
        <Row class="container">
            <div class="container">
                <DataVis
                    v-for="(item, index) in config"
                    :key="index"
                    ref="DataVis"
                    :style="{marginTop: '40px'}"
                    :config="item"
                    :params-container="paramsContainer"
                    :request-interceptor="requestInterceptor"
                    :api-base="apiBase"
                />
            </div>
        </Row>
    </div>
</template>

<script>
import {config} from './config';
import axios from 'axios';
export default {
    data() {
        return {
            form: {
                config: JSON.stringify(config, null, 8)
            },
            config,
            paramsContainer: {
                test1: '1',
                test2: '2'
            },
            apiBase: '',
            requestInterceptor: function(url, params) {
                return new Promise((resolve, reject) => {
                    // eslint-disable-next-line no-undef
                    if (process.env.NODE_ENV === 'production') {
                        url = `website-data-api/${url}.json`;
                    }
                    axios.get(url, {
                        query: params
                    }).then(res => {
                        resolve(res.data);
                    }).catch(error => {
                        reject(error);
                    });
                });
            }
        };
    },
    mounted: function() {

    },
    beforeDestroy: function() {

    },
    methods: {
        handleConfigChange(e) {
            let config;
            try {
                config = JSON.parse(e.target.value || '') || [];
            } catch (error) {
                this.$Message('配置信息不是一个合法的json数据');
            }
            this.config = config;
        }
    }
};
</script>
<style lang="less" scoped>
    .container {
        padding: 10px;
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    }
</style>
