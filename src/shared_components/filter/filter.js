// Import the `useEffect` and `useState` hooks from React.
import React, { useState, useEffect } from 'react';
import './filter.css';
import FilterDropDown from "../filter-drop-down/filter-drop-down";
import {useDispatch} from "react-redux";
import {resetFilters} from "../../features/filtering/filterSlice";

function Filters() {
    const languagesOptions = ["C++", "Kotlin", "Java", "C#", "Python", "Swift", "Javascript", "Typescript"]
    const technologiesOptions = ["Angular", "ReactJS", "React", "ExpressJS"]
    const dispatch = useDispatch();


    // Render the filters container with the dynamic height
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
                <FilterDropDown title="Languages" options={languagesOptions}/>
                <FilterDropDown title="Technologies" options={technologiesOptions}/>
            </div>
        </div>
    );
}

export default Filters;
