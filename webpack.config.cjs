const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'public'),
        publicPath: '/public',
      },
      {
        directory: path.join(__dirname, 'view'),
        publicPath: '/view',
      },
      {
        directory: path.join(__dirname, 'src'),
        publicPath: '/src',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'public/chunk'),
    filename: '[name].[chunkhash].js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'template/index.html',
      filename: '../index.html',
    }),
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                "targets": "> 0.25%, not dead",
                "useBuiltIns": "usage",
                "corejs": "3.8.3",
              }
            ]
          ]
        }
      }
    }]
  }
};