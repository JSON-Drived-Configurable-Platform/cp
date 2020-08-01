module.exports = {
  root: true,

  env: {
      node: true
  },

  extends: ['plugin:vue/essential'],

  rules: {
    'vue/html-indent': ['error', 2],
    indent: ['error', 2, {SwitchCase: 1}],
  },

  parserOptions: {
      parser: 'babel-eslint'
  },

  'extends': [
    'plugin:vue/essential'
  ]
};
