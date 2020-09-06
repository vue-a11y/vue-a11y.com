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
    "revision": "9053ae136c81c0b89458ac2658576ddc"
  },
  {
    "url": "assets/css/0.styles.67041ddd.css",
    "revision": "870ec99b35bf96e542707afd66c5486d"
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
    "url": "assets/js/15.495626c8.js",
    "revision": "9a879cc7950a537c9c4a0a062eae1578"
  },
  {
    "url": "assets/js/16.95494461.js",
    "revision": "bf94f152fb5713ca1cecfb476f9d542d"
  },
  {
    "url": "assets/js/17.c147df04.js",
    "revision": "07100a2312b020263c4829ce97ce8e64"
  },
  {
    "url": "assets/js/18.f8a14045.js",
    "revision": "9cbeb95d1fcb508f14b1cb4a0cde8469"
  },
  {
    "url": "assets/js/19.aad92a89.js",
    "revision": "30cacc0a591b579e80f4337d4b1f82cd"
  },
  {
    "url": "assets/js/2.813d15c1.js",
    "revision": "134915beb6b8381834c4d1cf97633832"
  },
  {
    "url": "assets/js/20.a80fb65c.js",
    "revision": "d99f3a08bb6dd37e94d44fc369b85dad"
  },
  {
    "url": "assets/js/21.0111f89c.js",
    "revision": "40ae09b0f75f55bed11c080622ec6573"
  },
  {
    "url": "assets/js/22.a962ec47.js",
    "revision": "3714d7ed81f4ab49375c7e27a56f5d49"
  },
  {
    "url": "assets/js/23.aabc62b3.js",
    "revision": "2833beb42cf4baaba5a13fa63bb9fe4e"
  },
  {
    "url": "assets/js/24.00ef8a3d.js",
    "revision": "07b6d9186feea439bd88cf4fd3f88553"
  },
  {
    "url": "assets/js/25.acd2d2c7.js",
    "revision": "a95f613c3467b08b7d0a729bf0ef1138"
  },
  {
    "url": "assets/js/26.b184a746.js",
    "revision": "47133ad883c31cdfa43073a5bd51517d"
  },
  {
    "url": "assets/js/27.6f186866.js",
    "revision": "c38897b1f523e5cc02a2e19728666f46"
  },
  {
    "url": "assets/js/28.ae1fd56f.js",
    "revision": "6d4c1437da69cb78f2a9ed514cc14a0d"
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
    "url": "assets/js/30.aaf020ea.js",
    "revision": "3beb642bd6515f2d139ac3396f7b94b3"
  },
  {
    "url": "assets/js/31.4c19ea23.js",
    "revision": "a1d499198d445a5edd551789df2e776a"
  },
  {
    "url": "assets/js/32.8775fe2c.js",
    "revision": "771c41c15bbb081a3c8bc778ac6b123e"
  },
  {
    "url": "assets/js/33.572b49b0.js",
    "revision": "6827b105366f1add415aeee5aea11657"
  },
  {
    "url": "assets/js/34.ec1f4669.js",
    "revision": "92b1d704a51f2c8d665ea82107e362b5"
  },
  {
    "url": "assets/js/35.52ce3677.js",
    "revision": "8e2b039397a50930a626657901936530"
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
    "url": "assets/js/40.06fe9309.js",
    "revision": "591bb7a955265c9d1e1067d03453e887"
  },
  {
    "url": "assets/js/41.fbcc6d76.js",
    "revision": "f0ebd0bb3ccee036645a51d04d63ead7"
  },
  {
    "url": "assets/js/42.10a34022.js",
    "revision": "5bbf43b421c02df1ff188ad9da3074d4"
  },
  {
    "url": "assets/js/43.c2bf95c6.js",
    "revision": "133b98e28d35dd30f9b22f4a2deaa8d1"
  },
  {
    "url": "assets/js/44.a49a7f1d.js",
    "revision": "c9c1109b441d7a0c61115e941dabaff4"
  },
  {
    "url": "assets/js/45.d0ace7ef.js",
    "revision": "457ad0e82ce7e33670049c8e44fc60fb"
  },
  {
    "url": "assets/js/46.78c40278.js",
    "revision": "476ec5205cfbfb2e68a7331b01555a76"
  },
  {
    "url": "assets/js/47.0e256764.js",
    "revision": "cc43e2b04f3739072ad969c8b65bfa78"
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
    "url": "assets/js/55.efc22e16.js",
    "revision": "a11c76fd0a11b943f2905d749db8c047"
  },
  {
    "url": "assets/js/56.014fa2b4.js",
    "revision": "0a2792a8cf998a734fc7e007d7421c89"
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
    "url": "assets/js/61.650acf32.js",
    "revision": "408789e927c592eeba3af578bd65cd8d"
  },
  {
    "url": "assets/js/62.bbe1d2da.js",
    "revision": "71f44b1a52b4a992bb64185e3532015a"
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
    "url": "assets/js/app.b8e0b208.js",
    "revision": "91e9614f8eb0a28bad3c7f9e7ce7814e"
  },
  {
    "url": "assets/js/vuejs-paginate.92f047ca.js",
    "revision": "dfad919ae3fb0a74e488965117bf0558"
  },
  {
    "url": "category/aria/index.html",
    "revision": "83d695bd0014fc849f091a652bc8b785"
  },
  {
    "url": "category/html/index.html",
    "revision": "a2c41a98203c6febffb9dff8ffcf259d"
  },
  {
    "url": "category/index.html",
    "revision": "3544428783cb2108ace821a56437bdcf"
  },
  {
    "url": "category/news/index.html",
    "revision": "681bef26b9061897f710d74ae54e6db0"
  },
  {
    "url": "category/packages/index.html",
    "revision": "dbf7e0e99b0d61f8e5e232924a4115e4"
  },
  {
    "url": "category/spa/index.html",
    "revision": "8a887e5cec700fecf4f97e97c87c6c17"
  },
  {
    "url": "category/tools/index.html",
    "revision": "610ee25c118c0f03568abc791a1180ce"
  },
  {
    "url": "category/wcag/index.html",
    "revision": "6192fea90e5609a383195580abbaccdd"
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
    "revision": "7f09476481fba4ccc84ce493412eefe9"
  },
  {
    "url": "posts/index.html",
    "revision": "8397dcc869b804d8af83cb0e76efdd46"
  },
  {
    "url": "posts/post-test/index.html",
    "revision": "0cb29a9fa71abe91ae9355caecfbc568"
  },
  {
    "url": "project/a11y-vue-packages.html",
    "revision": "053b4a00eca9c104cc80bfb152225ca0"
  },
  {
    "url": "project/awesome-a11y-vue.html",
    "revision": "6c4aa1081e53d79b3cdd6b840d4a39b4"
  },
  {
    "url": "project/cases.html",
    "revision": "c25f496dbb5889e9d552b01577023f91"
  },
  {
    "url": "project/contributors.html",
    "revision": "bfae471fc482b93208c37fbd1d3d9459"
  },
  {
    "url": "project/index.html",
    "revision": "c92af6890069daf79dbed262ef44e7a7"
  },
  {
    "url": "project/resources.html",
    "revision": "add7cf8eb13bfd25ac7f49dbae9840d6"
  },
  {
    "url": "project/roadmap.html",
    "revision": "08d7d6f5121f9d90e9996534426c4b05"
  },
  {
    "url": "project/supporting.html",
    "revision": "681202636f00df9a50fe5d4415fcd510"
  },
  {
    "url": "project/tools-testing.html",
    "revision": "7a8772de12bc8647c9033c238353826b"
  },
  {
    "url": "project/ui-projects.html",
    "revision": "c0bdff5e72df1c81ee582a85f9605931"
  },
  {
    "url": "project/vue-a11y-checklist.html",
    "revision": "8edf346dfe8d31b6560945f46a8cc25b"
  },
  {
    "url": "pt/categoria/aria/index.html",
    "revision": "bfe61ba0ef8c07f7ca1ca52864470f7b"
  },
  {
    "url": "pt/categoria/html/index.html",
    "revision": "e7a4859b0d61f38546ad54b39a1e9876"
  },
  {
    "url": "pt/categoria/index.html",
    "revision": "8f7821b7d2b396a74436e44a87dfdae5"
  },
  {
    "url": "pt/categoria/novidades/index.html",
    "revision": "3676a3603be989f46ddd9048a7725c8c"
  },
  {
    "url": "pt/categoria/packages/index.html",
    "revision": "33e365e70378175db6b60ab41fbe170d"
  },
  {
    "url": "pt/categoria/spa/index.html",
    "revision": "415c5b6dea86811a52138916aae6fc68"
  },
  {
    "url": "pt/categoria/tools/index.html",
    "revision": "3bc5914bb810b328e7bd2a905753c01e"
  },
  {
    "url": "pt/categoria/wcag/index.html",
    "revision": "04aba0d033facfa5827baf88c8f26ccd"
  },
  {
    "url": "pt/configuracoes/index.html",
    "revision": "880b3e78267351f30c2685670b4a2465"
  },
  {
    "url": "pt/index.html",
    "revision": "1693dfae64fa50c29baa190c81262e69"
  },
  {
    "url": "pt/posts/index.html",
    "revision": "e3e9e2510964efd8d9eaf0dceca80096"
  },
  {
    "url": "pt/posts/posts-de-teste/index.html",
    "revision": "daefba352c24f9c1f096456c249d3707"
  },
  {
    "url": "pt/projeto/a11y-vue-packages.html",
    "revision": "855973b5f69fb90442c888c792fc3444"
  },
  {
    "url": "pt/projeto/apoiando.html",
    "revision": "cc0c6596173f72331ac0cea02c1708a9"
  },
  {
    "url": "pt/projeto/awesome-a11y-vue.html",
    "revision": "fabe5faf003f1f6dd83b2bb4947a54fb"
  },
  {
    "url": "pt/projeto/cases.html",
    "revision": "e49536859bf270d1ff435912558d89d2"
  },
  {
    "url": "pt/projeto/contribuidores.html",
    "revision": "80bb259fb1600b69ea039e009643f82b"
  },
  {
    "url": "pt/projeto/ferramentas-e-testes.html",
    "revision": "d54e5c9749d0bd2abde90c0e230194d4"
  },
  {
    "url": "pt/projeto/index.html",
    "revision": "ed1391b7f39db1d1bf9c38f1791d3f5c"
  },
  {
    "url": "pt/projeto/links-uteis.html",
    "revision": "70a097ce12cf38bdbf85ac1b6189d358"
  },
  {
    "url": "pt/projeto/projetos-ui.html",
    "revision": "1d8ced6f7a9c3e4ec1aaea1e936e1bc4"
  },
  {
    "url": "pt/projeto/roadmap.html",
    "revision": "94cd2e64f1d6ec832bef9dff99736de2"
  },
  {
    "url": "pt/projeto/vue-a11y-checklist.html",
    "revision": "11a9e69c7fbb85235854d8b7ab5f20b7"
  },
  {
    "url": "pt/receitas/contribua.html",
    "revision": "1051aeff38c9d369dcfed19f692f795c"
  },
  {
    "url": "pt/receitas/dicas/atributos-aria-no-vue.html",
    "revision": "16ac23eac7ed226edbde17bb0e637873"
  },
  {
    "url": "pt/receitas/index.html",
    "revision": "4e5c2683d085dbaccc65316e31b40e18"
  },
  {
    "url": "pt/receitas/widgets/accordion.html",
    "revision": "f877741f4ba4d285290d49900f94a290"
  },
  {
    "url": "pt/receitas/widgets/alert.html",
    "revision": "e9232ddcbf2be99474f96dbef80df588"
  },
  {
    "url": "pt/receitas/widgets/breadcrumbs.html",
    "revision": "27f396afe547ad14953a955672e2ed8b"
  },
  {
    "url": "pt/receitas/widgets/card.html",
    "revision": "6788cab68b556ad3cf5f328da266d2f1"
  },
  {
    "url": "pt/receitas/widgets/dialog.html",
    "revision": "1cf85f229a7adff515d79e2afc03477d"
  },
  {
    "url": "pt/receitas/widgets/navegacao-mobile.html",
    "revision": "3880dbdb8e5d28f982868e80ddd37e24"
  },
  {
    "url": "pt/receitas/widgets/pular-links.html",
    "revision": "93145ff643af94bede9edc52c121da63"
  },
  {
    "url": "pt/receitas/widgets/tabs.html",
    "revision": "ed7808e57b796394a929bf150b691854"
  },
  {
    "url": "recipes/contribute.html",
    "revision": "c416a3f34119f33f46244dfeeeee842e"
  },
  {
    "url": "recipes/index.html",
    "revision": "ef906c66a6498b5e8292ed4a97d7c318"
  },
  {
    "url": "recipes/tips/aria-attributes-in-vue.html",
    "revision": "bbe6dc8f14f35792cd7b2bb521c9e163"
  },
  {
    "url": "recipes/widgets/accordion.html",
    "revision": "a4b5a7f8170bbeb37acd3111fef8c0a6"
  },
  {
    "url": "recipes/widgets/alert.html",
    "revision": "8eeff8e521b18babe9d079c09c8932c3"
  },
  {
    "url": "recipes/widgets/breadcrumbs.html",
    "revision": "ce20f1b17eabdadc139471d1a88e86fd"
  },
  {
    "url": "recipes/widgets/card.html",
    "revision": "e5f41b9a4be3c66a63f0593ae1e24519"
  },
  {
    "url": "recipes/widgets/dialog.html",
    "revision": "dde5eef483f62339358c218936c18b62"
  },
  {
    "url": "recipes/widgets/mobile-navigation.html",
    "revision": "42d51195398a64bcd7daff12b5ddaa2c"
  },
  {
    "url": "recipes/widgets/skip-links.html",
    "revision": "a7880896c098defdbfa1d238d9dabdc8"
  },
  {
    "url": "recipes/widgets/tabs.html",
    "revision": "70c2cd5ec9b44dcf30f74fc28edc5edd"
  },
  {
    "url": "settings/index.html",
    "revision": "7ea9cd17c1c069aead73d733498333b9"
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
