import {React, useState} from 'react';
import './navbar.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import AppsIcon from '@mui/icons-material/Apps';
import LightModeIcon from '@mui/icons-material/LightMode';

function Navbar () {
/*    const [mode, setMode] = useState(true);
    const toggleMode = () => {
        setMode(!mode);
    };*/
    return(
        <div className="navbar">
            <div className="title">
                <div>Stack<span style={{color: "#2560fc"}}>Info</span></div>
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
