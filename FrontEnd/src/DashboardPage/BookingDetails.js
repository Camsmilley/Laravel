import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Axios from 'axios';
import HeaderDash from './HeaderDashboard/HeaderDash';
import { BiEdit } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai'; // For consistency in icon usage
import "./Dashboard.css";
import { MdMargin } from 'react-icons/md';

const BookingDetails = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get(`http://localhost:8000/api/bookings/${id}`)
      .then(response => {
        setBooking(response.data);
      })
      .catch(error => {
        console.error('Error fetching booking details:', error);
      });
  }, [id]);

  const handleDelete = () => {
    Axios.delete(`http://localhost:8000/api/bookings/${id}`)
      .then(response => {
        navigate('/bookings'); // Redirect to bookings list
      })
      .catch(error => {
        console.error('Error deleting booking:', error);
      });
  };

  if (!booking) return <p>Loading...</p>;

  return (
    <>
      <HeaderDash />
      <div className="OutletCSS">
        <div className="pageBody">
          <div className="sectionTitle">
            <h1>Booking Details</h1>
            <p>Full details of the booking submitted by the guest!</p>
          </div>

          <div className="formDiv grid">
            <div className="fieldDiv">
              <label htmlFor="safariname" className="title">Name of the Mountain</label>
              <input
                type="text"
                id="safariname"
                name="safariname"
                value={booking.safariname}
                readOnly
                className="readonlyInput"
              />
            </div>

            <div className="fieldDiv">
              <label htmlFor="guestName" className="title">Guest Name</label>
              <input
                type="text"
                id="guestName"
                name="guestName"
                value={booking.guestName}
                readOnly
                className="readonlyInput"
              />
            </div>

            <div className="fieldDiv">
              <label htmlFor="nationality" className="title">Nationality</label>
              <input
                type="text"
                id="nationality"
                name="nationality"
                value={booking.nationality}
                readOnly
                className="readonlyInput"
              />
            </div>

            <div className="fieldDiv">
              <label htmlFor="contact" className="title">Phone</label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={booking.contact}
                readOnly
                className="readonlyInput"
              />
            </div>

            <div className="fieldDiv">
              <label htmlFor="email" className="title">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={booking.email}
                readOnly
                className="readonlyInput"
              />
            </div>

            <div className="fieldDiv">
              <label htmlFor="arrivalDate" className="title">Arrival Date</label>
              <input
                type="text"
                id="arrivalDate"
                name="arrivalDate"
                value={new Date(booking.arrivalDate).toLocaleDateString()}
                readOnly
                className="readonlyInput"
              />
            </div>

            <div className="fieldDiv">
              <label htmlFor="nop" className="title">Number of People</label>
              <input
                type="text"
                id="nop"
                name="nop"
                value={booking.nop}
                readOnly
                className="readonlyInput"
              />
            </div>

            <div className="fieldDiv">
              <label htmlFor="noc" className="title">Number of Children</label>
              <input
                type="text"
                id="noc"
                name="noc"
                value={booking.noc}
                readOnly
                className="readonlyInput"
              />
            </div>

            <div className="fieldDiv">
              <label htmlFor="message" className="title">Guest Message</label>
              <textarea
                id="message"
                name="message"
                value={booking.message}
                readOnly
                className="readonlyTextarea"
              />
            </div>
          </div>

          <div className="actions flex"
              style={{
                // display: 'flex',
                // justifyContent: 'flex-end',
                marginLeft: '80%'  // Adjust this value as needed
              }}
            >
              <Link to={`/editbooking/${id}`} className="btn editBtn">
                <BiEdit className="icon" /> Edit
              </Link>
              <button onClick={handleDelete} className="btn deleteBtn" style={{
                // display: 'flex',
                // justifyContent: 'flex-end',
                marginLeft: '1rem'  // Adjust this value as needed
              }}>
                Delete Booking <AiOutlinePlus className="icon" />
              </button>
            </div>

        </div>
      </div>
    </>
  );
};

export default BookingDetails;
