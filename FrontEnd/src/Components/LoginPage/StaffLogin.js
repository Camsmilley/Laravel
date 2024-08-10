import "../../index.css";
import "./Login.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";


const StaffLogin = () => {

  return (
    <>
      <Header />
      <div className="container formContainer">
        <div className="formCard">
          <h3>Staff Login Page</h3>
          <span>Welcome Admin</span>

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
                autoComplete="current-password"
              />
            </div>

            <button className="btn">
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StaffLogin;