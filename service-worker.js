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
    "revision": "3f35a2ec352d2cbb79428042c8d33453"
  },
  {
    "url": "assets/css/0.styles.d5387635.css",
    "revision": "18d1fce296ebad6f024efb559b643a05"
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
    "url": "assets/js/1.a851b718.js",
    "revision": "6be8530e2c4bf6814a310efce741bbc6"
  },
  {
    "url": "assets/js/10.c6152f6d.js",
    "revision": "9206edd700981acbcb6a092d29078edb"
  },
  {
    "url": "assets/js/11.58c2a8d7.js",
    "revision": "f8e79229685e361848e1a36d294df876"
  },
  {
    "url": "assets/js/12.5f179545.js",
    "revision": "f19c70dc8218a62346270d2550b9d7da"
  },
  {
    "url": "assets/js/13.23d2a2c7.js",
    "revision": "68ccf090320de4d9ebb081d3b6faa29d"
  },
  {
    "url": "assets/js/14.2aa853f9.js",
    "revision": "962e3cdff40e6cd5da89508524c8012a"
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
    "url": "assets/js/17.b7a0e361.js",
    "revision": "8b4a222b12bead45f31d088cd1f170a0"
  },
  {
    "url": "assets/js/18.2c034b8d.js",
    "revision": "c9bf273dbbecfd37eaadd8c7a649927f"
  },
  {
    "url": "assets/js/19.5ea65b1c.js",
    "revision": "998877cc1c00f0cbb15ff85f5097b748"
  },
  {
    "url": "assets/js/2.ee4b18b6.js",
    "revision": "96445fa52b2e417f43c9432e3c7943f6"
  },
  {
    "url": "assets/js/20.9f942467.js",
    "revision": "989c34c76e72170b45685427411da999"
  },
  {
    "url": "assets/js/21.7cdac0cb.js",
    "revision": "b8b2c8f27599988a56d7e875a3c76ffe"
  },
  {
    "url": "assets/js/22.aff4a471.js",
    "revision": "6c90e779c4f01d871d958f74469f1518"
  },
  {
    "url": "assets/js/23.100cfd82.js",
    "revision": "e1a2f907a74c696224ac2476d4bef87c"
  },
  {
    "url": "assets/js/24.ce2e0ed5.js",
    "revision": "8751487c66bbe3839403bb60cac32973"
  },
  {
    "url": "assets/js/25.34e1a8ad.js",
    "revision": "cedab8f8b68f3efde2a9e9a5bd970fe4"
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
    "url": "assets/js/43.db69cc64.js",
    "revision": "d28e05ce05e2abdefd475d2ea9aa5b99"
  },
  {
    "url": "assets/js/44.84cd0d99.js",
    "revision": "5198c796fecd66179f67b1c9a0361504"
  },
  {
    "url": "assets/js/45.7d1328b0.js",
    "revision": "24dd01b0ed641c9cdaedfe7c94a5afaf"
  },
  {
    "url": "assets/js/46.65313750.js",
    "revision": "970a9fb86b5ba74f5bab22f13b27b83d"
  },
  {
    "url": "assets/js/47.e3d6f6a4.js",
    "revision": "3470fe58f9aaf95740cdab8716d74f2d"
  },
  {
    "url": "assets/js/48.14839911.js",
    "revision": "e04571989f781fec8bd4f4e31f8688c5"
  },
  {
    "url": "assets/js/49.2f136336.js",
    "revision": "a19590f2a2166e2c72d82a10c3ec59e1"
  },
  {
    "url": "assets/js/50.18d70879.js",
    "revision": "c023b79e030496969c37966908f50475"
  },
  {
    "url": "assets/js/51.8d6c7171.js",
    "revision": "279c3dc354fc13129ef93cb415086c06"
  },
  {
    "url": "assets/js/52.4147a947.js",
    "revision": "fc340ad81f9416e02293f3a48693ac42"
  },
  {
    "url": "assets/js/53.915f2588.js",
    "revision": "7e39cc5b8709d303d0ef463368b4e67a"
  },
  {
    "url": "assets/js/54.c8b7dd48.js",
    "revision": "1a9d39b9fa39bc9d80bf0de0a94a5412"
  },
  {
    "url": "assets/js/55.48d4aa9b.js",
    "revision": "6a1ab83c97854f9a37af525d163df5f6"
  },
  {
    "url": "assets/js/56.c1fac14d.js",
    "revision": "5bf4bc744a4408475100a247517f83c7"
  },
  {
    "url": "assets/js/57.d7f3acf2.js",
    "revision": "ed98ce39561c38e1cd0eb1018a7dc9cb"
  },
  {
    "url": "assets/js/58.f4bcc037.js",
    "revision": "f12768a4ad98e3e031285dda4d14c3c9"
  },
  {
    "url": "assets/js/7.e0cb4749.js",
    "revision": "9d2ced409c3b6ec74a1f475e3ded3487"
  },
  {
    "url": "assets/js/8.8e9ea1f9.js",
    "revision": "fe988ef515937d8e6d685880cd12110e"
  },
  {
    "url": "assets/js/9.f4ad1263.js",
    "revision": "596d7803f02e9cdab783af0d2cf127f4"
  },
  {
    "url": "assets/js/app.d4d2645d.js",
    "revision": "5b7f90accfac003f479745c2233ed160"
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
    "revision": "45fe4e0de4ee3bd2954bff8e54d22d59"
  },
  {
    "url": "category/html/index.html",
    "revision": "9f0bfc21f867c4e47253985e0ca10d29"
  },
  {
    "url": "category/index.html",
    "revision": "f7009246642687db494879d8d2c586d3"
  },
  {
    "url": "category/news/index.html",
    "revision": "3e7ab8c8b11cd4a93b51e7ed858ea3cd"
  },
  {
    "url": "category/packages/index.html",
    "revision": "456db5e74b10ebf96beda7e2e237773d"
  },
  {
    "url": "category/spa/index.html",
    "revision": "f6b05e2190dfae9f305d79a0e00442c0"
  },
  {
    "url": "category/tools/index.html",
    "revision": "6bb97ffb43e699ca21c049370ee9726a"
  },
  {
    "url": "category/wcag/index.html",
    "revision": "ca0acd19a52f17e90981583fa214cfa3"
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
    "revision": "69e884eff74226a4267835500363c3e1"
  },
  {
    "url": "posts/index.html",
    "revision": "07e0a37563fe320a3d42e450fecc267c"
  },
  {
    "url": "posts/post-test/index.html",
    "revision": "71436ecc57f369147bb88cb1220ef32e"
  },
  {
    "url": "project/how-to-contribute.html",
    "revision": "d378b50241ad26a4f6809781def69d6e"
  },
  {
    "url": "project/index.html",
    "revision": "00eff38eb259ff41206d3d0b2d9a6537"
  },
  {
    "url": "project/people.html",
    "revision": "97107fee70661fdb0cb138d537c2861f"
  },
  {
    "url": "project/resources.html",
    "revision": "10f1f64642cba422e2fab7f3f9986af0"
  },
  {
    "url": "project/supporting.html",
    "revision": "fe9fb9d02ea0de89cb55a75c89356f50"
  },
  {
    "url": "project/tools-testing.html",
    "revision": "d8b597082016c8c705bf14124f127991"
  },
  {
    "url": "project/vue-a11y-checklist.html",
    "revision": "463b2d6b9035b3e863b710c2ca9298f2"
  },
  {
    "url": "pt/categoria/aria/index.html",
    "revision": "c8935020414213e8faee5f53e894443a"
  },
  {
    "url": "pt/categoria/html/index.html",
    "revision": "a08414f0c2256df548a9f7879aa5f3be"
  },
  {
    "url": "pt/categoria/index.html",
    "revision": "0c5e5e1b6765faf48a4c7af07fed11ce"
  },
  {
    "url": "pt/categoria/novidades/index.html",
    "revision": "858fc8261a5633edd66485790758a43f"
  },
  {
    "url": "pt/categoria/packages/index.html",
    "revision": "622a1b1cfea8655968dd2e6a59899361"
  },
  {
    "url": "pt/categoria/spa/index.html",
    "revision": "4e5a802d7432a788b677c04e0ba9f078"
  },
  {
    "url": "pt/categoria/tools/index.html",
    "revision": "30882d6dc6e4a2d1b19384544637a62b"
  },
  {
    "url": "pt/categoria/wcag/index.html",
    "revision": "4327d184bf5a11e5b40809c900de6560"
  },
  {
    "url": "pt/configuracoes/index.html",
    "revision": "11ccd89d3a9366c7222e9c955361d515"
  },
  {
    "url": "pt/index.html",
    "revision": "3aeade2da1eda2f92f9cecb5bcf40e9f"
  },
  {
    "url": "pt/posts/index.html",
    "revision": "e0335d0149c959767c3411cc7e7fb134"
  },
  {
    "url": "pt/posts/posts-de-teste/index.html",
    "revision": "6af08f94dbd98904a076093cae5aab11"
  },
  {
    "url": "pt/projeto/apoiando.html",
    "revision": "02a48bdfe43cd10f9ceb8acc3b55a84b"
  },
  {
    "url": "pt/projeto/como-contribuir.html",
    "revision": "a859b1ca2cd892291b398b757729f6bd"
  },
  {
    "url": "pt/projeto/ferramentas-e-testes.html",
    "revision": "694c85ca607f9f3e6d78fa07e0aa5c96"
  },
  {
    "url": "pt/projeto/index.html",
    "revision": "09bf5eab906018d6826302c43505e3d0"
  },
  {
    "url": "pt/projeto/links-uteis.html",
    "revision": "ae6bee5a845693dad28888f6bcb7a505"
  },
  {
    "url": "pt/projeto/pessoas.html",
    "revision": "548b6ce5a7866eab70bef19b37e4a1dd"
  },
  {
    "url": "pt/projeto/vue-a11y-checklist.html",
    "revision": "81f394e1283e7ef31ca0430be7b47449"
  },
  {
    "url": "pt/receitas/contribua.html",
    "revision": "19798cb29837351adff005c8d1abd208"
  },
  {
    "url": "pt/receitas/dicas/atributos-aria-no-vue.html",
    "revision": "30ab8f433b0406246a225577fd2d5dad"
  },
  {
    "url": "pt/receitas/index.html",
    "revision": "7b95044fa8e86e2b5b6c72002f8832f9"
  },
  {
    "url": "pt/receitas/widgets/accordion.html",
    "revision": "a693e5a1f111240ba3b26e4c5d75f254"
  },
  {
    "url": "pt/receitas/widgets/alert.html",
    "revision": "349d7f168baadaf49ac00dc5c836b636"
  },
  {
    "url": "pt/receitas/widgets/breadcrumbs.html",
    "revision": "3f9ad21740a95a75c4bf8491e7d9517e"
  },
  {
    "url": "pt/receitas/widgets/card.html",
    "revision": "f2cc5b00272036046581767618440d32"
  },
  {
    "url": "pt/receitas/widgets/dialog.html",
    "revision": "cdd813664a1a66f84e0b95295f3423ab"
  },
  {
    "url": "pt/receitas/widgets/navegacao-mobile.html",
    "revision": "b0a98301db3cda377c28c4f2b8407854"
  },
  {
    "url": "pt/receitas/widgets/pular-links.html",
    "revision": "e8c4d5b62a3e05cc2513e39488eb72e3"
  },
  {
    "url": "pt/receitas/widgets/tabs.html",
    "revision": "ad2d5ad7ac6b802219eae368c759c41d"
  },
  {
    "url": "recipes/contribute.html",
    "revision": "94e93c6744d623daae194affb715564f"
  },
  {
    "url": "recipes/index.html",
    "revision": "b6c070a4b756a2a5a51598bc313940d9"
  },
  {
    "url": "recipes/tips/aria-attributes-in-vue.html",
    "revision": "ece203f2add0f7bc3051bb0aa42de68a"
  },
  {
    "url": "recipes/widgets/accordion.html",
    "revision": "fdcbdb09f7ddb4a361e29bd11b640cc6"
  },
  {
    "url": "recipes/widgets/alert.html",
    "revision": "c403389bac5ac68ab180bca01d0c52fa"
  },
  {
    "url": "recipes/widgets/breadcrumbs.html",
    "revision": "b0370ba006292fb8e1050ef2e544a411"
  },
  {
    "url": "recipes/widgets/card.html",
    "revision": "62b0abac183bcda9d87baa59268d2706"
  },
  {
    "url": "recipes/widgets/dialog.html",
    "revision": "9d59ee589ece16fa3d1e42f17d35da1c"
  },
  {
    "url": "recipes/widgets/mobile-navigation.html",
    "revision": "d879081807374b0ab779a38954a42789"
  },
  {
    "url": "recipes/widgets/skip-links.html",
    "revision": "4d4a1bcf446b2dcc87123abc5e84a98a"
  },
  {
    "url": "recipes/widgets/tabs.html",
    "revision": "a3ed3e24814b6009750342d2ec0775d4"
  },
  {
    "url": "settings/index.html",
    "revision": "df2e97ad05370a17fb04cfab83a0af79"
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
