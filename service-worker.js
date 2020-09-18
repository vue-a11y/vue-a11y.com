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
    "revision": "d1764c72e156afc9a96c8a30b31dc3ba"
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
    "url": "assets/js/15.815becc5.js",
    "revision": "226fe4a46ed80dbe5b90e785ec5c1d3b"
  },
  {
    "url": "assets/js/16.53a0daa5.js",
    "revision": "fe9586aaaebf3950298b75ac629f67ba"
  },
  {
    "url": "assets/js/17.c8a99707.js",
    "revision": "65ec94aa7727ae5e681974ad2a05c9c0"
  },
  {
    "url": "assets/js/18.f406d18c.js",
    "revision": "ab131aca7db6f97e0164447ffacd7022"
  },
  {
    "url": "assets/js/19.7b00d2b4.js",
    "revision": "2f4c38c239ae51d34aeeec1090cf7c00"
  },
  {
    "url": "assets/js/2.0ebde391.js",
    "revision": "33cd6249370254628c4a44577379a17f"
  },
  {
    "url": "assets/js/20.0d75d753.js",
    "revision": "ca090d4bb6af3823d68f6a7fee3394b1"
  },
  {
    "url": "assets/js/21.0f55fcb5.js",
    "revision": "131ff32019aaac73899392ef3c67564f"
  },
  {
    "url": "assets/js/22.a60595b9.js",
    "revision": "d6fc74fb79a7d28a5cc2c6ac17feee6e"
  },
  {
    "url": "assets/js/23.7617c1d9.js",
    "revision": "bf433ac3becb2af041267dfbd70847b0"
  },
  {
    "url": "assets/js/24.82f33128.js",
    "revision": "32978b38ccd446ab0b67f4d25110a5a2"
  },
  {
    "url": "assets/js/25.79e410a9.js",
    "revision": "448d432cc27f8e8217a2bd8aa08145e4"
  },
  {
    "url": "assets/js/26.20b968d3.js",
    "revision": "242171850c8ec7db3084795a57d96c18"
  },
  {
    "url": "assets/js/27.381159b3.js",
    "revision": "83285788e760dec773223b7f8c829253"
  },
  {
    "url": "assets/js/28.c90760f6.js",
    "revision": "c96f81fbdc759846fba9f93289bf8cca"
  },
  {
    "url": "assets/js/29.414e1b1e.js",
    "revision": "cb47b8a2ef29e4c0237f3878a62d9ec9"
  },
  {
    "url": "assets/js/3.c550d7a4.js",
    "revision": "e51addd246cfaa15b64d54556894744d"
  },
  {
    "url": "assets/js/30.5986ac5b.js",
    "revision": "88d362a4fbebd2cce72f20cb249f1354"
  },
  {
    "url": "assets/js/31.169b2487.js",
    "revision": "dbee77e6a2ae9006e2c23612717ba843"
  },
  {
    "url": "assets/js/32.4f7acd36.js",
    "revision": "53255bac223c13de00d1f69d273f015b"
  },
  {
    "url": "assets/js/33.51db10f8.js",
    "revision": "4d47059158dbe509ceb2e36786aec1ef"
  },
  {
    "url": "assets/js/34.10b88b19.js",
    "revision": "961123d4cfc0caa9f6dd93599317ac9e"
  },
  {
    "url": "assets/js/35.c49de37c.js",
    "revision": "ac394475e233a1c0b461ddd54c7622bd"
  },
  {
    "url": "assets/js/36.60e0ff09.js",
    "revision": "94dbc2c5e625d1740cdc1b9da7221377"
  },
  {
    "url": "assets/js/37.b7fecd0b.js",
    "revision": "56b8f0a25164321c41544fa44c4bc626"
  },
  {
    "url": "assets/js/38.19a35d1c.js",
    "revision": "7895fd819ec81174f7b5256d6db16097"
  },
  {
    "url": "assets/js/39.1ecebc25.js",
    "revision": "76aaf6c1a0cb078d5f17f1e68336f411"
  },
  {
    "url": "assets/js/40.6e7de4f1.js",
    "revision": "7c4bb86b45f8e18a30dc1c364dcfc52a"
  },
  {
    "url": "assets/js/41.9ebb66da.js",
    "revision": "3eb81774accc72fc3afccc92b85ba31f"
  },
  {
    "url": "assets/js/42.478c1640.js",
    "revision": "4520c155bec7dc8c97adc56fa74d8e6c"
  },
  {
    "url": "assets/js/43.ca9e868e.js",
    "revision": "670d72502baa511eb883697aa20e03df"
  },
  {
    "url": "assets/js/44.5394a700.js",
    "revision": "d0a31be8843f118c09ce26a5cc152d05"
  },
  {
    "url": "assets/js/45.243df84b.js",
    "revision": "d778416111bad00273af952778b1e1e2"
  },
  {
    "url": "assets/js/46.8fd49c3a.js",
    "revision": "3038ec7250acaa94e8028f17a564e3a2"
  },
  {
    "url": "assets/js/47.2e6d82e3.js",
    "revision": "e067642cfc113733c2596dbc64233286"
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
    "url": "assets/js/51.041bf37b.js",
    "revision": "bbc9d92b2376c8c9fe65cb6f2e32a80a"
  },
  {
    "url": "assets/js/52.97266143.js",
    "revision": "6d03d731aceb919e21e05ab996a2de13"
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
    "url": "assets/js/app.b1f1994a.js",
    "revision": "6bf1f448621a632bbdbe230c24ea0770"
  },
  {
    "url": "assets/js/vuejs-paginate.7dd651a9.js",
    "revision": "4aa6691ca162097269cecac15273132d"
  },
  {
    "url": "category/aria/index.html",
    "revision": "b37a17b3fc4f367a65d2efd22c7648c6"
  },
  {
    "url": "category/html/index.html",
    "revision": "2f0ee4b49beaa6b0203cd8c35772e284"
  },
  {
    "url": "category/index.html",
    "revision": "14c4a7d15312bf6207caf24e4ca880a9"
  },
  {
    "url": "category/news/index.html",
    "revision": "d43fd2d7649d5263d42329639ba5f605"
  },
  {
    "url": "category/packages/index.html",
    "revision": "99250ce254caa974144294d492ff2af2"
  },
  {
    "url": "category/spa/index.html",
    "revision": "30b819b71f5e641b4ccfd2dd35fac917"
  },
  {
    "url": "category/tools/index.html",
    "revision": "7268ea1d26c3e48b3ed47425704986ff"
  },
  {
    "url": "category/wcag/index.html",
    "revision": "ea9479e88276772a4b1c73f2c4f47882"
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
    "revision": "68cd4c337a13b9541c3a66fe9529e584"
  },
  {
    "url": "posts/index.html",
    "revision": "1e695919e65bda752842a384a2fa880d"
  },
  {
    "url": "posts/post-test/index.html",
    "revision": "aa65c4ef6485616843ca05aa06782e5e"
  },
  {
    "url": "project/how-to-contribute.html",
    "revision": "932ee010b63d9e172d9f498dba6643eb"
  },
  {
    "url": "project/index.html",
    "revision": "2ae224e7d01b61b1ed2eea567312c707"
  },
  {
    "url": "project/people.html",
    "revision": "5dfc2927d8e5d1e3a69dacea5e51d865"
  },
  {
    "url": "project/resources.html",
    "revision": "98d286462f1e910710cc4cb5d01a0ffa"
  },
  {
    "url": "project/supporting.html",
    "revision": "e2d443ccbb6e8d23c7de9f6ec6ee4064"
  },
  {
    "url": "project/tools-testing.html",
    "revision": "6d21dd32ef7c3ae621ec5274a3b7ef76"
  },
  {
    "url": "project/vue-a11y-checklist.html",
    "revision": "56a891d92827f365bbc67646da9064f4"
  },
  {
    "url": "pt/categoria/aria/index.html",
    "revision": "2065f6ce4e4deaef2c796387d8cee4af"
  },
  {
    "url": "pt/categoria/html/index.html",
    "revision": "4852420d534c81e3dea6e553678f7b47"
  },
  {
    "url": "pt/categoria/index.html",
    "revision": "0e984d781c05b4217c8edd20331375f0"
  },
  {
    "url": "pt/categoria/novidades/index.html",
    "revision": "8e059664eac5f3f64369b37ff67f6674"
  },
  {
    "url": "pt/categoria/packages/index.html",
    "revision": "f220f6b05b9a8eea92b5dd396fc81719"
  },
  {
    "url": "pt/categoria/spa/index.html",
    "revision": "25480f998b3a99b16ce5c81e006c3648"
  },
  {
    "url": "pt/categoria/tools/index.html",
    "revision": "66dd9970e4f6c32e4518281bb0d380b9"
  },
  {
    "url": "pt/categoria/wcag/index.html",
    "revision": "392ee275ccbe8dbf4c8b41f552152e82"
  },
  {
    "url": "pt/configuracoes/index.html",
    "revision": "42fe667b792207c3808c4bd0ac8cdc13"
  },
  {
    "url": "pt/index.html",
    "revision": "9dd59b4df7dc1b79a7e245b1ec47dbd1"
  },
  {
    "url": "pt/posts/index.html",
    "revision": "cadced59ae13be380241d4be41afd146"
  },
  {
    "url": "pt/posts/posts-de-teste/index.html",
    "revision": "cbf1a8a85ee77dcb49fe4947a13ba595"
  },
  {
    "url": "pt/projeto/apoiando.html",
    "revision": "f335b29e5c9ff82470d37e182f09b0f2"
  },
  {
    "url": "pt/projeto/como-contribuir.html",
    "revision": "3014903fc73d7454c7079f6cf485fbf1"
  },
  {
    "url": "pt/projeto/ferramentas-e-testes.html",
    "revision": "d7a49dd40b73b1b50997b42cc75467fb"
  },
  {
    "url": "pt/projeto/index.html",
    "revision": "8cf5454f7e43f87ad2a51d7e499e4af2"
  },
  {
    "url": "pt/projeto/links-uteis.html",
    "revision": "f4f8cb25c700135083218a01f34e0392"
  },
  {
    "url": "pt/projeto/pessoas.html",
    "revision": "3e480e9a8cc6b9c985aa3c83670a44f3"
  },
  {
    "url": "pt/projeto/vue-a11y-checklist.html",
    "revision": "9f013a42d27692202419fbafeae97933"
  },
  {
    "url": "pt/receitas/contribua.html",
    "revision": "be576eda30f7fce14d90337143587103"
  },
  {
    "url": "pt/receitas/dicas/atributos-aria-no-vue.html",
    "revision": "6f09f3f7ccc3fbbc69006bebf3894fe2"
  },
  {
    "url": "pt/receitas/index.html",
    "revision": "9b1335f518b6bbc1c88baf1366b0c52b"
  },
  {
    "url": "pt/receitas/widgets/accordion.html",
    "revision": "62205ae242312a2b320974b6a8d6461b"
  },
  {
    "url": "pt/receitas/widgets/alert.html",
    "revision": "28fcb8a3e70d868d65c6c6e960647aa5"
  },
  {
    "url": "pt/receitas/widgets/breadcrumbs.html",
    "revision": "23dfbfd54d57dd1c3882fb68e94ecf93"
  },
  {
    "url": "pt/receitas/widgets/card.html",
    "revision": "b0a1cb2ea9e7d514d34b03502d5ba7e4"
  },
  {
    "url": "pt/receitas/widgets/dialog.html",
    "revision": "f7b81b2abbd204a69b5a52e517760d9e"
  },
  {
    "url": "pt/receitas/widgets/navegacao-mobile.html",
    "revision": "8a9f3b08e1bf4710cd339cc08d9eea88"
  },
  {
    "url": "pt/receitas/widgets/pular-links.html",
    "revision": "9ba0a7fc9f5a82e044f2ecae14edd6c2"
  },
  {
    "url": "pt/receitas/widgets/tabs.html",
    "revision": "24926b660629915854c0dd9fb19dce21"
  },
  {
    "url": "recipes/contribute.html",
    "revision": "d12669f4dd3688a8b9df779a7bdd9840"
  },
  {
    "url": "recipes/index.html",
    "revision": "8930439d7258d745ecab374cd7b8096f"
  },
  {
    "url": "recipes/tips/aria-attributes-in-vue.html",
    "revision": "ce31e24fc48b8c360b9cfc5c74426a92"
  },
  {
    "url": "recipes/widgets/accordion.html",
    "revision": "f2480bd629e1ecc47475d388a9cce697"
  },
  {
    "url": "recipes/widgets/alert.html",
    "revision": "fe6ff23b994253f05db1070ff665061d"
  },
  {
    "url": "recipes/widgets/breadcrumbs.html",
    "revision": "c1c6f51e29c0c552c376ddbaf2e3126c"
  },
  {
    "url": "recipes/widgets/card.html",
    "revision": "27c9ddd9b381b04939d03b36121e75d7"
  },
  {
    "url": "recipes/widgets/dialog.html",
    "revision": "ab308b79e2945628c3e47ee36fa1a941"
  },
  {
    "url": "recipes/widgets/mobile-navigation.html",
    "revision": "7934716b07c1a0be0e00679b4b24bbd5"
  },
  {
    "url": "recipes/widgets/skip-links.html",
    "revision": "3e6bb48eb7683e7bc98785208e81f5b5"
  },
  {
    "url": "recipes/widgets/tabs.html",
    "revision": "724dbe4c693e4af7f030f46f6e34cb2d"
  },
  {
    "url": "settings/index.html",
    "revision": "dc571239ba3f715231692e61ceed43d6"
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
