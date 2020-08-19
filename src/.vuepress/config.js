require('dotenv').config()
const path = require('path')
const webpack = require('webpack')

const head = require('./config/head')
const locales = require('./config/locales')
const plugins = require('./config/plugins')
const postcss = require('./config/postcss')
const themeConfig = require('./config/themeConfig')

const resolve = pathName => path.join(__dirname, pathName)

module.exports = {
  base: '/',
  title: 'Vue a11y',
  description: 'Vue.js community project to improve web accessibility.',
  evergreen: true,
  serviceWorker: true,
  head,
  plugins,
  postcss,
  locales,
  themeConfig,
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
