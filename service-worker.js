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
    "revision": "be049c1dbbaa1d8ab158f39599604163"
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
    "url": "assets/js/10.e546de28.js",
    "revision": "1c1fe8f562845db63cf8dd94e3eaf772"
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
    "url": "assets/js/15.6b68b4df.js",
    "revision": "1941b3e37760b9bd42ca89dfd42a081a"
  },
  {
    "url": "assets/js/16.3d1528c7.js",
    "revision": "ed280d72a16c687b123ff2e5a24718f9"
  },
  {
    "url": "assets/js/17.ffaca9f2.js",
    "revision": "1af9ccff5a934601538b079521285fc4"
  },
  {
    "url": "assets/js/18.2fee3c3a.js",
    "revision": "c631a567fb2f235c7e258d360f88db10"
  },
  {
    "url": "assets/js/19.1b07ab9f.js",
    "revision": "8525974ceb638d55fbb278355594606e"
  },
  {
    "url": "assets/js/2.813d15c1.js",
    "revision": "134915beb6b8381834c4d1cf97633832"
  },
  {
    "url": "assets/js/20.a18e05ca.js",
    "revision": "c775aec83158d7bae190085cad28aabe"
  },
  {
    "url": "assets/js/21.50862b90.js",
    "revision": "23eea2d95771aa852f20dca94b192664"
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
    "url": "assets/js/25.5833687a.js",
    "revision": "25193f14f65b751ea99de755e012aef5"
  },
  {
    "url": "assets/js/26.20967b43.js",
    "revision": "7e6bd2102e76625388b8689a3cda8566"
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
    "url": "assets/js/30.616c084e.js",
    "revision": "c4300e325d5d3aaf9490c8da908d0ce2"
  },
  {
    "url": "assets/js/31.bff921a5.js",
    "revision": "445eb6bfd01afb327b74ab9c42f228f7"
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
    "url": "assets/js/34.fb67dd7b.js",
    "revision": "cced83b47b6b412ef8ffdcfb7e83eb9a"
  },
  {
    "url": "assets/js/35.cc80a77e.js",
    "revision": "01b9430098b2a1ca55f907f39219b62f"
  },
  {
    "url": "assets/js/36.a6485b06.js",
    "revision": "8e21d6da296cc1782ba8616daef26605"
  },
  {
    "url": "assets/js/37.4e46270d.js",
    "revision": "62e19b2a994f0d104627b63a5a361485"
  },
  {
    "url": "assets/js/38.a7593628.js",
    "revision": "29d47bb65ff4f45ebba004ddebb4c4c6"
  },
  {
    "url": "assets/js/39.4536912d.js",
    "revision": "97f3e525f11023903063510a3626b697"
  },
  {
    "url": "assets/js/40.1de2976c.js",
    "revision": "bd27603475b402dde534ca6ec1827d2f"
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
    "url": "assets/js/45.a57d5774.js",
    "revision": "36cfe2ef26b9d2f39b0acceb147b4b41"
  },
  {
    "url": "assets/js/46.105662dc.js",
    "revision": "b7cf5e11c6c1fee52e28d809967f7b35"
  },
  {
    "url": "assets/js/47.59d38d05.js",
    "revision": "b02a3d69f983a7d8487c2a8fb6118c41"
  },
  {
    "url": "assets/js/48.7c7a4fb4.js",
    "revision": "2c221e1884766e854b70c2dfd2c855ae"
  },
  {
    "url": "assets/js/49.23c71041.js",
    "revision": "fcdb9cefd9e9da6cc21e11efba257aee"
  },
  {
    "url": "assets/js/50.ee565114.js",
    "revision": "affcacb5e0a13ad74311d4ee4b870196"
  },
  {
    "url": "assets/js/51.e1fa8e6b.js",
    "revision": "28bf2be099f323557f7d9cfb93f54ae6"
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
    "url": "assets/js/app.8691b43b.js",
    "revision": "74bdb2bcf05c62188f5c56b65e5308fc"
  },
  {
    "url": "assets/js/vuejs-paginate.92f047ca.js",
    "revision": "dfad919ae3fb0a74e488965117bf0558"
  },
  {
    "url": "category/aria/index.html",
    "revision": "e11088b1eae53afd05e9063c62d7a9f4"
  },
  {
    "url": "category/html/index.html",
    "revision": "ebe833f5ef1e53347128f81ac62f3b3e"
  },
  {
    "url": "category/index.html",
    "revision": "80b38b0fe2f872af20bc2de08750cabc"
  },
  {
    "url": "category/news/index.html",
    "revision": "94c4754718c9ea02002e6b3d74faba2c"
  },
  {
    "url": "category/packages/index.html",
    "revision": "b77bbf1c5885f08a9c4d3c6767436fe9"
  },
  {
    "url": "category/spa/index.html",
    "revision": "008a73d4a135ae633e8631d1f1de637c"
  },
  {
    "url": "category/tools/index.html",
    "revision": "2413f9e5709c4f7ec1ffcd9029cb3fb6"
  },
  {
    "url": "category/wcag/index.html",
    "revision": "dbac12981e5f533488aa0962f015ac59"
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
    "revision": "a67bdf662ebe54acc8bbb52c77758b5b"
  },
  {
    "url": "posts/index.html",
    "revision": "6f9ea5d9331b7750682e1bfb5a601fc2"
  },
  {
    "url": "posts/post-test/index.html",
    "revision": "7770fdeff191addc13502ce3dc42af70"
  },
  {
    "url": "project/contributors.html",
    "revision": "49db890df880b30c5a920fe6645d14c7"
  },
  {
    "url": "project/index.html",
    "revision": "c4079d0e65b9d6b1dd4d068ec949cb77"
  },
  {
    "url": "project/resources.html",
    "revision": "dce493e4dbcd1eaba6c647eeb6e53ae7"
  },
  {
    "url": "project/supporting.html",
    "revision": "3d97fb01e429e578c65e50b6909228bd"
  },
  {
    "url": "project/tools-testing.html",
    "revision": "6386e06332f4478efafa3c4265d6e416"
  },
  {
    "url": "project/vue-a11y-checklist.html",
    "revision": "f5287dceffd409db4aea2b7c1524480c"
  },
  {
    "url": "pt/categoria/aria/index.html",
    "revision": "0fb7ec35b99a1d957cd6da8c6c66d5a5"
  },
  {
    "url": "pt/categoria/html/index.html",
    "revision": "00129e5dbce7c4ab93fe6a6534a88671"
  },
  {
    "url": "pt/categoria/index.html",
    "revision": "a9b515981896391fdf980e2cf1548464"
  },
  {
    "url": "pt/categoria/novidades/index.html",
    "revision": "d0cc5f4162f2921d70764ad6930fb97f"
  },
  {
    "url": "pt/categoria/packages/index.html",
    "revision": "aaa9f65ef46687b4dc0b08e6d18c7f6d"
  },
  {
    "url": "pt/categoria/spa/index.html",
    "revision": "a6ec99ee57fa0841eca373cc4c441f58"
  },
  {
    "url": "pt/categoria/tools/index.html",
    "revision": "5ed611f18f88021800c90fbb755db989"
  },
  {
    "url": "pt/categoria/wcag/index.html",
    "revision": "3dc2fe2f3930db669adad3d1846d83b8"
  },
  {
    "url": "pt/configuracoes/index.html",
    "revision": "fc89a37aa47b7f5b4ebeb0d936ce422a"
  },
  {
    "url": "pt/index.html",
    "revision": "caceaa6d14341bf676f2f56dcb6d1e0b"
  },
  {
    "url": "pt/posts/index.html",
    "revision": "2a439bb7bc808603c938ca9ed7c3962a"
  },
  {
    "url": "pt/posts/posts-de-teste/index.html",
    "revision": "56f135fbdaf9926a88d08c3adeb6a70a"
  },
  {
    "url": "pt/projeto/apoiando.html",
    "revision": "5744912585f46738ee18ac492c0dd588"
  },
  {
    "url": "pt/projeto/contribuidores.html",
    "revision": "bdc80d490201d3adb3c82797bb98476d"
  },
  {
    "url": "pt/projeto/ferramentas-e-testes.html",
    "revision": "b40f8461d3a05382e9f0ced34fc2328b"
  },
  {
    "url": "pt/projeto/index.html",
    "revision": "76312287a847d6e752466116cef6f2e0"
  },
  {
    "url": "pt/projeto/links-uteis.html",
    "revision": "a57972b5a8aee4e27f0a9e38b0c4dd0f"
  },
  {
    "url": "pt/projeto/vue-a11y-checklist.html",
    "revision": "bd9bd52b7469b79c2a7be28b2c4ea85a"
  },
  {
    "url": "pt/receitas/contribua.html",
    "revision": "190b5eae945ea66e09192725f99e0b0f"
  },
  {
    "url": "pt/receitas/dicas/atributos-aria-no-vue.html",
    "revision": "09cc7e8e425f7ba2fea7844f47210b0b"
  },
  {
    "url": "pt/receitas/index.html",
    "revision": "913abd4ff4293511117093472c0244ef"
  },
  {
    "url": "pt/receitas/widgets/accordion.html",
    "revision": "e51618431deba2b863030154bdcbf196"
  },
  {
    "url": "pt/receitas/widgets/alert.html",
    "revision": "cbea497955fc5337419f8cf7c6cc20b9"
  },
  {
    "url": "pt/receitas/widgets/breadcrumbs.html",
    "revision": "e035fce916c66072e087f7334d638e1c"
  },
  {
    "url": "pt/receitas/widgets/card.html",
    "revision": "b8408bc67b48494b2cfe0e33f53f8e7c"
  },
  {
    "url": "pt/receitas/widgets/dialog.html",
    "revision": "93340490f0d7bfb99924b2fa7ce9faaf"
  },
  {
    "url": "pt/receitas/widgets/navegacao-mobile.html",
    "revision": "71370d2b63221a889cdfd917e7a56459"
  },
  {
    "url": "pt/receitas/widgets/pular-links.html",
    "revision": "1704255705520cf66f8e0259e78299e8"
  },
  {
    "url": "pt/receitas/widgets/tabs.html",
    "revision": "6470093aeff5c8578dd39c85fe15d58b"
  },
  {
    "url": "recipes/contribute.html",
    "revision": "4c2d19fd3df7b7cca94f4a4a63368df1"
  },
  {
    "url": "recipes/index.html",
    "revision": "4acb8d379dcd5b6569c29cda3ff7e0ca"
  },
  {
    "url": "recipes/tips/aria-attributes-in-vue.html",
    "revision": "8d54656f32c294b53d9f96133c58c06f"
  },
  {
    "url": "recipes/widgets/accordion.html",
    "revision": "1331a57799fa48470088b9c2e3903d59"
  },
  {
    "url": "recipes/widgets/alert.html",
    "revision": "dad1e8b53731ff7942f6cd4af56da1f7"
  },
  {
    "url": "recipes/widgets/breadcrumbs.html",
    "revision": "6004a25a00b16c951f00eeb77b33ef06"
  },
  {
    "url": "recipes/widgets/card.html",
    "revision": "89debb23cc018a72bebed09847b39b6c"
  },
  {
    "url": "recipes/widgets/dialog.html",
    "revision": "44aaa0ddf0bce1cd637c77aeaa8e45c2"
  },
  {
    "url": "recipes/widgets/mobile-navigation.html",
    "revision": "6577e2f7bddadb2c929ef19e3f4c71ab"
  },
  {
    "url": "recipes/widgets/skip-links.html",
    "revision": "b5626d7fd71611db234b06a8ac249c4d"
  },
  {
    "url": "recipes/widgets/tabs.html",
    "revision": "b9339934edf0a2dc011b19a132923ea3"
  },
  {
    "url": "settings/index.html",
    "revision": "17cf87292e250bb558fae1b39ca15fcf"
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
