import axios from "../libs/api.request";

import appServices from "./module/app";
import userServices from "./module/user";

const templateServiceContext = require.context("../page", true, /service\.js$/);
const templateServices = {};

templateServiceContext.keys().map(key => {
  const contextObj = templateServiceContext(key).default;
  Object.keys(contextObj).forEach(service => {
    templateServices[service] = contextObj[service];
  });
});

const servicesConfig = {
  ...appServices,
  ...userServices,
  ...templateServices
};

console.log(servicesConfig);
let services = {};

Object.keys(servicesConfig).forEach(service => {
  services[service] = (params = {}) => {
    return axios.request(servicesConfig[service](params));
  };
});

export default services;
