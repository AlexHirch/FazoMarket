import React from "react";
import { Categories, CategoriesMobile, Nav, Slider } from "../ui";
const Navbar = () => {

  return (
    <div>
      <Nav/>
      <Categories/>
      <Slider />
      <CategoriesMobile />
    </div>
  );
};

export default Navbar;
