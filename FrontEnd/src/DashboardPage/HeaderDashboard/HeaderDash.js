import React, { useState } from "react";
import "./HeaderDash.css";


import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";

// Import Logo
import Logo from '../../assets/logo.png'
import { Link } from "react-router-dom";

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
        <Link to='/'><img src={Logo} alt="Logo" /></Link>
      </div>

      <div className={active}>
        <ul className="navList">
          <li className="navItem">
            <Link to='/dashboard' className="navLink">
            Dashboard
            </Link>
          </li>
          <li className="navItem">
            <a src='' className="navLink">
            Admin Profile
            </a>
          </li>
          <li className="navItem">
            <a src='' className="navLink">
            Guest Profile
            </a>
          </li>
          <li className="navItem">
            <Link to='/bookings' className="navLink">
            Bookings
            </Link>
          </li>
          <li className="navItem">
            <Link to='/tourpage' className="navLink">
            Tours
            </Link>
          </li>
          <li className="navItem">
            <Link to='/guides' className="navLink">
            Guide
            </Link>
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