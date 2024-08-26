import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Axios from 'axios';
import HeaderDash from './HeaderDashboard/HeaderDash';
import { BiEdit } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai'; // For consistency in icon usage
import { MdMargin } from 'react-icons/md';
import { GiConfirmed } from "react-icons/gi";
import { FcCancel } from "react-icons/fc";

const BookingDetails = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBookingDetails();
  }, [id]);

  const fetchBookingDetails = () => {
    Axios.get(`http://localhost:8000/api/bookings/${id}`)
      .then(response => {
        setBooking(response.data);
      })
      .catch(error => {
        console.error('Error fetching booking details:', error);
      });
  };

  const handleDelete = () => {
    Axios.delete(`http://localhost:8000/api/bookings/${id}`)
      .then(response => {
        navigate('/bookings');
      })
      .catch(error => {
        console.error('Error deleting booking:', error);
      });
  };

  const handleStatusChange = (newStatus) => {
    Axios.put(`http://localhost:8000/api/bookings/${id}/status`, { status: newStatus })
      .then(response => {
        fetchBookingDetails(); // Refresh booking details after status change
      })
      .catch(error => {
        console.error('Error updating booking status:', error);
      });
  };

  if (!booking) return <p>Loading...</p>;

  return (
    <>
      <HeaderDash />
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-4 fw-bold">Booking Details</h1>
            <p className="mb-4">Full details of the booking submitted by the guest!</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="safariname" className="form-label">Name of the Mountain</label>
            <input
              type="text"
              id="safariname"
              name="safariname"
              value={booking.safariname}
              readOnly
              className="form-control"
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input
              type="text"
              id="price"
              name="price"
              value={booking.price}
              readOnly
              className="form-control"
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="guestName" className="form-label">Guest Name</label>
            <input
              type="text"
              id="guestName"
              name="guestName"
              value={booking.guestName}
              readOnly
              className="form-control"
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="nationality" className="form-label">Nationality</label>
            <input
              type="text"
              id="nationality"
              name="nationality"
              value={booking.nationality}
              readOnly
              className="form-control"
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="contact" className="form-label">Phone</label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={booking.contact}
              readOnly
              className="form-control"
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={booking.email}
              readOnly
              className="form-control"
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="arrivalDate" className="form-label">Arrival Date</label>
            <input
              type="text"
              id="arrivalDate"
              name="arrivalDate"
              value={new Date(booking.arrivalDate).toLocaleDateString()}
              readOnly
              className="form-control"
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="nop" className="form-label">Number of People</label>
            <input
              type="text"
              id="nop"
              name="nop"
              value={booking.nop}
              readOnly
              className="form-control"
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="noc" className="form-label">Number of Children</label>
            <input
              type="text"
              id="noc"
              name="noc"
              value={booking.noc}
              readOnly
              className="form-control"
            />
          </div>

          <div className="col-md-12 mb-3">
            <label htmlFor="message" className="form-label">Guest Message</label>
            <textarea
              id="message"
              name="message"
              value={booking.message}
              readOnly
              className="form-control"
              style={{ height: '100px' }}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="status" className="form-label">Status</label>
            <input
              type="text"
              id="status"
              name="status"
              value={booking.status || "pending"}
              readOnly
              className="form-control"
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="guide" className="form-label">Guide</label>
            <input
              type="text"
              id="guide"
              name="guide"
              value={booking.guide ? booking.guide.name : "No guide assigned"}
              readOnly
              className="form-control"
            />
          </div>
        </div>

        <div className="d-flex justify-content-end">
          {booking.status === 'pending' && (
            <>
              <button className="btn btn-success me-2" onClick={() => handleStatusChange('confirmed')}>
                <GiConfirmed className="icon" /> Confirm
              </button>
              <button className="btn btn-danger me-2" onClick={() => handleStatusChange('cancelled')}>
                <FcCancel className="icon" /> Cancel
              </button>
            </>
          )}
          <Link to={`/editbooking/${id}`} className="btn btn-primary me-2">
            <BiEdit className="icon" /> Edit
          </Link>
          <button onClick={handleDelete} className="btn btn-danger">
            Delete Booking <AiOutlinePlus className="icon" />
          </button>
        </div>
      </div>
    </>
  );
};

export default BookingDetails;
