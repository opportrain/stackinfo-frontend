import React from 'react';
import './searching.css'
import SearchingImg from "../../assets/Searching.svg"
function searching () {
    return(
        <div className="searching-container">
            <img src={SearchingImg} alt="searching-image"/>
            <p className="body-searching" >search...</p>
        </div>
    );
}
export default searching;
