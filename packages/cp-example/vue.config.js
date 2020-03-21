const webpackMockServer = require("webpack-mock-server");
module.exports = {
  publicPath: "./",
  assetsDir: "static",
  devServer: {
    compress: true,
    port: 9000,
    host: "0.0.0.0",
    historyApiFallback: true,
    hot: true,
    inline: true,
    open: true,
    before: app => webpackMockServer.use(app, {
      port: 8079,
      entry: ["webpack.mock.js"],
      tsConfigFileName: "jsconfig.json"
    })
  }
};
