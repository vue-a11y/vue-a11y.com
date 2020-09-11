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
    "revision": "aba335cf62cdcbd1c7af9919558ae317"
  },
  {
    "url": "assets/css/0.styles.5de5193d.css",
    "revision": "48f5c00db17d2038ccd330c811b7e1c3"
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
    "url": "assets/js/1.56d9ebe4.js",
    "revision": "c10427dfd4931da3fcd3610364b2a94f"
  },
  {
    "url": "assets/js/10.a3cdff60.js",
    "revision": "187bfed3cb05c68c574f2db3bd169cc4"
  },
  {
    "url": "assets/js/11.4dfdd8b5.js",
    "revision": "3257e482210d2e0589d7daf7e2fc8aac"
  },
  {
    "url": "assets/js/12.96cdfdff.js",
    "revision": "7d61eb915d6c613d6b17873d0f389f0a"
  },
  {
    "url": "assets/js/13.6986486c.js",
    "revision": "d103971987a8cbb157f4a739c5243764"
  },
  {
    "url": "assets/js/14.86b5bc12.js",
    "revision": "d4b6c1e10250519a9b163141d025d947"
  },
  {
    "url": "assets/js/15.ce876608.js",
    "revision": "dce4e9f09c148177407b0f0ff30e29a4"
  },
  {
    "url": "assets/js/16.a7c63e1e.js",
    "revision": "b79175fec960348145a6f4aa07ea7ef8"
  },
  {
    "url": "assets/js/17.7caf94ba.js",
    "revision": "849bd0d435a1d41ac70b2343832f3340"
  },
  {
    "url": "assets/js/18.37f13e76.js",
    "revision": "8de9e4756127fc702eee15f3e38e0c82"
  },
  {
    "url": "assets/js/19.fdefd9c2.js",
    "revision": "16b5bfe8493ff74ebca5cac2b7fa2e3e"
  },
  {
    "url": "assets/js/2.0ebde391.js",
    "revision": "33cd6249370254628c4a44577379a17f"
  },
  {
    "url": "assets/js/20.840aab3a.js",
    "revision": "8e1c84b0312480e4b72bff478949d228"
  },
  {
    "url": "assets/js/21.000bff55.js",
    "revision": "acc20d9390c76a7d43fc54bf45bb5924"
  },
  {
    "url": "assets/js/22.d236801c.js",
    "revision": "7b5b1f1382e4bec964f0c4a80954fa69"
  },
  {
    "url": "assets/js/23.eca069cd.js",
    "revision": "2db785301be904cfc59b687939a04884"
  },
  {
    "url": "assets/js/24.2db8ca26.js",
    "revision": "d5069d0410c105518f56a85c6314a2fd"
  },
  {
    "url": "assets/js/25.2bc5de27.js",
    "revision": "f4b1a922cb6f22ca16d98cdce393fe13"
  },
  {
    "url": "assets/js/26.88c53a8f.js",
    "revision": "4c5d5c23dc285a4b1a0b8398db0841cf"
  },
  {
    "url": "assets/js/27.a061efff.js",
    "revision": "f05d57db4547f6c924410e5d7138b31c"
  },
  {
    "url": "assets/js/28.b1b07102.js",
    "revision": "8dbcee1f6d676db5917c644dba24992d"
  },
  {
    "url": "assets/js/29.cdd74894.js",
    "revision": "2bbc441a4585515484eb7f930c0afcef"
  },
  {
    "url": "assets/js/3.ed463a9d.js",
    "revision": "04cd888669f045073c394e67f3f779fa"
  },
  {
    "url": "assets/js/30.dece3891.js",
    "revision": "a92cec46aec0219ab4f49bfecedc2e00"
  },
  {
    "url": "assets/js/31.a36b5728.js",
    "revision": "831bec5a50e49bffa57a5df176ec9149"
  },
  {
    "url": "assets/js/32.e5aca49f.js",
    "revision": "d7cdcdbd70597ef8cc0e580c347a14f3"
  },
  {
    "url": "assets/js/33.cdd297c5.js",
    "revision": "b56420ad0f865ee0762e6f112b0a4976"
  },
  {
    "url": "assets/js/34.508777a0.js",
    "revision": "e10d7cd08094f913f5cd8504bd82f7c0"
  },
  {
    "url": "assets/js/35.6addb78f.js",
    "revision": "b6d2a6cf3c1dfabeccdffc7f8b64b6da"
  },
  {
    "url": "assets/js/36.3b1117be.js",
    "revision": "49ef02e4a047a094a9bf789aeddad03e"
  },
  {
    "url": "assets/js/37.5da10e39.js",
    "revision": "fc893ed91c90c5ff47f53f9492eece0e"
  },
  {
    "url": "assets/js/38.913325be.js",
    "revision": "58f136fa200aa0b5b31bf2c998f58d5d"
  },
  {
    "url": "assets/js/39.4653d221.js",
    "revision": "ded584e7fe6e6a3b3bff699d79563a1b"
  },
  {
    "url": "assets/js/40.aef3f8fb.js",
    "revision": "7e436a2eb92f1c50f9b5a2cc7c71cb38"
  },
  {
    "url": "assets/js/41.545466bb.js",
    "revision": "fb46e3d55897fc7172da89984f5df6db"
  },
  {
    "url": "assets/js/42.70a8d5e1.js",
    "revision": "3c0ca472ca02d255a575b41bf2e625ea"
  },
  {
    "url": "assets/js/43.3e6419aa.js",
    "revision": "54a24e78249ea882d2cb5c6056f8a928"
  },
  {
    "url": "assets/js/44.7741a02b.js",
    "revision": "de85fc04278f8149ba6b114e7fade390"
  },
  {
    "url": "assets/js/45.08141c48.js",
    "revision": "d95c1bea948eb1a8d04c6b0be020b5de"
  },
  {
    "url": "assets/js/46.91d387c5.js",
    "revision": "bdbeecd689c108c6a95da966245875d3"
  },
  {
    "url": "assets/js/47.0c5aa52a.js",
    "revision": "541c4838cba08594f8a31b678e421e97"
  },
  {
    "url": "assets/js/48.d6440e50.js",
    "revision": "ec7ef94810f894d6d8c6ad786123a4ad"
  },
  {
    "url": "assets/js/49.3159a9d8.js",
    "revision": "697842884cba8787c652dc2246fc37ed"
  },
  {
    "url": "assets/js/50.888c9a76.js",
    "revision": "bbac7898d97c5c2913d9bddcd37a4a6d"
  },
  {
    "url": "assets/js/51.6beef45a.js",
    "revision": "7e515d25f7cf75926e8dc2291af47357"
  },
  {
    "url": "assets/js/52.8481fbea.js",
    "revision": "5ddb107e8975d79295b664b513189d5c"
  },
  {
    "url": "assets/js/53.b53343bb.js",
    "revision": "46d2d95bd82baa41855bd8cd29cf1190"
  },
  {
    "url": "assets/js/54.1cbb6614.js",
    "revision": "611b302d6f213579e4f265185b530928"
  },
  {
    "url": "assets/js/6.52d79db5.js",
    "revision": "24c2d2ae75728ec92e55f6ed37ae9eb5"
  },
  {
    "url": "assets/js/7.efc748cf.js",
    "revision": "483807ca8aee674ba9519b1aac8857f6"
  },
  {
    "url": "assets/js/8.df1b63bc.js",
    "revision": "2459abf30ac683bf708d7ad394906ee9"
  },
  {
    "url": "assets/js/9.f9b5a509.js",
    "revision": "64c5e6da262ef6945e033827fd206124"
  },
  {
    "url": "assets/js/app.7a8ef936.js",
    "revision": "62c4e3117089ce88ac63852bcae57384"
  },
  {
    "url": "assets/js/vuejs-paginate.7dd651a9.js",
    "revision": "4aa6691ca162097269cecac15273132d"
  },
  {
    "url": "category/aria/index.html",
    "revision": "18bb30027772c74ec84c5f4adccb63ef"
  },
  {
    "url": "category/html/index.html",
    "revision": "6ccc66a80aba37ae20b0bfa35576b512"
  },
  {
    "url": "category/index.html",
    "revision": "f48d5bbaf433927559765eb86d701272"
  },
  {
    "url": "category/news/index.html",
    "revision": "303a11cc77dafe3e3094ce1a9522661e"
  },
  {
    "url": "category/packages/index.html",
    "revision": "83615621dc09a7fde807a1f909163e37"
  },
  {
    "url": "category/spa/index.html",
    "revision": "d32faab84719a3b993c7786d33f5f735"
  },
  {
    "url": "category/tools/index.html",
    "revision": "c4a81177fe8dcb3859f4ba33cc775adc"
  },
  {
    "url": "category/wcag/index.html",
    "revision": "feefe586c7c34818825f92afadcedebb"
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
    "revision": "109207cdd39c90c9a274608f9352ab12"
  },
  {
    "url": "posts/index.html",
    "revision": "5811fa67f5e248015f0e1f5c8cca6d92"
  },
  {
    "url": "posts/post-test/index.html",
    "revision": "37ed83a385caeb8bac6de86c96a874c8"
  },
  {
    "url": "project/contributors.html",
    "revision": "93cd07f8a7837fdd9826499f1e01d845"
  },
  {
    "url": "project/index.html",
    "revision": "2d8e3e8200fe457bc053386df5325a68"
  },
  {
    "url": "project/resources.html",
    "revision": "f3cf20c9293d21bbf62e8884a7c73f42"
  },
  {
    "url": "project/supporting.html",
    "revision": "9d6186a0eea979de5125d0a5f2b608e5"
  },
  {
    "url": "project/tools-testing.html",
    "revision": "5c849b34a90883df8031ed0ed1a6e9e4"
  },
  {
    "url": "project/vue-a11y-checklist.html",
    "revision": "be565831c839ee360b8cc861dc6b90ff"
  },
  {
    "url": "pt/categoria/aria/index.html",
    "revision": "9e0b9a1d95872fcbf261019e592fbdaa"
  },
  {
    "url": "pt/categoria/html/index.html",
    "revision": "38fd19fd0afacd04766b89ad29c2a580"
  },
  {
    "url": "pt/categoria/index.html",
    "revision": "28b3bd783c3c81c872025dcc038d2453"
  },
  {
    "url": "pt/categoria/novidades/index.html",
    "revision": "76eec881eabe8736b2d29f8ba5e61c56"
  },
  {
    "url": "pt/categoria/packages/index.html",
    "revision": "9a7bc30ce7910cfc40cb52713dc40d95"
  },
  {
    "url": "pt/categoria/spa/index.html",
    "revision": "a537f4c60341c853dc8b2afccf8713c8"
  },
  {
    "url": "pt/categoria/tools/index.html",
    "revision": "626fb148012d91d189e2110354b17fa0"
  },
  {
    "url": "pt/categoria/wcag/index.html",
    "revision": "865e6dccf677a67bce09bf0dbc406f35"
  },
  {
    "url": "pt/configuracoes/index.html",
    "revision": "eaefcb07e2626ebda8b51b2b95f87294"
  },
  {
    "url": "pt/index.html",
    "revision": "ac6afd6bebf802ed90f2944882bec0e8"
  },
  {
    "url": "pt/posts/index.html",
    "revision": "32bcfcaf01242c3caf38e185444b8806"
  },
  {
    "url": "pt/posts/posts-de-teste/index.html",
    "revision": "7ac39c8306471b201ba5143cb9137742"
  },
  {
    "url": "pt/projeto/apoiando.html",
    "revision": "9e25da02918938dc4de73eb7edf230fd"
  },
  {
    "url": "pt/projeto/contribuidores.html",
    "revision": "f4be124c4c6ef341ce5c116b299d6068"
  },
  {
    "url": "pt/projeto/ferramentas-e-testes.html",
    "revision": "6a2b8dbc5350020e4b0455151260c2d9"
  },
  {
    "url": "pt/projeto/index.html",
    "revision": "e4eff277427e01588dd1ff2aa94968fb"
  },
  {
    "url": "pt/projeto/links-uteis.html",
    "revision": "506d351548f66edec15647c4dc0dc259"
  },
  {
    "url": "pt/projeto/vue-a11y-checklist.html",
    "revision": "a58faf442d404ea85ca410c5a45101d4"
  },
  {
    "url": "pt/receitas/contribua.html",
    "revision": "ed682d8c7121c6ea6b9a368cff29439b"
  },
  {
    "url": "pt/receitas/dicas/atributos-aria-no-vue.html",
    "revision": "bce503503f921ff7d3d1f1ca0c6d8b81"
  },
  {
    "url": "pt/receitas/index.html",
    "revision": "178a6694504336c4857b073cf64ecb6e"
  },
  {
    "url": "pt/receitas/widgets/accordion.html",
    "revision": "8dbecd1db744f977d4752df5a203f4bc"
  },
  {
    "url": "pt/receitas/widgets/alert.html",
    "revision": "1bb8138bd59ea5f196b3b55e2138736a"
  },
  {
    "url": "pt/receitas/widgets/breadcrumbs.html",
    "revision": "5c76956fffa28d687502c55dad427674"
  },
  {
    "url": "pt/receitas/widgets/card.html",
    "revision": "1b30c568d41b42f1f8d842fc2e97d323"
  },
  {
    "url": "pt/receitas/widgets/dialog.html",
    "revision": "e45c44c11be9589f4d6ba2bc91eb5b1a"
  },
  {
    "url": "pt/receitas/widgets/navegacao-mobile.html",
    "revision": "7adefa9038eafc663f4982f0a2864d0d"
  },
  {
    "url": "pt/receitas/widgets/pular-links.html",
    "revision": "fac6481362488d7448d6b0287efbffd0"
  },
  {
    "url": "pt/receitas/widgets/tabs.html",
    "revision": "23180d2c8efd2a0aabd1165ed5af8a2c"
  },
  {
    "url": "recipes/contribute.html",
    "revision": "8c0cc5f1fde6968315dd345005f6fffa"
  },
  {
    "url": "recipes/index.html",
    "revision": "128984494716a0c11887f9e6d0fda50b"
  },
  {
    "url": "recipes/tips/aria-attributes-in-vue.html",
    "revision": "fe15cb0c766defd0bf254128ec650fcd"
  },
  {
    "url": "recipes/widgets/accordion.html",
    "revision": "7a85c30d7c2805a021c3c8f5465ea603"
  },
  {
    "url": "recipes/widgets/alert.html",
    "revision": "012731440b86fb441e6552ebcf2430dc"
  },
  {
    "url": "recipes/widgets/breadcrumbs.html",
    "revision": "c15da9186e893649fb6026bfc3d546a8"
  },
  {
    "url": "recipes/widgets/card.html",
    "revision": "4991a421af8b4fc3ff7466d011784b6d"
  },
  {
    "url": "recipes/widgets/dialog.html",
    "revision": "ba1f2c1f193c135550bdac3ff8d635f5"
  },
  {
    "url": "recipes/widgets/mobile-navigation.html",
    "revision": "9b2665ec74debad01cf7e811ba076ce8"
  },
  {
    "url": "recipes/widgets/skip-links.html",
    "revision": "deff5436dee118268baf6672a3ef1c40"
  },
  {
    "url": "recipes/widgets/tabs.html",
    "revision": "8f854463273276a96a655a565aa331e3"
  },
  {
    "url": "settings/index.html",
    "revision": "f68f2ea6dd00f8dbdbc2193c1f615649"
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
