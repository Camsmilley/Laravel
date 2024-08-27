import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import About from './Components/AboutPage/About';
import Login from './Components/LoginPage/Login';
import StaffLogin from './Components/LoginPage/StaffLogin';
import SignUp from './Components/SignupPage/Signup';
import Details from './Components/DetailsPage/Details';
import Dashboard from './DashboardPage/Dashboard';
import Bookings from './DashboardPage/Bookings';
import BookingDetails from './DashboardPage/BookingDetails';
import ToursPage from './DashboardPage/TourPage';
import Add from './DashboardPage/Add';
import Edit from './DashboardPage/Edit';
import ViewDetails from './DashboardPage/ViewDetails';
import Guides from './DashboardPage/Guides';
import AddGuide from './DashboardPage/AddGuide';
import EditGuide from './DashboardPage/EditGuide';
import GuestDashboard from './GuestDashboard/GuestDashboard';
import GuestBookings from './GuestDashboard/GuestBooking';
import GuestDetails from './GuestDashboard/GuestDetails';
import GuestTourPage from './GuestDashboard/GuestTourPage';
import GuestGuide from './GuestDashboard/GuestGuide';
import ProtectedRoute from './Components/ProtectedRoute';
import { AuthProvider } from './Components/AuthContext';
import Carousel from './GuestDashboard/Carousel';
import EditBooking from './DashboardPage/EditBooking';
import GuestEditBooking from './GuestDashboard/GuestEditBooking';
import OurMission from './DashboardPage/OurMission';
import GuestOurMission from './GuestDashboard/GuestOurMission';
import WhattoWear from './GuestDashboard/WhattoWear';
import BookNow from './GuestDashboard/BookNow';
import Mission from './Components/Mission';
import Wear from './Components/Wear';
import Safety from './Components/Safety';
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/home" element={<HomePage />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/stafflogin" element={<StaffLogin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/ourpurpose" element={<Mission />} />
          <Route path="/whattowear" element={<Wear />} />
          <Route path="/safety" element={<Safety />} />


          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/guestdashboard" element={<GuestDashboard />} />
            <Route path="/guestbooking" element={<GuestBookings />} />
            <Route path="/guestdetails" element={<GuestDetails />} />
            <Route path="/guesttourpage" element={<GuestTourPage />} />
            <Route path="/guestguide" element={<GuestGuide />} />
            <Route path="/guesteditbooking" element={<GuestEditBooking />} />
            <Route path="/carousel" element={<Carousel />} />
            <Route path="/ourmission" element={<GuestOurMission/>} />
            <Route path="/whattowear" element={<WhattoWear/>} />
            <Route path="/booknow" element={<BookNow/>} />

          </Route>

          {/* Admin Routes */}
          <Route element={<ProtectedRoute adminOnly={true} />}>
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/bookings" element={<Bookings />} />
  <Route path="/bookingdetails/:id" element={<BookingDetails />} />
  <Route path="/tourpage" element={<ToursPage />} />
  <Route path="/add" element={<Add />} />
  <Route path="/viewdetails/:id" element={<ViewDetails />} />
  <Route path="/edit/:id" element={<Edit />} />
  <Route path="/guides" element={<Guides />} />
  <Route path="/addguide" element={<AddGuide />} />
  <Route path="/editguide/:id" element={<EditGuide />} />
  <Route path="/editbooking/:id" element={<EditBooking />} />
  <Route path="/ourmission" element={<OurMission />} />
</Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
