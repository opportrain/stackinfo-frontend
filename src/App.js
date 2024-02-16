import './App.css';
import HomePage from "./pages/home_page/home_page";
import Navbar from "./shared_components/navbar/navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React, {useState} from "react";
import Footer from "./shared_components/footer/footer";
import SearchWindow from "./shared_components/search-model/search-window";

function App() {
    const [isSearchWindowVisible, setSearchWindowVisible] = useState(false);
    const [searchBarWidth, setSearchBarWidth] = useState(null);

    const toggleSearchWindow = (width) => {
        if (!isSearchWindowVisible) {
            setSearchBarWidth(width); // Set the width only when opening
        }
        setSearchWindowVisible(!isSearchWindowVisible);
    };
    return (
    <div className="App">
        <Navbar toggleSearchWindow={toggleSearchWindow}/>
        {isSearchWindowVisible && <SearchWindow width={searchBarWidth} closeModal={() => setSearchWindowVisible(false)} />}
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
            </Routes>
        </BrowserRouter>
        <Footer />

    </div>
  );
}

export default App;
