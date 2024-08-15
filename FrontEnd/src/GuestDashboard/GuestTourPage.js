import React, { useEffect, useRef, useState } from "react";
import Header from "../Components/Header";
import "./GuestTourPage.css";



// Imported Icons
import { BsFillPersonCheckFill } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaBaby } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import img from '../assets/card1.jpg';
import GuestHeader from "./GuestHeader/GuestHeader";

const GuestTourPage = () => {
 
  return (
    <>
<GuestHeader/>

        <div className="detailsPage grid container" >
          <div className="imageDiv">
            <div className="imgText">
              <div className="stars flex">
                
              </div>
             
            </div>
            
            
          </div>
          <div className="detailsInfo">
            <span className="title">Trek Schedule</span>
            <p>Description</p>
            <div className="specs grid">
              <span className="detailsDiv flex">
                <AiOutlineFieldTime className="icson" />
                <small className="infor">Time</small>
              </span>
              <span className="detailsDiv flex">
                <BsFillPersonCheckFill className="icon" />
                <small className="infor">
                  Minimum of people guests
                </small>
              </span>
              <span className="detailsDiv flex">
                <FaBaby className="icon" />
                <small className="infor">
               price: &#8369;
                </small>
              </span>
            </div>

            <div className="actionButtons flex">
              <span className="price">&#8369;</span>
            </div>

            <div className="bookingForm">
              <span className="title">Booking Form</span>
              <p>
                If you would like to be part of this amazing TreksSafari, please fill
                up this form!
              </p>

              {/* Booking Form */}

              <div className="gridContainer grid">
                <div className="inputDiv">
                  <label htmlFor="safariname">TreksSafari Name</label>
                  <input
                    type="text"
                    id="safariname"
                    name="safariname"
                  />
                  <input
                    type="hidden"
                    value="guest"
                    readOnly
                  />
                  <input
                    type="hidden"
                    name="safariPrice"
            
                  />
                  <input
                    type="hidden"
                    name="childPrice"
                  />
                </div>
                <div className="inputDiv">
                  <label htmlFor="name">Guest Name</label>
                  <input
                    type="text"
                    id="name"
                    name="guestName"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="inputDiv">
                  <label htmlFor="Nationality">Nationality</label>
                  <input
                    type="text"
                    id="Nationality"
                    name="nationality"
                    placeholder="Enter your nationality"
                  />
                </div>
                <div className="inputDiv">
                  <label htmlFor="number">Guest Contact</label>
                  <input
                    type="number"
                    id="number"
                    name="contact"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="inputDiv">
                  <label htmlFor="email">Guest Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="inputDiv">
                  <label htmlFor="nop">Number of people</label>
                  <input
                    type="number"
                    id="nop"
                    name="nop"
                    placeholder="Enter number of people"
                  />
                </div>
                <div className="inputDiv">
                  <label htmlFor="noc">Number of Children</label>
                  <input
                    type="number"
                    id="noc"
                    name="noc"
                    placeholder="Number of Children"
                  />
                </div>
                <div className="inputDiv">
                  <label htmlFor="time">Arrival Date & Time</label>
                  <input
                    type="datetime-local"
                    id="time"
                    name="arrivalDate"
                  />
                </div>

                <div className="inputDiv">
                  <label htmlFor="message">Guest Message</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Enter an message we need to know"
                  ></textarea>
                </div>

                <button  className="btn">
                  Book TreksSafari
                </button>
              </div>
            </div>
          </div>
        </div>

 
    </>
  );
};


export default GuestTourPage;