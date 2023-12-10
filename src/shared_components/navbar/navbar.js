import {React, useState} from 'react';
import './navbar.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import AppsIcon from '@mui/icons-material/Apps';
import LightModeIcon from '@mui/icons-material/LightMode';
import Logo from '../../assets/logo.png'
function Navbar () {
    const [mode, setMode] = useState(true);
    const toggleMode = () => {
        setMode(!mode);
    };
    return(
        <div className="navbar">
            <div className="title">
                <img src={Logo} alt="Logo" className="logo"/>
                <div>StackInfo</div>
            </div>
            <div className="search-bar-container">
                <SearchOutlinedIcon className="search-icon"/>
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Company, city, technology, language..."/>
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
