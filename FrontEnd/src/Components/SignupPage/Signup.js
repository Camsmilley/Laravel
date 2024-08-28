import "../../index.css";
import React, { useState, useContext } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../Components/AuthContext';
import Header from "../Header";
import Footer from "../Footer";
import "./Signup.css";

const SignUp = () => {
  const [name, setName] = useState('');
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
      await axios.post('http://localhost:8000/api/register', { name, email, password });
      const user = await login(email, password);  // This sets the user context
      if (user) {
        const from = location.state?.from || "/";
        navigate(from, { replace: true });
      }
    } catch (error) {
      console.error('Registration failed:', error);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <>
      <Header />
      <div className="container formContainer">
        <div className="formCard1">
          <h3>SignUp Page</h3>
          <span>Create an account</span>

          {error && <div className="error">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="inputDiv">
              <label htmlFor="name">Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            </div>

            <div className="inputDiv">
              <label htmlFor="email">User Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            </div>

            <button className="btn" type="submit">
              Sign Up
            </button>
          </form>

          <span className="signUpBtn">
            Have an account? <Link to="/login">Login</Link>
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
