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
    "revision": "3ab5a4601e85aecf8384768096d3ade5"
  },
  {
    "url": "assets/css/0.styles.0c3fb54d.css",
    "revision": "b1e557f6390a500a7db67386022ce6b2"
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
    "url": "assets/js/1.2e35e1ba.js",
    "revision": "c059e0b458923bd10007c0261ae1f40a"
  },
  {
    "url": "assets/js/10.d64397a9.js",
    "revision": "44f4a4c68714176c6cf61aa4bd4351f5"
  },
  {
    "url": "assets/js/11.1501a680.js",
    "revision": "2ef6e7dca24f701cc920bda25a37fd8e"
  },
  {
    "url": "assets/js/12.e2530ddc.js",
    "revision": "cf6e7d195dbb3430c64752a4979a1db8"
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
    "url": "assets/js/15.40d8b59d.js",
    "revision": "cf960e2f378f9e3a6af6f5a9afe178d6"
  },
  {
    "url": "assets/js/16.7d97c82b.js",
    "revision": "51725180f6d7f75daf85a6e88d45c9ab"
  },
  {
    "url": "assets/js/17.505a1229.js",
    "revision": "a367b987d8c9e1ac1b8f5783634f110d"
  },
  {
    "url": "assets/js/18.f8a14045.js",
    "revision": "9cbeb95d1fcb508f14b1cb4a0cde8469"
  },
  {
    "url": "assets/js/19.7fe2e3b0.js",
    "revision": "6924637f9e4a5e0d15bafe15e915d57f"
  },
  {
    "url": "assets/js/2.813d15c1.js",
    "revision": "134915beb6b8381834c4d1cf97633832"
  },
  {
    "url": "assets/js/20.a47cfc72.js",
    "revision": "88107590117dfa1fb422ed46efd9eb2f"
  },
  {
    "url": "assets/js/21.806da0f4.js",
    "revision": "090d23c4993be7631a35d25ffa72692f"
  },
  {
    "url": "assets/js/22.75fcb225.js",
    "revision": "3511d5cd01ddf9802c0f2c37bca4e94a"
  },
  {
    "url": "assets/js/23.c2afc624.js",
    "revision": "53ae86eaacaa70b7950098dbdb3dedc8"
  },
  {
    "url": "assets/js/24.4a914915.js",
    "revision": "e772c98c5434a13831418fb4249670e7"
  },
  {
    "url": "assets/js/25.db391ba3.js",
    "revision": "ce51f4a797e07d89a6d2138e84b31660"
  },
  {
    "url": "assets/js/26.ee43aef0.js",
    "revision": "9f6621ecc7378ba5ad1ef0e53ab8e4fb"
  },
  {
    "url": "assets/js/27.3f0c9167.js",
    "revision": "f7827e92dc6eb265fb517e5d9660d532"
  },
  {
    "url": "assets/js/28.0beec8c7.js",
    "revision": "b44b66318cc465ac78eed171e1b3616b"
  },
  {
    "url": "assets/js/29.01db2022.js",
    "revision": "428c3f9877a9f345d71259d6aef567b7"
  },
  {
    "url": "assets/js/3.7c5a0011.js",
    "revision": "b5235fb73bc4a2aae429f67ffeb64115"
  },
  {
    "url": "assets/js/30.a11f1149.js",
    "revision": "75f241b1dbd71ae0a6e87c6ab1455f6a"
  },
  {
    "url": "assets/js/31.96f664cf.js",
    "revision": "820c9acbddc28be9deac2849b2fe0222"
  },
  {
    "url": "assets/js/32.08597dc0.js",
    "revision": "8aef6a200bfe0613130ab05740509147"
  },
  {
    "url": "assets/js/33.572b49b0.js",
    "revision": "6827b105366f1add415aeee5aea11657"
  },
  {
    "url": "assets/js/34.fb6fe165.js",
    "revision": "12659ad827d837445e65c4a38b387cfe"
  },
  {
    "url": "assets/js/35.e2d55160.js",
    "revision": "1c4e03065d6b4102c815f79dd90536bf"
  },
  {
    "url": "assets/js/36.7d6dcce0.js",
    "revision": "37d84840cde26dc2341410e0f79468f1"
  },
  {
    "url": "assets/js/37.5b1809cd.js",
    "revision": "4463f80a1068ed95744b3d278bd6b101"
  },
  {
    "url": "assets/js/38.848499ff.js",
    "revision": "05040e1355446ee8384765552e800f29"
  },
  {
    "url": "assets/js/39.3a67746d.js",
    "revision": "4d10f9436d1e1086335a6a3fac21d4af"
  },
  {
    "url": "assets/js/40.999b7534.js",
    "revision": "8792c0770bc8aecc0de76857da0f9fa8"
  },
  {
    "url": "assets/js/41.051f7b64.js",
    "revision": "9623aba5540e88051fac2750a35d5a24"
  },
  {
    "url": "assets/js/42.10a34022.js",
    "revision": "5bbf43b421c02df1ff188ad9da3074d4"
  },
  {
    "url": "assets/js/43.dab2dbf8.js",
    "revision": "88f69ab11f428d1c5883f235f4ee5176"
  },
  {
    "url": "assets/js/44.fcdabc4f.js",
    "revision": "f54a2364e77f38651f163dfecee3a5c5"
  },
  {
    "url": "assets/js/45.d0ace7ef.js",
    "revision": "457ad0e82ce7e33670049c8e44fc60fb"
  },
  {
    "url": "assets/js/46.4aec8202.js",
    "revision": "71beaf9665b7395e2d871e23ce3dcde1"
  },
  {
    "url": "assets/js/47.1548c850.js",
    "revision": "d602c0d67a1d3611e083ec1d565eae46"
  },
  {
    "url": "assets/js/48.d1b1a308.js",
    "revision": "64cc169bb74fd06808412d65bbdc76d1"
  },
  {
    "url": "assets/js/49.258bcb6a.js",
    "revision": "3fae0851fb696ed8f21778a17d92325a"
  },
  {
    "url": "assets/js/50.bb891d50.js",
    "revision": "4491488c0a08e851784e5a0dab472fce"
  },
  {
    "url": "assets/js/51.d9290fcf.js",
    "revision": "82dcc3e18f1db55ba25faeed01c1f01e"
  },
  {
    "url": "assets/js/52.42dc3888.js",
    "revision": "cdec5558abe951eab9fd4784981a5ba4"
  },
  {
    "url": "assets/js/53.6f1bc80c.js",
    "revision": "70e0165f41f9653b5d770617ba1ca6ab"
  },
  {
    "url": "assets/js/54.c8be7adc.js",
    "revision": "51a70cc0b63b47a730660a02c852517c"
  },
  {
    "url": "assets/js/55.ddb36778.js",
    "revision": "c4344a352906258ef4bfd3b3a543b8a8"
  },
  {
    "url": "assets/js/56.91a4c781.js",
    "revision": "7bafc1ac9e18e6bea6802c2ff45894be"
  },
  {
    "url": "assets/js/57.ceefc48f.js",
    "revision": "5e55e92b50a2700661902389e95ea6e2"
  },
  {
    "url": "assets/js/58.6eb71ec1.js",
    "revision": "3506d62f68b44fb04165f1cf01c6a1ac"
  },
  {
    "url": "assets/js/59.b284d079.js",
    "revision": "d88d477ac85b974eec5e1b2cd8c8963e"
  },
  {
    "url": "assets/js/6.7255bb54.js",
    "revision": "feb3bda46fff74d02e1bd989ce5de771"
  },
  {
    "url": "assets/js/60.5687494c.js",
    "revision": "22f678c0f4e76a9ba1826f9fcb825733"
  },
  {
    "url": "assets/js/61.43c7d19d.js",
    "revision": "c98ffd764d0850cc139c02694e6f0ef6"
  },
  {
    "url": "assets/js/62.338af7b3.js",
    "revision": "060642d03f2791192e3991b97075de6b"
  },
  {
    "url": "assets/js/63.673c4b53.js",
    "revision": "fbb725360e5ae65100a4ea3cee174f32"
  },
  {
    "url": "assets/js/64.92e93570.js",
    "revision": "b19076f67ea297d1d67d03dccf5345ff"
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
    "url": "assets/js/9.1cf69907.js",
    "revision": "fb1f93e058a172408e973174ffab3114"
  },
  {
    "url": "assets/js/app.0b007aaa.js",
    "revision": "68e2f4aad2595680a4828fc945992654"
  },
  {
    "url": "assets/js/vuejs-paginate.92f047ca.js",
    "revision": "dfad919ae3fb0a74e488965117bf0558"
  },
  {
    "url": "category/aria/index.html",
    "revision": "318a1b2def2b864e26153280b7980c57"
  },
  {
    "url": "category/html/index.html",
    "revision": "4c1274b872bf3169a777e3ccc6c9523c"
  },
  {
    "url": "category/index.html",
    "revision": "e2e76f555b077a462ec587945bf97af6"
  },
  {
    "url": "category/news/index.html",
    "revision": "5f556a14376023c3fd7b1e2fa3e5b92b"
  },
  {
    "url": "category/packages/index.html",
    "revision": "896779167642d63f809de0c68a0d19cf"
  },
  {
    "url": "category/spa/index.html",
    "revision": "1926c16e029ed7fe4599e41e53b4f071"
  },
  {
    "url": "category/tools/index.html",
    "revision": "db9abf8a6b609d45d39760bf61db9766"
  },
  {
    "url": "category/wcag/index.html",
    "revision": "00377822a39a9a45fad1a690876e5993"
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
    "revision": "9bccc7bd052d5416dac319afb6268d25"
  },
  {
    "url": "posts/index.html",
    "revision": "083f77cba9d145fd3379bcedde0bf4a4"
  },
  {
    "url": "posts/post-test/index.html",
    "revision": "b9790c4a1ceba7bbdc5a9e42f38f6084"
  },
  {
    "url": "project/a11y-vue-packages.html",
    "revision": "6d308032d956f3b8a125d74466c61269"
  },
  {
    "url": "project/awesome-a11y-vue.html",
    "revision": "f00ea1c9db5ee0e2e018c41749fbbafa"
  },
  {
    "url": "project/cases.html",
    "revision": "c5ab00ee45932a6c06ced02cbf43849b"
  },
  {
    "url": "project/contributors.html",
    "revision": "a2c6feb2810fb30d7776204280cd7a37"
  },
  {
    "url": "project/index.html",
    "revision": "a734021a3b8965169a217b4d3f6c95a2"
  },
  {
    "url": "project/resources.html",
    "revision": "b38655d0f37f1f417f903f7cd7bfb5db"
  },
  {
    "url": "project/roadmap.html",
    "revision": "fe5208861a864cf38a4f92eb1242bafa"
  },
  {
    "url": "project/supporting.html",
    "revision": "fe6a58e2bbf0c9bd7897bf29fd007ca6"
  },
  {
    "url": "project/tools-testing.html",
    "revision": "b976eeb90aab4f05faa2789f54959a49"
  },
  {
    "url": "project/ui-projects.html",
    "revision": "ccd5a93076dc01e8d3e3d55f75f43eac"
  },
  {
    "url": "project/vue-a11y-checklist.html",
    "revision": "5e205e8afab81084b7ba5be742cea635"
  },
  {
    "url": "pt/categoria/aria/index.html",
    "revision": "ed58e36912e3ef4a9bdacd25bdfd382d"
  },
  {
    "url": "pt/categoria/html/index.html",
    "revision": "0f4398719187cbcec796517385d2ad1d"
  },
  {
    "url": "pt/categoria/index.html",
    "revision": "06e918d191f1cd84b96b0d54dfaf9670"
  },
  {
    "url": "pt/categoria/novidades/index.html",
    "revision": "b98ba49d3d04b6567cc5601efce35e88"
  },
  {
    "url": "pt/categoria/packages/index.html",
    "revision": "ff1b452cd72298baf5f6d8fb797e1f0d"
  },
  {
    "url": "pt/categoria/spa/index.html",
    "revision": "969847c004f9faa03dcf5594442c1913"
  },
  {
    "url": "pt/categoria/tools/index.html",
    "revision": "bed49e4c9eef06b0562bfb0c34aaa67d"
  },
  {
    "url": "pt/categoria/wcag/index.html",
    "revision": "5090082840aaa118fd08c754d44787f9"
  },
  {
    "url": "pt/configuracoes/index.html",
    "revision": "ae1fb83c9b23dfc3c96bd5d5198aed61"
  },
  {
    "url": "pt/index.html",
    "revision": "b12bb63299b6e00b96d16b13adc5148b"
  },
  {
    "url": "pt/posts/index.html",
    "revision": "7f9fc5b00522b6d5597d79aae0b7c4c5"
  },
  {
    "url": "pt/posts/posts-de-teste/index.html",
    "revision": "2b05311ff067ca475df1c47600f8b74f"
  },
  {
    "url": "pt/projeto/a11y-vue-packages.html",
    "revision": "529f42e7f6a50a5af5d5a178279a8b49"
  },
  {
    "url": "pt/projeto/apoiando.html",
    "revision": "aa4e654642641fce72dffd1508952c97"
  },
  {
    "url": "pt/projeto/awesome-a11y-vue.html",
    "revision": "181c9cbd332bbdc356c1eb6f08c6b53a"
  },
  {
    "url": "pt/projeto/cases.html",
    "revision": "26cb67999ecd6caeb25069b698ecc753"
  },
  {
    "url": "pt/projeto/contribuidores.html",
    "revision": "66a042838bdf98d13d8d2574a248e4ed"
  },
  {
    "url": "pt/projeto/ferramentas-e-testes.html",
    "revision": "d3aebbe10c8a97fb7b108aee4b48b40b"
  },
  {
    "url": "pt/projeto/index.html",
    "revision": "f5f8ff47f2c8cbe9d8904666e6e66a3d"
  },
  {
    "url": "pt/projeto/links-uteis.html",
    "revision": "38b2c6eaa9231a527ee03457472ee349"
  },
  {
    "url": "pt/projeto/projetos-ui.html",
    "revision": "14dae89061ea89421f26f2a067f63772"
  },
  {
    "url": "pt/projeto/roadmap.html",
    "revision": "4abcf39ba49b053180525d0dff5c692e"
  },
  {
    "url": "pt/projeto/vue-a11y-checklist.html",
    "revision": "e24678fc70bf82b8daddba36bd2d579a"
  },
  {
    "url": "pt/receitas/contribua.html",
    "revision": "abd08868ad590d47584f86425a8ace98"
  },
  {
    "url": "pt/receitas/dicas/atributos-aria-no-vue.html",
    "revision": "1e9e72380c1baa33dc62bfb2b7afe902"
  },
  {
    "url": "pt/receitas/index.html",
    "revision": "91870cf6133354836d1130eb16ee430d"
  },
  {
    "url": "pt/receitas/widgets/accordion.html",
    "revision": "db7e59d623d3ab2785511f8b54b21e9b"
  },
  {
    "url": "pt/receitas/widgets/alert.html",
    "revision": "516cf42dc71d478c5f7e7a46c92f35c7"
  },
  {
    "url": "pt/receitas/widgets/breadcrumbs.html",
    "revision": "a3fd99d5d4327af737a3d39c78e94e72"
  },
  {
    "url": "pt/receitas/widgets/card.html",
    "revision": "8aeaccf52a25db530f16b6905a9e7e30"
  },
  {
    "url": "pt/receitas/widgets/dialog.html",
    "revision": "b9d8892be859d2075c85082a5919d947"
  },
  {
    "url": "pt/receitas/widgets/navegacao-mobile.html",
    "revision": "416d3f0a921023709945d4a81ac51306"
  },
  {
    "url": "pt/receitas/widgets/pular-links.html",
    "revision": "62899ed2b73637acba140af1e3af23cb"
  },
  {
    "url": "pt/receitas/widgets/tabs.html",
    "revision": "e441bd866877338cbd9f11645d8dc3ab"
  },
  {
    "url": "recipes/contribute.html",
    "revision": "cc3f08ed6cd3ef42d3a21fcddb49450d"
  },
  {
    "url": "recipes/index.html",
    "revision": "071d15be7d365c8a08c20fc7e1a530ef"
  },
  {
    "url": "recipes/tips/aria-attributes-in-vue.html",
    "revision": "2ebbfbdd74a753c0fb45f36f28e09706"
  },
  {
    "url": "recipes/widgets/accordion.html",
    "revision": "829ec6438a01fcaf1b8aa15627dfe21a"
  },
  {
    "url": "recipes/widgets/alert.html",
    "revision": "2d930b4ffb05be4d874988f3f7ae883f"
  },
  {
    "url": "recipes/widgets/breadcrumbs.html",
    "revision": "8e1ba8e7ea1de3c8005f7133e34d5e60"
  },
  {
    "url": "recipes/widgets/card.html",
    "revision": "8b99714b007fa0133ce53e53dc587464"
  },
  {
    "url": "recipes/widgets/dialog.html",
    "revision": "c766a65d6470f1d042dbaf1ec1b56508"
  },
  {
    "url": "recipes/widgets/mobile-navigation.html",
    "revision": "cff577f274a3656818d874bd677f621a"
  },
  {
    "url": "recipes/widgets/skip-links.html",
    "revision": "65fdb83bae6e66f63af0c10593f59ea0"
  },
  {
    "url": "recipes/widgets/tabs.html",
    "revision": "e1e90dd3a71b655bfcbf999bf6a38e31"
  },
  {
    "url": "settings/index.html",
    "revision": "2a9c340fcb3533e263effa1bc47924e7"
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
