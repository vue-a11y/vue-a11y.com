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
    "revision": "c736839a43d50befceea6ac7e017ffc1"
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
    "url": "assets/js/15.bd473ddf.js",
    "revision": "e5c5468e0ae29b76a556a52a5efcb633"
  },
  {
    "url": "assets/js/16.138d5e67.js",
    "revision": "484478bee89fa3b02fd72a083bd2fb19"
  },
  {
    "url": "assets/js/17.d5903c15.js",
    "revision": "c15d3c8bb2ac4e0b2dca2ae1f9a2f405"
  },
  {
    "url": "assets/js/18.2a0005c7.js",
    "revision": "c57675b2cfb676d6a69a1758208f6160"
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
    "url": "assets/js/20.647c2c29.js",
    "revision": "af4a150616ea90198f57afcea96c21fa"
  },
  {
    "url": "assets/js/21.6e777505.js",
    "revision": "5ea40ad5533099d129ebc08e0213669e"
  },
  {
    "url": "assets/js/22.9cc2f925.js",
    "revision": "3271f16985705a8171cd6124bbe29ba7"
  },
  {
    "url": "assets/js/23.b08aebb9.js",
    "revision": "e5b42070756a5313b6c5e79cf7834a9d"
  },
  {
    "url": "assets/js/24.4d3a6da1.js",
    "revision": "6f6d6e61ca846e1ea4cc0e87a0948065"
  },
  {
    "url": "assets/js/25.b17c46d7.js",
    "revision": "043a4fbb440bfc50fb475fd66c07dce2"
  },
  {
    "url": "assets/js/26.37db3a95.js",
    "revision": "5e518bb1ed14fb6d75263b2c5cb68c0d"
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
    "url": "assets/js/32.a45328b7.js",
    "revision": "6ff7ed9d08bbcdb7cee8bb148f2acf27"
  },
  {
    "url": "assets/js/33.7b5b2266.js",
    "revision": "dca4e356eccac3bf8c26186bbf5aaa82"
  },
  {
    "url": "assets/js/34.a3124c6f.js",
    "revision": "257a64572339056025de4f690011f0a3"
  },
  {
    "url": "assets/js/35.b04e2e5f.js",
    "revision": "3fb8a16b25a2476f1bec140fe30bc941"
  },
  {
    "url": "assets/js/36.0b7b91a6.js",
    "revision": "2638cf0f5ee97ac783bee169aca6de47"
  },
  {
    "url": "assets/js/37.145179cd.js",
    "revision": "89f32a6581ff9a3dec56f0578307c0c1"
  },
  {
    "url": "assets/js/38.9fa2442b.js",
    "revision": "b363a0af51513a529310ff1e910debca"
  },
  {
    "url": "assets/js/39.d92e8c71.js",
    "revision": "263613b5e4b4c21bffe22128ac3aacd5"
  },
  {
    "url": "assets/js/40.c7d0e9dd.js",
    "revision": "e51373b3cfd3d5ada7f0235c4a5ef951"
  },
  {
    "url": "assets/js/41.6cb0cf21.js",
    "revision": "a3145879d656b3385bb899cb1ee69578"
  },
  {
    "url": "assets/js/42.937c384e.js",
    "revision": "2e75d032fc0c3a03dfff8955bebdbe8a"
  },
  {
    "url": "assets/js/43.18d2333f.js",
    "revision": "96e33bda22de9a91b29a62acef3932ae"
  },
  {
    "url": "assets/js/44.e265c57e.js",
    "revision": "a87a696af83ab7572b72550c7fe189af"
  },
  {
    "url": "assets/js/45.17ab32e4.js",
    "revision": "c397f3e562aa6dd9d833e1f96210ded1"
  },
  {
    "url": "assets/js/46.5ff1b7b9.js",
    "revision": "0271d55c49e98211f12ee56d0cbf11dd"
  },
  {
    "url": "assets/js/47.c8ad1476.js",
    "revision": "139bf63f11475e144d72eaf4b83bc7ac"
  },
  {
    "url": "assets/js/48.b5b60359.js",
    "revision": "77b743c061f2c572eca816280cced006"
  },
  {
    "url": "assets/js/49.db13a757.js",
    "revision": "e521698980e8422a5d872af68234078b"
  },
  {
    "url": "assets/js/50.060ecde4.js",
    "revision": "aa4b90bc7e49ab1293099f77c12b63ff"
  },
  {
    "url": "assets/js/51.d017ce5b.js",
    "revision": "538d560f739c71e2dac746e2ca761f21"
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
    "url": "assets/js/9.c278d0b7.js",
    "revision": "ca4f9b8c4b5e938795b18fb46649498e"
  },
  {
    "url": "assets/js/app.d66289cb.js",
    "revision": "683ca38995420053ce457cf80a062d6a"
  },
  {
    "url": "assets/js/vuejs-paginate.1e4ded1a.js",
    "revision": "1e979a049cf867ecd78309dbb18c7bee"
  },
  {
    "url": "category/aria/index.html",
    "revision": "a0d25d2532ab661698ce63881872f033"
  },
  {
    "url": "category/html/index.html",
    "revision": "3dd73b07f15756c2bdc248e972366db4"
  },
  {
    "url": "category/index.html",
    "revision": "3a7d28ad70eb36aaac1ef5e741e1b868"
  },
  {
    "url": "category/news/index.html",
    "revision": "05945da0b64d5dd4eb6e9778a585e3ba"
  },
  {
    "url": "category/packages/index.html",
    "revision": "d7a31672307a30f0e5134da5219b735b"
  },
  {
    "url": "category/spa/index.html",
    "revision": "4f0b645151ada1b6bd87784d63d670b4"
  },
  {
    "url": "category/tools/index.html",
    "revision": "5039df3c6dd0f0c3c29fb451fd0bee47"
  },
  {
    "url": "category/wcag/index.html",
    "revision": "d7c87c023ddd556e038a62595c6e549c"
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
    "revision": "706b5235008c0d7bf3b7f16d57e30a80"
  },
  {
    "url": "posts/index.html",
    "revision": "b5e472ff053cdfa7a09fb00ae7d29b28"
  },
  {
    "url": "posts/post-test/index.html",
    "revision": "de693a157a6601894c3df43abfe33f43"
  },
  {
    "url": "project/how-to-contribute.html",
    "revision": "38b6e0caed9876166bc9458d2576d4b8"
  },
  {
    "url": "project/index.html",
    "revision": "dae04a037c5be2705028483c6ca75cb5"
  },
  {
    "url": "project/people.html",
    "revision": "fe4a6537603bd88e264f894ac0ccfb66"
  },
  {
    "url": "project/resources.html",
    "revision": "3de034849561c1a31ae47d3e76921c33"
  },
  {
    "url": "project/supporting.html",
    "revision": "b9029306c8e0c1b8ed0b74ec754d20cd"
  },
  {
    "url": "project/tools-testing.html",
    "revision": "fff11ca7cdee93ab9a1061e1eda16a2c"
  },
  {
    "url": "project/vue-a11y-checklist.html",
    "revision": "4774b5dbc807e5a65f44730779093e9a"
  },
  {
    "url": "pt/categoria/aria/index.html",
    "revision": "9e5d116b138f9e1b6075e4b66d86d4ce"
  },
  {
    "url": "pt/categoria/html/index.html",
    "revision": "f13d96bcded1711e4219fe8256b20a48"
  },
  {
    "url": "pt/categoria/index.html",
    "revision": "9ad6acd3016a9c3676429f7eb1bb7fc1"
  },
  {
    "url": "pt/categoria/novidades/index.html",
    "revision": "900449351c8ca5a12087c16317410c05"
  },
  {
    "url": "pt/categoria/packages/index.html",
    "revision": "59fdcc6731a5afc7d4e2105c4b905b87"
  },
  {
    "url": "pt/categoria/spa/index.html",
    "revision": "314d1f7a10d3c16df43f6f5afaee467b"
  },
  {
    "url": "pt/categoria/tools/index.html",
    "revision": "1f14b96ebfee063e7ed08c1b5d7c6d3d"
  },
  {
    "url": "pt/categoria/wcag/index.html",
    "revision": "c7e1cb77fa99ca0118142102e5cb73ea"
  },
  {
    "url": "pt/configuracoes/index.html",
    "revision": "ae88b98c1e4ebac9a812bc4e1772f243"
  },
  {
    "url": "pt/index.html",
    "revision": "576b40952253a52ae4175df7c5f92388"
  },
  {
    "url": "pt/posts/index.html",
    "revision": "3d0042f4621d0f2a22d8e931d18c6bd7"
  },
  {
    "url": "pt/posts/posts-de-teste/index.html",
    "revision": "47aa6e3f6b6fcb2bea3d0712c7a5aba7"
  },
  {
    "url": "pt/projeto/apoiando.html",
    "revision": "32b0750f7e1339de8a79e213a3f5ab47"
  },
  {
    "url": "pt/projeto/como-contribuir.html",
    "revision": "9fb2393db987884a9fe12eed8c9992a7"
  },
  {
    "url": "pt/projeto/ferramentas-e-testes.html",
    "revision": "f76a1189fa832c1dac63809b92ba3b56"
  },
  {
    "url": "pt/projeto/index.html",
    "revision": "940cd5a9eff29fd28232bfe423d4ff72"
  },
  {
    "url": "pt/projeto/links-uteis.html",
    "revision": "ea101ef737af5422e06337a7e39a4563"
  },
  {
    "url": "pt/projeto/pessoas.html",
    "revision": "37a42f65107f83d9632224e074ef970a"
  },
  {
    "url": "pt/projeto/vue-a11y-checklist.html",
    "revision": "7414a7a422667e0088cb8a3c12540a6f"
  },
  {
    "url": "pt/receitas/contribua.html",
    "revision": "f09e6270ee39b9b654612685566b6208"
  },
  {
    "url": "pt/receitas/dicas/atributos-aria-no-vue.html",
    "revision": "e91f665e8b3b497f4847f1e359e87148"
  },
  {
    "url": "pt/receitas/index.html",
    "revision": "81badc621e8a4e08c03dad679688a3a3"
  },
  {
    "url": "pt/receitas/widgets/accordion.html",
    "revision": "c4776baca2fc6f0404ebabe661e0184b"
  },
  {
    "url": "pt/receitas/widgets/alert.html",
    "revision": "ee509e535119562a74de0b6766d74d6c"
  },
  {
    "url": "pt/receitas/widgets/breadcrumbs.html",
    "revision": "89c68bab1d7f3a29c768e22b09219e12"
  },
  {
    "url": "pt/receitas/widgets/card.html",
    "revision": "90fa4b25c638764fa79e4833d257ab0a"
  },
  {
    "url": "pt/receitas/widgets/dialog.html",
    "revision": "dac77549a72ca976091971dab02ab07a"
  },
  {
    "url": "pt/receitas/widgets/navegacao-mobile.html",
    "revision": "1feed2879694c7f8612c302de4d50505"
  },
  {
    "url": "pt/receitas/widgets/pular-links.html",
    "revision": "f9e1fb07b864972a90405d8059db78a2"
  },
  {
    "url": "pt/receitas/widgets/tabs.html",
    "revision": "2335607e44db0c8db23c6d28dae3493a"
  },
  {
    "url": "recipes/contribute.html",
    "revision": "db263c6b8225cc1d15f1c6a58db44da1"
  },
  {
    "url": "recipes/index.html",
    "revision": "381f8ef74bd7a35a6bb4b9989201dfde"
  },
  {
    "url": "recipes/tips/aria-attributes-in-vue.html",
    "revision": "1883dd01026b1f8b19b5eb565a5fb4e9"
  },
  {
    "url": "recipes/widgets/accordion.html",
    "revision": "1dd8cc3ae004db44850b9baa229e004f"
  },
  {
    "url": "recipes/widgets/alert.html",
    "revision": "c95034736f8c1cfade689f6b8a85c660"
  },
  {
    "url": "recipes/widgets/breadcrumbs.html",
    "revision": "8044f21f04311110b10fb140eb1c9bd7"
  },
  {
    "url": "recipes/widgets/card.html",
    "revision": "0b6cd238805f38b49fbe8466820ccd42"
  },
  {
    "url": "recipes/widgets/dialog.html",
    "revision": "01d638c1a881028fcbcb555ac7ba4952"
  },
  {
    "url": "recipes/widgets/mobile-navigation.html",
    "revision": "b7bd6b038f29e371f5382fec1903fc62"
  },
  {
    "url": "recipes/widgets/skip-links.html",
    "revision": "bc735397d8ffd594115172b4229602d5"
  },
  {
    "url": "recipes/widgets/tabs.html",
    "revision": "a826141edd76f707aa7c03befc7fc046"
  },
  {
    "url": "settings/index.html",
    "revision": "c2da507ea3f6c2f2e00b1e50f8254553"
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
