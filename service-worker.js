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
    "revision": "b39a887be5a07fd6c61d647c8efeda45"
  },
  {
    "url": "assets/css/0.styles.89c24c64.css",
    "revision": "8d033440ff069575b356f4f7e99ac41c"
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
    "url": "assets/js/10.a96bfaa9.js",
    "revision": "fb59b8c82a47a5a04016083c62493d30"
  },
  {
    "url": "assets/js/11.802d3f4c.js",
    "revision": "b4ce2601405ed3149b700069d87d28fd"
  },
  {
    "url": "assets/js/2.a5aa74f5.js",
    "revision": "b8d6c629ec30ff94dbbe98b0a9282c6d"
  },
  {
    "url": "assets/js/3.9ac6c5c7.js",
    "revision": "279e8b70620f4cea366ae5f29d17ed96"
  },
  {
    "url": "assets/js/4.46da5818.js",
    "revision": "c39bcd8f3d49d5fe29d97638f21ea4f1"
  },
  {
    "url": "assets/js/5.16c2a4a3.js",
    "revision": "ba58dc6385a7b84b395e112dd8f30847"
  },
  {
    "url": "assets/js/6.411c8bf5.js",
    "revision": "637b489de3e7d5b042339d9bf627a778"
  },
  {
    "url": "assets/js/7.62f16b8b.js",
    "revision": "e5d576371f37009b46fc4a8d7110539b"
  },
  {
    "url": "assets/js/8.d3ab6af4.js",
    "revision": "1f21b6472c33409fa7766851e4fc9616"
  },
  {
    "url": "assets/js/9.1562ecca.js",
    "revision": "1d26dcaadfc87241875327e807e41128"
  },
  {
    "url": "assets/js/app.4103248b.js",
    "revision": "744c400fbf6480741b72e68010f2c49e"
  },
  {
    "url": "code-of-conduct.html",
    "revision": "9de7df7bd2f0d165b58044af013b9489"
  },
  {
    "url": "contributing.html",
    "revision": "ec4a07ca72685b082fd55e282ad06c8c"
  },
  {
    "url": "formatting.html",
    "revision": "5466f59ba78b96437de0dc7feea74456"
  },
  {
    "url": "help.html",
    "revision": "1bc9770332b696a9bc47ba8765be9ee4"
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
    "revision": "4a9d13f55eb2400e1b217ddc4a6b2ec2"
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
