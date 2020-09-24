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
    "revision": "4717d9dab6fe97bcc65c92c02e315373"
  },
  {
    "url": "assets/css/0.styles.81e041b9.css",
    "revision": "564039aaea20c68fb41243725f30ea55"
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
    "url": "assets/js/1.92ad7971.js",
    "revision": "5fecf264c0a6067d0317d4e7b6869c7c"
  },
  {
    "url": "assets/js/10.0bc11ab9.js",
    "revision": "86cc220420622a79370e841b97d30929"
  },
  {
    "url": "assets/js/11.28cf0a9b.js",
    "revision": "7f5af154d9df0b17042b36daa56797f5"
  },
  {
    "url": "assets/js/12.6a701372.js",
    "revision": "2c50c7aa24a278d29d68b8430a09c71d"
  },
  {
    "url": "assets/js/13.5654d7ee.js",
    "revision": "6cf3591cc9c2c1a29d56490cd851a56f"
  },
  {
    "url": "assets/js/14.7bbdf5a2.js",
    "revision": "39160f4e02bea4eb8d9f3ab1f207ba26"
  },
  {
    "url": "assets/js/15.ea666213.js",
    "revision": "3548243749b0606091d2dd4fcbdc75ba"
  },
  {
    "url": "assets/js/16.53a0daa5.js",
    "revision": "fe9586aaaebf3950298b75ac629f67ba"
  },
  {
    "url": "assets/js/17.da75314c.js",
    "revision": "b763a289e28a30ca270a35ae26ae4250"
  },
  {
    "url": "assets/js/18.1726a5cb.js",
    "revision": "2310af5723361f58f4cea750479e0472"
  },
  {
    "url": "assets/js/19.266ff169.js",
    "revision": "868191d51d4fa579f8811ad9ad758492"
  },
  {
    "url": "assets/js/2.405fec0a.js",
    "revision": "d338e0f8b2656e064ab9205c59a463a9"
  },
  {
    "url": "assets/js/20.fe64b92a.js",
    "revision": "864a42a2109ce22488b8893348986046"
  },
  {
    "url": "assets/js/21.866a0277.js",
    "revision": "c62e0d870a36b0119eeae9b0b69db8f4"
  },
  {
    "url": "assets/js/22.127d7ccd.js",
    "revision": "26c35caef49f75508c596438d740d017"
  },
  {
    "url": "assets/js/23.9f711838.js",
    "revision": "4aaf624db55dd422a12c1d3199cf7da2"
  },
  {
    "url": "assets/js/24.82f33128.js",
    "revision": "32978b38ccd446ab0b67f4d25110a5a2"
  },
  {
    "url": "assets/js/25.6e2be5f5.js",
    "revision": "2f12d5f4597aca31b3153183ac3c54d9"
  },
  {
    "url": "assets/js/26.b1a4ea3b.js",
    "revision": "5eab12f44e34b7ce81d5438552365be3"
  },
  {
    "url": "assets/js/27.6daa0a22.js",
    "revision": "792ea31bab66e16686181f54f614cdca"
  },
  {
    "url": "assets/js/28.80a601cd.js",
    "revision": "af205c00faac9b40c78f7be6c1e4833c"
  },
  {
    "url": "assets/js/29.04ba594e.js",
    "revision": "4b870a580ca7a70292fdf5f1e728e42c"
  },
  {
    "url": "assets/js/3.4eb2045e.js",
    "revision": "f599884202db3f993abbcb81a2b1b9e5"
  },
  {
    "url": "assets/js/30.86b38442.js",
    "revision": "c64d2e8df81926c50c2295a127bfa833"
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
    "url": "assets/js/34.4dc77590.js",
    "revision": "98fe0a07b9d81469007cfa92a5935dcb"
  },
  {
    "url": "assets/js/35.c49de37c.js",
    "revision": "ac394475e233a1c0b461ddd54c7622bd"
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
    "url": "assets/js/38.19a35d1c.js",
    "revision": "7895fd819ec81174f7b5256d6db16097"
  },
  {
    "url": "assets/js/39.862b07cf.js",
    "revision": "f939735b68e4a07a1ce8afcb124b7efc"
  },
  {
    "url": "assets/js/40.11c24ad8.js",
    "revision": "fc2ea95b4519edcf6b36d427b465db2d"
  },
  {
    "url": "assets/js/41.3a9ed68c.js",
    "revision": "8e93fcd487e24ab522eec37ec353938a"
  },
  {
    "url": "assets/js/42.8d0273ce.js",
    "revision": "0264712427036671b42f2d868ec855e8"
  },
  {
    "url": "assets/js/43.078da69b.js",
    "revision": "d708bf426790d27e21a7b6c87bb798bd"
  },
  {
    "url": "assets/js/44.5394a700.js",
    "revision": "d0a31be8843f118c09ce26a5cc152d05"
  },
  {
    "url": "assets/js/45.2d1b9c00.js",
    "revision": "7e681d14edee0b3de2a523dee4e74555"
  },
  {
    "url": "assets/js/46.3c3ca599.js",
    "revision": "66dd34a9d2efd34a7ae30c26c90a50d3"
  },
  {
    "url": "assets/js/47.ec413088.js",
    "revision": "8f493e6782627bd3b84718a27198161f"
  },
  {
    "url": "assets/js/48.7ba5d584.js",
    "revision": "013e6a482576e49e5d4488ce526d11bc"
  },
  {
    "url": "assets/js/49.585e2b68.js",
    "revision": "0a990423835ec30522560bf86060c7a0"
  },
  {
    "url": "assets/js/50.a1f86a39.js",
    "revision": "6b5e99f2ed7f634f539548e1618c8bc0"
  },
  {
    "url": "assets/js/51.b8f77282.js",
    "revision": "36efabfa0aef4f0fc08a50184b45b4fb"
  },
  {
    "url": "assets/js/52.6453bc47.js",
    "revision": "587bd7cdce550aa66b536bfaeb785ae0"
  },
  {
    "url": "assets/js/53.171e8a13.js",
    "revision": "12ed227d6adcf48aed700b9569113c20"
  },
  {
    "url": "assets/js/54.38322806.js",
    "revision": "116d45fe6df07469092ed3c000c5fad6"
  },
  {
    "url": "assets/js/55.50232cd0.js",
    "revision": "e78fa95feac71a928178778b0b97f55a"
  },
  {
    "url": "assets/js/56.5c4a41ae.js",
    "revision": "a748158dd8bf0196ffc9358b43e4a99d"
  },
  {
    "url": "assets/js/6.e24abb06.js",
    "revision": "be39685ee93567e0d2e9ff21977e132f"
  },
  {
    "url": "assets/js/7.c4730ce6.js",
    "revision": "1e05760f221ff5f876db00c25a949c84"
  },
  {
    "url": "assets/js/8.2007a0ff.js",
    "revision": "4d70e8fabb114a7516d2d899bf1281c8"
  },
  {
    "url": "assets/js/9.01de48e7.js",
    "revision": "84d92b3859159418d948af9aeade7478"
  },
  {
    "url": "assets/js/app.71ce296b.js",
    "revision": "dda9cd4c22664b1981e8f6147118d226"
  },
  {
    "url": "assets/js/vuejs-paginate.78f8d84f.js",
    "revision": "975c66b1423e396e986384b464ffcf67"
  },
  {
    "url": "category/aria/index.html",
    "revision": "3e7292359b6718d24d5a26056297c405"
  },
  {
    "url": "category/html/index.html",
    "revision": "9dbc88ab376443f0b42946e46f3bfb7c"
  },
  {
    "url": "category/index.html",
    "revision": "79758b32e3a07ba6bb16058809c7e5ab"
  },
  {
    "url": "category/news/index.html",
    "revision": "85244ec3bcff9f22f37569a886490b32"
  },
  {
    "url": "category/packages/index.html",
    "revision": "ee36bcc56311dbd4066772e231ab670c"
  },
  {
    "url": "category/spa/index.html",
    "revision": "8d4025a249749e8c5cdd1b6a8edcce1a"
  },
  {
    "url": "category/tools/index.html",
    "revision": "f4f77d8691c9d4609cdabba4c89d7160"
  },
  {
    "url": "category/wcag/index.html",
    "revision": "a23954a147170679134431a6fc9b3004"
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
    "revision": "b9bd0267be947eb8a6b4c58e234205f2"
  },
  {
    "url": "posts/index.html",
    "revision": "df6f80f5e1fd17ed9dbf0f1cced21042"
  },
  {
    "url": "posts/post-test/index.html",
    "revision": "4368875408937b04c7cb24a039d11dc1"
  },
  {
    "url": "project/how-to-contribute.html",
    "revision": "e9655b9240e952fcf517973a7a694675"
  },
  {
    "url": "project/index.html",
    "revision": "fd797c865d510d1d5b504ed2b7a98b31"
  },
  {
    "url": "project/people.html",
    "revision": "5e4bc7526d5e61ddd5bf42501aa0093f"
  },
  {
    "url": "project/resources.html",
    "revision": "dcb938780a49e264e5631b05e586ae9d"
  },
  {
    "url": "project/supporting.html",
    "revision": "2e79ca42654651c89878db7fe3d0fe49"
  },
  {
    "url": "project/tools-testing.html",
    "revision": "758aa4fedc9c4c3acc5a1ed4804eaebb"
  },
  {
    "url": "project/vue-a11y-checklist.html",
    "revision": "a25109febbf39a0021ef7bf43966df27"
  },
  {
    "url": "pt/categoria/aria/index.html",
    "revision": "55dcf08cc7695136d24ed1a2f983503b"
  },
  {
    "url": "pt/categoria/html/index.html",
    "revision": "13863af00f588463ba5b0e66d6036be1"
  },
  {
    "url": "pt/categoria/index.html",
    "revision": "9cec728c8b4e8233232bc3416307e640"
  },
  {
    "url": "pt/categoria/novidades/index.html",
    "revision": "a97d246e95d67585b1fa4815d21c4038"
  },
  {
    "url": "pt/categoria/packages/index.html",
    "revision": "dfb91bf80ad3edee8ccb318b121baeb0"
  },
  {
    "url": "pt/categoria/spa/index.html",
    "revision": "baa8d2b4ef79f1bbc6c8a3ad7acffde7"
  },
  {
    "url": "pt/categoria/tools/index.html",
    "revision": "af165d209ad98c34291dd29834038b83"
  },
  {
    "url": "pt/categoria/wcag/index.html",
    "revision": "9b4ddecf64f337feb4a87da88a417a60"
  },
  {
    "url": "pt/configuracoes/index.html",
    "revision": "27167b4ac6cdc973df008db29d77af8b"
  },
  {
    "url": "pt/index.html",
    "revision": "ba6876fdce4bdc2dfbd02b6df156341a"
  },
  {
    "url": "pt/posts/index.html",
    "revision": "f233de6cc63d5ea9f1983165e6f915bf"
  },
  {
    "url": "pt/posts/posts-de-teste/index.html",
    "revision": "ed0877ae142ad78c14a691bacb2c85a0"
  },
  {
    "url": "pt/projeto/apoiando.html",
    "revision": "954ee1366f0a91e9ed845148541f4a63"
  },
  {
    "url": "pt/projeto/como-contribuir.html",
    "revision": "47d8990d40822a21bb94891e000f599b"
  },
  {
    "url": "pt/projeto/ferramentas-e-testes.html",
    "revision": "acc2d9979252f673d9ccc51531c9a173"
  },
  {
    "url": "pt/projeto/index.html",
    "revision": "4202a4eed4de0af3a4ad97409b3cb602"
  },
  {
    "url": "pt/projeto/links-uteis.html",
    "revision": "cc03ee0453f05758cce158a82a68d36c"
  },
  {
    "url": "pt/projeto/pessoas.html",
    "revision": "dd8e0f8a237992467fc5276dd456e7dc"
  },
  {
    "url": "pt/projeto/vue-a11y-checklist.html",
    "revision": "6aaa10f8ca59ac0a876821eadab6d836"
  },
  {
    "url": "pt/receitas/contribua.html",
    "revision": "6a3ecfcfcab0f6c139436325715bff8b"
  },
  {
    "url": "pt/receitas/dicas/atributos-aria-no-vue.html",
    "revision": "102ca774c54419424ce25d83b44d9a99"
  },
  {
    "url": "pt/receitas/index.html",
    "revision": "670abd1de8c9030a7d0955f1e463fbdb"
  },
  {
    "url": "pt/receitas/widgets/accordion.html",
    "revision": "3ca74f76c44aac104c431af093ea762e"
  },
  {
    "url": "pt/receitas/widgets/alert.html",
    "revision": "36f277fe07ebae0e268d00d75c6b669d"
  },
  {
    "url": "pt/receitas/widgets/breadcrumbs.html",
    "revision": "91d3fac09b17ccbe276a5fdf46decfd5"
  },
  {
    "url": "pt/receitas/widgets/card.html",
    "revision": "f72c49c009120ed41b948f1e90db233b"
  },
  {
    "url": "pt/receitas/widgets/dialog.html",
    "revision": "6d844313689e3c6bb54c7476c776ef05"
  },
  {
    "url": "pt/receitas/widgets/navegacao-mobile.html",
    "revision": "b15504153916f4d8744b563028618224"
  },
  {
    "url": "pt/receitas/widgets/pular-links.html",
    "revision": "d460f1542c0d524d9be35b92beb3125d"
  },
  {
    "url": "pt/receitas/widgets/tabs.html",
    "revision": "fbd6811aea9f68f78f0041eff632a1db"
  },
  {
    "url": "recipes/contribute.html",
    "revision": "ce831bb1759512d408f61edaab140cda"
  },
  {
    "url": "recipes/index.html",
    "revision": "3b22a72cd1218ae216c7ec7bb07e8463"
  },
  {
    "url": "recipes/tips/aria-attributes-in-vue.html",
    "revision": "fa1c102af21df5094fe3a982448edb7e"
  },
  {
    "url": "recipes/widgets/accordion.html",
    "revision": "06633afb7da42f99cc3fa53f18983c90"
  },
  {
    "url": "recipes/widgets/alert.html",
    "revision": "80819ddbf32e153351ac85587ab83520"
  },
  {
    "url": "recipes/widgets/breadcrumbs.html",
    "revision": "8f1c31e314fd045badb8903543043dfb"
  },
  {
    "url": "recipes/widgets/card.html",
    "revision": "962e16e02bb768d59e85d363448168f4"
  },
  {
    "url": "recipes/widgets/dialog.html",
    "revision": "ceafa3dd74962a582e4371751e7da577"
  },
  {
    "url": "recipes/widgets/mobile-navigation.html",
    "revision": "3aa9cefb2fd71fa57e13cd241933d3bd"
  },
  {
    "url": "recipes/widgets/skip-links.html",
    "revision": "b50c2c708b5096471489e8c4b5bd4c68"
  },
  {
    "url": "recipes/widgets/tabs.html",
    "revision": "e6874c35638d95e738cb0c0e67c7acaa"
  },
  {
    "url": "settings/index.html",
    "revision": "067195f8fc4dc2c218a1bdc0002c73b0"
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
