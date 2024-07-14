import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InfoBar } from "../ui";
import { Navbar, Home, ProductFilter, Footer, ProductPath, Purchase, Search, Likes } from "./";
import TabContents from "./path/tabcontents";

const App = () => {
  const [toggleState, setToggleState] = useState(1);
  return (
    <div className="App">
      <BrowserRouter>
        <InfoBar setToggleState={setToggleState} />
        <Navbar setToggleState={setToggleState} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filter" element={<ProductFilter />} />
          <Route path="/description" element={<ProductPath />} />
          <Route
            path="/installment"
            element={
              <TabContents
                toggleState={toggleState}
                setToggleState={setToggleState}
              />
            }
          />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/search" element={<Search />} />
          <Route path="/likes" element={<Likes />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
