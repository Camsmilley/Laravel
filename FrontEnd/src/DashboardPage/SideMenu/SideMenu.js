import React, { useEffect } from "react";
import "../SideMenu/SideMenu.css";

// Import Logo
import Logo from "../../assets/logo.png";

const SideMenu = () => {

  return (
    <div className="sideMenu grid">
      <div className="logoDiv">
        <a src=''>
          <img src={Logo} alt="Logo" />
        </a>
      </div>

      <div className="menu ">
        <ul className="menuList grid">
          <li className="menuItem">
            <a src='' className="link">
              Dashboard
            </a>
          </li>
          <li className="menuItem">
            <a src='' className="link">
              Bookings
            </a>
          </li>
          <li className="menuItem">
            <a src='' className="link">
              Tours
            </a>
          </li>
         
          <li className="menuItem">
            <a className="link">
              Guides
            </a>
          </li>
          <li className="menuItem">
            <a src='' className="link">
              Guest Profile
            </a>
          </li>

          <li className="menuItem logOutBtn" onClick={logOut}>
            <span>Log Out</span>
          </li>
        </ul>
      </div>
      <div className="bottomCard">{/* Will put content here! */}</div>
    </div>
  );
};

export default SideMenu;