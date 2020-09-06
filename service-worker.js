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
    "revision": "23b3637949ee326d911ef5fd9a5134b5"
  },
  {
    "url": "assets/css/0.styles.5fb42e2b.css",
    "revision": "d18d877839957fbe4bce8ca57616745c"
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
    "url": "assets/js/11.d2a3fc5c.js",
    "revision": "5b092ab3a1f3eb3b3a431f80d9b31916"
  },
  {
    "url": "assets/js/12.a488f2ea.js",
    "revision": "a7c93c665740112bcdbbb857b941dd28"
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
    "url": "assets/js/16.365f4e91.js",
    "revision": "f88186491833a18d970533f66e454db3"
  },
  {
    "url": "assets/js/17.6372cfe4.js",
    "revision": "a9d39e0ed4a56d5bd2af0a0da0b2c8c6"
  },
  {
    "url": "assets/js/18.9b986707.js",
    "revision": "fbf63d9f70f226350352d5db36df6cce"
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
    "url": "assets/js/21.1dbbdedf.js",
    "revision": "03b91b431f973a43856efd0185f412ac"
  },
  {
    "url": "assets/js/22.f76521d3.js",
    "revision": "b01114af0c408ef6abaa7609564c7fbc"
  },
  {
    "url": "assets/js/23.c88b386b.js",
    "revision": "2ee4b277ac3c6ea89453df5ec19ada8f"
  },
  {
    "url": "assets/js/24.cc128994.js",
    "revision": "74c6405a5eb2a09fa4a84db4640445f1"
  },
  {
    "url": "assets/js/25.bb03fa93.js",
    "revision": "4c2c10fa77d1fe98a54c7a3a87ddd92a"
  },
  {
    "url": "assets/js/26.7b32621d.js",
    "revision": "416e09b660c5096795ef0021a7937871"
  },
  {
    "url": "assets/js/27.bbcb667f.js",
    "revision": "a78c9c459af044efb79b44641aa1b2e9"
  },
  {
    "url": "assets/js/28.ee11e1ab.js",
    "revision": "97eeae3ade24b59a1f76b2a4946227f2"
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
    "url": "assets/js/30.8630de47.js",
    "revision": "2ca16a6c6a0e910cd7b7b6407bd6616e"
  },
  {
    "url": "assets/js/31.dc58a9c5.js",
    "revision": "32fac98a1049076fab11dfcac116d3d3"
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
    "url": "assets/js/36.e2eca342.js",
    "revision": "3a7ef68182b1396d333373792be9aee5"
  },
  {
    "url": "assets/js/37.7a6c633f.js",
    "revision": "de217aa0e8681fb529d6fbdf33f98669"
  },
  {
    "url": "assets/js/38.c12f2b18.js",
    "revision": "995a46c7d525eefac27da92b3e9bb344"
  },
  {
    "url": "assets/js/39.4536912d.js",
    "revision": "97f3e525f11023903063510a3626b697"
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
    "url": "assets/js/6.7255bb54.js",
    "revision": "feb3bda46fff74d02e1bd989ce5de771"
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
    "url": "assets/js/9.954a071c.js",
    "revision": "17054f6ef2626049d23d56160fda07f4"
  },
  {
    "url": "assets/js/app.8bdad888.js",
    "revision": "1b10e16de3c8721ebbcaf719b4b52ec8"
  },
  {
    "url": "assets/js/vuejs-paginate.92f047ca.js",
    "revision": "dfad919ae3fb0a74e488965117bf0558"
  },
  {
    "url": "category/aria/index.html",
    "revision": "e5fd4796ff12c26ac8d9e9ab1d58c5eb"
  },
  {
    "url": "category/html/index.html",
    "revision": "9f534282c5adf163e07ed9d30b1c3c57"
  },
  {
    "url": "category/index.html",
    "revision": "3b8851cbfaf4047da97396644204fd09"
  },
  {
    "url": "category/news/index.html",
    "revision": "1761a1f3db4ab9dbb058f3d1ef939d4e"
  },
  {
    "url": "category/packages/index.html",
    "revision": "a50a675b53ea38e5eae9d915a7212735"
  },
  {
    "url": "category/spa/index.html",
    "revision": "ca902ad02c03de75cd48250369abb1a8"
  },
  {
    "url": "category/tools/index.html",
    "revision": "65184786ad9e474e3686fe8c4481d6a5"
  },
  {
    "url": "category/wcag/index.html",
    "revision": "dc7276b22f16861d5efdeccf080a37f4"
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
    "revision": "801289485d6af66ad8d7c8959da8463b"
  },
  {
    "url": "posts/index.html",
    "revision": "a7daac5a15bf563c678ffd6a47dff76b"
  },
  {
    "url": "posts/post-test/index.html",
    "revision": "70a802f6f57c451f50940b4348bb430e"
  },
  {
    "url": "project/contributors.html",
    "revision": "2d60b0985e35bf432afc744f87633421"
  },
  {
    "url": "project/index.html",
    "revision": "fa508b547a8d398892e7b859e7183c99"
  },
  {
    "url": "project/resources.html",
    "revision": "9fc33471d4c6d1cdb2313decd0b6c55f"
  },
  {
    "url": "project/supporting.html",
    "revision": "55c416eac3f1919eb2b1998c9c696ac3"
  },
  {
    "url": "project/tools-testing.html",
    "revision": "8b08f0c3bccaf10b842b1f9c760649ef"
  },
  {
    "url": "project/vue-a11y-checklist.html",
    "revision": "a1ca0222d64078380402fc19b1a04d65"
  },
  {
    "url": "pt/categoria/aria/index.html",
    "revision": "606fe60a4b3f6386c95c708fe5126012"
  },
  {
    "url": "pt/categoria/html/index.html",
    "revision": "58e4fcf542d186823ce4e3b87cffbcb2"
  },
  {
    "url": "pt/categoria/index.html",
    "revision": "b375ba5d13e9eaa6f2a9da52810f4a79"
  },
  {
    "url": "pt/categoria/novidades/index.html",
    "revision": "cf23216d53db4a1a50eb758a21ef6d4c"
  },
  {
    "url": "pt/categoria/packages/index.html",
    "revision": "ff9ba5ffd3cc4e5e4a6941049a5db8e0"
  },
  {
    "url": "pt/categoria/spa/index.html",
    "revision": "e3d599969552c5bbaf183ef688475338"
  },
  {
    "url": "pt/categoria/tools/index.html",
    "revision": "10062858e92762eb649d8d48d09f3172"
  },
  {
    "url": "pt/categoria/wcag/index.html",
    "revision": "df9a004a8c65600e964efe77e00f5b2c"
  },
  {
    "url": "pt/configuracoes/index.html",
    "revision": "e875fd66ee2c35c8d885fca7f28b57ea"
  },
  {
    "url": "pt/index.html",
    "revision": "08a8e8e73a7b59f2d233eae8245b258f"
  },
  {
    "url": "pt/posts/index.html",
    "revision": "8dfd3fdc3106b84bdde4a4ca90ff35f9"
  },
  {
    "url": "pt/posts/posts-de-teste/index.html",
    "revision": "e8a2f0b5033df847526f67f4bc1e4de8"
  },
  {
    "url": "pt/projeto/apoiando.html",
    "revision": "d470635c85301b589dc6fd8adec8ff6a"
  },
  {
    "url": "pt/projeto/contribuidores.html",
    "revision": "16718e7bc6e0b7555c9d61ec62efa5ff"
  },
  {
    "url": "pt/projeto/ferramentas-e-testes.html",
    "revision": "7a465006e1bd364d6efe8aa461aaccff"
  },
  {
    "url": "pt/projeto/index.html",
    "revision": "7d724dfc851469cad6b784163698dd5e"
  },
  {
    "url": "pt/projeto/links-uteis.html",
    "revision": "d5bb1256182707d18d6e9acee8535c63"
  },
  {
    "url": "pt/projeto/vue-a11y-checklist.html",
    "revision": "b48bd0eea5f7e49a0d2f163b61a2f0ce"
  },
  {
    "url": "pt/receitas/contribua.html",
    "revision": "c5e3fa77377ca82969dedea50a4f7e58"
  },
  {
    "url": "pt/receitas/dicas/atributos-aria-no-vue.html",
    "revision": "bcf355d997f5f2efaac59e50e427a071"
  },
  {
    "url": "pt/receitas/index.html",
    "revision": "6082b9838e48ff2b66cd5263d6f52ac2"
  },
  {
    "url": "pt/receitas/widgets/accordion.html",
    "revision": "e2312403d584cb77e1e5f567bd34cd53"
  },
  {
    "url": "pt/receitas/widgets/alert.html",
    "revision": "9277f641278f7ce28bca67d79ddb3afa"
  },
  {
    "url": "pt/receitas/widgets/breadcrumbs.html",
    "revision": "296cf2fb582ee0e3e494deb3d650839c"
  },
  {
    "url": "pt/receitas/widgets/card.html",
    "revision": "946eca50e36cdc0fbfe553da608bc99c"
  },
  {
    "url": "pt/receitas/widgets/dialog.html",
    "revision": "8cd9c5372b5a0904afc2830bd3eaa0a8"
  },
  {
    "url": "pt/receitas/widgets/navegacao-mobile.html",
    "revision": "5973bc840f0610184ff2bf48d22bbabc"
  },
  {
    "url": "pt/receitas/widgets/pular-links.html",
    "revision": "de72833c326378ace2b6eb8842e5e36b"
  },
  {
    "url": "pt/receitas/widgets/tabs.html",
    "revision": "2f51f1f8a2217ca6106c1d73e3e8230e"
  },
  {
    "url": "recipes/contribute.html",
    "revision": "7163bc7f4a5208cf439521545e341be0"
  },
  {
    "url": "recipes/index.html",
    "revision": "e2237b90149dd16ecd53ebd34adc8746"
  },
  {
    "url": "recipes/tips/aria-attributes-in-vue.html",
    "revision": "ab5d76e91067a5b349f814b609e047ba"
  },
  {
    "url": "recipes/widgets/accordion.html",
    "revision": "1e4254751133d8a75c136a32bf49362c"
  },
  {
    "url": "recipes/widgets/alert.html",
    "revision": "1b9930318ad76eda03602e80d4a0afcc"
  },
  {
    "url": "recipes/widgets/breadcrumbs.html",
    "revision": "1e881b439b34f2ed0b7d14ecd057f75f"
  },
  {
    "url": "recipes/widgets/card.html",
    "revision": "e9b9b653baf9cb067f8c48c79fb36722"
  },
  {
    "url": "recipes/widgets/dialog.html",
    "revision": "b6474855975ffed51475953165c0561d"
  },
  {
    "url": "recipes/widgets/mobile-navigation.html",
    "revision": "15d053548ce147be2145682a10a19283"
  },
  {
    "url": "recipes/widgets/skip-links.html",
    "revision": "e1e4a2c845298671d0cc17422ccd6945"
  },
  {
    "url": "recipes/widgets/tabs.html",
    "revision": "d0f18deb4b35a2be0261d6c36af5ffad"
  },
  {
    "url": "settings/index.html",
    "revision": "d0b2ef550d8a28e21ff44f4166d686f4"
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
