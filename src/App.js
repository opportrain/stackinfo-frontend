import './App.css';
import HomePage from "./pages/home_page/home_page";
import Navbar from "./shared_components/navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, {useState, useEffect} from "react";
import Footer from "./shared_components/footer/footer";
import SearchWindow from "./shared_components/search-window/search-window";

function App() {
    const [isSearchWindowVisible, setSearchWindowVisible] = useState(false);
    const [results, setResults] = useState([]);
    const [historyFlag, setHistoryFlag] = useState(true)
    const [lastSearches, setLastSearches] = useState([]);
    const [width, setWidth] = useState(0);
    const [Xposition, setXposition] = useState(0);
    const [searchInput,setsearchInput]=useState("")

    const toggleSearchWindow = (width) => {
        setSearchWindowVisible(!isSearchWindowVisible);
        setHistoryFlag(!historyFlag);
    };

    return (
    <div className="App">
        <Navbar
            setsearchInput={setsearchInput}
            setXpostion={setXposition}
            setWidth={setWidth}
            toggleSearchWindow={toggleSearchWindow}
            setSearchWindowVisible={setSearchWindowVisible}
            setResults={setResults}
            setHistoryFlag={setHistoryFlag}
            lastSearches={lastSearches}
            setLastSearches={setLastSearches}
        />
        {isSearchWindowVisible &&
            <SearchWindow
            width={width}
            closeModal={() => setSearchWindowVisible(false) }
            results={results}
            historyFlag={historyFlag}
            lastSearches={lastSearches}
            setLastSearches={setLastSearches}
            Xpostion={Xposition}
            searchInput={searchInput}
            />
        }
        <Router>
            <Routes>
                <Route path="/" element={<HomePage setResults={setResults}  />}></Route>
            </Routes>
        </Router>
        <Footer />
    </div>
  );
}
export default App;