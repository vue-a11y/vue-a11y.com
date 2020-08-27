const path = require('path')
const resolve = pathName => path.join(__dirname, pathName)

module.exports = [
  [
    // https://github.com/vuepressjs/vuepress-plugin-blog
    '@vuepress/blog',
    {
      sitemap: {
        hostname: process.env.URL_BASE
      },
      feed: {
        canonical_base: process.env.URL_BASE
      },
      globalPagination: {
        lengthPerPage: process.env.PAGINATION_PER_PAGE
      },
      directories: [
        {
          id: 'Post',
          title: 'All posts - Vue A11y',
          layout: 'Posts',
          itemLayout: 'Full',
          dirname: 'posts',
          path: '/posts/',
          itemPermalink: '/posts/:slug',
          pagination: {
            layout: 'Posts',
            prevText: '<<',
            nextText: '>>',
            getPaginationPageTitle (pageNumber) {
              return `All posts - Vue A11y - page ${pageNumber}`
            }
          }
        }
      ],
      frontmatters: [
        {
          id: 'categories',
          keys: ['category', 'categories'],
          title: 'category - Vue A11y',
          scopeLayout: 'Posts',
          path: '/category/',
          pagination: {
            layout: 'Posts',
            getPaginationPageTitle (pageNumber, key) {
              return `Category: ${key} - Vue A11y - page ${pageNumber}`
            }
          }
        }
      ]
    }
  ],
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
        },
        {
          name: 'Posts',
          path: resolve('../theme/layouts/Posts')
        }
      ]
    }
  ],
  // https://vuepress.vuejs.org/plugin/official/plugin-last-updated.html
  ['@vuepress/last-updated']
]
