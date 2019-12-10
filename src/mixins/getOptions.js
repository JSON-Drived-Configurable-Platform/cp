import axios from '../utils/http';
export default {
    props: {
        requestInterceptor: {
            type: [Function, null],
            default: null
        },
        paramsContainer: {
            type: Object,
            default() {
                return {};
            }
        },
        apiBase: {
            type: String,
            default: ''
        }
    },
    computed: {
        params() {
            let formModel = this.form.model || {};
            // put current formModel and outside param into paramsContainer
            let paramsContainer = Object.assign({}, formModel, this.paramsContainer || {});
            let apiParams = this.field.apiParams;
            let params = {};
            if (apiParams === 'all' || !apiParams) {
                params = paramsContainer;
            }
            else {
                if (Array.isArray(apiParams)) {
                    apiParams.forEach(param => {
                        params[param] = paramsContainer[param];
                    });
                }
            }
            return Object.assign({}, params);
        }
    },
    watch: {
        params: {
            handler() {
                if (this.field.api || this.optionsApi) {
                    this.getRemoteOptions();
                }
            },
            immediate: true,
            deep: true
        }
    },
    methods: {
        /**
         * request for options data
         *
         * @param {Object} newParams param not from form.model or paramsContainer. eg: in searchable fieldSelect, there is a search keyword need to be contained in params.
         */
        getRemoteOptions(newParams) {
            this.loading = true;
            let apiBase = this.apiBase;
            let finalApi = apiBase + (this.field.api || this.optionsApi);
            let finalParams = Object.assign({}, this.params, newParams);
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
