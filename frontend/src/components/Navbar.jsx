import React from "react";
import Logo from "../assets/images/pawslogo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="mt-4">
      <Link to="/">
        <img src={Logo} alt="logo" className="logo text-lg" />
      </Link>
      <h2 className="pawshunger">PawsHunger</h2>
      <Link to="/" className="links text-lg">
        Home
      </Link>
      <Link to="/adopt" className="links text-lg">
        Adoption
      </Link>
      <Link to="/health" className="links text-lg">
        Health Care
      </Link>
      <Link to="/security" className="links text-lg">
        Report Abuse
      </Link>
      <Link to="/info" className="links text-lg">
        Info
      </Link>
    </nav>
  );
};

export default Navbar;
