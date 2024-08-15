import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import img from '../assets/card1.jpg'

// Imported Images

// Imported Icons
import { AiOutlineSwapRight } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import HeaderDash from "./HeaderDashboard/HeaderDash";

const ToursPage = () => {

  return (
    <>
    <HeaderDash/>
    <div className="OutletCSS">
      <div className="pageBody">
        <div className="sectionTitle flex">
          <div>
            <h1>Upcoming Hikes</h1>
            <p>Available Hikes added by admin!</p>
          </div>
          <Link to="/add" className="btn flex">
            Add Treks Safari <AiOutlinePlus className="icon" />
          </Link>
        </div>

        <div className="tourContainer grid">
         
            <div className="singleTour grid">
              <div className="imgDiv">
                  <img
                    src={img}
                  />
              </div>
              <div className="tourInfo">
                <span className="tourTitle">Mount Apo</span>

                <div className="btns flex">
                  <Link to='/viewdetails' className="btn flex">
                    View Details <AiOutlineSwapRight className="icon" />
                  </Link>
                  <button
                    className="btn flex"
                  >
                    Delete Item <AiFillDelete className="icon" />
                  </button>
                </div>
              </div>
            </div>
          
        </div>
      </div>
    </div>
    </>
  );
};

export default ToursPage;