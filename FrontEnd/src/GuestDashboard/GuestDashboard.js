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
        </div>

        <div className='bottomSection'>
  <span className="title">Popular Tours</span>
  <div className="toursContainer flex">
   <div id="carouselExampleCaptions" className="carousel slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="2000">
        <img src={img}/>
        <div className="carousel-caption">
          <h1 className="display-2">Mount Pinatubo</h1>
        </div>
      </div>
      <div className="carousel-item">
        <img src={img1}/>
        <div className="carousel-caption">
          <h1 className="display-2">Mount Balutao</h1>
        </div>
      </div>
      <div className="carousel-item">
        <img src={img2}/>
        <div className="carousel-caption">
          <h1 className="display-2">Mount Maculot</h1>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  </div>
                </div>
              </div>
              </div>
       
    </>
  );
};

export default GuestDashboard;