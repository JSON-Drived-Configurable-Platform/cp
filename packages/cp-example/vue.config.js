const fs = require("fs");
const path = require("path");
const mockPath = "./src/__mock__";
let mockApiPaths = [];
let mockApiData = {};

fs.readdirSync(path.resolve(__dirname, mockPath)).forEach(dirname => {
  fs.readdirSync(path.resolve(__dirname, `${mockPath}/${dirname}`)).forEach(
    filename => {
      const fileIndex = `${dirname}/${filename.split(".json")[0]}`;
      const filepath = path.resolve(
        __dirname,
        `${mockPath}/${dirname}/${filename}`
      );
      mockApiPaths.push(fileIndex);
      mockApiData[fileIndex] = require(filepath);
    }
  );
});

module.exports = {
  devServer: {
    compress: true,
    port: 9000,
    host: "0.0.0.0",
    historyApiFallback: true,
    hot: true,
    inline: true,
    open: true,
    before: function(app) {
      mockApiPaths.forEach(item => {
        app.all(`/api/${item}`, function(req, res) {
          setTimeout(() => {
            res.json(mockApiData[item]);
          }, 2000);
        });
      });
    }
  }
};
