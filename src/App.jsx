import React from "react";
import CocktailName from "./components/CocktailName";
import RandomDrinks from "./components/RandomDrinks";
import FirstLetter from "./components/FirstLetter";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="main">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/cocktailname" element={<CocktailName />} />
          <Route path="/randomdrinks" element={<RandomDrinks />} />
          <Route path="/firstletter" element={<FirstLetter />} />
          <Route path="/*" element={<CocktailName />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
