'use strict';

var HtmlWebpackPlugin = require('html-webpack-plugin');
const htmls = ['index.html', 'results.html', 'teams.html', 'game.html'];

const htmlsPlugins = htmls.map((name) => {
  return new HtmlWebpackPlugin({
    filename: name,
    template: `../${name}`,
    inject: false
  });
});

module.exports = {
  context: __dirname + '/src/js',
  entry: './main.js',
  output: {
    path: __dirname + '/build',
    publicPath: '',
    filename: './js/[name].js'
  },
  devServer: {
    host: 'localhost', // default
    port: 8080, // default
    contentBase: './build',
    historyApiFallback: true
  },
  plugins: [
    ...htmlsPlugins
  ],
  watch: true,
  module: {

    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.sass$/,
        loader: 'style?singleton!css?autoprefixer-loader?browsers=last 2 version!sass?indentedSyntax'
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'file?name=fonts/[name].[ext]'
      },
      {
        test: /\.(svg|png|jpg)$/,
        loader: 'file?name=img/[name].[ext]'
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: 'eval-source-map'
};
