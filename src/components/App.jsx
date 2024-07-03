import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InfoBar } from "../ui";
import {Navbar, Home, ProductFilter, Footer } from "./";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <InfoBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filter" element={<ProductFilter />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
};

export default App;
