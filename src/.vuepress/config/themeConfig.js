module.exports = {
  repo: 'vue-a11y/website',
  docsDir: 'src',
  docsBranch: 'master',
  editLinks: true,
  lastUpdated: true,
  searchPlaceholder: 'Search (Press "s" to focus)',
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
  authors: require('./authors'),
  locales: require('./translations/themeLocaleConfig')
}
