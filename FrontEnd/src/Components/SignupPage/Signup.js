// import "../../index.css";
import React, { useState, useContext } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../Components/AuthContext';
import Header from "../Header";
import Footer from "../Footer";

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
      <div className="container-fluid mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card formCard1 p-4">
              <h2 className="text-center">SignUp Page</h2>
              <span className="d-block text-center">Create an account</span>

              {error && <div className="alert alert-danger">{error}</div>}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">User Email</label>
                  <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                </div>

                <button className="btn btn-primary w-100" type="submit">
                  Sign Up
                </button>
              </form>

              <span className="d-block text-center mt-3">
                Have an account? <Link to="/login">Login</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
