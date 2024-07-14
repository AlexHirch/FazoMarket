import React from "react";
import { Categories, CategoriesMobile, Nav } from "../ui";
import ChatHelp from "../ui/buttons/chat";
const Navbar = ({ toggleState, setToggleState }) => {

  return (
    <div>
      <Nav setToggleState={setToggleState}/>
      <Categories/>
      <CategoriesMobile />
      <ChatHelp/>
    </div>
  );
};

export default Navbar;
