<template>
    <Poptip
        v-if="field.confirmPoptip"
        confirm
        :title="field.confirmPoptip.title"
        :placement="field.confirmPoptip.placement"
        :class="classes"
        @on-ok="handleClick"
    >
        <Button
            :type="field.subtype || 'default'"
            :size="field.size || 'default'"
        >{{ field.text }}</Button>
    </Poptip>
    <Button
        v-else
        :type="field.subtype || 'default'"
        :size="field.size || 'default'"
        :class="classes"
        :loading="loading"
        @click="handleClick"
    >{{ text }}</Button>
</template>
<script>
import axios from '../utils/http';
import {classPrefix} from '../utils/const';
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
            text: '',
            loading: false
        };
    },
    computed: {
        classes() {
            return `${classPrefix}-${this.field.type.toLowerCase()}`;
        },
    },
    mounted() {
        this.text = this.field.text;
    },
    methods: {
        handleClick() {
            switch (this.field.action.type) {
                case 'ajax':
                    this.doAjaxAction();
                    break;
                case 'event':
                    this.$emit('on-button-event', {
                        name: this.field.action.name
                    });
                    break;
            }
        },
        doAjaxAction() {
            this.loading = true;
            let apiBase = this.apiBase || '';
            let formModel = this.form.model;
            // default carry all formModel data as request params
            let apiParams = this.field.apiParams || Object.keys(formModel);
            let params = {};
            let finalApi = apiBase + this.field.action.api;
            apiParams.forEach(param => {
                params[param] = formModel[param];
            });
            let finalParams = Object.assign({}, params);
            this.requestMethod(finalApi, finalParams).then(res => {
                this.requestResolve(res);
                this.$Message.info(`${this.field.text}成功!`);
                this.$emit('on-button-event', {
                    name: 'ajaxSuccess',
                });
            }, reject => {
                this.requestReject(reject);
            });
        },
        requestResolve(res) {
            if (+res.status === 0 || +res.errno === 0 || +res.status === 200) {
                if (res.data && res.data.text) {
                    this.text = res.data.text;
                }
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
