import React from "react";
import "./Dashboard.css";

// Imported icons
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
import HeaderDash from "./HeaderDashboard/HeaderDash";

const Bookings = () => {

  return (
    <>
    <HeaderDash/>
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
                <th>ID</th>
                <th>Guest Name</th>
                <th>Guest Email</th>
                <th>Number of P'l</th>
                <th>Trek Type</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
                <tr className="tableRows flex">
                  <td>Booking ID</td>
                  <td>Guest Name</td>
                  <td>Email</td>
                  <td>Number of person</td>
                  <td>Booking TreksSafari</td>

                  <td>
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

export default Bookings;