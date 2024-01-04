import React from 'react';
import './card.css'
import testLogo from '../../assets/test_card_logo.svg';
import SimpleSlider from "./slider";
import nextJsLogo from '../../assets/results/nextJs.svg';
import kafkaLogo from '../../assets/results/kafka.svg';
import dokerLogo from '../../assets/results/docker.svg';
import javaLogo from '../../assets/results/java.svg';
import mongoLogo from '../../assets/results/mongoDB.svg';
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
