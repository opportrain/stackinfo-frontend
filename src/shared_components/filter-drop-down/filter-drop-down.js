import React, {useEffect, useState} from 'react';
import './filter-drop-down.css'
import Checkbox from '@mui/material/Checkbox';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {useDispatch, useSelector} from "react-redux";
import {addFilter, removeFilter, resetSelectAll} from "../../features/filtering/filterSlice";

function FilterDropDown({title, options}) {
    const [allOptions, setAllOptions] = useState([]);
    useEffect(() => {
        const updatedOptions = options.map(option => ({
            filterName: option,
            filterStack: `stacks.${title.toLowerCase()}`
        }));
        setAllOptions(updatedOptions)
    }, []);
    const selectedFilters = useSelector((state) => state.filtering.filters[`stacks.${title.toLowerCase()}`]);
    const dispatch = useDispatch();
    const [isDropDownOpened, setIsDropDownOpened] = useState(false);
    const [isIndeterminate, setIsIndeterminate] = useState(false);
    const [isAllChecked, setIsAllChecked] = useState(false);

    function getOptionList() {
        let optionsList = [];
        for (let x = 0; x < allOptions.length; x++) {
            optionsList.push(
                <div key={allOptions[x].filterName} className="filter-option">
                    <Checkbox
                        checked={checkIfOptionChecked(allOptions[x].filterName)}
                        onChange={optionChecked}
                        name={title.toLowerCase()}
                        id={allOptions[x].filterName}/>
                    <label htmlFor={allOptions[x].filterName}>{allOptions[x].filterName}</label>
                </div>
            )
        }
        return optionsList;
    }

    function optionChecked(e) {
        let filterData = {
            filterName: e.target.id,
            filterStack: `stacks.${e.target.name}`
        }
        if (e.target.checked) {
            dispatch(addFilter(filterData));
        } else {
            dispatch(removeFilter(filterData));
        }
    }

    function checkAllOptions() {
        let filterStack = `stacks.${title}`
        if (isAllChecked || isIndeterminate) {
            dispatch(resetSelectAll({filterStack}))
        } else {
            allOptions.forEach((option) => {
                dispatch(addFilter(option))
            })
        }
    }

    function checkIfOptionChecked(option) {
        if(!selectedFilters) return false;
        return selectedFilters?.some((opt) => opt === option);
    }

    function checkIfAllOptionsChecked() {
        if (!selectedFilters) {
            setIsAllChecked(false)
        } else setIsAllChecked(allOptions?.length === selectedFilters?.length);
    }

    function checkIfIndeterminate() {
        if (selectedFilters?.length > 0 && selectedFilters?.length < allOptions.length) {
            setIsIndeterminate(true)
        } else setIsIndeterminate(false)
    }

    useEffect(() => {
        checkIfIndeterminate()
        checkIfAllOptionsChecked()
    }, [selectedFilters]);
    return (
        <div className="dropdown">
            <div className="dropdown-title">
                <div>
                    <Checkbox
                        checked={isAllChecked}
                        indeterminate={isIndeterminate}
                        onChange={checkAllOptions}/>
                    <span onClick={() => {
                        setIsDropDownOpened(!isDropDownOpened);
                    }}>
                    {title}
                </span>
                </div>
                <div onClick={() => {
                    setIsDropDownOpened(!isDropDownOpened);
                }}>{isDropDownOpened ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}</div>
            </div>
            {isDropDownOpened ? <div className={'options-list'}>{getOptionList()}</div> : null}
        </div>
    )
}

export default FilterDropDown;
