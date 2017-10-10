const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");

const distDir = path.resolve(__dirname, "dist");

const config = {
  entry: "./src/main.ts",
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  devtool: "source-map",
  output: {
    path: distDir,
    filename: "main_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  },
  devServer: {
    contentBase: "./dist"
  },

  plugins: [
    new CleanWebpackPlugin([distDir]),
    new HtmlWebpackPlugin({
      template: "src/index.html"
    })
  ]
};

if (process.env.NODE_ENV === "production") {
  config.plugins.push(
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  );
  config.plugins.push(new UglifyJSPlugin({ sourceMap: true }));
}

module.exports = config;
