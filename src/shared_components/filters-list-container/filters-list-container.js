// Import the `useEffect` and `useState` hooks from React.
import React, { useState, useEffect } from 'react';
import './filter-list-container.css';
import FilterDropDown from "../filter-drop-down/filter-drop-down";
import {useDispatch} from "react-redux";
import {resetFilters} from "../../features/filtering/filterSlice";
import {getFiltersList} from "../../services/filtering"

function FiltersListContainer() {
    const [filters, setFilters] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        getFiltersList().then(res=>{
            setFilters(res.filters);
        });
    }, []);
    function getFiltersDropDowns(filters){
        let dropDownList = [];
        for(let filter in filters){
            dropDownList.push(<FilterDropDown title={filter} options={filters[filter]} key={filter}/>);
        }
        return dropDownList;
    }
    return (
        <div className='filters-container'>
            <div className="filters-title">
                Filters
            </div>
            <div className="filters-body">
                <button className="reset-btn" onClick={()=> {
                    dispatch(resetFilters())
                }}>
                    Reset Filters
                </button>
                <div className="filter-drowpdowns-container">
                    {getFiltersDropDowns(filters)}
                </div>
            </div>
        </div>
    );
}

export default FiltersListContainer;
