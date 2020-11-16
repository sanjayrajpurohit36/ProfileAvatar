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
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      // {
      //   enforce: "pre",
      //   test: /\.js$/,
      //   loader: "source-map-loader",
      // },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8000,
    stats: "minimal",
  },
  externals: {
    react: "react",
  },
};
