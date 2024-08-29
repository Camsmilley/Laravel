import React, { useState, useContext } from "react";
import { AuthContext } from './AuthContext'; // Adjust the import path as needed
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
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
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <em className="fw-bold text-success">Treks</em>
          <span className="text-dark">Safari</span>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <GiHamburgerMenu className="toggleIcon icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            {user && !user.is_admin && (
              <li className="nav-item">
                <Link to="/guestdashboard" className="nav-link">Guest Dashboard</Link>
              </li>
            )}
          </ul>

          <div className="d-flex ms-auto">
            {!user || user.is_admin ? (
              <>
                <Link to="/signup" className="btn btn-outline-success me-2">Sign Up</Link>
                <Link to="/login" className="btn btn-outline-primary">Login</Link>
              </>
            ) : (
              <button onClick={logout} className="btn btn-outline-danger">Logout</button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
