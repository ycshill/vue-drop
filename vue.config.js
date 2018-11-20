const PreloadPlugin = require('preload-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  pages: {
    index: {
      entry: './src/index.js',
      // template: '',
      chunks: false,
      excludeChunks: ['./src/index.js'],
      // chunks: [''],
      // excludeChunks: ['index.js'],
    },
  },
  filenameHashing: false,
  productionSourceMap: false,
  configureWebpack: (config) => {
    console.log(config);
  },
  // configureWebpack: {
  //   module: {
  //     plugins: [
  //       // new HtmlWebpackPluin({}),
  //     ],
  //   },
  // },
  // chainWebpack: config => {
  //   console.log(config);
  // },
};
