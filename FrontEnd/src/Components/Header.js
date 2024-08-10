import React, { useState } from "react";
import "./Components.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";

// Import Logo
import Logo from '../assets/logo.png'

const Header = () => {
  const [active, setActive] = useState("navBar");
  const showNavBar = () => {
    setActive("navBar showNavbar");
  };
  const closeNavbar = () => {
    setActive("navBar");
  };

  return (
    <div className="header">
      <div className="logoDiv">
        <a href=''><img src={Logo} alt="Logo" /></a>
      </div>

      <div className={active}>
        <ul className="navList">
          <li className="navItem">
            <a href='' className="navLink">
              Home
            </a>
          </li>
          <li className="navItem">
            <a href='' className="navLink">
              About
            </a>
          </li>
          {/* <li className="navItem">
                    <a href="" className="navLink">Login</a>
                </li> */}
        </ul>

        <AiFillCloseCircle className="icon closeIcon" onClick={closeNavbar} />
        <div className="headerBtns flex">
          <a href='' className="btn signInBtn">Sign Up</a>
          <a href='' className="btn loginBtn">Login</a>
          
        </div>
      </div>

      <GiHamburgerMenu className="toggleIcon icon" />
    </div>
  );
};

export default Header;