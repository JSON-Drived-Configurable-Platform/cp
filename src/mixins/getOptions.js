import axios from '../utils/http';
let cachedRequestInterceptor = {};
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
            // If set apiParams with 'all', then the params contain all the properties in paramsContainer
            if (apiParams === 'all') {
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
            handler(newParams, oldParams) {
                if (JSON.stringify(newParams) === JSON.stringify(oldParams)) {
                    return;
                }
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
            this.requestMethod(finalApi, finalParams, this.field.cache).then(res => {
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
        /**
         *
         * @param {String} url request url
         * @param {Object} finalParams params for the request
         * @param {Boolean} cache If cache is true, the same request by url and will be cached, and use only one request
         */
        requestMethod(url, finalParams, cache = false) {
            const cacheKey = `${url}${JSON.stringify(finalParams)}`;
            let requestInterceptor = null;
            if (!cachedRequestInterceptor) {
                cachedRequestInterceptor = {};
            }
            if (cachedRequestInterceptor[cacheKey]) {
                return cachedRequestInterceptor[cacheKey];
            }

            if (this.requestInterceptor) {
                requestInterceptor = this.requestInterceptor(url, finalParams);
            }
            else if (this.FormGeneratorInstallOptions && this.FormGeneratorInstallOptions.requestInterceptor) {
                requestInterceptor = this.FormGeneratorInstallOptions.requestInterceptor(url, finalParams);
            }
            else {
                requestInterceptor = axios.request({
                    url,
                    method: 'get',
                    params: finalParams
                });
            }

            if (cache) {
                cachedRequestInterceptor[cacheKey] = requestInterceptor;
            }
            return requestInterceptor;
        },
    },
};
