import {React, useState, useEffect, useRef, useCallback} from 'react';
import './navbar.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import LightModeIcon from '@mui/icons-material/LightMode';
import {useDispatch} from "react-redux";
import {changeSearchToken} from "../../features/filtering/filterSlice";
import { appendSearches } from "../search-window/search-window";

function Navbar(props) {
    const dispatch = useDispatch();
    const searchBarContainerRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const applySearch = (event) => {
        const value = event.target.value;
        props.setsearchInput(value)
        props.setHistoryFlag(value === '');
        dispatch(fetchDataWithCache(value));
        // dispatch(changeSearchToken(value));
    }
    const CACHE_NAME = 'api-search-responses-cache';
    const CACHE_EXPIRY_MS = 20 * 24 * 60 * 60 * 1000; //in milliseconds

    const fetchDataWithCache = (searchTerm) => async (dispatch, getState) => {
        const cacheKey = new Request(`cache_${searchTerm}`);
        const cache = await caches.open(CACHE_NAME);
        const cachedResponse = await cache.match(cacheKey);
        const threshold = 20;
        let counter = 0;
        let shouldFetch = true;

        if (cachedResponse) {
            const cachedData = await cachedResponse.json();
            const now = new Date().getTime();
            counter = cachedData.counter;
            const isExpired = now > cachedData.expiry;

            if (!isExpired && counter < threshold) {
                shouldFetch = false;
                counter++;
                props.setCardsData(cachedData.response);
                const updatedCacheResponse = new Response(JSON.stringify({ ...cachedData, counter }), {
                    headers: cachedResponse.headers
                });
                await cache.put(cacheKey, updatedCacheResponse);
            }
        }

        if (shouldFetch) {
            dispatch(changeSearchToken(searchTerm));
            const newExpiry = new Date().getTime() + CACHE_EXPIRY_MS;
            const cacheResponse = new Response(JSON.stringify({ response: props.cardsData, counter: 0, expiry: newExpiry }), {
                headers: { 'Content-Type': 'application/json' }
            });
            await cache.put(cacheKey, cacheResponse);
        }
    };

    const handlePress = (event) => {
        if (event.key === 'Enter') {
            props.setSearchWindowVisible(false)
            if (event.target.value.trim())//not empty
            {
                props.toggleSearchWindow();
                appendSearches([event.target.value], props.lastSearches, props.setLastSearches);

            }
        }
    };

    const handelNavbarClick = () => {
        if(props.isSearchWindowVisible ){
            props.setSearchWindowVisible(false)
        }

    };
    useEffect(() => {
        const updateDimensions = () => {
            const rect = searchBarContainerRef.current.getBoundingClientRect();
            props.setXpostion(rect.left );
            props.setWidth(rect.width);
        };
        updateDimensions();
        const resizeObserver = new ResizeObserver(entries => {
            updateDimensions();
        });
        if (searchBarContainerRef.current) {
            resizeObserver.observe(searchBarContainerRef.current);
        }
        return () => {
            if (searchBarContainerRef.current) {
                resizeObserver.unobserve(searchBarContainerRef.current);
            }
        };
    }, []);

    return (
        <div className="navbar" onClick={handelNavbarClick}>
            <div className="title">
                <div>Stack<span className="logo-span">Info</span></div>
            </div>
            <div className="search-bar-container"  ref={searchBarContainerRef} onClick={(e) => e.stopPropagation()}>
                <SearchOutlinedIcon className="search-icon"/>
                <input
                    onKeyPress={handlePress}
                    onClick={() => props.setSearchWindowVisible(true)}
                    onChange={applySearch}
                    className="search-bar"
                    type="text"
                    placeholder="Company, city, technology, language..."
                    value={props.searchInput}
                />
            </div>
            <div className="actions">
                {/*<button className="actions-button moon-icon" onClick={toggleMode}>
                    {mode ? <NightlightRoundIcon className="icon"/> : <LightModeIcon className="icon"/>}
                </button>*/}
            <button className="actions-button">
                <span className="material-symbols-outlined icon">
                    apps
                </span>
            </button>
        </div>
    </div>)
}
export default Navbar;
