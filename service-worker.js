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
    "revision": "e6fc7644cd04c3688d558fa6f2e0ab00"
  },
  {
    "url": "assets/css/0.styles.0f335e0d.css",
    "revision": "8ee861539b0693621ca0f2f53dfae866"
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
    "url": "assets/js/15.6bc25288.js",
    "revision": "4095ef0c90e9a9754403f576f7a3fe6e"
  },
  {
    "url": "assets/js/16.0135caca.js",
    "revision": "b848d2754b248235a24647bbd52f0517"
  },
  {
    "url": "assets/js/17.13717119.js",
    "revision": "1d9a668289439fbc8b8112a9df4b0483"
  },
  {
    "url": "assets/js/18.89eccf59.js",
    "revision": "f36d0263ddb92f8ed674272868971acf"
  },
  {
    "url": "assets/js/19.f3940886.js",
    "revision": "6969f9e7019c3d4f7a1e51de055150f6"
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
    "url": "assets/js/21.000bff55.js",
    "revision": "acc20d9390c76a7d43fc54bf45bb5924"
  },
  {
    "url": "assets/js/22.127e9463.js",
    "revision": "e1d133144ea59746fadb71222d26795a"
  },
  {
    "url": "assets/js/23.af06001e.js",
    "revision": "642c4d4279998e05bc95056b9091738f"
  },
  {
    "url": "assets/js/24.9d88d96c.js",
    "revision": "bdc5c24cfa09211ee8f7870c6c64ccab"
  },
  {
    "url": "assets/js/25.e70e4b0b.js",
    "revision": "65b46e20ce23909a81a4490222874acd"
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
    "url": "assets/js/6.859fba2b.js",
    "revision": "aa147d8d6f39e95e8f13fe0f976ca5ea"
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
    "url": "assets/js/9.014b2bf6.js",
    "revision": "61460b7035b4c36c7f5029f70e64b951"
  },
  {
    "url": "assets/js/app.998f0783.js",
    "revision": "d92f9bc32956e23a50a57893af047975"
  },
  {
    "url": "assets/js/vuejs-paginate.20dd2929.js",
    "revision": "e661309be3db5bef67430eed32a03cb6"
  },
  {
    "url": "category/aria/index.html",
    "revision": "a39ae8a469eebbe3d730e0ba257500ed"
  },
  {
    "url": "category/html/index.html",
    "revision": "8489b27f422986d5dbd0b42cc05e8baf"
  },
  {
    "url": "category/index.html",
    "revision": "901219855e8b50b3587dd3b2dad18e28"
  },
  {
    "url": "category/news/index.html",
    "revision": "f7af7373196044fbdaf7a0af6eea5a98"
  },
  {
    "url": "category/packages/index.html",
    "revision": "d7e2ddf3afb34b80f3f632a1fa1f1077"
  },
  {
    "url": "category/spa/index.html",
    "revision": "88eb8985bb2b1ad51f7bddaf4c73c008"
  },
  {
    "url": "category/tools/index.html",
    "revision": "e83548b73a89741679c066a770ae8577"
  },
  {
    "url": "category/wcag/index.html",
    "revision": "e35cf976c43e49e45b678a5cb53b26ed"
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
    "revision": "af05e6698c5d71719745377766e0e413"
  },
  {
    "url": "posts/index.html",
    "revision": "db4810c913be26e94992ff42178b6cfc"
  },
  {
    "url": "posts/post-test/index.html",
    "revision": "aec7f8a9dd91112ab93cb78e11c4810b"
  },
  {
    "url": "project/contributors.html",
    "revision": "2826260695c3e5e76d21846819384544"
  },
  {
    "url": "project/index.html",
    "revision": "441eda9585b1f3047dee5d5dca4d47b1"
  },
  {
    "url": "project/resources.html",
    "revision": "ffb8ff9b7feec22e47a48aa391d5a787"
  },
  {
    "url": "project/supporting.html",
    "revision": "fb33f790f679001c6109d5f4b3121727"
  },
  {
    "url": "project/tools-testing.html",
    "revision": "866e73c58484595b58baec302960c5b5"
  },
  {
    "url": "project/vue-a11y-checklist.html",
    "revision": "5e4e5288d7f04645181a4271a96954f7"
  },
  {
    "url": "pt/categoria/aria/index.html",
    "revision": "b395e635c0b2bbc5c7e4c683ea9c5c74"
  },
  {
    "url": "pt/categoria/html/index.html",
    "revision": "f724dc50929662f5d2f6ff94f3713ffe"
  },
  {
    "url": "pt/categoria/index.html",
    "revision": "0423ba5b0e1513f9cb4c8461307f5402"
  },
  {
    "url": "pt/categoria/novidades/index.html",
    "revision": "503684651b8a4821600cd27f9588e577"
  },
  {
    "url": "pt/categoria/packages/index.html",
    "revision": "a2b3b1571161aec8928076c9e8b8e255"
  },
  {
    "url": "pt/categoria/spa/index.html",
    "revision": "ccdc0d096fdd76101d19822b784307eb"
  },
  {
    "url": "pt/categoria/tools/index.html",
    "revision": "59f84f3ba30675e126a9529ee0cdf3d4"
  },
  {
    "url": "pt/categoria/wcag/index.html",
    "revision": "e8f49db1122af88eaa82e549af43f1b3"
  },
  {
    "url": "pt/configuracoes/index.html",
    "revision": "b44bb549650b1f51a03213a3229afcc5"
  },
  {
    "url": "pt/index.html",
    "revision": "7692dde71365434f536077ec66d2d515"
  },
  {
    "url": "pt/posts/index.html",
    "revision": "bf23fb1e1a604667a800521f75e64bf0"
  },
  {
    "url": "pt/posts/posts-de-teste/index.html",
    "revision": "a6ab9e174b165017ad84daa202b6de4f"
  },
  {
    "url": "pt/projeto/apoiando.html",
    "revision": "5abbee54e4848c48e7e518b99e03a158"
  },
  {
    "url": "pt/projeto/contribuidores.html",
    "revision": "bc12613dfbc238715154dc302f9e76ef"
  },
  {
    "url": "pt/projeto/ferramentas-e-testes.html",
    "revision": "b32ba5adc3866ef04f9cf43ddcc91f55"
  },
  {
    "url": "pt/projeto/index.html",
    "revision": "db51c350af0cb5a5a7c000f78769c931"
  },
  {
    "url": "pt/projeto/links-uteis.html",
    "revision": "8c64efd4e18ec0c8b091a71e976c7719"
  },
  {
    "url": "pt/projeto/vue-a11y-checklist.html",
    "revision": "9c769594815a3542a87e188e10f5335a"
  },
  {
    "url": "pt/receitas/contribua.html",
    "revision": "c02489a83c5fcb64e9a16294f369b5e1"
  },
  {
    "url": "pt/receitas/dicas/atributos-aria-no-vue.html",
    "revision": "05220a616060e2037362f0a19e42b541"
  },
  {
    "url": "pt/receitas/index.html",
    "revision": "5ad53a3ca17a4273035c17b1296ceb6f"
  },
  {
    "url": "pt/receitas/widgets/accordion.html",
    "revision": "cabd3f91cb6b64775418bff1b0f2d74b"
  },
  {
    "url": "pt/receitas/widgets/alert.html",
    "revision": "214d51a42971d23280debf1a479a2909"
  },
  {
    "url": "pt/receitas/widgets/breadcrumbs.html",
    "revision": "0de8d47150ea81416aaea0db2437adc8"
  },
  {
    "url": "pt/receitas/widgets/card.html",
    "revision": "d4720ac2ec02b9ac8380308d88c41da7"
  },
  {
    "url": "pt/receitas/widgets/dialog.html",
    "revision": "c38690775213b5c25ccd0ef65ae89b2a"
  },
  {
    "url": "pt/receitas/widgets/navegacao-mobile.html",
    "revision": "de2764e6c5fba7b0c5df63b7dc297602"
  },
  {
    "url": "pt/receitas/widgets/pular-links.html",
    "revision": "a029ddf126fa3f7621e3c25a834bb407"
  },
  {
    "url": "pt/receitas/widgets/tabs.html",
    "revision": "74d3d166f15ef1118ec7316e6f615694"
  },
  {
    "url": "recipes/contribute.html",
    "revision": "1a0e63810bc976b6f40d639687c3f580"
  },
  {
    "url": "recipes/index.html",
    "revision": "a8b801a3ff00d4094b9c87f50f73a1e8"
  },
  {
    "url": "recipes/tips/aria-attributes-in-vue.html",
    "revision": "bb4aa031aabc432c3beafff8fc98d305"
  },
  {
    "url": "recipes/widgets/accordion.html",
    "revision": "705fa9269109a89bb6ca58c42d5679bf"
  },
  {
    "url": "recipes/widgets/alert.html",
    "revision": "801b2fcc98c9ba1c5042c783a4bf1500"
  },
  {
    "url": "recipes/widgets/breadcrumbs.html",
    "revision": "0f7c6c7b70b75b0eab588e837f5e6a65"
  },
  {
    "url": "recipes/widgets/card.html",
    "revision": "e95b631a94f6e51afa540018517b116f"
  },
  {
    "url": "recipes/widgets/dialog.html",
    "revision": "e4b94f956345b50bdc01866e6012d47b"
  },
  {
    "url": "recipes/widgets/mobile-navigation.html",
    "revision": "aa84a7aabf0cd4b7424e210651086816"
  },
  {
    "url": "recipes/widgets/skip-links.html",
    "revision": "7ca56f1d63f76cadc8f924abe1f9ebf4"
  },
  {
    "url": "recipes/widgets/tabs.html",
    "revision": "5c92b94734540996c2d87c7186d79db0"
  },
  {
    "url": "settings/index.html",
    "revision": "98c44c4cc5ce1ffe0734da6d133d3cb7"
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
