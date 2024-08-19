import React, { useState, useEffect } from "react";
import Axios from 'axios';
import HeaderDash from "./HeaderDashboard/HeaderDash";
import Video from "../assets/video1.mp4";
import img from "../assets/card1.jpg";
import moment from 'moment';
import { FaBook, FaUserFriends, FaMapMarkedAlt } from 'react-icons/fa';
import { MdOutlineTour } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import './Dashboard.css'

const Dashboard = () => {
  const [totalBookings, setTotalBookings] = useState(0);
  const [totalGuides, setTotalGuides] = useState(0);
  const [totalTours, setTotalTours] = useState(0);
  const [bookingsToday, setBookingsToday] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [bookingsRes, guidesRes, toursRes, dailyBookingsRes] = await Promise.all([
          Axios.get('http://localhost:8000/api/total-bookings'),
          Axios.get('http://localhost:8000/api/total-guides'),
          Axios.get('http://localhost:8000/api/total-tours'),
          Axios.get('http://localhost:8000/api/daily-bookings')
        ]);

        setTotalBookings(bookingsRes.data.total);
        setTotalGuides(guidesRes.data.total);
        setTotalTours(toursRes.data.total);
        setBookingsToday(dailyBookingsRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastBooking = currentPage * itemsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - itemsPerPage;
  const currentBookings = bookingsToday.slice(indexOfFirstBooking, indexOfLastBooking);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(bookingsToday.length / itemsPerPage);

  return (
    <>
      <HeaderDash />
      <div className="container-fluid my-5">
        {/* <div className="row mb-4">
          <div className="col text-center">
            <h1 className="display-4">Treks Safari Admin Dashboard</h1>
            <p className="lead">Your hub for managing safaris and bookings</p>
          </div>
        </div> */}

        <div className="row g-4 mx-5">
          <div className="col-lg-2">
            <div className="card bg-success text-dark mb-3">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <FaBook className="text-primary" size={50} />
                </div>
                <div className="ms-3">
                  <h5 className="card-title">Total Bookings</h5>
                  <h3 className="card-text text-dark">{totalBookings}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="card bg-success text-dark mb-3">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <FaUserFriends className="text-danger" size={50}/>
                </div>
                <div className="ms-3">
                  <h5 className="card-title">Total Guides</h5>
                  <h3 className="card-text text-dark">{totalGuides}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="card bg-success text-dark mb-3">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <FaMapMarkedAlt className="text-success" size={50} />
                </div>
                <div className="ms-3">
                  <h5 className="card-title">Total Tours</h5>
                  <h3 className="card-text text-dark">{totalTours}</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="card bg-success text-dark mb-3">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <IoIosPeople className="text-warning" size={50} />
                </div>
                <div className="ms-3" >
                  <h5 className="card-title">Total Guests</h5>
                  <h3 className="card-text text-dark">{totalTours}</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card bg-success text-dark mb-3">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                <MdOutlineTour className="text-secondary" size={50} />
                   <span>Mountain</span>
                </div>
                <div className="ms-3">
                  <h5 className="card-title">Ongoing Tour</h5>
                  <h3 className="card-text text-dark">{totalTours}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4 mx-5">
          <div className="col-lg-8">
            <div className="card text-center bg-success "> 
            <div className="card-body" >
                <h4 className="card-title">Providing top-notch services for every adventure!</h4>
                <div className="d-flex justify-content-start mt-3 d-flex justify-content-center">
                  <a href="#" className="btn btn-primary me-2">Our Mission</a>
                  <a href="#" className="btn btn-success">Explore More</a>
                </div>
              </div>
              <div className="ratio ratio-16x9">
                <video src={Video} autoPlay loop muted className="card-img-top"></video>
              </div>
             
            </div>
          </div>

          <div className="col-lg-4 ">
            <div className="card h-100 bg-success">
              <div className="card-header btn text-white">
                <h3 className="card-title mb-0">Bookings Today</h3>
              </div>
              <div className="card-body p-0">
                {bookingsToday.length > 0 ? (
                  <>
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th scope="col">Guest Name</th>
                          <th scope="col">Safari Name</th>
                          <th scope="col">Guide Name</th>
                          <th scope="col">Arrival Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentBookings.map((booking) => (
                          <tr key={booking.id}>
                            <td>{booking?.guestName || 'N/A'}</td>
                            <td>{booking?.safariname || 'N/A'}</td>
                            <td>{booking?.guide?.name || 'N/A'}</td>
                            <td>{moment(booking.arrivalDate).format('MMMM Do YYYY')}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <nav className="d-flex justify-content-center">
                      <ul className="pagination">
                        {Array.from({ length: totalPages }, (_, index) => (
                          <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                            <button
                              className="btn" //page-link
                              onClick={() => handlePageChange(index + 1)}
                            >
                              {index + 1}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </>
                ) : (
                  <div className="p-3 text-center" >No bookings today.</div>
                )}
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </>
  );
};

export default Dashboard;
