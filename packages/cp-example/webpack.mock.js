import webpackMockServer from "webpack-mock-server";
import path from "path";
import glob from "glob";

export default webpackMockServer.add((app, helper) => {
  function getMockApiPath() {
    let mockPaths = glob.sync("**/mock/**/*.json", {
      cwd: path.resolve(__dirname, "./src")
    });
    let mockApiPath = {};
    mockPaths.forEach(mockPath => {
      const fileIndex = /mock(.+)\.json/.exec(mockPath)[1];
      const filepath = path.resolve(
        path.resolve(__dirname, "./src"),
        mockPath
      );
      mockApiPath[fileIndex] = filepath;
    });
    return mockApiPath;
  }

  const mockApiPath = getMockApiPath();
  Object.keys(mockApiPath).forEach(item => {
    app.all(`/api${item}`, function(req, res) {
      res.sendFile(mockApiPath[item]); // ok, when file change, it update
      res.json(require(mockApiPath[item])); // not ok, when file change, it not update
    });
  });
});
