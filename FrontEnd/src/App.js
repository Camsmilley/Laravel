import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import About from './Components/AboutPage/About';
import Login from './Components/LoginPage/Login';
import StaffLogin from './Components/LoginPage/StaffLogin';
import SignUp from './Components/SignupPage/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/stafflogin" element={<StaffLogin />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
