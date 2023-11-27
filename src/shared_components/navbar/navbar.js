import {React, useState} from 'react';
import './navbar.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import AppsIcon from '@mui/icons-material/Apps';
import LightModeIcon from '@mui/icons-material/LightMode';
function Navbar () {
    const [mode, setMode] = useState(true);
    const toggleMode = () => {
        setMode(!mode);
    };
    return(
        <div className="navbar">
            <div className="title">
                Stack Info
            </div>
            <div className="search-bar-container">
                <SearchOutlinedIcon className="search-icon"/>
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Company, city, technology, language..."/>
            </div>
            <div className="actions">
                <button className="actions-button" onClick={toggleMode}>
                    {mode ? <NightlightRoundIcon/> : <LightModeIcon/>}
                </button>
                <button className="actions-button">
                    <AppsIcon/>
                </button>
            </div>
        </div>
    )
}
export default Navbar;
