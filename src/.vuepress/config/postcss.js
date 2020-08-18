const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')

const plugins = [
  tailwindcss('./tailwind.config.js'),
  autoprefixer()
]

if (process.env.NODE_ENV !== 'development') {
  plugins.push(
    require('@fullhuman/postcss-purgecss')({
      whitelist: [
        'html',
        'body',
        'app',
        'mode-dark',
        'icon',
        'outbound'
      ],
      whitelistPatterns: [],
      whitelistPatternsChildren: [
        /content__default$/,
        /nprogress$/
      ],
      content: ['./src/.vuepress/**/*.vue'],
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    })
  )
}

module.exports = {
  plugins
}
