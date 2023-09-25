'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4351f8eafffe53564db3a02e0c76b0f8",
"assets/AssetManifest.json": "2dd5bedb1ac5e355434b11f5f0250ded",
"assets/assets/images/about_us_pic1.png": "5504cf6d78101a3116635087ccd29665",
"assets/assets/images/about_us_pic2.png": "4db0f19242f40da8bf4edf2fc4add1c4",
"assets/assets/images/about_us_pic3.png": "5098782b23e58860c5ac774f7a00c337",
"assets/assets/images/about_us_pic4.png": "a879148db46acc505f99179724564b67",
"assets/assets/images/app_store_img.png": "810d3dace44db1467e06872153ebf1d3",
"assets/assets/images/contact_us_img.png": "19b4eee51551385df39b3ba021e6d4b8",
"assets/assets/images/email_verification.png": "6086e7edee6d8283878efc2c4106e959",
"assets/assets/images/fob_how_img1.png": "c9971551a9a42d33d869dfd7f001ed17",
"assets/assets/images/fob_how_img2.png": "b091a3aa7b53922aea91e84660652867",
"assets/assets/images/fob_how_img3.png": "2b361edb96eec5b6274c01b75c1d9906",
"assets/assets/images/fob_how_img4.png": "25d47f6b8c8479dc764d937bf070d678",
"assets/assets/images/fob_right_img.png": "51fce508ffc6d914c466764fee6379fa",
"assets/assets/images/fob_why_1_img.png": "8ff7f91b91dd6cfe5094c571ad65ba25",
"assets/assets/images/fob_why_2_img.png": "eb35b3c6fc03d36fd5297c9df8fb2451",
"assets/assets/images/fob_why_3_img.png": "b8b7d69209c4cdeae23ec0af4448ffca",
"assets/assets/images/fob_why_4_img.png": "6ad3d19c9340bb246a324373fb7e5b48",
"assets/assets/images/fob_why_5_img.png": "5fe99f3498fb3db0e07f62251e0bb72b",
"assets/assets/images/fob_why_6_img.png": "7bb7ed2b441acaf8cef8285d5ab302ad",
"assets/assets/images/for_business_background_img.png": "0ac099610d97be1b99537cc75c1c6db4",
"assets/assets/images/for_student_background_img.png": "27426acc66da4e1c58aae2d2d099d70c",
"assets/assets/images/level_cup_img.png": "fdde943c19abff13a89e3dee718c3bc7",
"assets/assets/images/login_background_img.png": "4629afd5d722a58d09767fbb5219a557",
"assets/assets/images/play_store_img.png": "36b7f36d55bbadc9076245e766dda954",
"assets/assets/images/ring_light_img.png": "5fc1a7cd7c1375604fbe28d37a03c989",
"assets/assets/images/two_mobile_img.png": "ec352459ce5e685e7abb17b44a8ef238",
"assets/assets/images/why_1_img.png": "6823c8bb0995ea4da323cf20980fcd54",
"assets/assets/images/why_2_img.png": "6d3120a389c42928d814520aba49bb35",
"assets/assets/images/why_3_img.png": "b2d5eb14cc46b422b945c430c7a33dcb",
"assets/assets/images/why_4_img.png": "a2905852a9e795cdaf49ba1c7b0b407d",
"assets/assets%255Cimages%255Cabout_us_pic1.png": "5504cf6d78101a3116635087ccd29665",
"assets/assets%255Cimages%255Cabout_us_pic2.png": "4db0f19242f40da8bf4edf2fc4add1c4",
"assets/assets%255Cimages%255Cabout_us_pic3.png": "5098782b23e58860c5ac774f7a00c337",
"assets/assets%255Cimages%255Cabout_us_pic4.png": "a879148db46acc505f99179724564b67",
"assets/assets%255Cimages%255Ccontact_us_img.png": "19b4eee51551385df39b3ba021e6d4b8",
"assets/assets%255Cimages%255Cemail_verification.png": "6086e7edee6d8283878efc2c4106e959",
"assets/assets%255Cimages%255Cfob_how_img1.png": "c9971551a9a42d33d869dfd7f001ed17",
"assets/assets%255Cimages%255Cfob_how_img2.png": "b091a3aa7b53922aea91e84660652867",
"assets/assets%255Cimages%255Cfob_how_img3.png": "2b361edb96eec5b6274c01b75c1d9906",
"assets/assets%255Cimages%255Cfob_how_img4.png": "25d47f6b8c8479dc764d937bf070d678",
"assets/assets%255Cimages%255Cfob_right_img.png": "51fce508ffc6d914c466764fee6379fa",
"assets/assets%255Cimages%255Cfob_why_1_img.png": "8ff7f91b91dd6cfe5094c571ad65ba25",
"assets/assets%255Cimages%255Cfob_why_2_img.png": "eb35b3c6fc03d36fd5297c9df8fb2451",
"assets/assets%255Cimages%255Cfob_why_3_img.png": "b8b7d69209c4cdeae23ec0af4448ffca",
"assets/assets%255Cimages%255Cfob_why_4_img.png": "6ad3d19c9340bb246a324373fb7e5b48",
"assets/assets%255Cimages%255Cfob_why_5_img.png": "5fe99f3498fb3db0e07f62251e0bb72b",
"assets/assets%255Cimages%255Cfob_why_6_img.png": "7bb7ed2b441acaf8cef8285d5ab302ad",
"assets/assets%255Cimages%255Cfor_business_background_img.png": "0ac099610d97be1b99537cc75c1c6db4",
"assets/assets%255Cimages%255Cfor_student_background_img.png": "27426acc66da4e1c58aae2d2d099d70c",
"assets/assets%255Cimages%255Clevel_cup_img.png": "fdde943c19abff13a89e3dee718c3bc7",
"assets/assets%255Cimages%255Clogin_background_img.png": "4629afd5d722a58d09767fbb5219a557",
"assets/assets%255Cimages%255Cring_light_img.png": "5fc1a7cd7c1375604fbe28d37a03c989",
"assets/assets%255Cimages%255Ctwo_mobile_img.png": "ec352459ce5e685e7abb17b44a8ef238",
"assets/assets%255Cimages%255Cwhy_1_img.png": "6823c8bb0995ea4da323cf20980fcd54",
"assets/assets%255Cimages%255Cwhy_2_img.png": "6d3120a389c42928d814520aba49bb35",
"assets/assets%255Cimages%255Cwhy_3_img.png": "b2d5eb14cc46b422b945c430c7a33dcb",
"assets/assets%255Cimages%255Cwhy_4_img.png": "a2905852a9e795cdaf49ba1c7b0b407d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a91018fbf06aa919d2363d07f827358e",
"assets/NOTICES": "3f78b20f73ec357f2707328fc61730da",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "22050c92cb5872baa4d88a854c8494e4",
"/": "22050c92cb5872baa4d88a854c8494e4",
"main.dart.js": "c98a276e45d2f21df2569c9cfa4d3efb",
"manifest.json": "d0acc62381624bb1dc6a5b608d185be7",
"version.json": "1be9e8c1de38adf3ebd1ed5f0f54eeef"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
