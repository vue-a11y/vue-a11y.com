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
    "revision": "77eb42435e5d5a8e15d301fd36a12579"
  },
  {
    "url": "assets/css/0.styles.ccc73a3e.css",
    "revision": "bdeffb63704edadfe27ca590faa0f68b"
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
    "url": "assets/js/1.f2df080d.js",
    "revision": "3f497bf56621fc4e761e7a72cd74f7ad"
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
    "url": "assets/js/15.2529c8b3.js",
    "revision": "11eacbc5d0c248bf01e4d8a581a30803"
  },
  {
    "url": "assets/js/16.096c55b1.js",
    "revision": "588d384d127fa50f7e37bd79b42e743f"
  },
  {
    "url": "assets/js/17.13717119.js",
    "revision": "1d9a668289439fbc8b8112a9df4b0483"
  },
  {
    "url": "assets/js/18.fdd68a3b.js",
    "revision": "79149ce2f35568f0db38d62f98312711"
  },
  {
    "url": "assets/js/19.fdefd9c2.js",
    "revision": "16b5bfe8493ff74ebca5cac2b7fa2e3e"
  },
  {
    "url": "assets/js/2.5ca7a5c3.js",
    "revision": "457fc64f47c7f8810eb067721644f7cb"
  },
  {
    "url": "assets/js/20.968bfec4.js",
    "revision": "ce000e1291eb7d2dcbc092bac00a59cb"
  },
  {
    "url": "assets/js/21.21553430.js",
    "revision": "67a24304641fe6c7fa5198a853a3cfc9"
  },
  {
    "url": "assets/js/22.d236801c.js",
    "revision": "7b5b1f1382e4bec964f0c4a80954fa69"
  },
  {
    "url": "assets/js/23.cd59256b.js",
    "revision": "44713846e0a6a73005114d069922b1dd"
  },
  {
    "url": "assets/js/24.6a5f899e.js",
    "revision": "39d7f86b7ef7922cb2b2420ad7f8d0cf"
  },
  {
    "url": "assets/js/25.ceace010.js",
    "revision": "0cba05fbedc78e76208e224b11d51182"
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
    "url": "assets/js/3.53b8ad9a.js",
    "revision": "dfc2337891529550e9b3b0591867f133"
  },
  {
    "url": "assets/js/30.bae781aa.js",
    "revision": "668586d64589290f13a6cd144b1bcd2e"
  },
  {
    "url": "assets/js/31.1ae0ae40.js",
    "revision": "6531ad6024b0159debdf1943f4eb1dc9"
  },
  {
    "url": "assets/js/32.bda68b0c.js",
    "revision": "21b543ce9f4b5fcd86b463c5b4a7bf19"
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
    "url": "assets/js/35.cb29c2d9.js",
    "revision": "21092c3d7753c23871c78a6ae32c77ff"
  },
  {
    "url": "assets/js/36.5e61ce0a.js",
    "revision": "a4af5f7335333ec3b844209375df856a"
  },
  {
    "url": "assets/js/37.c454263a.js",
    "revision": "e24865c222c9755562e7fbf47aa56555"
  },
  {
    "url": "assets/js/38.36a4d9d2.js",
    "revision": "9cb33f75e68bf475eadf65d361c4d8aa"
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
    "url": "assets/js/42.9f866d5d.js",
    "revision": "fddf4dd2c89d20cd3a7a5613703e3b71"
  },
  {
    "url": "assets/js/43.1c1c8687.js",
    "revision": "925f885b22dd11e3b1818f62a209ef9f"
  },
  {
    "url": "assets/js/44.9ab00e53.js",
    "revision": "3632219e53d0dd1a4ae51bbea4acb128"
  },
  {
    "url": "assets/js/45.7381d7de.js",
    "revision": "5da77ce81da817df6431bdc929218163"
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
    "url": "assets/js/6.b45227c2.js",
    "revision": "519f04782a91e4b1cd8780bb6101f2ea"
  },
  {
    "url": "assets/js/7.efc748cf.js",
    "revision": "483807ca8aee674ba9519b1aac8857f6"
  },
  {
    "url": "assets/js/8.23bc5efc.js",
    "revision": "cce93beb0930b8b10f694973d666b15f"
  },
  {
    "url": "assets/js/9.d40947bd.js",
    "revision": "857423aa8544c55d4313b281d7254ba4"
  },
  {
    "url": "assets/js/app.6bc81b2f.js",
    "revision": "57e16fbfd9779bebde7e05b05501c0e2"
  },
  {
    "url": "assets/js/vuejs-paginate.20dd2929.js",
    "revision": "e661309be3db5bef67430eed32a03cb6"
  },
  {
    "url": "category/aria/index.html",
    "revision": "3a911109d01b54dc8bab7615419140ec"
  },
  {
    "url": "category/html/index.html",
    "revision": "60bb363628dfb6ab43b6c34e345bae49"
  },
  {
    "url": "category/index.html",
    "revision": "929525b47251fe90e9d17cd76590c4b7"
  },
  {
    "url": "category/news/index.html",
    "revision": "f78131a7677a4d6e2227f95234b284ad"
  },
  {
    "url": "category/packages/index.html",
    "revision": "7322208f4915e78c76c6f8353cf6573a"
  },
  {
    "url": "category/spa/index.html",
    "revision": "62179ca50f017139431ee43a84ccbd70"
  },
  {
    "url": "category/tools/index.html",
    "revision": "3dc2f63c00e98f64cd3aca9b497f78de"
  },
  {
    "url": "category/wcag/index.html",
    "revision": "a7a644537b3f7e781fa2603616d577c6"
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
    "revision": "0ce7fa0a12df87f07898fc267fc47f18"
  },
  {
    "url": "posts/index.html",
    "revision": "5048447dd9fc375b7f2179651fd4519b"
  },
  {
    "url": "posts/post-test/index.html",
    "revision": "297241fa7266d563127806ee98b7600b"
  },
  {
    "url": "project/contributors.html",
    "revision": "c8e30c81faea6ef89a9b26249b6fb3b7"
  },
  {
    "url": "project/index.html",
    "revision": "48caee719cb932f48f5bd3e78ceca30e"
  },
  {
    "url": "project/resources.html",
    "revision": "a5040d5b7543a1736405c62121b1359f"
  },
  {
    "url": "project/supporting.html",
    "revision": "d42c39e467cd17df6b28aa5b271a0e93"
  },
  {
    "url": "project/tools-testing.html",
    "revision": "dfae4fa9eba48106902bb101cfeaea65"
  },
  {
    "url": "project/vue-a11y-checklist.html",
    "revision": "ff96eaf8e3e9c495e53bf9bc10db5c69"
  },
  {
    "url": "pt/categoria/aria/index.html",
    "revision": "8338282e59bab37e563bc80df097850e"
  },
  {
    "url": "pt/categoria/html/index.html",
    "revision": "7049465990a5e466c0934cf269009e2c"
  },
  {
    "url": "pt/categoria/index.html",
    "revision": "ff2f22cbbba9b79416f94088ba2bfa01"
  },
  {
    "url": "pt/categoria/novidades/index.html",
    "revision": "95e709bc5ca149bcef75c929942d4869"
  },
  {
    "url": "pt/categoria/packages/index.html",
    "revision": "5e0d7444aa5cd021f80bda2118390ab3"
  },
  {
    "url": "pt/categoria/spa/index.html",
    "revision": "bd0a857568a5b11d71ad7802e0d1c0ea"
  },
  {
    "url": "pt/categoria/tools/index.html",
    "revision": "a7eb9717424632f0c487dd2e5ded248e"
  },
  {
    "url": "pt/categoria/wcag/index.html",
    "revision": "558ed47fe3bbecea492cba92ea37f439"
  },
  {
    "url": "pt/configuracoes/index.html",
    "revision": "ee09496b2e44c61b2e24f22800b97255"
  },
  {
    "url": "pt/index.html",
    "revision": "b096c483f03c178e9834fe4019f4b120"
  },
  {
    "url": "pt/posts/index.html",
    "revision": "ede8743dd8ac5d7757ab947d74981501"
  },
  {
    "url": "pt/posts/posts-de-teste/index.html",
    "revision": "ac0dce4c3a94c66215704c532c15cb1d"
  },
  {
    "url": "pt/projeto/apoiando.html",
    "revision": "8dd4699a9e72fef14b50e7fc60287f26"
  },
  {
    "url": "pt/projeto/contribuidores.html",
    "revision": "d6e6bd073d055dd3ec761adf3f65f303"
  },
  {
    "url": "pt/projeto/ferramentas-e-testes.html",
    "revision": "e18e36590b9f615ab3e3ece28e1fc2c5"
  },
  {
    "url": "pt/projeto/index.html",
    "revision": "2f858c19c8e220978c7eba116640c0cb"
  },
  {
    "url": "pt/projeto/links-uteis.html",
    "revision": "a05d0f2d59939e798ca7e51902a0340c"
  },
  {
    "url": "pt/projeto/vue-a11y-checklist.html",
    "revision": "682669f60976cbbfbb8517cef6529ea7"
  },
  {
    "url": "pt/receitas/contribua.html",
    "revision": "6878792a95931995ac556fdff9d76453"
  },
  {
    "url": "pt/receitas/dicas/atributos-aria-no-vue.html",
    "revision": "7596e1128b79b9093bde686d42cc7efa"
  },
  {
    "url": "pt/receitas/index.html",
    "revision": "364a3e8e3df0e8a53ae158de45228e1d"
  },
  {
    "url": "pt/receitas/widgets/accordion.html",
    "revision": "332e36f153fddde7cdf0a435bf8e6945"
  },
  {
    "url": "pt/receitas/widgets/alert.html",
    "revision": "082fbf7c66a9d7b243fc9de8a13f0b77"
  },
  {
    "url": "pt/receitas/widgets/breadcrumbs.html",
    "revision": "328fc25b0c6217d7a56bf35ca25f2f29"
  },
  {
    "url": "pt/receitas/widgets/card.html",
    "revision": "e9c8d4c59fc4b290b8266cabb4ec32e9"
  },
  {
    "url": "pt/receitas/widgets/dialog.html",
    "revision": "3c9e52b922ad43a57ef453096d7a477b"
  },
  {
    "url": "pt/receitas/widgets/navegacao-mobile.html",
    "revision": "453aeedb1632d76ace8af32d92918b6f"
  },
  {
    "url": "pt/receitas/widgets/pular-links.html",
    "revision": "6a7015599d9d0f1179851c0d733fe601"
  },
  {
    "url": "pt/receitas/widgets/tabs.html",
    "revision": "900629fe0e8be8a7f461424b2a57d946"
  },
  {
    "url": "recipes/contribute.html",
    "revision": "50b53df505b3f61b97fbdad57ebcdf7c"
  },
  {
    "url": "recipes/index.html",
    "revision": "8c5e6bea7fc90fc103098edcefc6a70f"
  },
  {
    "url": "recipes/tips/aria-attributes-in-vue.html",
    "revision": "3dd845331cccc221003e87fd734485e4"
  },
  {
    "url": "recipes/widgets/accordion.html",
    "revision": "c201b4514ddf216dbe82acb4594c6760"
  },
  {
    "url": "recipes/widgets/alert.html",
    "revision": "ebdd5fcc7b731ae2ba70e58d7be0e9a6"
  },
  {
    "url": "recipes/widgets/breadcrumbs.html",
    "revision": "4f4e01913c272bf03eb52d1bcd90cf80"
  },
  {
    "url": "recipes/widgets/card.html",
    "revision": "7cb7ba9b9f27a5ad26b73f167d20362a"
  },
  {
    "url": "recipes/widgets/dialog.html",
    "revision": "5a17263f184f3b09b0934602dcec3c3f"
  },
  {
    "url": "recipes/widgets/mobile-navigation.html",
    "revision": "f0f8971c28b90c2775f7ba766934b37e"
  },
  {
    "url": "recipes/widgets/skip-links.html",
    "revision": "5fd2d0952e52a22551157e9502b4389b"
  },
  {
    "url": "recipes/widgets/tabs.html",
    "revision": "ec1ab4dcacdc1390c4836f6bc1071c58"
  },
  {
    "url": "settings/index.html",
    "revision": "77ed2932c3a1360708a07b2247dbf458"
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
