import React, { useEffect, useState } from "react";
import Axios from "axios";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";
import { AiOutlineSwapRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Tour.css"; // Ensure your CSS file is correctly linked

const Tour = () => {
  const [safaris, setSafari] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const results = await Axios.get("http://localhost:8000/api/allHomeSafaris");
        setSafari(results.data);
      } catch (error) {
        console.error('Error fetching data:', error.response ? error.response.data : error.message);
      }
    };
    getData();
  }, []);

  return (
    <div className="tours container section">
      <div className="secContainer">
        <span className="secTitle">
          Available Hiking
          <p>Below are other trek safaris related to this!</p>
        </span>

        <div className="tourContainer grid">
          {safaris.map(safari => (
            <div className="singleTour grid" key={safari.id}>
              <div className="imgDiv">
                {/* Dynamically display the correct image for each safari */}
                <img src={`http://localhost:8000${safari.image}`} alt={safari.title} />
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                className="tourInfo"
              >
                <span className="tourTitle">{safari.title}</span>
                <div className="detailsDiv flex">
                  <BsFillPersonCheckFill className="icon" />
                  <small className="infor">Minimum of guests: {safari.min_guests}</small>
                </div>
                <div className="detailsDiv flex">
                  <AiOutlineFieldTime className="icon" />
                  <small className="infor">Location: {safari.location}</small>
                </div>
                <Link to={`/details/${safari.id}`} className="btn flex">
                  View Details <AiOutlineSwapRight className="icon" />
                </Link>
              </div>
              <span className="price">&#8369;{safari.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tour;
