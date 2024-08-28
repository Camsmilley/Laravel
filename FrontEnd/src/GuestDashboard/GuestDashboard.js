import React, { useEffect, useState, useContext } from "react";
import axios from 'axios';
import GuestHeader from "./GuestHeader/GuestHeader";
import Carousel from "./Carousel";
import { AuthContext } from '../Components/AuthContext';
import moment from 'moment';
import { useNavigate } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { FcCancel } from "react-icons/fc";
import { GiConfirmed } from "react-icons/gi";
import { TbListDetails } from "react-icons/tb";

const GuestDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(AuthContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const navigate = useNavigate();

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
        if (newStatus === 'confirmed') {
          window.location.href = 'https://www.paypal.com/ph/home'; // Redirect to the PayPal site
        }
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

  const tableStyles = {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '20px 0',
    fontSize: '16px',
    textAlign: 'left',
  };

  const thStyles = {
    backgroundColor: '#3f6b29',
    color: 'white',
    padding: '12px 15px',
    border: '1px solid #ddd',
  };

  const tdStyles = {
    padding: '12px 15px',
    border: '1px solid #ddd',
  };

  const trStyles = {
    backgroundColor: '#f2f2f2',
    '&:nth-child(even)': {
      backgroundColor: '#f9f9f9',
    },
  };

  const actionStyles = {
    display: 'flex',
    justifyContent: 'center',
  };

  // Extract nationality and contact from the first booking
  const guestNationality = bookings.length > 0 ? bookings[0].nationality : 'N/A';
  const guestContact = bookings.length > 0 ? bookings[0].contact : 'N/A';

  return (
    <>
      <GuestHeader />
      <div className="container-fluid mt-5 w-75">
        <div className="row">

              <h1 className="banner-text fw-bold" style={{ color: '#3f6b29' }}>Welcome, {user.name}!</h1>
              <p className="banner-slogan">Embark on your next adventure with us!</p>
              <h3 className="banner-text text-dark">Basic Information</h3>
              <div className="table-responsive">
                <table className="table table-bordered table-hover align-middle mb-0">
                  <thead className="table-success" style={{ backgroundColor: '#3f6b29' }}>
                    <tr>
                      <th>Name</th>
                      <th>Nationality</th>
                      <th>Contact</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{user.name}</td>
                      <td>{guestNationality}</td>
                      <td>{guestContact}</td>
                      <td>{user.email}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

           <div className="row g-4">
            <div className="col-lg-5">
              <Carousel />
            </div>

            <div className="col-lg-7">
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
                            <th>Price</th>
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
                              <td>{booking.price}</td>
                              <td>{booking.guestName}</td>
                              <td>{booking.guide.name}</td>
                              <td>{moment(booking.arrivalDate).format('MMM Do YYYY')}</td>
                              <td>
                                <span
                                  className={`badge ${booking.status === 'confirmed' ? 'bg-success' : booking.status === 'cancelled' ? 'bg-danger' : ''}`}
                                  style={{ backgroundColor: booking.status === 'confirmed' ? '' : booking.status === 'cancelled' ? '' : '#74cc47' }}
                                >
                                  {booking.status}
                                </span>
                              </td>
                              <td>
                                {booking.status === 'pending' && (
                                  <div className="btn-group" role="group">
                                    <div className="d-flex justify-content-center">
                                      <button className="btn btn-sm me-1" onClick={() => handleStatusChange(booking.id, 'confirmed')}>
                                        Confirm
                                      </button>
                                      <button className="btn btn-sm" onClick={() => handleStatusChange(booking.id, 'cancelled')}>
                                        Cancel
                                      </button>
                                    </div>
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
