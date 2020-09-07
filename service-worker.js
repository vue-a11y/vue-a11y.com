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
    "revision": "89f3405d572d9038570f1c5704376704"
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
    "url": "assets/js/14.e95eed4c.js",
    "revision": "056d92ec48bd7e704469fe93006d929b"
  },
  {
    "url": "assets/js/15.25cd92d1.js",
    "revision": "9a3276e026daeaa47b331c9fdb27114a"
  },
  {
    "url": "assets/js/16.246712ea.js",
    "revision": "1332935d466d1e18d2f5a57d96d1a220"
  },
  {
    "url": "assets/js/17.02cf4980.js",
    "revision": "4c642fa7de5b01a884da0ba5e75d037e"
  },
  {
    "url": "assets/js/18.b9778e51.js",
    "revision": "854838fb85a9636eb237083ddad07e0c"
  },
  {
    "url": "assets/js/19.5c104299.js",
    "revision": "b062bc4d2ccd648f8f1184043707ae20"
  },
  {
    "url": "assets/js/2.813d15c1.js",
    "revision": "134915beb6b8381834c4d1cf97633832"
  },
  {
    "url": "assets/js/20.c64836d0.js",
    "revision": "3389bf2ef954a9803d52dcbefaa3d1fb"
  },
  {
    "url": "assets/js/21.5dd14b02.js",
    "revision": "ac6997173a9b9d8d5ed1c398bb9e8e78"
  },
  {
    "url": "assets/js/22.b9b9d7bb.js",
    "revision": "0bc6b6a81023925d7edf26101453ac63"
  },
  {
    "url": "assets/js/23.da86e7a9.js",
    "revision": "e625daad2ffc16a2cd8df15b71dfcb05"
  },
  {
    "url": "assets/js/24.4dd7f8ae.js",
    "revision": "016f4d257596707568974d6ab2f85349"
  },
  {
    "url": "assets/js/25.b71796a4.js",
    "revision": "0e4fd0b30223d40c076c6f6cce00fe51"
  },
  {
    "url": "assets/js/26.82f0276e.js",
    "revision": "2defe6bbf1022abe742ea19cb25d3eec"
  },
  {
    "url": "assets/js/27.77e76c8e.js",
    "revision": "6b498c84ba67dcf778860fd924f7dde0"
  },
  {
    "url": "assets/js/28.8fb76f4f.js",
    "revision": "ddf1b5f57de00c6f658e6d9432e45218"
  },
  {
    "url": "assets/js/29.75113d08.js",
    "revision": "0adda62eaa6aaedc72de461e682de812"
  },
  {
    "url": "assets/js/3.7c5a0011.js",
    "revision": "b5235fb73bc4a2aae429f67ffeb64115"
  },
  {
    "url": "assets/js/30.c151e008.js",
    "revision": "21f2608ab4fe5ca5a4f49caf8a3ac79a"
  },
  {
    "url": "assets/js/31.272ff646.js",
    "revision": "ce5bf40858ea32778c5835a6ea30358e"
  },
  {
    "url": "assets/js/32.12b011a3.js",
    "revision": "effa378717370576cff49030b413a3de"
  },
  {
    "url": "assets/js/33.e3eb7bba.js",
    "revision": "47abe837cb6b5b98f501022e5d3e3aca"
  },
  {
    "url": "assets/js/34.e921da94.js",
    "revision": "229740c5e93442743c3018a2bed4d54b"
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
    "url": "assets/js/37.7a6c633f.js",
    "revision": "de217aa0e8681fb529d6fbdf33f98669"
  },
  {
    "url": "assets/js/38.98d177d1.js",
    "revision": "8189aadeb328ae0d50bc25277cc0974d"
  },
  {
    "url": "assets/js/39.2fd1136b.js",
    "revision": "b478775f29fd1332c86cf7ff4cd75f66"
  },
  {
    "url": "assets/js/40.ed5b7da7.js",
    "revision": "14dfd241b22f352fc8fc3aadeae373a8"
  },
  {
    "url": "assets/js/41.32ea6fba.js",
    "revision": "e2233510409f44849ed2db5ef4dbf477"
  },
  {
    "url": "assets/js/42.aa685be2.js",
    "revision": "e4c96ff9c1f92f16556bd989665553bc"
  },
  {
    "url": "assets/js/43.ef92fa73.js",
    "revision": "cf3500dad19f805c661aaff6e5e274e1"
  },
  {
    "url": "assets/js/44.4af07218.js",
    "revision": "bb5e0f3b822073549b40576ec9f4ea60"
  },
  {
    "url": "assets/js/45.15433dea.js",
    "revision": "2b12af235bfd79b72150e661f59797b4"
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
    "url": "assets/js/48.5e1cf75b.js",
    "revision": "8ecff17c1e44704204bc26966e32e3f9"
  },
  {
    "url": "assets/js/49.23c71041.js",
    "revision": "fcdb9cefd9e9da6cc21e11efba257aee"
  },
  {
    "url": "assets/js/50.7a5827f3.js",
    "revision": "159f507e25ea7eceff5fc507641228d6"
  },
  {
    "url": "assets/js/51.13c25b3c.js",
    "revision": "319034e071b99bfa71393f344232fb94"
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
    "url": "assets/js/app.8deca854.js",
    "revision": "170042ffdfed7e5f32ba5b471f4b5514"
  },
  {
    "url": "assets/js/vuejs-paginate.92f047ca.js",
    "revision": "dfad919ae3fb0a74e488965117bf0558"
  },
  {
    "url": "category/aria/index.html",
    "revision": "bbd0caf17a30681fa395cfe518f80b00"
  },
  {
    "url": "category/html/index.html",
    "revision": "9462c6f9888ad395e4560b34b2432603"
  },
  {
    "url": "category/index.html",
    "revision": "025c7e5f7a4433594869786efc4da181"
  },
  {
    "url": "category/news/index.html",
    "revision": "712b02a1ae10b0515d7937f4df62ffa6"
  },
  {
    "url": "category/packages/index.html",
    "revision": "46e085de3813dd19e41d61f942cf9bfa"
  },
  {
    "url": "category/spa/index.html",
    "revision": "2417dd8183f9a354fd2d7afcec8f72eb"
  },
  {
    "url": "category/tools/index.html",
    "revision": "63d69bf054bb5ebd38e08937a480a3fd"
  },
  {
    "url": "category/wcag/index.html",
    "revision": "b3e348414babd35394dd130885d348c9"
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
    "revision": "4c9c23d2b6ce6d5704686d47fa089d49"
  },
  {
    "url": "posts/index.html",
    "revision": "a81429958033a7a79ecd867eef4ee441"
  },
  {
    "url": "posts/post-test/index.html",
    "revision": "42d89fd45c2b27f46fd0680445476ba4"
  },
  {
    "url": "project/contributors.html",
    "revision": "d219b56aeb6fc9e888c2ec43d365735f"
  },
  {
    "url": "project/index.html",
    "revision": "6905245cae3b96725a47bc3a30776109"
  },
  {
    "url": "project/resources.html",
    "revision": "c22762fb62541dcfc4482c3099367ba1"
  },
  {
    "url": "project/supporting.html",
    "revision": "b33f615d26469baa99262e41ed30484e"
  },
  {
    "url": "project/tools-testing.html",
    "revision": "4985b830a6873a9f4a006ed896524920"
  },
  {
    "url": "project/vue-a11y-checklist.html",
    "revision": "cc4709f11d09a9e72266965e6b7a3d15"
  },
  {
    "url": "pt/categoria/aria/index.html",
    "revision": "ee1c7eb8444a584d27ab660cc87f2845"
  },
  {
    "url": "pt/categoria/html/index.html",
    "revision": "57c7b74a97dfeb3f8538ec3562366702"
  },
  {
    "url": "pt/categoria/index.html",
    "revision": "e99e0f23945e0da20b7aa54cf091d64b"
  },
  {
    "url": "pt/categoria/novidades/index.html",
    "revision": "80a15a4252eb230be6fe07fe76268221"
  },
  {
    "url": "pt/categoria/packages/index.html",
    "revision": "90bb3ee4c7db83ad50d01fd376136bee"
  },
  {
    "url": "pt/categoria/spa/index.html",
    "revision": "b553256999a6e8680c59e0dcab82261a"
  },
  {
    "url": "pt/categoria/tools/index.html",
    "revision": "7fb681e2595273b99453c206620efe32"
  },
  {
    "url": "pt/categoria/wcag/index.html",
    "revision": "83adb9ed9a28fa994d0f75eb051955f2"
  },
  {
    "url": "pt/configuracoes/index.html",
    "revision": "3717f245210611d756738f3aaf1ddf90"
  },
  {
    "url": "pt/index.html",
    "revision": "40ab9680f141ec9dfef54aaa65f2b1ed"
  },
  {
    "url": "pt/posts/index.html",
    "revision": "985fd8e344e718b8951ee784b77eab04"
  },
  {
    "url": "pt/posts/posts-de-teste/index.html",
    "revision": "b0b3a6813105f6beef07fe4724dc2d25"
  },
  {
    "url": "pt/projeto/apoiando.html",
    "revision": "8aa1e88112b2e888aa4e443b6c973597"
  },
  {
    "url": "pt/projeto/contribuidores.html",
    "revision": "6aa4b69e38364117805d50a082d010bd"
  },
  {
    "url": "pt/projeto/ferramentas-e-testes.html",
    "revision": "7a88242bcb18bfc4dd4016e9332443d9"
  },
  {
    "url": "pt/projeto/index.html",
    "revision": "f196d2df9409b5deca58dbc7282bec2a"
  },
  {
    "url": "pt/projeto/links-uteis.html",
    "revision": "df5772c08bec9456b5c8b94d044f1f24"
  },
  {
    "url": "pt/projeto/vue-a11y-checklist.html",
    "revision": "f067e40a0b8d77e294456cac9e05f0cc"
  },
  {
    "url": "pt/receitas/contribua.html",
    "revision": "3e70d6214ac9d04ad49d4ab3af1a6538"
  },
  {
    "url": "pt/receitas/dicas/atributos-aria-no-vue.html",
    "revision": "539e6240773974b81300d88dae0913bb"
  },
  {
    "url": "pt/receitas/index.html",
    "revision": "a5dd4af3e46bc1ae8c86b4019ef73b86"
  },
  {
    "url": "pt/receitas/widgets/accordion.html",
    "revision": "9395924e380362ae1103ca3b262c1404"
  },
  {
    "url": "pt/receitas/widgets/alert.html",
    "revision": "721dccc16fbd2420a64c942133fb3251"
  },
  {
    "url": "pt/receitas/widgets/breadcrumbs.html",
    "revision": "857b8abc30d28d80bf908a4b0e0940c8"
  },
  {
    "url": "pt/receitas/widgets/card.html",
    "revision": "9cfec2ffa1d8292ad71482943ca934d8"
  },
  {
    "url": "pt/receitas/widgets/dialog.html",
    "revision": "4b0375d96b313e2dc033f8eda7f18b76"
  },
  {
    "url": "pt/receitas/widgets/navegacao-mobile.html",
    "revision": "59e63b16e3a9134f432224715c35b539"
  },
  {
    "url": "pt/receitas/widgets/pular-links.html",
    "revision": "aee1366d5a4d6531fc158856ff4075b9"
  },
  {
    "url": "pt/receitas/widgets/tabs.html",
    "revision": "114eb87cd41d4e8f7485b9c0655d5073"
  },
  {
    "url": "recipes/contribute.html",
    "revision": "fa289d2b246e67fab15f492a2ef33ff0"
  },
  {
    "url": "recipes/index.html",
    "revision": "018068b41718860e6da5eb97cee18918"
  },
  {
    "url": "recipes/tips/aria-attributes-in-vue.html",
    "revision": "36a69e09b613bdcb501595c7718f8168"
  },
  {
    "url": "recipes/widgets/accordion.html",
    "revision": "7c56712c4f92d8e33b5212c0f7ee99c5"
  },
  {
    "url": "recipes/widgets/alert.html",
    "revision": "3f49d5aa35b3dbee47b255524ced96b2"
  },
  {
    "url": "recipes/widgets/breadcrumbs.html",
    "revision": "48427fd80faaabe8db342d459ad9c47d"
  },
  {
    "url": "recipes/widgets/card.html",
    "revision": "3b93c4f5eccaf729c91b3d6a7a3055e9"
  },
  {
    "url": "recipes/widgets/dialog.html",
    "revision": "30fc6db7335ea858c6d951d1b236c147"
  },
  {
    "url": "recipes/widgets/mobile-navigation.html",
    "revision": "c385d579af14158964913d1ba45ffa34"
  },
  {
    "url": "recipes/widgets/skip-links.html",
    "revision": "7a2e14de7221b71a1e8add4fe683ce7f"
  },
  {
    "url": "recipes/widgets/tabs.html",
    "revision": "db8f5d0f34f722420b4971058c9a6e15"
  },
  {
    "url": "settings/index.html",
    "revision": "435770b68f56c173d0095400a4cc8706"
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
