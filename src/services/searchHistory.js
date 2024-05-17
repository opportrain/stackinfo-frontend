import {useEffect, useState} from "react";

const appendSearches = (newSearches, lastSearches, setLastSearches) => {
    console.log("inside appendSearches")

    const filteredNewSearches = newSearches.filter(search => search.trim() !== "");
    const updatedSearches = [...new Set([...lastSearches, ...filteredNewSearches])];
    setLastSearches(updatedSearches);
    localStorage.setItem('lastSearches', JSON.stringify(updatedSearches));
};

const removeSearch = (search, lastSearches, setLastSearches) => {
    console.log("inside removeSearch")

    const updatedSearches = lastSearches.filter(item => item !== search);
    setLastSearches(updatedSearches);
    localStorage.setItem('lastSearches', JSON.stringify(updatedSearches));
};

const clearLastSearches = (setLastSearches) => () => {
    setLastSearches([]);
    console.log("inside clearLastSearches")
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
