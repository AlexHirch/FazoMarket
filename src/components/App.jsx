import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InfoBar } from "../ui";
import {Navbar, Home, ProductFilter, Footer } from "./";
import ProductPath from "./path/product-path";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <InfoBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filter" element={<ProductFilter />} />
        <Route path="/description" element={<ProductPath />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
};

export default App;
