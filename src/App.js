import './App.css';
import HomePage from "./pages/home_page/home_page";
import Navbar from "./shared_components/navbar/navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FeedbackModal from "./shared_components/feedback-modal/feedback-modal";
import React from "react";
function App() {
  return (
    <div className="App">
        <Navbar/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
