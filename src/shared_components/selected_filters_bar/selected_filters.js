import React from 'react';
import './selected_filters.css'
import {useDispatch, useSelector} from "react-redux";
import CloseIcon from '@mui/icons-material/Close';
import {removeFilter} from "../../features/filtering/filterSlice";
function SelectedFilters () {
    const selectedFilters = useSelector((state) => state.filtering.filters);
    const dispatch = useDispatch();

    return (
        <div className='selected-filters'>
            {
                selectedFilters.map((filter) => (
                <div className="filter-tag" key={filter}>
                    <div>{filter}</div>
                    <button className="remove-filter-btn" onClick={()=>{dispatch(removeFilter(filter))}}>
                        <CloseIcon style={{ fontSize: 14 }} />
                    </button>
                </div>
                ))
            }
        </div>
    );
}

export default SelectedFilters;
