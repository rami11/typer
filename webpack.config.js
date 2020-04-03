const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/main/app.js",
  devServer: {
    port: 8080,
    host: "0.0.0.0",
    open: true,
    contentBase: "./dist"
  },
  devtool: "source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};
