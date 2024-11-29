'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "753363454e3d20e055520ab602df3e84",
"assets/AssetManifest.bin.json": "22bc502aa4c2ed448d8546d44690ec4b",
"assets/AssetManifest.json": "3a62a4438d85fbf5da2bec9cb32c3c03",
"assets/assets/bg_blue_paymentus.png": "e6fa5bfdc585cf3549e4e505f93655c9",
"assets/assets/i18n/en.json": "790e9fde8a500e6e99770431cc38c6ea",
"assets/assets/i18n/es.json": "5a4b6e69de8f09f294f77484ade1a834",
"assets/assets/icon_accounts.png": "7604b0877e88695350011396d207f0dc",
"assets/assets/icon_add_account.png": "9a2413dc6748b0ec4385cbd9d2469c45",
"assets/assets/icon_auto_pay.png": "26fa139adf8ecc3cedfb05fa50f8768b",
"assets/assets/icon_back_btn.png": "045a1666c1fda05bd88162f08a06df93",
"assets/assets/icon_bell.png": "ca2edf5cf6e02f45bfed8c759c1c9b8e",
"assets/assets/icon_bills.png": "d6414c1bf21a3af0e0f68dc0763f7d92",
"assets/assets/icon_blue_paymentus.png": "f14415fbc8d2100c05b25f6a96abc800",
"assets/assets/icon_blue_poweredbypaymentus.png": "5a5af15436a6f9b9308b9b2564d4145c",
"assets/assets/icon_chat_support.png": "09082be0e4c933af4313679248387408",
"assets/assets/icon_close.png": "5163a6f8955a0efb082b331534f37e78",
"assets/assets/icon_currency_dollar.png": "cd397257594190d3ee87b96b5eabdacb",
"assets/assets/icon_dashboard.png": "aa78ec077d21c570821a59d331156041",
"assets/assets/icon_download.png": "685d5ec279cf8fee8c14af6b87337ddf",
"assets/assets/icon_drawer.png": "1e18bb8eec53d0d7003565522aa19240",
"assets/assets/icon_dropdown.png": "c1cb1f15ebe060ae1b554528a009cabb",
"assets/assets/icon_edit.png": "6ca4df8ea0ac337cab28dedb2c024d5c",
"assets/assets/icon_email.png": "5f85d385ec6e456f0488e3dc71c4dfad",
"assets/assets/icon_fav_payment_method.png": "be917e5627ea27c0a2fee0a1c3f2a15d",
"assets/assets/icon_globe.png": "42416cbe270a127c46e84570de655627",
"assets/assets/icon_google_btn.png": "937c87b4439809d5b17b82728df09639",
"assets/assets/icon_help_center.png": "c18a4a5d38c9863d600fd805e94f23ea",
"assets/assets/icon_home.png": "e54dd2a00c91ef2299487ab3f7e4bd11",
"assets/assets/icon_inactive.png": "e419dc585e04c3837f102aabc9c0a5c3",
"assets/assets/icon_inbox.png": "fe5fb9879faa7b5af4725204a1a5ae29",
"assets/assets/icon_integration.png": "846537ea5d3c309e57ab4c753b778c91",
"assets/assets/icon_legal.png": "15a8bce01e8cee070010dc2095616aad",
"assets/assets/icon_logout.png": "c9f696e982670f18dbf175d924e3f541",
"assets/assets/icon_mobile.png": "ce9ff769d63ba4df48cf37eafaade583",
"assets/assets/icon_notifications.png": "8918e70061e67520374d4ff8a87ffc2c",
"assets/assets/icon_options.png": "17a6966068c842ad1b156ce33cb022ad",
"assets/assets/icon_password.png": "777ad3e4aa3356ac51fb20d8a11c60cd",
"assets/assets/icon_paymentus.png": "c9c7cecb546b5de6234f7456843d8459",
"assets/assets/icon_pay_bill.png": "b0ef1695540d5e22138aa66ae9193f89",
"assets/assets/icon_pay_my_bills.png": "b6824a4516946832288ac2e302af43f9",
"assets/assets/icon_pin.png": "d62c50a2830df1c0da0f8f8649604872",
"assets/assets/icon_profile.png": "ad990d54770084d08289c4a81f265828",
"assets/assets/icon_remove.png": "531b0805d483434523e6dea9bf7b4c03",
"assets/assets/icon_report_outage.png": "92a729df46effea98f129abbd5c54ef5",
"assets/assets/icon_settings.png": "5342f746dac8175be999ff47e6486db1",
"assets/assets/icon_setting_no_function.png": "a1633379e5e1454b49f75d337e4a74ca",
"assets/assets/icon_setup_auto_pay.png": "e044c2062b15c73146680050049a8466",
"assets/assets/icon_status_failure.png": "4aa7d7d423c9c0f2be4194cc0cfd2b78",
"assets/assets/icon_status_success.png": "10712110c28974175954fafd8b96d050",
"assets/assets/icon_transactions.png": "df450f59772bc65b359d27bfff536f7c",
"assets/assets/icon_view_bill.png": "76ac7687e17bfac5888c9152092750c6",
"assets/assets/icon_view_biller_profile.png": "0dbf9a513da9e9710223240af963ccae",
"assets/assets/icon_view_transactions.png": "d7be2da0edb70f64568abb735b7a999b",
"assets/assets/icon_wallet.png": "bae38ccfcf8bbc0dab42e75c0f09adb7",
"assets/assets/logo_biller_placeholder.png": "986e89472e0e98ceab318d11fc05514e",
"assets/assets/logo_bill_wallet.png": "f8b7355631392dc9806ce57e740a60e8",
"assets/assets/logo_bill_wallet_svg1.png": "5c0eff70498388c81c7bc6021e42c0c7",
"assets/assets/logo_blue_bill_wallet.png": "090ed870014304ddfd108533a4aff606",
"assets/assets/logo_blue_bill_wallet_svg.png": "a91995ada2f3adafa4435f0a42d52e91",
"assets/assets/logo_blue_bill_wallet_svg_v6.png": "a91995ada2f3adafa4435f0a42d52e91",
"assets/assets/logo_payment_method_amazon_pay.png": "ccc3a976522ae8cac1f49c66893d02cb",
"assets/assets/logo_payment_method_amazon_pay_design.png": "8861902271be0a93c337958cb7c09606",
"assets/assets/logo_payment_method_amex.png": "03a12257072ad9b9e377597c91f86a1d",
"assets/assets/logo_payment_method_ap.png": "a3074d5d98dee894bc8bcf099067a15b",
"assets/assets/logo_payment_method_apple_pay.png": "9b72071ec19ac8627cf52decf9063e3e",
"assets/assets/logo_payment_method_chq_sav.png": "44bb3d3bb8bb6263b12036af42fc67dd",
"assets/assets/logo_payment_method_default.png": "01a7e2be36ec5bb1e44d8809b8773778",
"assets/assets/logo_payment_method_disc.png": "10fed8a4ddd6dd732d3f2b7be85dbe54",
"assets/assets/logo_payment_method_gp.png": "7a30a9d4e20a94661d937c9e8e89fceb",
"assets/assets/logo_payment_method_mc.png": "dada5aaee87b07630dbf402dc5501899",
"assets/assets/logo_payment_method_paypal.png": "20dac8356d29ff5a7cd6312536b159bf",
"assets/assets/logo_payment_method_paypal_design.png": "cd7f6185fa0cd9b74a001ffaa939af8a",
"assets/assets/logo_payment_method_visa.png": "74ad680b87422265d741fd7a7d7f04e7",
"assets/assets/lower_bg_navigation_drawer.png": "c924390843c7206e6e48e4944f986f76",
"assets/assets/termsandconditions.html": "f49f77d535074d4409b4241dd9f63717",
"assets/FontManifest.json": "7df10702a8c60a62e6694f43081d46e7",
"assets/fonts/MaterialIcons-Regular.otf": "0898263b92a3b7996fb499e493a8e2b9",
"assets/NOTICES": "6f5724507c860d04ced19a55c5977509",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "ce91e7f53c75c930ee8c849922fa146e",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "87891098698d8aa150d4672b8eae86c1",
"icons/apple-touch-icon.png": "cdd30742a871bff38aea26b929725c5c",
"icons/favicon-128x128.png": "6cd0f89087249b50c4dc04c987904901",
"icons/favicon-16x16.png": "001f7975a8cc7601abfa2956ed21fd4c",
"icons/favicon-192x192.png": "ef762e998b7ed3d433384b523a8b5206",
"icons/favicon-32x32.png": "09401c49d0b4c4b648fa797e237110d2",
"icons/favicon-48x48.png": "9edcb50e990e56af5873e361c1bc1627",
"icons/favicon-512x512.png": "d4dfb9fc23d405538554789cc4a98021",
"icons/Icon-192.png": "606a09f229aad44621d1c3eb971b6dcb",
"icons/Icon-512.png": "397991eaa4388745543db715f8fb2f91",
"icons/Icon-maskable-192.png": "606a09f229aad44621d1c3eb971b6dcb",
"icons/Icon-maskable-512.png": "397991eaa4388745543db715f8fb2f91",
"icon_blue_poweredbypaymentus.png": "5a5af15436a6f9b9308b9b2564d4145c",
"index.html": "655b7dc1634ec149849d42ef26259c28",
"/": "655b7dc1634ec149849d42ef26259c28",
"logo_blue_bill_wallet.png": "090ed870014304ddfd108533a4aff606",
"logo_blue_bill_wallet_svg.png": "90a62bc17480b1024d6d706d95bf4b7e",
"logo_blue_bill_wallet_svg_v6.png": "697dfe5c7687962aea5991dde3feae09",
"main.dart.js": "56b1da3c6db8803601a260590432dec7",
"manifest.json": "8fe42f1b497dc98edb14a474842f78ce",
"version.json": "3788fda568250b74ce2db5a746055d08"};
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
