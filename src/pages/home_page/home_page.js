import React, {useEffect, useState, useContext, useCallback, useMemo} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './home_page.css';
import 'simplebar/dist/simplebar.min.css';
import Heart from '../../assets/Heart.svg';
import Filter from '../../assets/Filter.svg';
import CloseIcon from '@mui/icons-material/Close';
import Card from "../../shared_components/card/card";
import NotFound from "../../shared_components/not-found/not-found";
import FiltersListContainer from "../../shared_components/filters-list-container/filters-list-container";
import FeedbackModal from "../../shared_components/feedback-modal/feedback-modal";
import {removeFilter, resetFilters} from "../../features/filtering/filterSlice";
import {searchAndFilter} from "../../services/filtering";
import CircularProgress from '@mui/material/CircularProgress';
import Footer from "../../shared_components/footer/footer";
import {AppContext} from '../../features/context';

function HomePage() {
    const {
        searchInput,
        setResults,
        cardsData,
        setCardsData
    } = useContext(AppContext);

    const selectedFilters = useSelector((state) => state.filtering.filters);
    const searchToken = useSelector((state) => state.filtering.searchToken);
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFiltersShowed, setIsFiltersShowed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedFiltersTags, setSelectedFiltersTags] = useState([])
    const [cardWidth, setCardWidth] = useState('initial');

    const openModal = () => {
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false);
    }
    const getCardsElements = useCallback(() => {
        let res = [];
        cardsData?.map(cardData => (res.push(<Card
            key={cardData.company_name}
            style={{width: cardWidth}}
            width={cardWidth}
            company_name={cardData.company_name}
            slogan={cardData.city}
            stacks={cardData.stacks}
            searchInput={searchInput}
        />)))
        return res;
    }, [cardsData, searchInput, cardWidth]);
    const renderCards = () => {
        if (!cardsData && !isLoading) {
            return <NotFound/>
        } else if (isLoading) {
            return <div className="spinner-div"><CircularProgress/></div>
        }
        return getCardsElements();
    };
    const renderSelectedFilters = useCallback(() => {
        let tags = []
        for (let key in selectedFilters) {
            selectedFilters[key].map((filter) => (
                tags.push(<div className="filter-tag" key={filter}>
                    <div>{filter}</div>
                    <button className="remove-filter-btn" onClick={() => {
                        dispatch(removeFilter({
                            filterName: filter,
                            filterStack: key
                        }))
                    }}>
                        <CloseIcon style={{fontSize: 14}}/>
                    </button>
                </div>)))
        }
        setSelectedFiltersTags(tags)
    }, [selectedFilters, dispatch]);

    let selectedFiltersContainer = <div className='selected-filters-container'>
        <div className="selected-filters">{selectedFiltersTags}</div>
        <button className='clear-all-btn' onClick={() => {
            dispatch(resetFilters())
        }}>Clear All
        </button>
    </div>

    useEffect(() => {
        setIsLoading(true);
        searchAndFilter(searchToken, selectedFilters).then(res => {
            setCardsData(res.results);
            setResults(res.results);
        }).then(() => {
            setIsLoading(false);
        });
        renderSelectedFilters()
    }, [searchToken, selectedFilters, renderSelectedFilters]);

    useEffect(() => {
        const handleResize = () => {
            const containerWidth = document.querySelector('.card-container').offsetWidth;
            const baseCardWidth = 325;
            const margin = 10;
            const n = Math.floor(containerWidth / (baseCardWidth + margin * 2));
            const remainingSpace = containerWidth - n * (baseCardWidth + margin * 2);
            if (remainingSpace < 200) {
                setCardWidth(`${(containerWidth / n) - (margin * 2) + 2}px`);
            } else {
                const newN = n + 1;
                setCardWidth(`${(containerWidth / newN) - (margin * 2) + 2}px`);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className="page-wrapper">
            <div className="home_page">
                <div className="header">
                    <img src={Heart} alt="Heart Icon"/>
                    <div>Welcome to Stack Info: <span className="sub-header">Discover, Connect, Empower</span></div>
                </div>
                <div className="feedback-container">
                    <div className="feedback-message">
                        <span className="heart-emoji">💙</span> Help us enhance your experience! Share your thoughts and
                        suggestions by giving us <span onClick={openModal}
                                                       className='feedback-click'>feedback</span>.
                    </div>
                    <button className="filter-button" onClick={() => {
                        setIsFiltersShowed(!isFiltersShowed);
                    }}>
                        <img className='filter-icon' src={Filter} alt="Filter Icon"/>
                        <span>{isFiltersShowed ? 'Hide Filters' : 'Show Filters'}</span>
                    </button>
                </div>
                <div className="page-body">
                    {selectedFiltersTags.length > 0 ? selectedFiltersContainer : <br/>}
                    <div className="main-container">
                        <div className="card-container" style={{display: 'flex', flexWrap: 'wrap'}}>
                            {renderCards()}
                        </div>
                        {isFiltersShowed ? <FiltersListContainer/> : null}
                    </div>
                </div>
                {isModalOpen && <FeedbackModal closeModal={closeModal}/>}
            </div>
            <Footer/>
        </div>
    )
}

export default HomePage;