module.exports = api => {
  // 添加新的依赖
  api.extendPackage({
    dependencies: {
      "data-vis-iview": "^1.0.0-beta",
      "form-generator-iview": "1.0.0-beta"
    }
  });

  api.injectImports(
    api.entryFile,
    `import "form-generator-iview/src/style/index.less";`
  );
  api.injectImports(
    api.entryFile,
    `import "data-vis-iview/src/style/index.less";`
  );
  api.injectImports(
    api.entryFile,
    `import "data-vis-iview/src/style/index.less";`
  );
  api.injectImports(
    api.entryFile,
    `import FormGenerator from "form-generator-iview";`
  );
  api.injectImports(api.entryFile, `import DataVis from "data-vis-iview";`);

  api.render("./template");

  // Vue.use(FormGenerator);
  // Vue.use(DataVis);
  api.onCreateComplete(() => {
    const { EOL } = require("os");
    const fs = require("fs");
    const contentMain = fs.readFileSync(api.entryFile, { encoding: "utf-8" });
    const lines = contentMain.split(/\r?\n/g);
    const renderIndex = lines.findIndex(line => line.match(/^new\sVue\(\{$/));
    let formGeneratorInsertStr = "";
    let dataVisInsertStr = "";
    if (!lines.find(line => line.match(/^Vue\.use\(FormGenerator\);$/))) {
      formGeneratorInsertStr = "Vue.use(FormGenerator);";
    }
    if (!lines.find(line => line.match(/^Vue\.use\(DataVis\);$/))) {
      dataVisInsertStr = "Vue.use(DataVis);";
    }
    lines[
      renderIndex
    ] = `${formGeneratorInsertStr}${EOL}${dataVisInsertStr}${EOL}${lines[renderIndex]}`;
    fs.writeFileSync(api.entryFile, lines.join(EOL), { encoding: "utf-8" });
  });
};
