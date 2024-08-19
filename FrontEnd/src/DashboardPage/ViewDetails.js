import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Axios from 'axios';
import "./Dashboard.css";

// Imported Icons
import { BsFillPersonCheckFill } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaBaby } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const ViewDetails = () => {
  const { id } = useParams();
  const [safari, setSafari] = useState(null);

  useEffect(() => {
    const fetchSafari = async () => {
      try {
        const response = await Axios.get(`http://localhost:8000/api/safaris/${id}`);
        setSafari(response.data);
      } catch (error) {
        console.error('Error fetching safari:', error);
      }
    };
    fetchSafari();
  }, [id]);

  if (!safari) return <div>Loading...</div>;

  return (
    <div className="OutletCSS">
      <div className="pageBody">
        <div className="sectionTitle flex">
          <div>
            <h1>Upcoming Hiking</h1>
            <p>Available Hikes added by admin!</p>
          </div>
        </div>

        <div className="SafariDetails grid">
          <div className="imageDiv">
            <div className="imgText">
              <div className="stars flex">
                <AiOutlineStar className="icon" />
                <AiOutlineStar className="icon" />
                <AiOutlineStar className="icon" />
                <AiOutlineStar className="icon" />
                <AiOutlineStar className="icon" />
              </div>
              <h3>{safari.title}</h3>
            </div>
            <img src={`http://localhost:8000${safari.image}`} alt={safari.title} />
          </div>
          <div className="detailsInfo">
            <span className="title">About this Item</span>
            <p>{safari.description}</p>
            <div className="specs grid">
              <span className="detailsDiv flex">
                <AiOutlineFieldTime className="icon" />
                <small className="infor">Location: {safari.location}</small>
              </span>
              <span className="detailsDiv flex">
                <BsFillPersonCheckFill className="icon" />
                <small className="infor">Minimum of guests: {safari.min_guests}</small>
              </span>
              {/* You might want to add a field for children's price in your Safari model */}
              <span className="detailsDiv flex">
                <FaBaby className="icon" />
                <small className="infor">Children Price: &#8369; {safari.children_price || 'N/A'}</small>
              </span>
            </div>

            <div className="actionButtons flex">
              <span className="price">Price: &#8369; {safari.price}</span>
              <Link to={`/edit/${safari.id}`} className="btn buyBtn">
                Edit TreksSafari
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;