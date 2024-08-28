import React, { useState, useEffect } from "react";
import Axios from 'axios';
import HeaderDash from "./HeaderDashboard/HeaderDash";
import Video from "../assets/video1.mp4";
import moment from 'moment';
import { BsBookmarkCheck } from "react-icons/bs";
import { MdOutlineTour } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import './Dashboard.css';
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { GiConfirmed } from "react-icons/gi";
import { FcCancel } from "react-icons/fc";
import { MdFreeCancellation } from "react-icons/md";

const Dashboard = () => {
  const [totalBookings, setTotalBookings] = useState(0);
  const [completedBookings, setCompletedBookings] = useState(0);
  const [cancelledBookings, setCancelledBookings] = useState(0);
  const [totalGuest, setTotalGuest] = useState(0);
  const [bookingsToday, setBookingsToday] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [bookingsRes, dailyBookingsRes, totalGuestRes] = await Promise.all([
        Axios.get('http://localhost:8000/api/total-bookings'),
        Axios.get('http://localhost:8000/api/daily-bookings'),
        Axios.get('http://localhost:8000/api/total-guest')
      ]);

      setTotalBookings(bookingsRes.data.total);
      setTotalGuest(totalGuestRes.data.total);
      setCompletedBookings(bookingsRes.data.completed);
      setCancelledBookings(bookingsRes.data.cancelled);
      setBookingsToday(dailyBookingsRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleStatusChange = (bookingId, newStatus) => {
    Axios.put(`http://localhost:8000/api/bookings/${bookingId}/status`, { status: newStatus })
      .then(response => {
        fetchData(); // Refresh data after status change
      })
      .catch(error => {
        console.error('Error updating booking status:', error);
      });
  };

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
      <div className="container-fluid my-5 px-5">
        <div className="row g-4 mx-6">
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
            <div className="card text-dark">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <BsBookmarkCheck className="text-primary" size={50} />
                </div>
                <div className="ms-3">
                  <h5 className="card-title">Total Bookings</h5>
                  <h3 className="card-text text-dark">{totalBookings}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
            <div className="card text-dark">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <GiConfirmed className="text-success" size={50}/>
                </div>
                <div className="ms-3">
                  <h5 className="card-title">Completed Bookings</h5>
                  <h3 className="card-text text-dark">{completedBookings}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
            <div className="card text-dark">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <MdFreeCancellation className="text-danger" size={50} />
                </div>
                <div className="ms-4">
                  <h5 className="card-title">Cancelled Bookings</h5>
                  <h3 className="card-text text-dark">{cancelledBookings}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
            <div className="card text-dark">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <IoIosPeople className="text-warning" size={50} />
                </div>
                <div className="ms-4">
                  <h5 className="card-title">Total Guests</h5>
                  <h3 className="card-text text-dark">{totalGuest}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4 mx-6">
          <div className="col-lg-5 col-md-12 col-sm-12 mb-3">
            <div className="card text-center bg-success">
              <div className="ratio ratio-16x9">
                <video src={Video} autoPlay loop muted className="card-img-top"></video>
              </div>
            </div>
          </div>

          <div className="col-lg-7 col-md-12 col-sm-12 mb-3">
            <div className="card h-100 bg-success">
              <div className="card-header btn text-white">
                <h3 className="card-title mb-0">Bookings Today</h3>
              </div>
              <div className="card-body p-0">
                {bookingsToday.length > 0 ? (
                  <>
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">Guest Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Safari Name</th>
                            <th scope="col">Guide Name</th>
                            <th scope="col">Arrival Date</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentBookings.map((booking) => (
                            <tr key={booking.id}>
                              <td>{booking?.guestName || 'N/A'}</td>
                              <td>{booking?.price || 'N/A'}</td>
                              <td>{booking?.safariname || 'N/A'}</td>
                              <td>{booking?.guide?.name || 'N/A'}</td>
                              <td>{moment(booking.arrivalDate).format('MMMM Do YYYY')}</td>
                              <td>{booking.status}</td>
                              <td>
                                {booking.status === 'pending' && (
                                  <div className="d-flex justify-content-center">
                                    <button className="btn btn-sm me-1" onClick={() => handleStatusChange(booking.id, 'confirmed')}>
                                      Confirm
                                    </button>
                                    <button className="btn btn-sm" onClick={() => handleStatusChange(booking.id, 'cancelled')}>
                                      Cancel
                                    </button>
                                  </div>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <nav className="d-flex justify-content-center">
                      <ul className="pagination">
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
                  </>
                ) : (
                  <div className="p-3 text-center">No bookings today.</div>
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
