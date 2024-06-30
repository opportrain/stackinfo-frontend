import {AddDataToCache, getCachedData} from "./caching";

const baseURL = "https://search-stacks-nhtjl6xzla-zf.a.run.app"

export async function getFiltersList() {
    const cacheKey = `cache_filters`;
    const cachedResponse = await getCachedData(cacheKey);

    if (cachedResponse) {
        return cachedResponse;
    }
    return await fetch(`${baseURL}/getFilters`).then(async (res) => {
        const responseData = await res.json();
        await AddDataToCache(cacheKey, responseData);
        return responseData;
    })
}

export async function searchAndFilter(token, filters) {
    let data = {
        "token": token,
        "filters": filters
    }
    const requestBody = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    const cacheKey = `cache_${JSON.stringify(data)}`;
    const cachedResponse = await getCachedData(cacheKey);

    if (cachedResponse) {
        return cachedResponse;
    }
    return await fetch(`${baseURL}/searchAndFilter`, requestBody).then(async (res) => {
        const responseData = await res.json();
        await AddDataToCache(cacheKey, responseData);
        return responseData;
    })
}
