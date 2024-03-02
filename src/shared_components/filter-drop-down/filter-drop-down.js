import React, {useEffect, useState} from 'react';
import './filter-drop-down.css'
import Checkbox from '@mui/material/Checkbox';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {useDispatch, useSelector} from "react-redux";
import {addFilter, removeFilter} from "../../features/filtering/filterSlice";

function FilterDropDown ({title, options}) {
    const [allOptions, setAllOptions] = useState([]);
    useEffect(() => {
        const updatedOptions = options.map(option => ({
            filterName: option,
            filterStack: title
        }));
        setAllOptions(updatedOptions)
    }, []);
    const selectedFilters = useSelector((state) => state.filtering.filters);
    const dispatch = useDispatch();
    const [isDropDownOpened, setIsDropDownOpened] = useState(false);
    const [checkedOptionsLocalArr, setCheckedOptionsLocalArr] = useState([]);
    function getOptionList(){
        let optionsList = [];
        for (let x = 0; x < allOptions.length; x++) {
            optionsList.push(
                <div key={allOptions[x].filterName} className="filter-option">
                    <Checkbox
                        checked={checkIfOptionChecked(allOptions[x].filterName)}
                        onChange={optionChecked}
                        name={title}
                        id={allOptions[x].filterName}/>
                    <label htmlFor={allOptions[x].filterName}>{allOptions[x].filterName}</label>
                </div>
            )
        }
        return optionsList;
    }
    function optionChecked(e) {
        setCheckedOptionsLocalArr(prevOptions => {
            if (e.target.checked) {
                let filterData = {
                    filterName: e.target.id,
                    filterStack: e.target.name
                }
                dispatch(addFilter(filterData));
                return [...prevOptions, filterData];
            } else {
                dispatch(removeFilter(e.target.id));
                return prevOptions.filter(option => option.filterName !== e.target.id);
            }
        });
    }
    function checkAllOptions(e){
        if(e.target.checked){
            setCheckedOptionsLocalArr(allOptions);
            allOptions.forEach((option)=> {
                dispatch(addFilter(option))
            })
        }
        else{
            setCheckedOptionsLocalArr([]);
            allOptions.forEach((option)=> dispatch(removeFilter(option.filterName)))
        }
    }
    function checkIfOptionChecked(option) {
        return selectedFilters.some((opt) => opt.filterName === option);
    }
    function checkIfAllOptionsChecked(){
        return allOptions.every(element => selectedFilters.includes(element));
    }
    return (
        <div className="dropdown">
            <div className="dropdown-title">
                <div>
                    <Checkbox
                        checked={checkIfAllOptionsChecked()}
                        indeterminate={checkedOptionsLocalArr.length > 0 &&  checkedOptionsLocalArr.length !== allOptions.length}
                        onChange={checkAllOptions}/>
                <span onClick={()=>{setIsDropDownOpened(!isDropDownOpened);}}>
                    {title}
                </span>
                </div>
                <div onClick={()=>{setIsDropDownOpened(!isDropDownOpened);}}>{isDropDownOpened ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}</div>
            </div>
            {isDropDownOpened ? <div className={'options-list'}>{getOptionList()}</div> : null}
        </div>
    )
}

export default FilterDropDown;
