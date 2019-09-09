module.exports = api => {
  // 添加新的依赖
  api.extendPackage({
    dependencies: {
      axios: "^0.18.0",
      "core-js": "^2.6.5",
      "data-vis-iview": "^0.0.23",
      "form-generator-iview": "^0.0.18",
      iview: "^3.4.0",
      vue: "^2.6.10"
    }
  });

  api.injectImports(
    api.entryFile,
    `import "form-generator-iview/src/style/index.less";`
  );

  api.injectImports(
    api.entryFile,
    `import FormGenerator from "form-generator-iview/src/index";`
  );

  api.render("./template");

  // Vue.use(FormGenerator);
  // Vue.use(DataVis);
  api.onCreateComplete(() => {
    const { EOL } = require("os");
    const fs = require("fs");
    const contentMain = fs.readFileSync(api.entryFile, { encoding: "utf-8" });
    const lines = contentMain.split(/\r?\n/g);
    const renderIndex = lines.findIndex(line => line.match(/^new\sVue\(\{$/));
    lines[
      renderIndex
    ] = `Vue.use(FormGenerator);${EOL}Vue.use(DataVis);${EOL}${lines[renderIndex]}`;
    fs.writeFileSync(api.entryFile, lines.join(EOL), { encoding: "utf-8" });
  });
};
