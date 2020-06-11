const path = require("path");
const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");
// const nodeExternals = require('webpack-node-externals');
module.exports = {
  devtool: "inline-source-map",
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        loader: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "img/[name].[hash:7].[ext]",
        },
      },
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    contentBase: "./build",
    port: 3000,
    inline: true,
    hot: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: {
          "^/api": "/static/mock",
        },
        ws: true,
        changeOrigin: true, // 允许 ws跨域
      },
    },
  },
  // externals: [nodeExternals()],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlPlugin({
      template: "src/index.html",
    }),
  ],
};
