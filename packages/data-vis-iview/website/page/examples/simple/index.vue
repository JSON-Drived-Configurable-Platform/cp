<template>
    <div>
        simple
        <Row class="container">
            <DataVis
                ref="DataVis"
                :style="{marginTop: '40px'}"
                :config="config"
            />
        </Row>
    </div>
</template>

<script>
import {config} from './config';
import axios from 'axios';
export default {
    data() {
        return {
            config,
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
