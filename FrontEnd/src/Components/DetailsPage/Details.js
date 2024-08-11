import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Tour from "../../Components/HomePage/Tour/Tour";
import "./Details.css";
import "../../Components/HomePage/Tour/Tour.css";

// Imported Icons
import { BsFillPersonCheckFill } from "react-icons/bs";
import { AiOutlineFieldTime, AiOutlineStar } from "react-icons/ai";
import { FaBaby, FaCheck, FaShuttleVan } from "react-icons/fa";
import { MdWrongLocation } from "react-icons/md";

const Details = () => {
  const { id } = useParams();
  const [safari, setSafari] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    safariname: "",
    guestName: "",
    nationality: "",
    contact: "",
    email: "",
    nop: "",
    noc: "",
    arrivalDate: "",
    message: ""
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const fetchSafariDetails = async () => {
      try {
        const response = await Axios.get(`http://localhost:8000/api/safaris/${id}`);
        setSafari(response.data);
        setFormData(prevState => ({ ...prevState, safariname: response.data.title }));
      } catch (error) {
        console.error('Error fetching safari details:', error);
        setError('Failed to load safari details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchSafariDetails();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: name === 'nop' || name === 'noc' ? parseInt(value, 10) || '' : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);
    try {
      const response = await Axios.post('http://localhost:8000/api/bookings', formData);
      setSubmitStatus({ type: 'success', message: 'Booking submitted successfully!' });
      setFormData({
        safariname: safari?.title || "",
        guestName: "",
        nationality: "",
        contact: "",
        email: "",
        nop: "",
        noc: "",
        arrivalDate: "",
        message: ""
      });
    } catch (error) {
      console.error('Error submitting booking:', error.response?.data || error.message);
      setSubmitStatus({ type: 'error', message: 'Error submitting booking. Please try again.' });
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!safari) return <div>No safari details found.</div>;

  const renderList = (items) => {
    if (!items) return null;
    return items.split('\n').map((item, index) => (
      <React.Fragment key={index}>
        {item}<br/>
      </React.Fragment>
    ));
  };

  return (
    <>
      <Header />
      <div className="detailsPage grid container">
        <div className="imageDiv">
          <div className="imgText">
            <div className="stars flex">
              {[...Array(5)].map((_, i) => (
                <AiOutlineStar key={i} className="icon" />
              ))}
            </div>
            <h3>{safari.title}</h3>
          </div>
          {safari.image && <img src={`http://localhost:8000${safari.image}`} alt={safari.title} />}
        </div>
        <div className="detailsInfo">
          <span className="title">About this Item</span>
          <p>{safari.description}</p>
          <br/>
          {safari.inclusions && (
            <p>
              <FaCheck className="icon"/>INCLUSION:<br/>
              {renderList(safari.inclusions)}
            </p>
          )}
          <br/>
          {safari.exclusions && (
            <p>
              <MdWrongLocation className="icon"/>Exclusions:<br/>
              {renderList(safari.exclusions)}
            </p>
          )}
          <br/>
          {safari.additional_info && (
            <p>
              <FaShuttleVan className="icon"/> {safari.additional_info}
            </p>
          )}
          <div className="specs grid">
            <span className="detailsDiv flex">
              <BsFillPersonCheckFill className="icon" />
              <small className="infor">Minimum of guests: {safari.min_guests}</small>
            </span>
            <span className="detailsDiv flex">
              <AiOutlineFieldTime className="icon" />
              <small className="infor">Location: {safari.location}</small>
            </span>
            <span className="detailsDiv flex">
              <FaBaby className="icon" />
              <small className="infor">Price: &#8369;{safari.price} per joiner | no hidden charge</small>
            </span>
          </div>

          <div className="actionButtons flex">
            <span className="price">&#8369;{safari.price}</span>
          </div>

          <div className="bookingForm">
            <span className="title">Booking Form</span>
            <p>
              If you would like to be part of this amazing TreksSafari, please fill
              up this form!
            </p>
            {submitStatus && (
              <div className={`alert alert-${submitStatus.type}`}>
                {submitStatus.message}
              </div>
            )}
            <form onSubmit={handleSubmit} className="gridContainer grid">
              {Object.entries(formData).map(([key, value]) => (
                <div key={key} className="inputDiv">
                  <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</label>
                  {key === "message" ? (
                    <textarea
                      id={key}
                      name={key}
                      value={value}
                      onChange={handleInputChange}
                      placeholder={`Enter ${key}`}
                    />
                  ) : (
                    <input
                      type={key === "email" ? "email" : key === "arrivalDate" ? "datetime-local" : key === "nop" || key === "noc" ? "number" : "text"}
                      id={key}
                      name={key}
                      value={value}
                      onChange={handleInputChange}
                      placeholder={`Enter ${key}`}
                      required
                    />
                  )}
                </div>
              ))}
              <button type="submit" className="btn">Book TreksSafari</button>
            </form>
          </div>
        </div>
      </div>
      <Tour />
      <Footer />
    </>
  );
};

export default Details;