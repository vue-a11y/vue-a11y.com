const path = require('path')
const resolve = pathName => path.join(__dirname, pathName)

const customBlockTags = {
  fig: [
    '<figure class="custom-block figure" data-type="%">',
    '</figure>'
  ],
  figcap: [
    '<figcaption>',
    '</figcaption>'
  ],
  bq: [
    '<blockquote class="custom-block blockquote">',
    '</blockquote>'
  ]
}

module.exports = [
  [
    // https://github.com/vuepressjs/vuepress-plugin-blog
    '@vuepress/blog',
    {
      comment: {
        service: 'disqus'
      },
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
          title: 'All posts',
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
              return `All posts - page ${pageNumber}`
            }
          }
        }
      ],
      frontmatters: [
        {
          id: 'categories',
          keys: ['category', 'categories'],
          title: 'category',
          scopeLayout: 'Posts',
          path: '/category/',
          pagination: {
            layout: 'Posts',
            getPaginationPageTitle (pageNumber, key) {
              return `Category: ${key} - page ${pageNumber}`
            }
          }
        }
      ]
    }
  ],
  // https://github.com/billyyyyy3320/vuepress-plugin-mailchimp
  [
    'mailchimp', {
      endpoint: process.env.MAILCHIMP_ENDPOINT
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
  ['@vuepress/last-updated'],
  [
    'vuepress-plugin-container',
    {
      type: 'bq',
      before: customBlockTags.bq[0],
      after: customBlockTags.bq[1]
    }
  ],
  [
    'vuepress-plugin-container',
    {
      type: 'fig',
      before: info => {
        const fig = customBlockTags.fig[0].replace('%', info)
        const custom = customBlockTags[info]
        if (!custom) return fig
        return fig + custom[0]
      },
      after: info => {
        const fig = customBlockTags.fig[1]
        const custom = customBlockTags[info]
        if (!custom) return fig
        return custom[1] + fig
      }
    }
  ],
  [
    'vuepress-plugin-container',
    {
      type: 'headerCode',
      before: info => `<headerCodeSnippet info="${info}">`,
      after: '</headerCodeSnippet>'
    }
  ],
  [
    'vuepress-plugin-container',
    {
      type: 'figcap',
      before: customBlockTags.figcap[0],
      after: customBlockTags.figcap[1]
    }
  ],
  [
    'vuepress-plugin-container',
    {
      type: 'alert',
      before: info => `<div class="custom-block alert" data-alert="${info}"><span class="custom-block-title">${info}</span>`,
      after: '</div>'
    }
  ]
]
