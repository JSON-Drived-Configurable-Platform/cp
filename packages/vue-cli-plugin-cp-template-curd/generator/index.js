module.exports = api => {
  // 添加新的依赖
  api.extendPackage({
    dependencies: {
      "form-generator-iview": "1.0.0-beta"
    }
  });

  api.injectImports(
    api.entryFile,
    `import "form-generator-iview/src/style/index.less";`
  );

  api.injectImports(
    api.entryFile,
    `import FormGenerator from "form-generator-iview";`
  );

  api.render("./template");

  // Vue.use(FormGenerator);
  api.onCreateComplete(() => {
    const { EOL } = require("os");
    const fs = require("fs");
    const contentMain = fs.readFileSync(api.entryFile, { encoding: "utf-8" });
    const lines = contentMain.split(/\r?\n/g);
    const renderIndex = lines.findIndex(line => line.match(/^new\sVue\(\{$/));
    if (!lines.find(line => line.match(/^Vue\.use\(FormGenerator\);$/))) {
      let formGeneratorInsertStr = "Vue.use(FormGenerator);";
      lines[
        renderIndex
      ] = `${EOL}${formGeneratorInsertStr}${EOL}${lines[renderIndex]}`;
      fs.writeFileSync(api.entryFile, lines.join(EOL), { encoding: "utf-8" });
    }
  });
};
