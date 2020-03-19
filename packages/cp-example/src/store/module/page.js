/**
 * @file 页面状态
 * @author wangbing11(wangbing11@baidu.com)
 */
import {keyToLabel} from '../../template/audit/mock/keyToLabel';
import {keyList} from '../../template/audit/mock/keyList';
/* eslint-disable no-param-reassign */
export default {
  state: {
    pagePath: "",
    keyToLabel: "",
    keyList: ""
  },
  mutations: {
    setPagePath(state, pagePath) {
      console.log(pagePath);
      state.pagePath = pagePath;
      state.keyToLabel = keyToLabel[pagePath];
      state.keyList = keyList[pagePath];
    }
  }
};
