const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = function typescriptModule() {
  this.nuxt.options.extensions.push('ts')

  this.extendBuild(config => {
    const tsLoader = {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
        appendTsSuffixTo: [/\.vue$/]
      }
    }

    config.resolve.extensions.unshift('.ts')

    config.module.rules.push(
      Object.assign(
        {
          test: /\.ts$/
        },
        tsLoader
      )
    )

    for (const rule of config.module.rules) {
      if (rule.loader === 'vue-loader') {
        rule.options.loaders.ts = tsLoader
      }
    }

    config.plugins.push(
      new ForkTsCheckerWebpackPlugin({
        vue: true
      })
    )
  })
}
