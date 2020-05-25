import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import DataVis from '../src/index';
import VueI18n from 'vue-i18n';
import formGeneratorIview from 'form-generator-iview';

import App from './App.vue';
import router from './router';
import store from './store';
import Locales from './locale';

import 'iview/dist/styles/iview.css';
import '../src/style/index.less';
import 'form-generator-iview/src/style/index.less';
import axios from 'axios';

const requestInterceptor = function (url, params) {
    return new Promise((resolve, reject) => {
        // eslint-disable-next-line no-undef
        if (process.env.NODE_ENV === 'production') {
            url = `website-data-api/${url}.json`;
        }
        axios.request({
            url,
            method: 'get',
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
Vue.use(DataVis, {
    requestInterceptor
});
Vue.use(formGeneratorIview);



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
