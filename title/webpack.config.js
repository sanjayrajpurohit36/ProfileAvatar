const path = require("path");

module.exports = {
  entry: "./src/index.js",
  devtool: "source-map",
  output: {
    path: path.resolve("build"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "url-loader"],
      },
      // will be useful if we have only css files
      // {
      //   test: /\.css$/,
      //   use: ["style-loader", "css-loader"],
      // },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
};
