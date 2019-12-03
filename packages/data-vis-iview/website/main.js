import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import DataVis from '../src/index';
import VueI18n from 'vue-i18n';
import formGeneratorIview from 'form-generator-iview';

import App from './app.vue';
import router from './router';
import store from './store';
import Locales from './locale';

import 'iview/dist/styles/iview.css';
import '../src/style/index.less';
import 'form-generator-iview/src/style/index.less';


Vue.use(VueRouter);
Vue.use(iView);
Vue.use(VueI18n);
Vue.use(DataVis);
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
