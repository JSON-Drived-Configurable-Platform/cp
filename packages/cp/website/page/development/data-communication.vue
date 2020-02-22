<template>
    <i-article>
        <article>
            <h1>数据通信</h1>
            <p>CP中数据的通信，主要包含两部分：</p>
            <ul>
                <li>（1）、需要在页面或者模板代码中直接使用的数据服务;</li>
                <li>（2）、在模板的JSON配置中隐式调用的数据服务；</li>
            </ul>
            <inAnchor
                title="服务注册"
                h2
            />
            <p>直接使用的数据服务，通常都维护在以service.js命名的文件中。这样做是为了代码易读，你也可以直接使用axios发送请求。如下代码注册了一个数据请求：</p>
            <i-code>
                <pre>

const getHomeData = (params = {}) => {
    return {
        url: '/home/home-data',
        method: 'get',
        params
    };
};

export default {
    getHomeData
};
                </pre>
            </i-code>
            <p>然后在业务中就可以，如下使用注册的服务：</p>
            <i-code>
                <pre>

...
const { getHomeData } = service.home;
...
getHomeData().then(res => {
    ...
});
                </pre>
            </i-code>

            <inAnchor
                title="JSON配置的数据服务"
                h2
            />
            <p>
                在表单、图表等基础工具中，有很多功能需要在模块内部直接调用接口。
                比如表单工具的下拉选择、图表工具的数据，都支持配置一个接口，就可以直接获取到对应的数据。
            </p>
            <Demo title="远程搜索的下拉选择表单">
                <div slot="demo">
                    <Form :model="code.remote.data.model">
                        <FieldGenerator
                            :field="code.remote.data.field"
                            :form-model="code.remote.data.model"
                            @on-field-change="handleFieldChange"
                        />
                        <FieldGenerator
                            :field="code.remote.data.multipleField"
                            :form-model="code.remote.data.model"
                            @on-field-change="handleFieldChange"
                        />
                    </Form>
                </div>
                <div slot="desc">
                    <p>设置<code>field.remote</code>为true后，可以根据输入进行远程搜索。</p>
                    <p>此项值依赖<code>field.options</code>为获取数据的url。如果为数组，则无效</p>
                </div>
                <i-code slot="code" lang="html">{{ code.remote.code }}</i-code>
            </Demo>
            <p>上例展示了，通过将select组件配置中的option设置为接口API，从而可以直接从后端拿到对应的选择项。</p>

            <inAnchor
                title="配置请求的拦截"
                h2
            />
            <p>CP模块中配置的请求，在实际项目中可能需要对请求进行干预，比如本地调试、接口代理，还有后端返回的数据不能需要进行转换才符合组件配置的格式。</p>
            <p>cp支持通过设置请求拦截器对配置请求进行拦截处理。如下代码对表单工具在全局设置了一个请求拦截器。</p>
            <i-code>
                <pre>

const requestInterceptor = function (method = 'get', url, params) {
    return new Promise((resolve, reject) => {
        // eslint-disable-next-line no-undef
        if (process.env.NODE_ENV === 'production') {
            url = `website-data-api/${url}.json`;
        }
        axios.request({
            url,
            method,
            params
        }).then(res => {
            resolve(res.data);
        }).catch(error => {
            reject(error);
        });
    });
};
Vue.use(FormGenerator, {
    requestInterceptor
});
                </pre>
            </i-code>
            <p>
                也可以对工具设置局部拦截器，比如表单工具详见：
                <a href="https://json-drived-configurable-platform.github.io/form-generator-iview/#/doc/FormGenerator">表单配置requestInterceptor</a>
            </p>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../components/article';
import inAnchor from '../../components/anchor';
import Demo from '../../components/Demo';
import iCode from '../../components/code';
import Code from '../../code/data-communication';
export default {
    components: {
        iArticle,
        inAnchor,
        Demo,
        iCode
    },
    data() {
        return {
            code: Code
        };
    },
    methods: {
        handleFieldChange(model, value) {
            // eslint-disable-next-line no-console
            console.log(model, value);
        }
    }
};
</script>

<style lang="less" scoped>
.img-list {
    margin: 20px auto;
    ul {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        li {
            margin: 0 50px;
            text-align: center;
            img {
                margin: 0 auto;
                display: block;
                width: 100%;
            }
            span {
                display: inline-block;
                line-height: 30px;
                font-size: 12px;
            }
        }
    }
}
</style>>
