const path = require("path");
const webpack = require("webpack");

module.exports = {
  //   ! entry point for webpack (here is connected to the root for all components)
  entry: "./src/index.js",
  // ! production mode (deployed/test/development/etc.)
  mode: "development",
  // !
  module: {
    rules: [
      {
        // ! what files to use/check (javascript & jsx)
        test: /\.(js|jsx)$/,
        // ! don't check node modules
        exclude: /(node_modules)/,
        // ! package 'group' that compile/bundle code – see "https://webpack.js.org/loaders/"
        loader: "babel-loader",
        // ! additional config options
        options: { presets: ["@babel/env"] },
      },
      {
        // ! what files to use/check (css)
        test: /\.css$/,
        // ! package 'group' that compile/bundle code – see "https://webpack.js.org/loaders/"
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  // ! files to send to production browser ¿
  resolve: { extensions: ["*", ".js", ".jsx"] },
  //   ! where to send those
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    // ! what to call that file
    filename: "bundle.js",
  },
  // ! for dev server module (webpack-dev-server)
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true,
  },
  // ! enables "Hot Module Replacement" updates module without reloading
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
