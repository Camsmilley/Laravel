import './App.css';
import HomePage from './Components/HomePage/HomePage';
import About from './Components/AboutPage/About';
import Login from './Components/LoginPage/Login';
import StaffLogin from './Components/LoginPage/StaffLogin';
import SignUp from './Components/SignupPage/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './DashboardPage/Dashboard';
import HeaderDash from './DashboardPage/HeaderDashboard/HeaderDash';
import Bookings from './DashboardPage/Bookings';
import BookingDetails from './DashboardPage/BookingDetails';
import ToursPage from './DashboardPage/TourPage';
import Add from './DashboardPage/Add';
import Edit from './DashboardPage/Edit';
import ViewDetails from './DashboardPage/ViewDetails';
import Guides from './DashboardPage/Guides';
import AddGuide from './DashboardPage/AddGuide';
import EditGuide from './DashboardPage/EditGuide';


function App() {
  return (
    
    <div>
      <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/bookingdetails" element={<BookingDetails/>} />
        <Route path="/tourpage" element={<ToursPage />} />
        <Route path="/add" element={<Add />} />
        <Route path="/viewdetails" element={<ViewDetails />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/addguide" element={<AddGuide />} />
        <Route path="/editguide" element={<EditGuide />} />
      </Routes>
      </BrowserRouter>
     
      </div>
    

      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/stafflogin" element={<StaffLogin />} />
        <Route path="/signup" element={<SignUp />} /> */}
        {/* <Route path="/details" element={<Details />} /> */}
        {/* <Route path="/details/:id" element={<Details />} />
      </Routes>
      </BrowserRouter>
      */}
    </div>
  );
}

export default App;
