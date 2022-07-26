import React from "react";
import Logo from "../assets/images/pawslogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <img src={Logo} alt="logo" />
      <p>PawsHunger</p>
      <Link to="/">Home</Link>
      <Link to="/adopt">Adoption</Link>
      <Link to="/health">Healthcare</Link>
      <li>Shelter</li>
      <li>Report</li>
      <li>Contact</li>
      <Link to="/info">Info</Link>
    </nav>
  );
};

export default Navbar;
