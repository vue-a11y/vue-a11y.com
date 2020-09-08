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
    "revision": "2b842ba6739b50dec61a69fbb8586945"
  },
  {
    "url": "assets/css/0.styles.54691f63.css",
    "revision": "065760e4cf4012da0091dfa3f7dee937"
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
    "url": "assets/js/1.9fee25c4.js",
    "revision": "b241827d2c92cb5362e0aaba48721bc0"
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
    "url": "assets/js/15.dd2d6835.js",
    "revision": "8e70547beca0d7b0c43141ac0e685730"
  },
  {
    "url": "assets/js/16.0135caca.js",
    "revision": "b848d2754b248235a24647bbd52f0517"
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
    "url": "assets/js/19.fd034ba4.js",
    "revision": "f608348cc53e3bb6c8de3def754a3b8a"
  },
  {
    "url": "assets/js/2.fbfe1dc1.js",
    "revision": "27d078bc268eb96628166abf0d09ebed"
  },
  {
    "url": "assets/js/20.968bfec4.js",
    "revision": "ce000e1291eb7d2dcbc092bac00a59cb"
  },
  {
    "url": "assets/js/21.7c600826.js",
    "revision": "17328ae09e1264f0f85f509fb0419748"
  },
  {
    "url": "assets/js/22.5653f7f4.js",
    "revision": "52f85c45be3c59a8bfd74aece58f4d91"
  },
  {
    "url": "assets/js/23.cd59256b.js",
    "revision": "44713846e0a6a73005114d069922b1dd"
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
    "url": "assets/js/3.da1ef992.js",
    "revision": "a312ab95570e8f4cd99de5e0619037d7"
  },
  {
    "url": "assets/js/30.37e26552.js",
    "revision": "e6f56a5b95d70f5867be3d24c76d19be"
  },
  {
    "url": "assets/js/31.78a02347.js",
    "revision": "178978cb46f67fb8f24668c178085d1c"
  },
  {
    "url": "assets/js/32.88f6f9a1.js",
    "revision": "ca05ffa28c555883961863a73100572e"
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
    "url": "assets/js/35.6ffa2954.js",
    "revision": "6961bdcd8cc2d658c85d52c29003d292"
  },
  {
    "url": "assets/js/36.5e10a70f.js",
    "revision": "cdf703cf85f4fb79228cdc60468a1472"
  },
  {
    "url": "assets/js/37.c454263a.js",
    "revision": "e24865c222c9755562e7fbf47aa56555"
  },
  {
    "url": "assets/js/38.6bfd80d5.js",
    "revision": "f348bd0306c8ac024ba492e347659549"
  },
  {
    "url": "assets/js/39.e76263e6.js",
    "revision": "3e4341c35f9112a7923026d3afd36f29"
  },
  {
    "url": "assets/js/40.6e23ce2c.js",
    "revision": "2c07a0a044d03886796e14d4a655bc98"
  },
  {
    "url": "assets/js/41.53591492.js",
    "revision": "93d076635a362620d17fb9c3915b746f"
  },
  {
    "url": "assets/js/42.dc40dc06.js",
    "revision": "c4a5cb22821e2b6022762ae41694c816"
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
    "url": "assets/js/47.3196b365.js",
    "revision": "280c8324c4aa010ab9681ded2e600638"
  },
  {
    "url": "assets/js/48.f36d3174.js",
    "revision": "6fe832488e10aaba8ac23c8fe4f8f86a"
  },
  {
    "url": "assets/js/49.f82ce6ab.js",
    "revision": "fecd884d25865a014f79276ad2cf6916"
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
    "url": "assets/js/6.20941fd7.js",
    "revision": "d511a564f1edd58005bffe1af63dcff2"
  },
  {
    "url": "assets/js/7.e1c90154.js",
    "revision": "98b644da17724a75ef4d7c02b7ab6f9e"
  },
  {
    "url": "assets/js/8.9ff6f794.js",
    "revision": "a2dd944b90d9bb41623c3c12c13a156c"
  },
  {
    "url": "assets/js/9.b3b7d9a5.js",
    "revision": "fdab34aace655940d3032ca67f46130d"
  },
  {
    "url": "assets/js/app.6aaafecc.js",
    "revision": "1dc6074c2026b6bfba09f1d412b3b49c"
  },
  {
    "url": "assets/js/vuejs-paginate.20dd2929.js",
    "revision": "e661309be3db5bef67430eed32a03cb6"
  },
  {
    "url": "category/aria/index.html",
    "revision": "da921da7fad24aa2da62dc45889e73c3"
  },
  {
    "url": "category/html/index.html",
    "revision": "14c9f17b18273533fe04f1edad3100ce"
  },
  {
    "url": "category/index.html",
    "revision": "20cf78a273eaca64a72728eca569d122"
  },
  {
    "url": "category/news/index.html",
    "revision": "0fcf30c4de84e1d70d6c3eefa7f9defc"
  },
  {
    "url": "category/packages/index.html",
    "revision": "f54c61c230514eda862f59d94553bef2"
  },
  {
    "url": "category/spa/index.html",
    "revision": "b4b490e9c9a185c6691292f19a882075"
  },
  {
    "url": "category/tools/index.html",
    "revision": "952a4f7b9fea0cd29445f015de97fc46"
  },
  {
    "url": "category/wcag/index.html",
    "revision": "b47250983ceaee869100b024c3f77b76"
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
    "revision": "1a09ae8c3a70a735b9c26df256d46d12"
  },
  {
    "url": "posts/index.html",
    "revision": "353d6062f251750acb8337c3ee31c01b"
  },
  {
    "url": "posts/post-test/index.html",
    "revision": "e6c376c9c6cb921450f85404c8a47928"
  },
  {
    "url": "project/contributors.html",
    "revision": "12d44f66568891766c9b2817388c5c25"
  },
  {
    "url": "project/index.html",
    "revision": "960b65361691d71da980f35e0f941bd8"
  },
  {
    "url": "project/resources.html",
    "revision": "1b9b5a5e30af33fac3d50181ce9c6ae6"
  },
  {
    "url": "project/supporting.html",
    "revision": "e0ce7cd2371a75b63d8735c754fc7d9c"
  },
  {
    "url": "project/tools-testing.html",
    "revision": "86d33b667d9ef58ae21b3c6cbd73a512"
  },
  {
    "url": "project/vue-a11y-checklist.html",
    "revision": "78e7373321d076e8224da589f55d845c"
  },
  {
    "url": "pt/categoria/aria/index.html",
    "revision": "cab8f442e1bc645e933f00f45c363268"
  },
  {
    "url": "pt/categoria/html/index.html",
    "revision": "0155e5aa5f582edb9935b7e2c54c788e"
  },
  {
    "url": "pt/categoria/index.html",
    "revision": "8797abd9422acf5759b0f8d39c77f34c"
  },
  {
    "url": "pt/categoria/novidades/index.html",
    "revision": "7552afca1f0bb561e5f94ed83d704d40"
  },
  {
    "url": "pt/categoria/packages/index.html",
    "revision": "2d0e23b42c7f78fad1279f1ea5a3dd6d"
  },
  {
    "url": "pt/categoria/spa/index.html",
    "revision": "64f4abe0d6b988d817f53509e49b6833"
  },
  {
    "url": "pt/categoria/tools/index.html",
    "revision": "15ec29342d01b76b8a8f9b8a1af0133e"
  },
  {
    "url": "pt/categoria/wcag/index.html",
    "revision": "7d4644bdb95b76c46a0c4baf5664007b"
  },
  {
    "url": "pt/configuracoes/index.html",
    "revision": "fc0ca8d0f4004e42c64a9ee5e61d808d"
  },
  {
    "url": "pt/index.html",
    "revision": "53cf6b437f66199587f2514914132ae1"
  },
  {
    "url": "pt/posts/index.html",
    "revision": "82cbe61c703050f4c29a81d94266f69e"
  },
  {
    "url": "pt/posts/posts-de-teste/index.html",
    "revision": "d9997ab4f3ba68c37c63c7beafd3c6a0"
  },
  {
    "url": "pt/projeto/apoiando.html",
    "revision": "21906e37de7c3b277da9e257aff55465"
  },
  {
    "url": "pt/projeto/contribuidores.html",
    "revision": "210dd7c1dfbe42d20d5d56d35d032f93"
  },
  {
    "url": "pt/projeto/ferramentas-e-testes.html",
    "revision": "2ca926eda6b39fd95581d20a3a05fc55"
  },
  {
    "url": "pt/projeto/index.html",
    "revision": "a04dce19a1dd9e414d802e51c40e1a02"
  },
  {
    "url": "pt/projeto/links-uteis.html",
    "revision": "4618767bbda7f4d4e07fc3d6c968e9f4"
  },
  {
    "url": "pt/projeto/vue-a11y-checklist.html",
    "revision": "7e2f5dc817784d46176d2c6e15132466"
  },
  {
    "url": "pt/receitas/contribua.html",
    "revision": "eb1cfe186357e8d692efc044551e5ed9"
  },
  {
    "url": "pt/receitas/dicas/atributos-aria-no-vue.html",
    "revision": "36e041f1d08c407464bf6c599f78d0cd"
  },
  {
    "url": "pt/receitas/index.html",
    "revision": "874c3a6975b09dd0bcafeb1c661d3cfa"
  },
  {
    "url": "pt/receitas/widgets/accordion.html",
    "revision": "bbf6d9e4414ce12647d7970a328b95f7"
  },
  {
    "url": "pt/receitas/widgets/alert.html",
    "revision": "915b89890a7d2e8aee588a8f2e9cde35"
  },
  {
    "url": "pt/receitas/widgets/breadcrumbs.html",
    "revision": "d9611ca62bc474c6ff6e801236163b43"
  },
  {
    "url": "pt/receitas/widgets/card.html",
    "revision": "4c33d361a5ad4fdb2ac368868f2823b6"
  },
  {
    "url": "pt/receitas/widgets/dialog.html",
    "revision": "3165e8fccc749717aaf39761c448c10a"
  },
  {
    "url": "pt/receitas/widgets/navegacao-mobile.html",
    "revision": "246e7bc03bd7a13b4b7594b480e47a6f"
  },
  {
    "url": "pt/receitas/widgets/pular-links.html",
    "revision": "4baa230d8db99479907c3d4a42187a5c"
  },
  {
    "url": "pt/receitas/widgets/tabs.html",
    "revision": "aec87ab6bf2dcb75549ab076a43b84c0"
  },
  {
    "url": "recipes/contribute.html",
    "revision": "67c7f020bedaff034c8fc381e0111154"
  },
  {
    "url": "recipes/index.html",
    "revision": "7b0b6c43543a0772f4b95e00681a45c7"
  },
  {
    "url": "recipes/tips/aria-attributes-in-vue.html",
    "revision": "bbdde3b8f1f0408730b625e25de710bf"
  },
  {
    "url": "recipes/widgets/accordion.html",
    "revision": "4ffc15428d27e5f67dd068fe6220af79"
  },
  {
    "url": "recipes/widgets/alert.html",
    "revision": "d1dc79ede793413d72e5904645a54a15"
  },
  {
    "url": "recipes/widgets/breadcrumbs.html",
    "revision": "296612bbb997e22bbb363b1800330af4"
  },
  {
    "url": "recipes/widgets/card.html",
    "revision": "f5fb9561a3d4e7d721b3fa77747a3e69"
  },
  {
    "url": "recipes/widgets/dialog.html",
    "revision": "e8063d0cfc883690260d69930223655a"
  },
  {
    "url": "recipes/widgets/mobile-navigation.html",
    "revision": "e49de9535f007d8447d9d95d809b08dc"
  },
  {
    "url": "recipes/widgets/skip-links.html",
    "revision": "a2349c5252d8b9397040bee2f85dc1bd"
  },
  {
    "url": "recipes/widgets/tabs.html",
    "revision": "35941d95ce42bd7e6dda066b45573175"
  },
  {
    "url": "settings/index.html",
    "revision": "6652bbc6a9c0b0b2fe6eaf15dcec5f32"
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
