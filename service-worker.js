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
    "revision": "a96cf3f0bda241fa858f1552cdd58661"
  },
  {
    "url": "assets/css/0.styles.c423d989.css",
    "revision": "48a1a4162b57666e12cab4c9779a18e3"
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
    "url": "assets/js/1.ec3fcad6.js",
    "revision": "22323f6988f874e017baabb1c6735a05"
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
    "url": "assets/js/16.b64542d0.js",
    "revision": "5a997224ff5b147fe87acc8130c4f7c3"
  },
  {
    "url": "assets/js/17.95dffad9.js",
    "revision": "11ae4d94391f174834892621a2aebe76"
  },
  {
    "url": "assets/js/18.b25f2951.js",
    "revision": "7e892e660b2160c2e645eeb13132be09"
  },
  {
    "url": "assets/js/19.f43b0dca.js",
    "revision": "df514b14af13af5453105a4290072099"
  },
  {
    "url": "assets/js/2.20a39df7.js",
    "revision": "4a24d608d3eebfb324477d1d8831d36f"
  },
  {
    "url": "assets/js/20.06ca6141.js",
    "revision": "568b929e04895ec768d73bc88b4f1bca"
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
    "url": "assets/js/25.65f45e36.js",
    "revision": "08af81f11fbea6e3f7c9e409ac70b6bf"
  },
  {
    "url": "assets/js/26.eb4d5b02.js",
    "revision": "64ad1230bb5f63f9f7b36fa4dda7fefd"
  },
  {
    "url": "assets/js/27.aa34ab41.js",
    "revision": "e7ff8688584d09602c69592d3b00b29d"
  },
  {
    "url": "assets/js/28.345ca9a3.js",
    "revision": "9c06248d39d88070ff1a9a74e39ca001"
  },
  {
    "url": "assets/js/29.e1ad6cb1.js",
    "revision": "a4906e4eea5f69a68aa7d8abb20e7931"
  },
  {
    "url": "assets/js/3.adb4e861.js",
    "revision": "7fdcc67727ab4a48e3bdafcdc2c5a5b2"
  },
  {
    "url": "assets/js/30.ee6f5a27.js",
    "revision": "f7dd5f4e0b0a1a72c5a45bb79ae2945c"
  },
  {
    "url": "assets/js/31.4d7d8488.js",
    "revision": "7ea7f8ad1ddcb9c2e1b42804b8a6f40d"
  },
  {
    "url": "assets/js/32.24309055.js",
    "revision": "61c49a8adad83a44492b40a0c4e8549a"
  },
  {
    "url": "assets/js/33.be6b74e6.js",
    "revision": "f6e1f7360a4bdd3901aa93a1bc815f60"
  },
  {
    "url": "assets/js/34.5c95d445.js",
    "revision": "daa8b547ab66e3b0ec3dce131a524762"
  },
  {
    "url": "assets/js/35.353bcbb2.js",
    "revision": "9d32b22a87f12ce37fffbfddf687f3c3"
  },
  {
    "url": "assets/js/36.a5c31249.js",
    "revision": "634ad641c57cc806b379860355ccfefc"
  },
  {
    "url": "assets/js/37.145179cd.js",
    "revision": "89f32a6581ff9a3dec56f0578307c0c1"
  },
  {
    "url": "assets/js/38.41ec0647.js",
    "revision": "8d16197a9aa438fea9598a15feade9eb"
  },
  {
    "url": "assets/js/39.e6d3066a.js",
    "revision": "c38a680a5ae993933b798fbc22f9d4d6"
  },
  {
    "url": "assets/js/40.ae487d0a.js",
    "revision": "be4a8e4b32900a887777d5f537e994f6"
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
    "url": "assets/js/46.2d4c743c.js",
    "revision": "3f71a6842b18a90be3177555fc9e4d4f"
  },
  {
    "url": "assets/js/47.71e68247.js",
    "revision": "c1ca97c5673531d72d125652cd335e5a"
  },
  {
    "url": "assets/js/48.bbe63403.js",
    "revision": "5da673b84f087b9529f219cc4162dd40"
  },
  {
    "url": "assets/js/49.4229aacb.js",
    "revision": "9a830613ce3bde04c6cc3f1cb994cded"
  },
  {
    "url": "assets/js/50.d39774a6.js",
    "revision": "fc7bdc615b486bed2adfc524d0c369f3"
  },
  {
    "url": "assets/js/51.b9e645ac.js",
    "revision": "db4ee9d38c4d72167dbfbdbdd572f192"
  },
  {
    "url": "assets/js/52.ea0d2e77.js",
    "revision": "9939ac4a9c945c34d04cc5eb45ef338f"
  },
  {
    "url": "assets/js/53.7abd2cd0.js",
    "revision": "61033a567e0a986440c55d28317d7156"
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
    "url": "assets/js/6.d174e65a.js",
    "revision": "fc1cb2188f877c43365a33c0306ee5bf"
  },
  {
    "url": "assets/js/7.d0a2b2bb.js",
    "revision": "2f12e75279d4a332a9584f5a5b3d6116"
  },
  {
    "url": "assets/js/8.2711d3a4.js",
    "revision": "3cedb57d4cba5dfcb4e0e7031263971a"
  },
  {
    "url": "assets/js/9.6cb281dd.js",
    "revision": "f2c7b11fe7953ad584134c48867625df"
  },
  {
    "url": "assets/js/app.8f8a904f.js",
    "revision": "c99559859a3d9040dbca800abb261f78"
  },
  {
    "url": "assets/js/vuejs-paginate.1e4ded1a.js",
    "revision": "1e979a049cf867ecd78309dbb18c7bee"
  },
  {
    "url": "category/aria/index.html",
    "revision": "a63c7e16dee8d0c844eef42815bb9eff"
  },
  {
    "url": "category/html/index.html",
    "revision": "1dcdab26ea7d02dbcc5df85d30dfc2cc"
  },
  {
    "url": "category/index.html",
    "revision": "f80176bc304505aab419de387a13fef5"
  },
  {
    "url": "category/news/index.html",
    "revision": "8616170c6d59e25d887430d43ba89202"
  },
  {
    "url": "category/packages/index.html",
    "revision": "10349ab58888908888211a8a5e1cfdf8"
  },
  {
    "url": "category/spa/index.html",
    "revision": "d95fcfc9b4bfdcd59e68c21a8c92791d"
  },
  {
    "url": "category/tools/index.html",
    "revision": "9e0310dbea4daba906e031516142d937"
  },
  {
    "url": "category/wcag/index.html",
    "revision": "d5550524eae5e55fdb393e5fb800676c"
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
    "revision": "4eb252ae3630db8faed501252e685011"
  },
  {
    "url": "posts/index.html",
    "revision": "8359a225c237872837fc54e9bebe30e2"
  },
  {
    "url": "posts/post-test/index.html",
    "revision": "4a4bf2002860ce78ebbbd8b7069c240d"
  },
  {
    "url": "project/how-to-contribute.html",
    "revision": "535d10467214105b6eb802a4b4a3cbe7"
  },
  {
    "url": "project/index.html",
    "revision": "8c737c531f3f2edf0cdae20fabed9b2e"
  },
  {
    "url": "project/people.html",
    "revision": "91b3aa563cc64403ba0922f38756f854"
  },
  {
    "url": "project/resources.html",
    "revision": "3d0bebbee6d4b9dba3480cef8dda87d3"
  },
  {
    "url": "project/supporting.html",
    "revision": "2f216134e85dbb8edd752cc4f697133b"
  },
  {
    "url": "project/tools-testing.html",
    "revision": "3f4da4bfbfb0da4671c8c7ac5585273e"
  },
  {
    "url": "project/vue-a11y-checklist.html",
    "revision": "2f2ed587fa67bd03ca8d96a5b7e5ac1e"
  },
  {
    "url": "pt/categoria/aria/index.html",
    "revision": "bcb39f0cc3c4ac4f6d495ffa333bd5ad"
  },
  {
    "url": "pt/categoria/html/index.html",
    "revision": "ee7fbe425f63a8823ec6cf076b829a93"
  },
  {
    "url": "pt/categoria/index.html",
    "revision": "e4677fc537dc57835631fed6e11083a0"
  },
  {
    "url": "pt/categoria/novidades/index.html",
    "revision": "d93d13e8c43511792baad53951840ce5"
  },
  {
    "url": "pt/categoria/packages/index.html",
    "revision": "af225b024a67e15b7c89d888471a41d6"
  },
  {
    "url": "pt/categoria/spa/index.html",
    "revision": "028909205029db7550082cb14a5746e2"
  },
  {
    "url": "pt/categoria/tools/index.html",
    "revision": "ad5d7e8ffab06198cf0367cea246dfb2"
  },
  {
    "url": "pt/categoria/wcag/index.html",
    "revision": "2ded4f28de9c5f752aa3123c92678e7c"
  },
  {
    "url": "pt/configuracoes/index.html",
    "revision": "2fe7b36bde69f9d951661652f99f06b1"
  },
  {
    "url": "pt/index.html",
    "revision": "5eb3d61e609bf2d75006715654203728"
  },
  {
    "url": "pt/posts/index.html",
    "revision": "21b713cd77ad95f7c3fcaf3f25e68426"
  },
  {
    "url": "pt/posts/posts-de-teste/index.html",
    "revision": "a3f7a5fd9a873e1669165563a7b47c24"
  },
  {
    "url": "pt/projeto/apoiando.html",
    "revision": "0c01c9dcad290396c6884875e0aaec7b"
  },
  {
    "url": "pt/projeto/como-contribuir.html",
    "revision": "36b2bd3b1374efb2abe6bd510556357b"
  },
  {
    "url": "pt/projeto/ferramentas-e-testes.html",
    "revision": "6f23d76ca6ff41f6a750274194f8d6e1"
  },
  {
    "url": "pt/projeto/index.html",
    "revision": "2517fa7e65aa6adad45e69214dfb82e3"
  },
  {
    "url": "pt/projeto/links-uteis.html",
    "revision": "d0f4ac670fcfe7ddf9355fd5bac9e8d1"
  },
  {
    "url": "pt/projeto/pessoas.html",
    "revision": "ce20bcbf3341feee842727f7f5deed3c"
  },
  {
    "url": "pt/projeto/vue-a11y-checklist.html",
    "revision": "2dea04c5c1832ef4421593a7463fe08b"
  },
  {
    "url": "pt/receitas/contribua.html",
    "revision": "eb99948f896cec5ab27ca77e2b07f47a"
  },
  {
    "url": "pt/receitas/dicas/atributos-aria-no-vue.html",
    "revision": "c967a4e2786f08fbd62643584df4d766"
  },
  {
    "url": "pt/receitas/index.html",
    "revision": "4dcf729a72037aafbd3cbf08e690147c"
  },
  {
    "url": "pt/receitas/widgets/accordion.html",
    "revision": "b18fa1771bfe24574a1c165f3395cdc5"
  },
  {
    "url": "pt/receitas/widgets/alert.html",
    "revision": "9cd3e97002d37a46b559fd0817e52f0e"
  },
  {
    "url": "pt/receitas/widgets/breadcrumbs.html",
    "revision": "a70afd1125ed6f2f1b884fc5a142d06f"
  },
  {
    "url": "pt/receitas/widgets/card.html",
    "revision": "3fa4549a2d5c3dea89cff589314c994d"
  },
  {
    "url": "pt/receitas/widgets/dialog.html",
    "revision": "6ceacf7d1ff3f1af59daa8821123bb7e"
  },
  {
    "url": "pt/receitas/widgets/navegacao-mobile.html",
    "revision": "4ea7ddbef0fa27fa8d062ebb89f34fa0"
  },
  {
    "url": "pt/receitas/widgets/pular-links.html",
    "revision": "6a9bbf5590ea2d17fbcdb627cd155f4c"
  },
  {
    "url": "pt/receitas/widgets/tabs.html",
    "revision": "9c702d7652ac8852b248f3723a4459dc"
  },
  {
    "url": "recipes/contribute.html",
    "revision": "4de412c507c9c51be891ef54eb574256"
  },
  {
    "url": "recipes/index.html",
    "revision": "57bbc4350a23f47db9ec0b212f100104"
  },
  {
    "url": "recipes/tips/aria-attributes-in-vue.html",
    "revision": "849c8571e95ea003e61eeba9b1e74933"
  },
  {
    "url": "recipes/widgets/accordion.html",
    "revision": "5ee571264820e48480d4c0617996faa2"
  },
  {
    "url": "recipes/widgets/alert.html",
    "revision": "658fef764e3a015577454ab389b0a3b7"
  },
  {
    "url": "recipes/widgets/breadcrumbs.html",
    "revision": "358ef23a18592cd34670ba0f4f377175"
  },
  {
    "url": "recipes/widgets/card.html",
    "revision": "0801f740f508ecd556cd88014d587ade"
  },
  {
    "url": "recipes/widgets/dialog.html",
    "revision": "1ea6cfdc9b73ce453cb92fbc606fca13"
  },
  {
    "url": "recipes/widgets/mobile-navigation.html",
    "revision": "eb12a2b34a842ff860fe4c53b068552c"
  },
  {
    "url": "recipes/widgets/skip-links.html",
    "revision": "db6c8872c5d8e6c0ab54896a0c0b3470"
  },
  {
    "url": "recipes/widgets/tabs.html",
    "revision": "b3b049e4ff8aeac9bce501ed6f0efa15"
  },
  {
    "url": "settings/index.html",
    "revision": "75bdf29971dff0da37188d5acd4c8474"
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
