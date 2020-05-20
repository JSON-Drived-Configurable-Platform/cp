<template>
    <i-article>
        <article>
            <h1>控件之间的联动请求</h1>
            <inAnchor title="概述" h2 />
            <p>在某些场景中，我们常常会需要远程数据填充表单，这时就需要请求后端接口，通过配置和一些高级配置能够满足这种需求</p>
            <div class="api">
                <inAnchor title="代码示例" h2 />
                <Demo title="基础用法">
                    <div slot="demo">
                        <FormGenerator
                            :fields="code.api.data.fields"
                            :model="code.api.data.model"
                        />
                    </div>
                    <div slot="desc">
                        <p>一些支持远程数据的组件可以通过配置api来远程拉取数据。</p>
                    </div>
                    <i-code slot="code" lang="html">{{ code.api.code }}</i-code>
                </Demo>
                <Demo title="带所有参数的请求">
                    <div slot="demo">
                        <FormGenerator
                            :fields="code.apiAllParams.data.fields"
                            :model="code.apiAllParams.data.model"
                        />
                    </div>
                    <div slot="desc">
                        <p>当在field中配置apiParams为all时，会带上form上绑定的所有model值。如示例配置后，请求的参数为 selectProvinceApi?city=&province=%E6%B2%B3%E5%8C%97
                        </p>
                    </div>
                    <i-code slot="code" lang="html">{{ code.apiAllParams.code }}</i-code>
                </Demo>
                <Demo title="带某些参数的请求">
                    <div slot="demo">
                        <FormGenerator
                            :fields="code.apiSomeParams.data.fields"
                            :model="code.apiSomeParams.data.model"
                        />
                    </div>
                    <div slot="desc">
                        <p>当在field中配置apiParams为['province']时，会带上form上绑定的model中的province值。如示例配置后，请求的参数为 selectProvinceApi?province=%E6%B2%B3%E5%8C%97，这样就达到了表单配置的联动请求
                        </p>
                    </div>
                    <i-code slot="code" lang="html">{{ code.apiSomeParams.code }}</i-code>
                </Demo>
                <Demo title="带form绑定的值中没有的参数">
                    <div slot="demo">
                        <FormGenerator
                            :fields="code.apiParamsContainer.data.fields"
                            :model="code.apiParamsContainer.data.model"
                            :params-container="code.apiParamsContainer.data.paramsContainer"
                        />
                    </div>
                    <div slot="desc">
                        <p>当在field中配置apiParams为['zipCode']时，会在form的model和paramsContainer上的寻找zipCode值。如示例配置后，请求的参数为 selectProvinceApi?zipCode=100000，这样就达到了表单除外配置的联动请求
                        </p>
                    </div>
                    <i-code slot="code" lang="html">{{ code.apiParamsContainer.code }}</i-code>
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
import Code from '../../../code/development/uninionRequest';
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
        handleFieldChange() {}
    }
};
</script>

<style>

</style>
