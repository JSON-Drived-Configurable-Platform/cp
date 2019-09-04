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
      const fs = require("fs");
      const path = require("path");

      const mockPaths = getTemplatesMockPaths();
      const mockApiData = getMockApiData(mockPaths);

      Object.keys(mockApiData).forEach(item => {
        app.all(`/api/${item}`, function(req, res) {
          setTimeout(() => {
            res.json(mockApiData[item]);
          }, 1000);
        });
      });

      function getTemplatesMockPaths() {
        return ["./src/__mock__", "./src/page/data-report/__mock__"];
      }

      function getMockApiData(mockPaths) {
        let mockApiData = {};
        mockPaths.forEach(mockPath => {
          fs.readdirSync(path.resolve(__dirname, mockPath)).forEach(dirname => {
            fs.readdirSync(
              path.resolve(__dirname, `${mockPath}/${dirname}`)
            ).forEach(filename => {
              const fileIndex = `${dirname}/${filename.split(".json")[0]}`;
              const filepath = path.resolve(
                __dirname,
                `${mockPath}/${dirname}/${filename}`
              );
              mockApiData[fileIndex] = require(filepath);
            });
          });
        });
        return mockApiData;
      }
    }
  }
};
