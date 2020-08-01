import webpackMockServer from "webpack-mock-server";
import path from "path";
import glob from "glob";

export default webpackMockServer.add((app, helper) => {
  app.all('/api/*', function(req, res) {
    function getMockApiPath() {
      let mockPaths = glob.sync("**/mock/**/*.js", {
        cwd: path.resolve(__dirname, "./src")
      });
      let mockApiPath = {};
      mockPaths.forEach(mockPath => {
        const fileIndex = /mock(.+)\.js/.exec(mockPath)[1];
        const filepath = path.resolve(
          path.resolve(__dirname, "./src"),
          mockPath
        );
        mockApiPath[fileIndex] = filepath;
      });
      return mockApiPath;
    }

    const mockApiPath = getMockApiPath();
    const url = req.url
    Object.keys(mockApiPath).forEach(item => {
      const strPath = mockApiPath[item];
      if (url.indexOf(item) > 0) {
        // removing NodeJs require-cache
        delete require.cache[require.resolve(strPath)];
        res.json(require(strPath));
      }
    });
  });
});
