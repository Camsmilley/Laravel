import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Tour from "../../Components/HomePage/Tour/Tour";
import { AuthContext } from '../../Components/AuthContext'; // Import AuthContext
import "./Details.css";
import "../../Components/HomePage/Tour/Tour.css";

// Imported Icons
import { BsFillPersonCheckFill } from "react-icons/bs";
import { AiOutlineFieldTime, AiOutlineStar } from "react-icons/ai";
import { FaCheck, FaShuttleVan } from "react-icons/fa";
import { MdWrongLocation } from "react-icons/md";
import { IoPricetagsSharp } from "react-icons/io5";

const Details = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext); // Get user from context
  const [safari, setSafari] = useState(null);
  const [guides, setGuides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    safariname: "",
    guestName: user ? user.name : "", // Pre-fill with user's name
    nationality: "",
    contact: "",
    email: user ? user.email : "", // Pre-fill with user's email
    nop: "",
    noc: "",
    arrivalDate: "",
    message: "",
    guideId: "", // Add guideId to formData
    guestId: user ? user.id : "" // Add guestId to formData
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

    const fetchGuides = async () => {
      try {
        const response = await Axios.get('http://localhost:8000/api/guides');
        setGuides(response.data);
      } catch (error) {
        console.error('Error fetching guides:', error);
      }
    };

    fetchSafariDetails();
    fetchGuides();
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
        guestName: user ? user.name : "",
        nationality: "",
        contact: "",
        email: user ? user.email : "",
        nop: "",
        noc: "",
        arrivalDate: "",
        message: "",
        guideId: "", // Reset guideId
        guestId: user ? user.id : "" // Reset guestId
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
              <FaCheck className="icon"/> INCLUSION:<br/>
              {renderList(safari.inclusions)}
            </p>
          )}
          <br/>
          {safari.exclusions && (
            <p>
              <MdWrongLocation className="icon"/> Exclusions:<br/>
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
              <small className="infor">Time Estimate: {safari.time_estimate}</small>
            </span>
            <span className="detailsDiv flex">
              <IoPricetagsSharp className="icon" />
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
                  {key === "guestId" ? (
                    <input
                      type="hidden"
                      id={key}
                      name={key}
                      value={value}
                    />
                  ) : (
                    <>
                      <label htmlFor={key}>{key === "guideId" ? "Guide Name" : key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</label>
                      {key === "message" ? (
                        <textarea
                          id={key}
                          name={key}
                          value={value}
                          onChange={handleInputChange}
                          placeholder={`Enter ${key}`}
                        />
                      ) : key === "guideId" ? (
                        <select
                          id={key}
                          name={key}
                          value={value}
                          onChange={handleInputChange}
                          required
                          className="custom-select"
                        >
                          <option value="">Select Guide</option>
                          {guides.map(guide => (
                            <option key={guide.id} value={guide.id}>
                              {guide.name}
                            </option>
                          ))}
                        </select>
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
                    </>
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
      <style jsx>{`
        .custom-select {
          width: 100%;
          padding: 10px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 4px;
          background-color: #fff;
          color: #333;
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6"><path fill="%23333" d="M0 0l5 5 5-5H0z"/></svg>');
          background-repeat: no-repeat;
          background-position: right 10px center;
          transition: border-color 0.3s ease;
        }

        .custom-select:focus {
          border-color: #3f6b29;
          outline: none;
        }

        .custom-select option {
          padding: 10px;
          font-size: 16px;
          background-color: #fff;
          color: #333;
        }

        .custom-select option:hover {
          background-color: #f2f2f2;
        }
      `}</style>
    </>
  );
};

export default Details;
