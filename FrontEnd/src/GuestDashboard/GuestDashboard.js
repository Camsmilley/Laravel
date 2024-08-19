import React from "react";
import "./GuestDashboard.css";
import Video from "../assets/video1.mp4";
import GuestHeader from "./GuestHeader/GuestHeader";
import Carousel from "./Carousel";

const GuestDashboard = () => {
  return (
    <>
      <GuestHeader />
      <div className="OutletCSS">
        <div className="pageBody">
          <div className="topSection">
            <div className="sectionTitle">
              <h1>Treks Safari Guest Dashboard</h1>
              <p>This is where everything starts to happen!</p>
            </div>

            <div className="video_Summary">
              <div className="flexLeft flex">
                <div className="videoDiv">
                  <video src={Video} autoPlay loop muted></video>
                </div>
                <div className="videoText">
                  <h4>Looking an extraordinary service for the community!</h4>

                  <div className="btns flex">
                    <a href="#" className="link bg">
                      We based to serve
                    </a>
                    <a href="#" className="link ">
                      Love for the Hikes
                    </a>
                  </div>
                </div>
              </div>

              <div className="flexRight">
                <span>Your Booking</span>
                <div className="singleBooking">
                 
                </div>
              </div>
            </div>

            <div className="bottomSection">
              <span className="title">Popular Tours</span>
              <Carousel />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuestDashboard;