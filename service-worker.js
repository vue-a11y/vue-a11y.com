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
    "revision": "921bd8031e8b89c98ac9944f525c1772"
  },
  {
    "url": "assets/css/0.styles.d8b1dcc1.css",
    "revision": "e8deded7667f7f7f54b9d999cda7b2ac"
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
    "url": "assets/js/1.9fee25c4.js",
    "revision": "b241827d2c92cb5362e0aaba48721bc0"
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
    "url": "assets/js/15.dd2d6835.js",
    "revision": "8e70547beca0d7b0c43141ac0e685730"
  },
  {
    "url": "assets/js/16.0135caca.js",
    "revision": "b848d2754b248235a24647bbd52f0517"
  },
  {
    "url": "assets/js/17.47f76265.js",
    "revision": "faba11f2cba4977ab5d0ff2dc47a2565"
  },
  {
    "url": "assets/js/18.b837a370.js",
    "revision": "65b0be6a752070eb8dd22053c2449c1c"
  },
  {
    "url": "assets/js/19.7dc56ca9.js",
    "revision": "b73820623a9616ef67f35ae9a8ae72cc"
  },
  {
    "url": "assets/js/2.fbfe1dc1.js",
    "revision": "27d078bc268eb96628166abf0d09ebed"
  },
  {
    "url": "assets/js/20.25e10d25.js",
    "revision": "30df9fc1f3e9bb002436281ddae60e41"
  },
  {
    "url": "assets/js/21.88f24e89.js",
    "revision": "b3c42dffa54728ae112cede54fc5ffc0"
  },
  {
    "url": "assets/js/22.739e0180.js",
    "revision": "ae1bc1f34198a63b13c51fcd0724f3bf"
  },
  {
    "url": "assets/js/23.eca069cd.js",
    "revision": "2db785301be904cfc59b687939a04884"
  },
  {
    "url": "assets/js/24.145616fb.js",
    "revision": "9b79912b83f01b21fc09db91bf4a66ce"
  },
  {
    "url": "assets/js/25.97dd5c07.js",
    "revision": "b9ddc24e4e8ee4205cfa1f902db3e9c1"
  },
  {
    "url": "assets/js/26.900d406c.js",
    "revision": "317f6240ab3b5d0ab6d7f8ce5599a4c0"
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
    "url": "assets/js/3.da1ef992.js",
    "revision": "a312ab95570e8f4cd99de5e0619037d7"
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
    "url": "assets/js/38.b1ef6af0.js",
    "revision": "9948a4b95154fdbfc6f5d4be332d4b56"
  },
  {
    "url": "assets/js/39.da127514.js",
    "revision": "abf3bd6edebff72c602157345d8d1b7a"
  },
  {
    "url": "assets/js/40.1a72b884.js",
    "revision": "e51946bb1617f3c4d017a4013ce0a161"
  },
  {
    "url": "assets/js/41.9998ff76.js",
    "revision": "c6ae14caf3d2648a38a192d5453bcb52"
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
    "url": "assets/js/44.9370e39f.js",
    "revision": "a18cad747b3a8c4516b21de3967e4654"
  },
  {
    "url": "assets/js/45.9203a52c.js",
    "revision": "20fed60ee9e04f1fa328dfd1b5fc8621"
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
    "url": "assets/js/6.20941fd7.js",
    "revision": "d511a564f1edd58005bffe1af63dcff2"
  },
  {
    "url": "assets/js/7.e1c90154.js",
    "revision": "98b644da17724a75ef4d7c02b7ab6f9e"
  },
  {
    "url": "assets/js/8.9ff6f794.js",
    "revision": "a2dd944b90d9bb41623c3c12c13a156c"
  },
  {
    "url": "assets/js/9.b3b7d9a5.js",
    "revision": "fdab34aace655940d3032ca67f46130d"
  },
  {
    "url": "assets/js/app.c8c7850e.js",
    "revision": "dcee4f4b5d9f1f486a339fb98099cee3"
  },
  {
    "url": "assets/js/vuejs-paginate.20dd2929.js",
    "revision": "e661309be3db5bef67430eed32a03cb6"
  },
  {
    "url": "category/aria/index.html",
    "revision": "6f23f7c3c310417de71d10147ebdb969"
  },
  {
    "url": "category/html/index.html",
    "revision": "76e5108a090748a7ce46895fc4b76dcb"
  },
  {
    "url": "category/index.html",
    "revision": "90b071a391bc064912c71bfa499ea129"
  },
  {
    "url": "category/news/index.html",
    "revision": "67532ac127cd104f2a13f53be75f4486"
  },
  {
    "url": "category/packages/index.html",
    "revision": "83700d811666c09b63907d795ec3f933"
  },
  {
    "url": "category/spa/index.html",
    "revision": "dfc4c20b95fb3c6cd4a69c9106fd84e1"
  },
  {
    "url": "category/tools/index.html",
    "revision": "75688d4282edef0dbca81d6c7d21f5ac"
  },
  {
    "url": "category/wcag/index.html",
    "revision": "f633b0b9fe21d526e253af3d61e4f1be"
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
    "revision": "329c3a9eb1f26d2d6a53a629da1c5a0d"
  },
  {
    "url": "posts/index.html",
    "revision": "696e629e519d5066866066214ab23906"
  },
  {
    "url": "posts/post-test/index.html",
    "revision": "1a30c2f4add92dd2f435d940ebe04a5d"
  },
  {
    "url": "project/contributors.html",
    "revision": "852c759ccb02281705d3d4c45d18161c"
  },
  {
    "url": "project/index.html",
    "revision": "b063e90f8cffd10239bfb3bf15c8b0ef"
  },
  {
    "url": "project/resources.html",
    "revision": "6df4c5a2b783c1ff2466ce4566e91b73"
  },
  {
    "url": "project/supporting.html",
    "revision": "a376b6611815e6bbe04e4056d880a652"
  },
  {
    "url": "project/tools-testing.html",
    "revision": "c0eb5d4062a89476759e25d0f3911109"
  },
  {
    "url": "project/vue-a11y-checklist.html",
    "revision": "54f73bedfbd83e0d626439db4028be2a"
  },
  {
    "url": "pt/categoria/aria/index.html",
    "revision": "ba19e8a3a6f36756fb91a09a2b37b864"
  },
  {
    "url": "pt/categoria/html/index.html",
    "revision": "6cdad74d8b6ccbaab79b9ee89febbb4e"
  },
  {
    "url": "pt/categoria/index.html",
    "revision": "840364bb4866ea91007944ebff325689"
  },
  {
    "url": "pt/categoria/novidades/index.html",
    "revision": "bc972c4e56a18345b76135bb8a142911"
  },
  {
    "url": "pt/categoria/packages/index.html",
    "revision": "a7a4956a60ee8be9987a10f6f41273d5"
  },
  {
    "url": "pt/categoria/spa/index.html",
    "revision": "e67fbbcb2ff34f5e37f83d9e676356a6"
  },
  {
    "url": "pt/categoria/tools/index.html",
    "revision": "cc750710e7b53407d9463761b5cab299"
  },
  {
    "url": "pt/categoria/wcag/index.html",
    "revision": "6dc4390b60b5b7f2c82413f0114e13c3"
  },
  {
    "url": "pt/configuracoes/index.html",
    "revision": "f0c0d7152fb3c041d68eb43a5790dae3"
  },
  {
    "url": "pt/index.html",
    "revision": "9455b5495c4d2bc4ed6db1638fedce34"
  },
  {
    "url": "pt/posts/index.html",
    "revision": "7c195c416bee6faefcec007cf9fc6cd5"
  },
  {
    "url": "pt/posts/posts-de-teste/index.html",
    "revision": "32cac35eae123f25d64fd2fc858dea17"
  },
  {
    "url": "pt/projeto/apoiando.html",
    "revision": "c3bd7bac2705a66bea5dec52446ec74e"
  },
  {
    "url": "pt/projeto/contribuidores.html",
    "revision": "26b0d8b50524865242981e87d3ce7379"
  },
  {
    "url": "pt/projeto/ferramentas-e-testes.html",
    "revision": "e5641355ae6aedb3b8d43f2f08ae922d"
  },
  {
    "url": "pt/projeto/index.html",
    "revision": "753eec782ed0bb29ed748b354b728573"
  },
  {
    "url": "pt/projeto/links-uteis.html",
    "revision": "1a6aa388e6a1085c6d41f48c3b73efa4"
  },
  {
    "url": "pt/projeto/vue-a11y-checklist.html",
    "revision": "6767780132fd1c574ef12bb8167bc8e5"
  },
  {
    "url": "pt/receitas/contribua.html",
    "revision": "b62e268ffff59345d1018d6f5d65a110"
  },
  {
    "url": "pt/receitas/dicas/atributos-aria-no-vue.html",
    "revision": "9674bd82135ad40e543b2db66dbcaa27"
  },
  {
    "url": "pt/receitas/index.html",
    "revision": "4a97f1c95e1cb790f0f8be7dddd1e0d2"
  },
  {
    "url": "pt/receitas/widgets/accordion.html",
    "revision": "4ae5fedd5c750e651a86d28daf2b6c42"
  },
  {
    "url": "pt/receitas/widgets/alert.html",
    "revision": "efec4a042a2ba793de52aff7d79b5e92"
  },
  {
    "url": "pt/receitas/widgets/breadcrumbs.html",
    "revision": "64116efec9dd06d77efb31ef7cd2fec6"
  },
  {
    "url": "pt/receitas/widgets/card.html",
    "revision": "ec9b53a1f92be5504f779e94d79a48ec"
  },
  {
    "url": "pt/receitas/widgets/dialog.html",
    "revision": "c8ef00533c13b893de09c0605c39e255"
  },
  {
    "url": "pt/receitas/widgets/navegacao-mobile.html",
    "revision": "81e5e4f76229235f7a10d4517688f2c9"
  },
  {
    "url": "pt/receitas/widgets/pular-links.html",
    "revision": "7656eaed6c80c48187c788b29488ab24"
  },
  {
    "url": "pt/receitas/widgets/tabs.html",
    "revision": "60f62cfb86484125cb7ed0d4ec58079c"
  },
  {
    "url": "recipes/contribute.html",
    "revision": "c197fe4cb8cc7376ce9de3e49fd620fc"
  },
  {
    "url": "recipes/index.html",
    "revision": "8a07d0aeef74a7a5ebae860735e9e36e"
  },
  {
    "url": "recipes/tips/aria-attributes-in-vue.html",
    "revision": "45e51e612122904e27056f09f4446a95"
  },
  {
    "url": "recipes/widgets/accordion.html",
    "revision": "5fecc15f74e318ac9369e4d1c8f67957"
  },
  {
    "url": "recipes/widgets/alert.html",
    "revision": "9122e8e816e890368abdb25d659167b1"
  },
  {
    "url": "recipes/widgets/breadcrumbs.html",
    "revision": "4fdf64aa54cd37196381a90f83615f9f"
  },
  {
    "url": "recipes/widgets/card.html",
    "revision": "529c19ba62b5352ab267d5a38df46e29"
  },
  {
    "url": "recipes/widgets/dialog.html",
    "revision": "f9914812eae7e19a09b1f6f2ac812a4e"
  },
  {
    "url": "recipes/widgets/mobile-navigation.html",
    "revision": "e0463959b6412cfdf8ee632fc4c8dba8"
  },
  {
    "url": "recipes/widgets/skip-links.html",
    "revision": "23f5d2120722d5f13744603683d107a0"
  },
  {
    "url": "recipes/widgets/tabs.html",
    "revision": "fba847cb134d52c654dd92fb75191ba9"
  },
  {
    "url": "settings/index.html",
    "revision": "1df5cf68f97a3cda6238c57b6225c581"
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
