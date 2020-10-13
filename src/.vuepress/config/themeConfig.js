module.exports = {
  repo: 'vue-a11y/website',
  docsDir: 'src',
  docsBranch: 'master',
  editLinks: true,
  lastUpdated: true,
  searchPlaceholder: 'Search (Press "s" to focus)',
  url: process.env.URL_BASE,
  mailchimp: process.env.MAILCHIMP_ENDPOINT,
  algolia: {
    indexName: 'vue-a11y',
    apiKey: process.env.ALGOLIA_KEY
  },
  webmentions: {
    active: true,
    endpoint: 'https://webmention.io/api/mentions.jf2?target=#URLPOST#'
  },
  colorMode: {
    defaultMode: 'light',
    className: 'mode-%cm',
    favicon: '#favicon',
    modes: [
      'light',
      'dark',
      'system',
      'sepia'
    ],
    metaThemeColor: {
      light: '#eef5f5',
      dark: '#212529',
      sepia: '#ebddbf'
    }
  },
  social: [
    {
      name: 'Twitter',
      icon: 'twitter',
      link: 'https://twitter.com/vue_a11y'
    },
    {
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/vue-a11y'
    }
  ],
  sponsors: require('./sponsors'),
  supporters: require('./supporters'),
  authors: require('./authors'),
  locales: {
    '/': require('./languages/en/themeLocaleConfig'),
    '/pt/': require('./languages/pt/themeLocaleConfig')
  }
}
