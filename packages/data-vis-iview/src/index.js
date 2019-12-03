import DataVis from './dataVis';
import DataVisItem from './dataVisItem';

const install = function(Vue) {
    if (install.installed) return;

    Vue.component('DataVis', DataVis);
    Vue.component('DataVisItem', DataVisItem);
};

const API = {
    version: process.env.VERSION, // eslint-disable-line no-undef
    install,
    DataVis
};

export default API;
