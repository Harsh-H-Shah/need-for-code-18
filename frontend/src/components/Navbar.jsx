import React from "react";
import Logo from "../assets/images/pawslogo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <img src={Logo} alt="logo" className="logo" />
      <h2 className="pawshunger">PawsHunger</h2>
      <Link to="/adopt" className="links">Adoption</Link>
      <Link to="/health" className="links">Health Care</Link>
      <Link to="/" className="links">Report Abuse</Link>
      <Link to="/info" className="links">Info</Link>
    </nav>
  );
};

export default Navbar;
