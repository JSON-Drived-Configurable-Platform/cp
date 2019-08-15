import FormGenerator from './formGenerator';
import ControlGenerator from './controlGenerator';

const install = function(Vue) {
    if (install.installed) return;
    Vue.component('FormGenerator', FormGenerator);
    Vue.component('ControlGenerator', ControlGenerator);
};

const API = {
    version: process.env.VERSION, // eslint-disable-line no-undef
    install,
    FormGenerator,
    ControlGenerator
};

export default API;
