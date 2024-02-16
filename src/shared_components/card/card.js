import React from 'react';
import './card.css'
import SimpleSlider from "./slider";

import nextJsLogo from '../../assets/card/card-results/nextJs.svg';
import kafkaLogo from '../../assets/card/card-results/kafka.svg';
import dokerLogo from '../../assets/card/card-results/docker.svg';
import javaLogo from '../../assets/card/card-results/java.svg';
import mongoLogo from '../../assets/card/card-results/mongoDB.svg';
function Card (props) {
return (
    <div className="card">
        <div className="head">
                <img className="card-logo" src={props.logo} alt="card-logo"/>
                <div className="card-description">
                        <div className="company-name">{props.name}</div>
                        <div className="company-slogan">{props.slogan}</div>
                </div>
        </div>
        <hr/>
        <div className="card-body">
                <SimpleSlider/>
        </div>
        <hr/>
            <div className="card-result">
                    <div className="img-wraper">
                            <img className="result-item" src={kafkaLogo} alt="card-logo"/>
                    </div>
                    <div className="img-wraper">
                            <img className="result-item" src={mongoLogo} alt="card-logo"/>

                    </div>
                    <div className="img-wraper">
                            <img className="result-item" src={javaLogo} alt="card-logo"/>

                    </div>
                    <div className="img-wraper">
                            <img className="result-item" src={dokerLogo} alt="card-logo"/>

                    </div>
                    <div className="img-wraper">
                            <img className="result-item" src={nextJsLogo} alt="card-logo"/>

                    </div>
            </div>
    </div>
);
}

export default Card;
