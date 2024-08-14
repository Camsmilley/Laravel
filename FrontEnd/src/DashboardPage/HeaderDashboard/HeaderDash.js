import React, { useState } from "react";
import "./HeaderDash.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";

// Import Logo
import Logo from '../../assets/logo.png'

const HeaderDash = () => {
  const [active, setActive] = useState("navBar");
  const showNavBar = () => {
    setActive("navBar showNavbar");
  };
  const closeNavbar = () => {
    setActive("navBar");
  };

  return (
    <div className="headerdash">
      <div className="logoDiv">
        <a src=''><img src={Logo} alt="Logo" /></a>
      </div>

      <div className={active}>
        <ul className="navList">
          <li className="navItem">
            <a src='' className="navLink">
            Dashboard
            </a>
          </li>
          <li className="navItem">
            <a src='' className="navLink">
            Guest Profile
            </a>
          </li>
          <li className="navItem">
            <a src='' className="navLink">
            Bookings
            </a>
          </li>
          <li className="navItem">
            <a src='' className="navLink">
            Tours
            </a>
          </li>
          <li className="navItem">
            <a src='' className="navLink">
            Guide
            </a>
          </li>
          {/* <li className="navItem">
                    <a href="" className="navLink">Login</a>
                </li> */}
        </ul>

        <AiFillCloseCircle className="icon closeIcon" onClick={closeNavbar} />
        <div className="headerBtns flex">
          <a srv='' className="btn loginBtn">Logout</a>
          
        </div>
      </div>

      <GiHamburgerMenu className="toggleIcon icon" onClick={showNavBar}  />
    </div>
  );
};

export default HeaderDash;