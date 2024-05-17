import React ,{useEffect, useRef, useContext, useCallback} from 'react';
import './navbar.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {useDispatch} from "react-redux";
import { appendSearches } from "../../services/searchHistory";
import { AppContext } from '../../features/context';
import {fetchDataWithCache} from '../../services/caching'
import { debounce } from '../../services/debounce';

function Navbar() {

    const {
        isSearchWindowVisible,
        setSearchWindowVisible,
        showHistory,
        setShowHistory,
        lastSearches,
        setLastSearches,
        setWidth,
        setXPosition,
        searchInput,
        setSearchInput,
        cardsData,
        setCardsData
    } = useContext(AppContext);
    const dispatch = useDispatch();
    const searchBarContainerRef = useRef(null);

    const handleNavbarClick = useCallback(() => {
        if(isSearchWindowVisible){
            setSearchWindowVisible(false)
        }
    },[isSearchWindowVisible, setSearchWindowVisible]);

    const handlePress = useCallback((event) => {
        if (event.key === 'Enter') {
            setSearchWindowVisible(false)
            if (event.target.value.trim()){ //not empty
                setShowHistory(!showHistory)
                appendSearches([event.target.value], lastSearches, setLastSearches);
            }
        }
    },[showHistory, lastSearches, setShowHistory, setSearchWindowVisible, setLastSearches]);


    const debouncedFetchData = useCallback(debounce((value) => {
        const pattern = /^[a-zA-Z\u0600-\u06FF\s,'\-+]+$/;
        if ((pattern.test(value) || value === '') && value.length < 25) {
            dispatch(fetchDataWithCache(value, cardsData, setCardsData));
        } else {
            setCardsData([]);
        }
    }, 100), [dispatch, cardsData, setCardsData]);

    const handleInputChange = useCallback((event) => {
        const value = event.target.value;
        setSearchInput(value);
        setShowHistory(value === '');
        debouncedFetchData(value);
    }, [setSearchInput, setShowHistory, debouncedFetchData]);

    const applySearch =useCallback( (event) => {
        const value = event.target.value;
        const pattern = /^[a-zA-Z\u0600-\u06FF\s,'\-+]+$/;
        setSearchInput(value)
        setShowHistory(value === '');
        if ((pattern.test(value) || value === '') && (value.length < 25) ) {
           dispatch(fetchDataWithCache(value,cardsData,setCardsData))
        } else {
            setCardsData([])
        }
    },[dispatch, cardsData, setCardsData, setSearchInput, setShowHistory]);

    useEffect(() => {
        const updateDimensions = () => {
            const rect = searchBarContainerRef.current.getBoundingClientRect();
            setXPosition(rect.left );
            setWidth(rect.width);
        };
        updateDimensions();
        const resizeObserver = new ResizeObserver(entries => {
            updateDimensions();
        });
        if (searchBarContainerRef.current) {
            resizeObserver.observe(searchBarContainerRef.current);
        }
        return () => {
            if (searchBarContainerRef.current) {
                resizeObserver.unobserve(searchBarContainerRef.current);
            }
        };
    }, [setXPosition, setWidth]);
    return (
        <div className="navbar" onClick={handleNavbarClick}>
            <div className="title">
                <div>Stack<span className="logo-span">Info</span></div>
            </div>
            <div className="search-bar-container"  ref={searchBarContainerRef} onClick={(e) => e.stopPropagation()}>
                <SearchOutlinedIcon className="search-icon"/>
                <input
                    onKeyPress={handlePress}
                    onClick={() => setSearchWindowVisible(true)}
                    onChange={handleInputChange}
                    className="search-bar"
                    type="text"
                    placeholder="Company, city, technology, language..."
                    value={searchInput}
                />
            </div>
            <div className="actions">
            <button className="actions-button">
                <span className="material-symbols-outlined icon">
                    apps
                </span>
            </button>
        </div>
    </div>)
}
export default Navbar;