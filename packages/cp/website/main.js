import Vue from 'vue';
import VueI18n from 'vue-i18n';
import iView from 'iview';
import VueRouter from 'vue-router';
import dataVis from 'data-vis-iview';
import FormGenerator from 'form-generator-iview';

import App from './app.vue';
import router from './router';
import store from './store';

import Locales from './locale';

import 'iview/dist/styles/iview.css';
import 'data-vis-iview/src/style/index.less';
import 'form-generator-iview/src/style/index.less';

import axios from 'axios';

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

Vue.use(VueRouter);
Vue.use(iView);
Vue.use(VueI18n);
Vue.use(dataVis);
Vue.use(FormGenerator, {
    requestInterceptor
});

const i18n = new VueI18n({
    locale: 'zh-CN', // 设置语言环境
    messages: Locales
});

// 开启debug模式
Vue.config.debug = true;

new Vue({
    el: '#app',
    i18n,
    router,
    store,
    render: h => h(App)
});
