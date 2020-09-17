module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  configureWebpack: {
    optimization: {
      splitChunks: {
        cacheGroups: {
          node_vendors: {
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
            priority: 1
          }
        },
        minSize: 10000,
        maxSize: 200000,
      }
    }
  }
}
