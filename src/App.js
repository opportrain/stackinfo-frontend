import './App.css';
import HomePage from "./pages/home_page/home_page";
import Navbar from "./shared_components/navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import {BrowserRouter, Route, Routes} from "react-router-dom";
import React, {useState} from "react";
import Footer from "./shared_components/footer/footer";
import SearchWindow from "./shared_components/search-model/search-window";

function App() {
    const [isSearchWindowVisible, setSearchWindowVisible] = useState(false);
    const [searchBarWidth, setSearchBarWidth] = useState(null);

    const toggleSearchWindow = (width) => {
        if (!isSearchWindowVisible) {
            setSearchBarWidth(width);
        }
        setSearchWindowVisible(!isSearchWindowVisible);
    };
    return (
    <div className="App">
        <Navbar toggleSearchWindow={toggleSearchWindow}/>
        {isSearchWindowVisible && <SearchWindow width={searchBarWidth} closeModal={() => setSearchWindowVisible(false)} />}
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
            </Routes>
            {/*<Routes>*/}
            {/*    <Route path="/" element={ <Footer />}></Route>*/}
            {/*</Routes>*/}
            {/*<Footer />*/}
        </Router>
        {/*<Footer />*/}
    </div>
  );
}

export default App;