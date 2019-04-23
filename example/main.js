import Vue from 'vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import App from './app.vue';

Vue.use(iView);

new Vue({
    el: '#app',
    render: h => h(App)
});
