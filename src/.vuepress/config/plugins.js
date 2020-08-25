const path = require('path')
const resolve = pathName => path.join(__dirname, pathName)

module.exports = [
  // https://vuepress.vuejs.org/plugin/official/plugin-pwa.html
  [
    '@vuepress/pwa',
    {
      serviceWorker: true,
      updatePopup: false
    }
  ],
  // https://vuepress.vuejs.org/plugin/official/plugin-search.html
  [
    '@vuepress/search',
    {
      searchMaxSuggestions: 10
    }
  ],
  // https://github.com/ntnyq/vuepress-plugin-svg-icons
  [
    '@goy/svg-icons',
    {
      svgsDir: resolve('../theme/assets/sprite/svg')
    }
  ],
  // https://vuepress.vuejs.org/plugin/official/plugin-register-components.html
  [
    '@vuepress/register-components', {
      componentsDir: resolve('../theme/views'),
      components: [
        {
          name: 'Full',
          path: resolve('../theme/layouts/Full')
        }
      ]
    }
  ],
  // https://vuepress.vuejs.org/plugin/official/plugin-last-updated.html
  ['@vuepress/last-updated']
]
