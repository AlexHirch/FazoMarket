import React from "react";
import { Categories, CategoriesMobile, Nav } from "../ui";
import ChatHelp from "../ui/buttons/chat";
const Navbar = () => {

  return (
    <div>
      <Nav/>
      <Categories/>
      <CategoriesMobile />
      <ChatHelp/>
    </div>
  );
};

export default Navbar;
