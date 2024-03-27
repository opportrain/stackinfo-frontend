import React, {useState, useEffect} from 'react';
import './card.css'
import defaultCardLogo from '../../assets/default_card_logo.png'
import SimpleSlider from "../slider/slider";

function Card (props) {

        return (
            <div className="card">
                    <div className="head">
                            <img className="card-logo" src={props.logo || defaultCardLogo} alt="card-logo"/>
                            <div className="card-description">
                        <div className="company-name">{props.company_name}</div>
                        <div className="company-slogan">{props.slogan}</div>
                </div>
        </div>
        <hr/>
        <div className="card-body">
                <SimpleSlider
                    stacks={props.stacks}
                />
        </div>
    </div>
);
}

export default Card;
