// import React, { useEffect, useState } from "react";
import "./GuestDashboard.css";

// Imported icons
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
import GuestHeader from "./GuestHeader/GuestHeader";
import { BiEdit } from "react-icons/bi";

const GuestBookings = () => {

  return (
    <>
    <GuestHeader/>
    <div className="OutletCSS">
      <div className="pageBody">
        <div className="sectionTitle">
          <h1>TreksSafari Bookings!</h1>
          <p>
            All hikes bookings, includes completed and the upcoming bookings!
          </p>
        </div>

        <div className="tableDiv">
          <table>
            <thead>
              <tr className="tableHeaders flex">
              <th>Name of the Mountain</th>
                <th>Guest Name</th>
                <th>Guest Email</th>
                <th>Number of People</th>
                <th>Number of Children</th>
                <th>Trek Type</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
                <tr className="tableRows flex">
                <td>Mount Pinatubos</td>
                  <td>Guest Name</td>
                  <td>Email</td>
                  <th>Number of People</th>
                  <td>Number of person</td>
                  <td>Booking TreksSafari</td>


                  <td>
                  <Link to='/guesteditbooking' className="icon">
                  <BiEdit /></Link>
                    <Link to='/bookingdetails'>
                      <TbListDetails className="icon" />
                    </Link>
                  </td>
                </tr>
            
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
};

export default GuestBookings;