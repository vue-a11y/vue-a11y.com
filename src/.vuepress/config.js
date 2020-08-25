require('dotenv').config()
const path = require('path')
const webpack = require('webpack')

const resolve = pathName => path.join(__dirname, pathName)

module.exports = {
  base: '/',
  evergreen: true,
  serviceWorker: true,
  head: require('./config/head'),
  plugins: require('./config/plugins'),
  postcss: require('./config/postcss'),
  locales: require('./config/translations/localeConfig'),
  themeConfig: require('./config/themeConfig'),
  markdown: {
    anchor: {
      permalinkAttrs: () => ({ 'aria-hidden': 'true' })
    }
  },
  configureWebpack () {
    return {
      plugins: [
        new webpack.EnvironmentPlugin({ ...process.env })
      ],
      resolve: {
        alias: {
          '@': resolve('.')
        }
      }
    }
  }
}
