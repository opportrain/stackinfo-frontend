import React, { useState , useEffect} from 'react';
import './search-window.css';
import history from "../../assets/history.svg"
import {useDispatch} from "react-redux";
import {changeSearchToken} from "../../features/filtering/filterSlice";

const appendSearches = (newSearches, lastSearches, setLastSearches) => {
    const updatedSearches = [...lastSearches, ...newSearches];
    setLastSearches(updatedSearches);
    localStorage.setItem('lastSearches', JSON.stringify(updatedSearches));
};
const SearchWindow = ({ width, closeModal, results ,historyFlag, lastSearches, setLastSearches, Xpostion, searchInput} ) => {
    const windowStyle = {
        left: Xpostion ? `${Xpostion }px` : '50%',
        width: width ? `${width}px` : 'auto',
    };
    const [categories] = useState(['Companies', 'Technologies', 'Stacks', 'Languages']);
    const [currentSearches, setCurrentSearches] = useState([]);
    const dispatch = useDispatch();
    const applySearch = (e) => {
        dispatch(changeSearchToken(e));
        appendSearches([e], lastSearches, setLastSearches);
        closeModal()
    }
    const removeSearch = (search) => {
        const updatedSearches = lastSearches.filter(item => item !== search);
        setLastSearches(updatedSearches);
        localStorage.setItem('lastSearches', JSON.stringify(updatedSearches));
    };
    useEffect(() => {
        const storedSearches = localStorage.getItem('lastSearches');
        if (storedSearches) {
            const parsedSearches = JSON.parse(storedSearches).filter(search => search !== "");
            setLastSearches(parsedSearches);
            setCurrentSearches(parsedSearches);
        }
    }, []);
    useEffect(() => {
        if (results && results.length > 0) {
            let newSearches = [];
            const searchQuery = searchInput.toLowerCase();
            results.forEach(result => {
                Object.values(result).forEach(value => {
                    if (typeof value === 'string' && value.toLowerCase().startsWith(searchQuery)) {
                        newSearches.push(value);
                    }
                });
                if (result.stacks) {
                    Object.values(result.stacks).forEach(stackArray => {
                        stackArray.forEach(stack => {
                            if (stack.name && stack.name.toLowerCase().startsWith(searchQuery)) {
                                newSearches.push(stack.name);
                            }
                        });
                    });
                }
            });
            setCurrentSearches([...new Set(newSearches)]);
        }
    }, [results, searchInput]);

    return (
        <div className="search-window-overlay" onClick={closeModal}>
            <div className="search-window" style={windowStyle} onClick={e => e.stopPropagation()}>
                {/*<div className="text">*/}
                {/*    I’m Looking for...*/}
                {/*</div>*/}
                {/*<div className="categories">*/}
                {/*    {categories.map((category, index) => (*/}
                {/*        <button key={index} className="category-button">*/}
                {/*            {category}*/}
                {/*        </button>*/}
                {/*    ))}*/}
                {/*</div>*/}

                {
                    historyFlag ?
                    <div className="last-search-and-results">
                        <div className="text">
                            Last Search
                        </div>
                        {lastSearches.slice(-12).reverse().map((search, index) => (
                            <div className="item" key={index} >
                                <button  className="item-text-button" onClick={() => applySearch(search)}>
                                    <div className="wraper">
                                        <img src={history} className="history-icon" alt="history-icon"/>
                                        <div className="item-text">
                                            {search}
                                        </div>
                                    </div>
                                </button>
                                <button onClick={() => removeSearch(search)} className="remove-button">
                                    Remove
                                </button>

                            </div>
                        ))}
                    </div>
                        :
                    <div className="last-search-and-results">
                        {currentSearches.slice(0, 12).map((search, index) => (
                            <div key={index} className="item">
                                <button className="item-text-button" onClick={() => applySearch(search)}>
                                    <div className="wrapper">
                                        <div className="item-text">
                                            {search}
                                        </div>
                                    </div>
                                </button>
                                <button onClick={() => removeSearch(search)} className="remove-button">
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    );
};
export default SearchWindow;
export {appendSearches};