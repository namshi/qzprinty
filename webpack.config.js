const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'build.js',
      library: 'qzPrinty',
      libraryTarget: 'umd'
  },
  devtool: 'source-map',
  mode: 'production'
};