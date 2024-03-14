import React, {useEffect, useState} from 'react';
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

function HomePage(props ) {
    const selectedFilters = useSelector((state) => state.filtering.filters);
    const searchToken = useSelector((state) => state.filtering.searchToken);
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFiltersShowed, setIsFiltersShowed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [cardsData, setCardsData] = useState([])
    const [selectedFiltersTags, setSelectedFiltersTags] = useState([])

    const openModal = () => {
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false);
    }
    const getCardsElements = () => {
        let res = [];
        cardsData?.map(cardData => (res.push(<Card
            key={cardData.company_name}
            company_name={cardData.company_name}
            slogan={cardData.city}
            stacks={cardData.stacks}
        />)))
        return res;
    }

    const renderCards = () => {
        if (!cardsData && !isLoading) {
            return <NotFound/>
        } else if (isLoading) {
            return <div className="spinner-div"><CircularProgress/></div>
        } else {
            return getCardsElements();
        }
    }
    const renderSelectedFilters = () => {
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
    }

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
            props.setResults(res.results);
        }).then(() => {
            setIsLoading(false);
        });
        renderSelectedFilters()
    }, [searchToken, selectedFilters]);
    return (<div className="page-wrapper">
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
                <div className="card-container">
                    {renderCards()}
                </div>
                {isFiltersShowed ? <FiltersListContainer/> : null}
            </div>
        </div>
        {isModalOpen && <FeedbackModal closeModal={closeModal}/>}
    </div>)
}

export default HomePage;