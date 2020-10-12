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
    "revision": "75d5adb9b940c11d280e02cdd602df21"
  },
  {
    "url": "assets/css/0.styles.e3894ddb.css",
    "revision": "0f9cec64c7393a9442495a515c860c01"
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
    "url": "assets/js/1.e1d63c4c.js",
    "revision": "558e5f7a60da9ec37717b74b03401899"
  },
  {
    "url": "assets/js/10.45eba929.js",
    "revision": "1f103036dc6484fdf9fc3bd424f6f8b3"
  },
  {
    "url": "assets/js/11.c01bda76.js",
    "revision": "7601fbdb83740530d134bf842a333875"
  },
  {
    "url": "assets/js/12.99650e1b.js",
    "revision": "2172610ae317b389f43564302b93c6fb"
  },
  {
    "url": "assets/js/13.2a87cfae.js",
    "revision": "19300b56bca36f896ca10db96a61f2a5"
  },
  {
    "url": "assets/js/14.7316295a.js",
    "revision": "99b23d3f79eace673788843338760851"
  },
  {
    "url": "assets/js/15.cadb2346.js",
    "revision": "ec6cb6410907e33081f92b04dfea58cc"
  },
  {
    "url": "assets/js/16.b64542d0.js",
    "revision": "5a997224ff5b147fe87acc8130c4f7c3"
  },
  {
    "url": "assets/js/17.f9abff11.js",
    "revision": "36097082b2a341d84888c903b7273f6d"
  },
  {
    "url": "assets/js/18.534223a5.js",
    "revision": "ffa1c0e4b3f87684154da09a8279e692"
  },
  {
    "url": "assets/js/19.57bdd16b.js",
    "revision": "5c82b7c350317fc0635333bc078d3518"
  },
  {
    "url": "assets/js/2.de35db4d.js",
    "revision": "51df70b7749ffa3ed3e6a3a78eed703d"
  },
  {
    "url": "assets/js/20.ea30fe78.js",
    "revision": "744c002168e3e7aff246811e0594e9cf"
  },
  {
    "url": "assets/js/21.8ddffd0e.js",
    "revision": "e7cc6d200fd8e9b1ae637299c6d2cc1f"
  },
  {
    "url": "assets/js/22.4909bb5b.js",
    "revision": "503523b654a54cc3dc872e603e29b98f"
  },
  {
    "url": "assets/js/23.6b0b8e25.js",
    "revision": "6953d021bfa60218713897cbce6f2849"
  },
  {
    "url": "assets/js/24.3cc65eb7.js",
    "revision": "f0953764878695f4e90b685acf4df416"
  },
  {
    "url": "assets/js/25.47712d61.js",
    "revision": "01db059df07d60858e2bb4bdb6d4213b"
  },
  {
    "url": "assets/js/26.37db3a95.js",
    "revision": "5e518bb1ed14fb6d75263b2c5cb68c0d"
  },
  {
    "url": "assets/js/27.b5e58eed.js",
    "revision": "52a7e30bff603e24e9ba130462a37073"
  },
  {
    "url": "assets/js/28.24918687.js",
    "revision": "adf0ca4e20a9f339b1ec5b228ccc4d28"
  },
  {
    "url": "assets/js/29.33c7369a.js",
    "revision": "397b4f90923c038b356eb42f5672c924"
  },
  {
    "url": "assets/js/3.1bd8a596.js",
    "revision": "396f01995ce1b28502b6e49e5abe1160"
  },
  {
    "url": "assets/js/30.b9c8749c.js",
    "revision": "aaa2737a8c254be676ddc52cae284975"
  },
  {
    "url": "assets/js/31.5dc3e90b.js",
    "revision": "efb7abe4d403d1b37213fa04359b9b4e"
  },
  {
    "url": "assets/js/32.8f751ec6.js",
    "revision": "3f682dea6aff38231f22740d0329ad48"
  },
  {
    "url": "assets/js/33.fede3a9d.js",
    "revision": "a2773792348cdf503e16b36d83806b44"
  },
  {
    "url": "assets/js/34.5c95d445.js",
    "revision": "daa8b547ab66e3b0ec3dce131a524762"
  },
  {
    "url": "assets/js/35.130bf2f7.js",
    "revision": "2197f094e0f481158a091da09257fbaf"
  },
  {
    "url": "assets/js/36.a5c31249.js",
    "revision": "634ad641c57cc806b379860355ccfefc"
  },
  {
    "url": "assets/js/37.145179cd.js",
    "revision": "89f32a6581ff9a3dec56f0578307c0c1"
  },
  {
    "url": "assets/js/38.1c3dcf14.js",
    "revision": "c5ebe5827f383e1681270f2cbce193a9"
  },
  {
    "url": "assets/js/39.030ea117.js",
    "revision": "faccb36f4e5e5b22a863f6da3946774a"
  },
  {
    "url": "assets/js/40.fc90d7bf.js",
    "revision": "6905b36220e97e33f16154a09d0b80f3"
  },
  {
    "url": "assets/js/41.47aafdf8.js",
    "revision": "19ef548922e5607075eaece62dc6a7f0"
  },
  {
    "url": "assets/js/42.25e3dd3d.js",
    "revision": "ebd34d5f11b84a15fe582110e7440eeb"
  },
  {
    "url": "assets/js/43.490f1f71.js",
    "revision": "0ebc70c949b5b6e388552fc8f85d98bb"
  },
  {
    "url": "assets/js/44.5162bc22.js",
    "revision": "7f10e5e6a0c28098e6d32acf8f110767"
  },
  {
    "url": "assets/js/45.f230b266.js",
    "revision": "4233abe241f422aaa6b2d9be06efdaef"
  },
  {
    "url": "assets/js/46.2d4c743c.js",
    "revision": "3f71a6842b18a90be3177555fc9e4d4f"
  },
  {
    "url": "assets/js/47.c8ad1476.js",
    "revision": "139bf63f11475e144d72eaf4b83bc7ac"
  },
  {
    "url": "assets/js/48.b5b60359.js",
    "revision": "77b743c061f2c572eca816280cced006"
  },
  {
    "url": "assets/js/49.cc619cd0.js",
    "revision": "5b710c70492aba6c751ae3d959f0e64b"
  },
  {
    "url": "assets/js/50.d39774a6.js",
    "revision": "fc7bdc615b486bed2adfc524d0c369f3"
  },
  {
    "url": "assets/js/51.d017ce5b.js",
    "revision": "538d560f739c71e2dac746e2ca761f21"
  },
  {
    "url": "assets/js/52.93c44696.js",
    "revision": "0ad7fdfd810e224f092e68d4c1d67529"
  },
  {
    "url": "assets/js/53.e1fa805e.js",
    "revision": "950c3db2b0ba6fb2452c0d22cdae582a"
  },
  {
    "url": "assets/js/54.2154be46.js",
    "revision": "72b06051b379dccfc93e2c7c6e9d59a7"
  },
  {
    "url": "assets/js/55.41deb9e7.js",
    "revision": "c58518440d5f4e83e55be199944ff870"
  },
  {
    "url": "assets/js/56.bce8e17c.js",
    "revision": "af7322bc9d4b0ff1e343bbff23bb6f44"
  },
  {
    "url": "assets/js/6.a302ff91.js",
    "revision": "9209b74f31d968297e20c350cec0f063"
  },
  {
    "url": "assets/js/7.41ea8a9f.js",
    "revision": "151d9978be418e6caa13eacc1889824d"
  },
  {
    "url": "assets/js/8.1f57ce48.js",
    "revision": "b149e419e7fb0e5e426d5ba4b4833148"
  },
  {
    "url": "assets/js/9.c8c27c24.js",
    "revision": "de17828a68f8e36f5a72d33cc1f89eb6"
  },
  {
    "url": "assets/js/app.c9c3cf9d.js",
    "revision": "807f5dd5466f780f94ac034c22646a9b"
  },
  {
    "url": "assets/js/vuejs-paginate.1e4ded1a.js",
    "revision": "1e979a049cf867ecd78309dbb18c7bee"
  },
  {
    "url": "category/aria/index.html",
    "revision": "64065730e903d6ab9ae675314258dff1"
  },
  {
    "url": "category/html/index.html",
    "revision": "9e8b492c12abeb0c03afae4e0a9a1b22"
  },
  {
    "url": "category/index.html",
    "revision": "2406caf7456115817a236aa9f2d50016"
  },
  {
    "url": "category/news/index.html",
    "revision": "14c7d7123d2bc3b190f8615b1f99df8e"
  },
  {
    "url": "category/packages/index.html",
    "revision": "563f68ac870b501c843c3cc1d28b79e7"
  },
  {
    "url": "category/spa/index.html",
    "revision": "c6b9f0e9fc4e388d8e4d5d0917a404ca"
  },
  {
    "url": "category/tools/index.html",
    "revision": "41131ef09ca77c5250cfa53b6beb192d"
  },
  {
    "url": "category/wcag/index.html",
    "revision": "1577cca237e0ada50dc0533498b2501b"
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
    "revision": "0c190873beb71b5917451fc9d09c2645"
  },
  {
    "url": "posts/index.html",
    "revision": "455d3378f3670590f0b9a256ece9df93"
  },
  {
    "url": "posts/post-test/index.html",
    "revision": "201f619290f1c8f4b841a452d1315cf9"
  },
  {
    "url": "project/how-to-contribute.html",
    "revision": "55af8f9531456b9567abba52147ab907"
  },
  {
    "url": "project/index.html",
    "revision": "a969302f7ea4c00cb4b2de17164b3242"
  },
  {
    "url": "project/people.html",
    "revision": "cb78c849dc9b16a6ea6768649d28f379"
  },
  {
    "url": "project/resources.html",
    "revision": "b61bfdcf4e02ad011530284459bd839b"
  },
  {
    "url": "project/supporting.html",
    "revision": "4de2bcae41f21fabbcf16a6291414eda"
  },
  {
    "url": "project/tools-testing.html",
    "revision": "a949909b1bf70b1e2f37bb4180ffc546"
  },
  {
    "url": "project/vue-a11y-checklist.html",
    "revision": "ee804adb96e6d974ff8c19e56e10e833"
  },
  {
    "url": "pt/categoria/aria/index.html",
    "revision": "2007d659c53bdfa0fc1fe24a231a9505"
  },
  {
    "url": "pt/categoria/html/index.html",
    "revision": "eca849bb6544c3ff26a101839727ede5"
  },
  {
    "url": "pt/categoria/index.html",
    "revision": "b077932264598dc3e8378cbaead10dd9"
  },
  {
    "url": "pt/categoria/novidades/index.html",
    "revision": "5d2c8006ac444b8d25d7fde884d4e2d8"
  },
  {
    "url": "pt/categoria/packages/index.html",
    "revision": "9179deefb8e85f408d8c9821342691c5"
  },
  {
    "url": "pt/categoria/spa/index.html",
    "revision": "e1685d96d1fa688c212a5fd016e55671"
  },
  {
    "url": "pt/categoria/tools/index.html",
    "revision": "6d19f04905e9cbc7ab59e9ad1543601f"
  },
  {
    "url": "pt/categoria/wcag/index.html",
    "revision": "9dcbfda85dc606dd04164f6db6ac44b3"
  },
  {
    "url": "pt/configuracoes/index.html",
    "revision": "a9b32ffebdd9f191fdb413dfc2e1df86"
  },
  {
    "url": "pt/index.html",
    "revision": "150ea1863cba6576696a787dc44caea2"
  },
  {
    "url": "pt/posts/index.html",
    "revision": "2094ef92f37bc9e50ced5f6b76d5bf96"
  },
  {
    "url": "pt/posts/posts-de-teste/index.html",
    "revision": "86aaa01938464a6297a2f99ed507b559"
  },
  {
    "url": "pt/projeto/apoiando.html",
    "revision": "5f0b854fa2a05920694e8259fb57bd9e"
  },
  {
    "url": "pt/projeto/como-contribuir.html",
    "revision": "8594f7d9d4b8c4a7533236220a41b331"
  },
  {
    "url": "pt/projeto/ferramentas-e-testes.html",
    "revision": "3500358ccd021b461aff904b2a865521"
  },
  {
    "url": "pt/projeto/index.html",
    "revision": "96893ac9fc857dbe29ab32c7a3feb1fd"
  },
  {
    "url": "pt/projeto/links-uteis.html",
    "revision": "4e9fd93cd30d06fd7c6013e0bb34c2e2"
  },
  {
    "url": "pt/projeto/pessoas.html",
    "revision": "a468c0cbebcf83560b1cbd061e555801"
  },
  {
    "url": "pt/projeto/vue-a11y-checklist.html",
    "revision": "ab2c24b0999f2bd6db7e46f1d609d760"
  },
  {
    "url": "pt/receitas/contribua.html",
    "revision": "ee850e1a36012c20498cb35884f54c8b"
  },
  {
    "url": "pt/receitas/dicas/atributos-aria-no-vue.html",
    "revision": "ede1ff7d945264d52ae7a0a620f31d69"
  },
  {
    "url": "pt/receitas/index.html",
    "revision": "32183bbd43bd722b21994f34a256ed43"
  },
  {
    "url": "pt/receitas/widgets/accordion.html",
    "revision": "c6a25ec27210f083fc43d723bc910ed8"
  },
  {
    "url": "pt/receitas/widgets/alert.html",
    "revision": "9d935c1b3d1237588e56c7f108f99a50"
  },
  {
    "url": "pt/receitas/widgets/breadcrumbs.html",
    "revision": "0532a6fdef436dc5038c68aa1538d877"
  },
  {
    "url": "pt/receitas/widgets/card.html",
    "revision": "999a911312c1510f828d9b46e2cfe56c"
  },
  {
    "url": "pt/receitas/widgets/dialog.html",
    "revision": "fb8670936e92d42bfb051e9f853c5c72"
  },
  {
    "url": "pt/receitas/widgets/navegacao-mobile.html",
    "revision": "7fb05455f73d8a1c70c3be451bb617af"
  },
  {
    "url": "pt/receitas/widgets/pular-links.html",
    "revision": "2ca89025b6a572f2fb6812484a351616"
  },
  {
    "url": "pt/receitas/widgets/tabs.html",
    "revision": "a15d2263266d4fbe634ff55bcdbb0013"
  },
  {
    "url": "recipes/contribute.html",
    "revision": "a4a04c23c1699e1c1b5552381b4a9ac8"
  },
  {
    "url": "recipes/index.html",
    "revision": "3641d9212fcde0274499237c5518c5ff"
  },
  {
    "url": "recipes/tips/aria-attributes-in-vue.html",
    "revision": "56e3f9e9ba137f05acf039fd0a8a344b"
  },
  {
    "url": "recipes/widgets/accordion.html",
    "revision": "27babe621251d97479012263e09c8b5b"
  },
  {
    "url": "recipes/widgets/alert.html",
    "revision": "291ed823542b7c3488f4109b4ef2c059"
  },
  {
    "url": "recipes/widgets/breadcrumbs.html",
    "revision": "74aab208df4517f20e90403f301e7eba"
  },
  {
    "url": "recipes/widgets/card.html",
    "revision": "3c804ea46c1d12640abc4c91d0b4dbab"
  },
  {
    "url": "recipes/widgets/dialog.html",
    "revision": "232f4b05f87c7cbc6695623d81c60a7c"
  },
  {
    "url": "recipes/widgets/mobile-navigation.html",
    "revision": "c59923f21183e8bab5d154e8bb5ab217"
  },
  {
    "url": "recipes/widgets/skip-links.html",
    "revision": "e7f0530eb721ce26f0592236d4c46212"
  },
  {
    "url": "recipes/widgets/tabs.html",
    "revision": "8bcd17f51ffe8b3e78c04dbfbe072ca9"
  },
  {
    "url": "settings/index.html",
    "revision": "75b96884a8a3bfd1789ff40c63d796b6"
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
