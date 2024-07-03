import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Navbar from "./navbar";
import Infobar from "../ui/infobar";

const App = () => {
  return (
    <BrowserRouter>
      <Infobar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
