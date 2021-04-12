const path = require('path')
const resolve = pathName => path.join(__dirname, pathName)

const blogConfig = {
  en: require('./languages/en/blog'),
  pt: require('./languages/pt/blog'),
  jp: require('./languages/jp/blog'),
}

const customBlock = {
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
  ],
  alert: [
    '<div class="custom-block alert" data-alert="%"><span class="custom-block-title">%</span>',
    '</div>'
  ],
  headerCode: [
    '<headerCodeSnippet info="%">',
    '</headerCodeSnippet>'
  ]
}

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
        blogConfig.en.posts,
        blogConfig.pt.posts,
        blogConfig.jp.posts
      ],
      frontmatters: [
        blogConfig.en.categories,
        blogConfig.pt.categories,
        blogConfig.jp.categories
      ]
    }
  ],
  ['@vuepress/nprogress'],
  [
    // https://github.com/IOriens/vuepress-plugin-canonical
    'vuepress-plugin-canonical', {
      baseURL: process.env.URL_BASE
    }
  ],
  [
    '@vuepress/google-analytics',
    {
      ga: 'UA-70393520-5'
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
          name: 'Post',
          path: resolve('../theme/layouts/Post')
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
      before: customBlock.bq[0],
      after: customBlock.bq[1]
    }
  ],
  [
    'vuepress-plugin-container',
    {
      type: 'fig',
      before: info => customBlock.fig[0].replace('%', info),
      after: customBlock.fig[1]
    }
  ],
  [
    'vuepress-plugin-container',
    {
      type: 'headerCode',
      before: info => customBlock.headerCode[0].replace('%', info === 'HEADERCODE' ? '' : info),
      after: customBlock.headerCode[1]
    }
  ],
  [
    'vuepress-plugin-container',
    {
      type: 'figcap',
      before: customBlock.figcap[0],
      after: customBlock.figcap[1]
    }
  ],
  [
    'vuepress-plugin-container',
    {
      type: 'alert',
      before: info => customBlock.alert[0].replace(/(%)/g, info),
      after: info => customBlock.alert[1]
    }
  ]
]
