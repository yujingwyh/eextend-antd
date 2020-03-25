const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");

const nodeModules = path.resolve(__dirname, "node_modules");
const srcModules = path.resolve(__dirname, "src");

const webpackConfig = {
  mode: 'development',
  entry: ["babel-polyfill", "./src/app.jsx"],
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
    publicPath: "/",
    chunkFilename: "[name].chunk.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /(node_modules)/
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true,
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|xls|xlsx|mp3)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',

      "antd/lib/col$": path.resolve(__dirname, "src/antd/col")
    },
    modules: [nodeModules, srcModules],
    extensions: [".jsx", ".js", ".ts", ".tsx", ".json"],
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    contentBase: "./dist/",
    inline: true,
    hot: true,
    port: 8000,
    open: true,
    publicPath: "/",
  },
  watchOptions: {
    ignored: /node_modules/
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "../dist/index.html",
      template: "./src/app.ejs",
      inject: true,
      alwaysWriteToDisk: true,
      minify: {
        removeComments: false,
        collapseWhitespace: false,
        minifyJS: false,
        minifyCSS: false
      }
    }),
    new HtmlWebpackHarddiskPlugin(),
  ]
};

module.exports = webpackConfig;
