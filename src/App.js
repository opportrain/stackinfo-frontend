import React, {useContext} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from "./pages/home_page/home_page";
import Navbar from "./shared_components/navbar/navbar";
import SearchWindow from "./shared_components/search-window/search-window";
import { AppContext } from './features/context';

function App() {
    const {
        isSearchWindowVisible,
        setSearchWindowVisible,
    } = useContext(AppContext);
    return (
    <div className="App">
        <Navbar/>
        {isSearchWindowVisible && <SearchWindow/>}
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
            </Routes>
        </Router>
    </div>
  );
}
export default App;