import FormGenerator from './formGenerator';

const install = function(Vue) {
    if (install.installed) return;

    Vue.component('FormGenerator', FormGenerator);
};

const API = {
    version: process.env.VERSION, // eslint-disable-line no-undef
    install,
    FormGenerator
};

export default API;
