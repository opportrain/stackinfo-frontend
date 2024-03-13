import {React, useState, useEffect, useRef } from 'react';
import './navbar.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import AppsIcon from '@mui/icons-material/Apps';
import LightModeIcon from '@mui/icons-material/LightMode';
import {useDispatch} from "react-redux";
import {changeSearchToken} from "../../features/filtering/filterSlice";
import SearchWindow, { appendSearches } from "../search-window/search-window";
function Navbar(props) {

    const dispatch = useDispatch();
    const searchBarContainerRef = useRef(null);

    useEffect(() => {
        // This function updates both the X position and the width of the searchBarContainer
        const updateDimensions = () => {
            const rect = searchBarContainerRef.current.getBoundingClientRect();
            props.setXpostion(rect.left ); // Update X position relative to the viewport
            props.setWidth(rect.width); // Update width based on the element's width
        };

        // Initialize dimensions on mount
        updateDimensions();

        // Create a ResizeObserver that calls updateDimensions on resize
        const resizeObserver = new ResizeObserver(entries => {
            updateDimensions(); // This function now handles both updates
        });

        if (searchBarContainerRef.current) {
            resizeObserver.observe(searchBarContainerRef.current);
        }

        // Cleanup
        return () => {
            if (searchBarContainerRef.current) {
                resizeObserver.unobserve(searchBarContainerRef.current);
            }
        };
    }, []); // The empty dependency array ensures this effect runs only on mount and unmount

    const applySearch = (e) => {
        props.setsearchInput(e.target.value)
        if (e.target.value === '') {
            props.setHistoryFlag(true);
        } else{
            props.setHistoryFlag(false)
        }
        dispatch(changeSearchToken(e.target.value));
    }
    const handleSearchBarClick =() => {
        props.setSearchWindowVisible(true)
        // props.toggleSearchWindow(width)
    }
    const handlePress = (event) => {
        if (event.key === 'Enter') {
            props.toggleSearchWindow();
            appendSearches([event.target.value], props.lastSearches, props.setLastSearches);

        }
    };


    return (
        <div className="navbar">
            <div className="title">
                <div>Stack<span className="logo-span">Info</span></div>
            </div>
            <div className="search-bar-container"  ref={searchBarContainerRef}>
                <SearchOutlinedIcon className="search-icon"/>
                <input
                    onKeyPress={handlePress}
                    onClick={handleSearchBarClick}
                    onChange={applySearch}
                    className="search-bar"
                    type="text"
                    placeholder="Company, city, technology, language..."/>
                {/*{isSearchWindowVisible && <SearchWindow width={searchBarWidth} closeModal={closeModal} />}*/}
            </div>
            <div className="actions">
{/*                <button className="actions-button moon-icon" onClick={toggleMode}>
                    {mode ? <NightlightRoundIcon className="icon"/> : <LightModeIcon className="icon"/>}
                </button>*/}
                <button className="actions-button">
                    <AppsIcon className="icon"/>
                </button>
            </div>
        </div>
    )
}
export default Navbar;
