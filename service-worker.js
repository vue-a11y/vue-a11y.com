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
    "revision": "87bf355e505b244fc40ab2e613ed97c0"
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
    "url": "assets/js/15.d46e2869.js",
    "revision": "dcb8dff149da60cdb307fc6eaff10de7"
  },
  {
    "url": "assets/js/16.3c54a8b0.js",
    "revision": "e43385330349f52fab49035375f69cfd"
  },
  {
    "url": "assets/js/17.c1003c0a.js",
    "revision": "e124cc8c699441ea3ac07dab27bac10d"
  },
  {
    "url": "assets/js/18.75c28672.js",
    "revision": "fe6090694d11bd28c1525a4da545f971"
  },
  {
    "url": "assets/js/19.cef3e365.js",
    "revision": "79bfd7f0ca5520c399bbe667899469e5"
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
    "url": "assets/js/21.f783aa1f.js",
    "revision": "815cbe2375b83f27237e567593af465f"
  },
  {
    "url": "assets/js/22.b81250e6.js",
    "revision": "63f74bdfd11bee6102a6e96549bc18ea"
  },
  {
    "url": "assets/js/23.924bc963.js",
    "revision": "3a2cd530478a07cb3ef79a1cb1e56276"
  },
  {
    "url": "assets/js/24.3cc65eb7.js",
    "revision": "f0953764878695f4e90b685acf4df416"
  },
  {
    "url": "assets/js/25.47712d61.js",
    "revision": "01db059df07d60858e2bb4bdb6d4213b"
  },
  {
    "url": "assets/js/26.37db3a95.js",
    "revision": "5e518bb1ed14fb6d75263b2c5cb68c0d"
  },
  {
    "url": "assets/js/27.8a0c19f4.js",
    "revision": "5e02be4a53c572b8fccd412f7b2d6a5d"
  },
  {
    "url": "assets/js/28.24918687.js",
    "revision": "adf0ca4e20a9f339b1ec5b228ccc4d28"
  },
  {
    "url": "assets/js/29.5d4bc607.js",
    "revision": "27204317146d765ba83a691b62b63a35"
  },
  {
    "url": "assets/js/3.0cf6da81.js",
    "revision": "2903f883790d66508b39f7965220118c"
  },
  {
    "url": "assets/js/30.70cb9141.js",
    "revision": "fc6264abdc46838f7c5ac03390eca0cc"
  },
  {
    "url": "assets/js/31.5dc3e90b.js",
    "revision": "efb7abe4d403d1b37213fa04359b9b4e"
  },
  {
    "url": "assets/js/32.8f751ec6.js",
    "revision": "3f682dea6aff38231f22740d0329ad48"
  },
  {
    "url": "assets/js/33.fede3a9d.js",
    "revision": "a2773792348cdf503e16b36d83806b44"
  },
  {
    "url": "assets/js/34.5c95d445.js",
    "revision": "daa8b547ab66e3b0ec3dce131a524762"
  },
  {
    "url": "assets/js/35.152cc9b5.js",
    "revision": "70fe4d7e213fcc8627c25f4746dc3ae5"
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
    "url": "assets/js/40.fc90d7bf.js",
    "revision": "6905b36220e97e33f16154a09d0b80f3"
  },
  {
    "url": "assets/js/41.47aafdf8.js",
    "revision": "19ef548922e5607075eaece62dc6a7f0"
  },
  {
    "url": "assets/js/42.25e3dd3d.js",
    "revision": "ebd34d5f11b84a15fe582110e7440eeb"
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
    "url": "assets/js/45.f230b266.js",
    "revision": "4233abe241f422aaa6b2d9be06efdaef"
  },
  {
    "url": "assets/js/46.041ec3b5.js",
    "revision": "2eac8f2d1649eb61f4bf0d5f75546276"
  },
  {
    "url": "assets/js/47.228018d7.js",
    "revision": "7b6e5efedb2c32464d59f210b931d0b8"
  },
  {
    "url": "assets/js/48.b5b60359.js",
    "revision": "77b743c061f2c572eca816280cced006"
  },
  {
    "url": "assets/js/49.cc619cd0.js",
    "revision": "5b710c70492aba6c751ae3d959f0e64b"
  },
  {
    "url": "assets/js/50.d39774a6.js",
    "revision": "fc7bdc615b486bed2adfc524d0c369f3"
  },
  {
    "url": "assets/js/51.d017ce5b.js",
    "revision": "538d560f739c71e2dac746e2ca761f21"
  },
  {
    "url": "assets/js/52.93c44696.js",
    "revision": "0ad7fdfd810e224f092e68d4c1d67529"
  },
  {
    "url": "assets/js/53.e1fa805e.js",
    "revision": "950c3db2b0ba6fb2452c0d22cdae582a"
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
    "url": "assets/js/9.c278d0b7.js",
    "revision": "ca4f9b8c4b5e938795b18fb46649498e"
  },
  {
    "url": "assets/js/app.b6276175.js",
    "revision": "e80ae268ac34a72030fe3ad519586b66"
  },
  {
    "url": "assets/js/vuejs-paginate.1e4ded1a.js",
    "revision": "1e979a049cf867ecd78309dbb18c7bee"
  },
  {
    "url": "category/aria/index.html",
    "revision": "8affca521579193a3c0f066e848b5e09"
  },
  {
    "url": "category/html/index.html",
    "revision": "a11c4dee8d5c58839aef8931549ebb94"
  },
  {
    "url": "category/index.html",
    "revision": "d1eaf0e4bf7b4355de5c94db2e89c118"
  },
  {
    "url": "category/news/index.html",
    "revision": "86f0ba88d11f7336338481f9f451b973"
  },
  {
    "url": "category/packages/index.html",
    "revision": "7d3c05ae14a113443fc5854aa95603a1"
  },
  {
    "url": "category/spa/index.html",
    "revision": "2f864a43b8618980373ad2650c6d1338"
  },
  {
    "url": "category/tools/index.html",
    "revision": "0dbffc8d1573d4353591091d4123e093"
  },
  {
    "url": "category/wcag/index.html",
    "revision": "55ffb7daa73e6fc4f59b99bd2ef0a3bb"
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
    "revision": "ee8df9ee4d241ee142b4846dc1dac53e"
  },
  {
    "url": "posts/index.html",
    "revision": "ff99a382a98b4ae35b50eceeadb50049"
  },
  {
    "url": "posts/post-test/index.html",
    "revision": "a6e17f86105cef522b218d23d2b5ff2f"
  },
  {
    "url": "project/how-to-contribute.html",
    "revision": "4c6bb2c6c5c85bffe1406bb316f3840f"
  },
  {
    "url": "project/index.html",
    "revision": "7161b4e4256f6838ffa01e3b0a85932a"
  },
  {
    "url": "project/people.html",
    "revision": "2fd09d20b9666668d496123bde788980"
  },
  {
    "url": "project/resources.html",
    "revision": "3c50a3fb95fed3cf8ad709ef22c5d48d"
  },
  {
    "url": "project/supporting.html",
    "revision": "8b79dfbd14263a63f9430f4128037ee8"
  },
  {
    "url": "project/tools-testing.html",
    "revision": "8c78d78add34e324d2582fb7d1663ade"
  },
  {
    "url": "project/vue-a11y-checklist.html",
    "revision": "cd5c912bb319a59d3972acf2dfd8beeb"
  },
  {
    "url": "pt/categoria/aria/index.html",
    "revision": "c9b525278ccc05b3b49a37e19da24861"
  },
  {
    "url": "pt/categoria/html/index.html",
    "revision": "5062963081d1265d14f88b6b594991af"
  },
  {
    "url": "pt/categoria/index.html",
    "revision": "6ff7e613a4319f53271e45db16149e6a"
  },
  {
    "url": "pt/categoria/novidades/index.html",
    "revision": "3880daacf4776086c25de8d96598f2da"
  },
  {
    "url": "pt/categoria/packages/index.html",
    "revision": "d090c380a3719af622bf765e53203e87"
  },
  {
    "url": "pt/categoria/spa/index.html",
    "revision": "4d8eabbb31646f377c4b78e8787002ed"
  },
  {
    "url": "pt/categoria/tools/index.html",
    "revision": "62653cce4770364e286ebc548c374a63"
  },
  {
    "url": "pt/categoria/wcag/index.html",
    "revision": "6bf1476736d2040e7bf18786f92e8264"
  },
  {
    "url": "pt/configuracoes/index.html",
    "revision": "5ab69958122d12fe5da881db98b622d0"
  },
  {
    "url": "pt/index.html",
    "revision": "7933144ed398874112594a4cd887ed47"
  },
  {
    "url": "pt/posts/index.html",
    "revision": "debc78d351e697437759eaa6d14cee36"
  },
  {
    "url": "pt/posts/posts-de-teste/index.html",
    "revision": "8add0090a742dbf0dfb8c9b29f1beb9a"
  },
  {
    "url": "pt/projeto/apoiando.html",
    "revision": "135dfd6345b1c7920f4d4429117f5606"
  },
  {
    "url": "pt/projeto/como-contribuir.html",
    "revision": "c6f1b61aa9a4a07b56c5d440276048e4"
  },
  {
    "url": "pt/projeto/ferramentas-e-testes.html",
    "revision": "66b507c19f9556f0602e8a73b37a0d46"
  },
  {
    "url": "pt/projeto/index.html",
    "revision": "0a86561b96cd390fb1c7cc28ca43bb93"
  },
  {
    "url": "pt/projeto/links-uteis.html",
    "revision": "5f80d2dd6555be6603f085a514a0e315"
  },
  {
    "url": "pt/projeto/pessoas.html",
    "revision": "7e03cb92875c22c0f7e39bf330961890"
  },
  {
    "url": "pt/projeto/vue-a11y-checklist.html",
    "revision": "f0cd1b90b3d2b46447bda7381d07d79a"
  },
  {
    "url": "pt/receitas/contribua.html",
    "revision": "fb0e909b2ddb34692b8d3e4aefb55909"
  },
  {
    "url": "pt/receitas/dicas/atributos-aria-no-vue.html",
    "revision": "d5d036cb37e56f9bf9d823132587dbac"
  },
  {
    "url": "pt/receitas/index.html",
    "revision": "b7a54c12a85585653ab5f222501c1735"
  },
  {
    "url": "pt/receitas/widgets/accordion.html",
    "revision": "43855ed4c8a3bdfd2f56aa98802e210c"
  },
  {
    "url": "pt/receitas/widgets/alert.html",
    "revision": "cb07291cbdac6db4fc70e24973a6ea8c"
  },
  {
    "url": "pt/receitas/widgets/breadcrumbs.html",
    "revision": "4ae229af2c28d73f31d6e5017223c967"
  },
  {
    "url": "pt/receitas/widgets/card.html",
    "revision": "3d0cd9e74cd8b7f273cd647480806e24"
  },
  {
    "url": "pt/receitas/widgets/dialog.html",
    "revision": "ceac3ba1587f15f6ab59dbc643800644"
  },
  {
    "url": "pt/receitas/widgets/navegacao-mobile.html",
    "revision": "9100a194bf6656a3d269e7db43dea78e"
  },
  {
    "url": "pt/receitas/widgets/pular-links.html",
    "revision": "253e835470c6fd65d7f1b22ddb1b4731"
  },
  {
    "url": "pt/receitas/widgets/tabs.html",
    "revision": "e0e3dcb1b6b7712e6f8898760f801a29"
  },
  {
    "url": "recipes/contribute.html",
    "revision": "3d1d13f5489218360f5e1a42c393ae9d"
  },
  {
    "url": "recipes/index.html",
    "revision": "564ae304f0a4e741990a83bc4b11ea3b"
  },
  {
    "url": "recipes/tips/aria-attributes-in-vue.html",
    "revision": "51b7e34b4c3225f0e713177b541523e3"
  },
  {
    "url": "recipes/widgets/accordion.html",
    "revision": "5892fa09e354830a79633bbe45fa8c89"
  },
  {
    "url": "recipes/widgets/alert.html",
    "revision": "2e75a4cf85c982f5f21c622c2379ef32"
  },
  {
    "url": "recipes/widgets/breadcrumbs.html",
    "revision": "99a36e2fd305059e3a74c13a26c09f7f"
  },
  {
    "url": "recipes/widgets/card.html",
    "revision": "b25273f71b44e89e268ff52592a563ae"
  },
  {
    "url": "recipes/widgets/dialog.html",
    "revision": "120a12f3ad2c3d0b6209d224b5317727"
  },
  {
    "url": "recipes/widgets/mobile-navigation.html",
    "revision": "5d0ac72849af992a44d7a7f563480b06"
  },
  {
    "url": "recipes/widgets/skip-links.html",
    "revision": "d2798d28a6efc4016163ab32fd4602ff"
  },
  {
    "url": "recipes/widgets/tabs.html",
    "revision": "7845e979db29348ff0e7706fe59bc85b"
  },
  {
    "url": "settings/index.html",
    "revision": "aa486b9bc05b051ca4db87ba1030c927"
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
