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
      const path = require("path");
      const glob = require("glob");
      const mockApiData = getMockApiData();
      Object.keys(mockApiData).forEach(item => {
        app.all(`/api${item}`, function(req, res) {
          setTimeout(() => {
            res.json(mockApiData[item]);
          }, 1000);
        });
      });

      function getMockApiData() {
        let mockPaths = glob.sync("**/__mock__/**/*.json", {
          cwd: path.resolve(__dirname, "./src")
        });
        let mockApiData = {};
        mockPaths.forEach(mockPath => {
          console.log(mockPath);
          const fileIndex = /^__mock__(.+)\.json/.exec(mockPath)[1];
          const filepath = path.resolve(
            path.resolve(__dirname, "./src"),
            mockPath
          );
          mockApiData[fileIndex] = require(filepath);
        });
        return mockApiData;
      }
    }
  }
};
