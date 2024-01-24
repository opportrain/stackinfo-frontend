import React, {useEffect, useState} from 'react';
import './filter-drop-down.css'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {useSelector, useDispatch} from "react-redux";
import {addFilter, removeFilter, addFilters} from "../../features/filtering/filterSlice";

function FilterDropDown ({title, options}) {
    const selectedFilters = useSelector((state) => state.filtering.filters);
    const dispatch = useDispatch();
    let allOptions = options;
    const [isAllChecked, setIsAllChecked] = useState(false);
    const [checkedOptions, setCheckedOptions] = useState([]);
    const [isDropDownOpened, setIsDropDownOpened] = useState(false);
    useEffect(() => {
        if (checkedOptions.length === allOptions.length) {
            setIsAllChecked(true);
        } else {
            setIsAllChecked(false);
        }
    }, [checkedOptions]);

    useEffect(() => {
        setCheckedOptions(selectedFilters)

    }, [selectedFilters]);
    function getOptionList(){
        let optionsList = [];
        for (let x = 0; x < allOptions.length; x++) {
            optionsList.push(
                <div key={allOptions[x]} className="filter-option">
                    <Checkbox
                        checked={checkIfOptionChecked(allOptions[x])}
                        onChange={optionChecked}
                        name={allOptions[x]}
                        id={allOptions[x]}/>
                    <label htmlFor={allOptions[x]}>{allOptions[x]}</label>
                </div>
            )
        }
        return optionsList;
    }
    function optionChecked(e) {
        setCheckedOptions(prevOptions => {
            if (e.target.checked) {
                dispatch(addFilter(e.target.name));
                return [...prevOptions, e.target.name];
            } else {
                dispatch(removeFilter(e.target.name));
                return prevOptions.filter(option => option !== e.target.name);
            }
        });
    }
    function checkAllOptions(e){
        if(e.target.checked){
            setCheckedOptions(allOptions);
            dispatch(addFilters(allOptions))
            setIsAllChecked(true);
        }
        else{
            setCheckedOptions([]);
            allOptions.forEach((option)=> dispatch(removeFilter(option)))
            setIsAllChecked(false);
        }
    }
    function checkIfOptionChecked(option) {
        return isAllChecked || selectedFilters.some((opt) => opt === option);
    }
    return (
        <div className="dropdown">
            <div className="dropdown-title" onClick={(e)=>{
                e.stopPropagation();
                setIsDropDownOpened(!isDropDownOpened);
            }}>
                <FormControlLabel
                label={title}
                control={
                    <Checkbox
                        checked={isAllChecked}
                        indeterminate={checkedOptions.length > 0 &&  checkedOptions.length !== allOptions.length}
                        onChange={checkAllOptions}
                    />
                }
                />
                {isDropDownOpened ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
            </div>
            {isDropDownOpened ? <div className={'options-list'}>{getOptionList()}</div> : null}
        </div>
    )
}

export default FilterDropDown;
