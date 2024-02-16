import React, {useState} from 'react';
import './home_page.css';
import Heart from '../../assets/Heart.svg';
import Filter from '../../assets/Filter.svg';
import Card from "../../shared_components/card/card";
import FiltersListContainer from "../../shared_components/filters-list-container/filters-list-container";
import FeedbackModal from "../../shared_components/feedback-modal/feedback-modal";
import 'simplebar/dist/simplebar.min.css';
import {useDispatch, useSelector} from "react-redux";
import CloseIcon from '@mui/icons-material/Close';
import {removeFilter, resetFilters} from "../../features/filtering/filterSlice";
import Footer from "../../shared_components/footer/footer";



import testLogo from '../../assets/card/card-logos/test_card_logo.svg';
import nextJsLogo from '../../assets/card/card-results/nextJs.svg';
import kafkaLogo from '../../assets/card/card-results/kafka.svg';
import dokerLogo from '../../assets/card/card-results/docker.svg';
import javaLogo from '../../assets/card/card-results/java.svg';
import mongoLogo from '../../assets/card/card-results/mongoDB.svg';


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
                    <span className="heart-emoji">💙</span> Help us enhance your experience! Share your thoughts and suggestions by giving us <span onClick={openModal} className='text-blue-600 feedback-click'>feedback</span>.
                </div>
                <button className="filter-button" onClick={()=>{
                    setIsFiltersShowed(!isFiltersShowed);
                }}>
                    <img className='filter-icon' src={Filter} alt="Filter Icon"/>
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
                    <div className="card-container">
                                    <Card
                                    logo={testLogo}
                                    name={"Radix Technologies"}
                                    slogan={"It's about the code quality"}
                                    />
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
                    { isFiltersShowed ? <FiltersListContainer/> : null }
                    </div>
            </div>
            {isModalOpen && <FeedbackModal closeModal={closeModal} />}
            <Footer/>
        </div>
    )
}

export default HomePage;
