import axios from "../libs/api.request";

export default Object.assign({}, getAppServices(), getModuleServices());

/**
 * @desc get services for the layout, like menulist, userInfo and etc.
 * @return {Object} the structure is like:
 * {
 *   menulist: () => {},
 *   userInfo: () => {}
 * }
 *
 */
function getAppServices() {
  const appServices = require("./module/app").default;
  const userServices = require("./module/user").default;

  const servicesConfig = {
    ...appServices,
    ...userServices
  };

  let services = {};

  Object.keys(servicesConfig).forEach(service => {
    services[service] = generateService(servicesConfig[service]);
  });
  return services;
}

/**
 * @desc get services for the modules from tempates.
 * @return {Object} the structure is like:
 * {
 *   moduleName1: {
 *     service1: () => {},
 *     service2: () => {}
 *   },
 *   moduleName2: {
 *     service1: () => {},
 *     service2: () => {}
 *   }
 * }
 *
 */
function getModuleServices() {
  const templateServiceContext = require.context(
    "../page",
    true,
    /service\.js$/
  );
  const services = {};

  templateServiceContext.keys().forEach(key => {
    const moduleName = /^\.\/(.+)\/service.js$/.exec(key)[1];
    services[moduleName] = {};
    const contextObj = templateServiceContext(key).default;
    Object.keys(contextObj).forEach(service => {
      services[moduleName][service] = generateService(contextObj[service]);
    });
  });
  return services;
}

/**
 * @desc gernarate a API service using axios
 * @param {Function} serviceDeclaration the function declared in service dir which return a config of the service
 * @return {Function} the final service
 */
function generateService(serviceDeclaration) {
  return (params = {}) => {
    return axios.request(serviceDeclaration(params));
  };
}
