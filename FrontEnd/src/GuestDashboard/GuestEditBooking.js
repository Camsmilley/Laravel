import React from 'react'

import "./GuestDashboard.css"

import { AiOutlinePlus } from "react-icons/ai";


const GuestEditBooking = () => {
  return (
    <div>
      <div className="OutletCSS">
      <div className="pageBody">
        <div className="sectionTitle">
          <h1>Edit Bookings</h1>
          <p>Edit youir Book!</p>
        </div>

        <form action="" encType="multipart/form-data">
          <div className="formDiv grid">
            <div className="fieldDiv ">
              <label htmlFor="safariName"> Name of the Mountain</label>
              <input
                type="text"
                id="safariName"
                placeholder="Enter Mountain"
              />
            </div>

            <div className="fieldDiv">
              <label htmlFor="name">Guest Name</label>
              <input
                type="name"
                id="name"
                placeholder="Enter Name "
              />
            </div>

            <div className="fieldDiv">
              <label htmlFor="email">Guest Email</label>
              <input
                type="text"
                id="email"
                placeholder="Enter Email "
              />
            </div>

            <div className="fieldDiv">
              <label htmlFor="childPrice">Total of People</label>
              <input
                type="number"
                id="totalguest"
                placeholder="Whats the max number of guests"
              />
            </div>

            <div className="fieldDiv">
              <label htmlFor="totalGuests">Number of Childern</label>
              <input
                type="number"
                id="totalchild"
                placeholder="Whats the max number of children?"
              />
            </div>

            <div className="fieldDiv">
              <label htmlFor="type">Trek Type</label>

              <textarea
                type="text"
                name="type"
                placeholder="Enter Type"
              ></textarea>
            </div>

            <button  className="flex addSafariBtn">
              Edit Booking <AiOutlinePlus className="icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default GuestEditBooking
