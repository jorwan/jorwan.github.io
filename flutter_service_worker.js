'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
".git/config": "d44986ae03ed8d1aab7016f0208576d2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0ebbba86cbc50e3da0e1b3e2396d96f2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d9a6f9e62049255464921c3648634ca2",
".git/logs/refs/heads/master": "d9a6f9e62049255464921c3648634ca2",
".git/logs/refs/remotes/github/master": "2e58d59e26c233d47d9e74d3b6da37d9",
".git/objects/02/723d0e534fec6d32d6afde76524633804d113e": "356119d25a29376e3ebe9e3d3f54a16e",
".git/objects/07/e46dffe3c9942739c50f1e7bbd2d12d7011c3f": "0026258381b0599954977a92cf9627f2",
".git/objects/12/d8d7dc0ee3e0f4abbe0020729ae53d8d0f02c8": "8d53be6a0ecadc4703bc25e9cffa6760",
".git/objects/19/f76f790f870a0f6877c9bd4cc17cfe8bb3d722": "c2d7abc03a3949cf27a0a2cf45d40819",
".git/objects/1d/7845c3d47332f627e5e7056018f4b19fc6546b": "5fd9c3a69f2a4ce81c1f2ca7f74a7ac8",
".git/objects/1f/00121ddd0556a635f38e27e9586add1294437e": "d0f17b1769717740729d8010e0c64dff",
".git/objects/24/5e2b0b575c99fd3313902bcfdc0a2e260ae27c": "e7b83e137629ba023ba02dc2004ef8b2",
".git/objects/26/b7cb2d7ea5479fca50600057ac9b0f1861eb6b": "01d06c3a127da91be8e6beccc06517b8",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/47/bc961ad5d16fbe8ef6ef1410b741f5a83741fe": "58b43354613b4c399012e14da3fe4d64",
".git/objects/63/855621329485c723702a9f5f3adef195bc7503": "51809abaedd01e711d35bdeb52be695b",
".git/objects/68/27ea53e2da0a4ec25596677999262c8750bd86": "04a30e53c5c4a3788f6063c6ce46b700",
".git/objects/73/c4064363a72d3eac7855f9b2c8b4af2a56ea7b": "30b6e2558ec4140587d5034a72a8d2fa",
".git/objects/76/a81669e8e5db0535088deef9192bd311b1056a": "9ddc222c4ece7fa1c0252d3b42e7153b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/40d8e7fbad8903ad5191210272da64a072a179": "2220ac822c0b9bafd9f4f51333ef8032",
".git/objects/86/bf02de24c14a8f151d19c8450805f05da2e7bb": "dbc42bd4368828f23f8c1eacac4c5be6",
".git/objects/88/3bfabcf987ab1f816acadb2b4165f93e76cf9f": "50966d9df959b60b318928bf90af59ff",
".git/objects/9d/160fc1cc8acc1884481572c7b4f0c49d5225a3": "61a775a5de6f1ba3bfddb6a4722f310e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b3/f3afb0ad70f6f1badc7e16a01e853cd6f6c889": "373dd714c1e0c476731a03944c78cb59",
".git/objects/b5/89986355e8b2e9661a18518e90e0bd7b10e25c": "a9fc02c58e55c113b6b2791d5b993b0d",
".git/objects/b6/a4c616b95f5006c36e8427dd9f3f81bbf6cb03": "91209b323b28d1851b0e5c39108f53c2",
".git/objects/c0/3424915f657c740ff4945b884292a1f7656890": "ddb9631e141bb37a96760377ef12d62d",
".git/objects/c4/9e6f9e681cfeda76830b836a8f43895362f760": "e59bfa2cc0a51d63ea3d1c5db377eca6",
".git/objects/c5/5956172268bd2af67e9021e5478e0e3d0252bc": "c406d86d248f651f0c756a1d7f7fa824",
".git/objects/e3/51e49216aebba3c17d0f2d309b8f206c0d1deb": "a1e8dc736f2e877d27af3924c7293577",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/519145f93946c4cfe0c5ff95d118d3a7bfcc12": "68f2a8f6402248e7c9ebc6a3a921e0d1",
".git/objects/e9/59de7349584dcc794e9a4c2610aa260b52e4cf": "1a15324bd77bd9a66941ac436ec250c9",
".git/objects/f1/a7bf8a0cb92aee782f96910bccafcfa80aa73b": "a15a49c726bbd8266c1e8a1b67dfb329",
".git/refs/heads/master": "a218897262584743ef6d375227b431af",
".git/refs/remotes/github/master": "a218897262584743ef6d375227b431af",
"assets/AssetManifest.json": "125f88374318660a39b33f82d124e222",
"assets/assets/data/projects.json": "3f296e6f49babfe3db279a2b9e5298fd",
"assets/assets/fonts/Mulish-Regular.ttf": "e128ac44faa84b2d59c10c016fad0778",
"assets/assets/fonts/SairaExtraCondensed-Bold.ttf": "d8ebaeabfccd72357ba5453187a3047f",
"assets/assets/fonts/SairaExtraCondensed-Regular.ttf": "69a71b2bfa375a056e19fab5f634837f",
"assets/assets/fonts/SairaExtraCondensed-SemiBold.ttf": "be6ea652a0d4be4de1d483f9177941c3",
"assets/assets/images/profile.jpg": "075dc361d671d849ea9d126443b0a26a",
"assets/FontManifest.json": "a9a33e0f86b4db6fe0f35cbd61309d19",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "53706b56c74e1e288adf72e14b5719dc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"cv_jorge_wander_santana_urena.pdf": "fd0148b9d4baa6034bf49f759f3842f9",
"favicon.png": "6ffec5b6931cb38ab19326c3971f5b10",
"icons/Icon-192.png": "35a6b087e4593ef2e753e513c908a8f1",
"icons/Icon-512.png": "229069ee3241123d20346546a55339b9",
"index.html": "cfb32e3ca6a2843b343f83cc0240def6",
"/": "cfb32e3ca6a2843b343f83cc0240def6",
"main.dart.js": "c7750b313555323c3ad1c6ed5265eef7",
"manifest.json": "30aa0896b19144b634d703f2b6fef034",
"README.md": "38bebf08d28e1d7df38071a821bc58b4",
"version.json": "63e66acf320a017be24ba707bd3a0fc0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
