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

  return (
    <>
      <HeaderDash />
      <div className="container-fluid my-5 px-5">
        <div className="row">
          <div className="col-12">
            <div className="sectionTitle">
              <h1 className="mb-4 fw-bold">TreksSafari Bookings!</h1>
              <p>All hikes bookings, includes completed and the upcoming bookings!</p>
            </div>

            <div className="table-responsive">
              <table className="table table-bordered table-hover align-middle mb-0">
                <thead className="table-success">
                  <tr>
                    <th>Name of the Mountain</th>
                    <th>Price</th>
                    <th>Guest Name</th>
                    <th>Nationality</th>
                    <th>Contact</th>
                    <th>Email</th>
                    <th>Number of People</th>
                    <th>Number of Children</th>
                    <th>Arrival Date</th>
                    <th>Status</th>
                    <th>Message</th>
                    <th>Guide</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map(booking => (
                    <tr key={booking.id}>
                      <td>{booking.safariname}</td>
                      <td>{booking.price}</td>
                      <td>{booking.guestName}</td>
                      <td>{booking.nationality}</td>
                      <td>{booking.contact}</td>
                      <td>{booking.email}</td>
                      <td>{booking.nop}</td>
                      <td>{booking.noc}</td>
                      <td>{booking.arrivalDate}</td>
                      <td>{booking.status}</td>
                      <td>{booking.message || "No message provided"}</td>
                      <td>{booking.guide ? booking.guide.name : "No guide assigned"}</td>
                      <td className="text-center">
                      <Link to={`/bookingdetails/${booking.id}`} className="icon">
                        <TbListDetails size={30} style={{ color: '#3f6b29' }} /> {/* Set your desired color */}
                      </Link>

                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookings;
