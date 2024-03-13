import './App.css';
import HomePage from "./pages/home_page/home_page";
import Navbar from "./shared_components/navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, {useState} from "react";
import Footer from "./shared_components/footer/footer";
import SearchWindow from "./shared_components/search-window/search-window";
// import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    const [isSearchWindowVisible, setSearchWindowVisible] = useState(false);
    const [searchBarWidth, setSearchBarWidth] = useState(0);
    const [results, setResults] = useState([]);
    const [historyFlag, setHistoryFlag] = useState(true)
    const [lastSearches, setLastSearches] = useState([]);
    const [width, setWidth] = useState(0);
    const [Xpostion, setXpostion] = useState(0);
    const [searchInput,setsearchInput]=useState("")

    const toggleSearchWindow = (width) => {
        if (!isSearchWindowVisible) {

        }
        // setSearchBarWidth(width);
        setSearchWindowVisible(!isSearchWindowVisible);
        setHistoryFlag(!historyFlag);
    };
    return (
    <div className="App">
        <Navbar setsearchInput={setsearchInput} setXpostion={setXpostion} setWidth={setWidth} toggleSearchWindow={toggleSearchWindow} setSearchWindowVisible={setSearchWindowVisible} setResults={setResults} setHistoryFlag={setHistoryFlag} lastSearches={lastSearches} setLastSearches={setLastSearches}/>
        {isSearchWindowVisible && <SearchWindow width={width} closeModal={() => setSearchWindowVisible(false) } results={results}  historyFlag={historyFlag} lastSearches={lastSearches} setLastSearches={setLastSearches} Xpostion={Xpostion} searchInput={searchInput}/>}
        <Router>
            <Routes>
                <Route path="/" element={<HomePage setResults={setResults}  />}></Route>
            </Routes>d
        </Router>
        <Footer />
    </div>
  );
}
export default App;