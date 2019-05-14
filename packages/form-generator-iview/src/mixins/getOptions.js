import axios from '../utils/http';
export default {
    created() {
        if (this.field.api) {
            this.getRemoteOptions();
        }
    },
    methods: {
        remoteMethod() {
            if (!this.field.api) {
                return;
            }
            this.getRemoteOptions();
            this.loading = true;
        },
        getRemoteOptions() {
            this.loading = true;
            let formModel = this.formModel;
            let apiParams = this.field.apiParams || [];
            let apiBase = this.apiBase;
            let params = {};
            apiParams.forEach(param => {
                params[param] = formModel[param];
            });
            axios.request({
                url: apiBase + this.field.api,
                method: 'get',
                params
            }).then(({errno, status, data}) => {
                if (+status === 0 || +status === 200 || +errno === 0) {
                    this.options = data;
                    this.loading = false;
                }
            });
        },
    },
};
