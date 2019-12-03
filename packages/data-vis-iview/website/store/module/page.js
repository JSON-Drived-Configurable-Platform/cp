/**
 * @file 页面状态
 * @author wangbing11(wangbing11@baidu.com)
 */

/* eslint-disable no-param-reassign */
export default {
    state: {
        pagePath: ''
    },
    mutations: {
        setPagePath(state, pagePath) {
            state.pagePath = pagePath;
        }
    }
};
