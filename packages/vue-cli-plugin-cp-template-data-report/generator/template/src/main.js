---
extend: 'vue-cli-plugin-cp/generator/template/src/main.js'
replace:
  - !!js/regexp /Vue\.use\(VueRouter\)\;[^]*?Vue\.use\(iView\)\;/
---

<%# REPLACE %>
Vue.use(FormGenerator);
Vue.use(DataVis);
<%# END_REPLACE %>
