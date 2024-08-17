import React, { useState, useContext } from "react";
import "./Components.css";
import { AuthContext } from './AuthContext'; // Adjust the import path as needed
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";

// Import Logo
import Logo from '../assets/logo.png'
import { Link } from "react-router-dom";

const Header = () => {
  const { user } = useContext(AuthContext);
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
        <Link to='/'><img src={Logo} alt="Logo" /></Link>
      </div>

      <div className={active}>
        <ul className="navList">
          <li className="navItem">
            <Link to='/' className="navLink">
              Home
            </Link>
          </li>
          <li className="navItem">
            <Link to='/about' className="navLink">
              About
            </Link>
          </li>
          {user && !user.is_admin && (
            <li className="navItem">
              <Link to="/guestdashboard" className="navLink">
                Guest Dashboard
              </Link>
            </li>
          )}
        </ul>

        <AiFillCloseCircle className="icon closeIcon" onClick={closeNavbar} />
        <div className="headerBtns flex">
          <Link to='/signup' className="btn signInBtn">Sign Up</Link>
          <Link to='/login' className="btn loginBtn">Login</Link>
          
        </div>
      </div>

      <GiHamburgerMenu className="toggleIcon icon" onClick={showNavBar}  />
    </div>
  );
};

export default Header;