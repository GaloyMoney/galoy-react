const path = require("path")
const fs = require("fs")
const webpack = require("webpack")

const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const config = (env) => ({
  devtool: env.dev ? "inline-source-map" : false,
  resolve: {
    modules: [path.resolve("./src"), path.resolve("./node_modules")],
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  entry: {
    index: ["./src/css.tsx"],
  },
  output: {
    path: path.resolve("styles"),
    publicPath: "@galoymoney/react/styles/",
    filename: "[name].js",
    assetModuleFilename: "images/[name][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: { configFile: "tsconfig.json" },
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader?url=false",
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
  plugins: [
    new webpack.ProvidePlugin({ Buffer: ["buffer", "Buffer"] }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(env.dev ? "development" : "production"),
    }),
    new MiniCssExtractPlugin({ filename: "[name].css" }),
  ],
})

module.exports = config
