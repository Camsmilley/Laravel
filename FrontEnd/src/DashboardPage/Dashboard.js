import React, { useState, useEffect } from "react";
import Video from "../assets/video1.mp4";
import img from "../assets/card1.jpg";
import { BsFillPersonCheckFill } from "react-icons/bs";
import HeaderDash from "./HeaderDashboard/HeaderDash";
import Axios from 'axios';
import moment from 'moment';

const Dashboard = () => {
  const [bookingsToday, setBookingsToday] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await Axios.get('http://localhost:8000/api/bookings');
        const today = moment().format('YYYY-MM-DD');
        const filteredBookings = response.data.filter(booking =>
          moment(booking.date).format('YYYY-MM-DD') === today
        );
        setBookingsToday(filteredBookings);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  // Pagination logic
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
      <div className="OutletCSS">
        <div className="pageBody">
          <div className="topSection">
            <div className="sectionTitle">
              <h1>Treks Safari Admin Dashboard</h1>
              <p>This is where everything starts to happen!</p>
            </div>

            <div className="video_Summary">
              <div className="flexLeft flex">
                <div className="videoDiv">
                  <video src={Video} autoPlay loop muted></video>
                </div>
                <div className="videoText">
                  <h4>Looking for an extraordinary service for the community!</h4>
                  <div className="btns flex">
                    <a href="#" className="link bg">
                      We base to serve
                    </a>
                    <a href="#" className="link">
                      Love for the Hikes
                    </a>
                  </div>
                </div>
              </div>

              <div className="flexRight">
                <span>Bookings Today</span>
                {bookingsToday.length > 0 ? (
                  <div>
                    <table style={styles.bookingsTable}>
                      <thead>
                        <tr>
                          <th>Guest Name</th>
                          <th>Safari Name</th>
                          <th>Guide Name</th>
                          <th>Arrival Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentBookings.map((booking) => (
                          <tr key={booking.id}>
                            <td>{booking?.guestName || 'Guest name not available'}</td>
                            <td>{booking?.safariname || 'Safari name not available'}</td>
                            <td>{booking?.guide?.name || 'Guide name not available'}</td>
                            <td>{moment(booking.arrivalDate).format('MMMM Do YYYY')}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    {/* Pagination Controls */}
                    <div style={styles.pagination}>
                      {Array.from({ length: totalPages }, (_, index) => (
                        <button
                          key={index + 1}
                          onClick={() => handlePageChange(index + 1)}
                          style={currentPage === index + 1 ? styles.activePage : styles.page}
                        >
                          {index + 1}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p>No bookings today.</p>
                )}
              </div>
            </div>
          </div>

          <div className="bottomSection">
            <span className="title">Popular Tours</span>
            <div className="toursContainer flex">
              <div className="singleTour grid">
                <div className="imgDiv">
                  <img src={img} alt="Tour" />
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  bookingsTable: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  page: {
    margin: '0 5px',
    padding: '10px 15px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer'
  },
  activePage: {
    margin: '0 5px',
    padding: '10px 15px',
    border: 'none',
    backgroundColor: '#0056b3',
    color: 'white',
    cursor: 'pointer'
  },
  pagination: {
    marginTop: '20px',
    textAlign: 'center'
  }
};

export default Dashboard;
