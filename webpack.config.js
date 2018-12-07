var webpack = require('webpack')
module.exports = {
  entry: './index.js',
  output: {
    path: './dist',
    filename: 'vue-sessionstorage.min.js',
    library: 'VueSessionStorage',
    libraryTarget: 'amd'
  },
  module: {
    loaders: [
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}