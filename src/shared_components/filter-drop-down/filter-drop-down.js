import React, {useEffect, useState} from 'react';
import './filter-drop-down.css'
import Checkbox from '@mui/material/Checkbox';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {useDispatch, useSelector} from "react-redux";
import {addFilter, removeFilter, resetFilters} from "../../features/filtering/filterSlice";

function FilterDropDown({title, options}) {
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
    const [isIndeterminate, setIsIndeterminate] = useState(false);
    const [isAllChecked, setIsAllChecked] = useState(false);
    const [checkedOptionsLocalArr, setCheckedOptionsLocalArr] = useState([]);

    function getOptionList() {
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

    function checkAllOptions(e) {
        if (isAllChecked || isIndeterminate) {
            setCheckedOptionsLocalArr([]);
            dispatch(resetFilters())
        } else {
            setCheckedOptionsLocalArr(allOptions);
            allOptions.forEach((option) => {
                dispatch(addFilter(option))
            })
        }
    }

    function checkIfOptionChecked(option) {
        return selectedFilters.some((opt) => opt.filterName === option);
    }

    function checkIfAllOptionsChecked() {
        if (checkedOptionsLocalArr.length === 0) {
            setIsAllChecked(false)
        } else setIsAllChecked(allOptions.length === checkedOptionsLocalArr.length);
    }

    function checkIfIndeterminate() {
        if (checkedOptionsLocalArr.length > 0 && checkedOptionsLocalArr.length < allOptions.length) {
            setIsIndeterminate(true)
        } else setIsIndeterminate(false)
    }

    useEffect(() => {
        checkIfIndeterminate()
        checkIfAllOptionsChecked()
    }, [checkedOptionsLocalArr, selectedFilters]);
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
