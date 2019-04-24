import Vue from 'vue';
import iView from 'iview';
import FormGeneratorIView from '../src/index';
import 'iview/dist/styles/iview.css';
import App from './app.vue';

Vue.use(iView);

Vue.use(FormGeneratorIView);

// 开启debug模式
Vue.config.debug = true;

new Vue({
    el: '#app',
    render: h => h(App)
});
