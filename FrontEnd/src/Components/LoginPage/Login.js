import "../../index.css";
import "./Login.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import { Link } from "react-router-dom";

const Login = () => {
  
  return (
    <>
      <Header />
      <div className="container formContainer">
        <div className="formCard">
          <h3>Login Page</h3>
          <span>Welcome Guest</span>

          <form action="">
            <div className="inputDiv">
              <label htmlFor="userEmail">User Email</label>
              <input
                type="email"
                placeholder="Enter user email"
                autoComplete="email"
              />
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
              />
            </div>

            <button className="btn">
              Login
            </button>
          </form>

          <span className="signUpBtn">
            Don't have an account? <Link to={"/signup"}>Sign Up</Link>
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;