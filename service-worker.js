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
    "revision": "bc6cc1fccf434fe50e818de297ac5533"
  },
  {
    "url": "assets/css/0.styles.78893180.css",
    "revision": "8dc18062e02e642f1fa5a81c78781e1f"
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
    "url": "assets/js/1.d02ad5bc.js",
    "revision": "57728b1cff62aae5e7d2d42c1cea2867"
  },
  {
    "url": "assets/js/10.46d1039f.js",
    "revision": "71b2e82a2a6545867a7a60638bead5f1"
  },
  {
    "url": "assets/js/11.a65cff90.js",
    "revision": "d860b05752b5d19125395647f90fa94f"
  },
  {
    "url": "assets/js/12.765c329d.js",
    "revision": "3c196de1f4e7c0c7aec9e6cbc1c5424d"
  },
  {
    "url": "assets/js/13.ee70ee01.js",
    "revision": "efe5fbbcff0d82b8c9c18078cea097a7"
  },
  {
    "url": "assets/js/14.326f1d91.js",
    "revision": "295aff521a23882aabff25c4773bc354"
  },
  {
    "url": "assets/js/15.f62d2774.js",
    "revision": "fbf8cf450f63f52e4afa77a5b4b5e58c"
  },
  {
    "url": "assets/js/16.ae9857bc.js",
    "revision": "63e91a387a507d89ac88602f3f6c371f"
  },
  {
    "url": "assets/js/17.13717119.js",
    "revision": "1d9a668289439fbc8b8112a9df4b0483"
  },
  {
    "url": "assets/js/18.89eccf59.js",
    "revision": "f36d0263ddb92f8ed674272868971acf"
  },
  {
    "url": "assets/js/19.fdefd9c2.js",
    "revision": "16b5bfe8493ff74ebca5cac2b7fa2e3e"
  },
  {
    "url": "assets/js/2.5ca7a5c3.js",
    "revision": "457fc64f47c7f8810eb067721644f7cb"
  },
  {
    "url": "assets/js/20.25e10d25.js",
    "revision": "30df9fc1f3e9bb002436281ddae60e41"
  },
  {
    "url": "assets/js/21.63f8a83e.js",
    "revision": "01a940fa4b999f3348928a49f411b0e2"
  },
  {
    "url": "assets/js/22.127e9463.js",
    "revision": "e1d133144ea59746fadb71222d26795a"
  },
  {
    "url": "assets/js/23.eca069cd.js",
    "revision": "2db785301be904cfc59b687939a04884"
  },
  {
    "url": "assets/js/24.d9f2cfe2.js",
    "revision": "16c87d2883267f295ec239f5cb4f0a7c"
  },
  {
    "url": "assets/js/25.e70e4b0b.js",
    "revision": "65b46e20ce23909a81a4490222874acd"
  },
  {
    "url": "assets/js/26.f982786b.js",
    "revision": "f34ffae4be369ac30b0ac5826ecf2c29"
  },
  {
    "url": "assets/js/27.5a62b314.js",
    "revision": "bccdea075c27cb11ab5ff8ea9660c770"
  },
  {
    "url": "assets/js/28.66cc3065.js",
    "revision": "205825fc36045a8d73b8598e0508740e"
  },
  {
    "url": "assets/js/29.b0116812.js",
    "revision": "600eeefc9dfea77bd86458319b32f785"
  },
  {
    "url": "assets/js/3.53b8ad9a.js",
    "revision": "dfc2337891529550e9b3b0591867f133"
  },
  {
    "url": "assets/js/30.d5e12ffc.js",
    "revision": "ae8a626bd5e2a9d2c8a92db677ba67ca"
  },
  {
    "url": "assets/js/31.7cbcdaf1.js",
    "revision": "dac5e3a3157f3533fcfd7b2dac8cf140"
  },
  {
    "url": "assets/js/32.e6f48d98.js",
    "revision": "01532369094f7259921a81bf5b06d63a"
  },
  {
    "url": "assets/js/33.91a4492d.js",
    "revision": "d6e31bc50529d7a584d0aa2af9314585"
  },
  {
    "url": "assets/js/34.c8a3e023.js",
    "revision": "e535e529494be85ec1d06aa4588678d1"
  },
  {
    "url": "assets/js/35.cb29c2d9.js",
    "revision": "21092c3d7753c23871c78a6ae32c77ff"
  },
  {
    "url": "assets/js/36.fe003978.js",
    "revision": "02a5977ff482468a11656cb79bb848a2"
  },
  {
    "url": "assets/js/37.06c6ba64.js",
    "revision": "cad75cc911f52bb1153f523a96c52238"
  },
  {
    "url": "assets/js/38.688aa78c.js",
    "revision": "84fba4247f33657ce627996af262be3c"
  },
  {
    "url": "assets/js/39.d902ebf5.js",
    "revision": "0cac3b647eb5c031350e05951c23d64a"
  },
  {
    "url": "assets/js/40.f558f7bc.js",
    "revision": "0651dfb2fd01d269d01b2b7102fbb9a8"
  },
  {
    "url": "assets/js/41.11873400.js",
    "revision": "966668fd4ab0093766992c5226c884a8"
  },
  {
    "url": "assets/js/42.8f9eba59.js",
    "revision": "33df6eb01ec3c5062a74186e41207f07"
  },
  {
    "url": "assets/js/43.07294b5d.js",
    "revision": "e2917cfe9c634bc0be17fe8078ecaf25"
  },
  {
    "url": "assets/js/44.9370e39f.js",
    "revision": "a18cad747b3a8c4516b21de3967e4654"
  },
  {
    "url": "assets/js/45.9203a52c.js",
    "revision": "20fed60ee9e04f1fa328dfd1b5fc8621"
  },
  {
    "url": "assets/js/46.ea87f548.js",
    "revision": "7242c0e30501c9a8811db110d086f189"
  },
  {
    "url": "assets/js/47.49e2bd31.js",
    "revision": "61a4edc71900c0e166fb1f713686f0f3"
  },
  {
    "url": "assets/js/48.569e4bc5.js",
    "revision": "b39ed3234d6665094fb3cff0c132af4d"
  },
  {
    "url": "assets/js/49.7d6b3872.js",
    "revision": "32767bcdece58e5349369e211b45c1bc"
  },
  {
    "url": "assets/js/50.6e1a1ae4.js",
    "revision": "01f563a562cb4634b19dd0ee47c05b43"
  },
  {
    "url": "assets/js/51.ebe04690.js",
    "revision": "c9cb4588ffb5b5f85bf60b9754f55767"
  },
  {
    "url": "assets/js/52.0c0587dd.js",
    "revision": "4d80644f62d60b09316adacd00e783fc"
  },
  {
    "url": "assets/js/53.ef62de85.js",
    "revision": "305bd9f0df0e6e6d0880f1ebba2b62af"
  },
  {
    "url": "assets/js/54.5debf7dc.js",
    "revision": "a2d4d3908eb820f0c138a04ca3bdf704"
  },
  {
    "url": "assets/js/6.c2d1d254.js",
    "revision": "7b90691f5e0983faf326c85976b6255f"
  },
  {
    "url": "assets/js/7.efc748cf.js",
    "revision": "483807ca8aee674ba9519b1aac8857f6"
  },
  {
    "url": "assets/js/8.23bc5efc.js",
    "revision": "cce93beb0930b8b10f694973d666b15f"
  },
  {
    "url": "assets/js/9.b4531e5a.js",
    "revision": "31c31951122b575ba56ccddc6cc1af35"
  },
  {
    "url": "assets/js/app.3ee02d9e.js",
    "revision": "51afa75b74fff1228e33843a5f70ed57"
  },
  {
    "url": "assets/js/vuejs-paginate.20dd2929.js",
    "revision": "e661309be3db5bef67430eed32a03cb6"
  },
  {
    "url": "category/aria/index.html",
    "revision": "b8726bf19684a4b4986b555ddd2f10a0"
  },
  {
    "url": "category/html/index.html",
    "revision": "9d4b44ffa9424731a4fd35c7bbc7a851"
  },
  {
    "url": "category/index.html",
    "revision": "46af1545dfa16b856dd1c47cb5d52bf6"
  },
  {
    "url": "category/news/index.html",
    "revision": "52a52eef309168aa2ba40e2eb9c94087"
  },
  {
    "url": "category/packages/index.html",
    "revision": "c8c68e1b393d02a08ce48d795501f446"
  },
  {
    "url": "category/spa/index.html",
    "revision": "178f62ab24d54a993cf80d0c7fd8ad50"
  },
  {
    "url": "category/tools/index.html",
    "revision": "29efe7c840303d36176d7cce5f0a3036"
  },
  {
    "url": "category/wcag/index.html",
    "revision": "a506644cbca853659b40b54c052aa696"
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
    "revision": "4cadcfbf3106477239b718b73b5a3261"
  },
  {
    "url": "posts/index.html",
    "revision": "732eadc036dc36ecaed3d6bb5325308f"
  },
  {
    "url": "posts/post-test/index.html",
    "revision": "3adc386d203aa6527e59bc07d45e877b"
  },
  {
    "url": "project/contributors.html",
    "revision": "12014ed2645edfe2e9590b3dd3f069d8"
  },
  {
    "url": "project/index.html",
    "revision": "c510d773763f19b017ed22ed31bad8d3"
  },
  {
    "url": "project/resources.html",
    "revision": "ec6218909aa4d0ab56d9d8b2c39dc82e"
  },
  {
    "url": "project/supporting.html",
    "revision": "0a95cc41f6041b8fb882cbda85f46ff4"
  },
  {
    "url": "project/tools-testing.html",
    "revision": "b2bdc381ddcca8e135b0040c46d3bc1c"
  },
  {
    "url": "project/vue-a11y-checklist.html",
    "revision": "c15fbae83cc2d5d104d7e2e01a7cf1f8"
  },
  {
    "url": "pt/categoria/aria/index.html",
    "revision": "3b02e720fa9775cc1967eae163245f21"
  },
  {
    "url": "pt/categoria/html/index.html",
    "revision": "eb49de84a234711f5c28c4c29648d426"
  },
  {
    "url": "pt/categoria/index.html",
    "revision": "9480ecd252bfae90c10d2e68cb19ef28"
  },
  {
    "url": "pt/categoria/novidades/index.html",
    "revision": "44e44e80e1c45c3894939d6fac41ee70"
  },
  {
    "url": "pt/categoria/packages/index.html",
    "revision": "4e4a533572354f09b7f10b66ed820ccb"
  },
  {
    "url": "pt/categoria/spa/index.html",
    "revision": "00b60b21356de78d825f204065ecc28d"
  },
  {
    "url": "pt/categoria/tools/index.html",
    "revision": "9257643491380a131ed579b53be658e7"
  },
  {
    "url": "pt/categoria/wcag/index.html",
    "revision": "849b697e5ae7c4e3c7cf14ce8f575487"
  },
  {
    "url": "pt/configuracoes/index.html",
    "revision": "89f73c652a22f128e64efa94ebcdc2e7"
  },
  {
    "url": "pt/index.html",
    "revision": "c6bc1ad34cfaca0662df94f36e3076fe"
  },
  {
    "url": "pt/posts/index.html",
    "revision": "2a6b5e2ace5743c02cf9da5252e8a34a"
  },
  {
    "url": "pt/posts/posts-de-teste/index.html",
    "revision": "2968afbc1dac8452b5aaedaa08375a18"
  },
  {
    "url": "pt/projeto/apoiando.html",
    "revision": "1e60b6c031159a0d30a05afea771c00e"
  },
  {
    "url": "pt/projeto/contribuidores.html",
    "revision": "1064a69444beabe36b62cc0c427c0f9e"
  },
  {
    "url": "pt/projeto/ferramentas-e-testes.html",
    "revision": "d50bd72ceeeaaf4d5a18ef0364447c37"
  },
  {
    "url": "pt/projeto/index.html",
    "revision": "0d070e129da9b2220ea9b9e0d773ea65"
  },
  {
    "url": "pt/projeto/links-uteis.html",
    "revision": "34ce9d46ed0201236eb42f57fdd80e56"
  },
  {
    "url": "pt/projeto/vue-a11y-checklist.html",
    "revision": "4bc103df49d28eb50e7bd20287e8bf04"
  },
  {
    "url": "pt/receitas/contribua.html",
    "revision": "37f28c9126e539efd75a3652a86abc02"
  },
  {
    "url": "pt/receitas/dicas/atributos-aria-no-vue.html",
    "revision": "6bc3007a3bbfc52af1819f3e74aeb87c"
  },
  {
    "url": "pt/receitas/index.html",
    "revision": "28608e90408a392212cff52d93f35cd7"
  },
  {
    "url": "pt/receitas/widgets/accordion.html",
    "revision": "79a98b5b6834a617b111017f3cdcfaf2"
  },
  {
    "url": "pt/receitas/widgets/alert.html",
    "revision": "ee70f03f45e0f9dd928a7cd141f35778"
  },
  {
    "url": "pt/receitas/widgets/breadcrumbs.html",
    "revision": "697db1d009996be2458f0238224b8d8d"
  },
  {
    "url": "pt/receitas/widgets/card.html",
    "revision": "041e56c7faae64e01c2a028d6a8ad32c"
  },
  {
    "url": "pt/receitas/widgets/dialog.html",
    "revision": "1d63e1542d0f9228377a214330a10ff7"
  },
  {
    "url": "pt/receitas/widgets/navegacao-mobile.html",
    "revision": "31c47e7f872dffa2d821fba47357e224"
  },
  {
    "url": "pt/receitas/widgets/pular-links.html",
    "revision": "f7946b3d2e6c28a7f081fbfb4edc23aa"
  },
  {
    "url": "pt/receitas/widgets/tabs.html",
    "revision": "cd4adaa539aa43dece13d482e9c2cbcc"
  },
  {
    "url": "recipes/contribute.html",
    "revision": "5a1ba059313748ef22a0687c65b25e6d"
  },
  {
    "url": "recipes/index.html",
    "revision": "dd6962de821e2acf8c2e68b608daad1d"
  },
  {
    "url": "recipes/tips/aria-attributes-in-vue.html",
    "revision": "9bd8537977271880009faccdc15372d6"
  },
  {
    "url": "recipes/widgets/accordion.html",
    "revision": "cb33e34a13552c6e600f29c708d6da84"
  },
  {
    "url": "recipes/widgets/alert.html",
    "revision": "3e6e204d326951878bcdda6c585921e2"
  },
  {
    "url": "recipes/widgets/breadcrumbs.html",
    "revision": "7856df801fa3f02c5e69f433aec97c17"
  },
  {
    "url": "recipes/widgets/card.html",
    "revision": "b07c4b96a900300659c2c690efb6ee1e"
  },
  {
    "url": "recipes/widgets/dialog.html",
    "revision": "c2b45f38419bb6adcd68a2131fc840fd"
  },
  {
    "url": "recipes/widgets/mobile-navigation.html",
    "revision": "a2e190eaabfa673b04e026e32b7e7cae"
  },
  {
    "url": "recipes/widgets/skip-links.html",
    "revision": "83531c032e8a7d72c26c169756222031"
  },
  {
    "url": "recipes/widgets/tabs.html",
    "revision": "9b96eb40b470601fb4b152066696657b"
  },
  {
    "url": "settings/index.html",
    "revision": "9ffb468a1e3cfcad002b07f573204d89"
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
