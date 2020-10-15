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
    "revision": "c543657bb9c4aa2061d5e8df4c9d6c34"
  },
  {
    "url": "assets/css/0.styles.8cc3882e.css",
    "revision": "58d6be09172b45d83a1a89569343ca34"
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
    "url": "assets/js/15.c7242ff8.js",
    "revision": "c501202f90be74d0251e127d763d6253"
  },
  {
    "url": "assets/js/16.97e59ec0.js",
    "revision": "32ddf31aa997e7ae64f25730d183a1c3"
  },
  {
    "url": "assets/js/17.f9abff11.js",
    "revision": "36097082b2a341d84888c903b7273f6d"
  },
  {
    "url": "assets/js/18.dfb20c28.js",
    "revision": "108a80c08876294913ad81c538ef6837"
  },
  {
    "url": "assets/js/19.fd4ffb8f.js",
    "revision": "8cc21fc673f7fbac087816b553eae908"
  },
  {
    "url": "assets/js/2.de35db4d.js",
    "revision": "51df70b7749ffa3ed3e6a3a78eed703d"
  },
  {
    "url": "assets/js/20.8a803230.js",
    "revision": "39adc537645889ee78fb10c33c0f7d0e"
  },
  {
    "url": "assets/js/21.8ddffd0e.js",
    "revision": "e7cc6d200fd8e9b1ae637299c6d2cc1f"
  },
  {
    "url": "assets/js/22.81007db3.js",
    "revision": "076c296e191ceee2bd79555c218e9668"
  },
  {
    "url": "assets/js/23.df36af8b.js",
    "revision": "aedc010007eff325d87bd49fe3123cd2"
  },
  {
    "url": "assets/js/24.5eb37a96.js",
    "revision": "7861f0c645d92e03d7b9f8f362799fa7"
  },
  {
    "url": "assets/js/25.cb4f4815.js",
    "revision": "9878469d3d9266bee82591bf57ac6945"
  },
  {
    "url": "assets/js/26.1720d966.js",
    "revision": "8476eb83d30982e462589e8ebd6cbdda"
  },
  {
    "url": "assets/js/27.a97bb789.js",
    "revision": "13258e7ed7ddb4399be983ab61053c31"
  },
  {
    "url": "assets/js/28.24918687.js",
    "revision": "adf0ca4e20a9f339b1ec5b228ccc4d28"
  },
  {
    "url": "assets/js/29.e1ad6cb1.js",
    "revision": "a4906e4eea5f69a68aa7d8abb20e7931"
  },
  {
    "url": "assets/js/3.aa6a77bd.js",
    "revision": "769337d1c4df45116df4d402bf504ea1"
  },
  {
    "url": "assets/js/30.b9c8749c.js",
    "revision": "aaa2737a8c254be676ddc52cae284975"
  },
  {
    "url": "assets/js/31.4d7d8488.js",
    "revision": "7ea7f8ad1ddcb9c2e1b42804b8a6f40d"
  },
  {
    "url": "assets/js/32.a7abbd94.js",
    "revision": "c7edd49d3b36eb7d034380c1c6beb606"
  },
  {
    "url": "assets/js/33.be6b74e6.js",
    "revision": "f6e1f7360a4bdd3901aa93a1bc815f60"
  },
  {
    "url": "assets/js/34.d171a1f9.js",
    "revision": "b2250b5b9bd2e6d4ea92c397ecd283ce"
  },
  {
    "url": "assets/js/35.e68c7f9e.js",
    "revision": "2cec189251757b2d86e0bf7aa96f9eb5"
  },
  {
    "url": "assets/js/36.313dec85.js",
    "revision": "577a0137eea6bd286c9420b5cb63b2c3"
  },
  {
    "url": "assets/js/37.ddebe4b0.js",
    "revision": "c6a4a8c2ce1c4dbe3bbc2e21cb3d9c43"
  },
  {
    "url": "assets/js/38.9fa2442b.js",
    "revision": "b363a0af51513a529310ff1e910debca"
  },
  {
    "url": "assets/js/39.d92e8c71.js",
    "revision": "263613b5e4b4c21bffe22128ac3aacd5"
  },
  {
    "url": "assets/js/40.ae487d0a.js",
    "revision": "be4a8e4b32900a887777d5f537e994f6"
  },
  {
    "url": "assets/js/41.466f6911.js",
    "revision": "e0b293072d2ea6a547b1de0bc8eade3b"
  },
  {
    "url": "assets/js/42.2080f7c3.js",
    "revision": "015b4436fc38cf9fddcb05e8d1760167"
  },
  {
    "url": "assets/js/43.8ab711d9.js",
    "revision": "33ee2d04f5b3bcd88264ef7ecec132ee"
  },
  {
    "url": "assets/js/44.2cc2a198.js",
    "revision": "8089ceae1c014f5ba7aaf3955f560aaf"
  },
  {
    "url": "assets/js/45.f230b266.js",
    "revision": "4233abe241f422aaa6b2d9be06efdaef"
  },
  {
    "url": "assets/js/46.03a620bb.js",
    "revision": "c9e0ea823597a4e4db5587a82bdf80fb"
  },
  {
    "url": "assets/js/47.228018d7.js",
    "revision": "7b6e5efedb2c32464d59f210b931d0b8"
  },
  {
    "url": "assets/js/48.1cfdf88f.js",
    "revision": "2f63fa3ce1fd5539995487ac1b7325a1"
  },
  {
    "url": "assets/js/49.cc619cd0.js",
    "revision": "5b710c70492aba6c751ae3d959f0e64b"
  },
  {
    "url": "assets/js/50.ddc87efb.js",
    "revision": "e62298ae2ac9c46209ba0934bace0c40"
  },
  {
    "url": "assets/js/51.d017ce5b.js",
    "revision": "538d560f739c71e2dac746e2ca761f21"
  },
  {
    "url": "assets/js/52.e4d136be.js",
    "revision": "c7d2059718d93f016889fa91f1261d3c"
  },
  {
    "url": "assets/js/53.81240672.js",
    "revision": "cf0a648a97a36f461111f1435cc02d5c"
  },
  {
    "url": "assets/js/54.2154be46.js",
    "revision": "72b06051b379dccfc93e2c7c6e9d59a7"
  },
  {
    "url": "assets/js/55.d5a12be6.js",
    "revision": "ba5438e6985ce793b8e812f43dbf4a8e"
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
    "url": "assets/js/8.2711d3a4.js",
    "revision": "3cedb57d4cba5dfcb4e0e7031263971a"
  },
  {
    "url": "assets/js/9.24177e4a.js",
    "revision": "e6113fee8b46c44b61405c83ad8eaad0"
  },
  {
    "url": "assets/js/app.ba4f0fb8.js",
    "revision": "d172bfad8b723ec6e157747971d762d5"
  },
  {
    "url": "assets/js/vuejs-paginate.1e4ded1a.js",
    "revision": "1e979a049cf867ecd78309dbb18c7bee"
  },
  {
    "url": "category/aria/index.html",
    "revision": "61f805d078c5a60ac9b91dadcc21e16d"
  },
  {
    "url": "category/html/index.html",
    "revision": "fcee8ac023ae54135381a2849e5ddeda"
  },
  {
    "url": "category/index.html",
    "revision": "56e0498129cc7f9ef28735956358b896"
  },
  {
    "url": "category/news/index.html",
    "revision": "c39ce270fccf6c969ae2c1cdde5e5b07"
  },
  {
    "url": "category/packages/index.html",
    "revision": "1865372ebad1d40a9c73db0b86488db2"
  },
  {
    "url": "category/spa/index.html",
    "revision": "fc9c613a1d6b60107d3e992abe01282c"
  },
  {
    "url": "category/tools/index.html",
    "revision": "0ce2a154ab50a1d4cbd77512a33b6ef0"
  },
  {
    "url": "category/wcag/index.html",
    "revision": "00de859555a39c8b5c7a45b1e22a4d1f"
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
    "revision": "ca913f96c4ab01f285e58505fee54db8"
  },
  {
    "url": "posts/index.html",
    "revision": "17bfaf4ad82626777228f3e582205aa9"
  },
  {
    "url": "posts/post-test/index.html",
    "revision": "748a480bfd5215de850d0bca487f95ca"
  },
  {
    "url": "project/how-to-contribute.html",
    "revision": "c10ef51456543f09e531508b06c0f957"
  },
  {
    "url": "project/index.html",
    "revision": "426e0f0c582ebb51c96665f33fe423ce"
  },
  {
    "url": "project/people.html",
    "revision": "21b95678bf92adaaf730f5e11c56bb55"
  },
  {
    "url": "project/resources.html",
    "revision": "5d6df48737fea6b99751da828a5519db"
  },
  {
    "url": "project/supporting.html",
    "revision": "bd1c786ad2958437c8c58538828f71f9"
  },
  {
    "url": "project/tools-testing.html",
    "revision": "d07867500a70639ac30230a55a028ed9"
  },
  {
    "url": "project/vue-a11y-checklist.html",
    "revision": "463f8259e3a8eb84bfa92937d94b1b82"
  },
  {
    "url": "pt/categoria/aria/index.html",
    "revision": "756fb06b3d11477e63cf2e788ac3baf4"
  },
  {
    "url": "pt/categoria/html/index.html",
    "revision": "131139c95dd8f7b3a8e533753fd95d52"
  },
  {
    "url": "pt/categoria/index.html",
    "revision": "5e39d5ef95dc3f10f90769389f02e345"
  },
  {
    "url": "pt/categoria/novidades/index.html",
    "revision": "73b139c6ac969427c47612941b3a2d54"
  },
  {
    "url": "pt/categoria/packages/index.html",
    "revision": "154a71e9b9b9c02d8f3fd950e7f74e15"
  },
  {
    "url": "pt/categoria/spa/index.html",
    "revision": "91d2c4c4aeacc7e437fcf229c9a8ecad"
  },
  {
    "url": "pt/categoria/tools/index.html",
    "revision": "d1410b671256f81271b4e9eb655a3c5d"
  },
  {
    "url": "pt/categoria/wcag/index.html",
    "revision": "443a5df030a3a670ff9441076ab91f11"
  },
  {
    "url": "pt/configuracoes/index.html",
    "revision": "fc0a607be4b7aa62c443ef20ffaa5b8d"
  },
  {
    "url": "pt/index.html",
    "revision": "35f053f27d5edfa7b7844ee668e6319a"
  },
  {
    "url": "pt/posts/index.html",
    "revision": "8060c9234dddf1e215470cf48aa553b9"
  },
  {
    "url": "pt/posts/posts-de-teste/index.html",
    "revision": "fbe4404f623a1c90b9c43f4ceca3e033"
  },
  {
    "url": "pt/projeto/apoiando.html",
    "revision": "f3e33f180ec6c2c51782913fb98025bc"
  },
  {
    "url": "pt/projeto/como-contribuir.html",
    "revision": "b712ddaf2870543371e817b1d656c01a"
  },
  {
    "url": "pt/projeto/ferramentas-e-testes.html",
    "revision": "8810a7be37d197a08fa794e1f69e9d6d"
  },
  {
    "url": "pt/projeto/index.html",
    "revision": "4f3ea96ef9c72b477d2c256e0ebfb832"
  },
  {
    "url": "pt/projeto/links-uteis.html",
    "revision": "dcc6e116b2f87fe6e6c4cb2c70dab451"
  },
  {
    "url": "pt/projeto/pessoas.html",
    "revision": "a8efa9b5b5391c3da80dd3b1f9a78d2b"
  },
  {
    "url": "pt/projeto/vue-a11y-checklist.html",
    "revision": "297c85f0b50c738b817b85d0909882af"
  },
  {
    "url": "pt/receitas/contribua.html",
    "revision": "0de7e2eae204d34667bcc9c32b0e901c"
  },
  {
    "url": "pt/receitas/dicas/atributos-aria-no-vue.html",
    "revision": "65e62152d9fbd5abf43a62756d1cb9e8"
  },
  {
    "url": "pt/receitas/index.html",
    "revision": "18caed417fef3ddb3f1f6f44f852f882"
  },
  {
    "url": "pt/receitas/widgets/accordion.html",
    "revision": "25ea65fb1b9acd82ca2350306f033c5a"
  },
  {
    "url": "pt/receitas/widgets/alert.html",
    "revision": "c018cd23176ac728e682fe108915d9af"
  },
  {
    "url": "pt/receitas/widgets/breadcrumbs.html",
    "revision": "b05381ccd2ea6978a6a4bc4af71898ea"
  },
  {
    "url": "pt/receitas/widgets/card.html",
    "revision": "c3f8debbe3840162cf9c7df49b1d4809"
  },
  {
    "url": "pt/receitas/widgets/dialog.html",
    "revision": "901027fc853be9b276e18ccbf50ae04e"
  },
  {
    "url": "pt/receitas/widgets/navegacao-mobile.html",
    "revision": "3d09ce326abc02a1ff604952b8f027f3"
  },
  {
    "url": "pt/receitas/widgets/pular-links.html",
    "revision": "fa5465af1c33597af9bc8c568d9246f8"
  },
  {
    "url": "pt/receitas/widgets/tabs.html",
    "revision": "438b3aaa54903f0b1ddd21c515048b19"
  },
  {
    "url": "recipes/contribute.html",
    "revision": "2fc1350d630dd6ad4be29a364d8217be"
  },
  {
    "url": "recipes/index.html",
    "revision": "7a0c2e2b10fb92ecae481b279684bfbc"
  },
  {
    "url": "recipes/tips/aria-attributes-in-vue.html",
    "revision": "e1c352bcab611e1247c290a6a1b3e825"
  },
  {
    "url": "recipes/widgets/accordion.html",
    "revision": "533d61b839dc6a27e1f86ab8a821f73b"
  },
  {
    "url": "recipes/widgets/alert.html",
    "revision": "40339582abcd76e23f7c0e81478de052"
  },
  {
    "url": "recipes/widgets/breadcrumbs.html",
    "revision": "f22246c4e9fb897eef6383dad440befc"
  },
  {
    "url": "recipes/widgets/card.html",
    "revision": "e77f9c14ec48109c37f6d6458dc1b9f8"
  },
  {
    "url": "recipes/widgets/dialog.html",
    "revision": "872232c1f01051712d069a4438b18890"
  },
  {
    "url": "recipes/widgets/mobile-navigation.html",
    "revision": "1863c88a282f63f8c75a9b317aac3917"
  },
  {
    "url": "recipes/widgets/skip-links.html",
    "revision": "c09ed99c91d339b07c993a2345c9d980"
  },
  {
    "url": "recipes/widgets/tabs.html",
    "revision": "5696a8d1fdeff5c6ec9f34c02bae36d3"
  },
  {
    "url": "settings/index.html",
    "revision": "51d812ff720da55c9633efc06ce62ade"
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
