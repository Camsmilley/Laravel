import React, { useEffect, useState, useContext } from "react";
import axios from 'axios';
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
        fetchBookings();
        alert(response.data.message);
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
      <div className="container-fluid bg-light mt-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h1 className="fw-bold" style={{ color: '#3f6b29' }}>Treks Safari Guest Dashboard</h1>
              <p className="lead text-muted">Embark on your next adventure with us!</p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-6">
             
                  <Carousel />
            
            </div>

            <div className="col-lg-6">
              <div className="card border-0 shadow-lg rounded-3">
                <div className="card-header text-white py-3" style={{ backgroundColor: '#3f6b29' }}>
                  <h3 className="card-title mb-0">Your Bookings</h3>
                </div>
                <div className="card-body p-0">
                  {bookings.length > 0 ? (
                    <div className="table-responsive">
                      <table className="table table-hover align-middle mb-0">
                        <thead className="table-light">
                          <tr>
                            <th>Safari</th>
                            <th>Guest</th>
                            <th>Guide</th>
                            <th>Arrival Date</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentBookings.map((booking) => (
                            <tr key={booking.id}>
                              <td>{booking.safariname}</td>
                              <td>{booking.guestName}</td>
                              <td>{booking.guide.name}</td>
                              <td>{moment(booking.arrivalDate).format('MMM Do YYYY')}</td>
                              <td>
                                <span className={`badge bg-${booking.status === 'confirmed' ? 'success' : booking.status === 'cancelled' ? 'danger' : 'warning'}`}>
                                  {booking.status}
                                </span>
                              </td>
                              <td>
                                {booking.status === 'pending' && (
                                  <div className="btn-group" role="group">
                                    <button className="btn btn-sm btn-outline-success" onClick={() => handleStatusChange(booking.id, 'confirmed')}>
                                      <GiConfirmed /> Confirm
                                    </button>
                                    <button className="btn btn-sm btn-outline-danger" onClick={() => handleStatusChange(booking.id, 'cancelled')}>
                                      <FcCancel /> Cancel
                                    </button>
                                  </div>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="p-4 text-center text-muted">No bookings available.</div>
                  )}
                </div>
                {totalPages > 1 && (
                  <div className="card-footer bg-white border-0 p-3">
                    <nav>
                      <ul className="pagination justify-content-center mb-0">
                        {Array.from({ length: totalPages }, (_, index) => (
                          <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                            <button
                              className="page-link"
                              onClick={() => handlePageChange(index + 1)}
                            >
                              {index + 1}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuestDashboard;