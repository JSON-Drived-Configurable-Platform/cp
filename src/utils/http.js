/* eslint-disable no-param-reassign */
import axios from 'axios';

class HttpRequest {
    constructor(baseUrl = '/') {
        this.baseUrl = baseUrl;
        this.queue = {};
    }
    getInsideConfig() {
        const config = {
            baseURL: this.baseUrl,
            headers: {
                //
            }
        };
        return config;
    }
    destroy(url) {
        delete this.queue[url];
        if (!Object.keys(this.queue).length) {
            // Spin.hide()
        }
    }
    interceptors(instance, url) {
    // 请求拦截
        instance.interceptors.request.use(config => {
            // 添加全局的loading...
            if (!Object.keys(this.queue).length) {
                // Spin.show() // 不建议开启，因为界面不友好
            }
            this.queue[url] = true;
            return config;
        }, error => {
            return Promise.reject(error);
        });
        // 响应拦截
        instance.interceptors.response.use(res => {
            this.destroy(url);
            const data = res.data;
            if (+data.status === 0 || +data.status === 200 || +data.errno === 0 || +data.code === 0) {
                return data;
            }
            return Promise.reject(data);
        }, error => {
            this.destroy(url);
            let errorInfo = error.response;
            if (!errorInfo) {
                const {request: {statusText, status}, config} = JSON.parse(JSON.stringify(error));
                errorInfo = {
                    statusText,
                    status,
                    request: {responseURL: config.url}
                };
            }
            return Promise.reject(error);
        });
    }
    request(options) {
        const instance = axios.create();
        options = Object.assign(this.getInsideConfig(), options);
        this.interceptors(instance, options.url);
        return instance(options);
    }
}

export default new HttpRequest();
