import React, { useState, useContext } from "react";
import "./GuestHeader.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import Logo from '../../assets/logo.png';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../Components/AuthContext';

const GuestHeader = () => {
  const [active, setActive] = useState("navBar");
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const showNavBar = () => {
    setActive("navBar showNavbar");
  };

  const closeNavbar = () => {
    setActive("navBar");
  };

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div className="headerdash">
      <div className="logoDiv">
        <Link to='/'><img src={Logo} alt="Logo" /></Link>
      </div>

      <div className={active}>
        <ul className="navList">
          <li className="navItem">
            <Link to='/guestdashboard' className="navLink">Dashboard</Link>
          </li>
          <li className="navItem">
            <Link to='/guestbooking' className="navLink">Bookings</Link>
          </li>
          <li className="navItem">
            <Link to='/guesttourpage' className="navLink">Tours</Link>
          </li>
          <li className="navItem">
            <Link to='/guestguide' className="navLink">Guide</Link>
          </li>
        </ul>

        <AiFillCloseCircle className="icon closeIcon" onClick={closeNavbar} />
        <div className="headerBtns flex">
          <button onClick={handleLogout} className="btn loginBtn">Logout</button>
        </div>
      </div>

      <GiHamburgerMenu className="toggleIcon icon" onClick={showNavBar} />
    </div>
  );
};

export default GuestHeader;