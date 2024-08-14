import './App.css';
import HomePage from './Components/HomePage/HomePage';
import About from './Components/AboutPage/About';
import Login from './Components/LoginPage/Login';
import StaffLogin from './Components/LoginPage/StaffLogin';
import SignUp from './Components/SignupPage/Signup';
import Details from './Components/DetailsPage/Details';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './DashboardPage/Dashboard';
import HeaderDash from './DashboardPage/HeaderDashboard/HeaderDash';


function App() {
  return (
    
    <div>
      {/* <div>
      <HeaderDash />
      <Dashboard />
      </div>
     */}

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/stafflogin" element={<StaffLogin />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/details" element={<Details />} /> */}
        <Route path="/details/:id" element={<Details />} />
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
