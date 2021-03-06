var path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/server/server",
  devtool: "source-map",
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server-bundle.js",
  },
  resolve: {
    extensions: [".wasm", ".mjs", ".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [new webpack.IgnorePlugin({ resourceRegExp: /^pg-native$/ })],
};
