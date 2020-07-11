<template>
    <div class="searchable-chart">
        <DataVis
            v-for="(item, index) in config"
            :key="index"
            ref="DataVis"
            :style="{marginTop: '40px'}"
            :config="item"
            :params-container="paramsContainer"
            request-interceptor="requestInterceptor"
            :api-base="apiBase"
        />
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
    }
};
</script>
<style lang="less">
    // .searchable-chart {
    //     .dvis-ivu-item .dvis-ivu-item-chart-conditions {
    //         // flex-grow: 0
    //     }
    // }
</style>
