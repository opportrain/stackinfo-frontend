import React, {useState, useEffect, useContext, useCallback, useMemo, useRef} from 'react';
import './search-window.css';
import history from "../../assets/history.svg"
import {useDispatch} from "react-redux";
import { AppContext } from '../../features/context';
import {appendSearches, removeSearch, clearLastSearches} from '../../services/searchHistory'
import {fetchDataWithCache} from "../../services/caching";
import {debounce} from "../../services/debounce";

const SearchWindow = () => {
    const {
        isSearchWindowVisible,
        setSearchWindowVisible,
        results,
        setResults,
        showHistory,
        setShowHistory,
        lastSearches,
        setLastSearches,
        width,
        setWidth,
        XPosition,
        setXPosition,
        searchInput,
        setSearchInput,
        cardsData,
        setCardsData
    } = useContext(AppContext);
    const windowStyle = useMemo(() => ({
        left: XPosition ? `${XPosition }px` : '50%',
        width: width ? `${width}px` : 'auto',
    }), [XPosition, width]);

    const [currentSearches, setCurrentSearches] = useState([]);
    const dispatch = useDispatch();
    const debouncedFetch = useRef(debounce((searchTerm) => {
        dispatch(fetchDataWithCache(searchTerm, cardsData, setCardsData));
    }, 100)).current;

    const applySearch = useCallback((searchTerm) => {
        setSearchInput(searchTerm)
        debouncedFetch(searchTerm);
        appendSearches([searchTerm], lastSearches, setLastSearches);
        setSearchWindowVisible(false)
    },[dispatch, cardsData, setCardsData, lastSearches, setLastSearches, setSearchInput, setSearchWindowVisible]);


    const handleClearLastSearches = useCallback(() => clearLastSearches(setLastSearches), [setLastSearches]);

    useEffect(() => {
        if (results && results.length > 0) {
            const newSearches = results.flatMap(result => {
                const searchQuery = searchInput.toLowerCase();
                let matchedValues = Object.values(result)
                    .filter(value => typeof value === 'string' && value.toLowerCase().startsWith(searchQuery));

                if (result.stacks) {
                        matchedValues = matchedValues.concat(
                            Object.values(result.stacks).flat()
                                .filter(stack => stack.name && stack.name.toLowerCase().startsWith(searchQuery))
                                .map(stack => stack.name)
                        );
                    }
                    return matchedValues;
            });
            setCurrentSearches([...new Set(newSearches)]);
        }
    }, [results, searchInput]);

    return (
        <div>
            <div className="search-window-overlay" onClick={() => setSearchWindowVisible(false)}>
                {showHistory && lastSearches.length > 0 &&
                    (
                        <div className="search-window" style={windowStyle} onClick={e => e.stopPropagation()}>
                            <div className="last-search-and-results">
                                <div className="header-last">
                                    <div className="text">
                                        Last Search
                                    </div>
                                    <button className="remove-button" onClick={handleClearLastSearches}>
                                        Remove All
                                    </button>
                                </div>
                                {lastSearches.slice(-12).reverse().map((search, index) => (
                                    <div className="item" key={index}>
                                        <button className="item-text-button" onClick={() => applySearch(search)}>
                                            <div className="wraper">
                                                <img src={history} className="history-icon" alt="history-icon"/>
                                                <div className="item-text">
                                                    {search}
                                                </div>
                                            </div>
                                        </button>
                                        <button onClick={() => removeSearch(search,lastSearches,setLastSearches)} className="remove-button">
                                            Remove
                                        </button>

                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                }
                {!showHistory?
                    (
                        <div className="search-window" style={windowStyle} onClick={e => e.stopPropagation()}>
                            <div className="last-search-and-results">
                                {currentSearches.length >0 ? (
                                    currentSearches.slice(0, 12).map((search, index) => (
                                    <div key={index} className="item">
                                        <button className="item-text-button" onClick={() => applySearch(search)}>
                                            <div className="wrapper">
                                                <div className="item-text">
                                                    {search}
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    ))
                                ): (
                                    <div className="item">
                                        <div className="item-text">Search on "{searchInput}"</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )
                    :null
                }

            </div>
        </div>
    );
};
export default React.memo( SearchWindow);
