import React from 'react';
import './card.css'
import testLogo from '../../assets/test_card_logo.svg';
import SimpleSlider from "./slider";
function Card () {
return (
    <div className="card">
        <div className="head">
                <img className="card-logo" src={testLogo} alt="card-logo"/>
                <div className="card-description">
                        <div className="company-name"> Radix Technologies</div>
                        <div className="company-slogan"> It's about the code quality</div>
                </div>
        </div>
        <hr/>
        <div className="card-body">
                <SimpleSlider/>
        </div>
        <hr/>
        <div className="card-result">
                inside result
        </div>
    </div>
);
}

export default Card;
