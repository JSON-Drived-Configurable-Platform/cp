import FormGenerator from './formGenerator';
import FieldGenerator from './fieldGenerator';

const install = function(Vue, installOptions = null) {
    if (install.installed) return;
    if (installOptions) {
        Vue.prototype.FormGeneratorInstallOptions = installOptions;
    }
    Vue.component('FormGenerator', FormGenerator);
    Vue.component('FieldGenerator', FieldGenerator);
};

const API = {
    version: process.env.VERSION, // eslint-disable-line no-undef
    install,
    FormGenerator,
    FieldGenerator
};

export default API;
