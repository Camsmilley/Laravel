import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import HeaderDash from './HeaderDashboard/HeaderDash';
import { AiOutlinePlus } from "react-icons/ai";

const EditBooking = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    safariname: '',
    guestName: '',
    nationality: '',
    contact: '',
    email: '',
    nop: '',
    noc: '',
    arrivalDate: '',
    message: '',
    guideId: '',
    status: '' // Add status to formData
  });

  const [guides, setGuides] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get(`http://localhost:8000/api/bookings/${id}`)
      .then(response => {
        setFormData(response.data);
      })
      .catch(error => {
        console.error('Error fetching booking details:', error);
      });

    Axios.get('http://localhost:8000/api/guides')
      .then(response => {
        setGuides(response.data);
      })
      .catch(error => {
        console.error('Error fetching guides:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.put(`http://localhost:8000/api/bookings/${id}`, formData)
      .then(response => {
        navigate('/bookings'); // Redirect to bookings list
      })
      .catch(error => {
        console.error('Error updating booking:', error);
      });
  };

  return (
    <>
      <HeaderDash />
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-4 fw-bold">Edit Booking</h1>
            <p className="mb-4">Edit your booking details!</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-6">
            <label htmlFor="safariname" className="form-label">Name of the Mountain</label>
            <input
              type="text"
              id="safariname"
              name="safariname"
              value={formData.safariname}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter Mountain"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="price" className="form-label">Price</label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter Price"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="guestName" className="form-label">Guest Name</label>
            <input
              type="text"
              id="guestName"
              name="guestName"
              value={formData.guestName}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter Name"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="nationality" className="form-label">Nationality</label>
            <input
              type="text"
              id="nationality"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter Nationality"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="contact" className="form-label">Contact Number</label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter Contact Number"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="email" className="form-label">Guest Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter Email"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="nop" className="form-label">Total Number of People</label>
            <input
              type="number"
              id="nop"
              name="nop"
              value={formData.nop}
              onChange={handleChange}
              className="form-control"
              placeholder="Total number of people"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="noc" className="form-label">Number of Children</label>
            <input
              type="number"
              id="noc"
              name="noc"
              value={formData.noc}
              onChange={handleChange}
              className="form-control"
              placeholder="Number of children"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="arrivalDate" className="form-label">Arrival Date</label>
            <input
              type="datetime-local"
              id="arrivalDate"
              name="arrivalDate"
              value={formData.arrivalDate}
              onChange={handleChange}
              className="form-control"
              placeholder="Select Arrival Date"
            />
          </div>

          <div className="col-md-12">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter any additional information"
              style={{ height: '100px' }}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="status" className="form-label">Booking Status</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select Status</option>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          <div className="col-md-6">
            <label htmlFor="guideId" className="form-label">Guide</label>
            <select
              id="guideId"
              name="guideId"
              value={formData.guideId}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select Guide</option>
              {guides.map(guide => (
                <option key={guide.id} value={guide.id}>
                  {guide.name}
                </option>
              ))}
            </select>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Update Booking <AiOutlinePlus className="icon" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditBooking;
