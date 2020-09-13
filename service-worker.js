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
    "revision": "c0017c0dd324bf7f751799ea8705767f"
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
    "url": "assets/js/15.dd0ebfcf.js",
    "revision": "86208bda99f3a7353f2c6bbf0a49bd41"
  },
  {
    "url": "assets/js/16.53a0daa5.js",
    "revision": "fe9586aaaebf3950298b75ac629f67ba"
  },
  {
    "url": "assets/js/17.5da64539.js",
    "revision": "199fd3838fbc6ca82077437343779dfd"
  },
  {
    "url": "assets/js/18.076939a7.js",
    "revision": "470f751ae3a4355dba6136d64b0ae114"
  },
  {
    "url": "assets/js/19.fa6a34f9.js",
    "revision": "c4d8a76be0b244058a04d3294c96792b"
  },
  {
    "url": "assets/js/2.0ebde391.js",
    "revision": "33cd6249370254628c4a44577379a17f"
  },
  {
    "url": "assets/js/20.cde225a4.js",
    "revision": "ec0cbf000d57274e8a53082981990967"
  },
  {
    "url": "assets/js/21.9934f9e2.js",
    "revision": "4431aa77487f901e607a49fd925e1547"
  },
  {
    "url": "assets/js/22.127d7ccd.js",
    "revision": "26c35caef49f75508c596438d740d017"
  },
  {
    "url": "assets/js/23.9f711838.js",
    "revision": "4aaf624db55dd422a12c1d3199cf7da2"
  },
  {
    "url": "assets/js/24.1978decc.js",
    "revision": "81691ede82d86513b4d9e0579bf775f7"
  },
  {
    "url": "assets/js/25.3f5038d8.js",
    "revision": "04d62b8e73335fe53c99ee9ffe36d25e"
  },
  {
    "url": "assets/js/26.7baf6fcb.js",
    "revision": "44e3b42c096784ac7df38bfb0fff983c"
  },
  {
    "url": "assets/js/27.461f75b8.js",
    "revision": "0c95a0437d286309c1aee74b4f20af99"
  },
  {
    "url": "assets/js/28.80a601cd.js",
    "revision": "af205c00faac9b40c78f7be6c1e4833c"
  },
  {
    "url": "assets/js/29.978e1d4c.js",
    "revision": "844fe7157b9a149cbb47214e97ac71b4"
  },
  {
    "url": "assets/js/3.c550d7a4.js",
    "revision": "e51addd246cfaa15b64d54556894744d"
  },
  {
    "url": "assets/js/30.78343090.js",
    "revision": "abddf6f4d960c5900055bcb6e260f30f"
  },
  {
    "url": "assets/js/31.18f405c0.js",
    "revision": "3050ac486abd562d8e3a47c9054b29cc"
  },
  {
    "url": "assets/js/32.549160d1.js",
    "revision": "fd08a050218fe72213eee312352c2fee"
  },
  {
    "url": "assets/js/33.6e4e9c1b.js",
    "revision": "f484ba4e81a4c66f01139225da7d43c6"
  },
  {
    "url": "assets/js/34.10b88b19.js",
    "revision": "961123d4cfc0caa9f6dd93599317ac9e"
  },
  {
    "url": "assets/js/35.b9a046f1.js",
    "revision": "c212a0e9a5cf84ef88b8e5c67b26b79e"
  },
  {
    "url": "assets/js/36.60e0ff09.js",
    "revision": "94dbc2c5e625d1740cdc1b9da7221377"
  },
  {
    "url": "assets/js/37.236224c9.js",
    "revision": "e6755ed31343de2b1359133aae49341e"
  },
  {
    "url": "assets/js/38.1e5762cc.js",
    "revision": "0e97d13ca9248eb558f2509847237a3a"
  },
  {
    "url": "assets/js/39.862b07cf.js",
    "revision": "f939735b68e4a07a1ce8afcb124b7efc"
  },
  {
    "url": "assets/js/40.faed05f2.js",
    "revision": "9c4cf5bf563b55bb2a0a92858764dfa0"
  },
  {
    "url": "assets/js/41.ba36b5ce.js",
    "revision": "a0e7e8d0be26ee7d7ed6891cc608bed0"
  },
  {
    "url": "assets/js/42.f270317f.js",
    "revision": "e6dd4a4e86d9abff94bd001155875713"
  },
  {
    "url": "assets/js/43.61b3c577.js",
    "revision": "5878d631e10742d2dba359900f16e7ec"
  },
  {
    "url": "assets/js/44.6a611fc3.js",
    "revision": "9d83e51cfb9dd5500f9445f84d160002"
  },
  {
    "url": "assets/js/45.243df84b.js",
    "revision": "d778416111bad00273af952778b1e1e2"
  },
  {
    "url": "assets/js/46.5fa23493.js",
    "revision": "f7a77434249507bf9d95cef1aba05ae1"
  },
  {
    "url": "assets/js/47.cd0598a0.js",
    "revision": "7a63a954f33630fdca55d4eca6d55240"
  },
  {
    "url": "assets/js/48.3b6c522c.js",
    "revision": "9c9ee602ea296cace84a3c9cdb8904b4"
  },
  {
    "url": "assets/js/49.1335c0af.js",
    "revision": "a680496866e003ab0d5f634abd8d3d2d"
  },
  {
    "url": "assets/js/50.52d920a3.js",
    "revision": "7a22f344912e56645497563374f05c8f"
  },
  {
    "url": "assets/js/51.550912f2.js",
    "revision": "5700150d20becde48e4edd08e379e83b"
  },
  {
    "url": "assets/js/52.080dcbd5.js",
    "revision": "53e0ef23b3e9ec639f087efb40be74d5"
  },
  {
    "url": "assets/js/53.551ecde3.js",
    "revision": "6cf2e91440c5434fdeb8d0fdb85bbfbd"
  },
  {
    "url": "assets/js/54.02d228eb.js",
    "revision": "544dfa4507d2f4738ddcbf3642e676e2"
  },
  {
    "url": "assets/js/55.79455a7e.js",
    "revision": "ae58b5b67a78837e2b91c23546f69891"
  },
  {
    "url": "assets/js/56.14295836.js",
    "revision": "9015ad1fac6d6aa877544fea145b3962"
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
    "url": "assets/js/app.d6ea4c80.js",
    "revision": "e285ef18da3934a6e7a46e2e953ec4b6"
  },
  {
    "url": "assets/js/vuejs-paginate.7dd651a9.js",
    "revision": "4aa6691ca162097269cecac15273132d"
  },
  {
    "url": "category/aria/index.html",
    "revision": "4d03b0269815ae9ba2019f2084789a52"
  },
  {
    "url": "category/html/index.html",
    "revision": "34a29a1fb4431c0dd1a2e07d1fbe5040"
  },
  {
    "url": "category/index.html",
    "revision": "3ec6047ab8004e76752b8e22ea7b0355"
  },
  {
    "url": "category/news/index.html",
    "revision": "267bdb3d0db00a87260754fa98c9b9d6"
  },
  {
    "url": "category/packages/index.html",
    "revision": "b166894af4a9dd21bebec0a7f7bf619e"
  },
  {
    "url": "category/spa/index.html",
    "revision": "53655204e5769ce8c1e88e78d04cd5a3"
  },
  {
    "url": "category/tools/index.html",
    "revision": "622567995d018a6144d6e886ce13fd21"
  },
  {
    "url": "category/wcag/index.html",
    "revision": "c727fe67f139246362cedb9e3285d27f"
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
    "revision": "c6149bd1f3741ef70b1666e61ffaa8bc"
  },
  {
    "url": "posts/index.html",
    "revision": "65b8d77178550b9cea7230767ad3ef8d"
  },
  {
    "url": "posts/post-test/index.html",
    "revision": "9c5629bfc49df37df0d335b9548c8728"
  },
  {
    "url": "project/how-to-contribute.html",
    "revision": "bd0fb955d9335aef97e7a97b82e9ae5c"
  },
  {
    "url": "project/index.html",
    "revision": "5dc1bd0def8571a7718c6a74681248ef"
  },
  {
    "url": "project/people.html",
    "revision": "d03ede9a00c7038f84182c014ae60011"
  },
  {
    "url": "project/resources.html",
    "revision": "fab775cf0e46a4e20bd501817c220753"
  },
  {
    "url": "project/supporting.html",
    "revision": "54d0bdc34027e4c2b08a0ad2993cc202"
  },
  {
    "url": "project/tools-testing.html",
    "revision": "15fa346cab630067ba5d3edff8e24639"
  },
  {
    "url": "project/vue-a11y-checklist.html",
    "revision": "1037e1fe7a517f91dd734308bb67f8c0"
  },
  {
    "url": "pt/categoria/aria/index.html",
    "revision": "93465bf35adfb19c688572fbad8ec96e"
  },
  {
    "url": "pt/categoria/html/index.html",
    "revision": "d85ef4e012361f529c25a72c9634ea80"
  },
  {
    "url": "pt/categoria/index.html",
    "revision": "307a258b1519696c715e2d81e24eccc8"
  },
  {
    "url": "pt/categoria/novidades/index.html",
    "revision": "bc9d5e8cb67a2ea9e3b629d07c3f604e"
  },
  {
    "url": "pt/categoria/packages/index.html",
    "revision": "020f80fd21c632e0428b654397f56a36"
  },
  {
    "url": "pt/categoria/spa/index.html",
    "revision": "a9b012de08aadbc373344e60334487f3"
  },
  {
    "url": "pt/categoria/tools/index.html",
    "revision": "8a28b378e6e761f1ce0476600494f9af"
  },
  {
    "url": "pt/categoria/wcag/index.html",
    "revision": "404724b57a257cc8b7f96fa94db72007"
  },
  {
    "url": "pt/configuracoes/index.html",
    "revision": "c5078e422e82daa0a0d6f51292fe5487"
  },
  {
    "url": "pt/index.html",
    "revision": "f82731eab98ccf5b7c59125bbe491e08"
  },
  {
    "url": "pt/posts/index.html",
    "revision": "353be115506ef2b1b7932d0d7a507501"
  },
  {
    "url": "pt/posts/posts-de-teste/index.html",
    "revision": "48a02eb663529beb2e8b48633e217023"
  },
  {
    "url": "pt/projeto/apoiando.html",
    "revision": "dd4a6c90a8abffb9ce54a7f09185702f"
  },
  {
    "url": "pt/projeto/como-contribuir.html",
    "revision": "05a87cb04a751310e6b09e03a6afde3b"
  },
  {
    "url": "pt/projeto/ferramentas-e-testes.html",
    "revision": "3e9654a830c6ab7af0526b2541c61326"
  },
  {
    "url": "pt/projeto/index.html",
    "revision": "a1b52eda5c6e279a695325022b13f2e9"
  },
  {
    "url": "pt/projeto/links-uteis.html",
    "revision": "1246589a4ebbfb84ab422dbb72a72765"
  },
  {
    "url": "pt/projeto/pessoas.html",
    "revision": "50733b8f2eb876ec4bf46567b3436a71"
  },
  {
    "url": "pt/projeto/vue-a11y-checklist.html",
    "revision": "a49d5d408a0d0c566eef097cf44af259"
  },
  {
    "url": "pt/receitas/contribua.html",
    "revision": "d592a9a029215170d53df24b37cc316c"
  },
  {
    "url": "pt/receitas/dicas/atributos-aria-no-vue.html",
    "revision": "ff4696a9974cffa79f0870b7490b30ce"
  },
  {
    "url": "pt/receitas/index.html",
    "revision": "87ac6aeae4d5fb025b5bfebeb92f585b"
  },
  {
    "url": "pt/receitas/widgets/accordion.html",
    "revision": "02bb433247042eeaed509b7a3e9b4c87"
  },
  {
    "url": "pt/receitas/widgets/alert.html",
    "revision": "25385d41eb2d1ede88ee065519e946ac"
  },
  {
    "url": "pt/receitas/widgets/breadcrumbs.html",
    "revision": "1bf469591847a1b29a91da22822acb2a"
  },
  {
    "url": "pt/receitas/widgets/card.html",
    "revision": "896504db436c5c6aad86285ff3d99121"
  },
  {
    "url": "pt/receitas/widgets/dialog.html",
    "revision": "86ed995dac416c43e16ff7d64c8ef66b"
  },
  {
    "url": "pt/receitas/widgets/navegacao-mobile.html",
    "revision": "4635e99204815faa89515bb7199df95e"
  },
  {
    "url": "pt/receitas/widgets/pular-links.html",
    "revision": "acf3764a0aa1ee220c203b9cad755288"
  },
  {
    "url": "pt/receitas/widgets/tabs.html",
    "revision": "9fa860aeaa1dc7659578434fc9a12065"
  },
  {
    "url": "recipes/contribute.html",
    "revision": "681f2841789c4a7b7e1e387c182b6b59"
  },
  {
    "url": "recipes/index.html",
    "revision": "94ebe1717c91040068562fd1705db070"
  },
  {
    "url": "recipes/tips/aria-attributes-in-vue.html",
    "revision": "26206280d50ad73cef37a2aa8d1a4fc4"
  },
  {
    "url": "recipes/widgets/accordion.html",
    "revision": "55cc6c1681a9741112d5786f5045baaf"
  },
  {
    "url": "recipes/widgets/alert.html",
    "revision": "397fd7528a782e0e3b0af7bb12e4be97"
  },
  {
    "url": "recipes/widgets/breadcrumbs.html",
    "revision": "f60bb194da53b00651c1f998bd8275ea"
  },
  {
    "url": "recipes/widgets/card.html",
    "revision": "5f927c48d0a6322c518dd705c5a3b933"
  },
  {
    "url": "recipes/widgets/dialog.html",
    "revision": "bdb046719b3362c47a59829da01655db"
  },
  {
    "url": "recipes/widgets/mobile-navigation.html",
    "revision": "dc0565cc90f5164a8a3bbf06c177c1ad"
  },
  {
    "url": "recipes/widgets/skip-links.html",
    "revision": "ae70c3bc367d21dc91c60026f45b786b"
  },
  {
    "url": "recipes/widgets/tabs.html",
    "revision": "8623a082dfcbbca356bc56c187c691ac"
  },
  {
    "url": "settings/index.html",
    "revision": "75d7eeb20a9e4a79b4486637aecaf140"
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
