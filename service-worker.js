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
    "revision": "5db930baca4fb89912c1b09e7be69eaa"
  },
  {
    "url": "assets/css/0.styles.2bcbe07c.css",
    "revision": "c1682b89fc2aa52022d05dccb0dc8991"
  },
  {
    "url": "assets/img/Jon_Board.f1f14fb1.png",
    "revision": "f1f14fb136b3b74f0f075fb323a972fb"
  },
  {
    "url": "assets/img/rendered_md_example.ecb638e1.png",
    "revision": "ecb638e134d437c6147f903b420c0a7c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7c57d461.js",
    "revision": "b68bedabff79d7a7deabe7751c76a734"
  },
  {
    "url": "assets/js/11.988e0a5c.js",
    "revision": "b4ce2601405ed3149b700069d87d28fd"
  },
  {
    "url": "assets/js/2.aa49387d.js",
    "revision": "c52a9a4d267a75c073c00d7fcf2cf3c6"
  },
  {
    "url": "assets/js/3.36af70db.js",
    "revision": "4285050dd72b8d598e9cc550240bfeec"
  },
  {
    "url": "assets/js/4.5364c3b2.js",
    "revision": "8ff937db51db01defaae935d5fb002e6"
  },
  {
    "url": "assets/js/5.9e07dbbb.js",
    "revision": "3fb493af7c615620dcf65c3f7b856846"
  },
  {
    "url": "assets/js/6.f60077fa.js",
    "revision": "1309afd908adc4f03670f6894a4a2457"
  },
  {
    "url": "assets/js/7.2c20fe06.js",
    "revision": "1c0b6d0fb575a4218cc688f3bb95dc8f"
  },
  {
    "url": "assets/js/8.abc716ad.js",
    "revision": "0f61b82b82673d4a8cecdc17d133b930"
  },
  {
    "url": "assets/js/9.e2b0e0f3.js",
    "revision": "81f9aacd6415646c63043bff59b54c2c"
  },
  {
    "url": "assets/js/app.65d45369.js",
    "revision": "a34090c5e0a89b1d875ece1a85c9f6d0"
  },
  {
    "url": "code-of-conduct.html",
    "revision": "7a33933e03ac541bdd8cae98f540e8a3"
  },
  {
    "url": "contributing.html",
    "revision": "aac9f857afc636a3cc0e9e0c67997922"
  },
  {
    "url": "formatting.html",
    "revision": "9d6b56f01ade9361b78e9039d54092a3"
  },
  {
    "url": "help.html",
    "revision": "f0ace2c672bd11269d74259a7f69fd69"
  },
  {
    "url": "icon/apple-touch-icon-114x114.png",
    "revision": "24e3b06ebed9a80caa39fcc6d2602504"
  },
  {
    "url": "icon/apple-touch-icon-120x120.png",
    "revision": "b3f738d07c25f8bb8e5d2d8ea82a1968"
  },
  {
    "url": "icon/apple-touch-icon-144x144.png",
    "revision": "ecccc95f4dda6b442da32ef15384725c"
  },
  {
    "url": "icon/apple-touch-icon-152x152.png",
    "revision": "a15086663a09c9b1961f32c5d7a0ae53"
  },
  {
    "url": "icon/apple-touch-icon-57x57.png",
    "revision": "dca984d301a825cd2385861c79ccde1d"
  },
  {
    "url": "icon/apple-touch-icon-60x60.png",
    "revision": "3ae6850fa190f50790950aa4f4727a2b"
  },
  {
    "url": "icon/apple-touch-icon-72x72.png",
    "revision": "c9e79c07d8642e249b2dfd13292f422e"
  },
  {
    "url": "icon/apple-touch-icon-76x76.png",
    "revision": "1855e92ca7d694d5b7d6af677e587119"
  },
  {
    "url": "icon/favicon-128.png",
    "revision": "2dd0ab274917aa0961c43098d554c65e"
  },
  {
    "url": "icon/favicon-16x16.png",
    "revision": "17ee879b37ef69fcd0506dd31e072bc5"
  },
  {
    "url": "icon/favicon-196x196.png",
    "revision": "9196ffe18398d3e97e5d8e880097b534"
  },
  {
    "url": "icon/favicon-32x32.png",
    "revision": "a3d667d46c6606906e5845c431830138"
  },
  {
    "url": "icon/favicon-96x96.png",
    "revision": "5bd9415fe49f0fd06a21b18cfeefff5d"
  },
  {
    "url": "icon/logo_512.png",
    "revision": "db5382ce49384181b26b9741e10eca23"
  },
  {
    "url": "icon/mstile-144x144.png",
    "revision": "ecccc95f4dda6b442da32ef15384725c"
  },
  {
    "url": "icon/mstile-150x150.png",
    "revision": "78aa3969aa902ab011e23a606b00426b"
  },
  {
    "url": "icon/mstile-310x150.png",
    "revision": "794c9a6084473739d2b3eb0c4ed5c2ea"
  },
  {
    "url": "icon/mstile-310x310.png",
    "revision": "77d8f648c4c54b9d29b8779f934a16d3"
  },
  {
    "url": "icon/mstile-70x70.png",
    "revision": "2dd0ab274917aa0961c43098d554c65e"
  },
  {
    "url": "index.html",
    "revision": "d7262050d733d94bc5954f25d8215627"
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
