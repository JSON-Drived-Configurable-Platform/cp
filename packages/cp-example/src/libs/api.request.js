/**
 * @file 路径配置配置
 * @author wangbing11(wangbing11@baidu.com)
 */

import HttpRequest from "@/libs/axios";
import config from "@/config";
const baseUrl = config.baseUrl;

const axios = new HttpRequest(baseUrl);
export default axios;
