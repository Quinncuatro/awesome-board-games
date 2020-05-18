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
    "revision": "8a511342ba6d60849f33740d0a8692e8"
  },
  {
    "url": "assets/css/0.styles.ca6787b1.css",
    "revision": "c9425ae0ec987f8e2df8cb9f10e87161"
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
    "url": "assets/js/10.956cb26a.js",
    "revision": "a84086d843d7257fadc4e26e1191591b"
  },
  {
    "url": "assets/js/11.d7e4678f.js",
    "revision": "575cf9af08cd5227993335f67657c1bf"
  },
  {
    "url": "assets/js/2.4cbb08e0.js",
    "revision": "3fd38b3739954e09475234d3ef5a50cd"
  },
  {
    "url": "assets/js/3.747c38cf.js",
    "revision": "08219358816ac24f751cfc3048839078"
  },
  {
    "url": "assets/js/4.8fb518dd.js",
    "revision": "02e86f1d99b35dd3fc3b6c78e1b7feca"
  },
  {
    "url": "assets/js/5.4d31b5ea.js",
    "revision": "6f0deb3b111ddab075bd05dd216cfe2c"
  },
  {
    "url": "assets/js/6.fe2b893e.js",
    "revision": "fa88bab7a4c79ba3001d0b15e490dc5f"
  },
  {
    "url": "assets/js/7.87c294dd.js",
    "revision": "294e96b6bdc471d1a27ae9d7bd030787"
  },
  {
    "url": "assets/js/8.edae5c6c.js",
    "revision": "2d376a074ac1e1f79ff5171509642920"
  },
  {
    "url": "assets/js/9.3df046bb.js",
    "revision": "bc1b15a4ce075ad3a4f67ec22e88c41f"
  },
  {
    "url": "assets/js/app.d5bbf7bd.js",
    "revision": "dc78997cb973a60ef71cd7a21fa5313e"
  },
  {
    "url": "code-of-conduct.html",
    "revision": "0332276ee8d494635c3121a98191aac4"
  },
  {
    "url": "contributing.html",
    "revision": "6545e193df46f482a05052c9add0bc4b"
  },
  {
    "url": "formatting.html",
    "revision": "5f616cf41658532174033157107bba2f"
  },
  {
    "url": "help.html",
    "revision": "4386b41c94e00fcdb3c99b072828f621"
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
    "revision": "f33dcdc53d919dcf8fe2800ee381b93e"
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
