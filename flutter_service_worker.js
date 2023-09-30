'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b5675a2cccc976d0f6c0698074a31d44",
"assets/AssetManifest.json": "86da4e162590be0fba9d7a08cb29c87e",
"assets/assets/datas/australia.json": "581d9a831f3376bcedbb019e5975f2fe",
"assets/assets/datas/chat_data.json": "764f9cd37f07dbbd9c9c064277bcfc98",
"assets/assets/datas/contacts_data.json": "2c4eb9f8582a6ca75c216f85945403c3",
"assets/assets/datas/customers_data.json": "deaa6e5779c7610a779b493223a7d6d5",
"assets/assets/datas/dashboard.json": "7708e076d805b76a6b5a03dd7d649f09",
"assets/assets/datas/discovery_data.json": "1b90d7475b4f521b4d8ebac2d7bfe366",
"assets/assets/datas/drag_drop_data.json": "0a61f90184957c9200966a4eae3a24b3",
"assets/assets/datas/europe_map.json": "bb09883ee18a3af276d84f4013666a78",
"assets/assets/datas/nft_dashboard_data.json": "b99c497d5668857d532776f4f78b0a08",
"assets/assets/datas/opportunities_data.json": "e7adfd5eca9025844508118aea396d32",
"assets/assets/datas/products_data.json": "d549f36a5672910af097a5762f470396",
"assets/assets/datas/project_list.json": "eb323e73ca4b2cb8c06fd96667923ced",
"assets/assets/datas/shopping_cart.json": "658733717e168f187fa4a739810432ed",
"assets/assets/datas/shopping_product.json": "1e22d8d53dc82cf8d952bffbbd8d9474",
"assets/assets/datas/world_map.json": "2a54fbfcb2f8a1413e730e95c8549cef",
"assets/assets/images/dummy/1.jpg": "6dd9e5b779dbbd9d62d0877fc7b43748",
"assets/assets/images/dummy/10.jpg": "72727e2cbd4e95dad31005a6f64ad553",
"assets/assets/images/dummy/11.jpg": "f774b24254052e87b577893240c9287f",
"assets/assets/images/dummy/12.jpg": "d046575b8636a0a7e179573a3ae02a1e",
"assets/assets/images/dummy/13.jpg": "f4e7b928c09757f06322f73d825ccc3d",
"assets/assets/images/dummy/14.jpg": "8278b9c949763b70ba034da3d4d01bac",
"assets/assets/images/dummy/15.jpg": "8e7e65bd31a5bd3d1c1575471205115e",
"assets/assets/images/dummy/2.jpg": "393b0a1efe502f0d75f0cbc63f987754",
"assets/assets/images/dummy/3.jpg": "724abbe8e77e3b1947626c161ac96d75",
"assets/assets/images/dummy/4.jpg": "2bbded6cfa2f25bbaa221d9b9631c279",
"assets/assets/images/dummy/5.jpg": "29cf385d776d483a34ad047822d5949c",
"assets/assets/images/dummy/6.jpg": "52ef62ecb6548394da4fcffa2bf82aed",
"assets/assets/images/dummy/7.jpg": "bebf52764bc8e61d03059305a38692b8",
"assets/assets/images/dummy/8.jpg": "eff7b76a83ed3c5c97af0c853612e35a",
"assets/assets/images/dummy/9.jpg": "9c13dd8c28df6d4d35ebfd8907dac1fa",
"assets/assets/images/dummy/a1.jpg": "6807a2e9ae0757b7463dcff5d4e78983",
"assets/assets/images/dummy/a2.jpg": "397ffc6d89dd46c5494ef307e6c8932c",
"assets/assets/images/dummy/a3.jpg": "069df945775d3e291b6bafa474208120",
"assets/assets/images/dummy/a4.jpg": "bbe5c27105fb18f90d4d39d246bed14c",
"assets/assets/images/dummy/a5.jpg": "4767834c27471d2edad72d43010b5c04",
"assets/assets/images/dummy/a6.jpg": "4f24905229cd418c3ca7a6b548304561",
"assets/assets/images/dummy/a7.jpg": "b0dfabe6d05a90cf4b1bf76ddae6b52a",
"assets/assets/images/dummy/a8.jpg": "a11359bcf5ed3930f76b551808e934c3",
"assets/assets/images/dummy/avatar-1.jpg": "6b3d7fc9fc5c13c563ca66847b87c67d",
"assets/assets/images/dummy/avatar-10.jpg": "d80707cfaa72d68e9f15521c5912fd7e",
"assets/assets/images/dummy/avatar-11.jpg": "27639ad85f5b3fe0e348fd357a7aba43",
"assets/assets/images/dummy/avatar-12.jpg": "9b34780e52e098c5af8d93ed2e7d5191",
"assets/assets/images/dummy/avatar-2.jpg": "8d832f19a264711a804b1f0ff599e0ae",
"assets/assets/images/dummy/avatar-3.jpg": "69bac73c4e3ccdf4e0c17a1d85e346b7",
"assets/assets/images/dummy/avatar-4.jpg": "c2490a01011a037c979e4c2ba890844d",
"assets/assets/images/dummy/avatar-5.jpg": "fb079bfd1100a06f36224bb642f28abf",
"assets/assets/images/dummy/avatar-6.jpg": "82c67e16a29e2b8fb371368a49c18a77",
"assets/assets/images/dummy/avatar-7.jpg": "e09a066d4230404dde5f4235ad5e2522",
"assets/assets/images/dummy/avatar-8.jpg": "da7ed22cc8df53bc0e43394b785d3a85",
"assets/assets/images/dummy/avatar-9.jpg": "f46a5378522a02b5c93224a26f3ebf82",
"assets/assets/images/dummy/dashboard-1.jpg": "091be5bb79ae4e25b23ffbb5800fb50c",
"assets/assets/images/dummy/fileManager-1.jpg": "f183718ba252d007b8e9112cfdce3075",
"assets/assets/images/dummy/fileManager-2.jpg": "8e9cf57a7b9fbf35a8b859642448085d",
"assets/assets/images/dummy/h1.jpg": "523e954f6e43a394420318fc4f15f3a9",
"assets/assets/images/dummy/h2.jpg": "e603b8880e8e0ea0b8de6f0c2a461b03",
"assets/assets/images/dummy/h3.jpg": "6847e351d9efe19c8de927b748f0f9ec",
"assets/assets/images/dummy/h4.jpg": "bb71a3e18cc3741431dba50e84c160bd",
"assets/assets/images/dummy/h5.jpg": "229e58adfaf51530a8ae6e2228234111",
"assets/assets/images/dummy/h6.jpg": "11cb9d90b5e6c92001362656303c8aa4",
"assets/assets/images/dummy/h7.jpg": "b800f411a9308c7126bcfc67ceea27c6",
"assets/assets/images/dummy/l1.jpg": "a530d59fa7fca0e2983d1ada0aec577a",
"assets/assets/images/dummy/l2.jpg": "6789631815c90d52eaaa3ca190a9ab40",
"assets/assets/images/dummy/l3.jpg": "73543363cfca8fb8307b8b850605990f",
"assets/assets/images/dummy/l4.jpg": "6e61e33609a76e1c425668e73dce7157",
"assets/assets/images/dummy/landing-1.jpg": "55782e136d49d77f5e39ad78d4a7cc32",
"assets/assets/images/dummy/landing-2.jpg": "ac674445f71db60dff1ed9754bcea2c1",
"assets/assets/images/dummy/landing-3.jpg": "1471f164dd94365b091dec06c7596b58",
"assets/assets/images/dummy/login1.jpg": "03d1dfc686973b9088e74ba8e41ae5ec",
"assets/assets/images/dummy/login2.jpg": "9dd949ba82e62865b0bca1a1c35f6ea3",
"assets/assets/images/dummy/login3.jpg": "4147c67ec2598fe574291cbf1474f097",
"assets/assets/images/dummy/login4.jpg": "98014387ca4c9a1f7c99ad3a7aa146f1",
"assets/assets/images/dummy/login5.jpg": "32376c1656bb0cd32dce5320838c06a2",
"assets/assets/images/dummy/login6.jpg": "b3028101973b605c1e79cdd3cf04072e",
"assets/assets/images/dummy/m1.jpg": "75d84ef25cbf23e2df3deb053e42b7df",
"assets/assets/images/dummy/m2.jpg": "602b8f28cb6be6b599c7c71c25fecc4d",
"assets/assets/images/dummy/m3.jpg": "dd31845e4ab55f8ac0b4bc25aba3ecee",
"assets/assets/images/dummy/m4.jpg": "4d48509b2c0ef880d388cf7c27e1ab64",
"assets/assets/images/dummy/m5.jpg": "0302ba2b1eced67ba5d51f5b572dcc1d",
"assets/assets/images/dummy/m6.jpg": "0b1494e1fee543a20825beec0e9fc3fa",
"assets/assets/images/dummy/m7.jpg": "32d9f96d13d0e2ec32237474e75236f0",
"assets/assets/images/dummy/m8.jpg": "381c07e23648466c813039d1e07a24f0",
"assets/assets/images/dummy/maintenance-1.jpg": "695ee627e3201178f368d2a5fa78f483",
"assets/assets/images/dummy/nft.jpg": "911042dcfe776a05e8427a11da8c98f5",
"assets/assets/images/dummy/p1.jpg": "0993a07c2eca498fc53abbb4754d4bb5",
"assets/assets/images/dummy/p2.jpg": "07975334d9a5cb9449a7fa9a5b5578ef",
"assets/assets/images/dummy/p3.jpg": "e2e0c556cdb1ff168b2fada00c161a97",
"assets/assets/images/dummy/social-1.jpg": "6b3362eabff4a84bbbacbe99e0a92ac8",
"assets/assets/images/dummy/social-2.jpg": "5672c1bff49726b1a99a14bace0770ee",
"assets/assets/images/dummy/social-3.jpg": "36321ede8653a9842bb158e833806087",
"assets/assets/images/dummy/social-4.jpg": "c4669abf5c4950d89ba03c053af022d3",
"assets/assets/images/dummy/social-5.jpg": "0590933a38c763b2f7ffacfdb2325a2d",
"assets/assets/images/logo/ethereum-eth-logo.png": "3a3285881789dc8b524b6e5b42012460",
"assets/assets/images/logo/logo.svg": "0912852c2197d991bb41c988ba9c8457",
"assets/assets/images/logo/logo1.svg": "0912852c2197d991bb41c988ba9c8457",
"assets/assets/images/logo/logo_icon_dark.png": "c7765cfb1bb600132e0e4ecab55832d8",
"assets/assets/images/logo/logo_small.svg": "23e7bc445f8d8f19f3218b5f344f8728",
"assets/assets/images/places_images/photo1.jpg": "f0da3bef4f24b2d20acf911cd4f44050",
"assets/assets/images/places_images/photo10.jpg": "a0992c077b6e4ead274b96ce4ce085c5",
"assets/assets/images/places_images/photo2.jpg": "9694a292db7c2f19d068271c7a1b1def",
"assets/assets/images/places_images/photo3.jpg": "7b821e916a052b596a39be38e447674e",
"assets/assets/images/places_images/photo4.jpg": "659fa5ff3752eb60ccdbf740913d8b46",
"assets/assets/images/places_images/photo5.jpg": "3ffc6e911378148025650979a9250c0e",
"assets/assets/images/places_images/photo6.jpg": "7013288b3dc8f42ad43b7ad3a8b79889",
"assets/assets/images/places_images/photo7.jpg": "94a97cdd63d8a889e5f43c3e3dd4cd0c",
"assets/assets/images/places_images/photo8.jpg": "166b20855455183c5bd88d60aeb4a721",
"assets/assets/images/places_images/photo9.jpg": "8170ea5c08f88909bbe9e543b102505f",
"assets/assets/lang/ar.jpg": "9143f6bb9f70a7082b2d49a2fa2b0339",
"assets/assets/lang/ar.json": "30fe189880bde72f2e34b2bf51bd236f",
"assets/assets/lang/en.jpg": "6dd96569bff0a5c5ada7d99222b9815d",
"assets/assets/lang/en.json": "5073a04c13b6935f799df0b231478ea1",
"assets/assets/lang/es.jpg": "25d67fb418ce2623d770679b2fd4f575",
"assets/assets/lang/es.json": "1426f63dfc62a7bef7f2ad1bd583a1d5",
"assets/assets/lang/fr.jpg": "ed28420a8f74b0631c24659a40511c2d",
"assets/assets/lang/fr.json": "a48f2c0b4c83dc927581a8aa644fb30b",
"assets/assets/lang/hi.jpg": "806b19b66156a2bfcb232d4f6518747a",
"assets/assets/lang/hi.json": "e47582d957b2d32cd7c940e109808568",
"assets/FontManifest.json": "0feac677128640ff34fe2c5190538b90",
"assets/fonts/MaterialIcons-Regular.otf": "142187b844d61f6d9b03f7c52f6d4c2a",
"assets/NOTICES": "3b6873b01959d9a9ac1f8330eeb704c8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/feather_icons/fonts/feather.ttf": "0d0d92d310cc68e53796bf15c36838c2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/packages/lucide_icons/assets/lucide.ttf": "03f254a55085ec6fe9a7ae1861fda9fd",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/timezone/data/latest_all.tzf": "871b8008607c14f36bae2388a95fdc8c",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"img/splash.png": "1d1186a96a58185fc773b0e14749dc98",
"index.html": "c240e2ad7cfc29a8c08affd112eb4b7a",
"/": "c240e2ad7cfc29a8c08affd112eb4b7a",
"main.dart.js": "6ba1c46a68f6f25913586de137f747ca",
"manifest.json": "2c2cafe738c21d239753bf8328dff759",
"version.json": "c5ba559258dee346142af03b4ddd037d"};
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
