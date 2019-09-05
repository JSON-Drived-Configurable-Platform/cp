import axios from "../libs/api.request";

import * as appServices from "./module/app";
import * as userServices from "./module/user";

import * as dataReportServices from "../page/data-report/service";

const servicesConfig = {
  ...appServices,
  ...userServices,
  ...dataReportServices
};

let services = {};
Object.keys(servicesConfig).forEach(service => {
  services[service] = (params = {}) => {
    return axios.request(servicesConfig[service](params));
  };
});

export default services;
