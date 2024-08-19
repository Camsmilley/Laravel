import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import HeaderDash from './HeaderDashboard/HeaderDash';
import "./Dashboard.css";
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
    guideId: ''
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
      <div className="OutletCSS">
        <div className="pageBody">
          <div className="sectionTitle">
            <h1>Edit Booking</h1>
            <p>Edit your booking details!</p>
          </div>

          <form onSubmit={handleSubmit} className="formDiv grid">
            <div className="fieldDiv">
              <label htmlFor="safariname">Name of the Mountain</label>
              <input
                type="text"
                id="safariname"
                name="safariname"
                value={formData.safariname}
                onChange={handleChange}
                placeholder="Enter Mountain"
              />
            </div>

            <div className="fieldDiv">
              <label htmlFor="guestName">Guest Name</label>
              <input
                type="text"
                id="guestName"
                name="guestName"
                value={formData.guestName}
                onChange={handleChange}
                placeholder="Enter Name"
              />
            </div>

            <div className="fieldDiv">
              <label htmlFor="nationality">Nationality</label>
              <input
                type="text"
                id="nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                placeholder="Enter Nationality"
              />
            </div>

            <div className="fieldDiv">
              <label htmlFor="contact">Contact Number</label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Enter Contact Number"
              />
            </div>

            <div className="fieldDiv">
              <label htmlFor="email">Guest Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
              />
            </div>

            <div className="fieldDiv">
              <label htmlFor="nop">Total Number of People</label>
              <input
                type="number"
                id="nop"
                name="nop"
                value={formData.nop}
                onChange={handleChange}
                placeholder="Total number of people"
              />
            </div>

            <div className="fieldDiv">
              <label htmlFor="noc">Number of Children</label>
              <input
                type="number"
                id="noc"
                name="noc"
                value={formData.noc}
                onChange={handleChange}
                placeholder="Number of children"
              />
            </div>

            <div className="fieldDiv">
              <label htmlFor="arrivalDate">Arrival Date</label>
              <input
                type="datetime-local"
                id="arrivalDate"
                name="arrivalDate"
                value={formData.arrivalDate}
                onChange={handleChange}
                placeholder="Select Arrival Date"
              />
            </div>

            <div className="fieldDiv">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter any additional information"
              />
            </div>

            <div className="fieldDiv">
              <label htmlFor="guideId">Guide</label>
              <select
                id="guideId"
                name="guideId"
                value={formData.guideId}
                onChange={handleChange}
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

            <button type="submit" className="btn flex addBookingBtn">
              Update Booking <AiOutlinePlus className="icon" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditBooking;
