import axios from '../utils/http';
export default {
    props: {
        formModel: {
            type: Object,
            required: true,
            default() {
                return {};
            }
        },
    },
    computed: {
        params() {
            let formModel = this.formModel;
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
                if (this.field.api) {
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
            let formModel = this.formModel;
            let apiParams = this.field.apiParams || [];
            let params = {};
            apiParams.forEach(param => {
                params[param] = formModel[param];
            });
            axios.request({
                url: apiBase + this.field.api,
                method: 'get',
                params: Object.assign({}, params, newParams)
            }).then(({errno, status, data}) => {
                if (+status === 0 || +status === 200 || +errno === 0) {
                    this.options = data;
                    this.loading = false;
                }
            });
        },
    },
};
