import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const logo =
    "https://raw.githubusercontent.com/john-smilga/starter-project-react-cocktailsdb/master/src/logo.svg";
  return (
    <nav className="navbar">
      <div className="nav-center">
        <img src={logo} alt="cocktail db" className="logo" />
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
