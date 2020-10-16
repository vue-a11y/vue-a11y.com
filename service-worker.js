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
    "revision": "3beee1d64ba209bb7e77ec4964070a14"
  },
  {
    "url": "assets/css/0.styles.b5eb2440.css",
    "revision": "48a1a4162b57666e12cab4c9779a18e3"
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
    "url": "assets/js/1.7bbee69b.js",
    "revision": "3e9d0f18250972811531276162315bf6"
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
    "url": "assets/js/15.84f2401f.js",
    "revision": "abc47af8c3fd9b4522fa88e2f51f0980"
  },
  {
    "url": "assets/js/16.97e59ec0.js",
    "revision": "32ddf31aa997e7ae64f25730d183a1c3"
  },
  {
    "url": "assets/js/17.95dffad9.js",
    "revision": "11ae4d94391f174834892621a2aebe76"
  },
  {
    "url": "assets/js/18.3ec3ae76.js",
    "revision": "930faa058a11cabedee02f91850390c6"
  },
  {
    "url": "assets/js/19.cef3e365.js",
    "revision": "79bfd7f0ca5520c399bbe667899469e5"
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
    "url": "assets/js/21.6e777505.js",
    "revision": "5ea40ad5533099d129ebc08e0213669e"
  },
  {
    "url": "assets/js/22.b81250e6.js",
    "revision": "63f74bdfd11bee6102a6e96549bc18ea"
  },
  {
    "url": "assets/js/23.924bc963.js",
    "revision": "3a2cd530478a07cb3ef79a1cb1e56276"
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
    "url": "assets/js/27.aa34ab41.js",
    "revision": "e7ff8688584d09602c69592d3b00b29d"
  },
  {
    "url": "assets/js/28.097ca6a4.js",
    "revision": "8bee5df9342fa8025606f8a61eaa5f44"
  },
  {
    "url": "assets/js/29.86da8657.js",
    "revision": "780887050693fc114615ebafe7eedba8"
  },
  {
    "url": "assets/js/3.ea6ffbe7.js",
    "revision": "769337d1c4df45116df4d402bf504ea1"
  },
  {
    "url": "assets/js/30.70cb9141.js",
    "revision": "fc6264abdc46838f7c5ac03390eca0cc"
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
    "url": "assets/js/35.152cc9b5.js",
    "revision": "70fe4d7e213fcc8627c25f4746dc3ae5"
  },
  {
    "url": "assets/js/36.a5c31249.js",
    "revision": "634ad641c57cc806b379860355ccfefc"
  },
  {
    "url": "assets/js/37.a9221328.js",
    "revision": "05f873d2438541523eafa47be420f512"
  },
  {
    "url": "assets/js/38.41ec0647.js",
    "revision": "8d16197a9aa438fea9598a15feade9eb"
  },
  {
    "url": "assets/js/39.e6d3066a.js",
    "revision": "c38a680a5ae993933b798fbc22f9d4d6"
  },
  {
    "url": "assets/js/40.ae487d0a.js",
    "revision": "be4a8e4b32900a887777d5f537e994f6"
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
    "url": "assets/js/6.5bf2ee56.js",
    "revision": "c0d1f9d24bc7dbb37009f1ab56c12f78"
  },
  {
    "url": "assets/js/7.41ea8a9f.js",
    "revision": "151d9978be418e6caa13eacc1889824d"
  },
  {
    "url": "assets/js/8.7784951a.js",
    "revision": "3cf72537c41aab92bc53a9b86c6515c6"
  },
  {
    "url": "assets/js/9.99fa4aa1.js",
    "revision": "ee1faec16d950e5923d6568cba9083ae"
  },
  {
    "url": "assets/js/app.d106fc74.js",
    "revision": "6b894f69b1d77500750efbab14aebd10"
  },
  {
    "url": "assets/js/vuejs-paginate.1e4ded1a.js",
    "revision": "1e979a049cf867ecd78309dbb18c7bee"
  },
  {
    "url": "category/aria/index.html",
    "revision": "7494f169144b99954b094a0768b5c607"
  },
  {
    "url": "category/html/index.html",
    "revision": "c8fc750ae43844afc0b05db03c1cce50"
  },
  {
    "url": "category/index.html",
    "revision": "3fa290d68312d681fffd3e7e52d70ca0"
  },
  {
    "url": "category/news/index.html",
    "revision": "5b796d6bcd11f1755f6c341664d2e92c"
  },
  {
    "url": "category/packages/index.html",
    "revision": "6c158e717e76cfd11686c488c865ce10"
  },
  {
    "url": "category/spa/index.html",
    "revision": "67fbddb68009d6ee4ec23f986469a67a"
  },
  {
    "url": "category/tools/index.html",
    "revision": "cde504f42dba3b62c42d11c42c5c4a28"
  },
  {
    "url": "category/wcag/index.html",
    "revision": "5b42609db1f350de8be8d62b6685af03"
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
    "revision": "52507238c37312b21a1cbde6821323b5"
  },
  {
    "url": "posts/index.html",
    "revision": "ab8e134ddb004260d6a0558907be7352"
  },
  {
    "url": "posts/post-test/index.html",
    "revision": "afbe83dc77ecfc9331167d916d0180c5"
  },
  {
    "url": "project/how-to-contribute.html",
    "revision": "1286b193a36f194dc9e5e7ba2ab913eb"
  },
  {
    "url": "project/index.html",
    "revision": "27c03a5aab73c4d6aa0c9322eddeda5b"
  },
  {
    "url": "project/people.html",
    "revision": "53e7ad38cdc2f4933a046a5b337dc85f"
  },
  {
    "url": "project/resources.html",
    "revision": "42519fe18b61752b60e450d06227a93d"
  },
  {
    "url": "project/supporting.html",
    "revision": "5cb2a1cdbb76277e4eeadd45370ab743"
  },
  {
    "url": "project/tools-testing.html",
    "revision": "57d5203277b4282f59c8bde23d60cf0c"
  },
  {
    "url": "project/vue-a11y-checklist.html",
    "revision": "cd320f7583abce8707b049c24fbdada9"
  },
  {
    "url": "pt/categoria/aria/index.html",
    "revision": "9d37e93ae9525b87a5d721c224c412a3"
  },
  {
    "url": "pt/categoria/html/index.html",
    "revision": "3366b5d46753f3e2bd03a097c37978c7"
  },
  {
    "url": "pt/categoria/index.html",
    "revision": "d0da5166ea96d2998c97002fd4bad4cd"
  },
  {
    "url": "pt/categoria/novidades/index.html",
    "revision": "c1b50576a8f7bbcc6884abd01f0604f3"
  },
  {
    "url": "pt/categoria/packages/index.html",
    "revision": "87ac79d68f4b0f921d6827b5222ffaff"
  },
  {
    "url": "pt/categoria/spa/index.html",
    "revision": "ff302ebdfd6921344263878e9b016f9f"
  },
  {
    "url": "pt/categoria/tools/index.html",
    "revision": "c33cd6a445d0f04664a25946801072f1"
  },
  {
    "url": "pt/categoria/wcag/index.html",
    "revision": "5746ed03aeb2ac2d231230a9bb8b6288"
  },
  {
    "url": "pt/configuracoes/index.html",
    "revision": "ca8760900c15f6138330e1f3912e8811"
  },
  {
    "url": "pt/index.html",
    "revision": "1822fa93fa5122549dbb6bb40a056eda"
  },
  {
    "url": "pt/posts/index.html",
    "revision": "e6cdc0ddcef6733edd2548a26ea04be6"
  },
  {
    "url": "pt/posts/posts-de-teste/index.html",
    "revision": "aaa19b975dbd4b03df7f2222202d87e9"
  },
  {
    "url": "pt/projeto/apoiando.html",
    "revision": "b84830d07630542bca732b256848caeb"
  },
  {
    "url": "pt/projeto/como-contribuir.html",
    "revision": "7d3c94c895db62eac8589621ea21593b"
  },
  {
    "url": "pt/projeto/ferramentas-e-testes.html",
    "revision": "30b840b720f156bf4c9df2c1c0f949f1"
  },
  {
    "url": "pt/projeto/index.html",
    "revision": "760f9d865e511ec051b863e31d708889"
  },
  {
    "url": "pt/projeto/links-uteis.html",
    "revision": "20ee7f59fa040a8a1fe33db271b59dae"
  },
  {
    "url": "pt/projeto/pessoas.html",
    "revision": "972808109f0fdc3cc7a184a8e017fa86"
  },
  {
    "url": "pt/projeto/vue-a11y-checklist.html",
    "revision": "32917502ae33880b9784b0da72484ab2"
  },
  {
    "url": "pt/receitas/contribua.html",
    "revision": "76c81e4109643cf0e10109810be7cf21"
  },
  {
    "url": "pt/receitas/dicas/atributos-aria-no-vue.html",
    "revision": "86989a0a1e9ea1badc03bc542dfb083c"
  },
  {
    "url": "pt/receitas/index.html",
    "revision": "6acbf16f838fec260e7bb1312f666de4"
  },
  {
    "url": "pt/receitas/widgets/accordion.html",
    "revision": "b3bd0cb5a43a8e0738a114cda0a03468"
  },
  {
    "url": "pt/receitas/widgets/alert.html",
    "revision": "b1e61fecfd15352c4a7dea2637d61010"
  },
  {
    "url": "pt/receitas/widgets/breadcrumbs.html",
    "revision": "3245b8ab6193e2d6cdb2677bdbba68de"
  },
  {
    "url": "pt/receitas/widgets/card.html",
    "revision": "de4662e986c39d2b00f1314885bc2cbf"
  },
  {
    "url": "pt/receitas/widgets/dialog.html",
    "revision": "b35dfd154bf4032d0e1225fdbc51c875"
  },
  {
    "url": "pt/receitas/widgets/navegacao-mobile.html",
    "revision": "2375c6357866b322dc6b57a6519a8ba7"
  },
  {
    "url": "pt/receitas/widgets/pular-links.html",
    "revision": "02125eda7ebb72f33833dab7c151f071"
  },
  {
    "url": "pt/receitas/widgets/tabs.html",
    "revision": "8fd14ba7e8e9519bc27a97a6c0e30ec9"
  },
  {
    "url": "recipes/contribute.html",
    "revision": "4e9a54f7cbcdfcbeee7c32043a1eb24e"
  },
  {
    "url": "recipes/index.html",
    "revision": "7840a207ff6c99aaac6205aa8282cd77"
  },
  {
    "url": "recipes/tips/aria-attributes-in-vue.html",
    "revision": "82bfe12301b03788f8950bf41507588f"
  },
  {
    "url": "recipes/widgets/accordion.html",
    "revision": "f3b79d03a68816d156dfc1c3a36a0e46"
  },
  {
    "url": "recipes/widgets/alert.html",
    "revision": "3440cfe83725cd4ace6464fceb8bd09d"
  },
  {
    "url": "recipes/widgets/breadcrumbs.html",
    "revision": "a035aea04af9e43d03bc8aaacbdc0bfd"
  },
  {
    "url": "recipes/widgets/card.html",
    "revision": "ef3a3aa2ab4022426548915ea7cc6d24"
  },
  {
    "url": "recipes/widgets/dialog.html",
    "revision": "b962ce2f766038775e09e44f2956050e"
  },
  {
    "url": "recipes/widgets/mobile-navigation.html",
    "revision": "d9ffabf776c5dcc08218cc81e37cf4fd"
  },
  {
    "url": "recipes/widgets/skip-links.html",
    "revision": "581793340295390c94118bed77883981"
  },
  {
    "url": "recipes/widgets/tabs.html",
    "revision": "a87dee8ec098b77b3802db0c398e43f0"
  },
  {
    "url": "settings/index.html",
    "revision": "31a5877a63a20d3130f988ee0ece7beb"
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
