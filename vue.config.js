
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Ezra Toga | Personal Resume & Portofolio'; // Set your desired title here
      return args;
    });
  },
  devServer: {
    port: 4444 // Set your desired port number here
  },
  publicPath: '/'
})
