import React, { useEffect, useState, useContext } from "react";
import axios from 'axios';
import "./GuestDashboard.css";
import Video from "../assets/video1.mp4";
import GuestHeader from "./GuestHeader/GuestHeader";
import Carousel from "./Carousel";
import { AuthContext } from '../Components/AuthContext';
import moment from 'moment';
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { FcCancel } from "react-icons/fc";
import { GiConfirmed } from "react-icons/gi";

const GuestDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(AuthContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    if (user) {
      fetchBookings();
    }
  }, [user]);

  const fetchBookings = () => {
    axios.get(`http://localhost:8000/api/user-bookings/${user.id}`)
      .then(response => {
        setBookings(response.data);
      })
      .catch(error => {
        console.error('Error fetching bookings:', error);
      });
  };

  const handleStatusChange = (bookingId, newStatus) => {
    axios.put(`http://localhost:8000/api/bookings/${bookingId}/status`, { status: newStatus })
      .then(response => {
        fetchBookings(); // Refresh bookings after status change
        alert(response.data.message); // Show a message to the user
      })
      .catch(error => {
        console.error('Error updating booking status:', error);
        alert('An error occurred while updating the booking status. Please try again.');
      });
  };


  const indexOfLastBooking = currentPage * itemsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - itemsPerPage;
  const currentBookings = bookings.slice(indexOfFirstBooking, indexOfLastBooking);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(bookings.length / itemsPerPage);

  return (
    <>
      <GuestHeader />
      <div className="container-fluid my-5">
        <div className="row mb-4">
          <div className="col text-center">
            <h1 className="display-4">Treks Safari Guest Dashboard</h1>
            <p className="lead">This is where everything starts to happen!</p>
          </div>
        </div>

        <div className="row g-4 mx-5">
          <div className="col-lg-6">
            <div className="card text-center">
              <div className="card-body">
                <h2 className="card-title mb-5">Looking for Treking Adventure?</h2>
                 <Carousel />
                 <div className="d-flex justify-content-center m-0">
                 <Link to="/booknow" className="btn me-2">Book Now</Link>
                  <Link to="/ourmission" className="btn me-2">Our Mission</Link>
                  <Link to="/whattowear" className="btn">What to Wear Hiking</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card h-100">
              <div className="card-header btn text-white">
                <h3 className="card-title mb-0">Your Bookings</h3>
              </div>
              <div className="card-body p-0">
                {bookings.length > 0 ? (
                  <>
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th scope="col">Safari Name</th>
                          <th scope="col">Name</th>
                          <th scope="col">Guide Name</th>
                          <th scope="col">Arrival Date</th>
                          <th scope="col">Status</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                       {currentBookings.map((booking) => (
                      <tr key={booking.id}>
                        <td>{booking.safariname}</td>
                        <td>{booking.guestName}</td>
                        <td>{booking.guide.name}</td>
                        <td>{moment(booking.arrivalDate).format('MMMM Do YYYY')}</td>
                        <td>{booking.status}</td>
                        <td>
                          {booking.status === 'pending' && (
                            <>
                            <div className="d-flex justify-content-center"> 
                              <button className="btn gap-2 me-1" onClick={() => handleStatusChange(booking.id, 'confirmed')}>
                                  Confirm
                                </button>
                                <button className="btn" onClick={() => handleStatusChange(booking.id, 'cancelled')}>
                                  Cancel
                                </button>
                            </div>
                             
                            </>
                          )}
                        </td>
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
                  <div className="p-3 text-center">No bookings available.</div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="row mt-5">
          <div className="col-lg-12">
            <div className="bottomSection">
              <span className="title">Popular Tours</span>
              <Carousel />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default GuestDashboard;
