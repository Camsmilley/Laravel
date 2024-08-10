import React, { useEffect, useRef, useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "./Details.css";
import "../../Components/HomePage/Tour/Tour.css"
import img from '../../assets/card1.jpg'


// Imported Icons
import { BsFillPersonCheckFill } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaBaby } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import Tour from "../../Components/HomePage/Tour/Tour";


const Details = () => {
 

  return (
    <>
      <Header />
        <div className="detailsPage grid container">
          <div className="imageDiv">
            <div className="imgText">
              <div className="stars flex">
                <AiOutlineStar className="icon" />
                <AiOutlineStar className="icon" />
                <AiOutlineStar className="icon" />
                <AiOutlineStar className="icon" />
                <AiOutlineStar className="icon" />
              </div>
              <h3>Mount Pulag</h3>
            </div>
            
              <img
                src={img}
                alt=""
              />

          </div>
          <div className="detailsInfo">
            <span className="title">About this Item</span>
            <p>Price depends on your headcount Rate starts around Php800/person
                 INCLUSIONS: ✔ Service of a guide
                  ✔ All the fees ✔ All the permits + Optional add-on:
                   Pick up and drop off from/to any point of Luzon (Baguio, Metro Manila, Bulacan, Cavite...) </p>
            <div className="specs grid">
              <span className="detailsDiv flex">
                <AiOutlineFieldTime className="icon" />
                <small className="infor">Minimum of 25 guests</small>
              </span>
              <span className="detailsDiv flex">
                <BsFillPersonCheckFill className="icon" />
                <small className="infor">
                  Minimum of guests
                </small>
              </span>
              <span className="detailsDiv flex">
                <FaBaby className="icon" />
                <small className="infor">
                  price: &#8369;350
                </small>
              </span>
            </div>

            <div className="actionButtons flex">
              <span className="price">&#8369;800</span>
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
                    name="role"
                    value="guest"
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

                <button className="btn">
                  Book TreksSafari
                </button>
              </div>
            </div>
          </div>
        </div>
      

      <Tour />
      <Footer />
    </>
  );
};

export default Details;