<template>
    <Button
        :type="field.subtype || 'default'"
        :size="field.size || 'default'"
        @click="handleClick"
    >{{ text }}</Button>
</template>
<script>
import axios from '../utils/http';
export default {
    inject: ['form'],
    props: {
        field: {
            type: Object,
            required: true
        },
        apiBase: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            text: ''
        };
    },
    mounted() {
        this.text = this.field.text;
    },
    methods: {
        handleClick() {
            if (this.field.action.type === 'ajax') {
                this.doAjaxAction();
            }
        },
        doAjaxAction() {
            this.loading = true;
            let apiBase = this.apiBase || '';
            let formModel = this.form.model;
            let apiParams = this.field.apiParams || [];
            let params = {};
            let finalApi = apiBase + this.field.action.api;
            apiParams.forEach(param => {
                params[param] = formModel[param];
            });
            let finalParams = Object.assign({}, params);
            this.requestMethod(finalApi, finalParams).then(res => {
                this.requestResolve(res);
            }, reject => {
                this.requestReject(reject);
            });
        },
        requestResolve(res) {
            if (+res.status === 0 || +res.errno === 0 || +res.status === 200) {
                this.text = res.data.text;
                this.loading = false;
            }
        },
        requestReject(reject) {
            // eslint-disable-next-line no-console
            console.log(reject);
        },
        requestMethod(url, finalParams) {
            if (this.requestInterceptor) {
                return this.requestInterceptor(url, finalParams);
            }
            else if (this.FormGeneratorInstallOptions && this.FormGeneratorInstallOptions.requestInterceptor) {
                return this.FormGeneratorInstallOptions.requestInterceptor(url, finalParams);
            }
            return axios.request({
                url,
                method: 'get',
                params: finalParams
            });
        },
    },
};
</script>
