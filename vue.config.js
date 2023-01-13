const GLOBAL_CSS_REGEXP = /\.global\.css$/

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // css: {
  //   loaderOptions: {
  //     css: {
  //       modules: {
  //         mode: 'local',
  //         localIdentName: '[name]__[local]--[hash:base64:5]',
  //       },
  //     },
  //   },
  // },
})
