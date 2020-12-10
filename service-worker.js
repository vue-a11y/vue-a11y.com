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
    "revision": "6b9d1fe565b1b54a95aaa1b5fe84e7b1"
  },
  {
    "url": "assets/css/0.styles.ce964132.css",
    "revision": "5bc5ac09bb025a4c30bbc9b322e0d1cb"
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
    "url": "assets/js/1.6f0fff66.js",
    "revision": "2b750d25fad3911785bcaa37dc46d5c1"
  },
  {
    "url": "assets/js/10.c6152f6d.js",
    "revision": "9206edd700981acbcb6a092d29078edb"
  },
  {
    "url": "assets/js/11.27bb54a3.js",
    "revision": "0bb6bffcc4bd374eb9ad1e66fe6a04b9"
  },
  {
    "url": "assets/js/12.5f179545.js",
    "revision": "f19c70dc8218a62346270d2550b9d7da"
  },
  {
    "url": "assets/js/13.ef4cf207.js",
    "revision": "92973bc8d5c02020b272de512192c260"
  },
  {
    "url": "assets/js/14.4df34b69.js",
    "revision": "3765bb420d0c89f6b3e107c4740f152d"
  },
  {
    "url": "assets/js/15.6956ed3f.js",
    "revision": "e4cf46c8e96861d11f68a1704ccb5562"
  },
  {
    "url": "assets/js/16.f232954a.js",
    "revision": "4a6a012b51bac5663e7266c66e192ee9"
  },
  {
    "url": "assets/js/17.010c21a1.js",
    "revision": "e18c301ba64ad85ec5dd8be411e4341e"
  },
  {
    "url": "assets/js/18.140af33f.js",
    "revision": "e5f59338aa7f3c1ae541975c6913c036"
  },
  {
    "url": "assets/js/19.b35092ac.js",
    "revision": "8f5d19191b0175f960914adb7828ac20"
  },
  {
    "url": "assets/js/2.ee4b18b6.js",
    "revision": "96445fa52b2e417f43c9432e3c7943f6"
  },
  {
    "url": "assets/js/20.ac1a5619.js",
    "revision": "c761a8162eabf9156db2cac39bb484cb"
  },
  {
    "url": "assets/js/21.b938e494.js",
    "revision": "03a967fc07c1651ea630dda069638de9"
  },
  {
    "url": "assets/js/22.0e5a36fd.js",
    "revision": "4938eee9ff050b976e778af2d1901d6a"
  },
  {
    "url": "assets/js/23.910b36b6.js",
    "revision": "13b61bcefb4717349bf172ca42668862"
  },
  {
    "url": "assets/js/24.08974f29.js",
    "revision": "0772c669b1de385740adf9badc5a0fbd"
  },
  {
    "url": "assets/js/25.550c4252.js",
    "revision": "6894d031730b623a0e27c938f981847c"
  },
  {
    "url": "assets/js/26.f2f28d44.js",
    "revision": "c4f267cd7dfc44affe4a9faba860c342"
  },
  {
    "url": "assets/js/27.e0598068.js",
    "revision": "f443477d5473cdd42762dccce843ba55"
  },
  {
    "url": "assets/js/28.0cacdead.js",
    "revision": "dbc89611691acfe40359d219f7b3d934"
  },
  {
    "url": "assets/js/29.7758bd23.js",
    "revision": "646e405e9f077f446bcf5c06e3ddcec9"
  },
  {
    "url": "assets/js/3.d7ecd83a.js",
    "revision": "8ec2240b75b7f11bf4b4de54b71c9870"
  },
  {
    "url": "assets/js/30.e402c634.js",
    "revision": "3d67d298ec63dc32b9ce7fac15ed30d6"
  },
  {
    "url": "assets/js/31.e9767036.js",
    "revision": "dfe4684c7285ec4a1f922ceaed2eedc0"
  },
  {
    "url": "assets/js/32.d5887f66.js",
    "revision": "f40ac15cc340d8a720cc63f7138b14d7"
  },
  {
    "url": "assets/js/33.7e1246f0.js",
    "revision": "b0f2e5037f649e3a03891619e4698610"
  },
  {
    "url": "assets/js/34.22f919fc.js",
    "revision": "ab5b14ed55221308a84ab6739740b9ca"
  },
  {
    "url": "assets/js/35.30f03852.js",
    "revision": "42430f5022171eaa38ae0b469e9dbe3d"
  },
  {
    "url": "assets/js/36.0bd54098.js",
    "revision": "b9958f858254793ac89e666d1e461641"
  },
  {
    "url": "assets/js/37.e7ae0536.js",
    "revision": "7b7419692d4e6ef858abb4bcc902901c"
  },
  {
    "url": "assets/js/38.a4d93455.js",
    "revision": "c572c9d9d11956f485de07772c954cfa"
  },
  {
    "url": "assets/js/39.6c2035ce.js",
    "revision": "beca070706369f4f6ee9ffe50493381b"
  },
  {
    "url": "assets/js/40.52dd691f.js",
    "revision": "e3ee00fe2c70139d66e52189644c6793"
  },
  {
    "url": "assets/js/41.610ae0ab.js",
    "revision": "3f0fb346e340bb820a8404cee2f93fdb"
  },
  {
    "url": "assets/js/42.2ee357ed.js",
    "revision": "9a9f868870a201d567406742679cd6c0"
  },
  {
    "url": "assets/js/43.1fa9831b.js",
    "revision": "eb2b673073fa874564b3417f7e476815"
  },
  {
    "url": "assets/js/44.0803ec3b.js",
    "revision": "c39de0cf41814bfcc157b0fb413a9834"
  },
  {
    "url": "assets/js/45.f29ea682.js",
    "revision": "7d0f735da55a633624209d9f99135261"
  },
  {
    "url": "assets/js/46.c1f18e14.js",
    "revision": "ba826f7b98c545e2e75df4a78b2241d9"
  },
  {
    "url": "assets/js/47.bef37bad.js",
    "revision": "b6584ca765b77b02eaf495f02eb5b949"
  },
  {
    "url": "assets/js/48.d2f59bfb.js",
    "revision": "687ed86fb36c77cf929bd2ec416a715d"
  },
  {
    "url": "assets/js/49.924038ed.js",
    "revision": "26abcd13d4665d4b0235e41551a5be72"
  },
  {
    "url": "assets/js/50.2ea6798c.js",
    "revision": "7bac1e5208f69a4fc7012cf610470c72"
  },
  {
    "url": "assets/js/51.f6a41f76.js",
    "revision": "8f9ce7fc76682c8bf359161d6dc50239"
  },
  {
    "url": "assets/js/52.b04faa82.js",
    "revision": "a8a870a3e4adc07606523ca1df371234"
  },
  {
    "url": "assets/js/53.44e29890.js",
    "revision": "5a20b73403d5cd22d179060e062a15d3"
  },
  {
    "url": "assets/js/54.24290baf.js",
    "revision": "f5af14b91566ef8db79233670dff3bca"
  },
  {
    "url": "assets/js/55.48d4aa9b.js",
    "revision": "6a1ab83c97854f9a37af525d163df5f6"
  },
  {
    "url": "assets/js/56.ef016902.js",
    "revision": "7330d747e31295bbe45210e14fd6c950"
  },
  {
    "url": "assets/js/57.a04d7d2c.js",
    "revision": "3f42c1ebb332cea28d26ce03dbf0c7fd"
  },
  {
    "url": "assets/js/58.f4bcc037.js",
    "revision": "f12768a4ad98e3e031285dda4d14c3c9"
  },
  {
    "url": "assets/js/7.22c75834.js",
    "revision": "a7c86520691bf50307e0ae441fc29528"
  },
  {
    "url": "assets/js/8.8e9ea1f9.js",
    "revision": "fe988ef515937d8e6d685880cd12110e"
  },
  {
    "url": "assets/js/9.7b9326f4.js",
    "revision": "0652572ec88c80ee590c147f9496c0f2"
  },
  {
    "url": "assets/js/app.d3a9f792.js",
    "revision": "a570fbf637199d18c2d77bb35ad956e7"
  },
  {
    "url": "assets/js/vendors~docsearch.7c75a4fc.js",
    "revision": "b5b82f8f2b549e80af0754041fda9195"
  },
  {
    "url": "assets/js/vuejs-paginate.e9463c0a.js",
    "revision": "2cf6fec1da3ca96676577f9d0b727dcd"
  },
  {
    "url": "category/aria/index.html",
    "revision": "d101df0ca1c0c58375175d7d901e2bc3"
  },
  {
    "url": "category/html/index.html",
    "revision": "cc6d6d2d324d90038aba0b957cbf9777"
  },
  {
    "url": "category/index.html",
    "revision": "6bd47f9e07d0d7ebdbe9ce313904241b"
  },
  {
    "url": "category/news/index.html",
    "revision": "813e6894430643246020b0850c08853e"
  },
  {
    "url": "category/packages/index.html",
    "revision": "c4d968e23ce339c362f974f80d03eeae"
  },
  {
    "url": "category/spa/index.html",
    "revision": "cb7deaf8d0e2de434d72c46d1ffc8eb6"
  },
  {
    "url": "category/tools/index.html",
    "revision": "ea9481b5c5b082a3ff92493acb4cf8f9"
  },
  {
    "url": "category/wcag/index.html",
    "revision": "21f107c9d4abf5bd9a60c29fa9f31d47"
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
    "url": "img/supporters/yamanoku.png",
    "revision": "aad15fa92d82660b675aad23359c247f"
  },
  {
    "url": "img/system.png",
    "revision": "c18a71abcf0df66c9cf006dbab919257"
  },
  {
    "url": "index.html",
    "revision": "2365c87f0e055e6c8a50bcd5ba8b8ab4"
  },
  {
    "url": "posts/index.html",
    "revision": "99c7603b85d78961e7705b669b16b794"
  },
  {
    "url": "posts/post-test/index.html",
    "revision": "917eaa761f598ed21fb728bc004de7f1"
  },
  {
    "url": "project/how-to-contribute.html",
    "revision": "d8e6e69eefb38169c05cd5f349f88e80"
  },
  {
    "url": "project/index.html",
    "revision": "3632a741390e75dc842ff9a3387b663d"
  },
  {
    "url": "project/people.html",
    "revision": "60e877984b1fb776f3eeb61b3771587b"
  },
  {
    "url": "project/resources.html",
    "revision": "60a002b8f7010f3cf96e6c4d4c56d9d4"
  },
  {
    "url": "project/supporting.html",
    "revision": "6174f9a11bae721e5601db6dfa935f4f"
  },
  {
    "url": "project/tools-testing.html",
    "revision": "66cf6568c16b92d43f4ff28d5277cfc3"
  },
  {
    "url": "project/vue-a11y-checklist.html",
    "revision": "e5a33246792c16da6e39b2ee8cb9ce49"
  },
  {
    "url": "pt/categoria/aria/index.html",
    "revision": "cf467f23c2a86ee1f26162d463e7faa1"
  },
  {
    "url": "pt/categoria/html/index.html",
    "revision": "a5eab31ae3234f4c2db39d737d746ccb"
  },
  {
    "url": "pt/categoria/index.html",
    "revision": "c77d5f3e4a9d8b80bd20e909c64f972b"
  },
  {
    "url": "pt/categoria/novidades/index.html",
    "revision": "a80e56d61dd600cd2877700d05b1b275"
  },
  {
    "url": "pt/categoria/packages/index.html",
    "revision": "88a4577892248fe0387dfc94eaabcc5e"
  },
  {
    "url": "pt/categoria/spa/index.html",
    "revision": "62e6dd5e506e323b62eeb9e05ba42f7a"
  },
  {
    "url": "pt/categoria/tools/index.html",
    "revision": "840a77b47418d4ded191862b8a29c136"
  },
  {
    "url": "pt/categoria/wcag/index.html",
    "revision": "4fdd576036fcfed4b1dd3f79b7d73ec0"
  },
  {
    "url": "pt/configuracoes/index.html",
    "revision": "29c88c7f4b3c5885ff8439b04521c9be"
  },
  {
    "url": "pt/index.html",
    "revision": "e660f099f32573d5dce4a80aae09c1c7"
  },
  {
    "url": "pt/posts/index.html",
    "revision": "8c032f2edf274e852f232e7a7d085cac"
  },
  {
    "url": "pt/posts/posts-de-teste/index.html",
    "revision": "b3b2a9145f4f39ea22b22bb98a22f626"
  },
  {
    "url": "pt/projeto/apoiando.html",
    "revision": "b8e214d1d844bcd9a1309783a730f019"
  },
  {
    "url": "pt/projeto/como-contribuir.html",
    "revision": "67698033e73d36cf141d7ac1903f6989"
  },
  {
    "url": "pt/projeto/ferramentas-e-testes.html",
    "revision": "9f45892fa0ac596d21788d0adaf65838"
  },
  {
    "url": "pt/projeto/index.html",
    "revision": "15ed1d0386da59c7190f97da3def60a2"
  },
  {
    "url": "pt/projeto/links-uteis.html",
    "revision": "924b2aa2a6846d98d907442077af0151"
  },
  {
    "url": "pt/projeto/pessoas.html",
    "revision": "9809c2623b6bf0c8bdddf8fd7faaacb1"
  },
  {
    "url": "pt/projeto/vue-a11y-checklist.html",
    "revision": "e9a7ba8d3b42f022b9149803354385b6"
  },
  {
    "url": "pt/receitas/contribua.html",
    "revision": "2d8383e78b40d1066c55c3f3d5f23a0a"
  },
  {
    "url": "pt/receitas/dicas/atributos-aria-no-vue.html",
    "revision": "836610d0ac0001cfe118f6ddb84469c9"
  },
  {
    "url": "pt/receitas/index.html",
    "revision": "39629f801e3ae7b41356c129da14ffd8"
  },
  {
    "url": "pt/receitas/widgets/accordion.html",
    "revision": "515b5124510cc9fbb6534ff4f07f41dc"
  },
  {
    "url": "pt/receitas/widgets/alert.html",
    "revision": "85fa1fdff01ea853c91588cbfe82ebfd"
  },
  {
    "url": "pt/receitas/widgets/breadcrumbs.html",
    "revision": "b62a840f7bfbc8ef163b7233d645d2ef"
  },
  {
    "url": "pt/receitas/widgets/card.html",
    "revision": "bb615dcb01d2a9e558d426b0074f9855"
  },
  {
    "url": "pt/receitas/widgets/dialog.html",
    "revision": "ccf52d139c2e76aee4c6eae7b6364c5f"
  },
  {
    "url": "pt/receitas/widgets/navegacao-mobile.html",
    "revision": "a6c417be051aeba8e3c98c69bb3d428f"
  },
  {
    "url": "pt/receitas/widgets/pular-links.html",
    "revision": "664c56691fe7b3a6bad75bd5e9e880b3"
  },
  {
    "url": "pt/receitas/widgets/tabs.html",
    "revision": "a3262801cfb881f16ce0aca66aa82004"
  },
  {
    "url": "recipes/contribute.html",
    "revision": "5d042263fe8fbe2c951ed528990c9a59"
  },
  {
    "url": "recipes/index.html",
    "revision": "08856dca151a27f3e1c420a491f2f4a1"
  },
  {
    "url": "recipes/tips/aria-attributes-in-vue.html",
    "revision": "2480f69a1728c9d9ffe70c7d1a87dfba"
  },
  {
    "url": "recipes/widgets/accordion.html",
    "revision": "1e6e2863799245b5080f897dbd476a5c"
  },
  {
    "url": "recipes/widgets/alert.html",
    "revision": "065c71788984840eccd4804b12b080d6"
  },
  {
    "url": "recipes/widgets/breadcrumbs.html",
    "revision": "e007b1d45d1078d3441d2267ec9f142a"
  },
  {
    "url": "recipes/widgets/card.html",
    "revision": "2174ffaa918ca915421508144de728a7"
  },
  {
    "url": "recipes/widgets/dialog.html",
    "revision": "d442a81ad47ff7997384afaf0c94c49a"
  },
  {
    "url": "recipes/widgets/mobile-navigation.html",
    "revision": "c71e129247925ca0d17c53382d17c99f"
  },
  {
    "url": "recipes/widgets/skip-links.html",
    "revision": "ce99ae3068c84a31e4e7ca3507ffbe72"
  },
  {
    "url": "recipes/widgets/tabs.html",
    "revision": "5404002e9b373aeab5795279b4c2b7cd"
  },
  {
    "url": "settings/index.html",
    "revision": "39e51945e6bb4c9418bc60a5bc0ec313"
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
