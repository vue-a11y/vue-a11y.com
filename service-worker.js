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
    "revision": "c7fafa5b8fd9adc89624b59f3a202b69"
  },
  {
    "url": "assets/css/0.styles.32b60fbc.css",
    "revision": "c1319584393f9f7a19477ba6a117bf5a"
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
    "url": "assets/js/1.f5145fc4.js",
    "revision": "ccea973c6a01c44ff22a86d25cf35c82"
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
    "url": "assets/js/12.2783bf50.js",
    "revision": "c5539c60c68066b862ad9617f82fd9c6"
  },
  {
    "url": "assets/js/13.c0de3665.js",
    "revision": "173193de7e19433625fca10804889baa"
  },
  {
    "url": "assets/js/14.86b5bc12.js",
    "revision": "d4b6c1e10250519a9b163141d025d947"
  },
  {
    "url": "assets/js/15.372a6b22.js",
    "revision": "31ba26fc8326ef1db3fc715063ed1e6c"
  },
  {
    "url": "assets/js/16.529cd8cf.js",
    "revision": "8a631c0303a2260643197c708cf25cb7"
  },
  {
    "url": "assets/js/17.ebac39b2.js",
    "revision": "682c16fec635227e53174d26516188e5"
  },
  {
    "url": "assets/js/18.1bb1bdde.js",
    "revision": "59f71f85d66b99ae7fc20a9d1a4f5526"
  },
  {
    "url": "assets/js/19.c8156f89.js",
    "revision": "97fc12f3ffd0925ae010dd615f811625"
  },
  {
    "url": "assets/js/2.0ebde391.js",
    "revision": "33cd6249370254628c4a44577379a17f"
  },
  {
    "url": "assets/js/20.06c0e798.js",
    "revision": "ce90a6ef1f85bc50f982954d22f55075"
  },
  {
    "url": "assets/js/21.9b31db84.js",
    "revision": "124710da0d035e0d3428ec19e207464a"
  },
  {
    "url": "assets/js/22.232b5c7a.js",
    "revision": "f834cdc1add1388d39c93af3204c5f7b"
  },
  {
    "url": "assets/js/23.216d88fb.js",
    "revision": "5c1db2184e8166f9a082fc459e2398df"
  },
  {
    "url": "assets/js/24.ff474469.js",
    "revision": "7293dd698ebf606a5e0c1909ca8f6f7e"
  },
  {
    "url": "assets/js/25.3f5038d8.js",
    "revision": "04d62b8e73335fe53c99ee9ffe36d25e"
  },
  {
    "url": "assets/js/26.7baf6fcb.js",
    "revision": "44e3b42c096784ac7df38bfb0fff983c"
  },
  {
    "url": "assets/js/27.461f75b8.js",
    "revision": "0c95a0437d286309c1aee74b4f20af99"
  },
  {
    "url": "assets/js/28.80a601cd.js",
    "revision": "af205c00faac9b40c78f7be6c1e4833c"
  },
  {
    "url": "assets/js/29.3b797177.js",
    "revision": "09a74a6fc1c8e3ddcbb18713a5e5f8b1"
  },
  {
    "url": "assets/js/3.c550d7a4.js",
    "revision": "e51addd246cfaa15b64d54556894744d"
  },
  {
    "url": "assets/js/30.3bf3b5b5.js",
    "revision": "11d44b1520d5697da27e267d60ae19fb"
  },
  {
    "url": "assets/js/31.e2e817de.js",
    "revision": "435463c8a75f83e0c7c39547f2b677a6"
  },
  {
    "url": "assets/js/32.255675bd.js",
    "revision": "20bca1fb8ac45af3bea9e10f7a87ff97"
  },
  {
    "url": "assets/js/33.0baa3aaf.js",
    "revision": "be9163e5e2ee694ebfae43aefe4cc56f"
  },
  {
    "url": "assets/js/34.bb636739.js",
    "revision": "aa473f1080615b4608f84e68d5068864"
  },
  {
    "url": "assets/js/35.b9a046f1.js",
    "revision": "c212a0e9a5cf84ef88b8e5c67b26b79e"
  },
  {
    "url": "assets/js/36.51b2d96c.js",
    "revision": "2ae801b83dd33c26c717df7da8f2218b"
  },
  {
    "url": "assets/js/37.fef8952a.js",
    "revision": "fd403c79967ef825dc3d9dfa2f0771d0"
  },
  {
    "url": "assets/js/38.7c0bc612.js",
    "revision": "49671f45222371a2b22210e4187d5950"
  },
  {
    "url": "assets/js/39.e831ccad.js",
    "revision": "c1ba83c488b4f4d4bd77119f3ac3be04"
  },
  {
    "url": "assets/js/40.faed05f2.js",
    "revision": "9c4cf5bf563b55bb2a0a92858764dfa0"
  },
  {
    "url": "assets/js/41.ba36b5ce.js",
    "revision": "a0e7e8d0be26ee7d7ed6891cc608bed0"
  },
  {
    "url": "assets/js/42.f270317f.js",
    "revision": "e6dd4a4e86d9abff94bd001155875713"
  },
  {
    "url": "assets/js/43.61b3c577.js",
    "revision": "5878d631e10742d2dba359900f16e7ec"
  },
  {
    "url": "assets/js/44.6a611fc3.js",
    "revision": "9d83e51cfb9dd5500f9445f84d160002"
  },
  {
    "url": "assets/js/45.243df84b.js",
    "revision": "d778416111bad00273af952778b1e1e2"
  },
  {
    "url": "assets/js/46.5fa23493.js",
    "revision": "f7a77434249507bf9d95cef1aba05ae1"
  },
  {
    "url": "assets/js/47.cd0598a0.js",
    "revision": "7a63a954f33630fdca55d4eca6d55240"
  },
  {
    "url": "assets/js/48.3b6c522c.js",
    "revision": "9c9ee602ea296cace84a3c9cdb8904b4"
  },
  {
    "url": "assets/js/49.1335c0af.js",
    "revision": "a680496866e003ab0d5f634abd8d3d2d"
  },
  {
    "url": "assets/js/50.52d920a3.js",
    "revision": "7a22f344912e56645497563374f05c8f"
  },
  {
    "url": "assets/js/51.550912f2.js",
    "revision": "5700150d20becde48e4edd08e379e83b"
  },
  {
    "url": "assets/js/52.080dcbd5.js",
    "revision": "53e0ef23b3e9ec639f087efb40be74d5"
  },
  {
    "url": "assets/js/53.551ecde3.js",
    "revision": "6cf2e91440c5434fdeb8d0fdb85bbfbd"
  },
  {
    "url": "assets/js/54.02d228eb.js",
    "revision": "544dfa4507d2f4738ddcbf3642e676e2"
  },
  {
    "url": "assets/js/55.79455a7e.js",
    "revision": "ae58b5b67a78837e2b91c23546f69891"
  },
  {
    "url": "assets/js/56.14295836.js",
    "revision": "9015ad1fac6d6aa877544fea145b3962"
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
    "url": "assets/js/8.05dcc6a9.js",
    "revision": "62d43914667c40c4596db4df4e92da1b"
  },
  {
    "url": "assets/js/9.f3096d5e.js",
    "revision": "71d3c51fe498bf1d006dad05784b71e8"
  },
  {
    "url": "assets/js/app.79960abb.js",
    "revision": "74cdd4591a24112aacbe92ecea18a1ad"
  },
  {
    "url": "assets/js/vuejs-paginate.7dd651a9.js",
    "revision": "4aa6691ca162097269cecac15273132d"
  },
  {
    "url": "category/aria/index.html",
    "revision": "22614ba71579909ad14ea19e0d0aee46"
  },
  {
    "url": "category/html/index.html",
    "revision": "65e76c1183eb5d5cb573e53f3ddc435d"
  },
  {
    "url": "category/index.html",
    "revision": "8e2df34785428cb3c4b22b58bcd7c83c"
  },
  {
    "url": "category/news/index.html",
    "revision": "4d5e154ee5ed12be908305a46e6efe6a"
  },
  {
    "url": "category/packages/index.html",
    "revision": "7a842206b30a7608bc5f8a75b248cb2c"
  },
  {
    "url": "category/spa/index.html",
    "revision": "f6c7b71a04220e3b0cada4f6e1823977"
  },
  {
    "url": "category/tools/index.html",
    "revision": "c0bc2d9bb80cdf237405e11d49501783"
  },
  {
    "url": "category/wcag/index.html",
    "revision": "a2fc468bfd919a3c206c7e5c1720576a"
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
    "revision": "5b63d7d03204b82cdd24e9b021374906"
  },
  {
    "url": "posts/index.html",
    "revision": "99ebe97ef4b7b20865a95300c6eaa623"
  },
  {
    "url": "posts/post-test/index.html",
    "revision": "5c5984acc96a33845f9ef68945bf1471"
  },
  {
    "url": "project/how-to-contribute.html",
    "revision": "518bc4a61b8b40553c530f2b713a057b"
  },
  {
    "url": "project/index.html",
    "revision": "930be6f626aa2d33bd72d501cb66eda2"
  },
  {
    "url": "project/people.html",
    "revision": "19c4daa30d28a7e5ff065802227ac667"
  },
  {
    "url": "project/resources.html",
    "revision": "e9e787e32b70cbf502b4e1ecf05a8afd"
  },
  {
    "url": "project/supporting.html",
    "revision": "22b52a34407def440ebc02d54e3a682c"
  },
  {
    "url": "project/tools-testing.html",
    "revision": "c0ac95de7a2ad76a76c6581c1b4a62b3"
  },
  {
    "url": "project/vue-a11y-checklist.html",
    "revision": "e992767ecfe463221220d3b16f5c1c92"
  },
  {
    "url": "pt/categoria/aria/index.html",
    "revision": "3f6d9b2da571c47cee57656e71a9fbb0"
  },
  {
    "url": "pt/categoria/html/index.html",
    "revision": "cfe0551a7995da99a0a5fcd4f8f3f928"
  },
  {
    "url": "pt/categoria/index.html",
    "revision": "74a7d1ec0e6d83bef90803db96422af6"
  },
  {
    "url": "pt/categoria/novidades/index.html",
    "revision": "dfe3fa9b5b2ede099b9699abebdce7da"
  },
  {
    "url": "pt/categoria/packages/index.html",
    "revision": "c8699aa249e83ffcdaa2e5d904177750"
  },
  {
    "url": "pt/categoria/spa/index.html",
    "revision": "b634d8d7cade9f756a88de5419ecaa46"
  },
  {
    "url": "pt/categoria/tools/index.html",
    "revision": "d25d504c2289aaab1533c16cd1866f05"
  },
  {
    "url": "pt/categoria/wcag/index.html",
    "revision": "de3589808d2a48cc434a24c8d76085e1"
  },
  {
    "url": "pt/configuracoes/index.html",
    "revision": "4b70f08a047ac033e2def72626fbfa24"
  },
  {
    "url": "pt/index.html",
    "revision": "e7ada938d2387eb6043f998bafc929e3"
  },
  {
    "url": "pt/posts/index.html",
    "revision": "342f87a77a114da0fb10e71b507eabff"
  },
  {
    "url": "pt/posts/posts-de-teste/index.html",
    "revision": "4de2af20c3b6815edef68e6766134168"
  },
  {
    "url": "pt/projeto/apoiando.html",
    "revision": "b07282ce6c48a7ab18408d0baa8920f4"
  },
  {
    "url": "pt/projeto/como-contribuir.html",
    "revision": "89bd230016f8272a994433cd1a4a45ce"
  },
  {
    "url": "pt/projeto/ferramentas-e-testes.html",
    "revision": "87ef53b7abc85a31227668e1d334deb7"
  },
  {
    "url": "pt/projeto/index.html",
    "revision": "5b9a1d7bc0a1fc68a9f92a1c1b00ea8e"
  },
  {
    "url": "pt/projeto/links-uteis.html",
    "revision": "034a9360da677f7c848dc79306c22bc4"
  },
  {
    "url": "pt/projeto/pessoas.html",
    "revision": "b1d8cfc938c437f93afe2efbf6c01647"
  },
  {
    "url": "pt/projeto/vue-a11y-checklist.html",
    "revision": "5bd6cf8f3c4117ecc8c629c478e0a209"
  },
  {
    "url": "pt/receitas/contribua.html",
    "revision": "eed6523302f230114951039c28944ef9"
  },
  {
    "url": "pt/receitas/dicas/atributos-aria-no-vue.html",
    "revision": "115821b1b7377858302fa2908222b126"
  },
  {
    "url": "pt/receitas/index.html",
    "revision": "989ad5e9a7754385ccb735d29c333bea"
  },
  {
    "url": "pt/receitas/widgets/accordion.html",
    "revision": "867f7a2bca3339d8355e5693645c7906"
  },
  {
    "url": "pt/receitas/widgets/alert.html",
    "revision": "db6c60f11ae862528ef48219d31fe906"
  },
  {
    "url": "pt/receitas/widgets/breadcrumbs.html",
    "revision": "f00e206d1ae164ea9db3f1b8ad06c69a"
  },
  {
    "url": "pt/receitas/widgets/card.html",
    "revision": "b6a01442d3be0e70944b18b49422a06c"
  },
  {
    "url": "pt/receitas/widgets/dialog.html",
    "revision": "2405448dd5249fd430707725c110df42"
  },
  {
    "url": "pt/receitas/widgets/navegacao-mobile.html",
    "revision": "bc0961197a36a01f13beca64005b8bf8"
  },
  {
    "url": "pt/receitas/widgets/pular-links.html",
    "revision": "38ed378eb013fb807c4414ce2bd2c1ba"
  },
  {
    "url": "pt/receitas/widgets/tabs.html",
    "revision": "c4954ffeadc4d234471fbe6a1b42b1e9"
  },
  {
    "url": "recipes/contribute.html",
    "revision": "ea451f646949f10b5f4743cf3c3076df"
  },
  {
    "url": "recipes/index.html",
    "revision": "ef10b6c9cda97d7eb99d8fde4f0a4b36"
  },
  {
    "url": "recipes/tips/aria-attributes-in-vue.html",
    "revision": "2a96151bf9d89f771042fa43d28558a0"
  },
  {
    "url": "recipes/widgets/accordion.html",
    "revision": "f60a98629ca5942ffb398d8f498cf546"
  },
  {
    "url": "recipes/widgets/alert.html",
    "revision": "3ec7ea1b8fa739d0bfc39f1a74d8bf95"
  },
  {
    "url": "recipes/widgets/breadcrumbs.html",
    "revision": "ce117ed4a2195b0caa280ea045a10686"
  },
  {
    "url": "recipes/widgets/card.html",
    "revision": "60dd0ed0cb70c48981f4cd588f69b296"
  },
  {
    "url": "recipes/widgets/dialog.html",
    "revision": "3120c773c30f4dd5118311b95eae731a"
  },
  {
    "url": "recipes/widgets/mobile-navigation.html",
    "revision": "f73d9532ced44d43d2b4bee6996035b5"
  },
  {
    "url": "recipes/widgets/skip-links.html",
    "revision": "bfb9346d1b91ada20d7bcd988405af68"
  },
  {
    "url": "recipes/widgets/tabs.html",
    "revision": "443be1cda035aad7a83a48988009c5f8"
  },
  {
    "url": "settings/index.html",
    "revision": "6cd087f24d7b61adb7b1fcbf79adec67"
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
