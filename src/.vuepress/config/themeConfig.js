module.exports = {
  repo: 'vue-a11y/website',
  docsDir: 'src',
  docsBranch: 'master',
  editLinks: true,
  lastUpdated: true,
  searchPlaceholder: 'Search (Press "s" to focus)',
  url: process.env.URL_BASE,
  webmentions: {
    active: true,
    endpoint: 'https://webmention.io/api/mentions.jf2?target=#URLPOST#'
  },
  colorMode: {
    defaultMode: 'light',
    className: 'mode-%cm',
    favicon: '#favicon',
    metaThemeColor: {
      light: '#FBFCFC',
      dark: '#12181E'
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
  authors: require('./authors'),
  locales: require('./translations/themeLocaleConfig')
}
