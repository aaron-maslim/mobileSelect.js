const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: "./js/mobile-select.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "mobile-select.js",
    library: "mobile-select",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "mobile-select.css",
      chunkFilename: "mobile-select-[id].css"
    })
  ],
};
