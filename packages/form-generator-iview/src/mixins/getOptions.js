import axios from '../utils/http';
export default {
    props: {
        requestInterceptor: {
            type: [Function, null],
            default: null
        },
        apiBase: {
            type: String,
            default: ''
        }
    },
    computed: {
        params() {
            let formModel = this.form.model || {};
            let apiParams = this.field.apiParams || [];
            let params = {};
            apiParams.forEach(param => {
                params[param] = formModel[param];
            });
            return params;
        }
    },
    watch: {
        params: {
            handler(val) {
                if (this.field.api || this.optionsApi) {
                    this.getRemoteOptions(val);
                }
            },
            immediate: true,
            deep: true
        }
    },
    methods: {
        getRemoteOptions(newParams) {
            this.loading = true;
            let apiBase = this.apiBase;
            let formModel = this.form.model;
            let apiParams = this.field.apiParams || [];
            let params = {};
            let finalApi = apiBase + (this.field.api || this.optionsApi);
            apiParams.forEach(param => {
                params[param] = formModel[param];
            });
            let finalParams = Object.assign({}, params, newParams);
            this.requestMethod(finalApi, finalParams).then(res => {
                this.requestResolve(res);
            }, reject => {
                this.requestReject(reject);
            });
        },
        requestResolve(res) {
            if (+res.status === 0 || +res.errno === 0 || +res.status === 200) {
                this.options = res.data;
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
