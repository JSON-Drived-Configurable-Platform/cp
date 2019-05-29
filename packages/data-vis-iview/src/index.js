import DataVis from './dataVis';

const install = function(Vue) {
    if (install.installed) return;

    Vue.component('DataVis', DataVis);
};

const API = {
    version: process.env.VERSION, // eslint-disable-line no-undef
    install,
    DataVis
};

export default API;
