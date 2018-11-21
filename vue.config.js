module.exports = {
  pages: {
    index: {
      entry:
        process.env.NODE_ENV === 'development'
          ? './examples/index.js'
          : './src/components/drop',
    },
  },
  filenameHashing: false,
  productionSourceMap: false,
  configureWebpack: config => {
    config.module.rules.forEach(item => {
      if (item.test.toString() === '/\\.jsx?$/') {
        item.exclude = [() => ['./dist/', 'node_modules']];
      }
    });
    if (process.env.NODE_ENV === 'production') {
      config.output = Object.assign(config.output, {
        filename: 'vue-drop.js',
        // library: 'vue-drop', // 指定的就是你使用require时的模块名
        libraryTarget: 'umd', // libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的
        // umdNamedDefine: true,
      });
    }
  },
  chainWebpack: config => {
    config.module.rule('eslint').exclude.add('/dist/').end();
    if (process.env.NODE_ENV === 'production') {
      config.optimization.delete('splitChunks');
      ['html-index', 'preload-index', 'prefetch-index'].forEach(item => {
        config.plugins.delete(item);
      });
    }
  },
};
