'use strict';

module.exports = {
  context: __dirname + '/src/js',
  entry: './main.js',
  output: {
    path: __dirname + '/build',
    filename: './js/[name].js'
  },

  watch: true,

  module: {

    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
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
        loader: 'file?name=[name].[ext]'
      }
    ]
  },

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: 'cheap-inline-module-source-map'
};
