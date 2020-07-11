<template>
    <i-article>
        <article>
            <h1>动态获取配置数据</h1>
            <p>在实际应用的业务中使用Select等类型的配置时，下拉选项不是固定的，通常需要通过接口从服务端获取。为此，我们提供的以下功能：</p>
            <ul>
                <li>(1)、通过在配置项options为一个远程请求接口，以实现从服务端拉取数据;</li>
                <li>(2)、拉取的接口中可以携带额外的参数，这些参数来自从当前表单的model或者通过paramContainer传入的外部参数</li>
                <li>(3)、支持自定义对后端返回的数据进行拦截，并实现自己的数据处理；</li>
            </ul>
            <p>以上特性，在很多组件中都有运用，只要文档中标注了可以通过API拉取的配置项，都可以使用。下面通过Select组件来进行详细说明：</p>
            <div class="api">
                <inAnchor title="代码示例" h2 />
                <Demo title="为Select组件的远程数据请求添加拦截器">
                    <div slot="demo">
                        <Form :model="code.api.data.model">
                            <FieldGenerator
                                :field="code.api.data.field"
                                :form-model="code.api.data.model"
                                request-interceptor="requestInterceptor"
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
import Code from '../../../code/development/dynamic-config-data';
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
