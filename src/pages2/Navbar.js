import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const logo =
    "https://raw.githubusercontent.com/john-smilga/starter-project-react-cocktailsdb/master/src/logo.svg";
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img className="logo" src={logo} alt="cocktail db" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
