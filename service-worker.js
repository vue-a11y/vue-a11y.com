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
    "revision": "96b62631df83ff18446d4b5a20f71fd6"
  },
  {
    "url": "assets/css/0.styles.4f225454.css",
    "revision": "2be84f8b8e8210add092d1e360721155"
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
    "url": "assets/img/search.676e9ab7.svg",
    "revision": "676e9ab7943861498d74d876fada3f5c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.bf14628f.js",
    "revision": "65119f4c36bebaec1d3ac6db9ffb1d9d"
  },
  {
    "url": "assets/js/10.f789bb4c.js",
    "revision": "588b9340f07df30e1a2daa42e65aea14"
  },
  {
    "url": "assets/js/11.1501a680.js",
    "revision": "2ef6e7dca24f701cc920bda25a37fd8e"
  },
  {
    "url": "assets/js/12.e2530ddc.js",
    "revision": "cf6e7d195dbb3430c64752a4979a1db8"
  },
  {
    "url": "assets/js/13.fea78113.js",
    "revision": "9da922aebfe4d3ee805186f2617ad062"
  },
  {
    "url": "assets/js/14.ffc71b94.js",
    "revision": "8f1267a47bc54da7c16c8f501082900d"
  },
  {
    "url": "assets/js/15.743e6e05.js",
    "revision": "e845c0c9b59948a61e6b8fe0df9b8284"
  },
  {
    "url": "assets/js/16.3d1528c7.js",
    "revision": "ed280d72a16c687b123ff2e5a24718f9"
  },
  {
    "url": "assets/js/17.25b2205f.js",
    "revision": "a260867d4a5dd667604dd747852f8b50"
  },
  {
    "url": "assets/js/18.d31d4ceb.js",
    "revision": "6aa79dbd9bf20304fbba8fef420a71e5"
  },
  {
    "url": "assets/js/19.04a40432.js",
    "revision": "999e3ee1940cafa5260d946b7ab8f550"
  },
  {
    "url": "assets/js/2.813d15c1.js",
    "revision": "134915beb6b8381834c4d1cf97633832"
  },
  {
    "url": "assets/js/20.c1472abb.js",
    "revision": "f14afea0855210c7e0d6c7752c20328c"
  },
  {
    "url": "assets/js/21.c823d7c0.js",
    "revision": "27213aa208befa9f6c55bbe50ffa77cf"
  },
  {
    "url": "assets/js/22.5beeae3d.js",
    "revision": "c1d71b0e14fc010ee52ea3a665b8ea2f"
  },
  {
    "url": "assets/js/23.da86e7a9.js",
    "revision": "e625daad2ffc16a2cd8df15b71dfcb05"
  },
  {
    "url": "assets/js/24.adc064e6.js",
    "revision": "b1fdcf3cbcadf5b9fd93af73c3e110e9"
  },
  {
    "url": "assets/js/25.b71796a4.js",
    "revision": "0e4fd0b30223d40c076c6f6cce00fe51"
  },
  {
    "url": "assets/js/26.6f3ff738.js",
    "revision": "830a96f5f3b3f452bb0f7646e778cdcf"
  },
  {
    "url": "assets/js/27.77e76c8e.js",
    "revision": "6b498c84ba67dcf778860fd924f7dde0"
  },
  {
    "url": "assets/js/28.ba3bed82.js",
    "revision": "5bfc65d8b3bd25b9aafb38f29a29d637"
  },
  {
    "url": "assets/js/29.61d1bd29.js",
    "revision": "4d9a2c2c76051a5c10d550a079687bf6"
  },
  {
    "url": "assets/js/3.7c5a0011.js",
    "revision": "b5235fb73bc4a2aae429f67ffeb64115"
  },
  {
    "url": "assets/js/30.616c084e.js",
    "revision": "c4300e325d5d3aaf9490c8da908d0ce2"
  },
  {
    "url": "assets/js/31.bff921a5.js",
    "revision": "445eb6bfd01afb327b74ab9c42f228f7"
  },
  {
    "url": "assets/js/32.112eb408.js",
    "revision": "5f9510471cd85fed780cc6c0c2feed9a"
  },
  {
    "url": "assets/js/33.97a9542d.js",
    "revision": "a89b9a8770e37d145bf0a23c402d745d"
  },
  {
    "url": "assets/js/34.d985af86.js",
    "revision": "06493db7a4779d472bb4b8b882c6cb9e"
  },
  {
    "url": "assets/js/35.1be31e75.js",
    "revision": "6aa95a5ba405cc3f2f9101ac827c5fb3"
  },
  {
    "url": "assets/js/36.add70f58.js",
    "revision": "fc41a02a9a091250edcca4e8e5d9ab9b"
  },
  {
    "url": "assets/js/37.4e46270d.js",
    "revision": "62e19b2a994f0d104627b63a5a361485"
  },
  {
    "url": "assets/js/38.fd15482c.js",
    "revision": "9565a2336aa8338b0cf6ab29f2388933"
  },
  {
    "url": "assets/js/39.2fd1136b.js",
    "revision": "b478775f29fd1332c86cf7ff4cd75f66"
  },
  {
    "url": "assets/js/40.40abc85d.js",
    "revision": "88743f04449b016e939402d5a253946d"
  },
  {
    "url": "assets/js/41.32ea6fba.js",
    "revision": "e2233510409f44849ed2db5ef4dbf477"
  },
  {
    "url": "assets/js/42.5d000480.js",
    "revision": "e81c264492bd155d3cb1d7d3a0ad65ab"
  },
  {
    "url": "assets/js/43.ef92fa73.js",
    "revision": "cf3500dad19f805c661aaff6e5e274e1"
  },
  {
    "url": "assets/js/44.15bb1334.js",
    "revision": "4da431377f4ab3aa202d3b7662f67e04"
  },
  {
    "url": "assets/js/45.136dfe76.js",
    "revision": "3c5bc9e133b9dcc1bbe41e6baaa246de"
  },
  {
    "url": "assets/js/46.7946052d.js",
    "revision": "360c9787f0aee4afee478140c1b2a673"
  },
  {
    "url": "assets/js/47.59d38d05.js",
    "revision": "b02a3d69f983a7d8487c2a8fb6118c41"
  },
  {
    "url": "assets/js/48.e0d86f1b.js",
    "revision": "13aa333061ec8745139a34cb007fc4fe"
  },
  {
    "url": "assets/js/49.341d4688.js",
    "revision": "4cf1ad2805134cbfdba414e93f6ef192"
  },
  {
    "url": "assets/js/50.7a5827f3.js",
    "revision": "159f507e25ea7eceff5fc507641228d6"
  },
  {
    "url": "assets/js/51.fee19f9c.js",
    "revision": "eaab2be2e38006c44807e4aa85dda735"
  },
  {
    "url": "assets/js/52.ab581e01.js",
    "revision": "6e4c6acd8df38f8a5359df61fc0e33f6"
  },
  {
    "url": "assets/js/53.15744e7e.js",
    "revision": "eeeb7ee3899abc000e34a47383fb503e"
  },
  {
    "url": "assets/js/54.0dbd33fa.js",
    "revision": "6a8b52f3437f31d118af251c5afd9d3d"
  },
  {
    "url": "assets/js/6.ab0bc18c.js",
    "revision": "a8732dfdfb3409cd5d104354fa38ed9b"
  },
  {
    "url": "assets/js/7.b97bb660.js",
    "revision": "55fb0ece4825261452e0190b1a793d68"
  },
  {
    "url": "assets/js/8.bbfd9c16.js",
    "revision": "fa6ba217db16a1b798d9dcfa1225723a"
  },
  {
    "url": "assets/js/9.26551969.js",
    "revision": "c8962735ca1d4da98b75368ee44f3b41"
  },
  {
    "url": "assets/js/app.7a334b91.js",
    "revision": "c24266245f126f79bf53d520bc17fb8b"
  },
  {
    "url": "assets/js/vuejs-paginate.92f047ca.js",
    "revision": "dfad919ae3fb0a74e488965117bf0558"
  },
  {
    "url": "category/aria/index.html",
    "revision": "bfddd39f081473833435db8e118a4c2a"
  },
  {
    "url": "category/html/index.html",
    "revision": "14f1bdfc3417e247eb18488ecafc880b"
  },
  {
    "url": "category/index.html",
    "revision": "157a2679b3fa078f7d9e5c2b805ef776"
  },
  {
    "url": "category/news/index.html",
    "revision": "17768353e78da836709edfbc6c2f72ff"
  },
  {
    "url": "category/packages/index.html",
    "revision": "ce8881d99ce963ac5ccb66bb32f87cc9"
  },
  {
    "url": "category/spa/index.html",
    "revision": "ea8d6677399b4b79be51194dac00b39b"
  },
  {
    "url": "category/tools/index.html",
    "revision": "78e91cabdfbfe235d48df522ce57755b"
  },
  {
    "url": "category/wcag/index.html",
    "revision": "cce24dba2d0e597e04ec4e375194b25f"
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
    "revision": "80feda08e9ca92a87781f460c2d92e4a"
  },
  {
    "url": "posts/index.html",
    "revision": "a7b39f82a043cbd013f7c907c962f354"
  },
  {
    "url": "posts/post-test/index.html",
    "revision": "cfaa0b679c435335d50008d1466d2cbc"
  },
  {
    "url": "project/contributors.html",
    "revision": "6df9dadac5eaf346381a5f633a966e75"
  },
  {
    "url": "project/index.html",
    "revision": "63fe380ee29ae8e765db2c3768f1f15e"
  },
  {
    "url": "project/resources.html",
    "revision": "4d36349b1a81bf8921fcaf5641ca7099"
  },
  {
    "url": "project/supporting.html",
    "revision": "528e50c8569145be15cf124bb044cd30"
  },
  {
    "url": "project/tools-testing.html",
    "revision": "27cf439ebeb1aa1f9740ea0d3e1b5ce7"
  },
  {
    "url": "project/vue-a11y-checklist.html",
    "revision": "6bbd4feb92770857194c4077d21fc76a"
  },
  {
    "url": "pt/categoria/aria/index.html",
    "revision": "3f3f590aa966a8c2e0b2705c8d0de0c2"
  },
  {
    "url": "pt/categoria/html/index.html",
    "revision": "cc1d6d5785165d694b5e6ff6e4b50399"
  },
  {
    "url": "pt/categoria/index.html",
    "revision": "6c82441e7f69b47926213dca3100e586"
  },
  {
    "url": "pt/categoria/novidades/index.html",
    "revision": "f0da67d41e3703116d34cd5077edf697"
  },
  {
    "url": "pt/categoria/packages/index.html",
    "revision": "610d0cedf17ddeac91f5549b1b8e80d6"
  },
  {
    "url": "pt/categoria/spa/index.html",
    "revision": "25c0e05488283bad778e72b351e98865"
  },
  {
    "url": "pt/categoria/tools/index.html",
    "revision": "4ad82745842de91a7da69fdca27726d8"
  },
  {
    "url": "pt/categoria/wcag/index.html",
    "revision": "c3b81e5d5bcbf824071eb4d05c2abb5c"
  },
  {
    "url": "pt/configuracoes/index.html",
    "revision": "4458e38898473b65f91217ab99b48fa3"
  },
  {
    "url": "pt/index.html",
    "revision": "08b2f378de494d0e5e4e18f51c9e085a"
  },
  {
    "url": "pt/posts/index.html",
    "revision": "1fba6da5ed641eaadc19f767ee672ec3"
  },
  {
    "url": "pt/posts/posts-de-teste/index.html",
    "revision": "6d2ef06e073498057b2575a1a39662c8"
  },
  {
    "url": "pt/projeto/apoiando.html",
    "revision": "0cad1c4767fbd03236988d720d34551d"
  },
  {
    "url": "pt/projeto/contribuidores.html",
    "revision": "8d3593ae598f05932c72b818039dd767"
  },
  {
    "url": "pt/projeto/ferramentas-e-testes.html",
    "revision": "c5f03185f7ca8a65cbac0d572f6920aa"
  },
  {
    "url": "pt/projeto/index.html",
    "revision": "3a74d9897c875680c3621d171733ce32"
  },
  {
    "url": "pt/projeto/links-uteis.html",
    "revision": "1c3c36f6515c5c6fd741b553779bc276"
  },
  {
    "url": "pt/projeto/vue-a11y-checklist.html",
    "revision": "da8c06a3b3fd54aa35b5bebab78ab22d"
  },
  {
    "url": "pt/receitas/contribua.html",
    "revision": "188768484973c2c364ad051643743ebe"
  },
  {
    "url": "pt/receitas/dicas/atributos-aria-no-vue.html",
    "revision": "08e6c44fa9a5550b3d85e50939b97966"
  },
  {
    "url": "pt/receitas/index.html",
    "revision": "96d154133b0c09daac7c918af5fd1ed7"
  },
  {
    "url": "pt/receitas/widgets/accordion.html",
    "revision": "e212abf95fb5753604d25bff5f4d702e"
  },
  {
    "url": "pt/receitas/widgets/alert.html",
    "revision": "f135295a7e8ea0c0230ec18c257aade1"
  },
  {
    "url": "pt/receitas/widgets/breadcrumbs.html",
    "revision": "94e2537c2931ce8cda40d9a9fb50077b"
  },
  {
    "url": "pt/receitas/widgets/card.html",
    "revision": "c7b5d65f510d37069d129272e2c0a2e7"
  },
  {
    "url": "pt/receitas/widgets/dialog.html",
    "revision": "05e6a13e8314555e14a66ebedd4bb46f"
  },
  {
    "url": "pt/receitas/widgets/navegacao-mobile.html",
    "revision": "c00ba159f3f973717cdab0af4feed3d5"
  },
  {
    "url": "pt/receitas/widgets/pular-links.html",
    "revision": "70348f18c16985d0dac033d47571d8ca"
  },
  {
    "url": "pt/receitas/widgets/tabs.html",
    "revision": "d8e436bbe39a71823efe4d5bfd766b7b"
  },
  {
    "url": "recipes/contribute.html",
    "revision": "ad1dd2ef0c93ff40ab7b28a32098b257"
  },
  {
    "url": "recipes/index.html",
    "revision": "ff1ac3b77d3a7049caffcba5a59fa5b4"
  },
  {
    "url": "recipes/tips/aria-attributes-in-vue.html",
    "revision": "a5ca828d1450bf4ae958d928a7f2b64e"
  },
  {
    "url": "recipes/widgets/accordion.html",
    "revision": "b1884e46bb7eaad4cd6daf73fe281e28"
  },
  {
    "url": "recipes/widgets/alert.html",
    "revision": "1871ccb9e2530d937e23bed58b6713c1"
  },
  {
    "url": "recipes/widgets/breadcrumbs.html",
    "revision": "5a5c56e2c2100608b2f14707951896db"
  },
  {
    "url": "recipes/widgets/card.html",
    "revision": "c68af114ee292dc5b72b4e45a4159a13"
  },
  {
    "url": "recipes/widgets/dialog.html",
    "revision": "2efe729f43013c8083ffa540c2271b87"
  },
  {
    "url": "recipes/widgets/mobile-navigation.html",
    "revision": "593838b0e83e2fb057609ddf0ef6fbba"
  },
  {
    "url": "recipes/widgets/skip-links.html",
    "revision": "3c85cbfab73f0cfa49179a148b1343ab"
  },
  {
    "url": "recipes/widgets/tabs.html",
    "revision": "ae2b35d9bdeeef467194811f3c40a680"
  },
  {
    "url": "settings/index.html",
    "revision": "31dea1b6765532b527395f008355798d"
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
