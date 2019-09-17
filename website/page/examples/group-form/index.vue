<template>
    <div>
        <Row class="container">
            <div class="container">
                <FormGenerator
                    ref="FormGenerator"
                    :fields="fields"
                    :model="model"
                    :options="options"
                    :request-interceptor="requestInterceptor"
                />
            </div>
        </Row>
    </div>
</template>

<script>
import {config, model, fields, options} from './config';
import axios from 'axios';
export default {
    data() {
        return {
            form: {
                config: JSON.stringify(config, null, 8)
            },
            model,
            fields,
            options,
            // requestInterceptor: null
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
    mounted() {

    },
    beforeDestroy() {

    },
    methods: {
        submit() {
            this.$refs.FormGenerator
                .submit().then(data => {
                    // eslint-disable-next-line no-console
                    console.log('submit', data);
                    const conditons = [];
                    Object.keys(data).map(key => {
                        conditons.push({
                            key,
                            value: data[key]
                        });
                    });
                    // eslint-disable-next-line no-console
                    console.log('submit', JSON.stringify(conditons));
                });
        },
        reset() {
            this.$refs.FormGenerator.reset();
        }
    }
};
</script>
<style lang="less" scoped>
    .container {
        margin: 10px 40px;
        width: 70%;
    }
</style>
