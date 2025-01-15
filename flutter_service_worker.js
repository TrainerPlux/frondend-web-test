'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4b8db7a6e4e5733f5bf8609614149f40",
"version.json": "2c5ccc98cc8bd03494e048acc31230c8",
"index.html": "96fa5861d96286cc8ed3dfe110087c0d",
"/": "96fa5861d96286cc8ed3dfe110087c0d",
"main.dart.js": "f33b6085fdadd41be11d703ea9418bdd",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "87b002990f9f9b41ed4f26184b295a7a",
"assets/AssetManifest.json": "261a66e47c6d154973e782db1cd5b97b",
"assets/NOTICES": "e21889e1f88a1e3d2a28c408a4439456",
"assets/FontManifest.json": "e0540a651db4fa4839ccaf58abcebb3f",
"assets/.env/dev.json": "ac2e36ec68f7c57705f1763dfefc0e10",
"assets/.env/prod.json": "ac2e36ec68f7c57705f1763dfefc0e10",
"assets/AssetManifest.bin.json": "9c2aab0d49bfead15070fc27ea257a1b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "19eb9e704e83dbd6854c2ab96a4db377",
"assets/fonts/MaterialIcons-Regular.otf": "143575e54cf655be87f810442d93e62c",
"assets/assets/svg/like.svg": "d6882666b054acd230c11b3e67f71a37",
"assets/assets/svg/liked.svg": "279e8eb460ed4d3dede9fe2355f4acf6",
"assets/assets/svg/public.svg": "7d232db3720d902c8ea39ed9d250081a",
"assets/assets/svg/home.svg": "24be204e9c1dbc73e68a18659d0cec47",
"assets/assets/svg/members.svg": "d78ca41991a6d5a789d71e5ac169e2ff",
"assets/assets/svg/pinned.svg": "f68b3994f6e61859e90c77bfb7a8b739",
"assets/assets/svg/instagram.svg": "c6570fa2135967a1b152503b38df89f8",
"assets/assets/svg/pin.svg": "9d75d5a360b3ed9f417e524186f5f767",
"assets/assets/svg/image.svg": "af9bb377d44322e7e1e851bff2135494",
"assets/assets/svg/workout.svg": "5ecf54458c55019bcb96c6d4c6525b41",
"assets/assets/svg/message.svg": "5ca3ea3cd6c9bee34ed89c1c1c2ca9a4",
"assets/assets/svg/notification.svg": "852d189d1671ea2b1ab47c8a4a45ed2f",
"assets/assets/svg/write%2520new.svg": "0b0cf0b5c6f496c6a7a0435b95c275b5",
"assets/assets/svg/send.svg": "74162f997552a9162db75e068046d4d0",
"assets/assets/svg/facebook.svg": "dfef2fc32ad93e232f686c6977ffb695",
"assets/assets/svg/commented.svg": "fa121791fd9760793e956a4f2bab1917",
"assets/assets/svg/certification.svg": "a1f86d67c1aa7e1a41da235311b6a398",
"assets/assets/svg/youtube.svg": "2307203524d61c54bd5badf4c8702c76",
"assets/assets/svg/ep_success-filled.svg": "fad1534a43e7c27b75e1ba31128302e6",
"assets/assets/svg/web.svg": "87fb31f858cf8845ad6337bb65f8cfdc",
"assets/assets/svg/share.svg": "b8b6910e29afa7732d269f49b027b90f",
"assets/assets/svg/video.svg": "4cb77ff3cd81499c60eb47d7119d991d",
"assets/assets/svg/join%2520group.svg": "6c9c78615ef7ac17f24b30ff8a79b8e7",
"assets/assets/svg/comment.svg": "5a9e1fc06bddf4d8628e02d9513ff657",
"assets/assets/svg/center.svg": "22be062c986fced6ad7f1e7aa789d73e",
"assets/assets/svg/private.svg": "f3049cd1a177a9189f97190ae858d577",
"assets/assets/svg/create%2520group.svg": "de1de8f69e3ee988429a110a38006f5f",
"assets/assets/svg/price.svg": "c84bbc7fa2c0826187fbeddd9e8d7f58",
"assets/assets/images/3x/logo_with_trailing_label.png": "06cf400fb9e1c1524ed939a65d98b199",
"assets/assets/images/3x/logo.png": "276e5c26f78ea0be6052e1035c0d292c",
"assets/assets/images/3x/logo_with_bottom_label.png": "d337fd4f97864e6be9c6e14585f8d2a2",
"assets/assets/images/3x/logo%2520label.png": "0770f42d7c9d2c105fee4c026db85925",
"assets/assets/images/logo_with_trailing_label.png": "3a088f7566fc984df5033ac3f8c5b3f8",
"assets/assets/images/logo.png": "07fc227f7ed434a99d6c18ba559e8c9b",
"assets/assets/images/logo_with_bottom_label.png": "445db88c606c000629539388cf086668",
"assets/assets/images/2x/logo_with_trailing_label.png": "addc0d35c34e2d7b01133dddaf467b1c",
"assets/assets/images/2x/logo.png": "9fbc1c1ecc919a9ac969ee68f67f5bc0",
"assets/assets/images/2x/logo_with_bottom_label.png": "f823b490d5331834bcad6c604619767d",
"assets/assets/images/2x/logo%2520label.png": "1ce07152cf92a59539bf3365ed6ef97c",
"assets/assets/images/logo%2520label.png": "001cc15418591abafb6e656848d4d713",
"assets/assets/font/Satoshi-Bold.otf": "4a6fdcfc68ad464e8a9811e4edcacf00",
"assets/assets/font/Satoshi-Italic.otf": "e12f5b2bf97310399d4ab6f8919b67b0",
"assets/assets/font/Satoshi-Black.otf": "22d9e9fdd8728dfa00bb0f49124ce5a7",
"assets/assets/font/Satoshi-Regular.otf": "177a4dda04b52dedbd966942e932c5dc",
"assets/assets/font/Satoshi-BoldItalic.otf": "7fcee65089c5d8703104aac893cf3b66",
"assets/assets/font/Satoshi-Light.otf": "d1d1eaba7a325545089fa9d773459211",
"assets/assets/font/Satoshi-LightItalic.otf": "0f712df4c1cc0862127955e4277b533e",
"assets/assets/font/Satoshi-BlackItalic.otf": "6a497defaeb091055a4de4f20aefad0d",
"assets/assets/font/Satoshi-MediumItalic.otf": "d65b71e1365c0b1e07a7a2f3de0ebfc5",
"assets/assets/font/Satoshi-Medium.otf": "378def5c1f4df7eb6554a88608893391",
"assets/assets/translations/zh-TW.json": "f10394b69f2eac9a0e3365076f1e7477",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
