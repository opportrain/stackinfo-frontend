// src/utils/fetchDataWithCache.js
import { changeSearchToken } from "../features/filtering/filterSlice";
import { searchAndFilter } from "../services/filtering";
import {useContext} from "react";
import {useDispatch} from "react-redux";

const CACHE_NAME = 'api-search-responses-cache';
const CACHE_EXPIRY_MS = 20 * 24 * 60 * 60 * 1000; // 20 days in milliseconds
const THRESHOLD = 20;
// const dispatch = useDispatch();

const fetchDataWithCache = (searchTerm, cardsData, setCardsData) => async (dispatch, getState) => {
    const value=searchTerm.toLowerCase();
    const cacheKey = new Request(`cache_${value}`);

    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match(cacheKey);
    let counter = 0;
    let shouldFetch = true;
    if (cachedResponse) {
        const cachedData = await cachedResponse.json();
        const now = new Date().getTime();
        counter = cachedData.counter;
        const isExpired = now > cachedData.expiry;

        if (!isExpired && counter < THRESHOLD) {
            shouldFetch = false;
            counter++;
            setCardsData(cachedData.response);
            const updatedCacheResponse = new Response(JSON.stringify({ ...cachedData, counter }), {
                headers: cachedResponse.headers
            });
            await cache.put(cacheKey, updatedCacheResponse);
        }
    }

    if (shouldFetch) {
        dispatch(changeSearchToken(value));
        const newExpiry = new Date().getTime() + CACHE_EXPIRY_MS;
        const cacheResponse = new Response(JSON.stringify({ response: cardsData, counter: 0, expiry: newExpiry }), {
            headers: { 'Content-Type': 'application/json' }
        });
        await cache.put(cacheKey, cacheResponse);
    }
};

export { fetchDataWithCache};
