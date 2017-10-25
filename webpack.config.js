const path = require('path');
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: 'client/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: {
    app: ['./client/index.tsx'],
  },
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      //   { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      //   { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.ts*/, loader: 'awesome-typescript-loader', exclude: /node_modules/, query: { configFileName: './tsconfig.json' } }
    ]
  },
  plugins: [
    // Don't proceed in generating code if there are errors
    new webpack.NoEmitOnErrorsPlugin(),

    // Show a nice progress bar on the console.
    new ProgressBarPlugin({ clear: false }),

    HtmlWebpackPluginConfig
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  }
}