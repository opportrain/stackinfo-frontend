// Import the `useEffect` and `useState` hooks from React.
import React, { useState, useEffect } from 'react';
import './filter.css';

function Filters() {
    const [filtersHeight, setFiltersHeight] = useState(window.innerHeight + 'px');

    useEffect(() => {
        const updateFiltersHeight = () => {
            setFiltersHeight(window.innerHeight + 'px');
        };

        // Update the height when the window is resized
        window.addEventListener('resize', updateFiltersHeight);

        // Clean up the event listener
        return () => {
            window.removeEventListener('resize', updateFiltersHeight);
        };
    }, []);


    // Render the filters container with the dynamic height
    return (
        <div className='filters-container' style={{ //height: filtersHeight
            }}>
            Filters for test

        </div>
    );
}

export default Filters;
