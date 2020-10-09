/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5c10a4797f4957b631d68d37e8fae53d"
  },
  {
    "url": "assets/css/0.styles.e3894ddb.css",
    "revision": "0f9cec64c7393a9442495a515c860c01"
  },
  {
    "url": "assets/fonts/hack-regular.3eccb984.woff2",
    "revision": "3eccb984a54973a75212391b6d117ace"
  },
  {
    "url": "assets/fonts/hack-regular.b038bd31.woff",
    "revision": "b038bd31fef76bc622d123ae8892efa2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.e1d63c4c.js",
    "revision": "558e5f7a60da9ec37717b74b03401899"
  },
  {
    "url": "assets/js/10.45eba929.js",
    "revision": "1f103036dc6484fdf9fc3bd424f6f8b3"
  },
  {
    "url": "assets/js/11.c01bda76.js",
    "revision": "7601fbdb83740530d134bf842a333875"
  },
  {
    "url": "assets/js/12.99650e1b.js",
    "revision": "2172610ae317b389f43564302b93c6fb"
  },
  {
    "url": "assets/js/13.2a87cfae.js",
    "revision": "19300b56bca36f896ca10db96a61f2a5"
  },
  {
    "url": "assets/js/14.7316295a.js",
    "revision": "99b23d3f79eace673788843338760851"
  },
  {
    "url": "assets/js/15.6f2cae5d.js",
    "revision": "d9883e0d312bc2764577a2b39e81cc8e"
  },
  {
    "url": "assets/js/16.3c54a8b0.js",
    "revision": "e43385330349f52fab49035375f69cfd"
  },
  {
    "url": "assets/js/17.521cbdd2.js",
    "revision": "89be13fed5a72cbeae1aa593bbc9521f"
  },
  {
    "url": "assets/js/18.75c28672.js",
    "revision": "fe6090694d11bd28c1525a4da545f971"
  },
  {
    "url": "assets/js/19.f43b0dca.js",
    "revision": "df514b14af13af5453105a4290072099"
  },
  {
    "url": "assets/js/2.de35db4d.js",
    "revision": "51df70b7749ffa3ed3e6a3a78eed703d"
  },
  {
    "url": "assets/js/20.0b82e94c.js",
    "revision": "a3e03a2182dfce9a90d677e4a7252f34"
  },
  {
    "url": "assets/js/21.8ddffd0e.js",
    "revision": "e7cc6d200fd8e9b1ae637299c6d2cc1f"
  },
  {
    "url": "assets/js/22.81007db3.js",
    "revision": "076c296e191ceee2bd79555c218e9668"
  },
  {
    "url": "assets/js/23.1923f682.js",
    "revision": "fc1a5eba21e7e8bcb3de35215096be7b"
  },
  {
    "url": "assets/js/24.3cda73ae.js",
    "revision": "172e6108525535654e66267407f973be"
  },
  {
    "url": "assets/js/25.b17c46d7.js",
    "revision": "043a4fbb440bfc50fb475fd66c07dce2"
  },
  {
    "url": "assets/js/26.a234af21.js",
    "revision": "6acdd91577e2a83945c9861b99f0b44c"
  },
  {
    "url": "assets/js/27.2b019f42.js",
    "revision": "e5173e372fca74184feb458b9dc78c3b"
  },
  {
    "url": "assets/js/28.24918687.js",
    "revision": "adf0ca4e20a9f339b1ec5b228ccc4d28"
  },
  {
    "url": "assets/js/29.2d0d1ffc.js",
    "revision": "861baa07dcb970edc5df662ba5df2b77"
  },
  {
    "url": "assets/js/3.1bd8a596.js",
    "revision": "396f01995ce1b28502b6e49e5abe1160"
  },
  {
    "url": "assets/js/30.b9c8749c.js",
    "revision": "aaa2737a8c254be676ddc52cae284975"
  },
  {
    "url": "assets/js/31.4d7d8488.js",
    "revision": "7ea7f8ad1ddcb9c2e1b42804b8a6f40d"
  },
  {
    "url": "assets/js/32.a7abbd94.js",
    "revision": "c7edd49d3b36eb7d034380c1c6beb606"
  },
  {
    "url": "assets/js/33.9ccb1b39.js",
    "revision": "5004ef2ceb2d1a719459febf5f80f246"
  },
  {
    "url": "assets/js/34.d171a1f9.js",
    "revision": "b2250b5b9bd2e6d4ea92c397ecd283ce"
  },
  {
    "url": "assets/js/35.b04e2e5f.js",
    "revision": "3fb8a16b25a2476f1bec140fe30bc941"
  },
  {
    "url": "assets/js/36.a5c31249.js",
    "revision": "634ad641c57cc806b379860355ccfefc"
  },
  {
    "url": "assets/js/37.a9221328.js",
    "revision": "05f873d2438541523eafa47be420f512"
  },
  {
    "url": "assets/js/38.41ec0647.js",
    "revision": "8d16197a9aa438fea9598a15feade9eb"
  },
  {
    "url": "assets/js/39.030ea117.js",
    "revision": "faccb36f4e5e5b22a863f6da3946774a"
  },
  {
    "url": "assets/js/40.3feb2889.js",
    "revision": "59d6fe805bce7edb454c973b503ef912"
  },
  {
    "url": "assets/js/41.47aafdf8.js",
    "revision": "19ef548922e5607075eaece62dc6a7f0"
  },
  {
    "url": "assets/js/42.937c384e.js",
    "revision": "2e75d032fc0c3a03dfff8955bebdbe8a"
  },
  {
    "url": "assets/js/43.490f1f71.js",
    "revision": "0ebc70c949b5b6e388552fc8f85d98bb"
  },
  {
    "url": "assets/js/44.5162bc22.js",
    "revision": "7f10e5e6a0c28098e6d32acf8f110767"
  },
  {
    "url": "assets/js/45.42b4214b.js",
    "revision": "408ce4666ae8991211a5761ea4792b72"
  },
  {
    "url": "assets/js/46.5ff1b7b9.js",
    "revision": "0271d55c49e98211f12ee56d0cbf11dd"
  },
  {
    "url": "assets/js/47.52200f16.js",
    "revision": "6e9e4878114c609c44be37bed7f6e254"
  },
  {
    "url": "assets/js/48.1cfdf88f.js",
    "revision": "2f63fa3ce1fd5539995487ac1b7325a1"
  },
  {
    "url": "assets/js/49.dd1d6545.js",
    "revision": "a83eb6d1a5519ad88abb0c447ee2e659"
  },
  {
    "url": "assets/js/50.92dab720.js",
    "revision": "b889c2de72590b67806be44e6eaf4515"
  },
  {
    "url": "assets/js/51.8812596d.js",
    "revision": "13312f9788e09cd71ed478304bb5cd1c"
  },
  {
    "url": "assets/js/52.e4d136be.js",
    "revision": "c7d2059718d93f016889fa91f1261d3c"
  },
  {
    "url": "assets/js/53.81240672.js",
    "revision": "cf0a648a97a36f461111f1435cc02d5c"
  },
  {
    "url": "assets/js/54.2154be46.js",
    "revision": "72b06051b379dccfc93e2c7c6e9d59a7"
  },
  {
    "url": "assets/js/55.41deb9e7.js",
    "revision": "c58518440d5f4e83e55be199944ff870"
  },
  {
    "url": "assets/js/56.bce8e17c.js",
    "revision": "af7322bc9d4b0ff1e343bbff23bb6f44"
  },
  {
    "url": "assets/js/6.a302ff91.js",
    "revision": "9209b74f31d968297e20c350cec0f063"
  },
  {
    "url": "assets/js/7.41ea8a9f.js",
    "revision": "151d9978be418e6caa13eacc1889824d"
  },
  {
    "url": "assets/js/8.1f57ce48.js",
    "revision": "b149e419e7fb0e5e426d5ba4b4833148"
  },
  {
    "url": "assets/js/9.c8c27c24.js",
    "revision": "de17828a68f8e36f5a72d33cc1f89eb6"
  },
  {
    "url": "assets/js/app.38865e0c.js",
    "revision": "f7ea3667ef9135504904ee7120e91169"
  },
  {
    "url": "assets/js/vuejs-paginate.1e4ded1a.js",
    "revision": "1e979a049cf867ecd78309dbb18c7bee"
  },
  {
    "url": "category/aria/index.html",
    "revision": "e01dccd7fd8147a007114101bc86cabd"
  },
  {
    "url": "category/html/index.html",
    "revision": "b47013c5b96322706a56b599f1b10e4e"
  },
  {
    "url": "category/index.html",
    "revision": "bd745114c84da43409714c030b7a3761"
  },
  {
    "url": "category/news/index.html",
    "revision": "648587054ebed2c4e393a71d5b3abc39"
  },
  {
    "url": "category/packages/index.html",
    "revision": "429638ef2e7e96ac60d88bc6453ef662"
  },
  {
    "url": "category/spa/index.html",
    "revision": "acc7c33de1033e81912d828402d7c358"
  },
  {
    "url": "category/tools/index.html",
    "revision": "5152616c7c643f6fcf9d62b6e7d77084"
  },
  {
    "url": "category/wcag/index.html",
    "revision": "be006580299fc766640a3e555d0d10a5"
  },
  {
    "url": "favicon/android-chrome-192x192.png",
    "revision": "1782f66d1d712bbfb3b0a6accaf14b61"
  },
  {
    "url": "favicon/android-chrome-512x512.png",
    "revision": "107ba7bfa233a02e456ecbd377351200"
  },
  {
    "url": "favicon/android-icon-144x144.png",
    "revision": "bff9d46bd0da67bcec205801006122ce"
  },
  {
    "url": "favicon/android-icon-192x192.png",
    "revision": "67091a73dd0578195bea9e1600fdaa78"
  },
  {
    "url": "favicon/android-icon-36x36.png",
    "revision": "7504fb5fd1d905f97387b07e780e8b9a"
  },
  {
    "url": "favicon/android-icon-48x48.png",
    "revision": "36015161d212962d25e0be419020783e"
  },
  {
    "url": "favicon/android-icon-72x72.png",
    "revision": "aa15fbaa6281583513e3135905a5ea93"
  },
  {
    "url": "favicon/android-icon-96x96.png",
    "revision": "619a75cf1fca7732f351aa93375c4313"
  },
  {
    "url": "favicon/apple-icon-114x114.png",
    "revision": "af1d5e772b24a01869bda0a0877a3ceb"
  },
  {
    "url": "favicon/apple-icon-120x120.png",
    "revision": "a9125a872328763314383aaba8153f4a"
  },
  {
    "url": "favicon/apple-icon-144x144 (1).png",
    "revision": "5c97717db04a732c917f4d4e2476e8c9"
  },
  {
    "url": "favicon/apple-icon-144x144.png",
    "revision": "5c97717db04a732c917f4d4e2476e8c9"
  },
  {
    "url": "favicon/apple-icon-152x152.png",
    "revision": "e4bd12a704fcfb92ce2aee28a50e84e7"
  },
  {
    "url": "favicon/apple-icon-180x180.png",
    "revision": "eb41c1f94a5fb3ab428ddcdf4a8cc005"
  },
  {
    "url": "favicon/apple-icon-57x57.png",
    "revision": "06bf3fa81ae10076da1e7affcaab57ad"
  },
  {
    "url": "favicon/apple-icon-60x60.png",
    "revision": "948f74e1033c6859e285828fd27491dd"
  },
  {
    "url": "favicon/apple-icon-72x72.png",
    "revision": "14008ff8c9c3b39373b09b659435721a"
  },
  {
    "url": "favicon/apple-icon-76x76.png",
    "revision": "0211ba409650ad1e9738f193ed904f3d"
  },
  {
    "url": "favicon/apple-icon-precomposed.png",
    "revision": "f82168a6e54a5c63508d2863e252df5f"
  },
  {
    "url": "favicon/apple-icon.png",
    "revision": "85cd1941704154efb753df3a6c0d62b2"
  },
  {
    "url": "favicon/apple-touch-icon.png",
    "revision": "eb41c1f94a5fb3ab428ddcdf4a8cc005"
  },
  {
    "url": "favicon/favicon-16x16.png",
    "revision": "4a26c6996d315ba7dc9b1005828f7a05"
  },
  {
    "url": "favicon/favicon-32x32.png",
    "revision": "fb24c16b3eb1bf5053392989f37e68d6"
  },
  {
    "url": "favicon/favicon-96x96.png",
    "revision": "2ec58fcdcf25b533a1f9809212e16ae3"
  },
  {
    "url": "favicon/favicon-dark.svg",
    "revision": "dce58703179573f27cc6c18f6f06d616"
  },
  {
    "url": "favicon/favicon.svg",
    "revision": "582fda2a3a39694d591c6ee976351cd2"
  },
  {
    "url": "favicon/ms-icon-144x144.png",
    "revision": "e97ce2818fd6a7a5bbec737db413025d"
  },
  {
    "url": "favicon/ms-icon-150x150.png",
    "revision": "c88e284e0d8843702ba12810046190c3"
  },
  {
    "url": "favicon/ms-icon-310x310.png",
    "revision": "868e09e20a4ed0c4410774a5f834c573"
  },
  {
    "url": "favicon/ms-icon-70x70.png",
    "revision": "96e573cd2fc810f95ff5743156a7befb"
  },
  {
    "url": "favicon/mstile-150x150.png",
    "revision": "89762abd501197add135451caf31e447"
  },
  {
    "url": "favicon/safari-pinned-tab.svg",
    "revision": "c8e6f8ced86a3644f6c7538dd79c3661"
  },
  {
    "url": "fonts/dm-sans-v4-latin-700.woff",
    "revision": "082b291662e763b97fd53d99571e4732"
  },
  {
    "url": "fonts/dm-sans-v4-latin-700.woff2",
    "revision": "171ccc885c8deb88a0f3b55096584514"
  },
  {
    "url": "fonts/dm-sans-v4-latin-regular.woff",
    "revision": "54706a9e804757f8d8edea7d7e9f2577"
  },
  {
    "url": "fonts/dm-sans-v4-latin-regular.woff2",
    "revision": "ad513518b8de790106aefb37f7304835"
  },
  {
    "url": "fonts/hack-regular.woff",
    "revision": "b038bd31fef76bc622d123ae8892efa2"
  },
  {
    "url": "fonts/hack-regular.woff2",
    "revision": "3eccb984a54973a75212391b6d117ace"
  },
  {
    "url": "fonts/opendyslexic-bold.woff",
    "revision": "41a39294af0a34a75980a44d9587046a"
  },
  {
    "url": "fonts/opendyslexic-bold.woff2",
    "revision": "52c227ae0c91b378b320bb125e753b89"
  },
  {
    "url": "fonts/opendyslexic-regular.woff",
    "revision": "8375a1cfd101a44986a5b0deda3fe504"
  },
  {
    "url": "fonts/opendyslexic-regular.woff2",
    "revision": "c901cef3643b3388e3e125fdcd616a3c"
  },
  {
    "url": "hero-accessibility.svg",
    "revision": "42adfc267b76148ffd4f828608f3f6ab"
  },
  {
    "url": "img/authors/ktquez.png",
    "revision": "10ad366356a84576a78dd0557c17587b"
  },
  {
    "url": "img/dark.png",
    "revision": "832f08301ce00fd045acf85763612625"
  },
  {
    "url": "img/light.png",
    "revision": "222f6313aacf9428df359d5bd724a71e"
  },
  {
    "url": "img/sepia.png",
    "revision": "a0327677ae682b29802dc5f17ed7f1eb"
  },
  {
    "url": "img/social-share.png",
    "revision": "723855340efea6326b8364a0f03cc96f"
  },
  {
    "url": "img/supporters/alan-ktquez.png",
    "revision": "10ad366356a84576a78dd0557c17587b"
  },
  {
    "url": "img/system.png",
    "revision": "c18a71abcf0df66c9cf006dbab919257"
  },
  {
    "url": "index.html",
    "revision": "62b91689a1c486ae3ca8b3b277d64bd5"
  },
  {
    "url": "posts/index.html",
    "revision": "cb108e2aee97e5198e81d97f4df929e6"
  },
  {
    "url": "posts/post-test/index.html",
    "revision": "a954ac26b67b9bbbcf1d52380d42e428"
  },
  {
    "url": "project/how-to-contribute.html",
    "revision": "e92d99fdb89b94f3eca0ec0fbcfa0ed6"
  },
  {
    "url": "project/index.html",
    "revision": "08e9a650b9574e4e7210e339393b58cb"
  },
  {
    "url": "project/people.html",
    "revision": "000639438ee6586b4459926f832f0ab3"
  },
  {
    "url": "project/resources.html",
    "revision": "9fdc2fc50feb6f8a6d0f47b63e9c7f87"
  },
  {
    "url": "project/supporting.html",
    "revision": "9dfadf940f409861e6748459a4221657"
  },
  {
    "url": "project/tools-testing.html",
    "revision": "05f4cca8a591ed4c8f7cf9521587de44"
  },
  {
    "url": "project/vue-a11y-checklist.html",
    "revision": "a84d1135b9b30d0b0032334d2b0b4cfa"
  },
  {
    "url": "pt/categoria/aria/index.html",
    "revision": "f7e8ee92517411fe988d0fe6441ab726"
  },
  {
    "url": "pt/categoria/html/index.html",
    "revision": "42c73d1168e77c54c1a544f63c5e9015"
  },
  {
    "url": "pt/categoria/index.html",
    "revision": "00fefd8cb1d1c61e84ed835ded4ce408"
  },
  {
    "url": "pt/categoria/novidades/index.html",
    "revision": "1d064f065e003d82b0efb8f09206d2f6"
  },
  {
    "url": "pt/categoria/packages/index.html",
    "revision": "5cf7f54b715c1bf9f12b3d84ce2c54f0"
  },
  {
    "url": "pt/categoria/spa/index.html",
    "revision": "9ed9043d34b035aff792dceeb0e1b510"
  },
  {
    "url": "pt/categoria/tools/index.html",
    "revision": "be85c214a97d7ee4ed9c15ed9c0a9732"
  },
  {
    "url": "pt/categoria/wcag/index.html",
    "revision": "f87c1b6e1a880b362c7b7ecaac107225"
  },
  {
    "url": "pt/configuracoes/index.html",
    "revision": "446063eb965138e43cd77c2d2fdfee57"
  },
  {
    "url": "pt/index.html",
    "revision": "fb6d8c0b7649e8e5625a8f9a4be27191"
  },
  {
    "url": "pt/posts/index.html",
    "revision": "6e393206b58130a3c019532aca1a07b7"
  },
  {
    "url": "pt/posts/posts-de-teste/index.html",
    "revision": "aa32ff1c4f46253ff1e0bf8c2dc6f33f"
  },
  {
    "url": "pt/projeto/apoiando.html",
    "revision": "0f5045501fe95a91b1b91b5ec3ea9a79"
  },
  {
    "url": "pt/projeto/como-contribuir.html",
    "revision": "31100fc46f1fe275619424f245f75f04"
  },
  {
    "url": "pt/projeto/ferramentas-e-testes.html",
    "revision": "bc8173d698f0b21156a4f34e751d7219"
  },
  {
    "url": "pt/projeto/index.html",
    "revision": "04e62375077bc064993f932e4a39efdc"
  },
  {
    "url": "pt/projeto/links-uteis.html",
    "revision": "1ea01b687f043d13155099ee279c78db"
  },
  {
    "url": "pt/projeto/pessoas.html",
    "revision": "b81f5d452b6f06029716ac9ffd96b5d0"
  },
  {
    "url": "pt/projeto/vue-a11y-checklist.html",
    "revision": "896e099266a3d5c80b1d2b36c5720457"
  },
  {
    "url": "pt/receitas/contribua.html",
    "revision": "724c88b434c394258439f42efbcccf58"
  },
  {
    "url": "pt/receitas/dicas/atributos-aria-no-vue.html",
    "revision": "5b726db78d024f40b647227ce3f5a1e6"
  },
  {
    "url": "pt/receitas/index.html",
    "revision": "f36a17f5cdfea62c1233340bdd274f46"
  },
  {
    "url": "pt/receitas/widgets/accordion.html",
    "revision": "947fcda12fecd683b3cffa01cfdcfce7"
  },
  {
    "url": "pt/receitas/widgets/alert.html",
    "revision": "7cabdb0f2aa8ea690491827f6218cefb"
  },
  {
    "url": "pt/receitas/widgets/breadcrumbs.html",
    "revision": "13c9f2003df58748a064b631a30f350c"
  },
  {
    "url": "pt/receitas/widgets/card.html",
    "revision": "484d64cec2bbceb1bf69dd8395f9eb9d"
  },
  {
    "url": "pt/receitas/widgets/dialog.html",
    "revision": "6c14e70b6d370ae1949b75246cc1cedf"
  },
  {
    "url": "pt/receitas/widgets/navegacao-mobile.html",
    "revision": "f709aa1c83430effea253e786ea65ee2"
  },
  {
    "url": "pt/receitas/widgets/pular-links.html",
    "revision": "fbc2913780aec0d6f9020e6f9a6acd81"
  },
  {
    "url": "pt/receitas/widgets/tabs.html",
    "revision": "b682190baf2b1e145de106eb862f59a3"
  },
  {
    "url": "recipes/contribute.html",
    "revision": "6c25520446e3616e0adea7ddf475cab3"
  },
  {
    "url": "recipes/index.html",
    "revision": "68353769f25c49c594fdef12baf07bce"
  },
  {
    "url": "recipes/tips/aria-attributes-in-vue.html",
    "revision": "40bab187ac5417fac451c48aa826b504"
  },
  {
    "url": "recipes/widgets/accordion.html",
    "revision": "095c37844355a7bd6d9955e69509a4f1"
  },
  {
    "url": "recipes/widgets/alert.html",
    "revision": "92f9fdbbe045b3dfdc0410bac97fcb39"
  },
  {
    "url": "recipes/widgets/breadcrumbs.html",
    "revision": "793fd6ab12e728c8703669461bfb3677"
  },
  {
    "url": "recipes/widgets/card.html",
    "revision": "5e8ec554bf581e91c63a56d17ee738e8"
  },
  {
    "url": "recipes/widgets/dialog.html",
    "revision": "b8402fbd788db044102a150b95ff091d"
  },
  {
    "url": "recipes/widgets/mobile-navigation.html",
    "revision": "a36e6de3fdde65916105dbc7113aaa67"
  },
  {
    "url": "recipes/widgets/skip-links.html",
    "revision": "dac40e517603acb0f9d043f135f0e5ab"
  },
  {
    "url": "recipes/widgets/tabs.html",
    "revision": "a8091252295570f9f9a31718f85ef3ce"
  },
  {
    "url": "settings/index.html",
    "revision": "075c8e7a3bc705a3b4f3e00018d5af37"
  },
  {
    "url": "vue-a11y-logo.svg",
    "revision": "febcacaf8da3fe5fc4f92db127db4e7a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
