import React, { useEffect, useRef, useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "../../index.css";
import "./Signup.css";
import { Link } from "react-router-dom";

const SignUp = () => {


  return (
    <>
      <Header />
      <div className="container formContainer">
        <div className="formCard">
          <h3>SignUp Page</h3>
          <span>Create an account</span>

          <form action="">
            <div className="inputDiv">
              <label htmlFor="email">User Email</label>
              <input
                type="email"
                placeholder="Enter user email"
                id="email"
                name="guestEmail"
              />
              <input type="hidden" name="role"  value="guest" />
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                id="password"
                name="guestPassword"
              />
            </div>

            <button className="btn">
              Sign Up
            </button>
          </form>

          <span className="signUpBtn">
            Have an account? <Link to={"/login"}>Login</Link>{" "}
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;