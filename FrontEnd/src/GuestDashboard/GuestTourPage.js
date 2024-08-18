import "./GuestTourPage.css";
import video from '../assets/video1.mp4'



// Imported Icons
import { BsFillPersonCheckFill } from "react-icons/bs";
// import { AiOutlineFieldTime } from "react-icons/ai";
import { TbCurrencyPeso } from "react-icons/tb";
import { IoTimeOutline } from "react-icons/io5";
import img from '../assets/card1.jpg';
import GuestHeader from "./GuestHeader/GuestHeader";

const GuestTourPage = () => {
 
  return (
    <>
<GuestHeader/>

<div className="OutletCSS">
      <div className="pageBody">
        <div className="topSection">
          <div className="sectionTitle">
            <h1>Treks Safari Tours</h1>
            <p>Book Now!</p>
          </div>

          <div className="video_Summary">
            <div className="flexLeft flex">
              <div className="videoDiv">
                <video src={video} autoPlay loop muted></video>
              </div>
              <div className="videoText">
                <h4>Trek with us</h4>

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
        <div className="bottomSection">
          <span className="title">Popular Tours</span>
          <div className="toursContainer flex">
              <div className="singleTour grid">
                <div className="imgDiv">
                  
                    <img src={img}
                    />
                 
                </div>
                <div className="tourInfo">
                  <span className="tourTitle">Mount Pinatubo</span>
                  <div className="detailsDiv flex">
                    <BsFillPersonCheckFill className="icon" />

                    <small className="infor">
                      Minimum of Number of person guests :30 Person
                    </small>
                  </div>
                  <div className="detailsDiv flex">
                  <IoTimeOutline  className="icon" />

                    <small className="infor">
                      Time to Complete: 3hr 31m
                    </small>
                  </div>
                  <div className="detailsDiv flex">
                  <TbCurrencyPeso className="icon" />

                    <small className="infor">
                      Price: 1200 per Head
                    </small>
                  </div>
                  

                  {/* <Link
                    to={`/bookingDetails/${safari.id}`}
                    className="btn flex"
                  >
                    View Details <AiOutlineSwapRight className="icon" />
                  </Link> */}
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};



export default GuestTourPage;