import React, { useState } from 'react';
import './search-window.css'; // Make sure your CSS is set up

const SearchWindow = ({ width, closeModal }) => {
    const [categories] = useState(['Languages', 'Technologies', 'Companies']); // Add more categories as needed
    const [lastSearches, setLastSearches] = useState(['Radix', 'C++', 'Back', 'Tech']); // Initialize with some last searches

    const removeSearch = (search) => {
        setLastSearches(lastSearches.filter(item => item !== search));
    };
    const windowStyle = width ? { width: `${width}px` } : {};


    return (
        // The overlay that covers the screen and closes the modal on click
        <div className="search-window-overlay" onClick={closeModal}>
            {/* Prevents click inside the search window from closing it */}
            <div className="search-window" style={windowStyle} onClick={e => e.stopPropagation()}>
                <div className="text">
                    I’m Looking for...
                </div>
                <div className="categories">
                    {categories.map((category, index) => (
                        <button key={index} className="category-button">
                            {category}
                        </button>
                    ))}
                </div>
                <div className="last-search-and-results">
                    {lastSearches.map((search, index) => (
                        <div key={index} className="item">
                            {search}
                            <button onClick={() => removeSearch(search)} className="remove-button">
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
                {/* You can place the close button anywhere within the search window as needed */}
                <button className="close-button" onClick={closeModal}>Close</button>
            </div>
        </div>
    );
};

export default SearchWindow;
