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
    "revision": "62865f23521328d5978e74aa5e23e1c6"
  },
  {
    "url": "assets/css/0.styles.b07cd32c.css",
    "revision": "4fdf66ad840492842ea3dc1381c576a0"
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
    "url": "assets/js/11.503b2128.js",
    "revision": "125999e87de799165d542f752473b340"
  },
  {
    "url": "assets/js/12.080632fa.js",
    "revision": "50f5c123ba2c87d9552b05df98e94107"
  },
  {
    "url": "assets/js/13.5d389712.js",
    "revision": "04e237a5c0cf1a6c2f29542a50ff2e14"
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
    "url": "assets/js/16.e701e2eb.js",
    "revision": "22a915f5b8cbc1387c949ae9c520c8fe"
  },
  {
    "url": "assets/js/17.ebac39b2.js",
    "revision": "682c16fec635227e53174d26516188e5"
  },
  {
    "url": "assets/js/18.f406d18c.js",
    "revision": "ab131aca7db6f97e0164447ffacd7022"
  },
  {
    "url": "assets/js/19.724f0102.js",
    "revision": "39e6c4f70288d6c4b1a0c8a90b64aca4"
  },
  {
    "url": "assets/js/2.8cf3ab50.js",
    "revision": "988eefca1636437c18fa92d335d04f06"
  },
  {
    "url": "assets/js/20.fe64b92a.js",
    "revision": "864a42a2109ce22488b8893348986046"
  },
  {
    "url": "assets/js/21.9b31db84.js",
    "revision": "124710da0d035e0d3428ec19e207464a"
  },
  {
    "url": "assets/js/22.127d7ccd.js",
    "revision": "26c35caef49f75508c596438d740d017"
  },
  {
    "url": "assets/js/23.fbf4d775.js",
    "revision": "2db785301be904cfc59b687939a04884"
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
    "url": "assets/js/28.abf0abc1.js",
    "revision": "eae080662bb474312d9e40c36bc15a5f"
  },
  {
    "url": "assets/js/29.4ebb7535.js",
    "revision": "921f707ed952a7ed80e27dc2cecc76f6"
  },
  {
    "url": "assets/js/3.af5c272e.js",
    "revision": "0f3286d8d2936dd2fe4992e99ca43875"
  },
  {
    "url": "assets/js/30.12d36f2f.js",
    "revision": "de17e8bb3e802cb9455b4008601c4221"
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
    "url": "assets/js/36.60e0ff09.js",
    "revision": "94dbc2c5e625d1740cdc1b9da7221377"
  },
  {
    "url": "assets/js/37.291cfa12.js",
    "revision": "d7f95d7fd4de9b0435b6d366af83b0f0"
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
    "url": "assets/js/50.d7630fbe.js",
    "revision": "de8299614ce8f262405fe74fb4067707"
  },
  {
    "url": "assets/js/51.041bf37b.js",
    "revision": "bbc9d92b2376c8c9fe65cb6f2e32a80a"
  },
  {
    "url": "assets/js/52.af969c75.js",
    "revision": "9a527229d6df2c4131bbef812819d981"
  },
  {
    "url": "assets/js/53.1b204de4.js",
    "revision": "d3ac15e756921471d53f847da2d78c61"
  },
  {
    "url": "assets/js/54.7f0534e3.js",
    "revision": "a2022799991248517c9606bbf533713e"
  },
  {
    "url": "assets/js/55.0e4708b6.js",
    "revision": "11290b35b9297c1758506722b04091e0"
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
    "url": "assets/js/8.04b35a70.js",
    "revision": "9950fdfd2d2b594657ac46322e5494b2"
  },
  {
    "url": "assets/js/9.121f0f35.js",
    "revision": "e3df024fb2e8a11abb100c8a30f38180"
  },
  {
    "url": "assets/js/app.38b71e95.js",
    "revision": "bf8be59ed37efac6d3a234d0a38f124b"
  },
  {
    "url": "assets/js/vuejs-paginate.78f8d84f.js",
    "revision": "975c66b1423e396e986384b464ffcf67"
  },
  {
    "url": "category/aria/index.html",
    "revision": "a882d5a4fc3a4973a878df6e5165a56a"
  },
  {
    "url": "category/html/index.html",
    "revision": "379247af0b5402009fef5f8cec4888ca"
  },
  {
    "url": "category/index.html",
    "revision": "47afb8bc59a394b4050fc422dcea781c"
  },
  {
    "url": "category/news/index.html",
    "revision": "a92d6d7d2ec3e054332757c811caf560"
  },
  {
    "url": "category/packages/index.html",
    "revision": "1b63a3a5d8c9495161e37347f81902ed"
  },
  {
    "url": "category/spa/index.html",
    "revision": "5c7479ac191c7aace513aec80122538f"
  },
  {
    "url": "category/tools/index.html",
    "revision": "063e2c258d3c4f703bbf84eb70546fff"
  },
  {
    "url": "category/wcag/index.html",
    "revision": "3bc566238693972f78fb04d04a1f4bd3"
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
    "revision": "17383785478846dde872d34b2acde44f"
  },
  {
    "url": "posts/index.html",
    "revision": "f708e5c8b3dd3c9987feb3267665f362"
  },
  {
    "url": "posts/post-test/index.html",
    "revision": "552b791fe847ee1143b1221008c13068"
  },
  {
    "url": "project/how-to-contribute.html",
    "revision": "8f063443744f68b77b9120067102f226"
  },
  {
    "url": "project/index.html",
    "revision": "aa7b86328fd8c99e283d9cf63cefe42f"
  },
  {
    "url": "project/people.html",
    "revision": "8e3c3b393c283a87602b19ae3b032ccb"
  },
  {
    "url": "project/resources.html",
    "revision": "7c45972677e97573ffe2d21217a0a203"
  },
  {
    "url": "project/supporting.html",
    "revision": "1d9e1cb0001ae5fdf4fbee84f8d21ed2"
  },
  {
    "url": "project/tools-testing.html",
    "revision": "37ddeaf85ff47505151946dd649af862"
  },
  {
    "url": "project/vue-a11y-checklist.html",
    "revision": "0770e361bd0f9166948c6e20fb307f69"
  },
  {
    "url": "pt/categoria/aria/index.html",
    "revision": "5c42536929e7d2d6e14262a3b149cd75"
  },
  {
    "url": "pt/categoria/html/index.html",
    "revision": "458d354b687a4c1eeba5d2d0df46d612"
  },
  {
    "url": "pt/categoria/index.html",
    "revision": "dcce44dc63e2a972d8a60efe226268eb"
  },
  {
    "url": "pt/categoria/novidades/index.html",
    "revision": "0c6604952f202ff52ef137511597f694"
  },
  {
    "url": "pt/categoria/packages/index.html",
    "revision": "d601a5cd52d1c347e448610577c87543"
  },
  {
    "url": "pt/categoria/spa/index.html",
    "revision": "22744016e21cca8a3f0bb32f55494e1a"
  },
  {
    "url": "pt/categoria/tools/index.html",
    "revision": "b9d7224367c13f3534f085a8190a5581"
  },
  {
    "url": "pt/categoria/wcag/index.html",
    "revision": "f6ea26d0e50da56504d5d4789d951fd7"
  },
  {
    "url": "pt/configuracoes/index.html",
    "revision": "6dd83e71b4cca9ce61106a2cc5e43b2d"
  },
  {
    "url": "pt/index.html",
    "revision": "5c5daf15901801e6e6047997d91eca8b"
  },
  {
    "url": "pt/posts/index.html",
    "revision": "902b8885fdfa5aa7de9d2d14c90fac88"
  },
  {
    "url": "pt/posts/posts-de-teste/index.html",
    "revision": "98e208b6a2c6e51315a7f8a95871803a"
  },
  {
    "url": "pt/projeto/apoiando.html",
    "revision": "6c6e2246fe18b0455cd409d2bc40f44a"
  },
  {
    "url": "pt/projeto/como-contribuir.html",
    "revision": "2a418cf1ac7966fab0003ce5fae14492"
  },
  {
    "url": "pt/projeto/ferramentas-e-testes.html",
    "revision": "ec823f50828f8a5bbd78b2bb8c60c0c1"
  },
  {
    "url": "pt/projeto/index.html",
    "revision": "11e95ae703cee8dbc271753f8ddf7ffe"
  },
  {
    "url": "pt/projeto/links-uteis.html",
    "revision": "f34c73b16f7c9ae8315416654b849d32"
  },
  {
    "url": "pt/projeto/pessoas.html",
    "revision": "6ff4e96bb0d405507cbd291a2a4efe5f"
  },
  {
    "url": "pt/projeto/vue-a11y-checklist.html",
    "revision": "e06def5b57c5d1b8d844f30a52d1b4d0"
  },
  {
    "url": "pt/receitas/contribua.html",
    "revision": "2f6eac43faede52525d1260f62afc7fd"
  },
  {
    "url": "pt/receitas/dicas/atributos-aria-no-vue.html",
    "revision": "7d4dbd0797f1a25dd6ce0d065e905ce4"
  },
  {
    "url": "pt/receitas/index.html",
    "revision": "6b186c674463d31936bc77b80c9d6741"
  },
  {
    "url": "pt/receitas/widgets/accordion.html",
    "revision": "622bbec92d8a48eb34364b7e3b694aa2"
  },
  {
    "url": "pt/receitas/widgets/alert.html",
    "revision": "e4d60c0c1292731ee7e5ce58ebc6668c"
  },
  {
    "url": "pt/receitas/widgets/breadcrumbs.html",
    "revision": "751b08358320793f5b50423ff50b0fff"
  },
  {
    "url": "pt/receitas/widgets/card.html",
    "revision": "8e6d07b2e1c033be1e618bf3a14bebbf"
  },
  {
    "url": "pt/receitas/widgets/dialog.html",
    "revision": "347f335d755fab868b70a16c3d3b0c20"
  },
  {
    "url": "pt/receitas/widgets/navegacao-mobile.html",
    "revision": "d0691d9f3065f0c1beb8da04ce62068d"
  },
  {
    "url": "pt/receitas/widgets/pular-links.html",
    "revision": "992c9cbffae09c5deb77664c99713d13"
  },
  {
    "url": "pt/receitas/widgets/tabs.html",
    "revision": "340c807820bf792153d233e17c7c9e49"
  },
  {
    "url": "recipes/contribute.html",
    "revision": "ab1ea48da89d01eddf08826fa5580d01"
  },
  {
    "url": "recipes/index.html",
    "revision": "ec7c25acb1c7cee9e4e7f7c06711bf0c"
  },
  {
    "url": "recipes/tips/aria-attributes-in-vue.html",
    "revision": "4337647274fa06124f0e870e29a92281"
  },
  {
    "url": "recipes/widgets/accordion.html",
    "revision": "8a0316be870e3bc54155539605a9bee5"
  },
  {
    "url": "recipes/widgets/alert.html",
    "revision": "94caddf266676e586828932b05eaf283"
  },
  {
    "url": "recipes/widgets/breadcrumbs.html",
    "revision": "f3cfcb51404edca605e45bdab75d60ff"
  },
  {
    "url": "recipes/widgets/card.html",
    "revision": "b286fa7358a1a6696c4dcf07ff59832e"
  },
  {
    "url": "recipes/widgets/dialog.html",
    "revision": "8275263a46e85d050f1295cb6642b62b"
  },
  {
    "url": "recipes/widgets/mobile-navigation.html",
    "revision": "7d46d3be2edcef9cd37c874a843dd01c"
  },
  {
    "url": "recipes/widgets/skip-links.html",
    "revision": "ea253001e46059f1b5abbebfb8025182"
  },
  {
    "url": "recipes/widgets/tabs.html",
    "revision": "f85ca77a77d3718e5f0448861e68b34a"
  },
  {
    "url": "settings/index.html",
    "revision": "be7b05d9b4552ac71cbbe7095650fc64"
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
