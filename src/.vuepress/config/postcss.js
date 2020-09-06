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
        'figure',
        'code',
        'small',
        'kbd',
        'app',
        'mode-dark',
        'mode-sepia',
        'icon',
        'outbound'
      ],
      whitelistPatterns: [
        /set-/
      ],
      whitelistPatternsChildren: [
        /content__default$/,
        /nprogress$/,
        /search-box$/,
        /custom-block$/
      ],
      content: ['./src/.vuepress/**/*.vue'],
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    })
  )
}

module.exports = {
  plugins
}
