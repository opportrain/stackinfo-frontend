import React from 'react';
import './not-found.css'
import NotFoundImg from "../../assets/NotFound.svg"
function NotFound () {
    return(
        <div className="Not-found-container">
            <img src={NotFoundImg} alt="NotFound-image"/>
            <p className="title-not-fround">Oops, No Matches Found :(</p>
            <p className="body-not-found" >No results available. </p>
            <p className="body-not-found" >Please try another words.</p>
        </div>
    );
}
export default NotFound;
