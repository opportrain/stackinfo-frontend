import React, { useState, useEffect } from 'react';
import './filter.css';

function Filters() {
    const [filtersHeight, setFiltersHeight] = useState(window.innerHeight + 'px');

    useEffect(() => {
        const updateFiltersHeight = () => {
            setFiltersHeight(window.innerHeight + 'px');
        };

        window.addEventListener('resize', updateFiltersHeight);

        return () => {
            window.removeEventListener('resize', updateFiltersHeight);
        };
    }, []);


    return (
        <div className='filters-container' style={{
            }}>
            Filters for test

        </div>
    );
}

export default Filters;
