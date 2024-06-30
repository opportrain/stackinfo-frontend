const CACHE_RESPONSES_NAME = 'api-search-responses-cache';
const CACHE_EXPIRY_MS = 20 * 24 * 60 * 60 * 1000; // 20 days in milliseconds
const CURRENT_TIME = new Date().getTime();

export async function getCachedData(key) {
    const cache = await caches.open(CACHE_RESPONSES_NAME);
    const cacheKey = new Request(key);
    const cachedResponse = await cache.match(key);
    if (cachedResponse) {
        const cachedData = await cachedResponse.json();
        if (cachedData.expirationDate > CURRENT_TIME) {
            return cachedData.data;
        } else {
            await cache.delete(cacheKey);
            return false;
        }
    }
}

export async function AddDataToCache(key, data) {
    const cache = await caches.open(CACHE_RESPONSES_NAME);
    const expirationDate = CURRENT_TIME + CACHE_EXPIRY_MS;
    const cacheKey = new Request(key);
    let value = {
        expirationDate,
        data: data
    };
    value = new Response(JSON.stringify(value));
    await cache.put(cacheKey, value);
}