module.exports = [
  ['meta', { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' }],
  ['meta', { charset: 'utf-8' }],
  ['meta', { name: 'application-name', content: 'Vue A11y' }],
  ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, minimal-ui, shrink-to-fit=no' }],
  ['meta', { name: 'theme-color', content: '#ffffff' }],
  ['meta', { name: 'msapplication-navbutton-color', content: '#ffffff' }],
  ['meta', { name: 'mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],
  ['meta', { name: 'coverage', content: 'WorldWide' }],
  ['meta', { name: 'rating', content: 'general' }],
  ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
  ['meta', { name: 'msapplication-TileImage', content: '/favicon/ms-icon-144x144.png' }],
  ['meta', { name: 'msapplication-config', content: '/browserconfig.xml' }],
  
  // Twitter
  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { name: 'twitter:site', content: '@vue_a11y' }],
  ['meta', { vmid: 'twitter-image', name: 'twitter:image', content: ''}],

  // Link
  ['link', { href: "//cdn-images.mailchimp.com/embedcode/classic-10_7.css", rel: "stylesheet", type: "text/css" }],
  ['link', { rel: 'apple-touch-icon', sizes: '57x57', href: '/favicon/apple-icon-57x57.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '60x60', href: '/favicon/apple-icon-60x60.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '72x72', href: '/favicon/apple-icon-72x72.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '76x76', href: '/favicon/apple-icon-76x76.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '114x114', href: '/favicon/apple-icon-114x114.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/favicon/apple-icon-120x120.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '144x144', href: '/favicon/apple-icon-144x144.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '152x152', href: '/favicon/apple-icon-152x152.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-icon-180x180.png' }],
  ['link', { rel: 'icon', type: 'image/png', sizes: '192x192' , href: '/favicon/android-icon-192x192.png' }],
  ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' }],
  ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon/favicon-96x96.png' }],
  ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' }],
  ['link', { rel: 'manifest', href: '/manifest.json' }],

  // Script
  ['script', { type: 'text/javascript', async: true, src: '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js' }],
  ['script', { type: 'text/javascript', async: true, inner: "(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[1]='MMERGE1';ftypes[1]='text';fnames[0]='EMAIL';ftypes[0]='email';}(jQuery));var $mcj = jQuery.noConflict(true);" }]
]
