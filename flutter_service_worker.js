'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "446ff5340f79ae3395cee2c3c9f3f7a9",
"version.json": "2c5ccc98cc8bd03494e048acc31230c8",
"index.html": "f9df476ca8ea6ca91cf6d09bf786b6b6",
"/": "f9df476ca8ea6ca91cf6d09bf786b6b6",
"main.dart.js": "2519c9a2a52b6843e7580a8dc702b6a0",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "87b002990f9f9b41ed4f26184b295a7a",
"assets/AssetManifest.json": "40d5d8d663a77a3c1183420199482923",
"assets/NOTICES": "19a857526016ea82f5fbf884eb1839a3",
"assets/FontManifest.json": "e0540a651db4fa4839ccaf58abcebb3f",
"assets/.env/dev.json": "ac2e36ec68f7c57705f1763dfefc0e10",
"assets/.env/prod.json": "ac2e36ec68f7c57705f1763dfefc0e10",
"assets/AssetManifest.bin.json": "b22effefd11e82b0aa13e686261d11a6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "129c53ea0ca6ae2cce8febec99d94c1d",
"assets/fonts/MaterialIcons-Regular.otf": "2ded561a28253121ab030afe49353cea",
"assets/assets/images/3x/logo-label.png": "4efd8ab797d8cd10ee228b17ec13f1ca",
"assets/assets/images/3x/pin.png": "3a467334e99cdfbb985124d149a60e1b",
"assets/assets/images/3x/instagram.png": "ef3fe25715a80bb4592e6fc6e7c0c613",
"assets/assets/images/3x/members.png": "de17d1cabcf1ce9963f5ee3ecfa186ec",
"assets/assets/images/3x/pinned.png": "14bc03636a7a76e4be8a426d065915f2",
"assets/assets/images/3x/home.png": "bb12be8ab7aed40c6cd816b382162ae5",
"assets/assets/images/3x/public.png": "145789f6f639d9cfe529cec28c62b1ec",
"assets/assets/images/3x/liked.png": "d6ab16243010495b8487a553619ec58b",
"assets/assets/images/3x/like.png": "f340390b7ff0e0674f322bfd5a42ec68",
"assets/assets/images/3x/price.png": "23d1d4dfca0f48c838e8a16b961727cc",
"assets/assets/images/3x/logo-with-bottom-label.png": "d337fd4f97864e6be9c6e14585f8d2a2",
"assets/assets/images/3x/write-new.png": "070fa2c3a0c768d9656aa8835abcf5ad",
"assets/assets/images/3x/logo.png": "276e5c26f78ea0be6052e1035c0d292c",
"assets/assets/images/3x/private.png": "c5defca1ba4455b843eec83ed4c406f1",
"assets/assets/images/3x/center.png": "4afc36672a9e3fee61e9a08c73aa81e6",
"assets/assets/images/3x/comment.png": "e7454696de5628f30fe0e0c79a63c102",
"assets/assets/images/3x/video.png": "769a241c945d52daef42fa15f2f10ce5",
"assets/assets/images/3x/share.png": "ca246d8e88bd740c3af68499a479f21f",
"assets/assets/images/3x/web.png": "b257deed970e70e5c187839b9f666b20",
"assets/assets/images/3x/youtube.png": "8fbfd3fcf0fefbe23b60f7125a8cbd22",
"assets/assets/images/3x/create-group.png": "b6297801e8b772fb177b951bf0ae7577",
"assets/assets/images/3x/certification.png": "329c46640bd02f46f4f2181455208adc",
"assets/assets/images/3x/commented.png": "44502846b7c8a2126f91a5f981cb489b",
"assets/assets/images/3x/join-group.png": "09156f6dd2ace9644920024ca9832df2",
"assets/assets/images/3x/facebook.png": "66fb741242cd34a64841285890c6f1ad",
"assets/assets/images/3x/notification.png": "622579ea610581d5bc1de17ed6a63242",
"assets/assets/images/3x/send.png": "ce77848f51499f8e15549124c8167c5a",
"assets/assets/images/3x/message.png": "938bff26cb6dd384c3a34ffdab661052",
"assets/assets/images/3x/workout.png": "0cf3a38ad116aa22dcf3e2404298bd59",
"assets/assets/images/3x/image.png": "3cad488560467abde7c7e6ee8458427e",
"assets/assets/images/logo-label.png": "d48c7221e99765e66ea67d503d4bb6c1",
"assets/assets/images/pin.png": "c74d8af00938559054ae3a2a447068d0",
"assets/assets/images/instagram.png": "1c8470571224fc4050d8597e1b3fc5f6",
"assets/assets/images/members.png": "9879c76557d55c065a24eeebd57837a6",
"assets/assets/images/pinned.png": "067766d2ad89d6300196196e670fe3ba",
"assets/assets/images/home.png": "c7fdc74ea8bbb53eacad7ba008b952d0",
"assets/assets/images/logo_with_trailing_label.png": "3a088f7566fc984df5033ac3f8c5b3f8",
"assets/assets/images/public.png": "df92a8a8213c9628c96f5a50582f11de",
"assets/assets/images/liked.png": "0efcd0431f9b4dbe9e5381aa8e6bb59f",
"assets/assets/images/like.png": "3c0ff4962167f072acd06599f4b4f22b",
"assets/assets/images/price.png": "9f9e7d03ae5a97ff0a3495e2dbf76ee3",
"assets/assets/images/logo-with-bottom-label.png": "445db88c606c000629539388cf086668",
"assets/assets/images/write-new.png": "e671be4c58fe4df2fe270e8402e4b2c3",
"assets/assets/images/logo.png": "07fc227f7ed434a99d6c18ba559e8c9b",
"assets/assets/images/private.png": "5e71fc6c9f083277c14d698789de8d05",
"assets/assets/images/center.png": "c0e70717780c36bbbd1b5013317e5e56",
"assets/assets/images/comment.png": "bb62c40f22c0c8ece3030981cdefa57b",
"assets/assets/images/video.png": "30bf7126a2efc1a2cf0c415507c38a9a",
"assets/assets/images/share.png": "93531a1445f8b9f9e4a61fb510479be7",
"assets/assets/images/web.png": "a2cad3ade9f29f1faca9eec53e6b4725",
"assets/assets/images/youtube.png": "34cbb228ab4a37cf698e990d6073d048",
"assets/assets/images/create-group.png": "ecc17bd688e12ed4526719c9407bda70",
"assets/assets/images/certification.png": "fd12978e6070a58522ee5730c6fe42a7",
"assets/assets/images/commented.png": "44d67abc6a0caf9bdf90d3f5e28bbdfe",
"assets/assets/images/join-group.png": "3d11c7de1a2531521cc7718ef50aa6de",
"assets/assets/images/facebook.png": "79c29fd76f325c8a7f27867ee5aa7207",
"assets/assets/images/notification.png": "88ee23ff1e5e388b16fd863ff49b6c23",
"assets/assets/images/send.png": "e3da66e23a3a55b5b85c5760181150ff",
"assets/assets/images/2x/logo-label.png": "34ae58f3bacc3dd04e2e033f40a4a11d",
"assets/assets/images/2x/pin.png": "e4475b88889c2ba6339d635adb5f42cf",
"assets/assets/images/2x/instagram.png": "abd52b1d7715eae7aba70189720402dc",
"assets/assets/images/2x/members.png": "e13cd4d8adfdce3dad11d1bfbee4041d",
"assets/assets/images/2x/pinned.png": "d489d758f94cb8bace30c23757154022",
"assets/assets/images/2x/home.png": "51e516b7d1eed118eaabdbd64f37fe63",
"assets/assets/images/2x/public.png": "c0bbe06628b61f73565f5f20069431cc",
"assets/assets/images/2x/liked.png": "f16cd5d582856a6ccb2819f9a4e288fe",
"assets/assets/images/2x/like.png": "4abd6313187ea2a6d4e0195c1a5fd6dd",
"assets/assets/images/2x/price.png": "6db099b2136772c16dcfaae45b180858",
"assets/assets/images/2x/logo-with-bottom-label.png": "f823b490d5331834bcad6c604619767d",
"assets/assets/images/2x/write-new.png": "37316a1e3dd6d71d7ebe33509c2a6fd6",
"assets/assets/images/2x/logo.png": "9fbc1c1ecc919a9ac969ee68f67f5bc0",
"assets/assets/images/2x/private.png": "0cd6231e11d2a75a636a89f583e36278",
"assets/assets/images/2x/center.png": "386554a66c7abde8e621de5c1da76e7f",
"assets/assets/images/2x/comment.png": "ad9f8f529e75c8f281f43f2e4764f210",
"assets/assets/images/2x/video.png": "dea207170780f42908374a59830c9df2",
"assets/assets/images/2x/share.png": "efbeb0d1dfbd1b05e3b2f291881ad791",
"assets/assets/images/2x/web.png": "a1638cdda75ba2dc3463acc4b9ac0bcf",
"assets/assets/images/2x/youtube.png": "422ce13f176b30b5b9f92081ae3879c2",
"assets/assets/images/2x/create-group.png": "4b328190546cbe259b75315b45844dad",
"assets/assets/images/2x/certification.png": "affbfca99ece59dbb8594d7d0ba0c4f0",
"assets/assets/images/2x/commented.png": "b5999485fda6e964aa24e71a122426d3",
"assets/assets/images/2x/join-group.png": "5f8416c3b11af6cd5329e53130c272b8",
"assets/assets/images/2x/facebook.png": "9892684ad2a8aeee1fdf021098f7ef3b",
"assets/assets/images/2x/notification.png": "430953cbd638369659b8819e3d433115",
"assets/assets/images/2x/send.png": "4b6b5f713c0f650db6a38d62a7230ce5",
"assets/assets/images/2x/message.png": "cfeb128ac792a991968748459d85d1ec",
"assets/assets/images/2x/workout.png": "b35b83ca61dbe94db62f7e21bf5cf486",
"assets/assets/images/2x/image.png": "aac95dcb0c95696aad912bd81ba14d8f",
"assets/assets/images/message.png": "2eb45360ccb6c6c9e10f029be38d925f",
"assets/assets/images/workout.png": "9e759da4bacce954d383749c68256edb",
"assets/assets/images/image.png": "d5fa75f4a5c6757e9da6351b49dd8580",
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
"assets/assets/translations/zh-TW.json": "aa5b49796b8e486d9d3b47d0e57d9124",
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
