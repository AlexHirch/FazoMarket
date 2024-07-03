import React from "react";
import { Categories, CategoriesMobile, Nav, Slider } from "../ui";
import ChatHelp from "../ui/buttons/chat";
const Navbar = () => {

  return (
    <div>
      <Nav/>
      <Categories/>
      <Slider />
      <CategoriesMobile />
      <ChatHelp/>
    </div>
  );
};

export default Navbar;
