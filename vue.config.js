const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    windicss: {
      // hier kan je WindiCSS opties toevoegen als je wilt
    },
  },
})
