import React, { createContext, useState } from 'react';
import {useSearchHistory} from "../services/searchHistory";

const AppContext = createContext();
const AppProvider = ({ children }) => {
    const [isSearchWindowVisible, setSearchWindowVisible] = useState(false);
    const [results, setResults] = useState([]);
    const [showHistory, setShowHistory] = useState(true);
    const {lastSearches, setLastSearches} = useSearchHistory();
    const [width, setWidth] = useState(0);
    const [XPosition, setXPosition] = useState(0);
    const [searchInput, setSearchInput] = useState("");
    const [cardsData, setCardsData] = useState([]);
    return (
        <AppContext.Provider value={{
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
        }}>
            {children}
        </AppContext.Provider>
    );
};
export { AppContext, AppProvider };