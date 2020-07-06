<template>
    <i-article>
        <article>
            <h1>动态更新配置</h1>
            <p>
                在实际项目中，可能需要动态的更新某些控件的状态，比如动态禁用某个控件，变更Radio的选择项。
            </p>
            <div class="api">
                <inAnchor title="代码示例" h2 />
                <Demo title="为Select组件的远程数据请求添加拦截器">
                    <div slot="demo">
                        <Form :model="code.api.data.model">
                            <FieldGenerator
                                :field="code.api.data.field"
                                :form-model="code.api.data.model"
                                :dynamic-config-data="requestInterceptor"
                            />
                        </Form>
                    </div>
                    <div slot="desc">
                        将<code>filed.options</code>的值设置为获取数据的接口时，通过为FormGenerator组件的"dynamic-config-data"属性绑定处理函数，
                        来实现数据请求的拦截。 用户通过fields配置的远程数据请求的request和responce均会被拦截
                        <div>
                            <p>原始远程数据格式为：</p>
                            <i-code>
                                {{ JSON.parse('{"status":0,"data":[{"label":"北京","value":"Beijing"},{"label":"上海","value":"Shanghai"},{"label":"广州","value":"Guangzhou"},{"label":"深圳","value":"Shenzhen"}]}') }}
                            </i-code>

                            <p>通过requestInterceptor拦截数据，进一步处理后变为：</p>
                            <i-code>
                                {{ JSON.parse('{"status":0,"data":[{"label":"我爱北京","value":"Beijing"},{"label":"我爱上海","value":"Shanghai"},{"label":"我爱广州","value":"Guangzhou"},{"label":"我爱深圳","value":"Shenzhen"}]}') }}
                            </i-code>
                        </div>
                    </div>
                    <i-code slot="code" lang="html">{{ code.api.code }}</i-code>
                </Demo>
            </div>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
import iCode from '../../../components/code';
import Demo from '../../../components/demo';
import Code from '../../../code/development/dynamic-update-config';
import axios from 'axios';

export default {
    components: {
        iArticle,
        inAnchor,
        iCode,
        Demo
    },
    data() {
        return {
            code: Code
        };
    },
    methods: {
        requestInterceptor(method = 'get', url, params) {
            const interceptor = {
                reqHandle(conf) {
                    let {url, params, method} = conf;
                    // eslint-disable-next-line no-undef
                    if (process.env.NODE_ENV === 'production') {
                        url = `website-data-api${url}.json`;
                    }
                    const postData = {
                        url,
                        method,
                        params: {
                            ...params,
                            //  以及一些附加请求参数
                            // product: 'your params',
                        }
                    };
                    // eslint-disable-next-line no-console
                    console.log('postData', postData);
                    return postData;
                },
                resHandle(res) {
                    const {status, data} = res;
                    let resData = [];
                    if (status === 0 && data) {
                        // 对后端返回的data做一些特殊处理 便于前端数据展示渲染
                        data.forEach(item => {
                            resData.push({
                                label: '我爱' + item.label,
                                value: item.value
                            });
                        });
                    }
                    return {
                        status: 0,
                        data: resData
                    };
                }
            };
            return new Promise((resolve, reject) => {
                axios.request(interceptor.reqHandle({
                    url,
                    method,
                    params,
                })).then(res => {
                    const data = interceptor.resHandle(res.data);
                    resolve(data);
                }).catch(e => {
                    reject(e);
                });
            });
        },
    },
};
</script>

<style>

</style>
