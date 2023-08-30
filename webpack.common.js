const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src", "app.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/i,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.((c|sa|sc)ss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("postcss-preset-env")],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|webp|jpeg)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/img/[name][ext]",
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/assets/img/books", to: "assets/img/books" },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    new FaviconsWebpackPlugin({
      logo: "./src/assets/img/favicon.png",
      mode: "webapp",
      devMode: "webapp",
      prefix: "assets/img/",
      favicons: {
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          coast: false,
          firefox: false,
          windows: false,
          yandex: false,
          favicons: true,
        },
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new CleanWebpackPlugin(),
  ],
};
