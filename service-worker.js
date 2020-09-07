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
    "revision": "3c606c784c6fb974445fa46348f94e2a"
  },
  {
    "url": "assets/css/0.styles.8eae2459.css",
    "revision": "888c3c2c62029f3a6327c6c15613d332"
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
    "url": "assets/js/12.7af2efa5.js",
    "revision": "4f9e9551ae6ff6a4bf4f9a6f0badea86"
  },
  {
    "url": "assets/js/13.dd8aa85f.js",
    "revision": "fe18c6974b0557cc5cc792f1eca9c411"
  },
  {
    "url": "assets/js/14.326f1d91.js",
    "revision": "295aff521a23882aabff25c4773bc354"
  },
  {
    "url": "assets/js/15.ec392cea.js",
    "revision": "544dd519b9e1c331ff06ff251fe8cdf3"
  },
  {
    "url": "assets/js/16.40e41c1b.js",
    "revision": "57457e60df4ac043ff55cc64c002e3c1"
  },
  {
    "url": "assets/js/17.112cd5eb.js",
    "revision": "f72097575d5fbc6cd78b708fc8426ee0"
  },
  {
    "url": "assets/js/18.e761682a.js",
    "revision": "9502eb48878daad4d31407dbc814f720"
  },
  {
    "url": "assets/js/19.c71d1cac.js",
    "revision": "f9c5ab1fe017d28c1277688bdc4ff189"
  },
  {
    "url": "assets/js/2.fbfe1dc1.js",
    "revision": "27d078bc268eb96628166abf0d09ebed"
  },
  {
    "url": "assets/js/20.c3d405c4.js",
    "revision": "2f75fd3d3bef92b4206cc5b0d0770189"
  },
  {
    "url": "assets/js/21.63f8a83e.js",
    "revision": "01a940fa4b999f3348928a49f411b0e2"
  },
  {
    "url": "assets/js/22.5653f7f4.js",
    "revision": "52f85c45be3c59a8bfd74aece58f4d91"
  },
  {
    "url": "assets/js/23.5b5a9822.js",
    "revision": "af871cc6be18dfbed419158127793e5d"
  },
  {
    "url": "assets/js/24.9d88d96c.js",
    "revision": "bdc5c24cfa09211ee8f7870c6c64ccab"
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
    "url": "assets/js/27.562a97c5.js",
    "revision": "e8881cf72a11d2dd0bae0fc1f67bb7a9"
  },
  {
    "url": "assets/js/28.21d73cda.js",
    "revision": "c51661bbb361c3dc77df430028583bf2"
  },
  {
    "url": "assets/js/29.da90fd95.js",
    "revision": "6294a86813f1d08008ef2b8cbaf33969"
  },
  {
    "url": "assets/js/3.da1ef992.js",
    "revision": "a312ab95570e8f4cd99de5e0619037d7"
  },
  {
    "url": "assets/js/30.d5e12ffc.js",
    "revision": "ae8a626bd5e2a9d2c8a92db677ba67ca"
  },
  {
    "url": "assets/js/31.78a02347.js",
    "revision": "178978cb46f67fb8f24668c178085d1c"
  },
  {
    "url": "assets/js/32.bda68b0c.js",
    "revision": "21b543ce9f4b5fcd86b463c5b4a7bf19"
  },
  {
    "url": "assets/js/33.479bba68.js",
    "revision": "9eddd47c220d96ab57da19f7952594ca"
  },
  {
    "url": "assets/js/34.d16df143.js",
    "revision": "a412e385ba6624e7d7dcafb12c11cc1c"
  },
  {
    "url": "assets/js/35.f60ad8e2.js",
    "revision": "dd51fddafaa320e04c25575d87d97707"
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
    "url": "assets/js/38.b1ef6af0.js",
    "revision": "9948a4b95154fdbfc6f5d4be332d4b56"
  },
  {
    "url": "assets/js/39.da127514.js",
    "revision": "abf3bd6edebff72c602157345d8d1b7a"
  },
  {
    "url": "assets/js/40.b3260549.js",
    "revision": "268fa108eeb3210a9d1f771cc9d7c71d"
  },
  {
    "url": "assets/js/41.53591492.js",
    "revision": "93d076635a362620d17fb9c3915b746f"
  },
  {
    "url": "assets/js/42.a39e5792.js",
    "revision": "ef236fa5d1291e3096b3a78ea3e9ef0d"
  },
  {
    "url": "assets/js/43.1c1c8687.js",
    "revision": "925f885b22dd11e3b1818f62a209ef9f"
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
    "url": "assets/js/48.92b4b71c.js",
    "revision": "b879d4991bb1df1b740be362c0b2b40d"
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
    "url": "assets/js/6.859fba2b.js",
    "revision": "aa147d8d6f39e95e8f13fe0f976ca5ea"
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
    "url": "assets/js/9.014b2bf6.js",
    "revision": "61460b7035b4c36c7f5029f70e64b951"
  },
  {
    "url": "assets/js/app.1668a4b8.js",
    "revision": "48c46f86d71681500af4e75578702cb9"
  },
  {
    "url": "assets/js/vuejs-paginate.20dd2929.js",
    "revision": "e661309be3db5bef67430eed32a03cb6"
  },
  {
    "url": "category/aria/index.html",
    "revision": "58c825576e3d45ef098eb8f9ebd47704"
  },
  {
    "url": "category/html/index.html",
    "revision": "a95dd04501332ca6b598af45e181e177"
  },
  {
    "url": "category/index.html",
    "revision": "68460319f98f3228833986557db34e13"
  },
  {
    "url": "category/news/index.html",
    "revision": "4725f3a976d05e8b0f670063e30c09d0"
  },
  {
    "url": "category/packages/index.html",
    "revision": "a14449cec36e7fed08f5e6eb7a782738"
  },
  {
    "url": "category/spa/index.html",
    "revision": "7146eb8a8557351a172d9361e34bedfe"
  },
  {
    "url": "category/tools/index.html",
    "revision": "03d7783ba9f12adb62dbffcc175d3d91"
  },
  {
    "url": "category/wcag/index.html",
    "revision": "a6e4a267b2a8c7f1636c89d34b394626"
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
    "revision": "328b896c26c2d7700e2e004267e02ab5"
  },
  {
    "url": "posts/index.html",
    "revision": "2e20eb61bb7e0a2dbdc89860afce41ca"
  },
  {
    "url": "posts/post-test/index.html",
    "revision": "105a5ece4ac0e914b0ea79c8d8ca18da"
  },
  {
    "url": "project/contributors.html",
    "revision": "7ce945a30fd9833d9e0a510240c1e5a5"
  },
  {
    "url": "project/index.html",
    "revision": "6d040a0eed94d7e9cc3cff756ee29a74"
  },
  {
    "url": "project/resources.html",
    "revision": "79edc58de2b3a3ab5f9788db9be9dd3f"
  },
  {
    "url": "project/supporting.html",
    "revision": "990b1ef783825c4994af5c2565a92cc4"
  },
  {
    "url": "project/tools-testing.html",
    "revision": "953ec0b240508ae509d53d73d5831735"
  },
  {
    "url": "project/vue-a11y-checklist.html",
    "revision": "310ad1b1eda24ed33d9b33231fcdd285"
  },
  {
    "url": "pt/categoria/aria/index.html",
    "revision": "6fe3aa776142d81144b6c9fbc3630a96"
  },
  {
    "url": "pt/categoria/html/index.html",
    "revision": "499f557b47c983d26be0c264304aaeed"
  },
  {
    "url": "pt/categoria/index.html",
    "revision": "82cf4d80e4cdf2451a517f9b66c9c09f"
  },
  {
    "url": "pt/categoria/novidades/index.html",
    "revision": "3cedb5d6bace1a8b1b4c7057341996d3"
  },
  {
    "url": "pt/categoria/packages/index.html",
    "revision": "48d7261b01168deb3f5ea292f0a52f7f"
  },
  {
    "url": "pt/categoria/spa/index.html",
    "revision": "65e9bf70bd83789bfa0b83042e598cad"
  },
  {
    "url": "pt/categoria/tools/index.html",
    "revision": "98b680c389b6263f324bbd17cbb30ada"
  },
  {
    "url": "pt/categoria/wcag/index.html",
    "revision": "918ed2ee31bf760916210b651cc8abbc"
  },
  {
    "url": "pt/configuracoes/index.html",
    "revision": "f50a132389b303165ff499e4e67e4f72"
  },
  {
    "url": "pt/index.html",
    "revision": "08f0afbc16b95385d194f806bcfc657a"
  },
  {
    "url": "pt/posts/index.html",
    "revision": "4dde0aae640eb7fdeddb9552ca4fb148"
  },
  {
    "url": "pt/posts/posts-de-teste/index.html",
    "revision": "f4336a9402aa86f1a171ddb334e303e7"
  },
  {
    "url": "pt/projeto/apoiando.html",
    "revision": "d54b9ad9a9b957849c089c0c636a7695"
  },
  {
    "url": "pt/projeto/contribuidores.html",
    "revision": "7a6824bba224b9cbd8ff8bf05b8a38ea"
  },
  {
    "url": "pt/projeto/ferramentas-e-testes.html",
    "revision": "fbb93f3894651aaf519197c6eb173fe7"
  },
  {
    "url": "pt/projeto/index.html",
    "revision": "7a950f5086b6d7074c6ba5cabe3c8150"
  },
  {
    "url": "pt/projeto/links-uteis.html",
    "revision": "9a51bb1561292a40725939705f402e80"
  },
  {
    "url": "pt/projeto/vue-a11y-checklist.html",
    "revision": "fdeee0c445e6b94e0c78b12800f355ac"
  },
  {
    "url": "pt/receitas/contribua.html",
    "revision": "34c017616041345c706c698b4ab529c7"
  },
  {
    "url": "pt/receitas/dicas/atributos-aria-no-vue.html",
    "revision": "4b028539805db32e048c25f3e408bbe1"
  },
  {
    "url": "pt/receitas/index.html",
    "revision": "347940128e334f306406e80ccc75be4c"
  },
  {
    "url": "pt/receitas/widgets/accordion.html",
    "revision": "636a2cdea5951d31640d82ca79aa77ab"
  },
  {
    "url": "pt/receitas/widgets/alert.html",
    "revision": "a120017a869d97f13f4e3a70eeb0905b"
  },
  {
    "url": "pt/receitas/widgets/breadcrumbs.html",
    "revision": "dca6c584e9f49d45cc16b97f7daf3105"
  },
  {
    "url": "pt/receitas/widgets/card.html",
    "revision": "6ac294ae45c04232f6d91d9aa36dbb17"
  },
  {
    "url": "pt/receitas/widgets/dialog.html",
    "revision": "879ec1ae6ac0b2759640d8ac4b7e552f"
  },
  {
    "url": "pt/receitas/widgets/navegacao-mobile.html",
    "revision": "f2398c7aeb505cdcc6310c2366201e05"
  },
  {
    "url": "pt/receitas/widgets/pular-links.html",
    "revision": "353cbcb84e88223ad96ae26fd0b77b69"
  },
  {
    "url": "pt/receitas/widgets/tabs.html",
    "revision": "44c9e3ceb87ca6bbae2a250a706e4e0d"
  },
  {
    "url": "recipes/contribute.html",
    "revision": "2de82854df1b6d9d51e2533964aae7a5"
  },
  {
    "url": "recipes/index.html",
    "revision": "3c5ca3bce954d77f21f6a87a96470bcd"
  },
  {
    "url": "recipes/tips/aria-attributes-in-vue.html",
    "revision": "2633fed24c51807a4865ff090f6be654"
  },
  {
    "url": "recipes/widgets/accordion.html",
    "revision": "da7b4a203ad3069f8de0ff1ba97fcbb8"
  },
  {
    "url": "recipes/widgets/alert.html",
    "revision": "88822ec8baddbeacf9afc9857ef4dd73"
  },
  {
    "url": "recipes/widgets/breadcrumbs.html",
    "revision": "c90ced6ad54f41da171d9c3659b5de1b"
  },
  {
    "url": "recipes/widgets/card.html",
    "revision": "e62093a7a476c4e5b6bf944c20932a73"
  },
  {
    "url": "recipes/widgets/dialog.html",
    "revision": "57a1b3ea5fe43218eb4068d1ec2e14c3"
  },
  {
    "url": "recipes/widgets/mobile-navigation.html",
    "revision": "699f190b2d39b75b097fa99f49cb360a"
  },
  {
    "url": "recipes/widgets/skip-links.html",
    "revision": "5ab77ec4313166ffd2bf55ee039e2815"
  },
  {
    "url": "recipes/widgets/tabs.html",
    "revision": "41c0e66de4b3a0d75485b143ffb472f2"
  },
  {
    "url": "settings/index.html",
    "revision": "d435ef88d8768192d17ae606de4fd523"
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
