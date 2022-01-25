import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'foundation-sites/dist/css/foundation.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "./index.scss";

import Navbar from "./components/Navbar";

import Home from "./routes/home";
import Rules from "./routes/rules";
import Pieces from "./routes/pieces";
import Game from "./routes/game";

ReactDOM.render(
  <BrowserRouter>
    <div className="App_container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="rules" element={<Rules />} />
        <Route path="pieces" element={<Pieces />} />
        <Route path="game" element={<Game />} />
      </Routes>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
