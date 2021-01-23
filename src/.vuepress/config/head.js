module.exports = [
  ['meta', { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' }],
  ['meta', { name: 'application-name', content: 'Vue A11y' }],
  ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  ['meta', { name: 'apple-mobile-web-app-title', content: 'Vue.js community effort to improve web accessibility.' }],
  ['meta', { name: 'theme-color', content: '#FBFCFC' }],
  ['meta', { name: 'msapplication-navbutton-color', content: '#41B883' }],
  ['meta', { name: 'mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],
  ['meta', { name: 'coverage', content: 'WorldWide' }],
  ['meta', { name: 'rating', content: 'general' }],
  ['meta', { name: 'msapplication-TileColor', content: '#FBFCFC' }],
  ['meta', { name: 'msapplication-TileImage', content: '/favicon/ms-icon-144x144.png' }],
  ['meta', { name: 'msapplication-config', content: '/browserconfig.xml' }],
  ['meta', { name: 'google-site-verification', content: 'MaDIE9Fijg7-DVWlElmQbfhqA18pvbLnJzNYX7NHmCo' }],

  // Twitter
  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { name: 'twitter:site', content: '@vue_a11y' }],
  ['meta', { name: 'twitter:title', content: 'Vue A11y' }],
  ['meta', { name: 'twitter:description', content: 'Vue.js community effort to improve web accessibility.' }],
  ['meta', { name: 'twitter:image', content: 'https://vue-a11y.com/img/social-share.png' }],

  // Facebook
  ['meta', { property: 'og:site_name', content: 'Vue A11y' }],
  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:image', content: '/img/social-share.png' }],
  ['meta', { property: 'og:image:type', content: 'image/png' }],
  ['meta', { property: 'og:image:width', content: '1200' }],
  ['meta', { property: 'og:image:height', content: '360' }],

  // Link
  ['link', { rel: 'author', href: '/humans.txt' }],
  ['link', { rel: 'author', href: 'https://twitter.com/ktquez' }],
  ['link', { rel: 'publisher', href: 'https://twitter.com/vue_a11y' }],

  // Webmention
  ['link', { rel: 'webmention', href: 'https://webmention.io/vue-a11y.com/webmention' }],
  ['link', { rel: 'pingback', href: 'https://webmention.io/vue-a11y.com/xmlrpc' }],

  // Apple icons
  ['link', { rel: 'apple-touch-icon', sizes: '57x57', href: '/favicon/apple-icon-57x57.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '60x60', href: '/favicon/apple-icon-60x60.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '72x72', href: '/favicon/apple-icon-72x72.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '76x76', href: '/favicon/apple-icon-76x76.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '114x114', href: '/favicon/apple-icon-114x114.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/favicon/apple-icon-120x120.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '144x144', href: '/favicon/apple-icon-144x144.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '152x152', href: '/favicon/apple-icon-152x152.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-icon-180x180.png' }],

  // Android icons
  ['link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon/android-icon-192x192.png' }],
  ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' }],
  ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon/favicon-96x96.png' }],
  ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' }],
  ['link', { rel: 'manifest', href: '/manifest.json' }],

  ['link', { rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: '#ff5733' }],
  ['link', { id: 'favicon', rel: 'icon', href: '/favicon/favicon.svg' }],

  // Pre-browsing
  ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com/' }],
  ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com/' }],
  ['link', { rel: 'preconnect', href: 'https://c.disquscdn.com/' }],
  ['link', { rel: 'preconnect', href: 'https://disqus.com/' }],
  ['link', { rel: 'preconnect', href: 'https://vue-a11y.disqus.com' }],
  ['link', { rel: 'preconnect', href: 'https://c.disquscdn.com/next/' }],
  ['link', { rel: 'preconnect', href: 'https://links.services.disqus.com/api/' }],
  ['link', { rel: 'preconnect', href: 'https://www.google-analytics.com/' }],
  ['link', { rel: 'preconnect', href: 'https://stats.g.doubleclick.net' }],

  ['script', {}, `
    (function () {
      const colorMode = localStorage.getItem('colorMode');
      const colorModePrefer = localStorage.getItem('colorModePrefer');
      document.documentElement.classList.add('mode-' + (colorMode === 'system' ? colorModePrefer : colorMode))
    })()
  `]
]
