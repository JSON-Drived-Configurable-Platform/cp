// 使用api
let api = {};
const apiField = {
    type: 'Select',
    model: 'city',
    options: '/selectApi',
    defaultValueIndex: 0
};

const apiModel = {
    city: ''
};

api.data = {
    field: apiField,
    model: apiModel
};

api.code = `
<script>
const field = ${JSON.stringify(apiField, null, 4)};
export default {
    data() {
        return {
            field,
            model: ${JSON.stringify(apiModel)}
        };
    },
    methods: {
        requestInterceptor(method = 'get', url, params) {
            const interceptor = {
                reqHandle(conf) {
                    const {url, params, method} = conf;
                    const postData = {
                        url,
                        method,
                        params: {
                            ...params,
                            //  一些附加请求参数
                            product: 'your params',
                        }
                    };
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
                            })
                        });
                    }
                    return {
                        status: 0,
                        data: resData
                    }
                }
            };
            return new Promise((resolve, reject) => {
                axios.request(interceptor.reqHandle({
                    url,
                    method,
                    params
                })).then(res => {
                    const data = interceptor.resHandle(res.data);
                    resolve(data);
                }).catch(e => {
                    reject(e);
                })
            });

        }
    }

};
</script>
<template>
    <Form :model="model">
        <FieldGenerator
            :field="field"
            requestInterceptor="requestInterceptor"
        />
    </Form>
</template>
`;

export default {
    api
};
