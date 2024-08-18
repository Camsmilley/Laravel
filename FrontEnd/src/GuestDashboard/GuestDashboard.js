import "./GuestDashboard.css";

import Video from "../assets/video1.mp4";
import img from "../assets/card1.jpg";
import img1 from "../assets/mountapo.png";
import img2 from "../assets/mtbalutao.webp";
import img3 from "../assets/mtmaculot.jpg";
import img4 from "../assets/mtulap.jpg";
import img5 from "../assets/mtpinatubo.webp"

import { BsFillPersonCheckFill } from "react-icons/bs";
import GuestHeader from "./GuestHeader/GuestHeader";
import Carousel from "./Carousel";


const GuestDashboard = () => {
 
  return (
    <>
   <GuestHeader/>
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
                  <a src='' className="link bg">
                    We based to serve
                  </a>
                  <a src='' className="link ">
                    Love for the Hikes
                  </a>
                </div>
              </div>
            </div>

            <div className="flexRight">
              <span>Upcoming Bookings</span>
              
                <div className="singleBooking" >
                  <span>Booking Name</span>
                  <div className="flex">
                    <small>Number of person People</small>
                    <small>Booking Date </small>
                  </div>
                </div>
            </div>
            
          </div>

          <div className='bottomSection'>
  <span className="title">  Popular Tours</span>
        </div>
         </div>
         </div>
              </div>
              
              <Carousel/>
       
    </>
  );
};

export default GuestDashboard;