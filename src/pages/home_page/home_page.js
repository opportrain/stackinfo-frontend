import React from 'react';
import './home_page.css';
import Heart from '../../assets/Heart.svg';
import Filter from '../../assets/Filter.svg';
import colors from "tailwindcss/colors";
import Card from "../../shared_components/card/card";
// import { Scrollbars } from 'react-custom-scrollbars';
import Filters from "../../shared_components/filter/filter";
import SelectedFilters from "../../shared_components/selected_filters_bar/selected_filters";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

function HomePage () {
    return(
        <div className="page-wrapper">
            <div className="header">
                <img src={Heart} alt="Heart Icon"/>
                <div>Welcome to Stack Info: <span className="sub-header">Discover, Connect, Empower</span></div>
            </div>
            <div className="feedback-container">
                <div className="feedback-message">
                    <span className="heart-emoji">💙</span> Help us enhance your experience! Share your thoughts and suggestions by giving us <span className='text-blue-600'>feedback</span>.
                </div>
                <button className="filter-button">
                    <img src={Filter} alt="Filter Icon"/>
                </button>
            </div>
                 <div className="page-body">
                <SelectedFilters/>
                     <SimpleBar  style={{ maxHeight: '100vh', width: '100%'}}>
                         <div className="main-container">
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
                            <Filters/>
                        </div>
                     </SimpleBar>
                 </div>

        </div>
    )
}

export default HomePage;
