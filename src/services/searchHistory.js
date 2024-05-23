import {useEffect, useState} from "react";

const appendSearches = (newSearches, lastSearches, setLastSearches) => {
    const filteredNewSearches =  newSearches
        .map(search => search.toLowerCase().trim())
        .filter(search => search !== "");

    const updatedSearches = [...new Set([...lastSearches, ...filteredNewSearches])];
    setLastSearches(updatedSearches);
    localStorage.setItem('lastSearches', JSON.stringify(updatedSearches));
};

const removeSearch = (search, lastSearches, setLastSearches) => {
    const updatedSearches = lastSearches.filter(item => item !== search);
    setLastSearches(updatedSearches);
    localStorage.setItem('lastSearches', JSON.stringify(updatedSearches));
};

const clearLastSearches = (setLastSearches) => () => {
    setLastSearches([]);
    localStorage.removeItem('lastSearches');
};

const useSearchHistory = () => {
    const [lastSearches, setLastSearches] = useState([]);

    useEffect(() => {
        const storedSearches = localStorage.getItem('lastSearches');
        if (storedSearches) {
            const parsedSearches = JSON.parse(storedSearches).filter(search => search !== "");
            setLastSearches(parsedSearches);
        }
    }, []);

    return { lastSearches, setLastSearches };
};


export { appendSearches, removeSearch, clearLastSearches, useSearchHistory };
