import React from "react";
import Logo from "../../Assets/images/Logo.png"
import { Link } from "react-router-dom";
import { hamburger } from "../../Assets/icons/hamburger";
import "./style.scss";

const Header = () => {
  return (
    <div className="header" id="nav">
      <nav>
        <div className="leftMenu" >
        <div className="hamburger" >{hamburger}</div>
        <img src={Logo}  alt="Logo" className="logo" ></img> 
        </div>
        
        <ul className="nav-links">
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="">About</Link>
          </li>
          <li>
            <Link to="">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
