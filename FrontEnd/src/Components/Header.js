import React, { useState, useContext } from "react";
import "./Components.css";
import { AuthContext } from './AuthContext'; // Adjust the import path as needed
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";

// Import Logo
import Logo from '../assets/logo.png'
import { Link } from "react-router-dom";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
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
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <em className="fw-bold text-success">Treks</em>
          <span className="text-dark">Safari</span>
        </Link>
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
          {!user || user.is_admin ? (
            <>
              <Link to='/signup' className="btn signInBtn">Sign Up</Link>
              <Link to='/login' className="btn loginBtn">Login</Link>
            </>
          ) : (
            <button onClick={logout} className="btn logoutBtn">Logout</button>
          )}
        </div>
      </div>

      <GiHamburgerMenu className="toggleIcon icon" onClick={showNavBar} />
    </div>
  );
};

export default Header;
