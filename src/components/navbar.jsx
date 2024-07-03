import React, { useState } from "react";
import { Logo } from "../resource";
import { CiSearch } from "react-icons/ci";
import { PiMicrophoneLight, PiScalesThin } from "react-icons/pi";
import { Categories, Nav } from "../ui";

const Navbar = () => {

  return (
    <div>
      <Nav/>
      <Categories/>
    </div>
  );
};

export default Navbar;
