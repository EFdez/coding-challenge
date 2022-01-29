import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'foundation-sites/dist/css/foundation.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "./index.scss";

import Navbar from "./components/Navbar";

import Home from "./routes/home";
import Rules from "./routes/rules";
import Pieces from "./routes/pieces";
import Game from "./routes/game";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App_container">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/rules" element={<Rules />} />
                    <Route path="pieces" element={<Pieces />} />
                    <Route path="game" element={<Game />} />
                </Routes>
            </div>
        </BrowserRouter>
     );
}

export default App;
