import React, {useEffect, useRef, useContext, useCallback, useState} from 'react';
import './navbar.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {useDispatch} from "react-redux";
import {appendSearches} from "../../services/searchHistory";
import {AppContext} from '../../features/context';
import {debounce} from '../../services/debounce';
import {setSessionStorage, getSessionStorage} from '../../services/sessionStorage';
import {changeSearchToken} from "../../features/filtering/filterSlice";
import SearchWindow from "../search-window/search-window";

function Navbar() {
    const [currentSearchToken, setCurrentSearchToken] = useState('initial');
    const [searchHistoryShown, setSearchHistoryShown] = useState(false);
    const dispatch = useDispatch();

    /*
        const searchBarContainerRef = useRef(null);
        const handleNavbarClick = useCallback(() => {
            if (isSearchWindowVisible) {
                setSearchWindowVisible(false)
            }
        }, [isSearchWindowVisible, setSearchWindowVisible]);

        const handlePress = useCallback((event) => {
            if (event.key === 'Enter') {
                setSearchWindowVisible(false)
                if (event.target.value.trim()) { //not empty
                    setShowHistory(!showHistory)
                    console.log("appendSearches:" + event.target.value)
                    appendSearches([event.target.value], lastSearches, setLastSearches);
                    inputElementRef.current.blur();
                }
            }
        }, [showHistory, lastSearches, setShowHistory, setSearchWindowVisible, setLastSearches]);


        const debouncedFetchData = useCallback(debounce((value) => {
            const pattern = /^[a-zA-Z\u0600-\u06FF\s,'\-+#]+$/;
            if (value != null && (pattern.test(value) || value === '') && value.length < 25) {
                dispatch(fetchDataWithCache(value, cardsData, setCardsData));
            } else {
                setCardsData();
            }
        }, 100), [dispatch, cardsData, setCardsData]);
        const lastKeyPressed = useRef(null);
        const prevInputValue = useRef('');
        const inputElementRef = useRef(null);

        const handleKeyDown = useCallback((event) => {
            lastKeyPressed.current = event.key;
        }, []);
        const handleInputChange = useCallback((event) => {
            const value = event.target.value;
            const prevValue = prevInputValue.current;
            let action = 'typing';
            // if (value.length < prevValue.length) {
            if (lastKeyPressed.current === 'Backspace' || lastKeyPressed.current === 'Delete') {
                action = 'deleting';
                console.log("deleting")
            } else {
                console.log("typing")
                // debouncedFetchData(value);
            }
            debouncedFetchData((action === 'typing' ? (value === '' ? '' : value) : (value === '' ? '' : null)))
            setShowHistory(value === '');

            setSearchInput(value);
            prevInputValue.current = value;
            setSessionStorage('searchInput', value);
        }, [setSearchInput, setShowHistory, debouncedFetchData]);
    */

    /*    useEffect(() => {
            const savedSearchInput = getSessionStorage('searchInput');
            if (savedSearchInput !== null) {
                setSearchInput(savedSearchInput);
                setShowHistory(savedSearchInput === '');
                debouncedFetchData(savedSearchInput);
            }
        }, [setSearchInput, setShowHistory]);

        // useEffect(() => {
        //     const inputElement = inputElementRef.current;
        //     inputElement.addEventListener('keydown', handleKeyDown);
        //     inputElement.addEventListener('input', handleInputChange);
        //     return () => {
        //         inputElement.removeEventListener('keydown', handleKeyDown);
        //         inputElement.removeEventListener('input', handleInputChange);
        //     };
        // }, [handleKeyDown, handleInputChange]);

        const applySearch = useCallback((event) => {
            const value = event.target.value;
            const pattern = /^[a-zA-Z\u0600-\u06FF\s,'\-+]+$/;
            setSearchInput(value)
            setShowHistory(value === '');
            if ((pattern.test(value) || value === '') && (value.length < 25)) {
                dispatch(fetchDataWithCache(value, cardsData, setCardsData))
            } else {
                setCardsData([])
            }
        }, [dispatch, cardsData, setCardsData, setSearchInput, setShowHistory]);

        useEffect(() => {
            const updateDimensions = () => {
                const rect = searchBarContainerRef.current.getBoundingClientRect();
                setXPosition(rect.left);
                setWidth(rect.width);
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
        }, [setXPosition, setWidth]);*/

    const handleSearchInputChange = (event) => {
        dispatch(changeSearchToken(event.target.value));
        setCurrentSearchToken(event.target.value);
    }
    const handleKeyPressed = (event) => {
        if (event.key === 'Enter' && event.target.value.trim()) {
            console.log("appendSearches:" + event.target.value)
            localStorage.setItem('lastSearches', JSON.stringify(currentSearchToken));
        }
    }

    return (
        <div className="navbar">
            <div className="title">
                <div>Stack<span className="logo-span">Info</span></div>
            </div>
            <div className="search-bar-container" onClick={(e) => {
                e.stopPropagation();
                setSearchHistoryShown(!searchHistoryShown)
            }}>
                <SearchOutlinedIcon className="search-icon"/>
                <input
                    id="input-element-id"
                    onChange={handleSearchInputChange}
                    onKeyUp={handleKeyPressed}
                    className="search-bar"
                    type="text"
                    placeholder="Company, city, technology, language..."
                />
                {searchHistoryShown ? <SearchWindow/> : ''}
            </div>
            <div className="actions">
                <button className="actions-button">
                <span className="material-symbols-outlined icon">
                    apps
                </span>
                </button>
            </div>
        </div>)
}

export default Navbar;