import React, {useState, useEffect, useContext, useCallback, useMemo, useRef} from 'react';
import './search-window.css';
import history from "../../assets/history.svg"
import {useDispatch} from "react-redux";
import {AppContext} from '../../features/context';
import {appendSearches, removeSearch, clearLastSearches} from '../../services/searchHistory'
import {debounce} from "../../services/debounce";

const SearchWindow = () => {
    const {
        lastSearches,
        setLastSearches,
        width,
        XPosition,
    } = useContext(AppContext);
    const windowStyle = useMemo(() => ({
        left: XPosition ? `${XPosition}px` : '50%',
        width: width ? `${width}px` : 'auto',
    }), [XPosition, width]);
    const [searchHistoryItems, setSearchHistoryItems] = useState([]);

    return (
        <div className="search-window-overlay">
{/*
            <div className="search-window" style={windowStyle} onClick={e => e.stopPropagation()}>
                <div className="last-search-and-results">
                    <div className="header-last">
                        <div className="text">
                            Last Search
                        </div>
                        <button className="remove-button" onClick={handleClearLastSearches}>
                            Remove All
                        </button>
                    </div>
                    <div className="item" key={index}>
                        <button className="item-text-button" onClick={() => applySearch(search, true)}>
                            <div className="wraper">
                                <img src={history} className="history-icon" alt="history-icon"/>
                                <div className="item-text">
                                    {search}
                                </div>
                            </div>
                        </button>
                        <button onClick={() => removeSearch(search, lastSearches, setLastSearches)}
                                className="remove-button">
                            Remove
                        </button>

                    </div>
                </div>
            </div>
*/}
        </div>
    );
};
export default React.memo(SearchWindow);
