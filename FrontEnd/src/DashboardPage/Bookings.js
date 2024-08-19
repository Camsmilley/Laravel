import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import HeaderDash from "./HeaderDashboard/HeaderDash";
import Axios from "axios";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:8000/api/bookings')
      .then(response => {
        setBookings(response.data);
      })
      .catch(error => {
        console.error('Error fetching bookings:', error);
      });
  }, []);

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

  return (
    <>
      <HeaderDash />
      <div className="OutletCSS">
        <div className="pageBody">
          <div className="sectionTitle">
            <h1>TreksSafari Bookings!</h1>
            <p>All hikes bookings, includes completed and the upcoming bookings!</p>
          </div>

          <div className="tableDiv">
            <table style={tableStyles}>
              <thead>
                <tr style={trStyles}>
                  <th style={thStyles}>Name of the Mountain</th>
                  <th style={thStyles}>Guest Name</th>
                  <th style={thStyles}>Nationality</th>
                  <th style={thStyles}>Contact</th>
                  <th style={thStyles}>Email</th>
                  <th style={thStyles}>Number of People</th>
                  <th style={thStyles}>Number of Children</th>
                  <th style={thStyles}>Arrival Date</th>
                  <th style={thStyles}>Message</th>
                  <th style={thStyles}>Action</th>
                </tr>
              </thead>

              <tbody>
                {bookings.map(booking => (
                  <tr key={booking.id} style={trStyles}>
                    <td style={tdStyles}>{booking.safariname}</td>
                    <td style={tdStyles}>{booking.guestName}</td>
                    <td style={tdStyles}>{booking.nationality}</td>
                    <td style={tdStyles}>{booking.contact}</td>
                    <td style={tdStyles}>{booking.email}</td>
                    <td style={tdStyles}>{booking.nop}</td>
                    <td style={tdStyles}>{booking.noc}</td>
                    <td style={tdStyles}>{booking.arrivalDate}</td>
                    <td style={tdStyles}>{booking.message || "No message provided"}</td>
                    <td style={{ ...tdStyles, ...actionStyles }}>
                      <Link to={`/bookingdetails/${booking.id}`} className="icon">
                        <TbListDetails />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookings;
