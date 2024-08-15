import React, { useEffect, useState } from "react";
import "./Dashboard.css";


// Imported Icons
import { AiFillDelete } from "react-icons/ai";
import HeaderDash from "./HeaderDashboard/HeaderDash";


const BookingDetails = () => {

  return (
    <>
    <HeaderDash/>
    <div className="OutletCSS">
      <div className="pageBody">
        <div className="sectionTitle flex">
          <div>
            <h1>Single Booking Details</h1>
            <p>Full details of the booking submitted by the guest!</p>
          </div>
        </div>

        <div className="detailContainer">
          <span className="topCard flex">
            <span>Mount Apo Experience</span>
            <button className="btn flex">
              Delete Booking <AiFillDelete className="icon" />
            </button>
          </span>
              <div className="guestDetails grid" >
                <div className="flex">
                  <span className="title">Guest Name</span>
                  <span>Guest Name</span>
                </div>
                <div className="flex">
                  <span className="title">Nationlity</span>
                  <span>Nationality</span>
                </div>
                <div className="flex">
                  <span className="title">Phone</span>
                  <span>Contact</span>
                </div>
                <div className="flex">
                  <span className="title">Email</span>
                  <span>Email</span>
                </div>

                <div className="flex">
                  <span className="title">Arrival Date</span>
                  <span>Date</span>
                </div>
                <div className="flex">
                  <span className="title">Number of People</span>
                  <span>Number of People</span>
                </div>

                <div className="flex">
                  <span className="title">Number of Children</span>
                  <span>Number of Children</span>
                </div>
                <div className="grid">
                  <span
                    className="title"
                    style={{
                      color: "#FFC700",
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                  >
                    Guest Message
                  </span>
                  <span className="title">Guest Message</span>
                </div>
              </div>
           
        </div>
      </div>
    </div>
    </>
  );
};

export default BookingDetails;