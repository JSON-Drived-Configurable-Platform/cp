import DataVis from './dataVis';
import DataVisGroup from './dataVisGroup';
import DataVisItem from './DataVisItem';

const install = function(Vue, installOptions = null) {
    if (install.installed) return;
    if (installOptions) {
        Vue.prototype.DataVisInstallOptions = installOptions;
    }
    Vue.component('DataVis', DataVis);
    Vue.component('DataVisGroup', DataVisGroup);
    Vue.component('DataVisItem', DataVisItem);
};

const API = {
    version: process.env.VERSION, // eslint-disable-line no-undef
    install,
    DataVis
};

export default API;
