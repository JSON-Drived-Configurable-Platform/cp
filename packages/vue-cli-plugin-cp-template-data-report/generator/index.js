module.exports = api => {
  // 添加新的依赖
  api.extendPackage({
    dependencies: {
      axios: "^0.18.0",
      "core-js": "^2.6.5",
      "data-vis-iview": "^0.0.23",
      "form-generator-iview": "^0.0.11",
      iview: "^3.4.0",
      vue: "^2.6.10"
    }
  });

  api.render("./template");
};
