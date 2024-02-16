import {React, useState} from 'react';
import './navbar.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import AppsIcon from '@mui/icons-material/Apps';
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchWindow from "../../shared_components/search-model/search-window";
import Logo from '../../assets/logo.png'
function Navbar ({toggleSearchWindow}) {
    const [mode, setMode] = useState(true);
    // const [isSearchWindowVisible, setSearchWindowVisible] = useState(false);
    // const [searchBarWidth, setSearchBarWidth] = useState(null); // State to hold the search bar width


    const handleSearchBarClick = () => {
        // Directly call toggleSearchWindow without width, assuming
        // the App component manages the visibility state only.
        // If you need to pass the width, you would need to adjust both
        // this component and the App component accordingly.
        toggleSearchWindow();
    };

    // const showModal = ()=>{
    //     setSearchWindowVisible(true);
    // }
    // const closeModal = ()=>{
    //     setSearchWindowVisible(false);
    // }
    const toggleMode = () => {
        setMode(!mode);
    };
    return(
        <div className="navbar">
            <div className="title">
                <div>Stack<span className="logo-span">Info</span></div>
            </div>
            <div className="search-bar-container">
                <SearchOutlinedIcon className="search-icon"/>
                <input
                    onClick={handleSearchBarClick}
                    className="search-bar"
                    type="text"
                    placeholder="Company, city, technology, language..."/>
                {/*{isSearchWindowVisible && <SearchWindow width={searchBarWidth} closeModal={closeModal} />}*/}
            </div>
            <div className="actions">
                <button className="actions-button moon-icon" onClick={toggleMode}>
                    {mode ? <NightlightRoundIcon className="icon"/> : <LightModeIcon className="icon"/>}
                </button>
                <button className="actions-button">
                    <AppsIcon className="icon"/>
                </button>
            </div>
        </div>
    )
}
export default Navbar;
