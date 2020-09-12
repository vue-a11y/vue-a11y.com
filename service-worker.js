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
    "revision": "7a10a0487135acce820f36ffc2a30fee"
  },
  {
    "url": "assets/css/0.styles.32b60fbc.css",
    "revision": "c1319584393f9f7a19477ba6a117bf5a"
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
    "url": "assets/js/1.f5145fc4.js",
    "revision": "ccea973c6a01c44ff22a86d25cf35c82"
  },
  {
    "url": "assets/js/10.a3cdff60.js",
    "revision": "187bfed3cb05c68c574f2db3bd169cc4"
  },
  {
    "url": "assets/js/11.4dfdd8b5.js",
    "revision": "3257e482210d2e0589d7daf7e2fc8aac"
  },
  {
    "url": "assets/js/12.96cdfdff.js",
    "revision": "7d61eb915d6c613d6b17873d0f389f0a"
  },
  {
    "url": "assets/js/13.6986486c.js",
    "revision": "d103971987a8cbb157f4a739c5243764"
  },
  {
    "url": "assets/js/14.86b5bc12.js",
    "revision": "d4b6c1e10250519a9b163141d025d947"
  },
  {
    "url": "assets/js/15.271e7219.js",
    "revision": "99900b6a56ff6183c33bcf838ec3d981"
  },
  {
    "url": "assets/js/16.1eea1020.js",
    "revision": "0ef2caccd19e54c4b5df417b353f3c1d"
  },
  {
    "url": "assets/js/17.c5765595.js",
    "revision": "cff64d05611a8bea53ab748cf43885dd"
  },
  {
    "url": "assets/js/18.b837a370.js",
    "revision": "65b0be6a752070eb8dd22053c2449c1c"
  },
  {
    "url": "assets/js/19.c5c311c8.js",
    "revision": "8a470958389d3a5f0260fb3be050470c"
  },
  {
    "url": "assets/js/2.0ebde391.js",
    "revision": "33cd6249370254628c4a44577379a17f"
  },
  {
    "url": "assets/js/20.2822e394.js",
    "revision": "628f2a44b4ce1312031714dc8c8dec1f"
  },
  {
    "url": "assets/js/21.9e2b4d38.js",
    "revision": "329573887d104adc8e84a61ff5c17b1f"
  },
  {
    "url": "assets/js/22.4922e12b.js",
    "revision": "8c98c01d05274509e9e156c67ac8456e"
  },
  {
    "url": "assets/js/23.d8ac5ed7.js",
    "revision": "123b9d7d5fc8e955cc9e6f8626c18747"
  },
  {
    "url": "assets/js/24.0a4423dd.js",
    "revision": "88a8ca455fe6cacf59f601c26c651540"
  },
  {
    "url": "assets/js/25.8c54e6b5.js",
    "revision": "18048f11c4c8a9727f3638f758bd0558"
  },
  {
    "url": "assets/js/26.b1fe9eca.js",
    "revision": "ce879a7116c6eee622fce5709ef6f49e"
  },
  {
    "url": "assets/js/27.4c4fe3bd.js",
    "revision": "74336640e31930e14bd02aeecbb85ff6"
  },
  {
    "url": "assets/js/28.9f3ada52.js",
    "revision": "21029b70f2d55baad8c64f5b0358faf5"
  },
  {
    "url": "assets/js/29.5440bbe9.js",
    "revision": "0f93db2e9a444f280385431170255c29"
  },
  {
    "url": "assets/js/3.c550d7a4.js",
    "revision": "e51addd246cfaa15b64d54556894744d"
  },
  {
    "url": "assets/js/30.205a251c.js",
    "revision": "6aae9508fa19c34ee95cb26718d7b9d2"
  },
  {
    "url": "assets/js/31.a36b5728.js",
    "revision": "831bec5a50e49bffa57a5df176ec9149"
  },
  {
    "url": "assets/js/32.4d0bb7ff.js",
    "revision": "0f7046f87dcce670921c3793ce36c80e"
  },
  {
    "url": "assets/js/33.cdd297c5.js",
    "revision": "b56420ad0f865ee0762e6f112b0a4976"
  },
  {
    "url": "assets/js/34.508777a0.js",
    "revision": "e10d7cd08094f913f5cd8504bd82f7c0"
  },
  {
    "url": "assets/js/35.6addb78f.js",
    "revision": "b6d2a6cf3c1dfabeccdffc7f8b64b6da"
  },
  {
    "url": "assets/js/36.3b1117be.js",
    "revision": "49ef02e4a047a094a9bf789aeddad03e"
  },
  {
    "url": "assets/js/37.5da10e39.js",
    "revision": "fc893ed91c90c5ff47f53f9492eece0e"
  },
  {
    "url": "assets/js/38.913325be.js",
    "revision": "58f136fa200aa0b5b31bf2c998f58d5d"
  },
  {
    "url": "assets/js/39.a0d572da.js",
    "revision": "9260d7e5c0148e23f194851bc197a5f3"
  },
  {
    "url": "assets/js/40.db96ac80.js",
    "revision": "f6666f1b03670d969cddbba5aa44b2f4"
  },
  {
    "url": "assets/js/41.545466bb.js",
    "revision": "fb46e3d55897fc7172da89984f5df6db"
  },
  {
    "url": "assets/js/42.70a8d5e1.js",
    "revision": "3c0ca472ca02d255a575b41bf2e625ea"
  },
  {
    "url": "assets/js/43.3e6419aa.js",
    "revision": "54a24e78249ea882d2cb5c6056f8a928"
  },
  {
    "url": "assets/js/44.7741a02b.js",
    "revision": "de85fc04278f8149ba6b114e7fade390"
  },
  {
    "url": "assets/js/45.08141c48.js",
    "revision": "d95c1bea948eb1a8d04c6b0be020b5de"
  },
  {
    "url": "assets/js/46.91d387c5.js",
    "revision": "bdbeecd689c108c6a95da966245875d3"
  },
  {
    "url": "assets/js/47.f486011f.js",
    "revision": "b571c3aa7e4974e81c76906689c2f087"
  },
  {
    "url": "assets/js/48.d6440e50.js",
    "revision": "ec7ef94810f894d6d8c6ad786123a4ad"
  },
  {
    "url": "assets/js/49.7c3092b7.js",
    "revision": "de1268c2b699ed6fa77a48c0a88798d8"
  },
  {
    "url": "assets/js/50.4641c488.js",
    "revision": "40ce972b2a43e4d4576801f890e97d58"
  },
  {
    "url": "assets/js/51.9a552c32.js",
    "revision": "c0721d7723276f8a90db3462b5f9a538"
  },
  {
    "url": "assets/js/52.eb4b39b6.js",
    "revision": "729a11077ee99e9b0676c2babc3851fe"
  },
  {
    "url": "assets/js/53.b53343bb.js",
    "revision": "46d2d95bd82baa41855bd8cd29cf1190"
  },
  {
    "url": "assets/js/54.1cbb6614.js",
    "revision": "611b302d6f213579e4f265185b530928"
  },
  {
    "url": "assets/js/6.52d79db5.js",
    "revision": "24c2d2ae75728ec92e55f6ed37ae9eb5"
  },
  {
    "url": "assets/js/7.efc748cf.js",
    "revision": "483807ca8aee674ba9519b1aac8857f6"
  },
  {
    "url": "assets/js/8.05dcc6a9.js",
    "revision": "62d43914667c40c4596db4df4e92da1b"
  },
  {
    "url": "assets/js/9.f3096d5e.js",
    "revision": "71d3c51fe498bf1d006dad05784b71e8"
  },
  {
    "url": "assets/js/app.67628b9d.js",
    "revision": "90119554b4d06abc3754ab41608f4ced"
  },
  {
    "url": "assets/js/vuejs-paginate.7dd651a9.js",
    "revision": "4aa6691ca162097269cecac15273132d"
  },
  {
    "url": "category/aria/index.html",
    "revision": "9f80cfe6d1f61e6de15a431cc70aabaa"
  },
  {
    "url": "category/html/index.html",
    "revision": "965519295546425ff0523fe8dd0e668a"
  },
  {
    "url": "category/index.html",
    "revision": "342eeb2b046b29c541c142e9b121a587"
  },
  {
    "url": "category/news/index.html",
    "revision": "86adc523ae3dc7df6246027fc713b27a"
  },
  {
    "url": "category/packages/index.html",
    "revision": "4471127de84f77a295a751a66bb0b36f"
  },
  {
    "url": "category/spa/index.html",
    "revision": "7ce821b5bcf8126ed292eb0b8d98f772"
  },
  {
    "url": "category/tools/index.html",
    "revision": "8416ea832d957a86ad6e16f0f4530388"
  },
  {
    "url": "category/wcag/index.html",
    "revision": "19a8f8f3588dfd7eea10b4190c55fcc1"
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
    "revision": "062afe96922093f935ebb259f6f07446"
  },
  {
    "url": "posts/index.html",
    "revision": "12dc6d2ccc32d19217b4b49b3e5776ff"
  },
  {
    "url": "posts/post-test/index.html",
    "revision": "93ad8969a585f911406d113e006aa58e"
  },
  {
    "url": "project/contributors.html",
    "revision": "f3e4f5cc4346aeeb1d7e3d056e858c1f"
  },
  {
    "url": "project/index.html",
    "revision": "e6904b35f2edf64a3246ed256ca60d93"
  },
  {
    "url": "project/resources.html",
    "revision": "8ed0a339239c78dce2e749ef72810891"
  },
  {
    "url": "project/supporting.html",
    "revision": "049ce3d1b64b515fbcf0e3d777fd42a2"
  },
  {
    "url": "project/tools-testing.html",
    "revision": "124119feee31d2d7675d3a8da391f568"
  },
  {
    "url": "project/vue-a11y-checklist.html",
    "revision": "a8ed1567715a7cee711b34bf9a0e3198"
  },
  {
    "url": "pt/categoria/aria/index.html",
    "revision": "d44f5ac855b32ba6a553f9c11e3cca07"
  },
  {
    "url": "pt/categoria/html/index.html",
    "revision": "9ceb5053c3d005179e0d13e9558def53"
  },
  {
    "url": "pt/categoria/index.html",
    "revision": "ea382514c5e01ff46a6ac20a78c8b696"
  },
  {
    "url": "pt/categoria/novidades/index.html",
    "revision": "43123453efe2330cad2b8302ffaea2f2"
  },
  {
    "url": "pt/categoria/packages/index.html",
    "revision": "51eefedebd1e80ce95393beff25faff8"
  },
  {
    "url": "pt/categoria/spa/index.html",
    "revision": "578e49d7279ed7aa43111418b1500cd5"
  },
  {
    "url": "pt/categoria/tools/index.html",
    "revision": "7464dcb8b7523741c7827e7cb16655a2"
  },
  {
    "url": "pt/categoria/wcag/index.html",
    "revision": "d29e4b17920603ee6e270567ba97ea3f"
  },
  {
    "url": "pt/configuracoes/index.html",
    "revision": "086c2f0182dda8d919f9b91bb731f337"
  },
  {
    "url": "pt/index.html",
    "revision": "b0f4d14fb1d12124ab32fcd5cbd7b6a7"
  },
  {
    "url": "pt/posts/index.html",
    "revision": "53437d52b228d4d7052296dc17d18c78"
  },
  {
    "url": "pt/posts/posts-de-teste/index.html",
    "revision": "08898c1759aff37fd514b0f0c9d1476b"
  },
  {
    "url": "pt/projeto/apoiando.html",
    "revision": "18bd9e6095da56f8279f26e854f29d0b"
  },
  {
    "url": "pt/projeto/contribuidores.html",
    "revision": "05ade8966e56f65160143d6b5a0fbf66"
  },
  {
    "url": "pt/projeto/ferramentas-e-testes.html",
    "revision": "f7bf656d5d86eefaba6924fa13408fd2"
  },
  {
    "url": "pt/projeto/index.html",
    "revision": "4e4a0d580aeacac38e29b37f248d91d8"
  },
  {
    "url": "pt/projeto/links-uteis.html",
    "revision": "39837ba2995e3d30b11c5bff93505bb2"
  },
  {
    "url": "pt/projeto/vue-a11y-checklist.html",
    "revision": "1475b7d83428bfec617dacb23c711ac0"
  },
  {
    "url": "pt/receitas/contribua.html",
    "revision": "38e76955c49a0fb0a05eb0d65317aec1"
  },
  {
    "url": "pt/receitas/dicas/atributos-aria-no-vue.html",
    "revision": "38ea1fb14257f289d1b7be512d6f877d"
  },
  {
    "url": "pt/receitas/index.html",
    "revision": "c377564f3b2556c5f45fbdd0db2995a6"
  },
  {
    "url": "pt/receitas/widgets/accordion.html",
    "revision": "0e041c8c9ef7533dd4624a0648abf769"
  },
  {
    "url": "pt/receitas/widgets/alert.html",
    "revision": "21fb71c1082fb3274e7d3adec7736c6b"
  },
  {
    "url": "pt/receitas/widgets/breadcrumbs.html",
    "revision": "b47873cbbd8e53f186eab8375072bf7f"
  },
  {
    "url": "pt/receitas/widgets/card.html",
    "revision": "b593a30bc24010997f22847b7d673778"
  },
  {
    "url": "pt/receitas/widgets/dialog.html",
    "revision": "bbbd6ec21a2eb319ca8cc03836c5633b"
  },
  {
    "url": "pt/receitas/widgets/navegacao-mobile.html",
    "revision": "cd9120662e0e680e5c37c8e3cd0e5e22"
  },
  {
    "url": "pt/receitas/widgets/pular-links.html",
    "revision": "c7b1f953591dc559bdc2c77ca61777f1"
  },
  {
    "url": "pt/receitas/widgets/tabs.html",
    "revision": "15193aa78a7227d1df945dcee2b187ec"
  },
  {
    "url": "recipes/contribute.html",
    "revision": "40d5a7c42ad2e6559b7c86a60ef4fc67"
  },
  {
    "url": "recipes/index.html",
    "revision": "3e10b0fe73d22a636ffc5de8440723a9"
  },
  {
    "url": "recipes/tips/aria-attributes-in-vue.html",
    "revision": "047909cccfe631011e182580356e0760"
  },
  {
    "url": "recipes/widgets/accordion.html",
    "revision": "701ed0b474b2e38b0d11b6e9867e7cd4"
  },
  {
    "url": "recipes/widgets/alert.html",
    "revision": "52f033e25e9a5291086cd999c081df61"
  },
  {
    "url": "recipes/widgets/breadcrumbs.html",
    "revision": "58877f6b250254ed69bfa75777e776c5"
  },
  {
    "url": "recipes/widgets/card.html",
    "revision": "ee11a2f0491426374e47b843ba8eda9c"
  },
  {
    "url": "recipes/widgets/dialog.html",
    "revision": "3227217852065bd7e0844fec82a86a05"
  },
  {
    "url": "recipes/widgets/mobile-navigation.html",
    "revision": "6e69321fe0d90e91fa251a3b6d6049a6"
  },
  {
    "url": "recipes/widgets/skip-links.html",
    "revision": "8f479d57db4724f469a0af215511a030"
  },
  {
    "url": "recipes/widgets/tabs.html",
    "revision": "650e2bdc38e51927f6ea0394f4dbd187"
  },
  {
    "url": "settings/index.html",
    "revision": "e8bc733d14c8fe5e1f0fb49e6a1ce5c1"
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
