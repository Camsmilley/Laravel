import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Axios from 'axios';
import HeaderDash from "./HeaderDashboard/HeaderDash";
import './ViewDetails.css';

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
    <>
      <HeaderDash />
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="sectionTitle">
              <h1 className='fw-bold'>Upcoming Hiking</h1>
              <p>Available Hikes added by admin!</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="imageDiv">
              <div className="imgText">
                <h3 className='title-color fw-bold'>{safari.title}</h3>
                <div className="stars">
                  <AiOutlineStar className="icon" />
                  <AiOutlineStar className="icon" />
                  <AiOutlineStar className="icon" />
                  <AiOutlineStar className="icon" />
                  <AiOutlineStar className="icon" />
                </div>
              </div>
              <img src={`http://localhost:8000${safari.image}`} alt={safari.title} className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="detailsInfo">
              <h2 className="title">About this Item</h2>
              <p>{safari.description}</p>
              <div className="specs">
                <div className="detailsDiv d-flex align-items-center mb-2">
                  <AiOutlineFieldTime className="icon me-2" />
                  <small className="infor">Location: {safari.location}</small>
                </div>
                <div className="detailsDiv d-flex align-items-center mb-2">
                  <BsFillPersonCheckFill className="icon me-2" />
                  <small className="infor">Minimum of guests: {safari.min_guests}</small>
                </div>
                <div className="detailsDiv d-flex align-items-center mb-2">
                  <FaBaby className="icon me-2" />
                  <small className="infor">Children Price: &#8369; {safari.children_price || 'N/A'}</small>
                </div>
              </div>

              <div className="actionButtons d-flex justify-content-between align-items-center mt-4">
                <p className="price">Price: &#8369; {safari.price}</p>
                <Link to={`/edit/${safari.id}`} className="btn btn-primary">
                  Edit TreksSafari
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewDetails;
