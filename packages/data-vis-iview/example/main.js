import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import DataVis from '../src/index';
import formGeneratorIview from 'form-generator-iview';

import App from './app.vue';
import router from './router';
import store from './store';

import 'iview/dist/styles/iview.css';
import '../src/style/index.less';
import 'form-generator-iview/src/style/index.less';

Vue.use(VueRouter);
Vue.use(iView);
Vue.use(DataVis);
Vue.use(formGeneratorIview);

// 开启debug模式
Vue.config.debug = true;

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
