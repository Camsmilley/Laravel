import "../../index.css";
import "./Login.css";
import Header from "../Header";
import Footer from "../Footer";
import React, { useState, useContext } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { AuthContext } from '../../Components/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const user = await login(email, password);
      if (user) {
        if (user.is_admin) {
          // Redirect admin to dashboard
          navigate('/dashboard');
        } else {
          // Redirect guest to the page they were trying to access or home
          const from = location.state?.from || "/";
          navigate(from, { replace: true });
        }
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('An error occurred during login. Please try again.');
    }
  };

  return (
    <>
      <Header />
      <div className="container formContainer">
        <div className="formCard">
          <h3>Login Page</h3>
          <span>Welcome Guest</span>

          {error && <div className="error">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="inputDiv" >
              <label htmlFor="userEmail">User Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            </div>

            <button className="btn" type="submit">
              Login
            </button>
          </form>

          <span className="signUpBtn">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;