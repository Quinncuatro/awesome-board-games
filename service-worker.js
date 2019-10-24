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
    "revision": "88953f9fa0900ac99ab34ac114164d4c"
  },
  {
    "url": "assets/css/0.styles.a330089e.css",
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
    "url": "assets/js/10.c7fe88de.js",
    "revision": "cd92b367357c190d6f8de955e4d7c6da"
  },
  {
    "url": "assets/js/11.988e0a5c.js",
    "revision": "b4ce2601405ed3149b700069d87d28fd"
  },
  {
    "url": "assets/js/2.aa49387d.js",
    "revision": "4f0b38bebff0c6b22577903e94523c70"
  },
  {
    "url": "assets/js/3.36af70db.js",
    "revision": "4285050dd72b8d598e9cc550240bfeec"
  },
  {
    "url": "assets/js/4.a8a5f198.js",
    "revision": "c39bcd8f3d49d5fe29d97638f21ea4f1"
  },
  {
    "url": "assets/js/5.71ef7ff8.js",
    "revision": "97877c2bfb8f66fff6cd64fa5749d86d"
  },
  {
    "url": "assets/js/6.f9ae3ea0.js",
    "revision": "2c018dd63f170215b5fbafdf6b3c7a1b"
  },
  {
    "url": "assets/js/7.2c20fe06.js",
    "revision": "1c0b6d0fb575a4218cc688f3bb95dc8f"
  },
  {
    "url": "assets/js/8.6481d75e.js",
    "revision": "16edf043a6714a21f88edf8b3f3ac12b"
  },
  {
    "url": "assets/js/9.e04fb2f6.js",
    "revision": "2dca49abfadf081cb2f7bcf9c6c2e4b3"
  },
  {
    "url": "assets/js/app.27d00056.js",
    "revision": "c4613e6b9ad0d402ab4aa72f99e56404"
  },
  {
    "url": "code-of-conduct.html",
    "revision": "4d23992e4f3f4832715cedf4fb771872"
  },
  {
    "url": "contributing.html",
    "revision": "9670ddea783230f768c020d54fae0a67"
  },
  {
    "url": "formatting.html",
    "revision": "c51e6a53c5f4f506080b42f186169a26"
  },
  {
    "url": "help.html",
    "revision": "9a9135852bebaf07571b4831fda36c82"
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
    "revision": "bbe6389fb5873d0bc058dd2b8018fc63"
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
