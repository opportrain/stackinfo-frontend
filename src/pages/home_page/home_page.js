import React, {useState} from 'react';
import './home_page.css';
import Heart from '../../assets/Heart.svg';
import Filter from '../../assets/Filter.svg';
import Card from "../../shared_components/card/card";
import Filters from "../../shared_components/filter/filter";
import FeedbackModal from "../../shared_components/feedback-modal/feedback-modal";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import {useDispatch, useSelector} from "react-redux";
import CloseIcon from '@mui/icons-material/Close';
import {removeFilter, resetFilters} from "../../features/filtering/filterSlice";
function HomePage () {
    const selectedFilters = useSelector((state) => state.filtering.filters);
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFiltersShowed, setIsFiltersShowed] = useState(false);
    const openModal = ()=>{
        setIsModalOpen(true);
    }
    const closeModal = ()=>{
        setIsModalOpen(false);
    }

    return(
        <div className="page-wrapper">
            <div className="header">
                <img src={Heart} alt="Heart Icon"/>
                <div>Welcome to Stack Info: <span className="sub-header">Discover, Connect, Empower</span></div>
            </div>
            <div className="feedback-container">
                <div className="feedback-message">
                    <span className="heart-emoji">💙</span> Help us enhance your experience! Share your thoughts and suggestions by giving us <span onClick={openModal} className='text-blue-600'>feedback</span>.
                </div>
                <button className="filter-button" onClick={()=>{
                    setIsFiltersShowed(!isFiltersShowed);
                }}>
                    <img className={ isFiltersShowed ? 'hide-filters' : '' } src={Filter} alt="Filter Icon"/>
                    <span>{ isFiltersShowed ? 'Hide Filters' : 'Show Filters' }</span>
                </button>
            </div>
            <div className="page-body">
                <div className='selected-filters-container'>
                    <div className="selected-filters">{
                        selectedFilters.map((filter) => (
                            <div className="filter-tag" key={filter}>
                            <div>{filter}</div>
                            <button className="remove-filter-btn" onClick={()=>{dispatch(removeFilter(filter))}}>
                                <CloseIcon style={{ fontSize: 14 }} />
                            </button>
                        </div>
                        ))}
                    </div>
                    { selectedFilters.length > 0 ? <button className='clear-all-btn' onClick={()=> {
                        dispatch(resetFilters())
                    }}>Clear All</button> : null }
                </div>
                        <div className="main-container">
                        <div className="barWrapper">
                            <SimpleBar  style={{ maxHeight: '100vh'}}>
                                <div className="card-container">
                                    <Card/>
                                    <Card/>
                                    <Card/>
                                    <Card/>
                                    <Card/>
                                    <Card/>
                                    <Card/>
                                    <Card/>
                                    <Card/>
                                    <Card/>
                                    <Card/>
                                    <Card/>
                                    <Card/>
                                    <Card/>
                                    <Card/>
                                    <Card/>
                                    <Card/>
                                    <Card/>
                                    <Card/>
                                </div>
                            </SimpleBar>
                        </div>
                        { isFiltersShowed ? <Filters/> : null }
                    </div>

            </div>
            {isModalOpen && <FeedbackModal closeModal={closeModal} />}
        </div>
    )
}

export default HomePage;
